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
    const { data: token } = useSWR("/api/auth/token", fetcher)
    const { data: notif } = useSWR(`/api/notification?token=${token?.token}`, fetcher)
    console.log(notif?.data)
    

    return (<>
        <NavbarComponent />
        <div className={style.container}>
            <div className={style['section-left']}>
                <div className={style['title']}>
                    Notification
                </div>
                {notif?.data.map((item) =>{
                    return(
                    <div className={`${style['wrapper-card']} box-shadowNavbar`} key={item.notification_Id}>
                        <div>{item.notificationMessage}</div>
                    </div>

                    )
                })}


            </div>



        </div>
        <FooterLayout />
    </>
    )
}

export default NotifLayout