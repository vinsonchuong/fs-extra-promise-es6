import path from 'path';
import * as fse from 'fs-extra-promise-es6';

describe('fs-extra-promise-es6', () => {
  it('wraps fs-extra with native promises', async () => {
    const promise = fse.readJson(path.resolve(__dirname, '../package.json'));
    expect(promise instanceof Promise).toBe(true);

    expect(await promise).toEqual(jasmine.objectContaining({
      name: 'fs-extra-promise-es6'
    }));
  });

  it('re-exports the non-async fs-extra functions', () => {
    /* eslint-disable */
    expect(fse.copySync).toBeDefined();
    /* eslint-enable */
    expect(fse.createOutputStream).toBeDefined();
  });
});
