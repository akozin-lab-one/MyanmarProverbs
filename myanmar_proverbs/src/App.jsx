import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { api } from "./api/apiResource";
import { Route, Routes } from "react-router";
import MainList from "./components/MainList";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import itemContext from "./Context/ItemContext";

const App = () => {
  const [titles, setTitle] = useState("[]");
  const [main, setMain] = useState("[]");
  const getTitle = async () => {
    const res = await api.get("/Tbl_MMProverbsTitle");
    console.log(res.data);
    setTitle(res.data);
  };

  useEffect(() => {
    getTitle();
  }, []);

  const getMain = async () => {
    const res = await api.get("/Tbl_MMProverbs");
    console.log(res.data);
    setMain(res.data);
  };

  useEffect(() => {
    getMain();
  }, []);

  return (
    <div>
      <itemContext.Provider value={titles}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wordList" element={<MainList titles={titles} />} />
          <Route path="/wordList/:id" element={<ItemList main={main} />} />
          <Route path="/wordList/:id/:itemId" element={<Item main={main} />} />
        </Routes>
      </itemContext.Provider>
    </div>
  );
};

export default App;
