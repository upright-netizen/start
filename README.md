# Deprecated! Do not use

> I have unpublished this from npm but am keeping it here for historic reasons. This was a novel idea, but soon after I discovered [npm scripts](https://docs.npmjs.com/misc/scripts) which are a way better idea.

start
=====
start your apps using the same command


How to use
----
    > cd /path/to/your/app;
    > start

*if you are running `start` for the first time, it will prompt you about what to do*

Behind the scenes
----
*start* creates a configuration file located at:

    ~/.start/apps.json

This file describe how to start an app or type of application.

    {
        "apps": [
            {
                "command": "node app.js",
                "directory": "/path/to/your/app"
            },
            {
                "command": "bin/run.sh",
                "directory": "/path/to/your/whatsis"
            }
        ]
    }

**command** is the command to run  
**directory** is where the command is run  

Genius, I know
