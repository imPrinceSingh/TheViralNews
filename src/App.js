import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./components/News";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import General from "./components/General";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Search from "./components/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";


function App() {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [nextd,setNextd] = useState(0)
   const pull =(data)=>{
    setNextd(data)
   }
  const set=()=> {
    setText(query);
    setQuery("");
  }
  const enter = (e) => {
    if (e.key === "Enter") {
      set();
    }
  };
  const prePage = () => { 
    setPage(page - 1); 
    document.documentElement.scrollTop = 0;
   };

  const nextPage = () => { 
    setPage(page + 1)
    document.documentElement.scrollTop = 0;
   };
  useEffect(()=>{
      setPage(1)
  },[nextd])
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<News pages={page} func={pull}/>}></Route>
          <Route path="/business" element={<Business pages={page} func={pull}/>}></Route>
          <Route path="/entertainment" element={<Entertainment pages={page} func={pull}/>}></Route>
          <Route path="/general" element={<General pages={page} func={pull}/>}></Route>
          <Route path="/health" element={<Health pages={page} func={pull}/>}></Route>
          <Route path="/science" element={<Science pages={page} func={pull}/>}></Route>
          <Route path="/sports" element={<Sports pages={page} func={pull}/>}></Route>
          <Route path="/technology" element={<Technology pages={page} func={pull}/>}></Route>
          <Route path="/search" element={<Search value={text} pages={page} func={pull}/>}></Route>
        </Routes>
        <div className="pages">
          <button onClick={prePage} disabled={page===1}>&larr; Previous </button>
          <button onClick={nextPage} disabled={page===nextd}>Next &rarr;</button>
        </div>
        <Footer />
        <div className="searchDiv ">
          <div className="btn">
            <input type="text" value={query} placeholder="Search..." name="search" 
            onChange={(e) => setQuery(e.target.value)} onKeyPress={enter} />
            <NavLink to={"/search"}>
              <button type="submit" onClick={set}>
                <i className="fa fa-search"></i>
              </button>
            </NavLink>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
