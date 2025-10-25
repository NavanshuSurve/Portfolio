import React from "react";
import { gsap } from "gsap";
import "./FlowingMenu.css";
import abstractTimekeeper from '../assets/Patterns/abstract-timekeeper.svg';

function FlowingMenu({ items = [] }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <div className="titlecard" key={idx}>
            <MenuItem 
              {...item} 
              index={idx}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ component: Component, text, image, index, activeIndex, setActiveIndex }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const isActive = activeIndex === index;
  const isOtherActive = activeIndex !== null && activeIndex !== index;
  const animationDefaults = { duration: 0.6, ease: "expo" };
  

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev) => {
    if (isActive || isOtherActive || !itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (isOtherActive || !itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${abstractTimekeeper})` }}
      />
    </React.Fragment>
  ));

  const handleclick = (e) => {
    if (isOtherActive) return;
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div 
      className="menu__item" 
      ref={itemRef}
      style={{ 
        opacity: isOtherActive ? 0.3 : 1,
        pointerEvents: isOtherActive ? 'none' : 'auto',
        transition: 'opacity 0.3s ease'
      }}
    >
      <div
        className={isActive ? "menu__item-link_on" : "menu__item-link_off"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleclick}
      >
        {text}
      </div>
      
      {/* Content renders below the title when active */}
      {isActive && (
        <div className="menu__content">
          <Component />
        </div>
      )}
      
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;