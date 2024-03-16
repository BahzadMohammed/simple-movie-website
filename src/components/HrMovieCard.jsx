

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HrMovieCard({movie, type}) {
    return (
        <div className="w-[190px] md:w-[315px] text-center flex flex-col justify-center gap-4">
            <div className="overflow-hidden rounded-md">
                <img src={IMAGE_BASE_URL+(type==="Details" ? movie.file_path : movie.backdrop_path)} loading="lazy" className="rounded-md hover:scale-110 md:hover:scale-105 transition-all duration-150 ease-in cursor-pointer"/>
            </div>
            {type!=="Details" &&
                <h3 className="text-xs md:text-base">{movie.title}</h3>
            }
        </div>
    )
}

export default HrMovieCard