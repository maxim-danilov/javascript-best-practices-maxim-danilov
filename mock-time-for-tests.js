/* using sinon package to mock time https://sinonjs.org/releases/v1.17.6/fake-timers/ */
const sinon = require('sinon');
/* using moment package to calc time */
const moment = require('moment');

const fakeDate = '2018-01-01T00:01:30.000Z';
/* mock time before to test a component */
const unixTime = moment(fakeDate).valueOf();
const clock1 = sinon.useFakeTimers(unixTime);
/* restore time after the test */
clock1.restore();

/* you can use js Date objects */
const jsDate = moment(fakeDate).toDate();
const clock2 = sinon.useFakeTimers(jsDate);
clock2.restore();
