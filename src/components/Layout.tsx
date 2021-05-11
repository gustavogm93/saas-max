/* eslint-disable prettier/prettier */
import React, { ReactElement, FC, ReactNode } from 'react'

import Container from 'rsuite/lib/Container'
import HeaderSection from 'rsuite/lib/Header'
import ContentSection from 'rsuite/lib/Content'
import FooterSection from 'rsuite/lib/Footer'

import Header from './Header'
import Footer from './Footer'
import Spinner from './commons/Spinner'

export interface LayoutProps {
    fetching?: boolean
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, fetching }): ReactElement => {
    const contentStyle = fetching
        ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        : {}

    return (
        <Container style={{ minHeight: '100vh' }}>
            <HeaderSection>
                <Header />
            </HeaderSection>
            <ContentSection style={contentStyle}>
                {fetching ? <Spinner size={48} /> : children}
            </ContentSection>
            <FooterSection>
                <Footer />
            </FooterSection>
        </Container>
    )
}

Layout.defaultProps = {
    fetching: false,
}

export default Layout
