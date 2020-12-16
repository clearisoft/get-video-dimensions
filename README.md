
# get-video-width-height

Get the width and height of a video with `ffprobe`.
Requires the `ffprobe` binary installed.

```js
var getDimensions = require('get-video-width-height');

getDimensions('video.mp4').then(function (dimensions) {
  console.log(dimensions.width);
  console.log(dimensions.height);
})
```
