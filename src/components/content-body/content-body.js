import './content-body.css'
import Dashboard from '../dashboard/dashboard'
import Dashboard2 from '../dashboard2/dashboard2'
import Dashboard3 from '../dashboard3/dashboard3'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'


function ContentBody() {
  return (
    <Container>
    <Tab.Container defaultActiveKey="first">
        <Row>
            <Col sm={2} id="navSidebar">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Graph 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Graph 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Graph 3</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Dashboard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Dashboard2 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Dashboard3 />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container >
    </Container>
  );
}

export default ContentBody;
