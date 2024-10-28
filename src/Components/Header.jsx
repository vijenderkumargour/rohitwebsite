import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false); // State to manage navbar collapse
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown menus

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close navbar on link click or outside click
    const closeNavbar = () => {
        setNavbarOpen(false);
        setDropdownOpen(false); // Close dropdown when navbar is closed
    };

    // Toggle navbar visibility
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
        setDropdownOpen(false); // Close dropdown when toggling navbar
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Handle clicks outside dropdown to close it
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className={`mainheader ${isSticky ? 'sticky' : ''}`}>
                <div className='header'>
                    <div className='container bgheader'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                                <div className='headerleft'>
                                    <ul>
                                        <li><i className="fa-regular fa-paper-plane"></i><Link to="mailto:example@gmail.com"> Send email  Example@gmail.com  </Link></li>
                                        <li><i className="fa-solid fa-phone"></i> <Link to="tel:+4733378901"> +47 333 78 901 </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <div className='headerright'>
                                    <ul>
                                        <li><Link to='/'><i className="fa-brands fa-facebook-f"></i></Link> </li>
                                        <li><Link to='/'><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        <li><Link to='/'><i className="fa-brands fa-instagram"></i></Link></li>
                                        <li><Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='menubar'>
                    <div className='container p-0'>
                        <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">React Website</Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded={navbarOpen}
                                    aria-label="Toggle navigation"
                                    onClick={toggleNavbar}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service" onClick={closeNavbar}>Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/news" onClick={closeNavbar}>News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/donation" onClick={closeNavbar}>Donation</Link>
                                        </li>
                                        <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
                                            <Link
                                                className="nav-link dropdown-toggle"
                                                to="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded={dropdownOpen}
                                                onClick={toggleDropdown}
                                            >
                                                Our Services <i className="fa-solid fa-angle-down"></i>
                                            </Link>
                                            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                                <li><Link className="dropdown-item" to="/gallery" onClick={closeNavbar}>Gallery</Link></li>
                                                <li><Link className="dropdown-item" to="/achievement" onClick={closeNavbar}>Achievements</Link></li>
                                                <li><Link className="dropdown-item" to="/testimonial" onClick={closeNavbar}>Testimonials</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
                                        </li>
                                        <li className="nav-item bg">
                                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>Donate Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
