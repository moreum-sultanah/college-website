
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import ProgramPage from "./pages/ProgramPage";
import Notices from "./pages/Notices";
import NoticeDetails from "./pages/NoticeDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="academics/:programId" element={<ProgramPage />} />
        <Route path="notices" element={<Notices />} />
        <Route path="notices/:slug" element={<NoticeDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}