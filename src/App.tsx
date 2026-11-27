import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Steel from './pages/Steel';
import Export from './pages/Export';
import RealEstate from './pages/RealEstate';
import News from './pages/News';
import Projects from './pages/Projects';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import Offices from './pages/Offices';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/steel" element={<Steel />} />
          <Route path="/export" element={<Export />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/departments" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
