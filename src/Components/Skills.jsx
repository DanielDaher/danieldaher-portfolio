import React from 'react';
import { DiJsBadge } from "react-icons/di";

export default function Skills() {
  function showSkills() {
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
  }
    return (
      <div className='skills'>
        <DiJsBadge />
      </div>
    );
}