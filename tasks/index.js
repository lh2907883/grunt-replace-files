/*
 * 基于grunt的文本内容替换组件
 * https://github.com/lh2907883/grunt-replace-files
 *
 * Copyright (c) 2015-6-29 lihao
 * Licensed under the MIT.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('regexReplace', '基于grunt的文本内容替换组件', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    // var options = this.options({
    //   punctuation: '.',
    //   separator: ', '
    // });

    //console.log(JSON.stringify(this.data.options.regex));
    var regexOption = this.data.options.regex;

    // // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      if(f.src.length > 0){
        var content = grunt.file.read(f.src[0]);
        for(var r in regexOption){
          if(r){
            var tar = regexOption[r];
            var regex = new RegExp(r, "gm");
            content = content.replace(regex, tar);
          }
        }

        grunt.file.write(f.dest, content);
        //console.log(content);
      }
    });
  });

};
