import React from 'react';
import { DiJsBadge, DiReact, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import { SiJest, SiRedux } from "react-icons/si";

export default function Skills() {
    return (
      <div className='skills'>
        <div className="skills-list1">
          <div className="skill-list-item">
            <DiHtml5 className="icons" /> 
            <span>HTML</span>
          </div>
          <div className="skill-list-item">
            <DiCss3 className="icons" /> 
            <span>CSS</span>
          </div>
          <div className="skill-list-item">
            <DiJsBadge className="icons" />
            <span>JavaScript</span>
          </div>
          <div className="skill-list-item">
            <DiReact className="icons" /> 
            <span>React</span>
          </div>
          <div className="skill-list-item">
            <SiRedux className="icons" /> 
            <span>Redux</span>
          </div>
          <div className="skill-list-item">
            <SiJest className="icons" /> 
            <span>Jest/RTL</span>
          </div>
          <div className="skill-list-item">
            <DiGit className="icons" /> 
            <span>GIT</span>
          </div>
        </div>
      </div>
    );
}