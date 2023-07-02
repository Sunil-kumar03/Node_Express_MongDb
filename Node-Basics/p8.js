// multi thread

const cluster = require('cluster')

if (cluster.isWorker) {
    console.log('node is running in multi thread mode')
} else {
    cluster.fork() // fork => Creates a new worker, from a master
    cluster.fork()
    cluster.fork()
    cluster.fork()
}