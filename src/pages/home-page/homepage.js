import {Layout, Row, Col, Image} from 'antd';
import './homepage.css';


const { Header, Footer, Content } = Layout;
function Home(){

  return(
      <Layout>
        <div className="head">
          <Header style={{ position: 'sticky', margin:'0', width: '100%',backgroundColor:'#3F0858',height:'30%',paddingTop:'1%' }}>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                  <h1>
                    Trucareer
                  </h1>
              </Col>
              <Col xs={{ span: 0 }} lg={{ span: 9, offset: 7 }}>
                <Row>
                  <Col xs={{ span: 0}} lg={{ span: 3 }}>
                    <h2>
                      Home
                    </h2>
                  </Col>
                  <Col xs={{ span: 0}} lg={{ span: 4 ,offset:1}}>
                    <h2>
                      Universities
                    </h2>
                  </Col>
                  <Col xs={{ span: 0}} lg={{ span: 4 ,offset:3}}>
                    <h2>
                      About
                    </h2>
                  </Col>
                  <Col xs={{ span: 0}} lg={{ span: 4,offset:1 }}>
                    <h2>
                      Login
                    </h2>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
        </div>
        <Content>
          <df-messenger
              intent="WELCOME"
              chat-title="NewAgent"
              agent-id="d0af3a0b-678f-4e15-8c92-ceb1b0b30f8e"
              language-code="en"
          ></df-messenger>
          <div className="hero-banner">
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 3 }}>
                <h1>
                  Finding the <span style={{color:'#C0843D'}}>right career</span><br/>is much more easier now !
                </h1>
                <h2>Learn More</h2>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 2 }}>
                <Image
                    className='hero-image'
                    preview={false}
                    src={require("../../images/hero_banner.png")}
                />
              </Col>
            </Row>
          </div>
          <div className='promotion'>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
                <h1>
                  Discover your true passion today
                </h1>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 10 }}>
                <h2>Learn More</h2>
              </Col>

            </Row>
          </div>
          <div className='text-sections'>
            <Row >
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                  <h1>
                    Heading 1
                  </h1>
                <h2>
                  lorum ipsum lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                </h2>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <Image
                    className='ellipse-image1'
                    preview={false}
                    src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                />
                <Image
                    className='ellipse-image2'
                    preview={false}
                    src={require("../../images/Ellipse 2.png")}
                />
              </Col>
            </Row>
            <div style={{marginBottom:'5%'}}/>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <Image
                    className='ellipse-image1'
                    preview={false}
                    src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                />
                <Image
                    className='ellipse-image2'
                    preview={false}
                    src={require("../../images/Ellipse 2.png")}
                />
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 1 }}>
                <h3>
                  Heading 1
                </h3>
                <h2>
                  lorum ipsum lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                </h2>
              </Col>

            </Row>
            <div style={{marginBottom:'7%'}}/>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <h1>
                  Heading 1
                </h1>
                <h2>
                  lorum ipsum lorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsumlorum ipsum
                </h2>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <Image
                    className='ellipse-image1'
                    preview={false}
                    src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                />
                <Image
                    className='ellipse-image2'
                    preview={false}
                    src={require("../../images/Ellipse 2.png")}
                />
              </Col>
            </Row>
          </div>
          <div className='counsellors'>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 9 }}>
                <h1>
                  Meet Our Counsellors
                </h1>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <div className='image-design'>
                  <Image
                      className='counsellor-image1'
                      preview={false}
                      src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                  />
                  <Image
                      className='counsellor-ellipse'
                      preview={false}
                      src={require("../../images/Ellipse 11.png")}
                  />
                </div>

              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <div className='image-design'>
                  <Image
                      className='counsellor-image1'
                      preview={false}
                      src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                  />
                  <Image
                      className='counsellor-ellipse'
                      preview={false}
                      src={require("../../images/Ellipse 11.png")}
                  />
                </div>

              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <div className='image-design'>
                  <Image
                      className='counsellor-image1'
                      preview={false}
                      src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                  />
                  <Image
                      className='counsellor-ellipse'
                      preview={false}
                      src={require("../../images/Ellipse 11.png")}
                  />
                </div>

              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                <div className='counsellor-name'>
                 <h1>
                   Shameer Shahzad
                 </h1>
                  <h2>
                    America
                  </h2>
                </div>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <div className='counsellor-name'>
                  <h1>
                    Shameer Shahzad
                  </h1>
                  <h2>
                    America
                  </h2>
                </div>
              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <div className='counsellor-name'>
                  <h1>
                    Shameer Shahzad
                  </h1>
                  <h2>
                    America
                  </h2>
                </div>
              </Col>
            </Row>
          </div>
          <div className='testimonials'>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 5 }}>
                <h4>
                  What people have say about us ?
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 4 }}>
                <Image
                    className='ellipse-testimonials-image'
                    preview={false}
                    src={require("../../images/Rectangle 7.png")}
                />
                  <Image
                      className='testimonials-image1'
                      preview={false}
                      src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                  />

                  <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
                <h1>Saad Ali Ahsan</h1>
                <h3>Student -24</h3>


              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <Image
                    className='ellipse-testimonials-image'
                    preview={false}
                    src={require("../../images/Rectangle 7.png")}
                />
                <Image
                    className='testimonials-image1'
                    preview={false}
                    src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                />

                <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
                <h1>Saad Ali Ahsan</h1>
                <h3>Student -24</h3>


              </Col>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 1 }}>
                <Image
                    className='ellipse-testimonials-image'
                    preview={false}
                    src={require("../../images/Rectangle 7.png")}
                />
                <Image
                    className='testimonials-image1'
                    preview={false}
                    src={require("../../images/WhatsApp Image 2021-04-26 at 2.28.30 PM.jpeg")}
                />

                <h2>lorum ipsum lorum ipsum<br/> lorum ipsum lorum ipsum</h2>
                <h1>Saad Ali Ahsan</h1>
                <h3>Student -24</h3>


              </Col>
            </Row>
          </div>
          <div className='statistics'>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 5 }}>
                <h1>
                  Trucareer <span style={{color:'#3F0858'}}>in numbers !</span>
                </h1>
              </Col>
            </Row>
            <div className='statistics-2'>
              <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 3, offset:3 }}>
                  <h2>
                    1,430
                  </h2>
                  <h3>
                    Registered <br/>Students
                  </h3>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 3, offset: 2 }}>
                  <h2>
                    1,430
                  </h2>
                  <h3>
                    Registered <br/>Students
                  </h3>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 3, offset: 2 }}>
                  <h2>
                    1,430
                  </h2>
                  <h3>
                    Registered <br/>Students
                  </h3>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 3, offset: 2 }}>
                  <h2>
                    1,430
                  </h2>
                  <h3>
                    Registered <br/>Students
                  </h3>
                </Col>
              </Row>
            </div>


          </div>
          <div className='promotion-2'>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 14, offset: 6 }}>
                <h1>Your perfect career awaits you</h1>

              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 14, offset: 10 }}>
                <h2>Try Now</h2>

              </Col>
            </Row>

          </div>
        </Content>

          <Footer style={{backgroundColor:'#3F0858'}}>
            <div className='footer-site'>
              <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 7, offset: 2 }}>
                  <h1>Trucareer</h1>
                  <h2>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</h2>
                </Col>
              </Row>
            </div>


          </Footer>


      </Layout>
  );
}

export default Home;