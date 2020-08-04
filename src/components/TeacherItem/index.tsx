import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/13332557?s=460&u=6a5f4d801f6ce8e467a940c5f5c3f6fd91f55774&v=4" alt="Victor Gianvechio"/>
        <div>
          <strong>Victor Gianvechio</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada
        <br /><br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200 já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;