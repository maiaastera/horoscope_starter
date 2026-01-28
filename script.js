//add your js functions here

let sign = ["sagittarius", "capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "ophiuchus"]
let scope = ["watch out for people with red hair", "please be careful", "he is lying", "today is the day", "we are watching", "do not wear red on monday", "next time you're near a puddle be careful", "it's too late tbh", "the countdown starts now", "you are a virgo... hm", "the world is your oyster", "dont forget to laugh", "wow. great things are coming for you"];
let pic = ["img/sag.png", "img/cap.png", "img/aqu.png", "img/pis.png", "img/ari.png", "img/tau.png", "img/gem.png", "img/can.png", "img/leo.png", "img/vir.png", "img/lib.png", "img/sco.png", "img/oph.png"]
let user = "";
let fail = false;

function run(){
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let name = document.getElementById("name").value;

    if(month == 4 || month == 6 || month == 11){
        if(day == 31){
            fail = true;
        }
    } 
    if(month == 2 && day > 29){
        fail = true;
    }

    if(month == 1){
        if(day <= 20){
            user = 0;
        } else{
            user = 1;
        }
    }
    if(month == 2){
        if(day <= 16){
            user = 1;
        } else{
            user = 2;
        }
    }
    if(month == 3){
        if(day <= 11){
            user = 2;
        } else{
            user = 3;
        }
    }
    if(month == 4){
        if(day <= 18){
            user = 3;
        } else{
            user = 4;
        }
    }
    if(month == 5){
        if(day <= 13){
            user = 4;
        } else{
            user = 5;
        }
    }
    if(month == 6){
        if(day <= 21){
            user = 5;
        } else{
            user = 6;
        }
    }
    if(month == 7){
        if(day <= 20){
            user = 6;
        } else{
            user = 7;
        }
    }
    if(month == 8){
        if(day <= 10){
            user = 7;
        } else{
            user = 8;
        }
    }
    if(month == 9){
        if(day <= 16){
            user = 8;
        } else{
            user = 9;
        }
    }
    if(month == 10){
        if(day <= 30){
            user = 9;
        } else{
            user = 10;
        }
    }
    if(month == 11){
        if(day <= 23){
            user = 10;
        } else{
            user = 11;
        }
    }
    if(month == 12){
        if(day <= 17){
            user = 12;
        } else{
            user = 0;
        }
    }

    if(fail == false){
        document.getElementById("sign").innerHTML = "you are a " + sign[user];
        document.getElementById('image').src = pic[user];
        document.getElementById("message").innerHTML = name + " " + scope[user];
    } else {
        document.getElementById("sign").innerHTML = "you are nothing. this is not a real birthday.";
        document.getElementById('image').src = "img/sad.png";
        document.getElementById("message").innerHTML = name + " please enter your real birthday";
    }

}