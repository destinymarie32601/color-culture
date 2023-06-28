import React from 'react';
import NavTabs from './components/NavTabs';
import "./App.css";

function handlePageChange(page) {
  // Your code to handle the page change event
  console.log('Page changed:', page);
}

function App() {
  return (<div className="App">
  <NavTabs currentPage="Home" handlePageChange={handlePageChange} />
</div>);
}

export default App;
