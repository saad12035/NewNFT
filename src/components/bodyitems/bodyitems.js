import {Row, Col, Button} from 'antd';
import './bodyitems.css';
import Items from "../items/items";

function BodyItems() {
  const myArray = [
    {
      number: 1,
      title: 'img1',
      image: '148',
    },
    {
      number: 2,
      title: 'img2',
      image: '256',
    },
    {
      number: 3,
      title: 'img3',
      image: '272',
    },
    {
      number: 4,
      title: 'img4',
      image: '829',
    },
    {
      number: 5,
      title: 'img5',
      image: '320',
    },
    {
      number: 6,
      title: 'img6',
      image: '148',
    },
  ]
  return (
     <div className='items-container'>
       <Row>
         <Col span={24}>
           <h1 className='header2'>
             Explore More
           </h1>
         </Col>
       </Row>
       <div style={{marginRight:50,paddingBottom:50}}>
       <Row gutter={[0,18]}>
           {myArray.map(({image}) => {
             return (
                 <Col span={6} offset={2}>
                   <Items data={image}/>
                 </Col>
             );
           })}
       </Row>
       </div>
       <Row>
         <Col span={24}>
           <Button className="body-button1" shape="round"  >
             Load More
           </Button>
         </Col>
       </Row>


     </div>
  );
}

export default BodyItems;