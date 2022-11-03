import React from 'react'
import '../App.css';
import bg from '../assets/Background.svg';
import bg1 from '../assets/Background shape-1.png';
import bg2 from '../assets/Background shape-2.png';
import bg3 from '../assets/Background shape-3.png';
import bg4 from '../assets/Background shape.png';

const Hero = () => {
  return (
    <div className='_hero'>
      <div className='_herobackground'>
        <div className='_herocontent'>
          <h1>
            Create & sell your NFTs today
          </h1>
          <p>
            Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum morbi. Volutpat libero curabitur feugiat risus dui pulvinar. Elementum.
          </p>
          <button>
            Let's Sell
          </button>
        </div>
        <div className='_herobackground _backgroundcontainer'>
          <img className='_backgroundcontainer _background' src={bg} alt={''} />
          <img className='_backgroundcontainer _bg1' src={bg4} alt={''} />
          <img className='_backgroundcontainer _bg2' src={bg3} alt={''} />
          <img className='_backgroundcontainer _bg3' src={bg2} alt={''} />
          <img className='_backgroundcontainer _bg4' src={bg1} alt={''} />
        </div>
      </div>
    </div>
  )
}

export default Hero