import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderItem({name, Icon, title, link}) {

  let NLink = link.toLowerCase();
  NLink = NLink.replace(/\s/g, '')
  const [url, setUrl] = useState("");
  const u = useLocation();

  useEffect(()=>{
    linkUrl(NLink);
  }, [NLink, url, window.location.pathname]);
  // console.log(window.location.pathname)

  function linkUrl(name){
    // console.log(name)
    switch(name) {
      case "movies" : return setUrl(name);
      case "series" : return setUrl(name);
      case "actors" : return setUrl(name);
      case "search" : return setUrl(window.location.pathname);
      case "" : return setUrl(window.location.pathname);
    }
  }
  return (
      <Link to={url}>
        <div className="relative text-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer">
            <Icon title={title} className="hover:text-slate-400 md:hover:text-white transition-all duration-100"/>
            <h2 className="nav">{name}</h2>
        </div>
      </Link>
  )
}

export default HeaderItem;