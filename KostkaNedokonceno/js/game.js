var hody = [];
let timer = false;


function animace() {
    h = Math.ceil(Math.random() * 6);
    cube.src = 'img/kostka' + h + '.png';
}



document.getElementById('game').addEventListener('click', function(){
    if (!timer){
        timer = setInterval(animace, 50);
        document.getElementById('game').innerText ='STOP';
    }else{
        document.getElementById('game').innerText ='HREJ';
        clearInterval(timer);
        timer = false;
        hody.push(h);
        hod();
    }
})


function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {

    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('cube2').src='img/kostka' + h + '.png';
    document.getElementById('cube3').src='img/kostka' + h + '.png';
    document.getElementById('cube4').src='img/kostka' + h + '.png';
    document.getElementById('cube5').src='img/kostka' + h + '.png';
    document.getElementById('cube6').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nenižší hod: ' + minimum(hody) + '</p>';
        h = Math.ceil(Math.random() * 6);
    cube.src = 'img/kostka' + h + '.png';
    
    return h;
}