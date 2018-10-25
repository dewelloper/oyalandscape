import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { IndexLink, Link } from 'react-router'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
      width: window.innerWidth,
      isPageLoaded : false
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

      if(!this.state.isPageLoaded){
      if(isMobile)
        this.state.collapsed= true;
      else this.state.collapsed= false;
    }

    this.state.isPageLoaded=true;

    if(isMobile){
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Ana Sayfa</IndexLink>
                </NavItem>
                <NavItem><Link to='/about' activeClassName='page-layout__nav-item--active'>Hakkımızda</Link> </NavItem>
                <NavItem><Link to='/project' activeClassName='page-layout__nav-item--active'>Projelerimiz</Link></NavItem>
                <NavItem> <Link to='/reference' activeClassName='page-layout__nav-item--active'>Referanslarımız</Link></NavItem>
                <NavItem><Link to='/contact' activeClassName='page-layout__nav-item--active'>İletişim</Link></NavItem>                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    else{
      return (
        <div>
          <Navbar color="faded" light>
            <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Ana Sayfa</IndexLink>
                </NavItem>
                <NavItem><Link to='/about' activeClassName='page-layout__nav-item--active'>Hakkımızda</Link> </NavItem>
                <NavItem><Link to='/project' activeClassName='page-layout__nav-item--active'>Projelerimiz</Link></NavItem>
                <NavItem> <Link to='/reference' activeClassName='page-layout__nav-item--active'>Referanslarımız</Link></NavItem>
                <NavItem><Link to='/contact' activeClassName='page-layout__nav-item--active'>İletişim</Link></NavItem>                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );      
    }
  }
}