const btn= document.querySelector('#joke-btn');
const output= document.querySelector('#joke-output');

btn.addEventListener("click", async function(e){
    try{
    const response= await fetch(" https://official-joke-api.appspot.com/random_joke");
    const data= await response.json();
    // console.log(data);
    output.textContent=`${data.setup}...${data.punchline}`
    }
    catch(error){
        console.error('Fetch Failed:',error);
    }
    
});