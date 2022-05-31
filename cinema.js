const arrow = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrow.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        movieLists[i].style.transform= `translateX(${   
            movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    })  ;     
}) ;
