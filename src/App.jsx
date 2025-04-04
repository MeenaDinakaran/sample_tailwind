import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Platform from './pages/Platform';
import DataEngineering from './pages/DataEngineering';
import AIInnovation from './pages/AIInnovation';
import ContactForm from './components/ContactForm';
import RequestDemoForm from './components/RequestDemoForm';
import SubmitPage from './pages/SubmitPage';
import  Documentation from './pages/Documentation';
import  CaseStudy  from './pages/CaseStudy';
import  Learnmore from './pages/Learnmore';
import Dataanalytics  from './components/Dataanalytics ';





function App() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  // ScrollToTop component to ensure page scrolls to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header openDemoForm={openDemoForm} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openDemoForm={openDemoForm} />} />
            <Route path="/platform" element={<Platform openDemoForm={openDemoForm} />} />
            <Route path="/data-engineering" element={<DataEngineering openDemoForm={openDemoForm} />} />
            <Route path="/ai-innovation" element={<AIInnovation openDemoForm={openDemoForm} />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/Documentation" element={<Documentation />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />
            <Route path="/Learnmore" element={<Learnmore />} />
            <Route path="/Dataanalytics " element={<Dataanalytics  />} />
          </Routes>
        </main>
        <Footer openDemoForm={openDemoForm} />
        
        {/* Demo Request Form Modal */}
        {isDemoFormOpen && <RequestDemoForm closeForm={closeDemoForm} />}
      </div>
    </Router>
  );
}

export default App;