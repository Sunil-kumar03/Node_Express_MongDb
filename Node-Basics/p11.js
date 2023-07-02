//dns(domain name system (server)) =>The DNS module provides a way of performing name resolutions.

const dns = require('dns')

//lookup=>Looks up a hostname. A callback function contains information about the hostname, including it's IP address
dns.lookup('www.be-practical.com',function (err,address,family){  
    if(err) throw err;
    console.log('address =',address)
    console.log('family=',family)

    //lookupService =>Looks up a address and port. A callback function contains information about the address, such as the hostname
    dns.lookupService(address,22,function (err,host,service){ // 22 is default getWay
        if (err) throw err;
        console.log('host=',host)
        console.log('service=',service)
    })
})


/*
    www.facebook.com 
    address=157.240.23.35
    family=4(ipv4)
    host=edge-start-shv-01-maa2.facebook.com
    service=ssh(service shell/secure socket shell)-> network protocol


    www.be-practical.com 
    address=3.21.100.116
    family=4(ipv4)
    host=ec2-3-21-100-16.us-east-2.compute.amazonaws.com
    service=ssh(service shell/secure socket shell)-> network protocol
*/