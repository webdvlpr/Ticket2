import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import img1 from "../assets/img/portfolio/img1.jpg"

function ExistingBody() {
  const navigate = useNavigate();

  const navigatetoticket = () => {
    navigate('/newticket')
  }
  const navigatetosignup = () => {
    navigate('/signUp')
  }

  return (
    <div>
      <header id='hero-area' data-stellar-background-ratio='0.5'>
        <nav className='navbar navbar-expand-lg fixed-top scrolling-navbar indigo'>
          <div className='container'>
            <div className='navbar-header'>
              <a href='#' className='navbar-brand'><img className='img-fulid' src='./img/logo.png' alt='asdf' /></a>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#main-navbar'
                aria-controls='main-navbar' aria-expanded='false' aria-label='Toggle navigation'>
                <i className='lnr lnr-menu' />
              </button>
            </div>
            <div className='collapse navbar-collapse' id='main-navbar'>
              <ul className='navbar-nav mr-auto w-100 justify-content-end'>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#hero-area'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#services'>Services</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#features'>Features</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#portfolios'>Works</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#Download'>Download</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link page-scroll' href='#contact'>Contact</a>
                </li>
                <li className='nav-item'>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    padding: '0 !important',
                    cursor: 'pointer',
                  }} className='nav-link page-scroll' onClick={localStorage.getItem('userId') ? navigatetoticket : navigatetosignup}>Tickets</button>
                </li>
              </ul>
            </div>
          </div>
          <ul className='mobile-menu'>
            <li>
              <a className='page-scroll' href='#hero-area'>Home</a>
            </li>
            <li>
              <a className='page-scroll' href='#services'>Services</a>
            </li>
            <li>
              <a className='page-scroll' href='#features'>Features</a>
            </li>
            <li>
              <a className='page-scroll' href='#portfolios'>Works</a>
            </li>
            <li>
              <a className='page-scroll' href='#contact'>Contact</a>
            </li>
            <li className='page-scroll'>
              <button style={{
                background: 'none',
                border: 'none',
                padding: '0 !important',
                cursor: 'pointer',
              }} className='nav-link page-scroll' onClick={localStorage.getItem('userId') ? navigatetoticket : navigatetosignup}>Tickets</button>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col-md-10'>
              <div className='contents text-center'>
                <h1 className='wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='0.3s'>EMERGING MARKET SOLUTION.</h1>
                <a href='#contact' className='btn btn-common wow fadeInUp' data-wow-duration='1000ms'
                  data-wow-delay='400ms'>CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id='services' className='section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title wow fadeIn' data-wow-duration='1000ms' data-wow-delay='0.3s'>Our Services</h2>
            <hr className='lines wow zoomIn' data-wow-delay='0.3s' />
            <p className='section-subtitle wow fadeIn' data-wow-duration='1000ms' data-wow-delay='0.3s'>JAB Companies, Guyana (JABG), will be offering engineering and technological solutions such as developing applications, websites, hardware, and platforms, to elevate the infrastructure, support ministries, economy, companies, and provide employment to the local people in Guyana.
              As your technology partner, we will be with you every step of the way – from initial planning to delivery, and beyond.</p>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-6'>
              <div className='item-boxes wow fadeInDown' data-wow-delay='0.2s'>
                <div className='icon'>
                  <i className='lnr lnr-laptop-phone' style={{ color: '#039e4c' }} />
                </div>
                <h4>Application Development</h4>
                <p>JAB Guyana will develop your mobile platforms, IOS and Android. Development includes native apps, database, hosting, security and uploading of products and services.
                  Create an impactful mobile & web application that fits your brand and industry within a shorter time frame.</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='item-boxes wow fadeInDown' data-wow-delay='0.8s'>
                <div className='icon'>
                  <i className='lnr lnr-code' style={{ color: '#039e4c' }} />
                </div>
                <h4>Website Development</h4>
                <p>JABG will review your concept of designing your website with a choice of a few templates. The website can be managed by your team or administered by JAB Guyana and it’s staff of creative visions.</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='item-boxes wow fadeInDown' data-wow-delay='1.2s'>
                <div className='icon'>
                  <i className='lnr lnr-briefcase' style={{ color: '#039e4c' }} />
                </div>
                <h4>Software Solutions & <br /> Consulting</h4>
                <p>Our talented team can consult with your company for current and future technologies. Implementations and ongoing support are available, this can be IoT, Hardware, Applications, Platforms, Time & attendance, AI, Ecommerce, Security, Cloud, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="section" data-stellar-background-ratio="0.2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
            <div className="video-promo-content text-center">
              <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Some Features</h2>
              <hr className="lines"/>
              <div className="row">
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="lnr lnr-cloud"></i>
                    </div>
                    <h4>Cloud Applications</h4>
                    <p>We can design and host all your cloud applications with full support</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                    <div className="icon">
                      <i className="lnr lnr-laptop-phone"></i>
                    </div>
                    <h4>Fully Responsive<br/>Website Development</h4>
                    <p>We will design your website, so they are fully mobile responsive and easily maneuver of contents and flow.</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-smartphone"/>
                    </div>
                    <h4>Smartphone Applications</h4>
                    <p>All development of mobile application will be on native languages, this will be more stable and future developments are simpler.</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-cog"></i>
                    </div>
                    <h4>Easy to Customize</h4>
                    <p>JABG and its team can customize your conceptual vision of an app, platform, or website to meet all your requirements. Our goal is to simplify your process and streamline your business for better efficiency.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="lnr lnr-laptop-phone"/>
                    </div>
                    <h4>e-Commerce Applications</h4>
                    <p>We create e-Commerce applications that sell & help you kick start your project with Magento, Shopify, and many more.</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                    <div className="icon">
                      <i className="lnr lnr-code"/>
                    </div>
                    <h4>Enterprise Applications</h4>
                    <p>We create complex enterprise applications, ensure reliable software integration, and modernize your legacy system.</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-briefcase"></i>
                    </div>
                    <h4>Machine Learning & AI Solutions</h4>
                    <p>We automate businesses and optimize processes by deploying smart AI and machine learning solutions.</p>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-briefcase"></i>
                    </div>
                    <h4>BI Solutions</h4>
                    <p>Enrich your organization with intelligent custom BI solutions built with your needs and requirements in mind.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className=" col-sm">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="lnr lnr-laptop-phone"></i>
                    </div>
                    <h4>IoT Solutions</h4>
                    <p>Our secure IoT solutions will let you gather Big Data, optimize key processes, and improve decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
      <section className='video-promo section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='video-promo-content text-center'>
                <h2 className='wow zoomIn' data-wow-duration='1000ms' data-wow-delay='100ms'>WHAT MAKES US DIFFERENT</h2>
                <hr className='lines wow zoomIn' data-wow-delay='0.3s' />
                <div className='row'>
                  <div className=' col-sm-3'>
                    <div className='item-boxes wow fadeInDown' data-wow-delay='0.2s'>
                      <div className='icon'>
                        <i className='lnr lnr-laptop-phone' />
                      </div>
                      <h4>Cost Effective Solutions</h4>
                      <p>Budget friendly solutions right from consultancy to after sale support.</p>
                    </div>
                  </div>
                  <div className=' col-sm-3'>
                    <div className='item-boxes wow fadeInDown' data-wow-delay='0.8s'>
                      <div className='icon'>
                        <i className='lnr lnr-code' />
                      </div>
                      <h4>Solutions for Exceptional ROI</h4>
                      <p>Best solutions, implementation, and execution to get exceptional ROI at the end</p>
                    </div>
                  </div>
                  <div className=' col-sm-3'>
                    <div className='item-boxes wow fadeInDown' data-wow-delay='1.2s'>
                      <div className='icon'>
                        <i className='lnr lnr-briefcase' />
                      </div>
                      <h4>Crafted With Care</h4>
                      <p>We craft every software with great care and with attention to the finest details.</p>
                    </div>
                  </div>
                  <div className=' col-sm-3'>
                    <div className='item-boxes wow fadeInDown' data-wow-delay='1.2s'>
                      <div className='icon'>
                        <i className='lnr lnr-users' />
                      </div>
                      <h4>Long-term client relationship</h4>
                      <p>We strongly believe in harnessing the power of growing together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='portfolios' className='section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>Our Portfolio</h2>
            <hr className='lines' />
            <p className='section-subtitle'>Using the deep domain expertise of our software developers,<br /> we create innovative solutions that drive meaningful change with a strategic vision.</p>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='controls text-center'>
                <a className='filter active btn btn-common' data-filter='all'>
                  All
                </a>
                <a className='filter btn btn-common' data-filter='.design'>
                  Design
                </a>
                <a className='filter btn btn-common' data-filter='.development'>
                  Development
                </a>
                <a className='filter btn btn-common' data-filter='.print'>
                  Manufacturing
                </a>
              </div>
            </div>

            <div id='portfolio' className='row'>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src={img1} alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img1.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src='./img/portfolio/img2.jpg' alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img2.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src='./img/portfolio/img3.jpg' alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img3.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src='./img/portfolio/img4.jpg' alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img4.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src='./img/portfolio/img5.jpg' alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img5.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design'>
                <div className='portfolio-item'>
                  <div className='shot-item'>
                    <img src='./img/portfolio/img6.jpg' alt='' />
                    <a className='overlay lightbox' href='img/portfolio/img6.jpg'>
                      <i className='lnr lnr-eye item-icon' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Download'>
        <div id='apkCon'>
          <div id='apkLeft'>
            <div id='logoImg'>
              <img src='./img/mohss_logo.png' style={{ width: '200px' }} alt='' />
            </div>
            <div id='info'>
              <h2 style={{ fontSize: '1.6rem' }}>MOHSSS OAP - APK DOWNLOAD (Android)</h2>
              <p>Latest version: <b>v1.0.20.3</b></p>
              <p style={{ marginTop: '-15px' }}>Updated on: <b>February 6th, 2023</b></p>
              <h3 style={{ fontSize: '1rem' }}>New Updates</h3>
              <ul>
                <li>Issue with login on multiple devices - <font color='green'>Fixed</font></li>
                <li>Setting Admin account as an employee for devices - <font color='green'>Fixed</font></li>
                <li>Roles and privileges added - <font color='green'>Fixed</font></li>
                <li>Updated by added - <font color='green'>Fixed</font></li>
                <li>Other bugs - <font color='green'>Fixed</font></li>
              </ul>
            </div>
          </div>
          <div id='apkRight'>
            <a href='/img/Download/MOHSSS-v203_d03-02-2023.apk' style={{ background: 'none' }}>
              <img src='./img/apkqr.png' style={{ width: '200px' }} alt='' /></a>
            <p>MOHSSS-v203_d03-02-2023.apk</p>
            <a href='/img/Download/MOHSSS-v203_d03-02-2023.apk'>Download</a>
          </div>
        </div>
      </section>
      <section className='video-promo section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='video-promo-content text-center'>
                <h2 className='wow zoomIn' data-wow-duration='1000ms' data-wow-delay='100ms'>Watch Our Intro video</h2>
                <hr className='lines wow zoomIn' data-wow-delay='0.3s' />
                <p className='wow zoomIn' data-wow-duration='1000ms' data-wow-delay='100ms'>JAB Companies, Guyana is a startup business located in Georgetown, Guyana, South America, and will operate as a subsidiary business of JAB Companies, Inc. which is headquartered in St. Paul, Minnesota, the USA with affiliates across the globe.</p>
                <a href='https://www.youtube.com/watch?v=O1693sI3cqc' className='video-popup wow fadeInUp' data-wow-duration='1000ms' data-wow-delay='0.3s'><i className='lnr lnr-film-play' /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='section' data-stellar-background-ratio='-0.2'>
        <div className='contact-form'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-sm-6 col-xs-12'>
                <div className='contact-us'>
                  <h3>Contact With us</h3>
                  <div className='contact-address'>
                    <p style={{ color: '#029548' }}><b>JAB COMPANIES GUYANA, INC.</b></p>
                    <p style={{ color: '#029548' }}><b>DAVE&nbsp; BADHWA - Global Representative</b></p>
                    <p style={{ color: '#029548' }}><b>ISHWARDATT&nbsp; SINGH - Local Representative</b></p>
                    <p><i className='fa fa-map-marker' style={{ color: 'white', size: '10px', ariaHidden: 'true' }} /> &nbsp;&nbsp;&nbsp;&nbsp;102 Campbell Avenue Campbellsville, Georgetown, Guyana </p>
                    <p className='phone'><i className='fa fa-volume-control-phone' aria-hidden='true' />&nbsp;&nbsp;&nbsp;&nbsp;Local:<br /> <span>+592 668-4016</span></p>
                    <p className='phone'><i className='fa fa-volume-control-phone' aria-hidden='true' />&nbsp;&nbsp;&nbsp;&nbsp;MB Int'l:<br /> <span>+1 612-500-8705</span></p>
                    <p className='email'><i className='fa fa-envelope-o' aria-hidden='true' />&nbsp;&nbsp;&nbsp;&nbsp;E-mail: <br /><span>info@jabcomp.gy,&nbsp; daveb@jabcomp.com</span></p>
                  </div>
                  <div className='social-icons'>
                    <ul>
                      <li className='facebook'><a href='https://www.facebook.com/JABGuyana'><i className='fa fa-facebook' /></a></li>
                      <li className='twitter'><a href='#'><i className='fa fa-twitter' /></a></li>
                      <li className='google-plus'><a href='#'><i className='fa fa-google-plus' /></a></li>
                      <li className='linkedin'><a href='https://www.linkedin.com/company/jab-guyana/'><i className='fa fa-linkedin' /></a></li>
                      <li className='dribbble'><a href='#'><i className='fa fa-dribbble' /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 col-xs-12'>
                <div className='contact-block'>
                  <form id='contactForm'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <input type='text' className='form-control' id='name' name='name' placeholder='Your Name' required data-error='Please enter your name' />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <input type='text' placeholder='Your Email' id='email' className='form-control' name='name' required data-error='Please enter your email' />
                          <div className='help-block with-errors'></div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <textarea className='form-control' id='message' placeholder='Your Message' rows='8' data-error='Write your message' required></textarea>
                          <div className='help-block with-errors'></div>
                        </div>
                        <div className='submit-button text-center'>
                          <button className='btn btn-common' id='submit' type='submit'>Send Message</button>
                          <div id='msgSubmit' className='h3 text-center hidden'></div>
                          <div className='clearfix'></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-6 col-xs-12'>
              <ul className='footer-links'>
                <li>
                  <a href='#'>Homepage</a>
                </li>
                <li>
                  <a href='#'>Services</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 col-sm-6 col-xs-12'>
              <div className='copyright'>
                <p>&copy; 2022 - <a rel='nofollow' href='#'>JABCOMP</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href='#' className='back-to-top'>
        <i className='lnr lnr-arrow-up' />
      </a>

    </div>
  )
}

export default ExistingBody