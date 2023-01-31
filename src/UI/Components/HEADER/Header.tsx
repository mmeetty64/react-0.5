import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/registration">register</Link>
            <Link to="/login">login</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}