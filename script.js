let imgList = document.querySelector("#img-list")
let inputs = document.querySelectorAll("input")
let searchbar = document.querySelector("#search-input")
let search = document.querySelector("#search")

function renderpage(filter){
    imgList.innerHTML=""
    let filteredmovies = movies.filter((item)=>{
        return item.title.includes(filter) || (filter=="2014" && parseInt(item.year) >= 2014)
    })
    for (let i = 0; i <filteredmovies.length; i++) {
       
        let Lis = document.createElement("li")
        imgList.appendChild(Lis)
        Lis.innerHTML =`<a href="https://www.imdb.com/title/${filteredmovies[i].imdbID}"><img src="${filteredmovies[i].poster}"></a> `  
    }
    
}
renderpage("")

for(let i = 0; i <inputs.length; i++){
    inputs[i].addEventListener("change",(e)=>{
        console.log(e.target.value)
        renderpage(e.target.value)
    })

}

search.addEventListener("click", ()=>{
    renderpage(searchbar.value)
})
