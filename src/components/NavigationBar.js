import {Navbar, Nav, Container, Form, Button} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Movie Lists</Navbar.Brand>
                    <Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar