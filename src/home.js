//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
//import Card from 'react-bootstrap/Card';

const HomeComponent = () => {
 
    const people =['Kingsley', 'Solomon','Irene', 'Mayomi']
    let [onePerson, anotherPerson] = people;
    console.log(onePerson, anotherPerson);
    const [name, setName] =useState('Emmanuel')
    const [age, setAge] =useState(5)
    //console.log(name);
    const handleClick =() => {
        setName('Prudence')
        setAge(8)
       // console.log(name, age);
    }
    return ( 
     <div>
      
      <Row className='container-fluid mt-5'>
        <h3> My name is {name} and i am {age} years old</h3>
        <Button onClick={handleClick}>
            Click me to change name
        </Button>
         <Col xs={12} md={4} lg={3}>
           <div className='p-3'>
             <ContentColumn></ContentColumn>
           </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
           <div className='p-3'>
             <ContentColumn></ContentColumn>
           </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
           <div className='p-3'>
             <ContentColumn></ContentColumn>
           </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
           <div className='p-3'>
             <ContentColumn></ContentColumn>
           </div>
        </Col>
       
      </Row>
  
     </div>
     );
}
 
export default HomeComponent;