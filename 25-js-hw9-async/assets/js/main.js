const API_KEY = "a2ef5fc" // OMDB key

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
        return toast.info('Enter movie name for searching')
    }

    searchMovie(search, type, year)
})

async function searchMovie(search, type="", year=""){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y=${year}`)
    const data = await response.json()

    if(data.Response === "False"){
        toast.error(data.Error)
        return
    }   
    
    showMovieList(data.Search)
}

function showMovieList(movies){
    let list = ''

    movies.forEach((movie)=>{
        list += `
        <div class="card" >
            <img class="card-img-top" src="${movie.Poster}" alt="${movie.Title} poster" onerror="this.src='./assets/img/no-img.png'">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <button type="button" class="btn btn-primary btn-details" data-id="${movie.imdbID}">Details</button>
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
        toast.error(details.Error)
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