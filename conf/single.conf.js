exports.config = {
  'specs': [ '../specs/single.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'mukulgupta5',
    'browserstack.key': 'djZbvqqj2K5iddUpLZso',
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  }
};
