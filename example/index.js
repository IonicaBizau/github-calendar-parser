const parse = require("../lib");

var svg = `
        <svg width="722" height="112" class="js-calendar-graph-svg">
            <g transform="translate(10, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:2864371,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/users/IonicaBizau/contributions&quot;}}" data-hydro-click-hmac="c29bb84527b62dafc7ab4208ed2db21ea4195839d541da829d109a8d172bee42">
                <g transform="translate(0, 0)">
                    <rect width="10" height="10" x="14" y="0" class="ContributionCalendar-day" data-date="2022-01-09" data-level="0" rx="2" ry="2">2 contributions on January 9, 2022</rect>
                    <rect width="10" height="10" x="14" y="13" class="ContributionCalendar-day" data-date="2022-01-10" data-level="0" rx="2" ry="2">15 contributions on January 10, 2022</rect>
                    <rect width="10" height="10" x="14" y="26" class="ContributionCalendar-day" data-date="2022-01-11" data-level="0" rx="2" ry="2">No contributions on January 11, 2022</rect>
                    <rect width="10" height="10" x="14" y="39" class="ContributionCalendar-day" data-date="2022-01-12" data-level="3" rx="2" ry="2">45 contributions on January 12, 2022</rect>
                    <rect width="10" height="10" x="14" y="52" class="ContributionCalendar-day" data-date="2022-01-13" data-level="1" rx="2" ry="2">2 contributions on January 13, 2022</rect>
                    <rect width="10" height="10" x="14" y="65" class="ContributionCalendar-day" data-date="2022-01-14" data-level="0" rx="2" ry="2">No contributions on January 14, 2022</rect>
                    <rect width="10" height="10" x="14" y="78" class="ContributionCalendar-day" data-date="2022-01-15" data-level="0" rx="2" ry="2">1 contribution on January 15, 2022</rect>
                </g>
                <g transform="translate(14, 0)">
                    <rect width="10" height="10" x="13" y="0" class="ContributionCalendar-day" data-date="2022-01-16" data-level="1" rx="2" ry="2">6 contributions on January 16, 2022</rect>
                    <rect width="10" height="10" x="13" y="13" class="ContributionCalendar-day" data-date="2022-01-17" data-level="0" rx="2" ry="2">No contributions on January 17, 2022</rect>
                    <rect width="10" height="10" x="13" y="26" class="ContributionCalendar-day" data-date="2022-01-18" data-level="1" rx="2" ry="2">2 contributions on January 18, 2022</rect>
                    <rect width="10" height="10" x="13" y="39" class="ContributionCalendar-day" data-date="2022-01-19" data-level="0" rx="2" ry="2">No contributions on January 19, 2022</rect>
                    <rect width="10" height="10" x="13" y="52" class="ContributionCalendar-day" data-date="2022-01-20" data-level="1" rx="2" ry="2">4 contributions on January 20, 2022</rect>
                    <rect width="10" height="10" x="13" y="65" class="ContributionCalendar-day" data-date="2022-01-21" data-level="1" rx="2" ry="2">1 contribution on January 21, 2022</rect>
                    <rect width="10" height="10" x="13" y="78" class="ContributionCalendar-day" data-date="2022-01-22" data-level="0" rx="2" ry="2">No contributions on January 22, 2022</rect>
                </g>
            </g>
        </svg>
`;

console.log(parse(svg))

// {
  // last_year: 78,
  // longest_streak: 2,
  // longest_streak_range: [ 2022-01-09T00:00:00.000Z, 2022-01-10T00:00:00.000Z ],
  // current_streak: 0,
  // current_streak_range: [ 2022-01-20T00:00:00.000Z, 2022-01-21T00:00:00.000Z ],
  // longest_break: 1,
  // longest_break_range: [ 2022-01-11T00:00:00.000Z, 2022-01-11T00:00:00.000Z ],
  // current_break: 1,
  // current_break_range: [ 2022-01-22T00:00:00.000Z, 2022-01-22T00:00:00.000Z ],
  // weeks: [
    // [
      // [Object], [Object],
      // [Object], [Object],
      // [Object], [Object],
      // [Object]
    // ]
  // ],
  // days: [
    // {
      // fill: '#eee',
      // date: 2022-01-09T00:00:00.000Z,
      // count: 2,
      // level: '0'
    // },
    // {
      // fill: '#eee',
      // date: 2022-01-10T00:00:00.000Z,
      // count: 15,
      // level: '0'
    // },
    // ...
    // {
      // fill: '#d6e685',
      // date: 2022-01-21T00:00:00.000Z,
      // count: 1,
      // level: '1'
    // },
    // {
      // fill: '#eee',
      // date: 2022-01-22T00:00:00.000Z,
      // count: 0,
      // level: '0'
    // }
  // ],
  // last_contributed: 2022-01-21T00:00:00.000Z
// }
