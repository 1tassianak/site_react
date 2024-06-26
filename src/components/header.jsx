import React from 'react';
import './Header.css';
import Programming from '../../public/programming.png';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <img src={Programming} />
        </div>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage('home')}>
              Home
            </li>
            <li className={currentPage === 'aulas' ? 'active' : ''} onClick={() => setCurrentPage('aulas')}>
              Aulas
            </li>
            <li className={currentPage === 'contato' ? 'active' : ''} onClick={() => setCurrentPage('contato')}>
              Contato
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
