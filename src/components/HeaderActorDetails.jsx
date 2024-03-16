
function HeaderDetails({ actorDetails }) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <div>
                <div className="bg-cover h-full w-full relative">

                    {/* <img src={IMAGE_BASE_URL+actorDetails.backdrop_path} className="-z-10 absolute top-0 hidden md:block object-cover  h-screen w-full"/>
                    <div className="-z-10 hidden md:block bg-gradient-to-t from-[#131520] to-gray-700 bg-cover h-screen w-full absolute mix-blend-multiply"></div> */}

                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-7 w-full p-10  z-0">
                        <img src={IMAGE_BASE_URL+actorDetails.profile_path} className="h-[40rem] rounded-xl" />
                        <div className="py-7 flex flex-col gap-7">
                            <h1 className="text-4xl font-semibold text-white">{actorDetails.name}</h1>
                        
                            <p className="text-sm"><b>Biography : </b> &nbsp;&nbsp; {actorDetails.biography}</p>

                            <p className="text-xs"><b>Place of birthday :</b> &nbsp; {actorDetails.place_of_birth}</p>

                            <p className="text-xs"><b>Birthday :</b> &nbsp;{actorDetails.birthday}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetails