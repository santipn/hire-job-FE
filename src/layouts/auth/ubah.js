/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";

const UbahLayout = (data) => {
    const { email, code } = data.data

    const [formData, setFormData] = useState({
        email,
        code,
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(formData)
        axios({
            method: "POST",
            data: formData,
            url: "/api/auth/changepassword",
        }).then((res) => {
            if (res.status === 200) {
                toast.success(`${res.data.message}`, {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                router.push("/auth")
            }
        }).catch((err) => {
            if (err.response) {
                toast.error(`${err.response.data.message}`, {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    }

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
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group mb-4">
                                <label htmlFor="KataSandi" className={styles.labelName}>Kata Sandi Baru</label>
                                <input type="password" className="form-control" name="password" placeholder="Masukan kata sandi baru" onChange={(e) => setFormData(prevData => ({ ...prevData, newPassword: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="KataSandi" className={styles.labelName}>Konfrimasi Kata sandi baru</label>
                                <input type="password" className="form-control" name="password" placeholder="Masukan konfirmasi kata sandi baru" onChange={(e) => setFormData(prevData => ({ ...prevData, confrimPassword: e.target.value }))} required />
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