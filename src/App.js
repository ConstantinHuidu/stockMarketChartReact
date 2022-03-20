import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Chart from './Chart';


function App() {
  const [companyName, setCompanyName] = useState('AAPL');

  return (
    <>
      <SearchBar companyName={companyName} setCompanyName={setCompanyName}/>
      <Chart companyName={companyName} setCompanyName={setCompanyName} />
    </>
  )
}

export default App;
