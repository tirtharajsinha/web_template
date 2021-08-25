setInterval(() => {
    a=new Date();
    var min=a.getHours();
    if(min>12){
        min=min-12;
    }
    if(min==0){
        min=12;
    }
    else if(min<10){
        min="0"+min;
    }
    document.getElementById("hour").innerHTML=min
    document.getElementById("minute").innerHTML=":"+a.getMinutes();
    document.getElementById("date").innerHTML=String(a.getDate()).padStart(2, '0');
    var dd = a.getDay();
    var weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    document.getElementById("day").innerHTML=weekday[dd];
    var mm = a.getMonth();
    var month=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    document.getElementById("month").innerHTML=month[mm];

}, 500);

