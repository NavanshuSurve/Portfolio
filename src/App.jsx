import { BrowserRouter, Routes,Route} from "react-router-dom";
import Header from './header'
import Footer from './Footer'
import Cursor from './Cursor'
import './index.css';
import { HomeContent, AboutContent, GitHubContent, LinkedInContent } from "./AnimationContent";
import Home from "./pages/Home";
import About from "./pages/About";
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
function App()
{
    return(<>
    <Cursor />
        <BrowserRouter>
      <Header title="Navanshu Surve"/>  
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
      </Routes>
    </BrowserRouter>
    </>
         
        
)
}

export default App
