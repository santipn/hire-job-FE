/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"

const SigninLayout = () => {
    return (<>
        <div className="container-fluid left">
            <div className="row">
                <div className="col-lg-6 d-lg-block d-none">
                    <Link href={'/'}><a><img src="/img/logo/logowhite.svg" className={styles.iconAuth} alt="icon" /></a></Link>
                    <h3 className={styles.descAuth}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h3>
                    <div className={styles.imgAuth} alt="background auth" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="container px-5">
                        <h2 className="mt-5 fw-bold">Halo, Pewpeople</h2>
                        <p className={styles.pAuth}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className={styles.labelName}>Email</label>
                                <input type="email" className="form-control" id="Email" name="email" placeholder="Masukan alamat email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="KataSandi" className={styles.labelName}>Kata Sandi</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan kata sandi anda" />
                            </div>
                            <Link href="/auth/reset"><a className={`text-decoration-none d-flex justify-content-end my-3 ${styles.pAuth}`}>Lupa Kata Sandi?</a></Link>
                            <button type="submit" className="btn btn-secondary w-100">Masuk</button>
                            <p className="my-5 text-center">Anda belum punya akun? <Link href={'/auth/perekrut'}><a className="text-decoration-none">Perekrut</a></Link> / <Link href={'/auth/pelamar'}><a className="text-decoration-none">Pelamar</a></Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SigninLayout