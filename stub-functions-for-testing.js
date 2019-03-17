const sinon = require('sinon');

const api = {
  printMessage: (message) => {
    return console.log(message);
  },
};


// stub console.log
const consoleLogStub = sinon.stub(console, 'log');
const testMessage = 'a test message';

// call the api
api.printMessage(testMessage);

// check the api calls console.log properly
consoleLogStub.called; // true
consoleLogStub.withArgs(testMessage).calledOnce; // true

// get the call info
consoleLogStub.getCall(0);
/*
{
  "args": [ "a test message" ],
  "lastArg": "a test message",
  "callId": 0,
  "exception:" undefined,
  "returnValue:" undefined,
  "callback:" undefined,
}
 */

// restore console.log
consoleLogStub.restore();

// replace printMessage with a fake function
const printMessageStub = sinon.stub(api, 'printMessage')
    .callsFake((message) => {
      console.log('This message printed by the fake function:', message);
    });

// call the api
api.printMessage('print it'); // This message printed by the fake function: print it

// restore printMessage
printMessageStub.restore();
