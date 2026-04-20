import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container">
          <NavTabs />
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;