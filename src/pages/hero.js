import React, { useState } from 'react';
import { useTrail, animated } from '@react-spring/web';
import hero from './hero.css'; // Ensure this path matches your file structure

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
  
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <animated.div key={index} className={hero.trailsText} style={style}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    );
  };
  
  const Hero = () => {
    const [open, setOpen] = useState(true);
  
    return (
      <div className={hero.container} onClick={() => setOpen(state => !state)}>
        <Trail open={open}>
          <span>Lorem</span>
          <span>Ipsum</span>
          <span>Dolor</span>
          <span>Sit</span>
        </Trail>
      </div>
    );
  };
  
  export default Hero;
