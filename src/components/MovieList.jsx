import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import GlobalAPI from "../services/GlobalAPI"
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";
import { Link } from "react-router-dom";


const MovieList = forwardRef(({id, index_}, ref) => {

    useImperativeHandle(ref, () => {
        return {
            sliderRight: sliderRight,
            sliderLeft: sliderLeft,
            elementCur: elementRef
        }
    })

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = () => {
        GlobalAPI.getMovieByGenreId(id).then(res => {
            setMovieList(res.data.results);
            // console.log(res.data)
        })
    }

    
    const sliderRight = (element) => {
        elementRef.current.scrollLeft+=240;
    }
    const sliderLeft = () => {
        elementRef.current.scrollLeft-=240;
    }


    return (
        <div className="relative">

            {/* <div className="text-white text-[25px] z-10 md:block absolute mx-6 mt-[150px] cursor-pointer md:text-[30px] text-opacity-60 hover:text-opacity-100" onClick={() => sliderLeft(elementRef.current)}><HiChevronLeft/></div> */}

            
            
            
        
            <div ref={elementRef} className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-8 pt-5 pb-5 px-3">
                {
                    movieList.map((item, index) => (
                        <div key={index} className="p-0 gap-0 m-0">
                            <Link to={`/movie/${item.id}`}>
                                {index_%3==1 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
                            </Link>
                        </div>
                    ))
                }
            </div>


            {/* <div className="text-white text-[25px] absolute mx-6 mt-[150px] cursor-pointer right-0 md:text-[30px] text-opacity-60 hover:text-opacity-100" onClick={()=>sliderRight(elementRef.current)}><HiChevronRight/></div> */}
            
        </div>
    )
});

export default MovieList