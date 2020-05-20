import React, { Component } from "react";
import harden from "../assets/images/harden-1.png";
import hayward from "../assets/images/hayward-1.png";
import embiid from "../assets/images/embiid-1.png";
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";

// import "sequencejs/scripts/hammer.min.js";
// import "sequencejs/scripts/imagesloaded.pkgd.min.js";
// import "sequencejs/scripts/sequence.min.js";
// import "sequencejs/scripts/sequence-theme.intro.min.js";

class NbaHammer extends Component {
  render() {
    return (
      <div className="nbaHammer-wrap">
        <div id="sequence" className="seq">
          <ul className="seq-canvas">
            <li className="step1 valign seq-in">
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={harden}
                  // src="../images/harden-1.png"
                  width="389"
                  height="300"
                />
                <h2 data-seq className="title">
                  james Harden
                </h2>
              </div>
            </li>
            <li className="step2 valign">
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={hayward}
                  width="325"
                  height="300"
                />
                <h2 data-seq className="title">
                  Gordon Hayward
                </h2>
              </div>
            </li>
            <li className="step3 valign">
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={embiid}
                  width="325"
                  height="300"
                />
                <h2 data-seq className="title">
                  Joel Embiid
                </h2>
              </div>
            </li>
          </ul>

          <fieldset
            className="nav"
            aria-label="Slider buttons"
            aria-controls="sequence"
          >
            <button type="button" className="seq-prev" aria-label="Previous">
              <img src={prev} alt="Previous" />
            </button>

            <ul
              role="navigation"
              aria-label="Pagination"
              className="seq-pagination"
            >
              <li className="seq-current">
                <a href="#step1" rel="step1" title="Go to bananas">
                  <img src={harden} alt="Bananas" width="50" height="40" />
                </a>
              </li>
              <li>
                <a href="#step2" rel="step2" title="Go to coconut">
                  <img src={hayward} alt="Coconut" width="50" height="40" />
                </a>
              </li>
              <li>
                <a href="#step3" rel="step3" title="Go to orange">
                  <img src={embiid} alt="Orange" width="50" height="40" />
                </a>
              </li>
            </ul>

            <button type="button" className="seq-next" aria-label="Next">
              <img src={next} alt="Next" />
            </button>
          </fieldset>
        </div>
      </div>
    );
  }
  //   var sequenceElement = document.getElementById("sequence");

  //       var options = {
  //         keyNavigation: false,
  //         animateCanvas: false,
  //         phaseThreshold: false,
  //         reverseWhenNavigatingBackwards: true
  //       };

  //       var mySequence = sequence(sequenceElement, options);
}

export default NbaHammer;
