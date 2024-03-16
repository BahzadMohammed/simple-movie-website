import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"

function SimilarMovies({ similar, urlName, type }) {



    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl md:text-3xl">{type ? type:"Similar"}</h1>
                <div className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-8 pt-5 pb-5 px-3">
                    {
                        similar.map((item, index) => (
                            item.poster_path &&
                            <div key={index} className="p-0 gap-0 m-0">
                                <Link to={`/${urlName}/${item.id}`} onClick={() => {
                                    setTimeout(()=>window.scrollTo(0, 0), 1000)
                                }}>
                                    <MovieCard movie={item}/>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SimilarMovies