import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './Profile.module.scss'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiEdit2 } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'


const CompProfileLayout = () => {

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
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100">Ubah Password</button>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className={`card ${styles.cardDetail} mb-3`}>
                        <div className="card-header">
                            <h3 className={styles.nameDetail}>Data Perusahaan</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama Perusahaan</label>
                                    <input type="text" className="form-control" placeholder="Masukan nama perusahaan" />
                                </div>
                                <div className="form-group">
                                    <label>Bidang</label>
                                    <input type="text" className="form-control" placeholder="Masukan bidang" />
                                </div>
                                <div className="form-group">
                                    <label>Domisili</label>
                                    <input type="text" className="form-control" placeholder="Masukan Domisili" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Masukan Email" />
                                </div>
                                <div className="form-group">
                                    <label>Deskripsi singkat</label>
                                    <textarea className="form-control" rows="3" placeholder="Masukan deskripsi singkat"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <input type="text" className="form-control" placeholder="Masukan Instagram" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>No Telepon</label>
                                            <input type="number" className="form-control" placeholder="Masukan no telepon" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Linkedin</label>
                                            <input type="text" className="form-control" placeholder="Masukan Linkedin" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-end my-3">
                                    <button className="btn btn-secondary btn-secondary-mobile w-100">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout />
    </>)
}

export default CompProfileLayout