import React from 'react';
import ProfilePicture from '../fotodeperfil.png';


export default class Picture extends React.Component {
  render() {
    return (
      <div>
        <img
          className='perfilPicture'
          alt="Foto de Daniel Daher encarando o horizonte"
          src={ProfilePicture}
        />
      </div>
    );
  }
}