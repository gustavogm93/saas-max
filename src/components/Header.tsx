import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useSession } from '~/api/mockApi'
import { Session } from '~/models/Session'
import { logOut } from '~/actions/session'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 135px;
`

const Logo = styled.img`
    height: 24px;
`
const LogOutButton = styled.img`
    height: 24px;
`
const PortalName = styled.span`
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #403e59;
    margin-right: 20px;
`

const Header = (): ReactElement => {
    const session: Session = useSession()

    return (
        <>
            <Container>
                <Logo src="/images/partner-optimizer.svg" />
                <div>
                    <PortalName>{session.portal.name}</PortalName>
                    <LogOutButton onClick={logOut} src="/images/logout.svg" />
                </div>
            </Container>
        </>
    )
}

export default Header
