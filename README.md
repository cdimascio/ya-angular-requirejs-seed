# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a [AngularJS](http://angularjs.org/) / [RequireJS](http://requirejs.org/) web app.
It is based on an earlier AngularJS seed project which can be found [here](https://github.com/angular/angular-seed).

This seed is differentiates itself from the previous AngularJS seed project in two distinct ways:

1. This seed includes RequireJS to manage module loading
2. This seed separates the implementation logic for each each AngularJS component into separate RequireJS module files.
This helps to create an environment conducive to large scale application development.

You can use this project to bootstrap your AngularJS / RequireJS webapp projects.
Finally, to demonstrate this functionality, this seed seed contains a trivial sample application that demonstrates the use of RequireJS and our modular layout.

## Getting Started

Clone the ya-angular-requirejs-seed project with Git

### Prerequisites

Git - SCM tool

Node Package Manager - npm

Using npm we will install the remaining dependencies:
    Bower - to install  client side dependent libraries
    http-server - simple http server

### Clone ya-angular-requirejs-seed

Clone the angular-seed repository using [git][git]:

```
https://github.com/cdimascio/ya-angular-requirejs-seed
cd ya-angular-requirejs-seed
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

```
npm install bower -g
cd app
bower install
```


Bower will install all client dependencies into  the following folder in your project.

* `app/bower_components` - contains the angular framework files

* Note, we configure the `.bowerrc` file to install all client dependencies in `app/bower_components`.

### Run the Application

To run the application, we first install a simple lightweight http server, then start it.

```
npm install http-server -g
http-server ./app
```

Now browse to the app at `http://localhost:8080`.


## Directory Layout

    app/                        --> all of the files to be used in production
      css/                      --> css files
        style.css               --> default stylesheet
      img/                      --> image files
      index.html                --> app layout file (the main html template file of the app)
      js/                       --> javascript files
        controller/             --> application controllers
            my_controller1.js   --> controller1 impl
            my_controller2.js   --> controller2 impl
        directive/              --> application directives
            version_directive   --> version_directive impl
        filter/                 --> application filters
            version_filter      --> version_filter impl
        service/                --> applicaiton services
            version_service     --> version_service impl
        app.js          --> angular application
        app-config.js   --> angular config
        boot.js         --> bootstrap logic - requirejs setup and boot
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        routes.js       --> custom angular routes
      partials/         --> angular view partials (partial html templates)
        partial1.html
        partial2.html

