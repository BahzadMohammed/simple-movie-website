import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import GlobalAPI from "../services/GlobalAPI"
import MovieCard from "../components/MovieCard";
import MovieTrailer from "../components/MovieTrailer";
import SimilarMovies from "../components/SimilarMovies";
import Actors from "../components/Actors";
import HeaderDetails from "../components/HeaderDetails";
import { ClipLoader, ScaleLoader } from "react-spinners";
import HrMovieCard from "../components/HrMovieCard";


function movieDetails() {

    
    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [similarMovies, setSimilarMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [movieImages, setMovieImages] = useState([]);
    const [trailerLink, settrailerLink] = useState("");
    const [videoCancel , setVideoCancel] = useState(false);
    const [loader, setLoader] = useState(true);
    


    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        getmovieDetail(movieId);
        getTrailer(movieId);
        getRecommendationsMovie(movieId);
        getActors(movieId);
        getImages(movieId);
    }, [movieId]);



    
    
    const getmovieDetail = (id) => {
        GlobalAPI.getmovieDetails(id).then(res => {
            setMovieDetails(res.data);
            console.log(res)
        })
    }

    const getTrailer = (id) => {
        GlobalAPI.getMovieTrailer(id).then(res => {
            res.data.results.map((item, index) => {
                if(item.type === "Trailer"){
                    settrailerLink(`https://www.youtube.com/embed/${res.data.results?.[index].key}`);
                    return;
                }
            })
        });
    }

    const getRecommendationsMovie = (id) => {
        GlobalAPI.getRecommendationsMovies(id).then(res => {
            res.data.results.length!==0 ? setSimilarMovies(res.data.results) : getSimilarMovie(id);
            // console.log(res.data.results)
        })
    }
    const getSimilarMovie = (id) => {
        GlobalAPI.getSimilarMovies(id).then(res => {
            setSimilarMovies(res.data.results);
        })
    }

    const getActors = (id) => {
        GlobalAPI.getActorsOfMovie(id).then(res => {
            setActors(res.data.cast);
        })
    }

    const getImages = (id) => {
        GlobalAPI.getMovieImages(id).then(res => {
            setMovieImages(res.data.backdrops);
            // console.log(res.data)
        })
    }
    
    

    return (
        <div>
            {
                loader ? (
                    <div className="w-full h-[80vh] flex justify-center items-center">
                        <ScaleLoader
                            color={"#ffffff"}
                            loading={true}
                            size={80}
                        /> 
                    </div>
                ) : (
                    <div>
                        {/* <div>
                            <img src={IMAGE_BASE_URL+movieDetails.backdrop_path} className="opacity-30 w-full"/>
                        </div> */}
                        
                        {/* <div style={{ backgroundImage:  `url(${bgImage})` }} className="bg-cover h-screen relative">
                        <div className="bg-gradient-to-t from-[#131520] to-gray-600  absolute h-full w-full"></div> */}
            
            
                        {/* HEADER */}
                        <HeaderDetails type={"movie"} movieDetails={movieDetails} setVideoCancel={setVideoCancel} />

                        {/* Images */}
                        {movieImages.length!==0 && (
                            <div className="p-5">
                                <h1 className="text-2xl md:text-3xl">Images</h1>
                                <div className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-8 pt-5 pb-5 px-3">
                                    {
                                        movieImages.map((item, index) => index<11 && (
                                            <div key={index}>
                                                <HrMovieCard type={"Details"} movie={item}/>
                                            </div>
                                        ))  
                                    }
                                </div>
                            </div>
                        )}

                        {/* Actors */}
                        {actors.length!==0 &&
                            <Actors actors={actors}/>
                        }
            
                        {/* Similar */}
                        {similarMovies.length!==0 &&
                            <SimilarMovies movieId={movieId} similar={similarMovies} urlName={"movie"}/>
                        }
            
                        {videoCancel &&
                            <MovieTrailer trailerLink={trailerLink} setVideoCancel={setVideoCancel} />
                        }
            
                    </div>
                )
            }
        </div>
    )
}

export default movieDetails