import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/59237399?s=460&u=8df812cfa0cfe0373e62e95831ff7721d431e6a0&v=4" alt="Guilherme"/>
            <div>
              <strong>Guilherme</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias
            <br /><br />
            Entusiasta das melhores tecnologias Entusiasta das melhores tecnologias Entusiasta das melhores tecnologias Entusiasta das melhores tecnologias 
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 200,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;