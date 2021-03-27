const os = require('os')
const exec = require('child_process').exec;
const platform = os.platform()

const cmd = {
    win32: "%cd%/bin/windows/inspector.exe",
    darwin: "open ./bin/macosx/inspector.app",
    linux: ""
}

exec(cmd[platform], (err, stdout) => {
    err && console.log(err);
    stdout && console.log(stdout);
})