import {Row, Col, Image} from 'antd';
import './items.css';
import {HeartOutlined} from "@ant-design/icons";

function Items(props) {

  return (
      <div className="border">
        <Image style={{borderRadius:20}}
               src={require('../../images/'+props.data+'.png')}
        />
        <br/>
        <div className='items-container'>
          <Row>
            <Col span={2}/>
            <Col span={12}>
              <span style={{fontWeight:"600",marginTop:20,color:"white"}}>Collection Name</span>
              <br/>
              <span style={{fontWeight:"bold",color:"white"}}>NFT Title</span>
            </Col>
            <Col span={10}>
              <HeartOutlined style={{fontSize:30,marginTop:5,marginLeft:30,color:"white"}}/>
              <h1 style={{fontSize:20,marginLeft:70,marginTop:-30}}>16</h1>
            </Col>
          </Row>
        </div>

      </div>
  );
}

export default Items;