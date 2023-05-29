var btn1 = document.querySelector("#btn1")
var btn2  = document.querySelector("#btn2")
var btn3  = document.querySelector("#btn3")
var btn4  = document.querySelector("#btn4")
var btn5  = document.querySelector("#btn5")
var sayitut=document.querySelector("#sayitut")
var audio=[btn1_sesi,btn1_sesi,btn1_sesi,btn4_sesi,btn1_sesi]



var data=[]

var item1 = document.querySelector("#item1")
data.push(item1)

/* var item2 = document.querySelector("#item2")
data.push(item2) */

var item3 = document.querySelector("#item3")
data.push(item3)

/* var item4 = document.querySelector("#item4")
data.push(item4) */

var item5 = document.querySelector("#item5")
data.push(item5)

//! btn içerisindeki değerleri aldım
var result=[]
var data1 = document.querySelector("#btn1")
result.push(data1.innerHTML)

/*  var data2 = document.querySelector("#btn2")
 result.push(data2.innerHTML)  */

var data3 = document.querySelector("#btn3")
result.push(data3.innerHTML) 

/*  var data4 = document.querySelector("#btn4")
 result.push(data4.innerHTML) */ 

var data5 = document.querySelector("#btn5")
result.push(data5.innerHTML)


console.log(result)
data.push(result)
console.log(data)
//! data içerisndeki result ve datayı name ve ürün olarak alacagım.


btn_baslangic.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn_başlangic_sesi.play()
    
}

btn1.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn1_sesi.play()
}


/* btn2.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn2_sesi.play()
} */


btn3.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn3_sesi.play()
}


/* btn4.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn4_sesi.play()
}
 */

btn5.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn5_sesi.play()
}

//! Search Başlangıc
const searchInputDOM = document.querySelector("#searchInput")
let value= " ";
let filtered=[]
searchInputDOM.addEventListener("input", (e) => {
    value = e.target.value
    value= value.trim().toLowerCase()
    console.log(value)

})
/* 
btn içindeki değerler
 */

//! Search Bitis

