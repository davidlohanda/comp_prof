import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
   } from 'reactstrap';
import Logo from '../support/img/logo.png'
import '../support/css/Navbarstyle.css'
import {NavLink} from 'react-router-dom' 

class Header2 extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <div className="fixed-top full">
                <div className="container">
                    <Navbar className="navbar-container"  light  expand="md">
                    <NavbarBrand className="anti" href="/"><img height="50px" width="125px" src={Logo} alt="logo"></img></NavbarBrand>
                    <NavbarToggler className="navbar-toggler anti" onClick={this.toggle}/>
                    <Collapse className="collapse-container"  isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={()=>this.setState({isOpen : false})} className="nav-link" activeClassName="nav-link-active" to="/" style={{textDecoration:'none'}} exact>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={()=>this.setState({isOpen : false})} className="nav-link" activeClassName="nav-link-active" to="/ourproduct" style={{textDecoration:'none'}} exact>Product & Service</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={()=>this.setState({isOpen : false})} className="nav-link" activeClassName="nav-link-active" to="/ourcompany" style={{textDecoration:'none'}} exact>Company</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={()=>this.setState({isOpen : false})} className="nav-link-last nav-link" activeClassName="nav-link-active" to="/contactus" style={{textDecoration:'none'}} exact>Contact Us</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}


export default Header2