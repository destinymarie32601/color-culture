import React from 'react';
import NavTabs from './components/NavTabs';
import "./App.css";

function App() {
function handlePageChange(page) {
  // Your code to handle the page change event
  console.log('Page changed:', page);
}
  return (<div className="App">
  <NavTabs currentPage="Home" handlePageChange={handlePageChange} />
</div>);
}

export default App;
