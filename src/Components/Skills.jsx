import React from 'react';

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: '',
    }
    this.showSkills = this.showSkills.bind(this);
  }

  showSkills() {
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

  render() {
    const { skills } = this.state;
    return (
      <div className='skills'>
        <button onClick={this.showSkills}>Clique aqui para ver minhas Skills</button>
        <div>{ skills }</div>
      </div>
    );
  }
}