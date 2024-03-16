import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PartCards({ list, urlName }) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 p-5">
                
                {
                    list.map((item, index) =>  (
                        (item.poster_path || item.profile_path) &&
                        <div key={index} className="">
                            <Link to={`/${urlName}/${item.id}`}>
                                <div className="text-center flex flex-col justify-center gap-3 mb-3">
                                    <div className="w-[110px] md:w-[200px]  gap-5 overflow-hidden rounded-lg transition-all duration-150 ease-in cursor-pointer">
                                        <img src={urlName==="actor" ? IMAGE_BASE_URL+item.profile_path: IMAGE_BASE_URL+item.poster_path} className="rounded-md hover:scale-110 transition-all duration-150 ease-in" loading="lazy"/>
                                    </div>
                                    {
                                        urlName==="actor" && <h3 className="text-xs md:text-base">{item.name}</h3>
                                    }
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

// border style:
// hover:border-[2px] md:hover:border-[3px] border-gray-400

export default PartCards