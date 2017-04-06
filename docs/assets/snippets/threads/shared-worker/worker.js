/**
 * Defined a global variable inside the SharedWorker
 * to count the number of times we have connected to it.
 **/ 
var count = 0;

/**
 * `onconnect` is called whenever a Worker Proxy is created
 * to communicate with this worker
 **/ 
onconnect = function(connectEvent) {
    // Increment the counter everytime a Proxy connects to the Worker
    count++;
    /**
     * Get the communication port that we will use to
     * send and receive messages to/from the proxy
     * Always use `ports[0]`
     **/
    var workerPort = connectEvent.ports[0];

    // Listen for worker proxy messages
    workerPort.onmessage = function( event ) {
        /**
         * The worker received a message !
         * `event.data` contains the data sent by the Worker Proxy
         * it can be a String, a Number or a non cyclic JSON Object.
         * In this example, we are always sending JSON messages.
         **/ 
        var message = event.data;
        switch( message.action ) {
            case 'GET_COUNT':
                console.log(`Worker received action [${message.action}] and content [${message.content}]`);
                // Send a reply to the proxy
                workerPort.postMessage( {type: 'response', content: count} );
                return;
            default:
                console.log( '[WORKER RECEIVED AN UNKNOWN MESSAGE]');
                // Send a reply to the proxy
                workerPort.postMessage( {type: 'error', content: `unknown action : ${message.action}`} );
                return;
        }
    }
    
    // Send a message to the worker proxy when the worker is ready.
    workerPort.postMessage({type: 'ready', content: "I'm alive!"});
}
