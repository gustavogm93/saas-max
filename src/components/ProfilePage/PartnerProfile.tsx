import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { ProfileActions } from './Actions/ProfileActions'
import { ProfileSummary } from './Summary/ProfileSummary'
import { ProfileCategories } from './Categories/ProfileCategories'

const Container = styled.div`
    padding: 12px 135px;
    text-align: center;
`

const PartnerProfile: FC = (): ReactElement => {
    return (
        <Container>
            <ProfileActions />
            <ProfileSummary />
            <ProfileCategories />
        </Container>
    )
}

export default PartnerProfile
