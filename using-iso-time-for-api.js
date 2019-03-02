/*
 * The best way to handle dates in a backend is
 * using ISO 8601 standart (DB dates, input params, responses).
 * An example of a UTC date: '2019-03-02T13:27:40Z'
 */

// npm install moment --save or npm install moment-timezone --save
const moment = require('moment-timezone');

// get a Moment (UTC mode) by a current system time
moment.utc();

// print a current system time (my system time is GMT+5)
moment().format();
// > '2019-03-02T18:27:40+05:00'

// print a current system UTC time (my system time is GMT+5)
moment.utc().format();
// > '2019-03-02T13:27:40Z'

// get a Moment (UTC mode) by a UTC date (string)
const utcDateString = '2019-03-02T13:27:40Z';
moment.utc(utcDateString);

// get a JS Date by a UTC date (string)
moment.utc(utcDateString).toDate();

// check is a valid ISO 8601 date (string)
const isValidDate = moment(utcDateString, moment.ISO_8601).isValid();

/*
 * convert a UTC date (string) to a Moment with changed timeozne
 * 1) get a JS Date by a UTC date (string)
 * 2) change the timezone to 'America/Los_Angeles'
 */
moment.utc(utcDateString).tz('America/Los_Angeles');

/*
 * convert a timezone date (string) to a Moment (with a timezone offset)
 * 1) get a Moment by a date (string) and a timezone
 * 2) get a Moment (UTC mode)
 */
const losAngelesDate = 'March 2nd 2019, 5:27:40 am';
moment.tz(losAngelesDate, 'MMMM Do YYYY, h:mm:ss a', 'America/Los_Angeles').utc();
// > 2019-03-02T13:27:40Z

