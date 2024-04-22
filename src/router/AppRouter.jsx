import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UberUns from "../pages/UberUns";
import Kontakt from "../pages/Kontakt";
import Aktuelles from "../pages/Aktuelles";
import Impressum from "../pages/Impressum";
import ScrollBtn from "../components/scrollTop/ScrollBtn";
import GoHome from "../components/goHome/GoHome";
import Dialog from "../pages/Dialog";
import Mitmachen from "../components/Mitmachen";
import Partner from "../components/Partner";
import Bildung from "../pages/Bildung";
import MigrationsArbeit from "../pages/MigrationsArbeit";
import JugendSoziales from "../pages/JugendSoziales";
import Datenschutzerklärung from "../pages/Datenschutzerklärung";

import JugendDetail from "../pages/details/JugendDetail";
import DialogDetail from "../pages/details/DialogDetail";
import BildungDetail from "../pages/details/BildungDetail";
import MigrationsDetail from "../pages/details/MigrationsDetail";
import AllInfoDetails from "../pages/details/AllInfoDetails";
import ProjektDetail from "../pages/details/ProjektDetail";
import AktuellDetail from "../pages/details/AktuellDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className="mb-md-4"></div> */}
      <ScrollBtn />
      <GoHome />
      <Routes>
        <Route index element={<Home />} />
        <Route path="uberUns" element={<UberUns />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="aktuelles" element={<Aktuelles />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutzerklärung />} />
        <Route path="bildung" element={<Bildung />} />
        <Route path="dialog" element={<Dialog />} />
        <Route path="migration" element={<MigrationsArbeit />} />
        <Route path="jugend" element={<JugendSoziales />} />

        <Route path="jugend/:id" element={<JugendDetail />} />
        <Route path="dialog/:id" element={<DialogDetail />} />
        <Route path="bildung/:id" element={<BildungDetail />} />
        <Route path="migration/:id" element={<MigrationsDetail />} />
        <Route path="aktuell/:id" element={<AktuellDetail />} />
        <Route path="projekt/:id" element={<ProjektDetail />} />
        <Route path="/detail/:categoryId" element={<AllInfoDetails />} />
      </Routes>
      <Mitmachen />
      <Partner />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
