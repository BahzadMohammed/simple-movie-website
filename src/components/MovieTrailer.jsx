
function MovieTrailer({ trailerLink, setVideoCancel }) {
  console.log("movieTrailer "+trailerLink)
  return (
    <div>
        <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full ">
            <div className="flex items-center justify-center w-full h-full">
                <iframe
                    className="w-[80%] h-[40%]  md:w-[60rem] md:h-[35rem]"
                    // width="70%"
                    // height="70%"
                    src={trailerLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <button className="absolute top-0 right-0 m-10 z-10 text-xl md:text-3xl bg-slate-300 w-7 h-7 md:w-10 md:h-10 flex justify-center rounded-full hover:text-red-600 text-red-800" onClick={()=>setVideoCancel(false)}>X</button>

            <div className="bg-[#131520] opacity-95 fixed top-0 right-0 left-0 bottom-0 -z-10 w-full h-full"></div>
        </div>
    </div>
  )
}

export default MovieTrailer