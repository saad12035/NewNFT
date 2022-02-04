import { Image} from 'antd';
import { Row, Col } from 'antd';
import './contextbody.css';
import BannerCalculations from "../bannercalculations/bannercalculations";
import BodyItems from "../bodyitems/bodyitems";

function ContextBody() {
  return (
      <div className='container-body1'>
        <Row>
          <Col span={5}/>
          <Col span={7}>
            <div className='image-css'>
              <Image
                  style={{borderRadius:50}}
                  src={require('../../images/Attachment_1643985288.gif')}
              />
            </div>
          </Col>
          <Col span={10}>
            <BannerCalculations/>
          </Col>
          <Col span={2}/>

        </Row>
        <Row>
          <Col span={24}>
            <BodyItems/>
          </Col>
        </Row>
      </div>

  );
}

export default ContextBody;