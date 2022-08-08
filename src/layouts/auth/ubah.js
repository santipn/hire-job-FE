/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"

const UbahLayout = () => {
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
                        <h2 className="mt-5 fw-bold">Reset Password</h2>
                        <p className={styles.pAuth}>You need to change your password to activate your account</p>
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className={styles.labelName}>Email</label>
                                <input type="email" className="form-control" id="Email" name="email" placeholder="Masukan alamat email" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="KataSandi" className={styles.labelName}>Kata Sandi Baru</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan kata sandi baru" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="KataSandi" className={styles.labelName}>Konfrimasi Kata sandi baru</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan konfirmasi kata sandi baru" />
                            </div>
                            <button type="submit" className="btn btn-secondary w-100">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default UbahLayout