import { useState, useEffect } from "react";
import GlobalAPI from "../services/GlobalAPI";
import PartCards from "../components/partCards";
import Pagination from "../components/Pagination";
import { ClipLoader, ScaleLoader } from "react-spinners";

function Tvshow() {

    const [pageNumber, setPageNumber] =useState(1);
    const [tvshow, setTvshow] =useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        getTvshows(pageNumber);
    }, [pageNumber])

    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }, [tvshow])

    const getTvshows = (page) => {
        GlobalAPI.getPopularTvshows(page).then(res => {
            setTvshow(res.data.results);
            console.log(res.data)
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
                        {/* tvshows card */}
                        <PartCards list={tvshow} urlName={"tvshow"}/>
                        
                        {/* pagination */}
                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} setLoader={setLoader}/>
                    </div>
                )
            }
        </div>
    )
}

export default Tvshow