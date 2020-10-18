import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Transitions.scss';

const TextTransitions = (props) => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el, i) => 20 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i),
      });
  }, []);
  return (
    <div>
      <h4 class='ml1'>
        <span class='text-wrapper'>
          <span class='line line1'></span>
          <span class='letters'>{props.children}</span>
          <span class='line line2'></span>
        </span>
      </h4>
    </div>
  );
};

export default TextTransitions;
