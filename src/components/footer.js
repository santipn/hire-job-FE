import Image from "next/image"

const FooterLayout = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-start">
                        <div className="">
                            <Image src="/img/logo/logowhite.svg" alt="logo" width={'100'} height={'80'}></Image>
                            <p className="footerDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="col-12 d-flex justify-content-between py-2">
                        <p className="footerDetail2">2022 Peworld. All right reserved</p>
                        <div className="d-flex footerDetail3">
                            <a href="#" target={'_blank'} className="text-decoration-none text-white">Telepon</a>
                            <a href="#" target={'_blank'} className="text-decoration-none text-white mx-3">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterLayout