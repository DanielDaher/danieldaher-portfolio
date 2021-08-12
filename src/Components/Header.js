import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link to="/projects" className="nav-link">
        <h1>Projetos</h1>
      </Link>
      <Link to="/" className="nav-link">
        <h1>Daniel Daher</h1>
      </Link>
      <Link to="/contact" className="nav-link">
        <h1>Contato</h1>
      </Link>
    </nav>
  );
};