import React from 'react';

export default function ProjectCard(props) {
  return (
    <div className='card'>
       <a target="_blank" rel="noreferrer" href={props.project.link}>
        <img alt={props.project.name} src={props.project.thumbnail} />
        <h3>{props.project.name}</h3>
      </a>
    </div>
  );
}
