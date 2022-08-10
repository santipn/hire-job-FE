import Image from "next/image"
import NavbarComponent from "../../components/navbar"
import bghome1 from '../../../public/img/bghomepage.png'
import bghome2 from '../../../public/img/bghomepage2.png'
import bghome3 from '../../../public/img/bghomepage3.png'
import styles from './Home.module.scss'
import { MdOutlineDone } from 'react-icons/md'
import Slider from "react-slick";
import FooterLayout from "../../components/footer"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";



const IndexLayout = (data) => {

    const { email, code } = data.data
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
    };



    useEffect(() => {
        if (email && code) {
            axios.post(`/api/auth/verifycode`, data.data)
                .then(res => {
                    toast.success(`${res.data.message}`, {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(err => {
                    toast.error(`${err.response.data.message}`, {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
        }
    })

    return (<>
        <NavbarComponent />
        <div className="bg-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-12 d-flex align-items-center ">
                        <div className={styles.headerDesc}>
                            <h3 className={styles.titleDesc}>Talenta terbaik negeri untuk perubahan revolusi 4.0</h3>
                            <p className={styles.pDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                            <button className={`btn btn-primary`}>Mulai Dari Sekarang</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Image src={bghome1} alt="bg homepage"></Image>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-6 col-12">
                        <Image src={bghome2} alt="bg homepage"></Image>
                    </div>
                    <div className="col-lg-6 col-12 pt-5">
                        <div className={`${styles.headerDesc}`}>
                            <h3 className={`${styles.titleDesc} mb-4`}>Kenapa harus mencari tallent di peworld</h3>
                            <div className="d-flex align-items-center mb-3">
                                <MdOutlineDone className={styles.iconDesc} />
                                <p className={`m-0 ${styles.pDesc}`}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <MdOutlineDone className={styles.iconDesc} />
                                <p className={`m-0 ${styles.pDesc}`}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <MdOutlineDone className={styles.iconDesc} />
                                <p className={`m-0 ${styles.pDesc}`}>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <MdOutlineDone className={styles.iconDesc} />
                                <p className={`m-0 ${styles.pDesc}`}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-6 col-12 pt-5">
                        <div className={`${styles.headerDesc}`}>
                            <h3 className={`${styles.titleDesc} mb-4`}>Skill Talent</h3>
                            <p className={`${styles.pDesc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>Java</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>Kotlin</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>PHP</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>Javascript</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>Golang</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>C++</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>Ruby</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <MdOutlineDone className={styles.iconSkillDesc} />
                                        <p className={`m-0 ${styles.pDesc}`}>10+ Bahasa Lainya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Image src={bghome3} alt="bg homepage"></Image>
                    </div>
                </div>
                <div className="row mt-3">
                    <h3 className={`text-center my-5 ${styles.titleDesc}`}>Their opinion about peworld</h3>
                    <div className="col-12 text-center">
                        <Slider {...settings}>
                            <div className="card">
                                <div className="card-body">
                                    <Image src="/img/person.png" alt="profile picture" width={'80'} height={'80'} className={`${styles.opinionImg}`}></Image>
                                    <h4 className="opinionTitle">Hary Style</h4>
                                    <p className="opinionJob">Web Developer</p>
                                    <p className="opinionDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <Image src="/img/person.png" alt="profile picture" width={'80'} height={'80'} className={`${styles.opinionImg}`}></Image>
                                    <h4 className="opinionTitle">Hary Style</h4>
                                    <p className="opinionJob">Web Developer</p>
                                    <p className="opinionDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <Image src="/img/person.png" alt="profile picture" width={'80'} height={'80'} className={`${styles.opinionImg}`}></Image>
                                    <h4 className="opinionTitle">Hary Style</h4>
                                    <p className="opinionJob">Web Developer</p>
                                    <p className="opinionDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <Image src="/img/person.png" alt="profile picture" width={'80'} height={'80'} className={`${styles.opinionImg}`}></Image>
                                    <h4 className="opinionTitle">Hary Style</h4>
                                    <p className="opinionJob">Web Developer</p>
                                    <p className="opinionDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className={styles.footerCard}>
                        <div className={`d-flex justify-content-between align-items-center ${styles.footerCardWrapper}`}>
                            <h3 className={styles.footerCardTitle}>Lorem ipsum dolor sit amet</h3>
                            <button className="btn-secondary">Mulai dari sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout />
    </>)
}

export default IndexLayout