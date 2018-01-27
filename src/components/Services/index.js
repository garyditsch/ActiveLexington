import React from 'react'
import Link from 'gatsby-link'
import './services.css'
import placeholder800x420 from '../../images/placeholder800x420.png'
import KevinRyanEpisode7 from '../../images/KevinRyanEpisode7.png'
import ScottBlackEpisode8 from '../../images/ScottBlackEpisode8.png'
import TimJenkinsEpisode9 from '../../images/TimJenkinsEpisode9.png'
import AlexMeadeEpisode10 from '../../images/AlexMeadeEpisode10.png'
import TroyHearnEpisode11 from '../../images/TroyHearnEpisode11.png'
import LessonsLearnedEpisode6 from '../../images/LessonsLearnedEpisode6.png'
import PamRandyThomasEpisode5 from '../../images/PamRandyThomasEpisode5.png'
import LauraCoombsEpisode4 from '../../images/LauraCoombsEpisode4.png'
import HeatherWarmanEpisode3 from '../../images/HeatherWarmanEpisode3.png'
import JoshNadzamEpisode2 from '../../images/JoshNadzamEpisode2.png'
import SusanBradleyCoxEpisode1 from '../../images/SusanBradleyCoxEpisode1.png'

const Services = () => {
return (

<div id="startServices">
    <section className="service-title" id="episodes">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Listen to some of our <span>episodes!</span></h2>
      </div>
    </div>
  </div>
</section>
<div className="container">

    {/* Episode 11 */}
    <section className="episode-title" id="Episode11">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 11</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={TroyHearnEpisode11} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Troy Hearn <span>Cyclist</span></h3>
                    <ul>
                        <li><a href="#">Season Two: Episode Two</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/cyclist-troy-hearn-shares-stories-on-kentucky-mountain-biking-and-cycling-advocacy">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 10 */}
    <section className="episode-title" id="Episode10">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 10</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={AlexMeadeEpisode10} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Alex Meade <span>Cyclist</span></h3>
                    <ul>
                        <li><a href="#">Season Two: Episode One</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/cyclist-alex-meade-discusses-ultra-cycling-kentucky-backroads-and-bike-building-s2-e1">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 9 */}
    <section className="episode-title" id="Episode9">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 9</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={TimJenkinsEpisode9} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Tim Jenkins <span>Runner</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Nine</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/tim-jenkins-talks-about-living-into-and-creating-experience-with-running-s1-e9">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 8 */}
    <section className="episode-title" id="Episode8">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 8</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={ScottBlackEpisode8} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Scott Black <span>Trail Runner</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Eight</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/trail-runner-scott-black-shares-his-love-for-the-trails-and-proper-hydration">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 7 */}
    <section className="episode-title" id="Episode7">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 7</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={KevinRyanEpisode7} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Kevin Ryan <span>Triathlete</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Seven</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/triathlete-kevin-ryan-talks-about-pursuing-a-life-of-a-pro-triathlete-in-kentucky-s1-e7">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 6 */}
    <section className="episode-title" id="Episode6">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 6</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={LessonsLearnedEpisode6} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Lessons Learned</h3>
                    <ul>
                        <li><a href="#">Season One: Episode Six</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/lessons-learned-4-lessons-from-our-guests-on-keys-to-being-and-staying-active-s1-e6">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 5 */}
    <section className="episode-title" id="Episode5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 5</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={PamRandyThomasEpisode5} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Pam & Randy Thomas <span>Cyclist</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Five</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/cycling-pam-and-randy-thomas-share-their-passion-for-cycling-in-the-bluegrass">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 4 */}
    <section className="episode-title" id="Episode3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 4</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={LauraCoombsEpisode4} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Laura Coombs <span>Trainer</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Four</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/sup-heather-warman-talks-about-bringing-sup-experiences-to-kentucky">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 3 */}
    <section className="episode-title" id="Episode3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 3</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={HeatherWarmanEpisode3} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Heather Warman <span>SUP</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Three</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/sup-heather-warman-talks-about-bringing-sup-experiences-to-kentucky">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 2 */}
    <section className="episode-title" id="Episode2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 2</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={JoshNadzamEpisode2} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Josh Nadzam <span>Runner</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode Two</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/runner-josh-nadzam-used-running-to-create-a-new-life-and-to-help-others-in-his-community">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

    {/* Episode 1 */}
    <section className="episode-title" id="Episode1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Episode 1</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="service">
        <div className="episode-list">
            <div className="row">
              <div className="col-md-5">
                  <img src={SusanBradleyCoxEpisode1} className="img-fluid" alt="#" />
              </div>
              <div className="col-md-7">
                <div className="service-link">
                 <h3>Susan Bradley-Cox <span>Triathlete</span></h3>
                    <ul>
                        <li><a href="#">Season One: Episode One</a></li>
                        <li><i className="fa fa-soundcloud" aria-hidden="true"></i><a href="https://soundcloud.com/user-611964538/susan-bradley-cox-interview-on-active-lexington">Listen on Soundcloud</a></li>
                        <li><i className="fa fa-music" aria-hidden="true"></i><a href="https://itunes.apple.com/us/podcast/active-lexington/id1132630368?mt=2">Subscribe on iTunes</a></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i><a href="https://www.facebook.com/ActiveLexington/">Connect on Facebook</a></li>
                    </ul>
                  </div>
              </div>
            </div>
        </div>
    </section>

</div>
</div>
)
}

export default Services
