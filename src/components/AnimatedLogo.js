import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { SplitText } from "../gsap-bonus/SplitText";

gsap.registerPlugin(SplitText);



const AnimatedLogo = () => {

  const [synlighet, setSynlighet] = useState(false);


  useEffect(() => {

    /* Hide preload */
    setSynlighet(true);


    var tl = gsap.timeline({ repeat: 0, delay: 1.5 }),
    splitC = new SplitText(".c"),
    splitFirst = new SplitText(".first"),
    splitSecond = new SplitText(".second");
          
    tl.staggerFrom(splitC.chars, 0.5, { y: 100, autoAlpha: 0 }, 0.1, "upper");

    tl.staggerFrom(
      splitFirst.chars,
      0.5,
      { y: 100, autoAlpha: 0 },
      0.1,
      "upper+=0.1"
    );
    
    tl.staggerFrom(
      splitSecond.chars,
      0.5,
      { y: 100, autoAlpha: 0 },
      0.1,
      "upper+=0.5"
    );

    /* Coffee bean animation*/

    tl.from("#top", { duration: 2, y: -25, ease: "elastic" }, "upper+=1.75");

    tl.from("#btn", { duration: 2, y: 25, ease: "elastic" }, "upper+=1.75");

}, []);



      
    return (
      <>
        <div id="logoWrap" style={{visibility: synlighet ? 'visible' : 'hidden' }}>
            <div id="upperWrap">
                <div class="c">c</div>
                <svg id="logoBean" version="1.1" viewBox="0 0 17.198 21.167" xmlns="http://www.w3.org/2000/svg">

                <g fill="#995c30">
                    <path d="m0.41319 10.642c0 5.6913 3.616 10.317 8.0698 10.317 0.54846 0 1.0818-0.0648 1.5985-0.20946-0.0166-0.0965-0.0166-0.19431 0.0152-0.27423 0.37208-0.96739 0.54984-2.0312 0.54984-3.2398 0-3.2728-1.2761-4.8534-2.6307-6.5457-1.3078-1.6275-2.6638-3.3045-2.6638-6.6256 0-1.1934 0.16123-2.209 0.51677-3.175-3.164 1.3863-5.4557 5.2393-5.4557 9.7524z" id="btn" />
                    <path d="m8.483 0.32497c-0.48369 0-0.95222 0.0482-1.4042 0.16123 0 0.0165-0.0152 0.0331-0.0152 0.0331-0.51676 1.0473-0.74276 2.1759-0.74276 3.5292 0 2.9669 1.13 4.3849 2.4529 6.0138 1.3395 1.6605 2.8401 3.5305 2.8401 7.141 0 1.1452-0.14469 2.1773-0.45199 3.1433 3.1323-1.3863 5.3909-5.2228 5.3909-9.7041 0-5.6899-3.6146-10.317-8.0698-10.317z" id="top" />
                </g>
                </svg>

                <div class="first">ffee</div>
                <div class="second">travelr</div>
            </div>
        </div>
      </>
    )
}

export default AnimatedLogo;





