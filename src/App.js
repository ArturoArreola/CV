import './App.css';

function App() {
    return (
        <div className="App">
            <header id="header">
                <div className="d-flex flex-column">

                <div className="profile">
                    <img src="./assets/img/profile-photo.jpg" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="/">Arturo Arreola</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="https://www.linkedin.com/in/hugo-arturo-arreola-rubio/" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://telegram.me/r2r_arreola" className="telegram" target="_blank" rel="noreferrer" ><i className="bx bxl-telegram"></i></a>
                    <a href="https://join.skype.com/invite/pQVQAeyu79sH" className="skype" target="_blank" rel="noreferrer"><i className="bx bxl-skype"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                    <li><a href="#hello" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#experience" className="nav-link scrollto"><i className="bx bxs-report"></i> <span>Skills</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-list-ul"></i> <span>Professional Experience</span></a></li>
                    <li><a href="#accreditations" className="nav-link scrollto"><i className="bx bxs-medal"></i> <span>Accreditations</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
                </div>
            </header>

            <section id="hello" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hello-container" data-aos="fade-in">
                <h1>Arturo Arreola</h1>
                <p>Full Stack Developer & Technical Consultant</p>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src="./assets/img/profile-photo.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <p>
                                Passion for innovative and quality software. Technical Consultant with 5 years of experience in Information Technologies, 
                                developing and working with customers in the technical role. Able to design high and scalable cloud solutions. Proactive, 
                                curious, goal oriented and a very good team player</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>

                        <div className="row skills-content">
                            <div className="col-lg-3" data-aos="fade-up">
                                <div className="section-title-skills">
                                    <h2>Languages, Frameworks & Libraries</h2>
                                </div>
                                <ul>
                                    <li className="skills-list">• Java</li>
                                    <li className="skills-list">• JavaScript</li>
                                    <li className="skills-list">• React</li>
                                    <li className="skills-list">• NodeJS</li>
                                    <li className="skills-list">• SpringBoot</li>
                                    <li className="skills-list">• TypeScript</li>
                                    <li className="skills-list">• Angular</li>
                                    <li className="skills-list">• Flutter</li>
                                    <li className="skills-list">• Python</li>
                                    <li className="skills-list">• Go</li>
                                    <li className="skills-list">• GraphQL</li>
                                    <li className="skills-list">• Apache Camel</li>
                                </ul>
                            </div>

                            <div className="col-lg-3" data-aos="fade-up">
                                <div className="section-title-skills">
                                    <h2>Databases</h2>
                                </div>
                                <ul>
                                    <li className="skills-list">• SQL
                                        <ul>
                                            <li className="skills-list">- PostgreSQL</li>
                                            <li className="skills-list">- SQL Server</li>
                                            <li className="skills-list">- MySQL</li>
                                            <li className="skills-list">- Informix</li>
                                        </ul>
                                    </li>
                                    <br/>
                                    <li className="skills-list">• NoSQL
                                        <ul>
                                            <li className="skills-list">- MongoDB</li>
                                            <li className="skills-list">- Firebase</li>
                                        </ul>
                                    </li>
                                    <br/>
                                    <li className="skills-list">• TSDB
                                        <ul>
                                            <li className="skills-list">- InfluxDB</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3" data-aos="fade-up">
                                <div className="section-title-skills">
                                    <h2>Testing & Analysis</h2>
                                </div>
                                <ul>
                                    <li className="skills-list">• K6</li>
                                    <li className="skills-list">• Apache Benchmark</li>
                                    <li className="skills-list">• Apache JMeter</li>
                                    <li className="skills-list">• Grafana</li>
                                    <li className="skills-list">• Prometheus</li>
                                </ul>
                            </div>

                            <div className="col-lg-3" data-aos="fade-up">
                                <div className="section-title-skills">
                                    <h2>Containers & DevOps</h2>
                                </div>
                                <ul>
                                    <li className="skills-list">• Red Hat OpenShift Container Platform</li>
                                    <li className="skills-list">• Docker</li>
                                    <li className="skills-list">• Jenkins</li>
                                    <li className="skills-list">• Ansible</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </section>
                
                <section id="resume" className="resume">
                    <div className="container">
                        <div className="section-title">
                            <h2>Professional Experience</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3" data-aos="fade-up" data-aos-delay="100">
                                <div className="resume-item">
                                    <h4>Testing Engineer</h4>
                                    <h5>March 2021 - Present</h5>
                                    <p><em>Afore Coppel - Nuuptech</em></p>
                                    <ul>
                                        <li>Design Load and Stress Testings for RESTful Microservices with K6 JS scripts and Apache Benchmark bash scripts.</li>
                                        <li>Creation of Grafana Dashboard to visualize InfluxDB results of testings and detect performance issues.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Testing Engineer | Developer</h4>
                                    <h5>March 2020 - March 2021</h5>
                                    <p><em>BanCoppel - Nuuptech</em></p>
                                    <ul>
                                        <li>Design Load and Stress Testings for RESTful Microservices with K6 JS scripts and Apache Benchmark bash scripts.</li>
                                        <li>Creation of Grafana Dashboard to visualize InfluxDB results of testings and detect performance issues.</li>
                                        <li>Develop of microservices in Apache Camel framework for process to acquire debit card from a financial app.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Full-Stack Developer</h4>
                                    <h5>January 2019 - February 2020</h5>
                                    <p><em>State of Mexico Notaries College - Nuuptech</em></p>
                                    <ul>
                                        <li>Creation of a generic platform to generate certifications 80% faster through the electronic signature of notaries.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Mobile Developer</h4>
                                    <h5>May 2019 - September 2019</h5>
                                    <p><em>State of Mexico Notaries College - Nuuptech</em></p>
                                    <ul>
                                        <li>Creation of an app to internal use of notaries where they could have control of meetings, internal chat, file upload and notaries' directory</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Full-Stack Developer</h4>
                                    <h5>July 2017 - December 2018</h5>
                                    <p><em>Santander Financial Services</em></p>
                                    <ul>
                                        <li>Development of the self-service portal so that users can obtain their mortgage credit from their smartphone.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Tech Leader | Web Developer</h4>
                                    <h5>July 2017 - December 2018</h5>
                                    <p><em>BX+ Financial Services</em></p>
                                    <ul>
                                        <li>Set up guidelines and reviewing the solution implementation to develop a decision engine to discover if a person can apply for financial credit.</li>
                                        <li>Development and administration of stored procedures and views of database.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Web Developer</h4>
                                    <h5>March 2017 - July 2017</h5>
                                    <p><em>UNEVT - Nuuptech</em></p>
                                    <ul>
                                        <li>Analyze and design a web portal for medical customers, ensuring a high performance and quality implementation.</li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Web Developer | DB Admin</h4>
                                    <h5>March 2016 - July 2017</h5>
                                    <p><em>Infonavit - Nuuptech</em></p>
                                    <ul>
                                        <li>Development of a judgment control system of Institute at the National Level.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                
                <section id="accreditations" className="facts section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Accreditations</h2>
                        </div>
                        
                        
                        
                        <div className="row" data-aos="fade-up">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Red Hat Delivery Specialist</h5>
                                        <p className="card-text">Red Hat Ansible Automation | Apr 2021</p>
                                        <a href="https://disk.yandex.com/i/xfXtSoS-08gdUA" target="_blank" rel="noreferrer" className="btn btn-primary">Go to file <i className='bx bxs-right-arrow-circle' ></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Scrum Foundations Professional Certificate</h5>
                                        <p className="card-text">Certiprof | ID : FLCWBLQTJJ-SDGSHSJF-WHFTFTHQFK | Jul 2020</p>
                                        <a href="https://disk.yandex.com/i/0207TJc3q3qPiQ" target="_blank" rel="noreferrer" className="btn btn-primary">Go to file <i className='bx bxs-right-arrow-circle' ></i></a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <br/>
                        <div className="row" data-aos="fade-up">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                    <h5 className="card-title">Red Hat Delivery Specialist</h5>
                                        <p className="card-text">Container Platform Application Deployment | May 2020</p>
                                        <a href="https://disk.yandex.com/i/UYpn4g-5Iv-BRg" target="_blank" rel="noreferrer" className="btn btn-primary">Go to file <i className='bx bxs-right-arrow-circle' ></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Red Hat Delivery Specialist</h5>
                                        <p className="card-text">Cloud Native Deployment | March 2020</p>
                                        <a href="https://disk.yandex.com/i/ATgLEF_qjgeRbA" target="_blank" rel="noreferrer" className="btn btn-primary">Go to file <i className='bx bxs-right-arrow-circle' ></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="contact" className="facts">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div className="count-box">
                                <i className="bi bi-telephone"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Phone Number</strong></p>
                                <p>(+52) 722-432-3140</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="count-box">
                                <i className="bx bxs-envelope"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Email</strong></p>
                                <p>arturoarreola@yandex.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="footer">
                <div className="container">
                <div className="copyright">
                    &copy; Copyright - <strong><span>Arturo Arreola</span></strong>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default App;