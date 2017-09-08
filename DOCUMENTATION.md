## Documentation

You can see below the API reference of this module.

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

