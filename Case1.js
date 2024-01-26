
import React from 'react';
import './Case1.css';
import Form from './Form.js';

const Case1 = () => {
  return (
  
     <>
     <div className="main-casestudydiv">
        <section className="caseStudysection1">
            <div className="casestudytitle">
                <div className="casestudylable">CASE STUDY</div>
                <h1 className="case-headind1"> CloudCipher Empowering the Revenue and Tax Collection Department </h1>
            </div>

        </section>

        </div>
    <div className="part2 col">
      <section className="para-in pt75">
        <article className="container">
          <div className="row-k">
            <div className="row-in mb20 fadeInUp animated" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }}>
              <p className="part2-para">Absence of real-time fleet monitoring system and an integrated data hub were causing inefficiency and safety concerns in fleet operations for a large automotive company.</p>
              <p className="part2-para">The client chose Infosys as their partner of choice to build a cloud-based integrated data hub solution with real-time tracking of location and safety of a fleet of school buses with an aim of mitigating risks and managing daily operations making them efficient and reliable. </p>
            </div>
          </div>
          <div className="row-k mt45">
            <div className="row-in2 ">
              <div className="yellow-bg pad-all wow fadeInUp animated" data-wow-delay="1.3s" style={{ visibility: 'visible', WebkitAnimationDelay: '1.3s', MozAnimationDelay: '1.3s', animationDelay: '1.3s' }}>
                <div className="row1 row-k">
                  <div className="col1">
                    <p> <strong>Key Challenges</strong></p>
                    <ul className="list-items">
                      <li>Applications involved in planning daily routes, driver assignment, managing driver overrides, and other operational functions were not in sync</li>
                      <li>Inability to detect safety alerts like over speeding, stop signs at designated stops</li>
                      <li>Lack of data collection mechanism from buses and drivers</li>
                    </ul>
                  </div>
                  <div className="col2">
                    <p> <strong>Ready to experience?</strong></p>
                    <a href="#rfs" className="scrollto-target pdf" title="Talk To Experts">TALK TO EXPERTS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
    <div className="part3">
      <section id="solution" className="pt0 pb75">
        <article className="container">
          <div className="row-in2">
            <div className="row-in2 wow fadeInUp animated" data-wow-delay="0.3s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.3s', MozAnimationDelay: '0.3s', animationDelay: '0.3s' }}>
              
              <h2 className="h2-heading text-center">The Solution</h2>
              <h3 className=" para-txt col-md-part-2 pd-lr light-gray text-center mb50">Infosys delivers an efficient fleet management solution for buses across 450 locations</h3>
            </div>
            <div className="col-part1 wow fadeInLeft animated" data-wow-delay="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.6s', MozAnimationDelay: '0.6s', animationDelay: '0.6s' }}>
              <p><strong>Real Time Tracking of School Buses</strong></p>
              <ul className="list-items">
                <li>Real-time ingestion of telemetry events from school buses into a single cloud-based platform - totaling 27 million events per day</li>
                <li>On-the-fly stream analysis to detect vehicle stop and door open events, and red flagging if that is not in designated geo fence</li>
                <li>Real-time ETA calculation and notifications provided to the parent’s mobile app</li>
              </ul>
              <p><strong>Increased Fleet efficiency</strong></p>
              <ul className="list-items">
                <li>Built an intelligent and efficient planning module to perform daily planning of routes and stoppages in an optimized manner</li>
                <li>Integration of driver and parent app for smoother operations and communications</li>
                <li>Provision for drivers to change plan and merge runs through the driver application</li>
                <li>Automating driver payroll processing based on journey data collected from buses en route and driver sign-in/sign-out</li>
                <li>Integration with big data and analytics to discover areas which needed optimization</li>
              </ul>
            </div>
          </div>
          <div className="row mt45">
            <div className="">
              <div className="yellow-bg pad-all wow fadeInUp animated" data-wow-delay="1.3s" style={{ visibility: 'visible', WebkitAnimationDelay: '1.3s', MozAnimationDelay: '1.3s', animationDelay: '1.3s' }}>
                <h2 className="head-case">Future-ready fleet management solution while optimizing costs </h2>
                <div className="row txt-para">
                  <div className="col1">
                    <ul className="list-items">
                      <li>Built on serverless architecture to provide a zero-cost solution when the buses are idle and not running</li>
                      <li>Scalable architecture to reduce lead time for new business in new school districts</li>
                      <li>High performing solution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      
    </div>
    
    <Form/>
  
    </> 
  );
}

export default Case1
