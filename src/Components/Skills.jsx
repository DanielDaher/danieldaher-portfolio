import React, { useState } from 'react';
import { DiJsBadge, DiReact, DiHtml5, DiCss3, DiGit, DiRuby, DiNodejsSmall } from "react-icons/di";
import { SiJest, SiRedux } from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";

export default function Skills() {
  const [listSkills] = useState(
    [
      {
        title: 'HTML',
        icon: DiHtml5
      },
      {
        title: 'CSS',
        icon: DiCss3
      },
      {
        title: 'javaScript',
        icon: DiJsBadge
      },
      {
        title: 'Vue',
        icon: RiVuejsLine
      },
      {
        title: 'React',
        icon: DiReact
      },
      {
        title: 'Redux',
        icon: SiRedux
      },
      {
        title: 'Jest/RTL',
        icon: SiJest
      },
      {
        title: 'Git',
        icon: DiGit
      },
      {
        title: 'Node.js',
        icon: DiNodejsSmall
      },
      {
        title: 'Ruby on rails',
        icon: DiRuby
      },
    ]
  );

  const RenderSkills = () => {
    return (
      listSkills.map(({ title, icon }, index) => (
        <div className='skill-list-item' key={index}>
          { React.createElement(icon, { className: 'icons'}) }
          <span>{ title }</span>
        </div>
      ))
    );
  };
    return (
      <div className='skills'>
        <div className="skills-list1">
          <RenderSkills />
        </div>
      </div>
    );
}