var telKlik = Math.ceil(1*Math.random());
var uitvoerCount = document.getElementById('aantal');
var totalCount = telKlik;
var uitvoerSter = document.getElementById('waardering');
var deSterren = document.querySelectorAll('.geen');


function kleurSter(sterNummer, percentage) {
    var naam = 's' + sterNummer;
    percentage = Math.min(percentage, 100);
    document.getElementById(naam).style.width = percentage+'%';
}


function kleurSterren(rating){
    for(var i=1; i<6; i++){
        kleurSter(i, rating*100);
        rating --;
    }
}


function uitvoeren(){
//aantal kliks
uitvoerCount.innerHTML = telKlik;

uitvoerSter.innerHTML = Math.ceil(10*totalCount/telKlik)/10;

kleurSterren(Math.ceil(10*totalCount/telKlik)/10);
}
uitvoeren();

function doeClick(){
    
    telKlik ++;
    var number= this.getAttribute('data-role');
    totalCount += parseInt(number);
    uitvoeren();
}
for(var i=0; i<deSterren.length; i++){
    deSterren[i].addEventListener('click', doeClick);
}
