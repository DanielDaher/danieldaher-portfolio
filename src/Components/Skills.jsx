import React from 'react';
import { DiJsBadge, DiReact } from "react-icons/di";

export default function Skills() {
 /*  function showSkills() {
    const mySkills = <div className="skill-list">
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>Jest</p>
    </div>
    this.setState(() => ({
      skills: mySkills,
    }))
  } */
    return (
      <div className='skills'>
        <div className="skills-list1">
          <div className="skill-list-item">
            <DiJsBadge className="js-icon" />
            <span>JavaScript</span>
          </div>
          <div className="skill-list-item">
            <DiReact className="react-icon" /> 
            <span>React</span>
          </div>
        </div>
      </div>
    );
}