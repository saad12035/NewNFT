import {Row, Col, Button} from 'antd';
import './bannercalculations.css';
import {useState} from "react";


function BannerCalculations() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);


function minus(){
  setCount(count-1)
  const x = parseFloat(amount-0.025).toFixed(5)
  const y=parseFloat(x,2)
  setAmount(y)
}
  function plus(){
    setCount(count+1)
    const x = parseFloat(amount+0.025).toFixed(5)
    const y=parseFloat(x,2)
    setAmount(y)
  }



  return (
      <div className='calculations-container'>
        <Row>
          <Col span={4}/>
          <Col span={2}>
            <div className='button-style' onClick={minus}>
              <h1>-</h1>
            </div>
          </Col>
          <Col span={1}/>
          <Col span={6}>
            <div className='button-style'>
              <h1>{count}</h1>
            </div>
          </Col>
          <Col span={1}/>
          <Col span={2}>
            <div className='button-style' onClick={plus}>
              <h1>+</h1>
            </div>
          </Col>
          <Col span={8}/>
        </Row>
        <Row>
          <Col span={4}/>
          <Col span={12}>
            <br/>
            <h1 style={{fontSize:25}}>Buy {count} Apes {amount} ETH</h1>
          </Col>
          <Col span={8}/>
        </Row>
        <Row>
          <Col span={4}/>
          <Col span={12}>
            <Button className="body-button" shape="round"  >
              MINT NFT
            </Button>
          </Col>
          <Col span={8}/>
        </Row>
        <Row>
          <Col span={4}/>
          <Col span={12}>
            <br/>
            <h1 style={{fontSize:25}}>Total Sold 10/1000</h1>
          </Col>
          <Col span={8}/>
        </Row>
      </div>

  );
}

export default BannerCalculations;