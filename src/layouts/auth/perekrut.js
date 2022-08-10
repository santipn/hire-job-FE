/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./Auth.module.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const PerekrutLayout = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        type: "perekrut",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        axios({
            method: "POST",
            data: formData,
            url: "/api/auth/register",
        }).then((res) => {
            if (res.status === 201) {
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
            toast.error(`${err.response.data.message}`, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                <div className={`col-lg-6 col-md-12 ${styles.scrollAbel}`}>
                    <div className="container px-5">
                        <h2 className="mt-5 fw-bold">Halo, Pewpeople</h2>
                        <p className={styles.pAuth}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group mb-4">
                                <label htmlFor="Name" className={styles.labelName}>Nama</label>
                                <input type="text" className="form-control" id="Name" name="name" placeholder="Masukan nama panjang" onChange={(e) => setFormData(prevData => ({ ...prevData, userFullName: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className={styles.labelName}>Email</label>
                                <input type="email" className="form-control" id="Email" name="email" placeholder="Masukan alamat email" onChange={(e) => setFormData(prevData => ({ ...prevData, email: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="perusahaan" className={styles.labelName}>Perusahaan</label>
                                <input type="text" className="form-control" id="perusahaan" name="perusahaan" placeholder="Masukan nama perusahaan" onChange={(e) => setFormData(prevData => ({ ...prevData, companyName: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="perusahaan" className={styles.labelName}>Bidang Perusahaan</label>
                                <input type="text" className="form-control" id="perusahaan" name="perusahaan" placeholder="Masukan bidang perusahaan" onChange={(e) => setFormData(prevData => ({ ...prevData, companyField: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="phone" className={styles.labelName}>No handphone</label>
                                <input type="number" className="form-control" id="phone" name="phone" placeholder="Masukan no handphone" onChange={(e) => setFormData(prevData => ({ ...prevData, userPhone: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="KataSandi" className={styles.labelName}>Kata Sandi</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan kata sandi anda" onChange={(e) => setFormData(prevData => ({ ...prevData, password: e.target.value }))} required />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="KataSandi" className={styles.labelName}>Konfrimasi Kata sandi</label>
                                <input type="password" className="form-control" id="KataSandi" name="password" placeholder="Masukan konfirmasi kata sandi anda" onChange={(e) => setFormData(prevData => ({ ...prevData, confrimPassword: e.target.value }))} required />
                            </div>
                            <button type="submit" className="btn btn-secondary w-100">Daftar</button>
                            <p className="my-5 text-center">Anda sudah punya akun? <Link href={'/auth'}><a className="text-decoration-none">Masuk disini</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PerekrutLayout