import { DateTime } from 'luxon';

// units for the dates
const units = [
  'year',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
];

// function to change date into "time ago" format
const timeAgo = (date) => {

  let dateTime = DateTime.fromISO(date)
  const diff = dateTime.diffNow().shiftTo(...units);
  const unit = units.find((unit) => diff.get(unit) !== 0) || 'second';

  const relativeFormatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  return relativeFormatter.format(Math.trunc(diff.as(unit)), unit);
};

export default timeAgo;
