import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import { supabase } from "./client";
import {EditCreator} from "./pages/EditCreator";
import {ViewCreator} from "./pages/ViewCreator";
import "./App.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-container">
      <h1>CREATORVERSE</h1>
      <div className="navigation">
        <button onClick={() => navigate("/")}>VIEW ALL CREATORS</button>
        <button onClick={() => navigate("/add-creator")}>ADD A CREATOR</button>
      </div>
    </div>
  );
};

const App = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*');
      setCreators(data);
    };
    fetchCreators();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from('creators').delete().eq('id', id);
    setCreators(creators.filter((creator) => creator.id !== id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ShowCreators creators={creators} />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/view-creator/:id" element={<ViewCreator />} />
        <Route path="/edit-creator/:id" element={<EditCreator />} />
      </Routes>
    </Router>
  );
};

export default App;

