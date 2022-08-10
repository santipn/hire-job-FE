import React from 'react'
import FooterLayout from '../../components/footer'
import NavbarComponent from '../../components/navbar'
import styles from './chat.module.scss'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'


const ChatLayout = () => {
    return (
        <>
            <NavbarComponent />

            <div className={styles.chatLayout}>
                <div className="container">
                    <div className="row">
                        <div className={`${styles.left} col-md-4`}>
                            <div className={styles.leftPanel}>
                                <h5>Chat</h5>
                                <div className={styles.line}></div>
                                <div className={styles.Image}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="" />
                                    <div className={styles.text}>
                                        <h4>Gyga Maulana</h4>
                                        <p>Izin kebelakang kak</p>
                                    </div>
                                        
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.right} col-md-8`}>
                            <div className={styles.rightPanel}>
                                <h3>Gyga Maulana</h3>
                                <div className={styles.vLine}></div>
                                <div className={styles.chatContent}></div>
                                <div className={styles.messages}>
                                    <input type="text" placeholder='Type a messages...'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterLayout />
        </>
    )
}

export default ChatLayout