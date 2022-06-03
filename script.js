const food=[
    {
        name:"Haşhaşli Lokum Tarifi",
        image:"./img/roll.jpeg",
        link:"https://yemek.com/yoresel-yemek-tarifleri/"
    },
    {
        name:"Elmali Top Tarifi",
        image:"./img/towercho.jpeg",
        link:"https://yemek.com/cikolatali-pratik-tatli-tarifleri/"
    },
    {
        name:"Çikolata Kapli Çilek",
        image:"./img/strawcho.jpeg",
        link:"https://yemek.com/cikolatali-pratik-tatli-tarifleri/"
    },
    {
        name:"Adana Kebap",
        image:"./img/meat.jpeg",
        link:"https://yemek.com/tarif/adana-kebap/"
    },
    {
        name:"Patatesli Börek",
        image:"./img/rllsalt.jpeg",
        link:"https://yemek.com/tarif/patatesli-borek/"
    },
    {
        name:"Şekerpare",
        image:"./img/ballsweet.jpeg",
        link:"https://yemek.com/tarif/sekerpare/"
    },
    {
        name:"Ev Usulü Pizza",
        image:"./img/pizza.jpeg",
        link:"https://yemek.com/tarif/ev-usulu-pizza/"
    },
    {
        name:"Frambuazli İrmik Tatlisi",
        image:"./img/threem.jpeg",
        link:"https://yemek.com/meyveli-sutlu-tatli-tarifleri/"
    },
    {
        name:"Yoğurtlu Patates",
        image:"./img/gcups.jpeg",
        link:"https://yemek.com/patatesli-mezeler/"
    }
]

let counter = 1;

function slider(e){
    document.querySelector(".card-img-top").setAttribute("src",food[e].image)
    document.querySelector(".card-title").textContent=food[e].name
    document.querySelector(".card-link").setAttribute("href",food[e].link)
    }



document.querySelector(".back").addEventListener("click" ,function(){
    counter--;
    slider(counter);
})

document.querySelector(".next").addEventListener("click" ,function(){
    counter++;
    console.log(counter);
    slider(counter);
})

setInterval(init,7000)
//2000 miliseconds

function init(){
    var randomImg=Math.floor(Math.random() * food.length);
    slider(randomImg)
}