//os module => Provides information about the operation system

const os = require('os')

const user = os.userInfo()
console.log('user info =',user)

console.log('uptime of system =',os.uptime(),'ms')

const currentOS={
    name:os.type(), //	Returns the name of the operating system
    release:os.release(),  //Returns information about the operating system's release
    totalMem:os.totalmem(), //Returns the number of total memory of the system
    freeMem:os.freemem(), //Returns the number of free memory of the system
    arch:os.arch(), //Returns the operating system CPU architecture
    cpu:os.cpus(), //Returns an array containing information about the computer's CPUs
    avgLoad:os.loadavg(), //	Returns an array containing the load averages, (1, 5, and 15 minutes)
    userInfo:os.userInfo()
}

console.log('current os=',currentOS)