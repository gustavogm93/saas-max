import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { OverallMatchScore } from './OverallMatchScore'
import { PartnerProfileSection } from './PartnerProfileSection'

const Container = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
`

export const ProfileSummary = (): ReactElement => {
    return (
        <Container>
            <PartnerProfileSection />
            <OverallMatchScore />
        </Container>
    )
}
