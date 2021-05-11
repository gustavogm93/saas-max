import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SearchResultsLink } from './SearchResultsLink'
import { ProfileExportButton } from './ProfileExportButton'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileActions = (): ReactElement => {
    return (
        <Container>
            <SearchResultsLink />
            <ProfileExportButton />
        </Container>
    )
}
