const food=[
    {
        name:"Sushi",
        image:"./img/sushi.jpg",
        recipe: "Sushi Rice, Nori (Seaweed), Fillings",
        link:"https://peasandcrayons.com/2012/10/homemade-sushi-tips-tricks-and-toppings.html"
    },
    {
        name:"Boba",
        image:"./img/bobatea.jpg",
        recipe:"Varies but most have boba balls, tea, sugar, milk",
        link:"https://www.ohhowcivilized.com/bubble-tea-recipes/"
    },
    {
        name:"Frozen Yogurt",
        image:"./img/froyo.jpg",
        recipe: "Yogurt, Milk, Frozen Berries, Sugar",
        link:"https://www.dessertnowdinnerlater.com/triple-berry-frozen-yogurt/"
    },
    {
        name:"Kasakhstan Dumplings",
        image:"./img/dupkas.jpg",
        recipe: "Flour, Salt, Egg, Water, Beef, Onions, Cumin, Pepper",
        link:"https://www.whats4eats.com/dumplings/manti-dumplings-recipe"
    },
    {
        name:"Coconut Macaroons",
        image:"./img/como.jpg",
        recipe: "Shredded Coconur, Flour, Sugar, Salt, Egg, Chocolate, Coconut Extract",
        link:"https://www.cookingclassy.com/coconut-macaroons/"
    },
    {
        name:"Creme Brulee",
        image:"./img/cb.jpg",
        recipe:"Eggs, Heavy Whipping Cream, Sugar, Vanilla",
        link:"https://www.dessertfortwo.com/creme-brulee/"
    },
    {
        name:"Key Lime Pie",
        image:"./img/keylimepi.jpg",
        recipe:"Sweetened condensed milk, Key lime juice, Sour cream, Lime zest, Graham cracker crust",
        link:"https://www.allrecipes.com/recipe/15880/key-lime-pie-vii/"
    },
    {
        name:"Fresh Fruit Popsicles",
        image:"./img/frpop.jpg",
        recipe: "Any fruit you want",
        link:"https://theviewfromgreatisland.com/whole-fruit-popsicles/"
    },
    {
        name:"Raspberry Lemonade",
        image:"./img/raxlem.jpg",
        recipe: "Water, Sugar, Raspberries, Lemon Juice",
        link:"https://www.mybakingaddiction.com/raspberry-lemonade/"
    }
]

let counter = 1;

function slider(e){
    document.querySelector(".card-img-top").setAttribute("src",food[e].image)
    document.querySelector(".card-title").textContent=food[e].name
    document.querySelector(".card-link").setAttribute("href",food[e].link)
    document.querySelector(".card-text").textContent=food[e].recipe
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