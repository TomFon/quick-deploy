"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
function default_1(option) {
    const config = Object.assign(Object.assign({}, option), { isFile: false, isDirectory: false, basename: '', realRemotePath: '', realLocalPath: '', tmpPath: path_1.join(__dirname, '../../tmp/release-package.zip') });
    // absolute path
    config.realLocalPath = path_1.join(process.cwd(), config.localPath);
    config.realRemotePath = path_1.posix.join(config.remotePath, 'release-package.zip');
    if (fs_1.existsSync(config.realLocalPath)) {
        const stat = fs_1.lstatSync(config.realLocalPath);
        config.isFile = stat.isFile();
        config.isDirectory = stat.isDirectory();
        config.basename = path_1.basename(config.realLocalPath);
        config.extname = path_1.extname(config.realLocalPath);
    }
    else {
        throw new Error('localPath does not exist');
    }
    return config;
}
exports.default = default_1;