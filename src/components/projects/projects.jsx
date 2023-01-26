import React from 'react';
import './projects.css';

export function Projects() {
  return (
    // <!-- image slider start -->
    <div className="slider">
      <div className="slides">
        {/* <!-- radio buttons start --> */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        {/* <!-- radio buttons end --> */}

        {/* <!-- slide images start --> */}
        <div className="slide first">
          <img src={require('../../images/1.jpg')} alt="" id="one" />
        </div>
        <div className="slide">
          <img src={require('../../images/2.jpg')} alt="" id="two" />
        </div>
        <div className="slide">
          <img src={require('../../images/3.jpg')} alt="" id="three" />
        </div>
        <div className="slide">
          <img src={require('../../images/4.jpg')} alt="" id="four" />
        </div>
        {/* <!-- slide images end --> */}

        {/* <!-- automatic navigation start --> */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>

        {/* <!-- automatic navigation end --> */}
      </div>

      {/* <!-- manual navigation start --> */}

      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
      </div>
      {/* <!-- manual navigation end --> */}
    </div>
    // <!-- image slider end -->
  );
}

// export function Projects() {
//   return (
//     <section className="projects-container">
//       <article className="card-container">
//         <header className="card-header">
//           <img
//             src={require('../../images/profile_pic1.jpg')}
//             alt="Snake game"
//           />
//           <h2>Snake game</h2>
//         </header>
//         <div>illo id quaerat aperiam dolorum temporibus fugit quo?</div>
//         <div>Technologies</div>
//       </article>
//     </section>
//   );
// }
