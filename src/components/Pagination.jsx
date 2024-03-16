import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination({ pageNumber, setPageNumber, setLoader }) {

    const [togglePageInput, setTogglePageInput] = useState(false);
    const [tempNum, setTempNum] = useState(1);

    function enter(e) {
        if(e.key==="Enter") {
            setTogglePageInput(false);
            setPageNumber(tempNum<1 ? 1:tempNum);
            setLoader(true)
        }
    }

    return (
        <div>
            <div className="flex p-10 gap-5">
                <div className={`${pageNumber!==1 ? "text-white cursor-pointer text-opacity-60 hover:text-opacity-100":"opacity-25"}  text-[25px] md:left-5  md:text-[30px]`} onClick={()=>{
                    setPageNumber(pageNumber!==1 ? pageNumber-1:pageNumber)
                    pageNumber!==1 ? setLoader(true):null;
                    window.scrollTo(0, 0)
                }}><HiChevronLeft/></div>

                <div onDoubleClick={()=>setTogglePageInput(true)} onKeyDown={(e)=>enter(e)}>
                    {
                        togglePageInput ? 
                            <input type="number" autoFocus className="w-10 text-black text-center outline-none" onInput={(e)=>setTempNum(e.target.value)}/> 
                        : 
                        pageNumber
                    }
                </div>

                <div className={`text-white text-[25px] md:right-5 cursor-pointer md:text-[30px] text-opacity-60 hover:text-opacity-100`} onClick={()=>{
                    setPageNumber(pageNumber+1)
                    setLoader(true)
                    window.scrollTo(0, 0)
                }}><HiChevronRight/></div>
            </div>
        </div>
    )
}

export default Pagination