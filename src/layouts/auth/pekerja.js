/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"

const PekerjaLayout = () => {
    return (<>
        <div className="container-fluid left">
            <div className="row">
                <div className="col-lg-6 d-lg-block d-none">
                    <Link href={'/'}><a><img src="/img/logo/logowhite.svg" className={styles.iconAuth} alt="icon" /></a></Link>
                    <h3 className={styles.descAuth}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                    <div className={styles.imgAuth} alt="background auth" />
                </div>
                <div className={`col-lg-6 col-md-12 ${styles.scrollAbel}`}>
                    <div className="container px-5">
                        <h2 className="mt-5 fw-bold">Halo, Pewpeople</h2>
                        <p className={styles.pAuth}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Name" className={styles.labelName}>Nama</label>
                                <input type="text" className="form-control" id="Name" name="name" placeholder="Masukan nama panjang" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className={styles.labelName}>Email</label>
                                <input type="email" className="form-control" id="Email" name="email" placeholder="Masukan alamat email" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="phone" className={styles.labelName}>No handphone</label>
                                <input type="number" className="form-control" id="phone" name="phone" placeholder="Masukan no handphone" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="KataSandi" className={styles.labelName}>Kata Sandi</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan kata sandi anda" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="KataSandi" className={styles.labelName}>Konfrimasi Kata sandi</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan konfirmasi kata sandi anda" />
                            </div>
                            <button type="submit" className="btn btn-secondary w-100">Daftar</button>
                            <p className="mt-5 text-center">Daftar sebagai perekrut? <Link href={'/auth/perekrut'}><a className="text-decoration-none">Daftar!</a></Link></p>
                            <p className="text-center">Anda sudah punya akun? <Link href={'/auth'}><a className="text-decoration-none">Masuk disini!</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PekerjaLayout