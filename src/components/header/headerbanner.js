import './headerbanner.css';
import {Row, Col, Image} from 'antd';
import { Button} from 'antd';

function HeaderBanner(){
  return(
     <div className="container">
       <Row>
         <Col span={6}><div className="headerlogo">
           <Image style={{height:200,width:300}}
               src={require('../../images/Attachment_1643985080.png')}
           />
         </div></Col>
         <Col span={12}>
           <div className="header_title">
             <h1 className="title_color">PRIVATE SALE EVENT</h1>
           </div>
         </Col>
         <Col span={3}>
           <Button className="button"  style={{height:30}} >
             Connect Wallet
           </Button>
         </Col>
         <Col span={3}>
           <Button className="button"  style={{height:30,width:150}} >
             Warehouse
           </Button>
         </Col>
       </Row>
     </div>
  );
}

export default HeaderBanner;