import { Route, Routes, useNavigate } from "react-router-dom";
import { useRef } from "react";
import MainSection from '../components/MainSection'

export const AppRouter = () => {
  const navigate = useNavigate();  
  const buttonRef = useRef(null);  

  const handleClick = () => {
    navigate("/login");  
  };

  return (
    <Routes>
      <Route
        path="/home"
        element={<MainSection />}
      />
      <Route path="/book/" element={<h1>Chau mundo</h1>} />
    </Routes>
  );
};
