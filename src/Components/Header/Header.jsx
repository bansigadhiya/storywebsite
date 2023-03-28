import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="header py-2">
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <div className='logo col-2'>
                            <h3 className='text-white'>Stories</h3>
                        </div>
                        <div className='menu col-3 text-end'>
                            <nav>
                                <ul className='list-unstyled d-flex m-0'>
                                    <li className='px-3'>
                                        <NavLink to='/' className='text-white text-decoration-none'>Create</NavLink>
                                    </li>
                                    <li className='px-3'>
                                        <NavLink to='/viewstory' className='text-white text-decoration-none'>Read</NavLink>
                                    </li>
                                    <li className='ps-3'>
                                        <NavLink to='/Editstory' className='text-white text-decoration-none'>Update</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header
