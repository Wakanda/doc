// Create a new NodeWorker and get the proxy worker
var myWorkerProxy = new NodeWorker( './worker.js', 'my-worker-id' );

/**
 * Get the communication port that we will use to
 * send and receive messages to/from the Worker
 **/
var workerProxyPort = myWorkerProxy.port;

// Listen for worker messages
workerProxyPort.onmessage = function( event ) {
    /**
     * The Proxy received a message from the Worker !
     * `event.data` contains the data sent by the Worker
     * it can be a String, a Number or a non cyclic JSON Object.
     * In this example, we are always sending JSON messages.
     **/ 
    var message = event.data;
    switch( message.type ) {
        case 'ready':
            // The worker is ready to receive messages !
            workerProxyPort.postMessage({action: 'GET_PAGE'});            
            break;

        case 'response':
            console.log(`Worker response is : ${message.content}`);
            exitWait();
            break;        
        default:
            // Other types of messages
            break;
    }
}

wait(30000);