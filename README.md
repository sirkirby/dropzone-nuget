# DropzoneJS Nuget #

Nuget package for DropzoneJS. For more information on the project, visit the main site http://www.dropzonejs.com/

## Build ##
Install the grunt cli tools

`npm install -g grunt-cli`

Install the required modules

`npm install`

build the package to the `dist` folder

`grunt`

## Installing ##

https://www.nuget.org/packages/dropzone

`PM> install-package dropzone`

## ASP.Net Bundling & Minification ##

Main script

    bundles.Add(new ScriptBundle("~/bundles/dropzone/js").Include("~/Scripts/dropzone/dropzone.js"));

Styles for basic and dropzone themes

    bundles.Add(new StyleBundle("~/Scripts/dropzone/css/basic").Include("~/Scripts/dropzone/css/basic.css"));

    bundles.Add(new StyleBundle("~/Scripts/dropzone/css/standard").Include("~/Scripts/dropzone/css/dropzone.css"));

[License](LICENSE.txt)
==================