/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import App from 'next/app'
import Head from 'next/head'

import 'rsuite/lib/styles/index.less'

class MyApp extends App {
    componentDidMount(): void {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>GM: React Starter</title>
                    <style>
                        {`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
                        font-family: 'DM Sans', sans-serif;`}
                    </style>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp
