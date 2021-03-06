# angular-webcam-recorder
Angular directive to capture video, gif &amp; picture form webcam.

## Installation

You can install this package with `bower`.

### bower

```shell
bower install angular-webcam-recorder
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-webcam-recorder/angular-webcam-recorder.js"></script>
```

Then add `ngpYoutubeUpload` as a dependency for your app:

```javascript
angular.module('myApp', ['ngpWebcamRecorder']);
```

##Uses

Simply use the directive in a template. 
```html
<div angular-webcam-recorder ></div>
```

## Contribute

Help by just creating issues and requesting new feature. I will update fast.

Or  

1. Fork and clone this repository
2. Install dependencies
    npm install
    bower install

3. Build/test with grunt
    grunt deploy

4. Make a Pull Request

## License

The MIT License (MIT)

Copyright (c) 2016 Pankaj Anupam, http://pankajanupam.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.