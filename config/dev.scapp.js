const express = require('express');
const webpack = require('webpack');
const path = require("path")
const exec = require('child_process').execFile;
const { merge } = require('webpack-merge');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackSciterjsHotMiddleware = require('sciterjs-hot-middleware')
const os = require('os')

const app = express();
const port = process.env['REACT_APP_PORT'] || 9000;
const config = require('./base.js')();
const compiler = webpack(merge(config, {
    mode: 'development',
    entry: {
        main: [
            "sciterjs-hot-middleware/client?timeout=20000&reload=true",
            "/src/index.jsx"
        ]
    },
}));
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    serverSideRender: false,
});
app.use(middleware);

app.use(
    webpackSciterjsHotMiddleware(compiler, {
        path: 'ws://127.0.0.1:9001/', heartbeat: 10 * 1000
    })
)

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Cache-Control', ' no-cache');
    res.sendFile('./public/index.html', { root: __dirname });
});

// Launch app
app.listen(port, () => {
    console.log(
        'Launching app... http://localhost:' + port + '\n'
    );

    const platform = os.platform()
    if (platform === "win32") {
        // SciterJsBrowser.exe [path] [width] [height]
        exec(`${path.resolve(__dirname, "../bin/windows/SciterJsBrowser.exe")}`, ["http://localhost:9000/"], function (err, stdout, stderr) {
            if (err) {
                console.error(err);
            }
        })
    } else {
        console.error("!!! The current dev:scapp command only supports win32");
    }
});