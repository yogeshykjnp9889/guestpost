import './App.css';
import './Innerpage.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';

import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetail from './pages/PostDetail';
import CatePage from "./pages/CatePage";


function App() {
  
  return (
    <>
    <Router>
      <Navbar titleText = "Logog HERE" />
      <Routes>
          <Route exact  path='/'  element={<Home />} />
          <Route exact  path='/about'  element={<About />} />
          <Route exact  path='/post/:postDetail'  element={<PostDetail />} />
          <Route exact  path='/category/:cateSlug'  element={<CatePage/>} />
          <Route exact  path='/contact-us'  element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;