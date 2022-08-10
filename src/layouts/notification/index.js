import NavbarComponent from '../../components/navbar'
import FooterLayout from '../../components/footer'
import style from './Notif.module.scss'
import useVerify from '../../lib/useVerify'
import { useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.response.data);

const NotifLayout = () => {
    const { data: user } = useVerify({})
    const { data: token } = useSWR(`/api/auth/token`, fetcher)
    console.log(token)


    // useEffect({})

return (<>
        <NavbarComponent />
        <div className={style.container}>
            <div className={style['section-left']}>
                <div className={style['title']}>
                    Notification
                </div>
                
                <div className={style['wrapper-card']}>
                    <div>PT. MARTABAK  mengirim email, silahkan cek email!</div>
                </div>

              
            </div>



        </div>
        <FooterLayout />
    </>
    )
}

export default NotifLayout