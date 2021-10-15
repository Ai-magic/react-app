import PropTypes from 'prop-types'
import { Nav, Navbar } from "react-bootstrap"
import mainLogo from '../logo.jpg';
const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <img src={mainLogo} alt="" style={{ width: "50px", height: "auto", marginRight: "10px", marginLeft: "10px" }} />
                {props.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ outline: 'none' }} />
            <Navbar.Collapse id="responsive-navbar-nav"  >
                <Nav className="mr-auto" style={{ height: '100%' }}>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

Header.defaultProps = {
    title: 'Host Wizard'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
