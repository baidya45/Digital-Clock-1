function update(){

   var now = new Date();

   var dname = now.getDay(), 
        dnum = now.getDate(), 
        mo = now.getMonth(),
        yr = now.getFullYear(),
        hr = now.getHours(),
        mu = now.getMinutes(),
        se = now.getSeconds(),
        pe='AM';

        if(hr>12){
            hr = hr-12;
            pe ='PM';
        }
        if(hr==0){
            hr = 12;
        }

    var monthes = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var ids = ["day","daynum","month","year","hour","minute","second","period"];

    var values = [week[dname],dnum,monthes[mo],yr,hr,mu,se,pe];

    for(var i = 0;i<ids.length;i++)
    {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    
}

function init(){
    setInterval(update,1);
}