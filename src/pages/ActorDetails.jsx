import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import GlobalAPI from "../services/GlobalAPI"
import SimilarMovies from "../components/SimilarMovies";
import HeaderActorDetails from "../components/HeaderActorDetails";
import Actors from "../components/Actors";
import { ClipLoader, ScaleLoader } from "react-spinners";

function ActorDetails() {

    const {actorId} = useParams();
    const [actorDetails, setActorDetails] = useState({});
    const [actorImages, setActorImages] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [tvshowCredits, setTvshowCredits] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        getActorDetail(actorId);
        getActorImages(actorId);
        getActorMovieCredits(actorId);
        getActorTvshowCredits(actorId);
    }, [actorId])

    const getActorDetail = (id) => {
        GlobalAPI.getActorDetails(id).then(res => {
            setActorDetails(res.data);
            // console.log(res.data)
        })
    }

    const getActorImages = (id) => {
        GlobalAPI.getActorImages(id).then(res => {
            setActorImages(res.data.profiles);
            // console.log(res.data.profiles);
        })
    }

    const getActorMovieCredits = (id) => {
        GlobalAPI.getActorMovieCredits(id).then(res => {
            setMovieCredits(res.data.cast);
            // console.log(res.data.cast);
        })
    }

    const getActorTvshowCredits = (id) => {
        GlobalAPI.getActorTvshowCredits(id).then(res => {
            setTvshowCredits(res.data.cast);
            // console.log(res.data.cast);
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
                    <div className="flex flex-col gap-7">
                        {/* HEADER */}
                        <HeaderActorDetails actorDetails={actorDetails}/>

                        {/* Images */}
                        {actorImages.length!==0 &&
                            <Actors actors={actorImages} type={"Images"}/>
                        }

                        {/* Movies */}
                        {movieCredits!==0 &&
                            <SimilarMovies similar={movieCredits} urlName={"movie"} type={"Movies"}/>
                        }

                        {/* Movies */}
                        {tvshowCredits.length!==0 &&
                            <SimilarMovies similar={tvshowCredits} urlName={"tvshow"} type={"TV Shows"}/>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ActorDetails