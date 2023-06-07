import React from 'react';
import ChatBot from './ChatBot';
import './style.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <Menu />
      <Imagem />
      <div className="content">
        <div className="centered-section">
        <br></br><br></br><br></br>
          <h1>Bem Vindo aos Recursos da Devscope Academy!</h1>
          <br></br><p>Aqui encontrará todos os recursos utilizados pela academia</p><br></br><br></br>
          <form action="https://devscope.net" method="get">
            <button type="submit">Visite o Nosso Site!</button>
          </form>
        </div>
        <QuemSomos />
        <Recursos />
        <Mapa />
        <ChatBot />
        
      </div>
      <Footer />
    </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contato</h3>
          <p>Endereço: Rua de Passos Manuel 223</p>
          <p>Telefone: (+351) 22 375 1350</p>
          <p>Email: support@devscope.net</p>
        </div>
        <div className="footer-right">
          <h3>Siga-nos</h3>
          <div className="social-icons">
             <a href="#"><FaFacebook /></a>
             <a href="#"><FaTwitter /></a>
             <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DevScope. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


function Menu() {
  return (
    <nav className="menu">
      <div className="logo-container">
        
        <img src="https://i.imgur.com/DKHAtW2.png"  alt="logo" className="logo" />
      

      </div>
      <ul className="menu-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>

      <h1>Recursos Academia Devscope</h1>
      <hr></hr>
    </nav>
  );
  
}

function Imagem() {
  return (
    <div className="banner-container">
      <img src="https://cdn.discordapp.com/attachments/1090554604023975936/1110239602918305792/cropped-c374bccc6b41505d4537eee4f737f147.png" alt="banner" className="banner" />
    </div>
  );
}

function QuemSomos() {
  return (
    
    <div className="container-somos">
      <br></br><br></br><br></br><br></br><br></br>
      <h1>Quem Somos??</h1>
      
      <br></br><p>Lorem Ipsum</p><br></br><br></br>
      <div className="team-table">
        <div className="team-row">
          <div className="team-member">
            <img src="emanuel.png" alt="Emanuel Oliveira" className="member-image" />
            <p>Emanuel Oliveira</p>
          </div>
          <div className="team-member">
            <img src="lecas.png" alt="Leonardo Carvalho" className="member-image" />
            <p>Leonardo Carvalho</p>
          </div>
          <div className="team-member">
            <img src="casaca.png" alt="Luis Casaca" className="member-image" />
            <p>Luis Casaca</p>
          </div>
        </div>
        <div className="team-row">
          <div className="team-member">
            <img src="tiago.png" alt="Tiago Nogueira" className="member-image" />
            <p>Tiago Nogueira</p>
          </div>
        </div>
        <div className="team-row">
          <div className="team-member">
            <img src="david.png" alt="David Mota" className="member-image" />
            <p>David Mota</p>
          </div>
        </div>
      </div>
    </div>
  );
}
<br></br>
function Recursos() {
  return (
    <div className="container-recursos">
      <h1>Recursos</h1>
      <div className="resource-item">
      <div className="Logos">
        <p>Logos - Academia</p><br></br>
        <img src="aaaaaaa.png" alt="Emanuel Oliveira" className="member-image" />
        <br></br>
        <form action="http://vitinho.lovestoblog.com/wp-content/uploads/2023/05/logos.zip" method="get">
          <button type="submit">Transferir</button>
        </form>
        </div>
      </div>
      <div className="resource-item">
      <div className="Animacoes">
        <p>Animações</p><br></br>
        <img src="gaivotaaaa.png" alt="Emanuel Oliveira" className="member-image" />
        <br></br>
        <form action="http://vitinho.lovestoblog.com/wp-content/uploads/2023/05/animacoes.zip" method="get">
          <button type="submit">Transferir</button>
        </form>
        </div>
      </div>
      <div className="resource-item">
        <div className="Fonts">
        <p>Fonts</p><br></br>
        <img src="devscope.png"/>
        <br></br>
        <form action="http://vitinho.lovestoblog.com/wp-content/uploads/2023/05/Gaivota.zip" method="get">
          <button type="submit">Transferir</button>
        </form>
        </div>
      </div>
    </div>
  );
}
function Mapa() {
  return(
  <div className="container-mapa">
    <center>
  <h1>Nossa Localização</h1>
  <br></br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4451993277607!2d-8.607231887568336!3d41.146635871211906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ef7b690243%3A0xddfeae9a1267e522!2sDevscope%20-%20Solu%C3%A7%C3%B5es%20De%20Sistemas%20E%20Tecnologias%20De%20Forma%C3%A7%C3%A3o%2C%20S.A.!5e0!3m2!1spt-PT!2spt!4v1685415858114!5m2!1spt-PT!2spt" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   <br></br>
   </center>
  </div>
  
  );
}


