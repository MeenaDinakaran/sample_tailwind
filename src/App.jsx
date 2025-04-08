import { Routes, Route,BrowserRouter  } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Platform from './pages/Platform';
import DataEngineering from './pages/DataEngineering';
import AIInnovation from './pages/AIInnovation';
import ContactForm from './components/ContactForm';
import RequestDemoForm from './components/RequestDemoForm';
import SubmitPage from './pages/SubmitPage';
import Documentation from './pages/Documentation';
import CaseStudy from './pages/CaseStudy';
import Learnmore from './pages/Learnmore';
import Dataanalytics from './components/Dataanalytics';

const App = () => {

  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);

  return (
    <>
      
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
        <Route path="/Dataanalytics" element={<Dataanalytics />} />
      </Routes>

      {isDemoFormOpen && <RequestDemoForm closeForm={closeDemoForm} />}

    </>
  );
};

export default App;
