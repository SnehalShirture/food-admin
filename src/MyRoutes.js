import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddFood from './components/AddFood';
import AllFoods from './components/AllFoods';
import Orders from './components/Orders';
import CustomerList from './components/CustomerList';
import Myoffcan from './Myoffcan';
import Home from './components/Home';

const MyRoutes = () => {
  return (
    <Router>
      <div>
        <Myoffcan />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addfood" element={<AddFood />} />
          <Route path="/allfoods" element={<AllFoods />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/customerlist" element={<CustomerList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MyRoutes;
