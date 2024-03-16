import { useCallback, useEffect, useRef, useState } from "react";
import GenresList from "../constant/GenresList"
import MovieList from "./MovieList"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";



function GenreMovieList() {

  const [slider, setSlider] = useState({});
  const movieListRef = useRef();
  const [limit, setLimit] = useState(0);
  let [func, setFunc] = useState('');
  
  // const sliderRight = (id) => {
  //   setSlider({
  //     id: id,
  //     fun: 'right'
  //   });
  // }
  // const sliderLeft = (id) => {
  //   setSlider({
  //     id: id,
  //     fun: 'left'
  //   });
  // }
  
  useEffect(() => {
    if(func==='right') {
      movieListRef.current.sliderRight(movieListRef);
    } else {
      movieListRef.current.sliderLeft(movieListRef);
    }
  }, [limit, func])


  function left(index) {
    setLimit(index)
    limit===index ? movieListRef.current.sliderLeft(movieListRef) : setFunc("left");
  }
  function right(index) {
    setLimit(index)
    limit===index ? movieListRef.current.sliderRight(movieListRef) : setFunc("right");
  }


  return (
    <div>
        {
          GenresList.genere.map((item, index) => index<=4 && (
            <div key={index} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              
              <div className={`text-white text-[25px] z-10 absolute left-1 md:left-5 ${index%3==1 ? "md:mt-[90px]  mt-[60px]": "md:mt-[150px]  mt-[90px]"}  cursor-pointer md:text-[30px] text-opacity-60 hover:text-opacity-100`} onClick={()=>left(index)}><HiChevronLeft/></div>

              <div className={`text-white text-[25px] z-10 absolute right-1 md:right-5 ${index%3==1 ? "md:mt-[90px]  mt-[60px]": "md:mt-[150px]  mt-[90px]"} cursor-pointer md:text-[30px] text-opacity-60 hover:text-opacity-100`} onClick={()=>right(index)}><HiChevronRight/></div>

              {limit==index ? 
                <MovieList ref={movieListRef} id={item.id} index_={index} /> :
                <MovieList id={item.id} index_={index}/>
              }
            </div>
          ))
        }
    </div>
  )
}

export default GenreMovieList

