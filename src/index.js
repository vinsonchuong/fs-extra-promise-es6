import {promisify} from 'node-promise-es6';
import * as fse from 'fs-extra';

export * from 'fs-extra';

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
