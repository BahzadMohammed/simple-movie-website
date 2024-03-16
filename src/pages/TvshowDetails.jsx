import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import GlobalAPI from "../services/GlobalAPI"
import MovieTrailer from "../components/MovieTrailer";
import SimilarMovies from "../components/SimilarMovies";
import Actors from "../components/Actors";
import HeaderDetails from "../components/HeaderDetails";
import { ClipLoader, ScaleLoader } from "react-spinners";
import HrMovieCard from "../components/HrMovieCard";

function TvshowDetails() {

    const {tvshowId} = useParams();
    const [tvshowDetails, setTvshowDetails] = useState({});
    const [similarTvshow, setSimilarTvshow] = useState([]);
    const [actors, setActors] = useState([]);
    const [tvshowImages, setTvshowImages] = useState([]);
    const [trailerLink, settrailerLink] = useState("");
    const [videoCancel , setVideoCancel] = useState(false);
    const [loader, setLoader] = useState(true);
    
    


    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        getTvshowDetail(tvshowId);
        getTrailer(tvshowId);
        getRecommendationsTvshow(tvshowId);
        getActors(tvshowId)
        console.log(tvshowId);
        getImages(tvshowId);
    }, [tvshowId]);
    
    
    const getTvshowDetail = (id) => {
        GlobalAPI.getTvshowDetails(id).then(res => {
            setTvshowDetails(res.data);
            console.log(res)
        })
    }

    const getTrailer = (id) => {
        GlobalAPI.getTvshowTrailer(id).then(res => {
            res.data.results.map((item, index) => {
                if(item.type === "Trailer"){
                    settrailerLink(`https://www.youtube.com/embed/${res.data.results?.[index].key}`);
                    return;
                }
            })
        });
    }

    const getRecommendationsTvshow = (id) => {
        GlobalAPI.getRecommendationsTvshows(id).then(res => {
            res.data.results.length!==0 ? setSimilarTvshow(res.data.results) : getSimilarTvshow(id);
            // console.log(res.data.results)
        })
    }
    const getSimilarTvshow = (id) => {
        GlobalAPI.getSimilarTvshows(id).then(res => {
            setSimilarTvshow(res.data.results);
        })
    }

    const getActors = (id) => {
        GlobalAPI.getActorsOfTvshow(id).then(res => {
            setActors(res.data.cast);
        })
    }

    const getImages = (id) => {
        GlobalAPI.getTvshowImages(id).then(res => {
            setTvshowImages(res.data.backdrops);
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
                        {/* HEADER */}
                        <HeaderDetails type={"tvshow"} movieDetails={tvshowDetails} setVideoCancel={setVideoCancel} />

                        {/* Images */}
                        {tvshowImages.length!==0 && (
                            <div className="p-5">
                                <h1 className="text-2xl md:text-3xl">Images</h1>
                                <div className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-8 pt-5 pb-5 px-3">
                                    {
                                        tvshowImages.map((item, index) => index<11 && (
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
                        {similarTvshow.length!==0 &&
                            <SimilarMovies similar={similarTvshow} urlName={"tvshow"}/>
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

export default TvshowDetails