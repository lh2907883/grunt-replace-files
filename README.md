# grunt-replace-files [![Build Status](https://travis-ci.org/danielhusar/grunt-file-replace.svg)](https://github.com/lh2907883/grunt-replace-files) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> 基于grunt的文本内容替换组件.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-replace-files --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replace-files');
```

## The "grunt-replace-files" task

### Overview
In your project's Gruntfile, add a section named `regexReplace` to the data object passed into `grunt.initConfig()`.


	grunt.initConfig({
  	  regexReplace: {
	    default: {
	      options: {
			//在文本中使用下面的正则替换内容( 例:把'="lib/'正则匹配到的内容替换成字符串'="_LIB_/' )
	        regex: {
	          '="lib/': '="_LIB_/',
	          '="scripts/': '="_JS_/',
	          '="styles/': '="_CSS_/',
	          '="images/': '="_IMG_/'
	        }
	      },
		  files: [{
	        expand: true,
	        cwd: 'data/src',
	        src: '{,*/}*.html',
	        dest: 'data/dest',
	        ext: '.html'
	      }]
	    }
	  },
	})

## License
Copyright (c) 2015 李浩. Licensed under the MIT license.
