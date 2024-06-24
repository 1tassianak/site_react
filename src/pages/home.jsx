import React from 'react';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className='page-content'>
        <div className="home-container">
          <div className="text-container">
            <h1>Olá! Seja bem-vindo(a)!</h1>
            <p>Este é um exemplo simples de site com React.</p>
          </div>
          <img className="image" src='../../public/dev.jpg' alt='Developer' />
        </div>
      </div>
      <div className='page-cards'>
        <div className="card-container">
          <div className="card">
            <img src="../../public/vite.jpg" alt="Vite" />
            <div className="card-content">
              <h2>Vite + React</h2>
              <p>O Vite é um empacotador de módulos desenvolvido para a plataforma JavaScript. 
                Ele oferece uma compilação super rápida que pode ajudar no processo de desenvolvimento de aplicativos web em React</p>
              <a className='card-link' href='https://vitejs.dev' target='_blank'>Saiba mais</a>
            </div>
          </div>
          <div className="card">
            <img src="../../public/cssgradient.jpg" alt="CSS Gradient" />
            <div className="card-content">
              <h2>CSS Gradient</h2>
              <p>Ferramenta gratuita geradora de gradientes CSS, este site permite que você crie um fundo colorido em degradê para seu site, blog ou perfil em redes sociais.</p>
              <a className='card-link' href='https://cssgradient.io' target='_blank'>Saiba mais</a>
            </div>
          </div>
          <div className="card">
            <img src="../../public/htmlcss.jpg" alt="HTML + CSS" />
            <div className="card-content">
              <h2>HTML + CSS</h2>
              <p>HTML é a linguagem de marcação usada para estruturar o conteúdo de uma página da web,
                enquanto CSS é a linguagem de estilo usada para estilizar esse conteúdo, definindo sua aparência e layout.</p>
              <a className='card-link' href='https://www.w3schools.com' target='_blank'>Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


