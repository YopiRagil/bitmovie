import React, {useState} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const NavbarPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

  const handleSetSearch = async (e) => {
    setSearch(e.target.value)
    if(e.target.value.length >=3){
      await props.setSearch(1, e.target.value, type)
    }
    if(e.key === 'Enter'){
      await props.setSearch(1, e.target.value, type)
    }
  }
  
  const handleType = async(e) => {
    setType(e)
    await props.setSearch(search, e)
  }
  
  return (  
    <Router>
      <MDBNavbar color="mdb-color darken-4" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Bitmovie</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav >
            <MDBNavItem style={{width:'50%'}}>
              <MDBFormInline  waves>
                <div style={{width:'100%'}} 
                className="md-form my-0"
                >
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    value={search}
                    onChange={handleSetSearch}
                    onKeyDown={handleSetSearch}
                    placeholder="Search"
                    aria-label="Search"
                    style={{width:'100%'}}
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">{type? type.charAt(0).toUpperCase()+type.slice(1):"Type"}</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={() => handleType('movie')} style={{backgroundColor: type==="movie"?'silver':'white'}}>Movie</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => handleType('series')} style={{backgroundColor: type==="series"?'silver':'white'}}>Series</MDBDropdownItem>
                  <MDBDropdownItem onClick={() => handleType('episode')} style={{backgroundColor: type==="episode"?'silver':'white'}}>
                    Episode
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
};

export default NavbarPage;
