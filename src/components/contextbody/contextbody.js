import { Image} from 'antd';
import { Row, Col } from 'antd';
import './contextbody.css';
import BannerCalculations from "../bannercalculations/bannercalculations";


function ContextBody() {
  const myArray = [
    {
      number: 1,
      title: 'img1',
      image: 'IMG_2562',
    },
    {
      number: 2,
      title: 'img2',
      image: 'IMG_2506',
    },

    {
      number: 3,
      title: 'img3',
      image: 'IMG_2524',
    },
    {
      number: 4,
      title: 'img4',
      image: 'IMG_2500',
    },
    {
      number: 5,
      title: 'img5',
      image: 'IMG_2509',
    },
    {
      number: 6,
      title: 'img6',
      image: 'IMG_2527',
    },
  ]
  return (
      <div className='container-body1'>
        <Row>
          <Col span={2}/>
          <Col span={7}>
              <Image
                  style={{borderRadius:10,height:350,marginTop:30}}
                  src={require('../../images/Attachment_1644163170.gif')}
              />
          </Col>
          <Col span={7}>
            <BannerCalculations/>
          </Col>
          <Col span={4} offset={2}>
            <div className="promotion">
              <h1 style={{fontWeight:"bold",fontSize:30}}>
              10,000
              </h1>
              <h4 style={{color:"white",marginTop:-10}}>
              NFT Membership Cards
              </h4>
            </div>
            <div className="promotion">
              <h1 style={{fontWeight:"bold",fontSize:30}}>
                0.07 ETH
              </h1>
            </div>
            <div className="promotion">
              <h1 style={{fontWeight:"bold",fontSize:30}}>
                9850
              </h1>
              <h4 style={{color:"white",marginTop:-10}}>
                Potential Options
              </h4>
            </div>
          </Col>
          <Col span={2}/>
        </Row>
        <br/>
        <br/>
        <Row>
          {myArray.map(({image}) => {
            return (
                <Col span={3} offset={1}>
                  <Image
                         src={require('../../images/'+image+'.jpeg')}
                  />
                </Col>
            );
          })}

        </Row>
      </div>

  );
}

export default ContextBody;