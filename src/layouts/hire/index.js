import FooterLayout from "../../components/footer"
import NavbarComponent from "../../components/navbar"
import { useRouter } from 'next/router';
import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import Image from "next/image";
import styles from './Hire.module.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);


const HireLayout = () => {
    const router = useRouter();

    const [msg, setMsg] = useState({});
    const { slug } = router.query;
    const { data, isValidating: loading } = useSWR(`/api/users?slug=${slug}`, fetcher)
    const { data: token } = useSWR(`/api/auth/token`, fetcher)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios({
            method: "POST",
            url: `/api/users/send?slug=${slug}`,
            data: msg,
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }).then(res => {
            toast.success(res.data.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(err => {
            toast.error(err.response.data.message, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    return (<>
        <NavbarComponent />
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className={`card`}>
                        <div className="card-body text-center">
                            {loading ? (<> Loading </>) : (<>
                                <Image src={data.data.results[0].userImage !== null ? `${process.env.NEXT_PUBLIC_URL_IMAGE}/${data.data.results[0].userImage}` : '/img/person.png'} alt="profile img" className="img-circle" width="100" height="100" />
                                <div className={styles.detailPage}>
                                    <h3 className={styles.nameDetail}>{data?.data.results[0].userFullName}</h3>
                                    <p className={styles.jobDetail}>{data?.data.results[0].jobdesk}</p>
                                    <p className={`mb-3 ${styles.pDetail} `}>{data?.data.results[0].categories}</p>
                                    <p className={styles.pDetail}><FiMapPin className={styles.iconMap} />{data?.data.results[0].address}</p>
                                    <p className={styles.pDetail}><FiPhone className={styles.iconMap} />{data?.data.results[0].userPhone}</p>
                                    <p className={` ${styles.pDetail} text-justify`}>{data?.data.results[0].userDescription === null ? 'Deskripsi belum diatur' : data?.data.results[0].userDescription}</p>
                                    <h3 className={`my-3 ${styles.nameDetail}`}>Skill</h3>
                                    <div className="row mb-5 skillRow">
                                        {data?.data.results[0].skiils === null ? '' :
                                            data?.data.results[0].skiils.map((item, index) => (
                                                <div key={index} className="col">
                                                    <button className="btn btnSkill1">{item}</button>
                                                </div>
                                            ))}
                                    </div>

                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 mt-3 px-3">
                    <h2 className={styles.hubNameHire}>Hubungi {data?.data.results[0].userFullName}</h2>
                    <p className={styles.pDetail}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" className="form-control" name="subject" placeholder="Enter Subject Email" onChange={(e) => setMsg(prevData => ({ ...prevData, tujuanPesan: e.target.value }))} required />
                        </div>
                        <div className="form-group">
                            <label >Message</label>
                            <textarea rows={'4'} className="form-control" name="message" placeholder="Enter Message" onChange={(e) => setMsg(prevData => ({ ...prevData, message: e.target.value }))} required></textarea>
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <FooterLayout />
    </>)
}



export default HireLayout