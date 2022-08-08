import Image from 'next/image'
import styles from './Auth.module.scss'
import Link from 'next/link'

const SignupLayout = () => {
    return (<>
        <div className={`d-flex justify-content-center align-items-center ${styles.signup}`}>
            <div className={styles.signupWrapper}>
                <Image src={'/img/logo/logopurple.svg'} width="120" height={'75'} alt='logo' />
                <p className={`${styles.pAuth} mb-3`}>Mau daftar sebagai apa?</p>
                <Link href='pelamar'><button className='btn btn-primary w-100 mb-3'>Pelamar</button></Link>
                <Link href='perekrut'><button className='btn btn-primary w-100'>Perekrut</button></Link>
                <hr />
                <p className={styles.pAuth}>Sudah punya akun? <Link href="/auth"><a className="text-decoration-none">Masuk!</a></Link></p>
            </div>

        </div>
    </>)
}

export default SignupLayout