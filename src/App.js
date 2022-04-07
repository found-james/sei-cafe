
import './App.css';
import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
    {
      user ? <NewOrderPage /> : <AuthPage />
    }
    </main>
  );
}

export default App;
