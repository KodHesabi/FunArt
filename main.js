
//! JHSON yazıldı
var itemler = [
  {
    type: "item1",
    name: "Sate sate sate",
    img: "resim/meliodas.jpg",
    id: "btn1",
  },
  { type: "item2", name: "tatakae tatakae", img: "resim/eren.jpg", id: "btn2" },
  { type: "item3", name: "nee sama", img: "resim/rem.jpg", id: "btn3" },
  {
    type: "item4",
    name: "gambare gambare",
    img: "resim/sukuna01.jpg",
    id: "btn4",
  },
  { type: "item5", name: "okawai koto", img: "resim/kaguya03.jpg", id: "btn5" },
  {
    type: "item6",
    name: "yare yare",
    img: "resim/gojo-maceraları.jpg",
    id: "btn6",
  },
  {
    type: "item7",
    name: "tabii efendim!",
    img: "resim/spiderman.jpg",
    id: "btn7",
  },
  {
    type: "item8",
    name: "ara sayanoraa",
    img: "resim/ara-sayanora.jpg",
    id: "btn8",
  },
  { type: "item9", name: "ara araa", img: "resim/akeno-ara2.jpg", id: "btn9" },
  {
    type: "item10",
    name: "ho mete yaro",
    img: "resim/sukuna2.jpg",
    id: "btn10",
  },
  {
    type: "item11",
    name: "omae wa mou shindeiru",
    img: "resim/omae-wa.jpg",
    id: "btn11",
  },
  { type: "item12", name: "naniii", img: "resim/nani.jpg", id: "btn12" },
  {
    type: "item13",
    name: "ayayaa ayayaa",
    img: "resim/ayaya-ayaya.jpg",
    id: "btn13",
  },
  {
    type: "item14",
    name: "moshi moshii",
    img: "resim/moshi-moshi.jpg",
    id: "btn14",
  },
  {
    type: "item15",
    name: "ram and rem",
    img: "resim/rem-ram1.jpg",
    id: "btn15",
  },

  {
    type: "item16",
    name: "Mary Saotome",
    img: "resim/bakaa/mary.jpg",
    id: "btn16",
  },

  {
    type: "item17",
    name: "Gambare Gabimaru",
    img: "resim/gabimaru.jpg",
    id: "btn17",
  },

  {
    type: "item18",
    name: "Bakaa",
    img: "resim/bakaa/bunyy.jpg",
    id: "btn18",
  },

  {
    type: "item19",
    name: "baka baka bakaa",
    img: "resim/bakaa/images.jpg",
    id: "btn19",
  },

  {
    type: "item20",
    name: "baka",
    img: "resim/bakaa/baka.gif",
    id: "btn20",
  },

  {
    type: "item21",
    name: "like a baka",
    img: "resim/bakaa/like-a-baka.jpg",
    id: "btn21",
  },

  

];
//! JHSON bitti


/*  function searchFunc(itemler){
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
      {type:"item11", name:"omae wa mou shindeiru", img:"resim/omae-wa.jpg" , id:"btn11"},
      {type:"item12", name:"naniii", img:"resim/nani.jpg" , id:"btn12"},
      {type:"item13", name:"ayayaa ayayaa", img:"resim/ayaya-yeah.gif" , id:"btn13"},
      
    
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

    
  
} */
/* searchFunc()  */
//! Search Başlangıc
const searchInputDOM = document.querySelector("#searchInput"); 
let value = " ";
let filtered = [];

