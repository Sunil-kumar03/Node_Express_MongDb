//dns

const dns = require('dns')
//resolve=>	Returns an array of record types belonging to the specified hostname
dns.resolve('www.facebook.com',(err,data)=>{
    if(err) throw err;

    data.forEach(item =>{
        dns.reverse(item,(err,host)=>{
            if(err) throw err;
            console.log('reverse dns=',item,":",JSON.stringify(host));
        });
    });
});

//output= reverse dns= 157.240.23.35 : ["edge-star-mini-shv-01-maa2.facebook.com"]
//reverse dns=>Reverses an IP address into an array of hostnames

dns.resolve6('www.facebook.com',(err,data)=>{
    if (err) throw err;

    data.forEach(item=>{
        dns.reverse(item,(err,host)=>{
            if(err) throw err;
            console.log('reverse dns =',item,":",JSON.stringify(host));
        });
    });
});

//output=reverse dns = 2a03:2880:f137:83:face:b00c:0:25de : ["edge-star-mini6-shv-01-maa2.facebook.com"]