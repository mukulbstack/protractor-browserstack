exports.config = {
  'specs': [ '../specs/single.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': process.env.SAUCE_USERNAME,
    'browserstack.key': process.env.SAUCE_ACCESS_KEY,
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  }
};
