import { Image} from 'antd';
import { Row, Col } from 'antd';
import './contextbody.css';
import BannerCalculations from "../bannercalculations/bannercalculations";
import BodyItems from "../bodyitems/bodyitems";

function ContextBody() {
  return (
      <div className='container-body'>
        <Row>
          <Col span={13}>
            <BannerCalculations/>
          </Col>
          <Col span={11}>
            <div className='image-css'>
              <Image
                  style={{borderRadius:50}}
                  src={require('../../images/148.png')}
              />
            </div>
          </Col>
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