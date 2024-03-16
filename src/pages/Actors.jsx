import { useState, useEffect } from "react";
import GlobalAPI from "../services/GlobalAPI";
import PartCards from "../components/partCards";
import Pagination from "../components/Pagination";
import { ClipLoader, ScaleLoader } from "react-spinners";

function Actors() {
    const [pageNumber, setPageNumber] =useState(1);
    const [actors, setActors] =useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        getActors(pageNumber);
    }, [pageNumber])

    useEffect(()=>{
        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }, [actors])

    const getActors = (page) => {
        GlobalAPI.getActors(page).then(res => {
            setActors(res.data.results);
            console.log(res.data.results)
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
                        <PartCards list={actors} urlName={"actor"}/>
                        
                        {/* pagination */}
                        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} setLoader={setLoader}/>
                    </div>
                )
            }
        </div>
    )
}

export default Actors