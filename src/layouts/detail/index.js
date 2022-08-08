import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './Detail.module.scss'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiGithub, FiGitlab } from 'react-icons/fi'
import { FaRegEnvelope, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'


const DetailLayout = () => {
    const [toggle, setToggle] = useState(true)

    return (<>
        <NavbarComponent />
        <div className={styles.bgPrimary} />
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className={`card ${styles.cardDetail}`}>
                        <div className="card-body text-center">
                            <Image src="/img/person.png" alt="profile img" className="img-circle" width="100" height="100" />
                            <div className={styles.detailPage}>
                                <h3 className={styles.nameDetail}>Louis Tomlinson</h3>
                                <p className={styles.jobDetail}>Web Developer</p>
                                <p className={`mb-3 ${styles.pDetail} `}>Freelancer</p>
                                <p className={styles.pDetail}><FiMapPin className={styles.iconMap} />Purwokerto</p>
                                <p className={styles.pDetail}><FiPhone className={styles.iconMap} />08123456789</p>
                                <p className={` ${styles.pDetail} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                <button className="btn btn-primary w-100 my-3">Hire</button>
                                <h3 className={`my-3 ${styles.nameDetail}`}>Skill</h3>
                                <div className="row mb-5 skillRow">
                                    <div className="col">
                                        <button className="btn btnSkill1">PHP</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">HTML</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">PYTHON</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">CSS</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">JAVASCRIPT</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">C#</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">C++</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btnSkill1">GO</button>
                                    </div>
                                </div>
                                <p className={styles.pDetail}><FaRegEnvelope className={styles.iconMap1} />email@email.com</p>
                                <p className={styles.pDetail}><FaInstagram className={styles.iconMap1} />@username</p>
                                <p className={styles.pDetail}><FiGithub className={styles.iconMap1} />@github</p>
                                <p className={`mb-5 ${styles.pDetail}`}><FiGitlab className={styles.iconMap1} />@gitlab</p>
                            </div>
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
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                        <div className="col-lg-4 col-6 text-center">
                                            <Image src="/img/portfolio.png" width={'200'} height="130" alt="portofolio img" className="img-rounded" />
                                            <p className={styles.pDetailPorto}>Remainder app</p>
                                        </div>
                                    </div>
                                </div>
                            </>) : (<>
                                <div className="my-3">
                                    <div className="row">
                                        <div className="col-lg-2 d-lg-block d-none">
                                            <Image src="/img/iconBag.svg" width={'120'} height="80" alt="portofolio img" className="img-rounded " />
                                        </div>
                                        <div className="col-lg-9 col-md-12">
                                            <div className="mt-2">
                                                <h3 className={styles.jobExperience}>Engineer</h3>
                                                <p className={styles.nameExperience}>Tokopedia</p>
                                                <p className={styles.pExperience}>July 2019 - January 2020 6 Months</p>
                                                <p className={styles.jobDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 d-lg-block d-none">
                                            <Image src="/img/iconBag.svg" width={'120'} height="80" alt="portofolio img" className="img-rounded " />
                                        </div>
                                        <div className="col-lg-9 col-md-12">
                                            <div className="mt-2">
                                                <h3 className={styles.jobExperience}>Engineer</h3>
                                                <p className={styles.nameExperience}>Tokopedia</p>
                                                <p className={styles.pExperience}>July 2019 - January 2020 6 Months</p>
                                                <p className={styles.jobDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                            </div>
                                        </div>
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