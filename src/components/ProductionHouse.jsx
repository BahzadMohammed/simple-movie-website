import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/video/disney.mp4";
import marvelV from "../assets/video/marvel.mp4";
import nationalGV from "../assets/video/nationalG.mp4";
import pixarV from "../assets/video/pixar.mp4";
import starwarV from "../assets/video/startwar.mp4";


function ProductionHouse() {

    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: nationalG,
            video: nationalGV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwar,
            video: starwarV
        }
    ];


    return (
        <div className="flex gap-3 md:gap-5 p-2 px-5 md:px-16">
            {
                productionHouseList.map((item, index) => (
                    <div key={index} className="border-[2px] border-gray-600 rounded-full md:rounded-lg hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer relative shadow-xl shadow-black">
                        <img src={item.image} className="w-full z-1"/>
                        <video src={item.video} autoPlay loop playsInline muted className="absolute top-0 z-0 w-full rounded-full w-full md:rounded-md opacity-0 hover:opacity-50"/>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductionHouse