import Head from 'next/head'

const HeadLayout = ({ title }) => {
    const webName = "| Peworld"
    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="PEWORLD adalah sebuah website yang digunakan untuk mencari kerja dan mencari pekerja untuk anak bangsa" />
            <title>{`${title} ${webName}`}</title>
            <link rel="icon" type="image/x-icon" href="/img/ico.svg" />

        </Head>
    </>
    )
}

export default HeadLayout