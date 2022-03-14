import React from "react";
import Animate from "animate.css-react";

import "animate.css/animate.css";
export const Testpage = () => {
  return (
    <div>
      <Animate
        enter="bounceIn" // on Enter animation
        leave="bounceOut" // on Leave animation
        appear="fadeInRight" // on element Appear animation (onMount)
        change="flipInX" // on element Change animation (onUpdate)
        durationAppear={1000}
        durationEnter={1000}
        durationLeave={1000}
        durationChange={1000}
        animate={true | false | expression} // turn off/on animation, true by default
        animateChangeIf={true | false | expression} // turn off/on Change only animation, true by default
        component="ul"
      >
        {this.state.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </Animate>
      // or animate single element / component
      <Animate appear="fadeInDown" durationAppear={1000} component="div">
        <h1>react animate.css</h1>
      </Animate>
    </div>
  );
};
