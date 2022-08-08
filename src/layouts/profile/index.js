import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './Profile.module.scss'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiEdit2 } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'


const ProfileLayout = () => {
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
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100">Ubah Password</button>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className={`card ${styles.cardDetail} mb-3`}>
                        <div className="card-header">
                            <h3 className={styles.nameDetail}>Data Diri</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama lengkap</label>
                                    <input type="text" className="form-control" placeholder="Masukan nama lengkap" />
                                </div>
                                <div className="form-group">
                                    <label>Pekerjaan</label>
                                    <input type="text" className="form-control" placeholder="Masukan pekerjaan" />
                                </div>
                                <div className="form-group">
                                    <label>Jenis pekerjaan</label>
                                    <select className="form-control selectForm">
                                        <option>Freelancer</option>
                                        <option>Fulltime</option>
                                        <option>Part-time</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Domisili</label>
                                    <input type="text" className="form-control" placeholder="Masukan Domisili" />
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
                                            <label>Github</label>
                                            <input type="text" className="form-control" placeholder="Masukan Github" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Gitlab</label>
                                            <input type="text" className="form-control" placeholder="Masukan Gitlab" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Deskripsi singkat</label>
                                    <textarea className="form-control" rows="3" placeholder="Masukan deskripsi singkat"></textarea>
                                </div>
                                <div className="form-group text-end my-3">
                                    <button className="btn btn-secondary btn-secondary-mobile">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={`card ${styles.cardDetail} my-3`}>
                        <div className="card-header">
                            <h3 className={styles.nameDetail}>Skill</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-9 col-md-12">
                                        <div className="form-group">
                                            <label>Skill</label>
                                            <input type="text" className="form-control" placeholder="Masukan skill" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <button className="btn btn-secondary marginBtn btn-secondary-mobile">Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row my-3 rowSkill">
                                <div className="col">
                                    <button className="btn btnSkill">PHP <FiEdit2 />{' '}<BsTrash /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`card ${styles.cardDetail} my-3`}>
                        <div className="card-header">
                            <h3 className={styles.nameDetail}>Pengalaman Kerja</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Nama perusahaan</label>
                                            <input type="text" className="form-control" placeholder="Masukan nama perusahaan" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Posisi</label>
                                            <input type="text" className="form-control" placeholder="web developer" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Tanggal masuk</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Tanggal keluar</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Deskripsi singkat</label>
                                    <textarea className="form-control" rows="3" placeholder="Masukan deskripsi singkat pekerjaan"></textarea>
                                </div>
                                <div className="form-group text-end my-3">
                                    <button className="btn btn-secondary w-100 btn-secondary-mobile">Simpan</button>
                                </div>
                            </form>
                            <hr />
                            <table className='table table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Nama perusahaan</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>PT. Indomarco</td>
                                        <td><a type='button'><FiEdit2 /></a>{' '}<a type='button'><BsTrash /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={`card ${styles.cardDetail} my-3`}>
                        <div className="card-header">
                            <h3 className={styles.nameDetail}>Portofolio</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Nama Aplikasi</label>
                                    <input type="text" className="form-control" placeholder="Nama Aplikasi" />
                                </div>
                                <div className="form-group">
                                    <label>Link Repository</label>
                                    <input type="text" className="form-control" placeholder="Link Repository" />
                                </div>
                                <div className="form-group">
                                    <label>Upload Gambar</label>
                                    <input type="file" className="form-control" />
                                </div>
                                <div className="form-group text-end my-3">
                                    <button className="btn btn-secondary w-100 btn-secondary-mobile">Simpan</button>
                                </div>
                            </form>
                            <hr />
                            <table className='table table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Nama Aplikasi</th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Go Trash</td>
                                        <td><a type='button'><FiEdit2 /></a>{' '}<a type='button'><BsTrash /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout />
    </>)
}

export default ProfileLayout