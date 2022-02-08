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
          <Col span={20} offset={2}>
            <div>
              <h1 style={{fontWeight:"bold",fontSize:30}}>Presale Mint</h1>
              <h4 style={{color:"white",marginTop:-10}}>203 NFTs minted</h4>
              <Row>
                <Col span={8}>
                  <h1>Balance</h1>
                </Col>
                <Col span={8} offset={8}>
                  <h1>0.08 ETH</h1>
                </Col>
              </Row>
              <hr class={"solid"}/>
              <Row>
                <Col span={8}>
                  <h1>Amount</h1>
                </Col>
                <Col span={8}>
                  <Row>
                    <Col span={8}>
                      <h1 onClick={minus}>-</h1>
                    </Col>
                    <Col span={8}>
                      <h1>{count}</h1>
                    </Col>
                    <Col span={8}>
                      <h1  onClick={plus}>+</h1>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Button style={{borderRadius:10,fontWeight:"bold",fontSize:15,marginTop:8,justifyContent:"center"}}>
                    Max
                  </Button>
                </Col>
              </Row>
              <hr class={"solid"}/>
              <Row>
                <Col span={8}>
                  <h1>Balance</h1>
                </Col>
                <Col span={8} offset={8}>
                  <h1>0.08 ETH</h1>
                </Col>
              </Row>
              <hr class={"solid"}/>
            </div>
          </Col>
          <Col span={2}/>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <div>
              <Button style={{borderRadius:5,fontWeight:"bold",fontSize:20,marginTop:18,justifyContent:"center",width:300
              ,height:50}}>
                Mint {amount} NFTs
              </Button>
              <h1 style={{fontSize:10}}>
                0xf3 is approved for presale
              </h1>
            </div>
          </Col>
          <Col span={2}/>
        </Row>
      </div>

  );
}

export default BannerCalculations;