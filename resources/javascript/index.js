// setTimeout(function () {
//     console.clear();
// }, 2000)
// Length Conversion//
// ------------------//
let meter = document.querySelector("#meter");
let inch = document.querySelector("#inch");
let foot = document.querySelector("#foot");
let mm = document.querySelector("#mm");
let gauge = document.querySelector("#gauge");

meter.addEventListener('input', updateLength);
inch.addEventListener('input', updateLength);
foot.addEventListener('input', updateLength);
mm.addEventListener('input', updateLength);
gauge.addEventListener('input', updateLength);


function updateLength(e) {
    if (e.target.name == "meter") {
        mm.value = (e.target.value * 1000).toFixed(3);
        inch.value = (e.target.value * 39.3701).toFixed(3);
        foot.value = (e.target.value * 3.28084).toFixed(3);
    } else if (e.target.name == "inch") {
        meter.value = (e.target.value * 0.0254).toFixed(3);
        mm.value = (e.target.value * 25.4).toFixed(3);
        foot.value = (e.target.value * 0.0833333).toFixed(3);
    } else if (e.target.name == "foot") {
        meter.value = (e.target.value * 0.3048).toFixed(3);
        mm.value = (e.target.value * 304.8).toFixed(3);
        inch.value = (e.target.value * 12).toFixed(3);
    } else if (e.target.name == "mm") {
        meter.value = (e.target.value / 1000).toFixed(6);
        inch.value = (e.target.value * 0.0393701).toFixed(6);
        foot.value = (e.target.value * 0.00328084).toFixed(6);
    } else if (e.target.name == "gauge") {
        switch (e.target.value) {
            case '0':
                mm.value = 8.2;
                console.log("hey")
                break;
            case '1':
                mm.value = 7.6;
                break;
            case '2':
                mm.value = 7;
                break;
            case '3':
                mm.value = 6.4;
                break;
            case '4':
                mm.value = 5.9;
                break;
            case '5':
                mm.value = 5.4;
                break;
            case '6':
                mm.value = 4.9;
                break;
            case '7':
                mm.value = 4.5;
                break;
            case '8':
                mm.value = 4.1;
                break;
            case '9':
                mm.value = 3.7;
                break;
            case '10':
                mm.value = 3.2;
                break;
            case '11':
                mm.value = 2.9;
                break;
            case '12':
                mm.value = 2.6;
                break;
            case '13':
                mm.value = 2.3;
                break;
            case '14':
                mm.value = 2;
                break;
            case '15':
                mm.value = 1.8;
                break;
            case '16':
                mm.value = 1.6;
                break;
            case '17':
                mm.value = 1.4;
                break;
            case '18':
                mm.value = 1.2;
                break;
            case '19':
                mm.value = 1;
                break;
            case '20':
                mm.value = 0.9;
                break;
            case '21':
                mm.value = 0.8;
                break;
            case '22':
                mm.value = 0.7;
                break;
            case '23':
                mm.value = 0.6;
                break;
            case '24':
                mm.value =  0.559;
                break;
            case '25':
                mm.value = 0.5;
                break;
            case '26':
                mm.value = 0.45;
                break;
            case '27':
                mm.value = 0.42;
                break;
            case '28':
                mm.value = 0.37;
                break;
            case '29':
                mm.value = 0.34;
                break;
            case '30':
                mm.value = 0.31;
                break;
            case '31':
                mm.value = 0.29;
                break;
            case '32':
                mm.value = 0.27;
                break;
            case '33':
                mm.value = 0.25;
                break;
            case '34':
                mm.value = 0.23;
                break;
            case '35':
                mm.value = 0.21;
                break;
            case '36':
                mm.value = 0.19;
                break;
            case '37':
                mm.value = 0.17;
                break;
            case '38':
                mm.value = 0.15;
                break;
            case '39':
                mm.value = 0.13;
                break;
            case '40':
                mm.value = 0.12;
                break;

        }
    }
    

}