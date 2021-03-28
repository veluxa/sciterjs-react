const os = require('os')
const fs = require('fs');
const path = require('path')
const mkdirp = require('mkdirp');
const request = require('request')

const platform = os.platform()

const baseUri = "https://github.com/c-smile/sciter-js-sdk/raw/main/bin/"

const dir = {
    win32: "windows/x32/",
    darwin: "macosx/",
    linux: "linux/x64/"
}

const bin = {
    win32: ["scapp.exe", "inspector.exe", "sciter.dll"],
    darwin: ["scapp", "libsciter.dylib", "sciter-osx-64.dylib", "packfolder", "qjs", "qjsc"],
    linux: ["scapp", "libsciter-gtk.so", "inspector"]
}


const downDir = path.resolve(__dirname, getOSDir(dir[platform]))
const binList = fs.readdirSync(downDir)

function getOSDir(str) {
    return str.substring(0, str.indexOf('/'))
}

function writer(file) {
    file = path.normalize(file);
    mkdirp.sync(path.dirname(file));
    return fs.createWriteStream(file);
}

function download(url, path, file) {
    console.log(`downloading ${file}`);
    return new Promise((res, rej) => {
        const write = writer(path).on('finish', function (_) {
            console.log(`${file} finished`)
            return res(file)
        }).on('error', function (err) { rej(err) })
        request({ url }).pipe(write)
    })
}

function setup() {

    let times = 0
    function notice() {
        times += 1;
        console.info(`Download the sciter bootloader file to the bin directory, if the download is not responding for a long time, please abort and manually move the file to the bin corresponding desktop system directory after downloading.
    
        url: ${baseUri}${dir[platform]}
        `);
    }

    let task = bin[platform].map(function (b) {
        if (!binList.includes(b)) {
            !times && notice()
            let url = `${baseUri}${dir[platform]}${b}`
            let path = `${downDir}\\${b}`
            return download(url, path, b)
        }
        return true
    })
    return Promise.all(task)
}

module.exports = {
    setup
}