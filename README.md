
# github-calendar-parser

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/github-calendar-parser.svg)](https://www.npmjs.com/package/github-calendar-parser) [![Downloads](https://img.shields.io/npm/dt/github-calendar-parser.svg)](https://www.npmjs.com/package/github-calendar-parser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parses the GitHub contributions calendar SVG code into JSON.

## :cloud: Installation

```sh
$ npm i --save github-calendar-parser
```


## :clipboard: Example



```js
const parse = require("github-calendar-parser");

var svg = `<svg width="721" height="110" class="js-calendar-graph-svg">
  <g transform="translate(20, 20)">
      <g transform="translate(0, 0)">
          <rect class="day" width="11" height="11" y="39" fill="#1e6823" data-count="78" data-date="2014-12-31"/>
          <rect class="day" width="11" height="11" y="52" fill="#d6e685" data-count="6" data-date="2015-01-01"/>
          <rect class="day" width="11" height="11" y="65" fill="#d6e685" data-count="1" data-date="2015-01-02"/>
          <rect class="day" width="11" height="11" y="78" fill="#d6e685" data-count="21" data-date="2015-01-03"/>
      </g>
      <g transform="translate(13, 0)">
          <rect class="day" width="11" height="11" y="0" fill="#8cc665" data-count="40" data-date="2015-01-04"/>
          <rect class="day" width="11" height="11" y="13" fill="#8cc665" data-count="27" data-date="2015-01-05"/>
          <rect class="day" width="11" height="11" y="26" fill="#8cc665" data-count="27" data-date="2015-01-06"/>
          <rect class="day" width="11" height="11" y="39" fill="#44a340" data-count="57" data-date="2015-01-07"/>
          <rect class="day" width="11" height="11" y="52" fill="#8cc665" data-count="0" data-date="2015-01-08"/>
          <rect class="day" width="11" height="11" y="65" fill="#8cc665" data-count="3" data-date="2015-01-09"/>
          <rect class="day" width="11" height="11" y="78" fill="#d6e685" data-count="2" data-date="2015-01-10"/>
      </g>
  </g>
</svg>`;

console.log(parse(svg));
// =>
// { last_year: 262,
//   longest_streak: 9,
//   longest_streak_range: [ 2014-12-31T00:00:00.000Z, 2015-01-07T00:00:00.000Z ],
//   current_streak: 2,
//   current_streak_range: [ 2015-01-09T00:00:00.000Z, 2015-01-10T00:00:00.000Z ],
//   weeks: [ [ [Object], [Object], [Object], [Object] ] ],
//   days:
//    [ { fill: '#1e6823',
//        date: 2014-12-31T00:00:00.000Z,
//        count: 78,
//        level: 4 },
//      ...
//      { fill: '#d6e685',
//        date: 2015-01-10T00:00:00.000Z,
//        count: 2,
//        level: 1 } ],
//   last_contributed: 2015-01-10T00:00:00.000Z }
```

## :memo: Documentation


### `parseGitHubCalendarSvg(input)`
Parses the SVG input (as string).

#### Params
- **String** `input`: The SVG code of the contributions calendar.

#### Return
- **Object** An object containing:
 - `last_year` (Number): The total contributions in the last year.
 - `longest_streak` (Number): The longest streak.
 - `longest_streak_range` (Array): An array of two date objects representing the date range.
 - `current_streak` (Number): The current streak.
 - `current_streak_range` (Array): An array of two date objects representing the date range.
 - `days` (Array): An array of day objects:
      - `fill` (String): The hex color.
      - `date` (Date): The day date.
      - `count` (Number): The number of commits.
      - `level` (Number): A number between 0 and 4 (inclusive) representing the contribution level (more commits, higher value).
 - `weeks` (Array): The day objects grouped by weeks (arrays).
 - `last_contributed` (Date): The last contribution date.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`github-calendar`](https://github.com/IonicaBizau/github-calendar#readme)—Embed your GitHub contributions calendar anywhere.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
