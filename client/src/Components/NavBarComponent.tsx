import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Vacances</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Les Villas</Nav.Link>
            <Nav.Link href="#action2">Activités</Nav.Link>
            <NavDropdown title="Ajout" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ajouter une villa</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Ajouter une activité
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Statistiques
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#1">
                <img
                    src={require('C:/Users/laure/OneDrive/Documents/Site_vacance/site_git/site-vacances/client/src/Pictures/icon_profil_femme_60.jpg')}
                    alt="Profil"
                    />
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;