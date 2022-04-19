
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
    {
      user ? 
      <Routes>
        <Route path="order/new" element={ <NewOrderPage /> } />
        <Route path="order" element={ <OrderHistoryPage /> } />
      </Routes>
      : <AuthPage setUser={ setUser} />
    }
    </main>
  );
}

export default App;
