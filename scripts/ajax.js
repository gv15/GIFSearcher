window.addEventListener('load', attachEvents);
// const attachEvents = ()=>{ //functions should be hoisted in 
//purpose to resolve callbacks
//     document.querySelector("#bt").addEventListener('click', searchGif)
// }
function attachEvents(){
    document.querySelector("#bt").addEventListener('click', searchGif)
}
function resolveResponse(obj){
    var results = document.querySelector("#resultBox");
    results.innerHTML = "";
    obj.results.forEach(element=>{results.appendChild(createAndAppendImage(element.media[0].gif.url));})
    // for(let singleGifObj of obj.results){
    //     results.appendChild(createAndAppendImage(singleGifObj.media[0].gif.url));
    // }
}
function createAndAppendImage(url){
   let newImage = document.createElement('img');
   newImage.src = url;
   newImage.className = "content"
   return newImage;
}
function getMore(){
    
}
function searchGif(){
    let query = document.querySelector("#query").value;
    console.log(query)
    if(query){
        document.getElementById('info').innerText = "";
        var url = `https://api.tenor.com/v1/search?key=RBK9491UVQ8I&q=${query}&contentfilter=high&limit=5`;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function(){
            
            if(http.status == 200 && http.readyState==4){
                console.log("inside if");
                var obj = JSON.parse(http.responseText);
                console.log(http.responseText);
                resolveResponse(obj)
            }
        }
        http.open("GET", url);
        http.send();
    }
    else{
        
        document.getElementById('info').innerText = "Empty Search Query";
       
    }
}