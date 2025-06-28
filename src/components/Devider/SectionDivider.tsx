import React,{useRef, useEffect} from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './SectionDivider.module.css';

import compasImage from '../../assets/compas.png';

gsap.registerPlugin(ScrollTrigger);

const SectionDivider: React.FC = () => {
    const compasRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!compasRef.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(compasRef.current, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={styles.dividerContainer}>
            <div className={styles.line}></div>
            <img 
                ref={compasRef}
                src={compasImage} 
                alt="compasDivider" 
                className={styles.compass}
            />
            <div className={styles.line}></div>
        </div>
    )
}

export default SectionDivider;