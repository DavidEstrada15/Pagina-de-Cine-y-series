window.addEventListener('hashchange', navigator, false)
window.addEventListener('DOMContentLoaded', navigator, false)

function navigator(){
    console.log({location})
    location.hash

    if (location.hash.startsWith('#trends')){
        Trendspage()
    }else if(location.hash.startsWith('#search=')){
        searchpage()
    }else if(location.hash.startsWith('#movie=')){
        moviepage()
    }else if (location.hash.startsWith('#category=')){
       categoriespage()
    }else{
       homepage()
    }
}

function homepage(){
console.log('HOME!!') 
 Searcherimage.src= 'maxresdefault (1).jpg'

getTrendingMoviesPreview()
getCategoriesPreview()
getTrendingSeriesPreview()
}

function categoriespage(){
   trendingpreviewsContainer.innerHTML= ""
    console.log('Categories!!') 
    Searcherimage.src= 'scale.webp'
    categorycontainer.innerHTML= ''
}

function moviepage(){
console.log('Movies!!')
}

function searchpage(){
    console.log('Search!!')
    }

function Trendspage(){
    console.log('TRENDS!!!')
}