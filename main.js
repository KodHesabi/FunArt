//! JHSON yazıldı
 var itemler= [
  {type:"item1", name:"Sate sate sate" , img:"resim/meliodas.jpg" , id:"btn1" },
  {type:"item2", name:"tatakae tatakae" , img:"resim/eren.jpg" , id:"btn2"},
  {type:"item3", name:"nee sama", img:"resim/rem.jpg" , id:"btn3"},
  {type:"item4", name:"gambare gambare", img:"resim/sukuna01.jpg", id:"btn4"}, 
  {type:"item5", name:"okawai koto", img:"resim/kaguya03.jpg" , id:"btn5"},
  {type:"item6", name:"yare yare", img:"resim/gojo-maceraları.jpg", id:"btn6"},
  {type:"item7", name:"tabii efendim!", img:"resim/spiderman.jpg" , id:"btn7"},
  {type:"item8", name:"ara sayanoraa", img:"resim/ara-sayanora.jpg" , id:"btn8"},
  {type:"item9", name:"ara araa", img:"resim/akeno-ara2.jpg" , id:"btn9"},
  {type:"item10", name:"ho mete yaro", img:"resim/sukuna2.jpg" , id:"btn10"},

];
//! JHSON bitti

 function searchFunc(itemler){
    var itemler= [
      {type:"item1", name:"Sate sate sate" , img:"resim/meliodas.jpg" , id:"btn1" },
      {type:"item2", name:"tatakae tatakae" , img:"resim/eren.jpg" , id:"btn2"},
      {type:"item3", name:"nee sama", img:"resim/rem.jpg" , id:"btn3"},
      {type:"item4", name:"gambare gambare", img:"resim/sukuna01.jpg", id:"btn4"}, 
      {type:"item5", name:"okawai koto", img:"resim/kaguya03.jpg" , id:"btn5"},
      {type:"item6", name:"yare yare", img:"resim/gojo-maceraları.jpg" , id:"btn6"},
      {type:"item7", name:"tabii efendim!", img:"resim/spiderman.jpg" , id:"btn7"},
      {type:"item8", name:"ara sayanoraa", img:"resim/ara-sayanora.jpg" , id:"btn8"},
      {type:"item9", name:"ara araa", img:"resim/akeno-ara2.jpg" , id:"btn9"},
      {type:"item10", name:"ho mete yaro", img:"resim/sukuna2.jpg" , id:"btn10"},
      
    
    ];
    
    const searchWrapperDOM =  document.querySelector(".voice-wrapper .voice-list")
    let result= " "
    itemler.forEach((item) => {
        result+=`
        <li class = "voice-item" type = ${item.type} >
        <div class="voice-image">
          
          <img src = ${item.img} alt="" class="search-img"/>
          
        </div>
        <div class="voice-info">
          <button id= ${item.id} class="btn btn-primary"  name=${item.name} >${item.name} </button>
        </div>
      </li>

        `
    })
    searchWrapperDOM.innerHTML = result
    console.log(searchWrapperDOM)

    
  
}
searchFunc() 
//! Search Başlangıc
const searchInputDOM = document.querySelector("#searchInput")
let value= " ";
let filtered=[]

//!1.
searchInputDOM.addEventListener("input", (e) => {
  value = e.target.value
  value= value.trim().toLowerCase()
  

  filtered = itemler.filter((item) => item.name.trim().toLowerCase().includes(value)
  );
  let result= ""

  filtered.forEach((item) => {
    result+=`
    <li class = "voice-item" type = ${item.type} >
    <div class="voice-image">
      
      <img src = ${item.img} alt="" class="item-image"/>
      
    </div>
    <div class="voice-info">
      <button id= ${item.id} class="btn btn-primary"  name=${item.name} >${item.name} </button>
    </div>
  </li>
    `;
       
      
  });
   searchWrapperDOM.innerHTML =  result;

   /* searchWrapperDOM.innerHTML=searchWrapperDOM.innerHTML */
   
  console.log(filtered)

  
  var btn1 = document.querySelector("#btn1")
  var btn2  = document.querySelector("#btn2")
  var btn3  = document.querySelector("#btn3")
  var btn4  = document.querySelector("#btn4")
  var btn5  = document.querySelector("#btn5")
  var btn6  = document.querySelector("#btn6")
  var btn7  = document.querySelector("#btn7")
  var btn8  = document.querySelector("#btn8")
  var btn9  = document.querySelector("#btn9")
  var btn9  = document.querySelector("#btn10")
  
  
  if(btn1!=null){
    btn1.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn1_sesi.play()
    } 
    
  }
  
  if(btn2!=null){
    btn2.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn2_sesi.play()
  } 

 }

   if(btn3!=null){

    btn3.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn3_sesi.play()
  }

   }
    

if(btn4!=null){
  btn4.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn4_sesi.play()
  }
    
}
  

  if(btn5!=null){

    btn5.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn5_sesi.play()
   } 
    
  }

  
 if(btn6!=null){
  btn6.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn6_sesi.play()
  } 
    
 }


  if(btn7!=null){
    btn7.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn7_sesi.play()
    }
    
  }

  if(btn8!=null){
    btn8.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn8_sesi.play()
    }
    
  }

  if(btn9!=null){
    btn9.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn9_sesi.play()
    }
    
  }

  if(btn10!=null){
    btn10.onclick = function(){
      var sayi=Number(sayitut.innerHTML)
      sayitut.innerHTML=++sayi
      console.log(sayi)
      btn10_sesi.play()
    }
    
  }

  
 
}) 

//! Search Bitis

//? butonlar eklendi

const searchWrapperDOM =  document.querySelector(".voice-wrapper .voice-list")
var btn1 = document.querySelector("#btn1")
var btn2  = document.querySelector("#btn2")
var btn3  = document.querySelector("#btn3")
var btn4  = document.querySelector("#btn4")
var btn5  = document.querySelector("#btn5")
var btn6  = document.querySelector("#btn6")
var btn7  = document.querySelector("#btn7")
var btn8  = document.querySelector("#btn8")
var btn9  = document.querySelector("#btn9")
var btn9  = document.querySelector("#btn10")
var sayitut=document.querySelector("#sayitut")


//! data içerisndeki result ve datayı name ve ürün olarak alacagım.

//! onclik codları
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
    btn3_sesi.play()
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
    btn5_sesi.play()
  }

  btn6.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn6_sesi.play()
  }

  btn7.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn7_sesi.play()
  }

  btn8.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn8_sesi.play()
  }

  btn9.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn9_sesi.play()
  }

  btn10.onclick = function(){
    var sayi=Number(sayitut.innerHTML)
    sayitut.innerHTML=++sayi
    console.log(sayi)
    btn10_sesi.play()
  }



/*
var data=[]

var item1 = document.querySelector("#item1")
data.push(item1)

var item2 = document.querySelector("#item2")
data.push(item2) 

var item3 = document.querySelector("#item3")
data.push(item3)

var item4 = document.querySelector("#item4")
data.push(item4) 

var item5 = document.querySelector("#item5")
data.push(item5)
 
 btn içerisindeki değerleri aldım
var result=[]
var data1 = document.querySelector("#btn1")
result.push(data1.innerHTML)

var data2 = document.querySelector("#btn2")
 result.push(data2.innerHTML)  

 var data3 = document.querySelector("#btn3")
 result.push(data3.innerHTML)  

var data4 = document.querySelector("#btn4")
 result.push(data4.innerHTML) 

 var data5 = document.querySelector("#btn5")
result.push(data5.innerHTML)  



data.push(result)
*/