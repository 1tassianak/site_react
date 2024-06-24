import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Aulas from './pages/aulas'
import Contato from './pages/contato'

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'aulas':
        return <Aulas />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderContent()}
      <Footer />
    </>
  )
}

export default App
