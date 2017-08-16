/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";

var gulp = require('gulp');
var rimraf = require("rimraf");

var paths = {
    webroot: "./wwwroot/",
    nodemodules: "./node_modules/"
};

paths.libs = paths.webroot + "lib/";

var devLibs = {
    "knockout" : paths.nodemodules + "knockout/build/output/**.js",
    "jquery": paths.nodemodules + "jquery/dist/jquery*.{js,map}",
    "jquery-validation": paths.nodemodules + "jquery-validation/dist/jquery*.{js,map}",
    "bootstrap": paths.nodemodules + "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}"
};

gulp.task("default", function () {
    // place code for your default task here
});

gulp.task("clean", function (cb) {
    rimraf(paths.libs, cb);
});

gulp.task("copy", ["clean"], function() {
    for (var dest in devLibs) {
        gulp.src(devLibs[dest])
            .pipe(gulp.dest(paths.libs + dest));
    } 
});