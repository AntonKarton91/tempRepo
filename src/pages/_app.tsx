import type { AppProps } from 'next/app'
import Head from 'next/head';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Deka-shop</title>
                <link rel="icon" href="/client/public/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Roboto:wght@100;300;700&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}