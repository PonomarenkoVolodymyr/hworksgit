const API_KEY = "a2ef5fc" // OMDB key

//toasts 
function successToast(message = "Movie added to favorites") {
    Toastify({
        text: message,
        duration: 3500,  
        newWindow: true,
        gravity: "top",
        position: 'left',
        close: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
  }
  
  function errorToast(message = "Movie deleted from favorites") {
    Toastify({
        text: message,
        duration: 3500,  
        newWindow: true,
        gravity: "top",
        position: 'left',
        close: true,
        style: {
            background: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }
    }).showToast();
  }
  
  function infoToast(message = "Please enter the movie title") {
    Toastify({
        text: message,
        duration: 3500,  
        newWindow: true,
        gravity: "top",
        position: 'left',
        close: true,
        style: {
            background: "linear-gradient(to right,rgb(44, 60, 240),rgb(53, 174, 249))",
        }
    }).showToast();
  }
//toasts end

const el = (id) => {
    return document.getElementById(id)
}
const form = el("search-form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const search = el("search-input").value.trim()
    const type = el("type").value
    const year = el("year").value

    if(search === ""){
        return infoToast('Enter movie name for searching')
    }

    searchMovie(search, type, year)
})

async function searchMovie(search, type="", year=""){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()

    if(data.Response === "False"){
        errorToast(data.Error)
        return
    }   
    
    showMovieList(data.Search)
}

function showMovieList(movies){
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
    let list = ''

    movies.forEach((movie, index)=>{       
        const isFavorite = favoriteList.some(fav => fav.id === movie.imdbID)
        const btnClass = isFavorite ? 'btn-warning' : 'btn-secondary'
        const btnTitle = isFavorite ? 'Remove from favorite' : 'Add to favorite'
        
        list += `
        <div class="card" >
            <img class="card-img-top" src="${movie.Poster}" alt="${movie.Title} poster" onerror="this.src='./assets/img/no-img.png'">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <button type="button" class="btn btn-primary btn-details" data-id="${movie.imdbID}">Details</button>
                <button type="button" class="btn ${btnClass} favorite-btn" data-id="${movie.imdbID}" data-title="${movie.Title}" data-year="${movie.Year}" data-poster="${movie.Poster}" title="${btnTitle}">
                <i class="fa-solid fa-heart favorite-icon"></i>
                </button>
            </div>
        </div>
        `
    })

    el("movies-list").innerHTML = list

    const btnsList = document.querySelectorAll(".btn-details")       
    btnsList.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault()
            const imdbID = btn.dataset.id
            detailInfo(imdbID)
        })
    })   

    
    const favoriteBtn = document.querySelectorAll(".favorite-btn")
    favoriteBtn.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault()
            const favMovie = {
                id: btn.dataset.id,
                title: btn.dataset.title,
                year: btn.dataset.year,
                poster: btn.dataset.poster
            }
            addRemoveFav(favMovie, btn)          
        })
    })   
}

el("year").setAttribute("max", new Date().getFullYear())


function modalClose(){
    el("overlay").classList.remove("active")
    el("modal-window").classList.remove("active")
}

