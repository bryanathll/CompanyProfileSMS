import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from './navbar.module.css';
import logoImage from '../../assets/sms-logo.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navLinksRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const navLinksItems = gsap.utils.toArray<HTMLLIElement>(`${styles.navLinks} li`);


            gsap.set([logoRef.current, ...navLinksItems], { 
                y: -60, 
                autoAlpha: 0 
            });

            const tl = gsap.timeline({
                delay: 1.2, 
                defaults: {
                    duration: 0.8,
                    ease: 'power3.out'
                }
            });

            tl.to(logoRef.current, {
                y: 0,
                autoAlpha: 1
            });
            
            tl.to(navLinksItems, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1
            }, "-=0.6");

        }, headerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerClasses = `${styles.container} ${isScrolled ? styles.scrolled : ''}`;

    return (
        <header ref={headerRef} className={styles.navbar}>
            <div className={containerClasses}>
                <a href="#" ref={logoRef} className={styles.logo}>
                    <img src={logoImage} alt="SMS-Logo" />
                </a>
                <nav>
                    <ul ref={navLinksRef} className={styles.navLinks}>
                        <li> <a href="#about">Tentang kami</a></li>
                        <li> <a href="#vision">Visi/Misi</a></li>
                        <li> <a href="#services">Layanan</a></li>
                        <li> <a href="#clients">Klien</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;