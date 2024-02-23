import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './HomePage.css'; // Assuming you have some basic styles defined here
import VUSMP_logo from '../images/VUSMP_logo.webp';

export default function HomePage() {
  const [flipped, setFlipped] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="appContainer" onClick={() => setFlipped(state => !state)}>
      <animated.div className="card" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        {/* Updated this part to include the VUSMP_logo as the front of the card */}
        <div className="cardFace front">
          <img src={VUSMP_logo} alt="VUSMP Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </animated.div>
      <animated.div className="card" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
        <div className="cardFace back">
          {/* Back of the card content goes here */}
          Back Content
        </div>
      </animated.div>
    </div>
  );
}
