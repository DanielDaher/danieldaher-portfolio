import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import pokedexThumb from '../pokedex-thumbnail.png';
import RickAndMortyThumb from '../RickAndMortyMemoryGame.png';
import toDoListThumb from '../ebyrt-thumbnail.png';
/* import GithubAPIThumb from '../GithubAPI.png'; */

export default function Projects() {
  const myProjects = [
    {
      name: 'Pokedex',
      thumbnail: pokedexThumb,
      link:'https://pokedex-danieldaher.vercel.app/'
    },
    {
      name: 'To Do List - FullStack',
      thumbnail: toDoListThumb,
      link:'https://ebyrt-to-do-list-danieldaher.vercel.app/'
    },
    {
      name: 'Rick and Morty Memory Game',
      thumbnail: RickAndMortyThumb,
      link:'https://context-api-rick-and-morty-danieldaher.vercel.app/'
    },
  ];

  const renderCards = () => {
    return myProjects.map((eachProject) => <ProjectCard project={ eachProject } />);
  };

  return (
    <div className="Projects-cards">
      {renderCards()}
    </div>
  );
}
