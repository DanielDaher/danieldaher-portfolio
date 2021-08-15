import React from 'react';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export default function Contact() {
  return (
    <ul className="contatos">
      <li>
        <CgMail className="icons" />
        <span>danielfdoficial@gmail.com</span>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/daniel-daher-dev/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icons" />
          <span>linkedin.com/in/daniel-daher-dev</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/DanielDaher" target="_blank" rel="noreferrer">
          <DiGithubBadge className="icons" />
          <span>github.com/DanielDaher</span>
        </a>
      </li>
    </ul>
  );
}
