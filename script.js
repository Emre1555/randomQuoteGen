const API_URL= 'https://quote-garden.herokuapp.com/api/v2/quotes/random'
let randomQuote;
let theAuthor;


//fetch part
function getRandomQuote() { 
let promise = fetch(API_URL, {cache: "no-cache"});

promise
.then((response)=>{
    let processingPromise = response.json()
    return processingPromise;
})
.then(function (processedResponse){ 
    //quote
    randomQuote = processedResponse.quote.quoteText
    document.getElementById('quote').innerHTML = randomQuote
    //author
    theAuthor = processedResponse.quote.quoteAuthor
    document.getElementById('authorBtn').innerHTML = theAuthor
})
}
getRandomQuote()

//Random Button
let randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener("click", ()=>{
    getRandomQuote()  
})

