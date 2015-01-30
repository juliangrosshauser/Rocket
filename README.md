# Rocket
![Rocket](https://github.com/juliangrosshauser/rocket/blob/master/logo.png)

*Kickstart your static web development process*

---

Rocket is a ready-to-use gulpfile with the following features:

* HTML minification
* CSS minification
* JS minification
* Sass to CSS compiling
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* Image optimization
* Autorefresh on file change with [BrowserSync](http://www.browsersync.io)

## Usage

Install gulp globally if you haven't already:
```sh
$ npm install -g gulp
```

Install dependencies:
```sh
$ npm install
```

Run gulp only once (minified files will be in the `dist` directory):
```sh
$ gulp
```

Run gulp's development task (this will rerun Rocket and autoreload your browser on file change):
```sh
$ gulp dev
```

Clean up files (this will delete the `dist` directory):
```sh
$ gulp clean
```

## License

MIT
