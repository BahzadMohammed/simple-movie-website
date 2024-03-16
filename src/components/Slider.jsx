
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GlobalAPI from "../services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Slider() {

    const [moviesList, setMoviesList] = useState([]);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const elementRef = useRef();
    const rightArrowRef = useRef();
    const leftArrowRef = useRef();
    const screenWidth = window.innerWidth;

    const [showImage, setShowImage] = useState({});
    function setShowImageSlider() {
        console.log(moviesList)
        moviesList.map((item, index) => index<1 && (
            setShowImage({
                id: item.id,
                index: index,
                imageUrl: IMAGE_BASE_URL+item.backdrop_path,
                name: item.media_type==="tv" ? item.name : item.title,
                overview: item.overview,
                data: item.media_type==="tv" ? item.first_air_date.substring(0,4) : item.release_date.substring(0,4),
                rating: Math.round(item.vote_average * 10)/10,
                type: item.media_type==="tv" ? "tvshow":"movie"
            })
            // console.log(index)
        ))
    }


    useEffect(() => {
        getTrendingMovies();
    }, [moviesList])

    useEffect(() => {
        setShowImageSlider();
    }, [moviesList])
    
    useLayoutEffect(() => {
        function handleResize() {
            if(elementRef) {
                // const height = elementRef.current.offsetHeight;
                // rightArrowRef.current.style.marginTop = height/2.3 + "px";
                // leftArrowRef.current.style.marginTop = height/2.3 + "px";
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.addEventListener("resize", handleResize);
    })


    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideos.then(res => {
            setMoviesList(res.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth-110;
    }
    const sliderLeft = (element) => {
        element.scrollLeft-=screenWidth-110;
    }


    return (
        // <div>
        //     <div className="text-white text-[25px] absolute mx-6 mt-[150px] cursor-pointer right-0 md:text-[30px] text-opacity-60 hover:text-opacity-100 z-10" onClick={()=>sliderRight(elementRef.current)} ref={rightArrowRef}><HiChevronRight/></div>

        //     <div className="text-white text-[25px] absolute mx-6 mt-[150px] cursor-pointer md:text-[30px] text-opacity-60 hover:text-opacity-100 z-10" onClick={() => sliderLeft(elementRef.current)} ref={leftArrowRef}><HiChevronLeft/></div>

        //     <div className="relative flex overflow-x-auto scrollbar-hide scroll-smooth w-full px-16 py-4" ref={elementRef}>
        //         {
        //             moviesList.map((item, index) => (
        //                 <div key={index} className="min-w-full md:h-[310px] object-cover object-center mr-5 rounded-lg  border-gray-400 hover:border-2 transition-all duration-100 ease-in-out overflow-hidden">
        //                     <Link to={`/movie/${item.id}`}>
        //                         <img src={IMAGE_BASE_URL+item.backdrop_path}  className=""/>
        //                     </Link>
        //                 </div>
        //             ))
        //         }
        //     </div>

        //     {/* <div className="flex justify-center relative top-[-40px] gap-1 md:gap-3">
        //             {
        //                 moviesList.map((item, index) => (
        //                     <div key={index} className="w-1 h-1 md:w-2 md:h-2 bg-slate-50 rounded-full opacity-60"></div>
        //                 ))
        //             }
        //     </div> */}
        // </div>

        <div className="mb-2">
            <div className="px-5 py-1">
                <div className="relative w-full overflow-hidden rounded-xl">

                    {/* Background image */}
                    <div className="relative">
                        <img src={showImage.imageUrl} loading="lazy" className="rounded-xl min-w-full md:h-[450px] object-cover object-center"/>

                        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#1c222a] w-full h-full"></div>
                    </div>

                    {/* Slider */}
                    <div className="absolute right-0 bottom-3 overflow-auto scrollbar-hide  w-32 md:w-96">
                        <div className="w-10 md:w-24 flex">
                            {
                                moviesList.map((item, index) => (
                                    <div key={index} className={`min-w-full object-cover object-center mr-2 md:mr-3 cursor-pointer rounded-md md:rounded-xl transition-all duration-75 ease-in-out overflow-hidden ${showImage.index!==index ? "brightness-50":"brightness-100"} `}>
                                        {/* <Link to={`/movie/${item.id}`}> */}
                                            <img src={IMAGE_BASE_URL+item.poster_path} loading="lazy" className="" onClick={()=>setShowImage({
                                                id: item.id,
                                                index: index,
                                                imageUrl: IMAGE_BASE_URL+item.backdrop_path,
                                                name: item.media_type==="tv" ? item.name : item.title,
                                                overview: item.overview,
                                                data: item.media_type==="tv" ? item.first_air_date.substring(0,4) : item.release_date.substring(0,4),
                                                rating: Math.round(item.vote_average * 10)/10,
                                                type: item.media_type==="tv" ? "tvshow":"movie"
                                            })}/>
                                        {/* </Link> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* text on background */}
                    <div className="absolute top-6 left-6 md:left-16 md:top-16 flex flex-col w-[50%] gap-2 md:gap-5 z-10">
                        <h1 className="text-lg md:text-4xl font-bold text-white">{showImage.name}</h1>

                        <div className="flex items-center gap-3 text-[8px] md:text-sm text-slate-300">
                            <p>{showImage.data}</p>
                            <p className="bg-black text-white font-bold px-[2px] md:px-[4px] md:py-[2px] rounded-sm md:rounded-md bg-opacity-40">{showImage.rating}</p>
                        </div>

                        <p className="hidden md:block text-[8px] md:text-sm text-slate-300">{showImage.overview}</p>
                        
                        {console.log(showImage.type)}
                        <Link to={`/${showImage.type}/${showImage.id}`}>
                            <button className="md:trailerB bg-[#E10000] hover:bg-[#E10000] rounded-md md:rounded-xl w-16 py-1 text-[7px] md:w-56 md:py-3 md:text-xl hover:scale-100 transition-all duration-200 mt-1 md:mt-4"><FontAwesomeIcon icon={faPlay} beat /> &nbsp;&nbsp; WATCH</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider