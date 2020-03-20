import React, {Component} from 'react';
import './Home.scss';
import '../../index.scss';
import  {PageLink} from '../page-link/PageLink';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  render() {
    return (
      <>
        <Container fluid className="page">
          <Row>
            <Col xs={12} md={6} className="pad-right pad-bot"><PageLink label="Home"/></Col>
            <Col xs={12} md={6} className="pad-left pad-bot"><PageLink label="About"/></Col>
            <Col xs={12} md={6} className="pad-right pad-top"><PageLink label="Portfolio"/></Col>
            <Col xs={12} md={6} className="pad-left pad-top"><PageLink label="Contact"/></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
