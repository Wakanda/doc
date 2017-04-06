var workerProxy = new SystemWorker( 'sh -c ls -la /Users/<user>/Desktop' );

workerProxy.onerror = function ( event ) {      
    console.log( event.type +': '+ event.data.toString() );
};

workerProxy.onmessage = function ( message ) {      
    console.log( event.type +': '+ event.data.toString() );
};

workerProxy.onterminated = function ( event ) {
    console.log( event.type +': with exitStatus:'+ event.exitStatus );
};

/**
 * For testing purposes, wait for the process to exit. This makes it very similar to SystemWorker.exec().
 * If you are using a SystemWorker from a SharedWorker you won't need to use `wait` but if your call
 * is triggered from an HTTP request you'll need to wait for the process to exit otherwise your code
 * might not get any output.
 **/

workerProxy.wait();