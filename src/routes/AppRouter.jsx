import { Route, Routes, useNavigate } from "react-router-dom";
import { useRef } from "react";
import MainSection from '../components/MainSection'
import BookInfo from '../components/BookInfo'

export const AppRouter = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<MainSection />}
      />
      <Route path="/book/:id" element={<BookInfo />} />
    </Routes>
  );
};
