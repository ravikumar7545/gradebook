import './App.css';
import React, { useState } from 'react';
import ContentPage from './Components/ContentPage';
import Header from './Components/Header';
import StudentContext from './StudentContext';
import DownloadPage from './Components/DownloadPage';
import Footer from './Footer';
import Details from './Components/Details';

function App() {
  const [isDownloadTrigger, setIsDownloadTrigger] = useState(false);
  const [isDetailsTrigger, setIsDetailsTrigger] = useState(false);
  const [downloadData, setDownloadData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);
  return (
    <StudentContext.Provider
      value={{
        setIsDownloadTrigger,
        setDownloadData,
        isDetailsTrigger,
        setIsDetailsTrigger,
        setDetailsData,
      }}
    >
      <div className="App">
        <Header />
        <ContentPage />
        <Footer />
      </div>
      {isDownloadTrigger && <DownloadPage value={downloadData} />}
      {isDetailsTrigger && <Details value={detailsData} />}
    </StudentContext.Provider>
  );
}

export default App;
