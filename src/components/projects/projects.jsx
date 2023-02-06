import React from 'react';
import './projects.css';

export function Projects() {
  return (
    <div className="projects-header">
      <div id="jump-projects" className="project-text">
        <div className="project-text2">Projects</div>
        <div className="project-line"></div>
      </div>
      <section class="card-list">
        <article class="card">
          <header class="card-header">
            <h2>Rock paper scissors</h2>
          </header>
          <a target="_bla" href="https://luxury-swan-136d4f.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/rock_paper_scissors_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <h2>Snake</h2>
          </header>
          <a target="_bla" href="https://hilarious-medovik-3cda2f.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/snake_game_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <h2>Clicks counter</h2>
          </header>
          <a
            target="_bla"
            href="https://incomparable-pothos-f8cec3.netlify.app/"
          >
            <img
              className="img-cards"
              src={require('../../images/clicks_counter_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              React
            </div>
            <div className="tech" href="#">
              Html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
        <article class="card">
          <header class="card-header">
            <h2>Typing speed test</h2>
          </header>
          <a target="_bla" href="https://creative-entremet-225e0d.netlify.app/">
            <img
              className="img-cards"
              src={require('../../images/typing_speed_test_img.png')}
              alt="snake-game"
            />
          </a>
          <div className="technologies">Technologies</div>
          <div className="tags">
            <div className="tech" href="#">
              html
            </div>
            <div className="tech" href="#">
              css
            </div>
            <div className="tech" href="#">
              JS
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

// export function Projects() {
//   return (
//     <div id="jump-projects">
//       <div className="hero-div elements-inside-section">
//         <div className="My projects"> My projects</div>
//         <div className="line-hero"></div>
//       </div>
//       <div className="slider">
//         <div className="slides">
//           {/* <!-- radio buttons start --> */}
//           <input type="radio" name="radio-btn" id="radio1" />
//           <input type="radio" name="radio-btn" id="radio2" />
//           <input type="radio" name="radio-btn" id="radio3" />
//           <input type="radio" name="radio-btn" id="radio4" />
//           {/* <!-- radio buttons end --> */}

//           {/* <!-- slide images start --> */}
//           <div className="slide first">
//             <img src={require('../../images/1.jpg')} alt="" id="one" />

//             {/* <!-- slide images bottom start--> */}
//             <div className="slide-image-bottom">
//               <h1>Clicks counter</h1>
//               <p>
//                 A click counter built with React tracks and displays the number
//                 of clicks on a button. It increments the count each time the
//                 button is clicked and updates the display.
//               </p>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-anchor"
//                 href="https://www.facebook.com/login.php?next=https%3A%2F%2Fbusiness.facebook.com%2Flatest%2Fcomposer%3Fasset_id%3D102067249322682%26nav_ref%3Daymt_ig_web_sso_ig_login_upsell%26ref%3Dbiz_web_ftux_create_post_action%26context_ref%3DHOME#_"
//               >
//                 <AiFillGithub className="slide-image-bottom-icon" />
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-live"
//                 href="https://www.google.com"
//               >
//                 <div className="slide-image-bottom-live-div">Live</div>
//               </a>
//             </div>
//             {/* <!-- slide images bottom end--> */}
//           </div>
//           <div className="slide">
//             <img src={require('../../images/2.jpg')} alt="" id="two" />

//             {/* <!-- slide images bottom start--> */}
//             <div className="slide-image-bottom">
//               <h1>Clicks counter</h1>
//               <p>
//                 A click counter built with React tracks and displays the number
//                 of clicks on a button. It increments the count each time the
//                 button is clicked and updates the display.
//               </p>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-anchor"
//                 href="https://www.facebook.com/login.php?next=https%3A%2F%2Fbusiness.facebook.com%2Flatest%2Fcomposer%3Fasset_id%3D102067249322682%26nav_ref%3Daymt_ig_web_sso_ig_login_upsell%26ref%3Dbiz_web_ftux_create_post_action%26context_ref%3DHOME#_"
//               >
//                 <AiFillGithub className="slide-image-bottom-icon" />
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-live"
//                 href="https://www.google.com"
//               >
//                 <div className="slide-image-bottom-live-div">Live</div>
//               </a>
//             </div>
//             {/* <!-- slide images bottom end--> */}
//           </div>
//           <div className="slide">
//             <img src={require('../../images/3.jpg')} alt="" id="three" />
//             {/* <!-- slide images bottom start--> */}
//             <div className="slide-image-bottom">
//               <h1>Clicks counter</h1>
//               <p>
//                 A click counter built with React tracks and displays the number
//                 of clicks on a button. It increments the count each time the
//                 button is clicked and updates the display.
//               </p>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-anchor"
//                 href="https://www.facebook.com/login.php?next=https%3A%2F%2Fbusiness.facebook.com%2Flatest%2Fcomposer%3Fasset_id%3D102067249322682%26nav_ref%3Daymt_ig_web_sso_ig_login_upsell%26ref%3Dbiz_web_ftux_create_post_action%26context_ref%3DHOME#_"
//               >
//                 <AiFillGithub className="slide-image-bottom-icon" />
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-live"
//                 href="https://www.google.com"
//               >
//                 <div className="slide-image-bottom-live-div">Live</div>
//               </a>
//             </div>
//             {/* <!-- slide images bottom end--> */}
//           </div>
//           <div className="slide">
//             <img src={require('../../images/4.jpg')} alt="" id="four" />
//             {/* <!-- slide images bottom start--> */}
//             <div className="slide-image-bottom">
//               <h1>Clicks counter</h1>
//               <p>
//                 A click counter built with React tracks and displays the number
//                 of clicks on a button. It increments the count each time the
//                 button is clicked and updates the display.
//               </p>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-anchor"
//                 href="https://www.facebook.com/login.php?next=https%3A%2F%2Fbusiness.facebook.com%2Flatest%2Fcomposer%3Fasset_id%3D102067249322682%26nav_ref%3Daymt_ig_web_sso_ig_login_upsell%26ref%3Dbiz_web_ftux_create_post_action%26context_ref%3DHOME#_"
//               >
//                 <AiFillGithub className="slide-image-bottom-icon" />
//               </a>
//               <a
//                 target="_blank"
//                 rel="noreferrer"
//                 className="slide-image-bottom-live"
//                 href="https://www.google.com"
//               >
//                 <div className="slide-image-bottom-live-div">Live</div>
//               </a>
//             </div>
//             {/* <!-- slide images bottom end--> */}
//           </div>
//           {/* <!-- slide images end --> */}

//           {/* <!-- automatic navigation start --> */}
//           <div className="navigation-auto">
//             <div className="auto-btn1"></div>
//             <div className="auto-btn2"></div>
//             <div className="auto-btn3"></div>
//             <div className="auto-btn4"></div>
//           </div>

//           {/* <!-- automatic navigation end --> */}
//         </div>

//         {/* <!-- manual navigation start --> */}

//         <div className="navigation-manual">
//           <label for="radio1" className="manual-btn"></label>
//           <label for="radio2" className="manual-btn"></label>
//           <label for="radio3" className="manual-btn"></label>
//           <label for="radio4" className="manual-btn"></label>
//         </div>
//         {/* <!-- manual navigation end --> */}
//       </div>
//     </div>
//   );
// }
