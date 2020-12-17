
var exec = require('mz/child_process').execFile;
var assert = require('assert');

module.exports = function (filename) {
  return exec('ffprobe', [
    '-v', 'error',
    '-of', 'flat=s=_',
    '-select_streams', 'v:0',
    '-show_entries', 'stream=height,width',
    '-show_entries', 'stream_tags=rotate',
    filename
  ]).then(function (out) {
    var stdout = out[0].toString('utf8');
    stdout = stdout.replace(/["]/g, '');
    var width = /width=(\d+)/.exec(stdout);
    var height = /height=(\d+)/.exec(stdout);
    var swap = false;
    var rotate = /rotate=(\d+)/.exec(stdout);
    if (rotate) {
      swap = 0 != ((parseInt(rotate[1])+ 360) % 180);
    }
    assert(width && height, 'No dimensions found!');
    return {
      width: parseInt(swap ? height[1] : width[1]),
      height: parseInt(swap ? width[1] : height[1]),
    };
  });
}
