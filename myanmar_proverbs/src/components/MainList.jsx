import React from "react";
import { NavLink } from "react-router-dom";

const MainList = ({ titles }) => {
  console.log(titles.length);

  if (JSON.stringify(titles) !== "[]") {
    return (
      <div className="container mx-auto w-[80%] md:w-[70%] lg:w-[70%] h-screen lg:flex justify-between items-center">
        <h2 className="h-[60px] lg:h-[45px] pl-1 lg:border-l-4 lg:border-gradient text-center text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          မြန်မာစကားပုံများကို အက္ခရာစဥ်လိုက်ရှာရန်
        </h2>
        <div className="lg:h-[80%] grid grid-cols-5 gap-x-1 gap-y-2 mt-2  lg:gap-x-3 lg:gap-y-3">
          {Array.isArray(titles) === true
            ? titles.map((title, index) => {
              console.log(index);  
              return [
                <NavLink  key={title.TitleId} to={`/wordList/${title.TitleId}`}>
                  <p
                    className="w-12 h-14 md:w-20 md:h-20 text-xs cursor-pointer hover:bg-green-600 hover:text-white drop-shadow-md lg:w-20 lg:h-16 rounded-lg flex justify-center items-center bg-green-300 font-exrablod"
                  >
                    {/* {index} */}
                    {title.TitleName}
                  </p>
                </NavLink>
                ];
              })
            : ""}
        </div>
      </div>
    );
  }
};

export default MainList;
