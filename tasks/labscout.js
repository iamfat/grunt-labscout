/*
 * grunt-labscout
 * https://github.com/iamfat/grunt-labscout
 *
 * Copyright (c) 2013 Jia Huang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    function _publications(self) {
        var conf = self.data;
        var done = self.async();

        var rpc = require('http-jsonrpc').connect(conf.api_url, {api_key:conf.api_key});
        rpc
        .call('achievements/publications')
        .done(function(data) {
            conf.success(data, done);
        })

        
    }

    function _people(self) {

        var conf = self.data;
        var done = self.async();

        var rpc = require('http-jsonrpc').connect(conf.api_url, {api_key:conf.api_key});
        rpc
        .call('people/members')
        .done(function(data) {
            conf.success(data, done);
        })

    }

    grunt.registerMultiTask('labscout', 'Grunt plugins for LabScout LIMS', function() {
        switch (this.target) {
        case 'publications':
            _publications(this);
            break;
        case 'people':
            _people(this);
            break;
        }
    });

};
