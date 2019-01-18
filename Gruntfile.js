module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist"],
    shell: {
      makeDir: {
        command: 'mkdir dist'
      }
    },
    nugetpack: {
      dist: {
        src: 'src/*.nuspec',
        dest: 'dist/'
      }
    },
    nugetpush: {
      dist: {
        src: 'dist/*.nupkg',
        options: {
          source: grunt.option('source'),
          apiKey: grunt.option('key')
        }
      }
    }  
  });
  var source = grunt.option("source") || "https://www.myget.org/F/sirkirby/api/v2/package";
  var key = grunt.option('key');
  
  grunt.loadNpmTasks('grunt-contrib-clean');

  // load the shell plugin for cmd goodies
  grunt.loadNpmTasks('grunt-shell');

  // Load the plugin that provides the "nuget" task.
  grunt.loadNpmTasks('grunt-nuget');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'shell', 'nugetpack']);
  // Build and publish to nuget task
  grunt.registerTask('publish', ['clean', 'shell', 'nugetpack', 'nugetpush']);
};