import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // If children is a string, split into characters for animation
  const renderContent = () => {
    if (typeof children === 'string') {
      return children.split('').map((char, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(8px)',
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: `all 0.5s ease-out ${delay + index * 0.02}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    return children;
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: typeof children === 'string' ? 1 : (isVisible ? 1 : 0),
        filter: typeof children === 'string' ? 'none' : (isVisible ? 'blur(0px)' : 'blur(10px)'),
        transform: typeof children === 'string' ? 'none' : (isVisible ? 'translateY(0)' : 'translateY(20px)'),
        transition: typeof children === 'string' ? 'none' : `all 0.8s ease-out ${delay}s`
      }}
    >
      {renderContent()}
    </div>
  );
};

// TextReveal Component for headings and important text - FIXED VERSION
const TextReveal = ({ text, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Split by words instead of characters to prevent word breaking
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startCharIndex = charIndex;
        charIndex += wordChars.length + 1; // +1 for space

        return (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map((char, charIdx) => (
              <span
                key={charIdx}
                style={{
                  display: 'inline-block',
                  opacity: isVisible ? 1 : 0,
                  filter: isVisible ? 'blur(0px)' : 'blur(8px)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.3s ease-out ${delay + (startCharIndex + charIdx) * 0.02}s`
                }}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </span>
  );
};

// BlockReveal for entire sections
const BlockReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export { ScrollReveal, TextReveal, BlockReveal };