const webpack = require('webpack');
const config = require("./prod")
const { setup } = require("../bin")

const cmd = {
    win32: "%cd%/bin/windows/scapp.exe ./dist/index.html",
    darwin: "./bin/macosx/scapp ./dist/index.html",
    linux: "./bin/linux ./dist/index.html"
}

let BUILD = process.argv[2] || "app"

webpack(config({ BUILD }),
    (err, stats) => {
        if (err || stats.hasErrors()) {
            console.log(err);

        } else if (BUILD !== "web") {

            setup().then(res => {
                const os = require('os')
                const platform = os.platform()
                const exec = require('child_process').exec;

                exec(cmd[platform], (err, stdout) => {
                    err && console.log(err);
                    stdout && console.log(stdout);
                })
            }).catch(err => console.error(err))
        }
    }
);