import {promisify} from 'node-promise-es6';
import * as fse from 'fs-extra';

// export * from 'fs-extra';
/* eslint-disable */
export const copySync = fse.copySync;
export const createOutputStream = fse.createOutputStream;
export const emptyDirSync = fse.emptyDirSync;
export const ensureFileSync = fse.ensureFileSync;
export const ensureDirSync = fse.ensureDirSync;
export const ensureLinkSync = fse.ensureLinkSync;
export const ensureSymlinkSync = fse.ensureSymlinkSync;
export const mkdirsSync = fse.mkdirsSync;
export const outputFileSync = fse.outputFileSync;
export const outputJsonSync = fse.outputJsonSync;
export const readJsonSync = fse.readJsonSync;
export const removeSync = fse.removeSync;
export const walk = fse.walk;
export const writeJsonSync = fse.writeJsonSync;
/* eslint-enable */

export const copy = promisify(fse.copy);
export const emptyDir = promisify(fse.emptyDir);
export const ensureFile = promisify(fse.ensureFile);
export const ensureDir = promisify(fse.ensureDir);
export const ensureLink = promisify(fse.ensureLink);
export const ensureSymlink = promisify(fse.ensureSymlink);
export const mkdirs = promisify(fse.mkdirs);
export const move = promisify(fse.move);
export const outputFile = promisify(fse.outputFile);
export const outputJson = promisify(fse.outputJson);
export const readJson = promisify(fse.readJson);
export const remove = promisify(fse.remove);
export const writeJson = promisify(fse.writeJson);
