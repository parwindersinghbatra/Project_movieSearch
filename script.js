const search_btn = document.getElementById('search_btn');
const search_movie = document.getElementById('search_movie');
var img_display_data = document.getElementById('img_show');


API_Key = 'fbc83262'
// movie_API = 'https://www.omdbapi.com/?'


const searchMovie = async () =>{
    const input_value = search_movie.value;

    try{
        const result = await fetch(`https://www.omdbapi.com/?t=${input_value}&apikey=${API_Key}`)
        data = await result.json();
        if(data.Response == 'False'){
            console.log('Movie not found')
        }
        else{
            
            let details = document.getElementById('details');

            img_display_data.src = data.Poster

            let titleElement = document.createElement('p')
            titleElement.id = 'title'
            titleElement.innerHTML = '<b>Title :</b> ' + data.Title

            let Genre = document.createElement('p')
            Genre.id = 'genre'
            Genre.innerHTML = '<b>Genre :</b> ' + data.Genre

            let Actor = document.createElement('p')
            Actor.id = 'actor'
            Actor.innerHTML = '<b>Caste :</b> ' + data.Actors

            let imdbRating = document.createElement('p')
            imdbRating.id = 'rating'
            imdbRating.innerHTML = '<b>Rating :</b> ' + data.imdbRating
            
            let Released = document.createElement('p')
            Released.id = 'Released'
            Released.innerHTML = '<b>Released :</b> ' + data.Released
            
            let Director = document.createElement('p')
            Director.id = 'Director'
            Director.innerHTML = '<b>Director :</b> ' + data.Director

            details.appendChild(titleElement)
            details.appendChild(Genre)
            details.appendChild(Actor)
            details.appendChild(imdbRating)
            details.appendChild(Released)
            details.appendChild(Director)

        }
    }catch(e){
        console.log('Error', e)
    }
}
search_btn.addEventListener('click',searchMovie)