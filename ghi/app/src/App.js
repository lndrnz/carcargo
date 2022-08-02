import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManuList from './ManuList';
import VehicleList from './VehicleList';
import AutoList from './AutoList';
import ManuForm from './ManuForm';
import VehicleForm from './VehicleForm';
import AutoForm from './AutoForm';
import SalesPersonForm from './SalesPersonForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManuList />} />
          <Route path="/manufacturers/new" element={<ManuForm />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/new" element={<VehicleForm />} />
          <Route path="/automobiles" element={<AutoList />} />
          <Route path="/automobiles/new" element={<AutoForm />} />
          <Route path="/sales_person" element={<SalesPersonForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
