import React, { useEffect, useState } from 'react';

const ScrollSpy = ({ navItems }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className={activeSection === navItem.id ? 'active' : ''}
          >
            <a href={`#${navItem.id}`}>{navItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollSpy;
