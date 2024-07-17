// src/utils/gsapUtils.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const XdirectfadeIn = (element, duration = 1) => {
  gsap.fromTo(element, { opacity: 0, x:50 }, { opacity: 1, x:0, duration });
}

export const YdirectfadeIn = (element, duration = 1) => {
  gsap.fromTo(element, { opacity: 1, y:50 }, { opacity: 0, y:0, duration });
}

export const fadeInElements = (startEl, animeElList) => {
    let delay = 0.2;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: startEl,
            start: 'top bottom',
            toggleActions: 'play none none none'
        }
    });

    for (let i = 0; i < animeElList.length; i++) {
        tl.from(animeElList[i], { opacity: 0, y: 50, duration: 1 });
        tl.to(animeElList[i], { opacity: 1, y: 0, duration: 1 }, `start+=${delay}`);
        delay += 0.2;
    }
}

export const scrollFadeIn = (element, start = 'top bottom', end='+=50%', scrub = true) => {
    
    gsap.fromTo(element, 
        { opacity: 0, y: 50 }, 
        { 
            opacity: 1, 
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: start,
                scrub: scrub,
                toggleActions: 'play none none none'
            }
        }
    );
}
