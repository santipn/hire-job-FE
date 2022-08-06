import Image from "next/image"
import Link from "next/link"
import { BiEnvelope } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

const NavbarComponent = () => {
    return (<>
        <div className="bg-white">
            <div className="container">
                <nav className="navbar">
                    <div className="container">
                        <Link href='/'><a className="navbar-brand">
                            <Image src="/img/logo/logopurple.svg" alt="logo" width="90" height="38" />
                        </a></Link>
                        <div className="d-flex">
                            <div className="navbarBtn">
                                <Link href={'/auth'}><button className="btn btn-light mx-3">Masuk</button></Link>
                                <Link href={'/auth/pelamar'}><button className="btn btn-primary">Daftar</button></Link>
                            </div>
                            {/* <div className="iconNavbar d-flex align-items-center justify-content-center mx-4">
                                <IoIosNotificationsOutline className="fs-3 mx-3" />
                                <BiEnvelope className="fs-3 mr-3" />
                            </div>
                            <div className="dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Image src='/img/person.png' alt="profile img" className="img-circle" width="28" height="28"></Image>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
    )
}

export default NavbarComponent