import React from 'react'
import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './chat.module.scss'

const ChatLayout = () => {
  return (
    <>
    <NavbarComponent/>
    <div className = "container">
        <div className = "row clearfix">
            <div className = "col-lg-12">
                <div className={`${styles.chatApp} card`}>
                    adasd
                </div>
            </div>
        </div>
    </div>
    <FooterLayout/>
    </>
  )
}

export default ChatLayout