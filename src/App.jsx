import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/Contact";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <>
                <Search foodData={foodData} setFoodData={setFoodData} />
                <Container>
                  <InnerContainer>
                    <FoodList setFoodId={setFoodId} foodData={foodData} />
                  </InnerContainer>
                  <InnerContainer>
                    <FoodDetails foodId={foodId} />
                  </InnerContainer>
                </Container>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
