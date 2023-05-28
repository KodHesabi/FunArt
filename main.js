var btn1 = document.querySelector("#btn1")
var btn2  = document.querySelector("#btn2")
var btn3  = document.querySelector("#btn3")
var btn4  = document.querySelector("#btn4")
var btn5  = document.querySelector("#btn5")
var sayitut=document.querySelector("#sayitut")
var audio=[btn1_sesi,btn1_sesi,btn1_sesi,btn4_sesi,btn1_sesi]
btn1.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn1_sesi.play()
}


btn2.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn2_sesi.play()
}


btn3.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn4_sesi.play()
}


btn4.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn4_sesi.play()
}


btn5.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn4_sesi.play()
}

