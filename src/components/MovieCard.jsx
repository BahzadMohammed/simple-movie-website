import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({movie}) {

    
    return (
        <div className="w-[110px] md:w-[200px] text-center flex flex-col justify-center gap-5 overflow-hidden rounded-lg transition-all duration-150 ease-in cursor-pointer">
            <img src={IMAGE_BASE_URL+movie.poster_path} loading="lazy" className="rounded-md hover:scale-110 transition-all duration-150 ease-in"/>
            {/* <h3>{movie.title}</h3> */}
        </div>
    )
}

export default MovieCard