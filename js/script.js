
 ///  ************** Fake API
// var myHttp = new XMLHttpRequest();
// var allPosts;
// myHttp.open("GET" ,"https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50")
// myHttp.send();


// myHttp.addEventListener("readystatechange" ,function(){
//     if(myHttp.readyState == 4 && myHttp.status == 200)
// {
//     allPosts = JSON.parse( myHttp.response).results;
//     displayPosts();

// }
// });

// function displayPosts(){
//     var cartonaa = ``;
//     for(var i= 0; i<allPosts.length; i++){
//         cartonaa += `
//         <div class="col-md-3">
//         <img src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" class="w-100">
//         <h3>${allPosts[i].title}</h3>
//         <p>${allPosts[i].overview.split(" ").slice(0 ,20).join(" ")}</p>
//     </div> `;
//     }
//     document.getElementById("rowData").innerHTML=cartonaa;
// }


/// ***********Right API


var myHttp = new XMLHttpRequest();
var allMovies ;
myHttp.open("GET" , "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");
myHttp.send();


myHttp.addEventListener("readystatechange",function(){

    if(myHttp.readyState == 4 && myHttp.status == 200)
    {
        allMovies =JSON.parse(myHttp.response).results;
        dispalyMovies();
    }
} );


function dispalyMovies(){
    var cartonaa =``;
    for(var i=0 ; i<allMovies.length ; i++){
        cartonaa +=`
        <div class="col-md-3">
        <div  class= "movi position-relative">
                
            <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="w-100">
            <h3>${allMovies[i].title}</h3>
            <p>${allMovies[i].overview.split(" ").slice(0,10).join(" ")}</p>
            <div class="vote bg-info p-2 font-weight-bolder position-absolute">${allMovies[i].vote_average}</div>
        </div>        
        </div>
        `
        document.getElementById("rowData").innerHTML=cartonaa;
    }
}

// function welcome(userName= "system user" , age = 25, salary=8000){

//     console.log(`Hello my name is${userName} and my age ${age} and my salary is${salary}`)

// }

// welcome()




// let person ={
//     name:"Ahmed",
//     age: 25,
//     salary:8000,
//     welcome:function()
//     {
//         console.log("hello")
//     },
//     calcSalary:function()
//     {
//         let calcTax = () =>
//         {
//             return this.salary *0.1;
//         }
//         return this.salary -calcTax();
//     }
// }

// console.log(person.calcSalary());




 ///////************* prototype based

// let person = function(id ,name , age , geneder , salary)
// {
//     this.id = id;
//     this.userName = name;
//     this.age = age;
//     this.geneder = geneder;
//     this.salary = salary;
// }

// person.prototype.welcome= function(){
//     console.log(`welcome`)
// }

// let Ali = new person('ca3ss' , 'Ali Ahmed' , 25 , 'male' , 8000);
// let Mohamed = new person('ca3ss' , 'Mohamed Ahmed' , 25 , 'male' , 8000);
// let Kareem = new person('ca3ss' , 'Kareem Ahmed' , 25 , 'male' , 8000);
// let Aya = new person('ca3ss' , 'Aya Ahmed' , 25 , 'female' , 8000);

// Ali.welcome();



/////////************* class based

class Person 
{
    constructor(id ,name , age , geneder , salary)
    {
        this.id= id;
        this.userName = name;
        this.age= age;
        this.geneder=geneder;
        this.salary= salary;
    }
    welcome()
    {
        console.log("welcome")
    }
}

class Engeineer extends Person 
{
    constructor(id ,name , age , geneder , salary, dprt , unvi)
    {
        super(id ,name , age , geneder , salary);
        this.deprt = dprt;
        this.universt = unvi;

    }
}

e = new Engeineer("e233", "Ahmed Ali", 26, "male" , 9000 ,"civil" , "cairo");
console.log(e)