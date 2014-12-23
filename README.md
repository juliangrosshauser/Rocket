# Rocket
*Kickstart your static web development process*

Rocket is a ready to use gulpfile with the following features:

* HTML minification
* CSS minification
* JS minification
* Sass to CSS compiling
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* Image optimization

## Usage

Install dependencies:
```
npm install
```

Run Rocket one time (minified files will be in the `dist` directory):
```
gulp
```

Run Rocket in development mode (this will rerun Rocket and autoreload your browser on file change):
```
gulp dev
```

Clean up files (this will delete the `dist` directory):
```
gulp clean
```

## License

The MIT License (MIT)

Copyright (c) 2014-2015 Julian Grosshauser

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

