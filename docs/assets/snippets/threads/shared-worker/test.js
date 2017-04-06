// Create a new SharedWorker and get the proxy worker
var myWorkerProxy = new SharedWorker( './worker.js', 'my-worker-id' );

// Get the proxy worker port for communication
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
            workerProxyPort.postMessage({action: 'GET_COUNT'});
            break;
            
        case 'response':
            console.log(`Worker response is : ${message.content}`);
            break;
        // It's something else. Skip it.
        default:
            break;
    }
}

wait(3000);
