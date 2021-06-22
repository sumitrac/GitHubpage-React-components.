//import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';
import HeroSection from './components/HeroSection';
import NewsletterForm from './components/NewsletterForm';
import StatsBar from './components/StatsBar';


function App() {
  return (
    <div className="container">
      <header className="head-section">
        <div><NavigationBar /></div>
        <div><SearchBar /></div>
        <div><LoginControls /></div>
      </header>
      <main className="main-section">
        <div><HeroSection /></div>
        <div><NewsletterForm /></div>
        <div><StatsBar /></div>
      </main>

    </div>
  )
};

export default App;
