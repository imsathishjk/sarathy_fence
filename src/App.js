import './index.css';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Testimonials } from './Components/Testimonials.';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { useState } from 'react';
import { Service } from './Components/Service';
import { SideBar } from './Components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [background, setBackground] = useState('Light');
  const [openSidebar, setOpensidebar] = useState(false);


  const switchBackground = () => {
    if (background.toLowerCase() === 'light') {
      setBackground('Dark');
    } else {
      setBackground('Light')
    }
  };

  return (
    <div className={`App overflow-hidden ${background === 'Dark' ? 'bg-black text-white transition-all duration-500 ease-in-out' : 'bg-white text-black transition-all duration-500 ease-in-out'}`}>
      <ToastContainer />
      <SideBar openSidebar={openSidebar} setOpensidebar={setOpensidebar} background={background} />
      <Navbar background={background} switchBackground={switchBackground} openSidebar={openSidebar} setOpensidebar={setOpensidebar} />
      <Header />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
