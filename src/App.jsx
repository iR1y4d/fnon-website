import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Main from "./sections/Main";
import OurServices from "./sections/OurServices";
import OurWorks from "./sections/OurWorks";
import Employees from "./sections/Employees";
import ContactUs from "./sections/ContactUs";
import Works from "./sections/Works";
import MainWorkPage from "./sections/MainWorkPage";
import Footer from "./sections/Footer";
import OurEmployees from "./sections/OurEmployees";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <OurServices />
              <OurWorks />
              {/* <Employees /> */}
              <OurEmployees />
              <ContactUs />
            </>
          }
        />

        <Route path="/works" element={<Works />} />
        <Route path="/works/:title" element={<MainWorkPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
