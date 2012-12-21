/*jshint laxcomma: true, asi: true */

  var
    fs = require('fs'),

    init,
    createNewConfig,
    writeConfig,
    getApps,
    getApp,
    addApp,
    removeApp,

    start_home = process.env['HOME'] + '/.start',
    appsFileName = '/apps.json',
    appsJsonFile = start_home + appsFileName,

    configRef,
    blankConfig = {
      apps : [],
      aliases : {}
    };

  /**
   * If this is the first time the app has been run, create
   * ~/.start and ~/.start/apps.json
   */
  init = function () {
    // Make sure start's home directory exists
    if (!fs.existsSync(start_home)) {
      console.log('Initializing start for the first time. Creating config at [' + appsJsonFile + ']');
      fs.mkdirSync(start_home);
      configRef = blankConfig;
      writeConfig();
    } else {
      configRef = JSON.parse(fs.readFileSync(appsJsonFile));
    }
  };

  writeConfig = function () {
    if (configRef) {
      fs.writeFileSync(appsJsonFile, JSON.stringify(configRef));
    }
  };

  getApps = function () {
    return configRef.apps;
  };

  getApp = function (dir) {
    var theApp;

    getApps().forEach(function (app) {
      app.directories.forEach(function (appDir) {
        if (!theApp && appDir === dir) {
          theApp = app;
        }
      });
    });

    return theApp;
  };

  addApp = function (dir, command) {
    configRef.apps.push({
      "command" : command,
      "directories" : [ dir ]
    });

    writeConfig();
  };

  removeApp = function (dir) {
    configRef.apps = getApps().filter(function (app) {
      return (app.directories[0] !== dir);
    });

    writeConfig();
  };

  module.exports = {
    init    : init,
    getApps : getApps,
    getApp : getApp,
    addApp : addApp,
    removeApp : removeApp
  };
