import React from 'react';
import { DiGithubBadge } from "react-icons/di";

export default function Footer() {
  return (
    <footer>
      Made By <a href='https://github.com/DanielDaher' target='_blank' rel='noreferrer'>Daniel Daher
      < DiGithubBadge className="github-icon" /></a>
    </footer>
  );
};
