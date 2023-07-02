/* cluster module =>
            The cluster module provides a way of creating child processes that runs simultaneously and share the same server port.
            Node.js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.
 */

const cluster = require ('cluster')

//isMaster=true=single thread

//isWorker=true = multi thread

if (cluster.isMaster) {
    console.log("node is running in single thread")
} else {
    console.log('no action')
}