/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"

const ResetLayout = () => {
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
                        <p className={styles.pAuth}>Enter your user account{`'`}s verified email address and we will send you a password reset link.</p>
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className={styles.labelName}>Email</label>
                                <input type="email" className="form-control" id="Email" name="email" placeholder="Masukan alamat email" />
                            </div>
                            <button type="submit" className="btn btn-secondary w-100">Send Password Reset Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ResetLayout