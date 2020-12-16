
# get-video-width-height

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Get the width and height of a video with `ffprobe`.
Requires the `ffprobe` binary installed.

```js
var getDimensions = require('get-video-width-height');

getDimensions('video.mp4').then(function (dimensions) {
  console.log(dimensions.width);
  console.log(dimensions.height);
})
```

