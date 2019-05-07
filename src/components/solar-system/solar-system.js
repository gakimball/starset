import React from 'react';
import cls from 'classnames';
import s from './solar-system.module.css';

const SolarSystem = () => (
  <div className={s.container}>
    {/* Rings */}
    <div className={s.rings}>
      <div className={s.orbit}>
        <div className={cls(s.ring, s.outer)}>
          <div className={cls(s.planet, s.outer)}/>
        </div>
      </div>
      <div className={s.orbit}>
        <div className={cls(s.ring, s.middle)}>
          <div className={cls(s.planet, s.middle)}/>
        </div>
      </div>
      <div className={s.orbit}>
        <div className={cls(s.ring, s.inner)}>
          <div className={cls(s.planet, s.inner)}/>
        </div>
      </div>
    </div>

    {/* Star */}
    <div className={s.orbit}>
      <div className={s.star}>
        <div className={s.star__inner}/>
      </div>
    </div>
  </div>
);

export default SolarSystem;
