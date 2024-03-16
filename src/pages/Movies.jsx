import { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI"
import MovieCard from "../components/MovieCard";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import PartCards from "../components/partCards";
import { ClipLoader, ScaleLoader } from "react-spinners";


function Movies() {

    const [pageNumber, setPageNumber] =useState(1);
    const [movies, setMovies] =useState([]);
    const [loader, setLoader] = useState(true);
    


    useEffect(()=>{
        getMovies(pageNumber);
        // setLoader(true)
        // setTimeout(() => {
        //     setLoader(false)
        // }, 4000);
    }, [pageNumber])

    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }, [movies])

    
    const getMovies = (page) => {
        GlobalAPI.getPopularMovies(page).then(res => {
            setMovies(res.data.results);
        })
    }


    return (
        <div>
            {
                loader ? 
                    <div className="w-full h-[80vh] flex justify-center items-center">
                        <ScaleLoader
                            color={"#ffffff"}
                            loading={true}
                            size={80}
                        /> 
                    </div>
                    : (
                    
                    <div className="flex flex-col items-center">
                        {/* movies card */}
                        <PartCards list={movies} urlName={"movie"}/>
                        
                        {/* pagination */}
                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} setLoader={setLoader}/>
                    </div>
                )
            }
        </div>
    )
}

export default Movies