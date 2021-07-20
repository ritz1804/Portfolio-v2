import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../utils/Split3.min";
import useOnScreen from "../hooks/useOnScreen";

import "./role.css";

export default function Role() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <p ref={ref} id="headline" className={cn({ "is-reveal top": reveal })}>
        Developer
      </p>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        UI/UX Designer
      </p>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Freelancer
      </p>
    </section>
  );
}