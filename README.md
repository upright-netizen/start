start
=====

start your apps using the same command

Installation
----

Make the start script available on your PATH

Configuration
----

*start* expects configuration files to be located at:

    ~/.start/apps
    
In this directory add json files that describe how to start an app or type of application.

    {
      "start_command" : "bin/startup.sh",
      "directories" : [
        "/projects/someApp"
      ]
    }
    
**directories** represents the places where **start_command** will be used to start the application. In other words to use *start*, you could use this command: 

    cd /projects/someApp && start
    
Add as many config files as you need for all the apps you have to run everyday.
