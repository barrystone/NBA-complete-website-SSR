import React, { Component } from "react";
import Slider from "react-slick";

const prev = require("../assets/images/prev.svg");
const next = require("../assets/images/next.svg");

const curry = require("../assets/images/slick/curry.png");
const embiid = require("../assets/images/slick/embiid.png");
const harden = require("../assets/images/slick/harden.png");
const james = require("../assets/images/slick/james.png");
const lillard = require("../assets/images/slick/lillard.png");
const love = require("../assets/images/slick/love.png");
const lowry = require("../assets/images/slick/lowry.png");
const towns = require("../assets/images/slick/towns.png");

class PlayerSlick extends Component {
  slideNext = () => {
    this.slider.slickNext();
  };
  slidePrevious = () => {
    this.slider.slickPrev();
  };
  render() {
    const images = [harden, curry, embiid, towns, james, lillard, love, lowry];
    const settings = {
      // customPaging: function (i) {
      //   return (
      //     <div>
      //       <li>
      //         <a rel="step1" title="Go to bananas">
      //           <img src={images[i]} alt="Bananas" width="100" height="80" />
      //         </a>
      //       </li>
      //     </div>
      //   );
      // },
      // dots: true,
      // dotsClass: "slick-dots slick-thumb",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return (
      <div className="nbaHammer-wrap">
        <div id="sequence" className="seq">
          <ul className="seq-canvas">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <li className="step1 valign seq-in" key={1}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={harden}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    james Harden
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={2}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={curry}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    curry
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={3}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={embiid}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    embiid
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={4}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={towns}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    towns
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={5}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={james}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    james
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={6}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={lillard}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    lillard
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={7}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={love}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    love
                  </h2>
                </div>
              </li>
              <li className="step1 valign seq-in" key={8}>
                <div className="vcenter">
                  <img
                    data-seq
                    className="feature"
                    src={lowry}
                    width="389"
                    height="300"
                  />
                  <h2 data-seq className="title">
                    lowry
                  </h2>
                </div>
              </li>
            </Slider>
          </ul>

          <fieldset
            className="nav"
            aria-label="Slider buttons"
            aria-controls="sequence"
          >
            <button
              onClick={this.slidePrevious}
              type="button"
              className="seq-prev"
              aria-label="Previous"
            >
              <img src={prev} alt="Previous" />
            </button>

            {/* <ul
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
            </ul> */}

            <button
              onClick={this.slideNext}
              type="button"
              className="seq-next"
              aria-label="Next"
            >
              <img src={next} alt="Next" />
            </button>
          </fieldset>
        </div>
      </div>
    );
  }
}
export default PlayerSlick;
