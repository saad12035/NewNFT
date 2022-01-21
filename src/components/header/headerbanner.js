import './headerbanner.css';
import { Row, Col } from 'antd';
import { Button} from 'antd';

function HeaderBanner(){
  return(
     <div className="container">
       <Row>
         <Col span={8}><div className="headerlogo">
           <h1>Logo</h1>
         </div></Col>
         <Col span={8} offset={8}>
           <Button className="button" shape="round"  >
             Connect Wallet
           </Button>
         </Col>
       </Row>


     </div>
  );
}

export default HeaderBanner;