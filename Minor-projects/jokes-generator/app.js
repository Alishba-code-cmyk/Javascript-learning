let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let btn = document.querySelector("button");
let p1=document.querySelector("#quote");
let p2=document.querySelector("#joke");
 
btn.addEventListener("click", async() => {
//     let quote = await getQuote();
// await console.log(quote.setup);
// document.querySelector("#quote").innerHTML=quote.setup;

// setTimeout(()=>{
//      console.log(quote.delivery);
//     let p2=document.querySelector("#quote");
// p2.innerHTML="";
// p2.innerHTML=quote.delivery;

// },4000);    
let joke=await getQuote();

 p2.innerText="";
console.log(joke.setup);
 p1.innerText=joke.setup;
setTimeout(()=>{

    console.log(joke.delivery);
    p2.innerText=joke.delivery;
},3000);

});

async function getQuote() {
    try {
        let res = await axios.get(url);
         return  res.data;
    } catch (e) {
        console.log("error - ", e);
    }
}