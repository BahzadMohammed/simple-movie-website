import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderDetails({ type, movieDetails, setVideoCancel, }) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const genres = movieDetails.genres;
    const production_companies = movieDetails.production_companies;


    return (
        <div>
            <div>
                <div className="bg-cover h-full md:h-screen w-full relative mb-10">

                    <img src={IMAGE_BASE_URL+movieDetails.backdrop_path} className="-z-10 absolute top-0 hidden md:block object-cover  h-screen w-full" loading="lazy"/>
                    <div className="-z-10 hidden md:block bg-gradient-to-t from-[#131520] to-gray-700 bg-cover h-screen w-full absolute mix-blend-multiply"></div>

                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-7 w-full p-10  z-0">
                        <img src={IMAGE_BASE_URL+movieDetails.poster_path} className="w-96 rounded-xl" loading="lazy"/>
                        <div className="py-7 flex flex-col gap-7">
                            <h1 className="text-4xl font-semibold text-white">{movieDetails.title || movieDetails.name}</h1>
                        
                            <p>{movieDetails.overview}</p>

                            <div className="flex gap-3 text-sm">
                                {
                                    genres?.map((item, index) => (
                                        <p key={index} >{item.name}</p>
                                    ))
                                }
                            </div>

                            
                            {type==="movie" ?
                                <p className="text-xs italic">Release Date: {movieDetails.release_date}</p>
                                :
                                <p className="text-xs italic">First Air Date: {movieDetails.first_air_date}</p>
                            }

                            <div className="flex gap-3">
                                {
                                    production_companies?.map((company, index) => (
                                        company.logo_path &&
                                            <div key={index} className="bg-white h-12 w-12 p-2 rounded-full flex align-middle items-center">
                                                <img src={IMAGE_BASE_URL+company.logo_path} className=""/>
                                            </div>
                                    ))
                                }
                            </div>

                            
                            <button className="trailerB border-2 border-[#E10000] hover:bg-[#E10000] rounded-xl px-4 py-3 text-x hover:scale-100 transition-all duration-200 md:w-56 mt-5" onClick={()=>setVideoCancel(true)} ><FontAwesomeIcon icon={faPlay} beat /> &nbsp;&nbsp; WATCH TRAILER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetails