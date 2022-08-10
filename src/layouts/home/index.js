import FooterLayout from "../../components/footer"
import styles from './Job.module.scss'
import NavbarComponent from "../../components/navbar"
import { BiSearch } from 'react-icons/bi'
import Image from "next/image"
import { FiMapPin } from 'react-icons/fi'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { GetAllUsers } from "../../redux/actions/users"




const JobSeekersLayout = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { GetUsers, loading } = useSelector(state => state.users)
    const [params, setParams] = useState({
        page: router.query.page || 1,
        isActive: 'y',
        search: router.query.search || '',
        limit: 1,
        sort: router.query.sort || '',
    });


    useEffect(() => {
        dispatch(GetAllUsers(params))
    }, [dispatch, params])

    let totalPage = Array(GetUsers.totalPage).fill() ?? [];
    // let totalPage = GetUsers.totalPage
    // console.log(totalPage)


    const searchHandler = async (e) => {
        e.preventDefault()
        const search = e.target.value
        setParams((prevState) => ({
            ...prevState,
            search: search,
        }))
        router.query.search = search
        router.push(router)
        // router.push({
        //     pathname: '/home',
        //     query: {
        //         search: search,
        //     },
        // })
    }

    const sortHandler = async (value) => {
        setParams((prevState) => ({
            ...prevState,
            sort: value,
        }))
        console.log(params);
        router.query.sort = value
        router.push(router)
    }

    const handlePaginate = async (page) => {
        setParams((prevState) => ({ ...prevState, page }));
        router.query.page = page
        router.push(router)
    }
    return (<>
        <NavbarComponent />
        <div className={styles.headNav}>
            <div className="container">
                <h3 className="text-white fw-bold">Top Jobs</h3>
            </div>
        </div>
        <div className="container">
            <div className={styles.searchBar}>
                <form>
                    <div className="input-group">
                        <input type="search" placeholder="Search for any skill" className="form-control" onChange={(e) => searchHandler(e)} />
                        <div className="input-group-append ">
                            <span className="input-group-text h-100"><BiSearch /></span>
                        </div>
                        <div className="bg-white d-flex align-items-center">
                            <button className="btn dropdown-toggle hover-border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => sortHandler('skills')}>Berdasarkan Skill</a></li>
                                <li><a className="dropdown-item" onClick={() => sortHandler('fulltime')}>Berdasarkan Fulltime</a></li>
                                <li><a className="dropdown-item" onClick={() => sortHandler('part time')}>Berdasarkan Part-Time</a></li>
                            </ul>
                        </div>
                        <div className="bg-white d-flex align-items-center">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.jobList}>
                {loading ? (<>loading</>) : !GetUsers.results.length ? (<>
                    <div className="text-center">
                        <Image src={'/img/notfound.png'} className={styles.imgNotfound} width={300} height={280} alt="notfound" />

                    </div>
                </>) : GetUsers.results.map((item, index) => (
                    <div className="hoverJobList" key={index}>
                        <div className="row">
                            <div className="col-lg-8 col-md-12 mb-3">
                                <div className="d-lg-flex align-items-center">
                                    <div className={styles.detailList}>
                                        <Image src={item.userImage !== null ? `${process.env.NEXT_PUBLIC_URL_IMAGE}/${item.userImage}` : '/img/person.png'} className="img-circle" width={'100'} height="100" alt="img profile"></Image>
                                    </div>
                                    <div className={styles.detailName}>
                                        <h3 className={styles.nameList}>{item.userFullName}</h3>
                                        <p className={`m-0 ${styles.jobdeskList}`}>{item.jobdesk} - {item.categories}</p>
                                        <p className={`m-0 py-1 ${styles.jobdeskList}`}><FiMapPin className={styles.iconMap} />{item.address}</p>
                                        <div className="row">
                                            {item.skills === null ? '' : item.skills.map((skill, index) => (<>
                                                <div className="col" key={index}>
                                                    <button className={`btn btnSkill`}>{skill}</button>
                                                </div>
                                            </>))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 d-flex text-center justify-content-start align-items-center">
                                <Link href={`detail/${item.userSlug}`}><button className="btn btn-primary">Lihat Profile</button></Link>
                            </div>
                        </div>
                        <hr />
                    </div>

                ))}
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link"><GrFormPrevious /></a>
                        </li>
                        {totalPage.map((item, index) => {
                            let number = index + 1;
                            let page = parseInt(params.page);
                            return (<>
                                <li className={
                                    page === number
                                        ? "page-item active"
                                        : "page-item"
                                }
                                    key={index}><a type="button" className="page-link" onClick={() => handlePaginate(number)}>{number}</a></li>
                            </>
                            );
                        })}
                        <li className="page-item">
                            <a className="page-link" href="#"><GrFormNext /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <FooterLayout />
    </>)
}

export default JobSeekersLayout