import Image from "next/image"
import Link from "next/link"
import { BiEnvelope } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
// import { useRouter } from 'next/router'
import useVerify from "../lib/useVerify"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlWeb = process.env.NEXT_PUBLIC_URL_IMAGE

const NavbarComponent = () => {
    // const router = useRouter()
    const { data, mutateData } = useVerify();
    // console.log(data)

    const handleLogout = () => {
        axios({
            method: "GET",
            url: `/api/auth/logout`,
        }).then
            (res => {
                if (res.data.success) {
                    toast.success(`You have been logout!`, {
                        position: "top-left",
                        autoClose: 1500,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    mutateData()

                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (<>
        <div className="bg-white">
            <div className="container">
                <nav className="navbar">
                    <div className="container">
                        <Link href='/'><a className="navbar-brand">
                            <Image src='/img/logo/logopurple.svg' alt="logo" width="90" height="38" />
                        </a></Link>
                        <div className="d-flex">
                            {data?.isLoggedIn ? (<>
                                <div className="iconNavbar d-flex align-items-center justify-content-center mx-4">
                                    <IoIosNotificationsOutline className="fs-3 mx-3" />
                                    <Link href={'/chat'}><a><BiEnvelope className="fs-3 mr-3" /></a>
                                    </Link>
                                </div>
                                <div className="dropdown">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <Image src={data.userImage === null ? '/img/person.png' : `${urlWeb}/${data.userImage}`} alt="profile img" className="img-circle" width="28" height="28"></Image>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link href={'/home'}><a className="dropdown-item">Home</a></Link></li>
                                        <li><Link href={'/profile'}><a className="dropdown-item">Profile</a></Link></li>
                                        <li><a type="button" className="dropdown-item" onClick={() => handleLogout()}>Logout</a></li>
                                    </ul>
                                </div>
                            </>) : (<>
                                <div className="navbarBtn">
                                    <Link href={'/auth'}><button className="btn btn-light mx-3">Masuk</button></Link>
                                    <Link href={'/auth/signup'}><button className="btn btn-primary">Daftar</button></Link>
                                </div>
                            </>)}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
    )
}

export default NavbarComponent