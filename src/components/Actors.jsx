import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function Actors({ actors, type }) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    // console.log(actors)
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl md:text-3xl">{type ? type:"Actors"}</h1>
                <div className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-4 md:gap-8 pt-5 pb-5 px-3">
                    {
                        actors.map((item, index) =>  (
                            (item.profile_path || item.file_path) &&
                            <div key={index} className="p-0 gap-0 m-0">
                                <Link to={`/actor/${item.id}`}>
                                    <div className="text-center flex flex-col justify-center gap-3 mb-3">
                                        <div className="w-[110px] md:w-[200px] gap-5  rounded-lg overflow-hidden">
                                            <img src={IMAGE_BASE_URL+ (type==="Images" ? item.file_path:item.profile_path)} className="rounded-lg cursor-pointer hover:scale-110 transition-all duration-150 ease-in"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xs md:text-base">{item.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Actors