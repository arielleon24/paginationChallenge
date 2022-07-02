import './App.scss';
import React, {useState, useEffect} from 'react';
import Header from "../src/components/Header/Header";
import SiteList from "../src/components/SiteList/SiteList";
// import Pagination from "../src/components/Pagination/Pagination";
import axios from 'axios';

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);

  useEffect(()=> {
    const getListings = async () => {
      setLoading(true);
      const res = await axios.get("https://tracktik-challenge.staffr.com/sites");
      setListings(res.data)
      setLoading(false);
    }

    getListings();
  }, []);

  const indexOfLastListing = currentPage * resultsPerPage;
  const indexOfFirtListing = indexOfLastListing - resultsPerPage;
  const currentListing = listings.slice(indexOfFirtListing, indexOfLastListing);

  return (
    <div className="App">
      <Header/>
      <SiteList 
      total={listings.length} 
      listings={currentListing} 
      loading={loading} 
      resultsPerPage={resultsPerPage} 
      setResultsPerPage={setResultsPerPage}
      setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
