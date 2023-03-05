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
import Myaccount from './pages/Myaccount';
import Dashboard from './pages/Dashboard';
import AddPost from './pages/Add-post';
import Profile from './pages/Profile';
import ListPost from './pages/List-post';
import Logout from './component/Logout';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
          <Route exact  path='/'  element={<Home />} />
          <Route exact  path='/about'  element={<About />} />
          <Route exact  path='/post/:postDetail'  element={<PostDetail />} />
          <Route exact  path='/category/:cateSlug'  element={<CatePage/>} />
          <Route exact  path='/contact-us'  element={<Contact />} />
          <Route exact  path='/myaccount'  element={<Myaccount />} />
          <Route exact  path='/dashboard'  element={<Dashboard />} />
          <Route exact  path='/add-post'  element={<AddPost />} />
          <Route exact  path='/list-post'  element={<ListPost />} />
          <Route exact  path='/profile'  element={<Profile />} />
          <Route exact  path='/logout'  element={<Logout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;