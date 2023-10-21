import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import itemContext from "../Context/ItemContext";

const ItemList = ({ main }) => {
  console.log("component is loading");
  const id = useParams();
  console.log(id.id);
  const titles = useContext(itemContext);
  console.log(titles);
  const word = Array.isArray(titles) === true ? titles.filter((title)=>parseInt(title.TitleId) === parseInt(id.id)) : " ";
  console.log(word[0].TitleName);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setfilteredData] = useState('[]');

  if (JSON.stringify(main) !== "[]" ) {
    console.log(main);
    const items =
      Array.isArray(main) === true
        ? main.filter((ma) => parseInt(ma.TitleId) === parseInt(id.id))
        : "";
    console.log(items);

    function handleSearchInput(event) {
      const query = event.target.value;
      console.log(query.toLowerCase());
      setSearchTerm(query);
      // console.log(filteredItems);

      const filtered = items.filter((item) =>
        item.ProverbName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);

      setfilteredData(filtered);
      console.log(filteredData);
      // setSearchInput("");
    }

    if (JSON.stringify(filteredData) !== '[]') {
      return (
        <div className="container mx-auto w-[60%] flex justify-center items-center h-screen">
          <div className="container w-[60%] h-screen mx-auto">
            <div className="text-center pt-5">
              <h2 className="my-4 text-2xl font-extrabold">{word[0].TitleName} နှင့် သက်ဆိုင်သော စကားပုံများကိုရှာရန်</h2>
              <input
                className="w-[55%] pl-3 h-[35px] border rounded-lg text-sm"
                type="text"
                name=""
                id=""
                placeholder="မြန်မာစကားပုံများရှာရန်"
                onChange={handleSearchInput}
              />
            </div>
            <ul className="h-[90%] overflow-auto mt-5">
              {
                Array.isArray(filteredData) === true ? filteredData.map((filter)=>{
                  return [
                    <NavLink to={`/wordList/${filter.TitleId}/${filter.ProverbId}`} key={filter.ProverbId}>
                          <li className="my-3 border-b-2 cursor-pointer h-[35px]" >{filter.ProverbName}</li>
                    </NavLink>
                  ]
                }) :  <NavLink to='/wordList'>ရှာဖွေထားသောစကားပုံမရှိပါ။ <p className="bg-black w-[17%] text-center p-1 rounded-lg mt-4 text-white">ရှေ့သို့</p> </NavLink>
              }
            </ul>
          </div>
        </div>
      );
    }else{
      <h1>There is no Data for this search </h1>
    }
  }
};

export default ItemList;
