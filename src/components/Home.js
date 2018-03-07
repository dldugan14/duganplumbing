import React, { Component } from "react";
// import Slider from "./slider/Slider";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>
          Serving Maricopa and Pinal counties for over 16 years Dugan Plumbing
          offers 24/7 service, at a cost effective rate, and we work with
          several home warranty companies for your convenience.
        </p>
        <div className="wrapper">
          <div className="car">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
              width={700}
              showStatus={false}
              interval={10000}
            >
              <div>
                <img
                  alt="900x500"
                  height={500}
                  src={require("../assets/download.jpg")}
                />
              </div>
              <div>
                <img
                  alt="900x500"
                  height={500}
                  src={require("../assets/plumbing.jpg")}
                />
              </div>
              <div>
                <img
                  alt="900x500"
                  hight={500}
                  src={require("../assets/plumberstock.jpg")}
                />
              </div>
            </Carousel>
          </div>
        </div>

        <h2>Testimonials</h2>
        <div className="wrapper">
          <div className="comments">
            {/* <Carousel indicators={false}>
              <Carousel.Item>
                <p>
                  "Just wanted you to know that Carlos did a wonderful job at
                  our home. This work was integral to this stage of our remodel
                  project. What a terrific personality. If everything doesn’t
                  leak (only kidding), he did a perfect piece of work. I will
                  need to have him return when I have the cabinet install date.
                  The cabinets arrived yesterday, but Paint and electrical work
                  need to happen first. Thanks Again for Carlos- I know how
                  valuable wonderful help is-"
                </p>
                <h3>-Linda M</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  I just wanted to drop a note and thank your company for the
                  quick and thorough service you provided us. I will recommend
                  you to everyone I know, and use you if we have any more
                  plumbing needs.
                </p>
                <h3>Sincerely, Pete & Jay D.</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  I want to take this time to thank you for the plumbing repair
                  that was performed by your employee Sam several weeks ago. At
                  first blush I thought it would be a major repair job, but Sam
                  was able to do the job with a minimum cost. I compliment him
                  for his ability to analyze the problem and to correct the
                  situation. There are times when people in our condo
                  association ask me for a plumber referral - and yours will
                  head the list! Thanks for your wonderful service - and for one
                  good employee - Sam!
                </p>
                <h3>Sincerely, Iver S. </h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Just a quick note to thank you and Will & Brendan for the
                  excellent jobs that were done. All the leaks are fixed. My
                  sink looks great and the garbage disposal purrs like a kitten.
                  The guys were clean, courteous, and did all I asked. Thanks
                  for a job well done.
                </p>
                <h3>-Ge Ge</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  My name is Eli and I rent a house through our property
                  management company. On October 24th we were experiencing some
                  drainage problems and they sent one of your plumbers, Will,
                  out to our house to repair it. As it turns out our sewer line
                  had collapsed and needed to be completely replaced. Will was
                  very helpful and explained exactly what was going to need to
                  happen in order to replace the pipe. He showed me where they
                  would need to dig the trench and where they would need to
                  knock down the wall.
                </p>
                <p>
                  Unfortunately for us, the trench was going directly underneath
                  the Christmas tree we planted on my son's first Christmas.
                  Additionally, the trench ran right between two mesquite trees
                  I had planted last year. Will told me that there was a very
                  good possibility that all of the trees would need to be
                  removed in order to access the collapsed sewer pipe. This was
                  upsetting news, but I knew it was what had to happen in order
                  to fix the problem.
                </p>
                <p>
                  On the scheduled day of the repair, Will showed up exactly
                  when he said he would. I watched him do some of the removal
                  before I went to school, and he was very careful not to
                  disturb any of the trees. It would have been much easier for
                  him and the backhoe operator to work without the trees in the
                  way, but they took the extra time and effort to work around
                  them.
                </p>
                <p>
                  When I got home later that day, the pipe was replaced, the
                  problem was fixed, and my back yard looked as good as it did
                  before they started digging. My girlfriend and I were very
                  pleased with the service we received and extremely happy that
                  Will was able to save our trees (especially my son's X-mas
                  tree, which has a lot of sentimental value to us). I just
                  wanted to take a second to let you know what an excellent job
                  Will did and how pleased we are with the service we received
                  from your company. Being out of our house was not easy, but
                  the one bright spot was working with a professional like Will
                  to rectify the problem. Thanks for the excellent service and
                  we will let our property manager know how happy we were with
                  your company.
                </p>
                <h3>Sincerely, Eli N. </h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Two compliments already this month- We appreciate all the good
                  work you do for our Planholders- Keep it up!
                </p>
                <h3>Thanks again! Old Republic Home Protection</h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  I am writing this note to thank Lamar. He came to my house to
                  fix a leak from the upstairs bathroom that had come through my
                  living room ceiling. He was professional, courteous, and
                  simply got on with the job. It was quite a stressful time for
                  me and he took care of this problem without any fuss. I am a
                  realtor and I always have my buyers use Old Republic Home
                  Warranty. This is the second time I have personally used your
                  company through the home warranty and I want you to know that
                  I will always recommend your company to my buyers and sellers.
                </p>
                <h3>Sincerely, Shelby S. </h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  Dugan Plumbing was assigned to a home warranty claim through
                  HWA when my water heater started leaking. Explained to them on
                  the phone that I was at the end escrow on selling the place,
                  and was supposed to close in just a few days. They had a guy
                  out the next day who replaced the water heater and had up and
                  running in just a couple of hours.
                </p>
                <h3>-Josh M. </h3>
              </Carousel.Item>
              <Carousel.Item>
                <p>
                  We have been using Dugan Plumbing for all of our Plumbing
                  needs at our Property Management company. Geoff and his team
                  are responsive, honest and do good work. I highly recommend
                  them to anyone.
                </p>
                <h3>-Kristen S.</h3>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
