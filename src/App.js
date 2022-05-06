import React ,{useEffect} from 'react';
import "./App.css"
import Landing from './components/Landing';
const App = () => {
  useEffect(() => {
    document.title = "Exchange"
  },[])
  return (
    <div>
      <Landing/>
    </div>
  );
};

export default App;