//!1.
searchInputDOM.addEventListener("input", (e) => {
  value = e.target.value;
  value = value.trim().toLowerCase();

  filtered = itemler.filter((item) =>
    item.name.trim().toLowerCase().includes(value)
  );
  let result = "";

  filtered.forEach((item) => {
    result += `
    <li class = "voice-item" type = ${item.type} >
    <div class="voice-image">
      
      <img src = ${item.img} alt="" />
      
    </div>
    <div class="voice-info">
      <button id= ${item.id} class="btn btn-primary"  name=${item.name} >${item.name} </button>
    </div>
  </li>
    `;
  });
  searchWrapperDOM.innerHTML = result;

  /* searchWrapperDOM.innerHTML=searchWrapperDOM.innerHTML */

  console.log(filtered);

  var btn1 = document.querySelector("#btn1");
  var btn2 = document.querySelector("#btn2");
  var btn3 = document.querySelector("#btn3");
  var btn4 = document.querySelector("#btn4");
  var btn5 = document.querySelector("#btn5");
  var btn6 = document.querySelector("#btn6");
  var btn7 = document.querySelector("#btn7");
  var btn8 = document.querySelector("#btn8");
  var btn9 = document.querySelector("#btn9");
  var btn10 = document.querySelector("#btn10");
  var btn11 = document.querySelector("#btn11");
  var btn12 = document.querySelector("#btn12");
  var btn13 = document.querySelector("#btn13");
  const btn14 = document.querySelector("#btn14");
  const btn15 = document.querySelector("#btn15");
  const btn16 = document.querySelector("#btn16");
  const btn17 = document.querySelector("#btn17");
  const btn18 = document.querySelector("#btn18");
  const btn19 = document.querySelector("#btn19");
  const btn20 = document.querySelector("#btn20");
  const btn21 = document.querySelector("#btn21");
  /* localStorage.setItem("clicksayac","0") */


  if (btn1 != null) {
    btn1.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn1_sesi.play();
      btn1_sesi.currentTime = 0.5;
    });
  }


  if (btn2 != null) {
    btn2.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn2_sesi.play();
      btn2_sesi.currentTime = 0;
    });
  }


  if (btn3 != null) {
    btn3.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn3_sesi.play();
      btn3_sesi.currentTime = 0;
    });
  }

 

  if (btn4 != null) {
    btn4.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn4_sesi.play();
      btn4_sesi.currentTime = 0;
    });
  }

  if (btn5 != null) {
    btn5.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn5_sesi.play();
      btn5_sesi.currentTime = 0;
    });
  }

  if (btn6 != null) {
    btn6.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn6_sesi.play();
      btn6_sesi.currentTime = 0;
    });
  }

  if (btn7 != null) {
    btn7.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn7_sesi.play();
      btn7_sesi.currentTime = 0;
    });
  }

  if (btn8 != null) {
    btn8.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
      let sayi = localStorage.getItem("clicksayac")
      ++sayi;
      localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn8_sesi.play();
      btn8_sesi.currentTime = 0;
    });
  }

  if (btn9 != null) {
    btn9.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn9_sesi.play();
      btn9_sesi.currentTime = 0;
    });
  }

  if (btn10 != null) {
    btn10.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn10_sesi.play();
      btn10_sesi.currentTime = 0;
    });
  }

  if (btn11 != null) {
    btn11.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn11_sesi.play();
      btn11_sesi.currentTime = 0;
    });
  }

  if (btn12 != null) {
    btn12.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn12_sesi.play();
      btn12_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn13 != null) {
    btn13.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn13_sesi.play();
      btn13_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn14 != null) {
    btn14.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn14_sesi.play();
      btn14_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn15 != null) {
    btn15.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn15_sesi.play();
      btn15_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn16 != null) {
    btn16.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn16_sesi.play();
      btn16_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn17 != null) {
    btn17.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn17_sesi.play();
      btn17_sesi.currentTime = 0.6;
      e.preventDefault();
    });
  }

  if (btn18 != null) {
    btn18.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn18_sesi.play();
      btn18_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn19 != null) {
    btn19.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn19_sesi.play();
      btn19_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn20 != null) {
    btn20.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn20_sesi.play();
      btn20_sesi.currentTime = 0;
      e.preventDefault();
    });
  }

  if (btn21 != null) {
    btn21.addEventListener("click", (e) => {
      sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
      console.log(sayi);
      btn21_sesi.play();
      btn21_sesi.currentTime = 0;
      e.preventDefault();
    });
  }


});

//! Search Bitis

//? butonlar eklendi

const searchWrapperDOM = document.querySelector(".voice-wrapper .voice-list");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var btn10 = document.querySelector("#btn10");
var btn11 = document.querySelector("#btn11");
var btn12 = document.querySelector("#btn12");
var btn13 = document.querySelector("#btn13");
 /* localStorage.setItem("clicksayac","0")  */


const btn14 = document.querySelector("#btn14");
const btn15 = document.querySelector("#btn15");
const btn16 = document.querySelector("#btn16");
const btn17 = document.querySelector("#btn17");
const btn18 = document.querySelector("#btn18");
const btn19 = document.querySelector("#btn19");
const btn20 = document.querySelector("#btn20");
const btn21 = document.querySelector("#btn21");

/* localStorage.setItem("clicksayac","0")
let sayac = localStorage.getItem("clicksayac") //! click sayacın değeri
console.log(sayac) */
var sayitut = document.querySelector("#sayitut");
var sayitut2 = document.querySelector("#sayitut2");
//! data içerisndeki result ve datayı name ve ürün olarak alacagım.

//! onclik codları

btn_baslangic.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn_başlangic_sesi.play();
  btn_başlangic_sesi.currentTime = 0;
});


btn1.addEventListener("click", (e) => {
  
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn1_sesi.play();
  btn1_sesi.currentTime = 0.6;
});

btn2.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn2_sesi.play();
  btn2_sesi.currentTime = 0;
});

btn3.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn3_sesi.play();
  btn3_sesi.currentTime = 0;
});

btn4.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn4_sesi.play();
  btn4_sesi.currentTime = 0;
});

btn5.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn5_sesi.play();
  btn5_sesi.currentTime = 0;
});

btn6.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn6_sesi.play();
  btn6_sesi.currentTime = 0;
});

btn7.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn7_sesi.play();
  btn7_sesi.currentTime = 0;
});

btn8.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn8_sesi.play();
  btn8_sesi.currentTime = 0;
});

btn9.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn9_sesi.play();
  btn9_sesi.currentTime = 0;
});

btn10.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn10_sesi.play();
  btn10_sesi.currentTime = 0;
});

btn11.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn11_sesi.play();
  btn11_sesi.currentTime = 0;
});

btn12.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn12_sesi.play();
  btn12_sesi.currentTime = 0;
});

btn13.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn13_sesi.play();
  btn13_sesi.currentTime = 0;
});

btn14.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn14_sesi.play();
  btn14_sesi.currentTime = 0;
});

btn15.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn15_sesi.play();
  btn15_sesi.currentTime = 0;
});

btn16.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn16_sesi.play();
  btn16_sesi.currentTime = 0;
});

btn17.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn17_sesi.play();
  btn17_sesi.currentTime = 0.6;
});

btn18.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn18_sesi.play();
  btn18_sesi.currentTime = 0;
});

btn19.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn19_sesi.play();
  btn19_sesi.currentTime = 0;
});

btn20.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn20_sesi.play();
  btn20_sesi.currentTime = 0;
});

btn21.addEventListener("click", (e) => {
  sayitut.innerHTML = localStorage.getItem("clicksayac")
  let sayi = localStorage.getItem("clicksayac")
  ++sayi;
  localStorage.setItem("clicksayac",sayi)
  console.log(sayi);
  btn21_sesi.play();
  btn21_sesi.currentTime = 0;
});





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
