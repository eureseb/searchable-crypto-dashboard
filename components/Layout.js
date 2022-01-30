import Link from "next/link"
import Head from 'next/head';

const Layout = ({children, title="Crypto Price Dashboard"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href='/' passHref>
                    <a>
                        <h1 className="main-title">Crypto Price Checker</h1>
                    </a>
                </Link>
                
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;