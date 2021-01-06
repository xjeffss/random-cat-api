const randCatButton = document.getElementById("randomButton");

randCatButton.addEventListener("click",function(event) {
    event.preventDefault()
    


axios.get('https://api.thecatapi.com/v1/images/search', {
    headers: {
        'x-api-key': 'a7cb1e08-f030-4936-9ba5-511ade0125d8'
    }
})
.then((resp)=>{
   const randCatImg = document.querySelector("#randomCatImage"); 
   randCatImg.src = resp.data[0].url;
    console.log(randCatImg)
})
} )