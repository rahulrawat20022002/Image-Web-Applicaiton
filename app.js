const accessKey="NMYA5bkRMk-8MMNjhoTm3RMSElU_51l5_JCB3SzkzEM";

const formel=document.getElementById("form");
const searchResults=document.getElementById("searchresults");
const showmorebtn=document.getElementById("showmorebtn");
const textArea=document.getElementById("textArea");
const input=document.getElementById("textinput");

let inputdata=""
showmorebtn.disabled=true;
let page=1;
function searchImage(){
    inputdata=input.value;
    console.log(inputdata);
    const link=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`

    fetch(`${link}`)
    .then((resp)=> (resp.json()))
    .then((data)=>{
        
        const results=data.results
        console.log(results);
        if(page===1){
            searchResults.innerHTML="";
        }
        results.map((result)=>{
            const img=document.createElement('img');
            img.src=result.urls.small;
            img.alt=results.alt_description
            const desc=document.createElement('a')
            desc.href=result.urls.full;
            desc.target="_blank"
            desc.textContent=result.alt_description
           
            
            const imagewrapper=document.createElement('div');
            imagewrapper.appendChild(img)
            imagewrapper.appendChild(desc);
            imagewrapper.classList.add('images');
            
            searchResults.appendChild(imagewrapper)
        })
        page++;
        showmorebtn.style.display='block';
        

    })
}
const searchbtn=document.getElementById("searchbtn");
searchbtn.addEventListener('click',function(e){
    if(input!=null){

        page=1;
        console.log("testing");
        e.preventDefault();
        searchImage();
    }
    else{
        alert("please enter the input")
    }

})
showmorebtn.addEventListener('click',function(e){
    searchImage();
})