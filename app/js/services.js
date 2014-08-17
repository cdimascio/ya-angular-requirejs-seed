'use strict';

define(function(require) {
    require('angular').module('myApp.services', []).
        service("VersionService", require('service/version_service'));
        // Add additional services here e.g.
        // .service('MyService', ...
});
