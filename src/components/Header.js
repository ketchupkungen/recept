import React, { useState } from 'react';
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div className='header'>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>FoodNstuff</MDBNavbarBrand>
                    <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                    >
                    <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/breakfast'>Breakfast</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/lunch'>Lunch</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/snack'>Snack</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/dinner'>Dinner</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/dessert'>Dessert</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/bread'>Bread</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/drink'>Drink</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        <MDBNavbarLink href='/calculate'>Calculate</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            </div>
            <div className='content'></div>
        </div>
    )
}