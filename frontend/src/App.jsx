import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

//components
import BioPage from './components/BioPage/BioPage';
import NamePage from './components/NamePage/NamePage';
import ProfilePicturePage from './components/ProfilePicturePage/ProfilePicturePage';
import ContactInformationPage from './components/ContactInformationPage/ContactInformationPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import ProfessionalLinksPage from './components/ProfessionalLinksPage/ProfessionalLinksPage';
import PreviewPage from './components/PreviewPage/PreviewPage';
import OccupationPage from './components/OccupationPage/OccupationPage';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/BioPage" element={<BioPage />} />
          <Route path="/" element={<NamePage />} />
          <Route path="/ProfilePicturePage" element={<ProfilePicturePage />} />
          <Route path='/ContactInformationPage' element={<ContactInformationPage />} />
          <Route path='/SkillsPage' element={<SkillsPage />}/>
          <Route path='/ProfessionalLinksPage' element={<ProfessionalLinksPage />}/>
          <Route path='/OccupationPage' element={<OccupationPage />}/>
          <Route path='/PreviewPage' element={<PreviewPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
