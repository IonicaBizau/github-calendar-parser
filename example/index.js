const parse = require("../lib");

var svg = `
        <svg width="722" height="112" class="js-calendar-graph-svg">
            <g transform="translate(10, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:2864371,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/users/IonicaBizau/contributions&quot;}}" data-hydro-click-hmac="c29bb84527b62dafc7ab4208ed2db21ea4195839d541da829d109a8d172bee42">
                <g transform="translate(0, 0)">
                <rect class="day" width="10" height="10" x="14" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-03"/>
                <rect class="day" width="10" height="10" x="14" y="13" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-04"/>
                <rect class="day" width="10" height="10" x="14" y="26" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-05"/>
                <rect class="day" width="10" height="10" x="14" y="39" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-06"/>
                <rect class="day" width="10" height="10" x="14" y="52" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-07"/>
                <rect class="day" width="10" height="10" x="14" y="65" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-08"/>
                <rect class="day" width="10" height="10" x="14" y="78" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-09"/>
                </g>
                <g transform="translate(14, 0)">
                    <rect class="day" width="10" height="10" x="13" y="0" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-10"/>
                    <rect class="day" width="10" height="10" x="13" y="13" fill="var(--color-calendar-graph-day-L1-bg)" data-count="4" data-date="2019-11-11"/>
                    <rect class="day" width="10" height="10" x="13" y="26" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-12"/>
                    <rect class="day" width="10" height="10" x="13" y="39" fill="var(--color-calendar-graph-day-L1-bg)" data-count="1" data-date="2019-11-13"/>
                    <rect class="day" width="10" height="10" x="13" y="52" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-14"/>
                    <rect class="day" width="10" height="10" x="13" y="65" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-15"/>
                    <rect class="day" width="10" height="10" x="13" y="78" fill="var(--color-calendar-graph-day-bg)" data-count="0" data-date="2019-11-16"/>
                </g>
            </g>
        </svg>
`;

console.log(parse(svg))
// {
//     "last_year": 5,
//     "longest_streak": 1,
//     "longest_streak_range": ["2019-11-11T00:00:00.000Z", "2019-11-11T00:00:00.000Z"],
//     "current_streak": 0,
//     "current_streak_range": ["2019-11-16T00:00:00.000Z", "2019-11-13T00:00:00.000Z"],
//     "weeks": [
//         [{
//             "fill": "#eee",
//             "date": "2019-11-03T00:00:00.000Z",
//             "count": 0,
//             "level": 0
//         },
//         ...
//         {
//             "fill": "#eee",
//             "date": "2019-11-09T00:00:00.000Z",
//             "count": 0,
//             "level": 0
//         }]
//     ],
//     "days": [{
//         "fill": "#eee",
//         "date": "2019-11-03T00:00:00.000Z",
//         "count": 0,
//         "level": 0
//     },
//     ...
//     {
//         "fill": "#eee",
//         "date": "2019-11-16T00:00:00.000Z",
//         "count": 0,
//         "level": 0
//     }],
//     "last_contributed": "2019-11-13T00:00:00.000Z"
// }