async function detailInfo(id){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    const details = await response.json()
    
    if(details.Response === "False"){
        errorToast(details.Error)
        return
    }

    const detailInfoHTML = `
    <div class="modal-wrap">    
            <div class="main-info">
                <img src="${details.Poster}" alt="${details.Title} poster" onerror="this.src='./assets/img/no-img.png'">
                <ul>
                    <li>
                        <h4>${details.Title}</h4>
                    </li>
                    <li>
                        <p>Released: <span>${details.Released}</span></p>
                    </li>
                    <li>
                        <p>Genre: <span>${details.Genre}</span></p>
                    </li>
                    <li>
                        <p>Runtime: <span>${details.Runtime}</span></p>
                    </li>
                    <li>
                        <p>Country: <span>${details.Country}</span></p>
                    </li>
                    <li>
                        <p>IMDB Rating: <span>${details.imdbRating}</span></p>
                    </li>
                    <li>
                        <p>Cast: <span>${details.Actors}</span></p>
                    </li>
                    <li>
                        <p>Director: <span>${details.Director}</span></p>
                    </li>
                    <li>
                        <p>Writer: <span>${details.Writer}</span></p>
                    </li>
                    <li>
                        <p>Languages: <span>${details.Language}</span></p>
                    </li>
                    <li>
                        <p>Awards: <span>${details.Awards}</span></p>
                    </li>

                </ul>
            </div>
            <div class="summary">
                <p><span>Plot summary: </span>${details.Plot}</p>
            </div>
            <button type="button" onclick="modalClose()" class="btn btn-success">Close</button>
        </div>
        `
    
    el("modal-window").innerHTML = "";
    el("modal-window").insertAdjacentHTML('afterbegin', detailInfoHTML);
    el("overlay").classList.add("active")
    el("modal-window").classList.add("active")    
}

function addRemoveFav(favMovie, btnElement){
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
    const index = favoriteList.findIndex((el) => el.id === favMovie.id)
    
    if (index === -1) {      
        favoriteList.push(favMovie)
        btnElement.classList.remove('btn-secondary')
        btnElement.classList.add('btn-warning')
        btnElement.title = 'Remove from favorite'
        successToast(`"${favMovie.title}" added to Favorites`)
    } else {       
        favoriteList.splice(index, 1)
        btnElement.classList.remove('btn-warning')
        btnElement.classList.add('btn-secondary')
        btnElement.title = 'Add to favorite'
        errorToast(`"${favMovie.title}" removed from Favorites`)
    }

    localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
}



const favoriteMainBtn = document.getElementById('favorite')
if (favoriteMainBtn) {
    favoriteMainBtn.addEventListener('click', function(e){
        e.preventDefault()
        showFavoritesModal()
    })
}

function showFavoritesModal(){
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
    
    if(favoriteList.length === 0){
        infoToast('No favorites yet!')
        let modalContent = `
    <div class="modal-wrap">
        <div class="favorite-wrap">
            <div class="favorite-header">
                <h3>Your Favorite Movies (${favoriteList.length})</h3>
                <button type="button" onclick="modalClose()" class="btn btn-success btn-fav">Close</button>
            </div>                  
            <h2>No favorites yet!</h2>                    
        </div>
    </div>
    `   
    el("modal-window").innerHTML = modalContent   
    el("modal-window").classList.add("favorite-modal")   
    el("overlay").classList.add("active")
    el("modal-window").classList.add("active")
    return 
    }

    let modalContent = `
    <div class="modal-wrap">
    <div class="favorite-wrap">
        <div class="favorite-header">
            <h3>Your Favorite Movies (${favoriteList.length})</h3>
            <button type="button" onclick="modalClose()" class="btn btn-success btn-fav">Close</button>
        </div>
        <div class="favorites-list">
    `

    favoriteList.forEach(movie => {
        modalContent += `
        <div class="favorite-item">            
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='./assets/img/no-img.png'">            
            <div class="favorite-info">
                <h5>${movie.title}</h5>
                <p>${movie.year}</p>
            </div>
            <button class="btn btn-danger btn-sm remove-fav" data-id="${movie.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        ` 
    })
   

    el("modal-window").innerHTML = modalContent   
    el("modal-window").classList.add("favorite-modal")   
    el("overlay").classList.add("active")
    el("modal-window").classList.add("active")
  
    const removeButtons = document.querySelectorAll(".remove-fav")
    removeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id
            removeFromFavorites(id)
        })
    })
}

function removeFromFavorites(id){
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || []
    const index = favoriteList.findIndex((el) => el.id === id)
    
    if (index !== -1) {
        const movieTitle = favoriteList[index].title
        favoriteList.splice(index, 1)
        localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
        errorToast(`"${movieTitle}" removed from Favorites`)
        showFavoritesModal()
    }
}