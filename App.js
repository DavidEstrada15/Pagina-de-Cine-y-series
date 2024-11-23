const Api= axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset:utf-8'
    },
    params: {
        'api_key': APIkey,
    }
})

async function getTrendingMoviesPreview() {
    const {data}= await Api('trending/movie/day' );

    const movies= data.results;

    trendingpreviewsContainer.innerHTML= ""
    
    movies.forEach(movie => {
        const trendingpreviewsContainer= document.querySelector('.container-movies');
        const moviecontainer= document.createElement('div');
        const movietitle= document.createElement('h3')
        moviecontainer.classList.add('container-movie-details');
        movietitle.classList.add('movie-title')
        movietitle.textContent= movie.original_title
        const movieimg= document.createElement('img');
        movieimg.classList.add('imgcontainer')
        movieimg.setAttribute('alt', movie.title)
        movieimg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,)
    moviecontainer.appendChild(movieimg)
    moviecontainer.appendChild(movietitle)
  trendingpreviewsContainer.appendChild(moviecontainer)});

  
    
    console.log({data,movies});
}


async function getCategoriesPreview() {
    const {data}= await Api('genre/movie/list');
    const categories= data.genres;
    categories.forEach(category => {
        const previewcategorycontainer= document.querySelector('.category-container');
        const categorycontainer= document.createElement('div');
        categorycontainer.classList.add('category');

        const categorytitle= document.createElement('h3');
        categorytitle.classList.add('category-title')
const categoryTitletext= document.createTextNode(category.name)
categorytitle.appendChild(categoryTitletext)
categorycontainer.appendChild(categoryTitletext)
previewcategorycontainer.appendChild(categorycontainer)
})}

async function getTrendingSeriesPreview() {
    const {data}= await Api('trending/tv/day?language=en-US' );

    const movies= data.results;


    
    movies.forEach(movie => {
        const trendingpreviewsContainer= document.querySelector('#Series-list');
        const moviecontainer= document.createElement('div');
        const movietitle= document.createElement('h3')
        moviecontainer.classList.add('container-movie-details');
        trendingpreviewsContainer.classList.add('container-movies')
        movietitle.classList.add('movie-title')
        movietitle.textContent= movie.name
        const movieimg= document.createElement('img');
        movieimg.classList.add('imgcontainer')
        movieimg.setAttribute('alt', movie.name)
        movieimg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,)
    moviecontainer.appendChild(movieimg)
    moviecontainer.appendChild(movietitle)
  trendingpreviewsContainer.appendChild(moviecontainer)});

  
    
    console.log({data,movies});
}