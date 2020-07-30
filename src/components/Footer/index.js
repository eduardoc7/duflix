import React from 'react';
import { FooterBase } from './styles';
import Icon from '../../assets/img/icon.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/EduardoCordeiro7/duflix" target="_blank">
        <img className="icon" src={Icon} alt="Logo Alura" />
      </a>
      <p> 
        Orgulhosamente criado durante a 
        <br/>
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;