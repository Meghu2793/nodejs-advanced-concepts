// node myfile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// New Timers, taks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
 // check one :  any pending setTimeout, setInterval or setImmediate function
 // check two : any pendingOSTasks? (may be a server listening to some port)
 // check three : any pending long running operations? (Like fs module)
 return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()){
// 1) Node looks at pending timers and sees if there is any functions are ready 
// to be called.

// 2) Node looks at pendingOSTasks and pendingOperations and calls relevant 
// callbacks.

// 3) Pause execution temporarily. Continue when...
// - a new PendingOSTask is done
// - a new pendingOperation is done
// - a timer is about to complete

// 4) Look at pendingTimers. Call any setImmediate

// 5) Handle any 'close' events
}

//exit back to terminal