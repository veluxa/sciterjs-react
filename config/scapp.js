const os = require('os')
const exec = require('child_process').exec;
const platform = os.platform()

const cmd = {
    win32: "%cd%/bin/windows/scapp.exe ./dist/index.html",
    darwin: "./bin/macosx/scapp ./dist/index.html",
    linux: ""
}

exec(cmd[platform], (err, stdout) => {
    err && console.log(err);
    stdout && console.log(stdout);
})