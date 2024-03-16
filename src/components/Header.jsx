import logo from '../assets/images/mt logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdMovie } from "react-icons/md";
import HeaderItem from './HeaderItem';
import { useEffect, useState } from 'react';
import GlobalAPI from "../services/GlobalAPI"
import { Link } from 'react-router-dom';


function Header() {

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        // {
        //     name: 'ORIGINALS',
        //     icon: BiSolidCameraMovie
        // },
        {
            name: 'ACTORS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];

    // useEffect(()=>{
    //     setToggle(false);
    // }, [window.location.href])

    const [toggle, setToggle] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [searchMovieList, setSearchMovieList] = useState([]);
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    


    const searchMovie = (name) => {
        GlobalAPI.getSearchMovieUrlFun(name).then(res => {
            setSearchMovieList(res.data.results)
            // console.log(res.data.results)
            
        })
        // console.log('>>>list ' + searchMovieList)
    }

    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-8">
                    <img src={logo} className="w-[40px] md:w-[60px] object-cover"/>
                    <div className="hidden md:flex gap-8">
                        {
                            menu.map((item, index) => (
                                <div key={index} onClick={() => {
                                    setSearchBar(item.name==='SEARCH' ? !searchBar : false);
                                    setSearchMovieList([]);
                                }}>
                                    <HeaderItem name={item.name} Icon={item.icon} link={item.name} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-5 md:hidden">
                        {
                            menu.map((item, index) => index<3 && (
                                <div key={index} onClick={() => {
                                    setSearchBar(item.name==='SEARCH' ? !searchBar : false);
                                    setSearchMovieList([]);
                                }}>
                                    <HeaderItem title={item.name} Icon={item.icon} link={item.name}/>
                                </div>
                            ))
                        }
                        <div>
                            <button onClick={() => setToggle(!toggle)}><HeaderItem name={''} Icon={HiDotsVertical} link={''}/></button>
                            {toggle && (
                                <div className="absolute z-20 bg-[#121212] mt-3 px-7 pt-4 pb-1 border-[1px] border-gray-600 rounded-[6px]">
                                    {
                                        menu.map((item, index) => index>=3 && (
                                            <div  key={index} className="pb-3">
                                                <HeaderItem name={item.name} Icon={item.icon} link={item.name}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* <img src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxtZW58ZW58MHx8MHx8fDA%3D" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] object-cover rounded-full" /> */}
            </div>
            
            {searchBar && 
                <div className="w-full px-10 md:px-40 mb-5">
                    <div className="flex relative overflow-hidden">
                        <input type="text" className={`w-full outline-none border-none text-black px-4 py-2 m-0 ${searchMovieList.length===0 ? "rounded-lg":"rounded-t-lg"}`} placeholder='Serach...' onChange={e => searchMovie(e.target.value)}/>
                        <button className={`absolute right-0 text-red-900 hover:text-red-700 transition-all duration-200 bg-slate-400 h-full text-lg px-3 md:px-4 md:text-xl cursor-pointer ${searchMovieList.length===0 ? "rounded-r-md":"rounded-tr-md"}`} onClick={() => {
                            setSearchBar(false);
                            setSearchMovieList([]);
                        }}>X</button>
                    </div>
                    {searchMovieList && 
                        <div className="w-full bg-white max-h-40 m-0 px-4 overflow-auto scrollbar scrollbar-track-slate-300 scrollbar-track-rounded-md scrollbar-h-1 scrollbar-w-2 scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 rounded-b-lg">
                            {
                                searchMovieList.map((item, index) => (
                                    item.poster_path &&
                                    <Link to={`/movie/${item.id}`} onClick={()=>{
                                        setSearchBar(false);
                                        setSearchMovieList([]);
                                    }}>
                                        <li key={index} className="flex gap-3 py-1 cursor-pointer">
                                            <img src={IMAGE_BASE_URL + item.poster_path } alt='#' className="w-16"/>
                                            <p className="text-black">{item.title}</p>
                                        </li>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>
            }


        </div>
    )
}

export default Header