import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './Detail.module.scss'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiGithub, FiGitlab } from 'react-icons/fi'
import { FaRegEnvelope, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import useVerify from '../../lib/useVerify'
import moment from 'moment'
import Link from 'next/link'

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

const DetailLayout = ({ slug }) => {
    const { data: user } = useVerify({})
    const { data, isValidating: loading } = useSWR(`/api/users?slug=${slug}`, fetcher)
    const { data: portfolio, isValidating: loadingPortfoio } = useSWR(`/api/portfolio?slug=${slug}`, fetcher)
    const { data: expe, isValidating: loadingexpe } = useSWR(`/api/experience?slug=${slug}`, fetcher)
    // console.log(expe, 'data');
    const [toggle, setToggle] = useState(true)

    return (<>
        <NavbarComponent />
        <div className={styles.bgPrimary} />
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className={`card ${styles.cardDetail}`}>
                        <div className="card-body text-center">
                            {loading ? (<> Loading </>) : (<>
                                <Image src={data.data.results[0].userImage !== null ? `${process.env.NEXT_PUBLIC_URL_IMAGE}/${data.data.results[0].userImage}` : '/img/person.png'} alt="profile img" className="img-circle" width="100" height="100" />
                                <div className={styles.detailPage}>
                                    <h3 className={styles.nameDetail}>{data.data.results[0].userFullName}</h3>
                                    <p className={styles.jobDetail}>{data.data.results[0].jobdesk}</p>
                                    <p className={`mb-3 ${styles.pDetail} `}>{data.data.results[0].categories}</p>
                                    <p className={styles.pDetail}><FiMapPin className={styles.iconMap} />{data.data.results[0].address}</p>
                                    <p className={styles.pDetail}><FiPhone className={styles.iconMap} />{data.data.results[0].userPhone}</p>
                                    <p className={` ${styles.pDetail} text-justify`}>{data.data.results[0].userDescription === null ? 'Deskripsi belum diatur' : data.data.results[0].userDescription}</p>
                                    {user?.role === 'perekrut' ? (<>
                                        <Link href={`/hire/${data.data.results[0].userSlug}`}><button className="btn btn-primary w-100 my-3">Hire</button></Link>
                                    </>) : ''}
                                    <h3 className={`my-3 ${styles.nameDetail}`}>Skill</h3>
                                    <div className="row mb-5 skillRow">
                                        {data.data.results[0].skiils === null ? '' :
                                            data.data.results[0].skiils.map((item, index) => (
                                                <div key={index} className="col">
                                                    <button className="btn btnSkill1">{item}</button>
                                                </div>
                                            ))}
                                    </div>
                                    <p className={styles.pDetail}><FaRegEnvelope className={styles.iconMap1} />{data.data.results[0].email}</p>
                                    {data.data.results[0].instagram === null ? '' : (<><p className={styles.pDetail}><FaInstagram className={styles.iconMap1} />@{data.data.results[0].instagram}</p></>)}
                                    {data.data.results[0].github === null ? '' : (<><p className={styles.pDetail}><FiGithub className={styles.iconMap1} />@{data.data.results[0].github}</p></>)}
                                    {data.data.results[0].gitlab === null ? '' : (<><p className={styles.pDetail}><FiGitlab className={styles.iconMap1} />@{data.data.results[0].gitlab}</p></>)}
                                    {/* <p className={`mb-5 ${styles.pDetail}`}><FiGitlab className={styles.iconMap1} />@{data.data.results[0].gitlab === null ? '' : data.data.results[0].gitlab}</p> */}
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className={`card ${styles.cardDetail}`}>
                        <div className="card-body">
                            <ul className="nav nav-tabs detailnav">
                                <li className="nav-item">
                                    <a type='button' className={toggle ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => setToggle(true)}>Portofolio</a>
                                </li>
                                <li className="nav-item">
                                    <a type='button' className={!toggle ? 'nav-link active' : 'nav-link'} onClick={() => setToggle(false)}>Pengalaman Kerja</a>
                                </li>
                            </ul>
                            {toggle ? (<>
                                <div className="my-3">
                                    <div className="row">
                                        {loadingPortfoio ? (<> Loading </>) : portfolio.data.map((item, index) => (

                                            <div className="col-lg-4 col-6 text-center" key={index}>
                                                <Image src={item.portfolioImage !== null ? `${process.env.NEXT_PUBLIC_URL_IMAGE}/${item.portfolioImage}` : '/img/portfolio.png'} width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                                <p className={styles.pDetailPorto}>{item.portfolioName}</p>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </>) : (<>
                                <div className="my-3">
                                    <div className="row">
                                        {loadingexpe ? (<> Loading </>) : expe.data.map((item, index) => {
                                            let start = moment(item.experienceIn, "YYYY-MM-DD");
                                            let end = moment(item.experienceOut, "YYYY-MM-DD");
                                            return (
                                                <>
                                                    <div key={index} className="col-lg-2 d-lg-block d-none">
                                                        <Image src="/img/iconBag.svg" width={'120'} height="80" alt="portofolio img" className="img-rounded " />
                                                    </div>
                                                    <div className="col-lg-9 col-md-12">
                                                        <div className="mt-2">
                                                            <h3 className={styles.jobExperience}>{item.experienceName}</h3>
                                                            <p className={styles.nameExperience}>{item.experiencePlace}</p>
                                                            <p className={styles.pExperience}>{moment(item.experienceIn).format("MMMM YYYY")} - {moment(item.experienceOut).format("MMMM YYYY")} {end.diff(start, 'months')} Months</p>
                                                            <p className={styles.jobDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout />
    </>)
}

export default DetailLayout