import './headerbanner.css';
import {Row, Col, Image} from 'antd';
import { Button} from 'antd';

function HeaderBanner(){
  return(
     <div className="container">
       <Row>
         <Col span={8}><div className="headerlogo">
           <Image
               style={{height:140}}
               src={require('../../images/Attachment_1643985080.png')}
           />
         </div></Col>
         <Col span={8} offset={8}>
           <Button className="button" shape="round"  style={{height:50}} >
             Connect Wallet
           </Button>
         </Col>
       </Row>


     </div>
  );
}

export default HeaderBanner;