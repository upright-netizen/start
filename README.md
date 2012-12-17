start
=====

start your apps using the same command

Installation
----

    npm install -g start

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
	            "directories": [
    	            "/Users/nstilwell/Code/theMuppetShow"
        	    ]
        	}
	    ],
    	"aliases": {}
	}    

**command** is the command to run  
**directories** is where the command is run  

Genius, I know