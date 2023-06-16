//Navigation
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import UseStatePage from './UseStatePage';
import UseEffectPage from './UseEffectPage';
import UseContextPage from './UseContextPage';



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useContext" element={<UseContextPage></UseContextPage>} />

      </Routes>
    
      
  );
}

export default App;
