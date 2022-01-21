import './footersite.css';
import {TwitterOutlined} from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {Col, Image} from "antd";
import { Row } from 'antd';

function FooterSite() {

  return (
    <div className="footer-container">
      <Row>
        <Col span={8}/>
        <Col span={2}>
          <Image src={require('../../images/1200px-Twitter_bird_logo_2012.svg.png')}/>
        </Col>
        <Col span={2}>
          <Image src={require('../../images/discord-icon.png')}/>
        </Col>
        <Col span={2}>
          <Image src={require('../../images/Instagram.svg.png')}/>
        </Col>
        <Col span={2}>
          <Image style={{marginLeft:10}} src={require('../../images/Telegram_logo.svg.png')}/>
        </Col>
        <Col span={8}/>
      </Row>
      {/*<TwitterOutlined style={{color:"#1DA1F2",fontSize:50}}/>*/}
      {/*<FontAwesomeIcon icon={faDiscord} style={{color:"#7289DA",fontSize:50,marginLeft:30}}/>*/}




      {/*<FontAwesomeIcon icon={faTelegram} style={{color:" #2AABEE",fontSize:60,marginLeft:30}}/>*/}
      <br/>
      <h1 style={{paddingTop:20,paddingBottom:80}}>Copyright © 2022, All rights reserved</h1>
    </div>
  );
}

export default FooterSite;