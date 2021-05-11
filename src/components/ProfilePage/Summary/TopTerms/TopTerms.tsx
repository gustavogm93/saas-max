import React, { ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { TopTermBox } from './TopTermBox'
import PartnerProfileContext from '~/contexts/PartnerProfile'

const Container = styled.div`
    margin-top: 25px;
`

const Title = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* Primary Typography */

    color: #403e59;
    opacity: 0.5;
    margin-bottom: 8px;
`

const BoxesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const TopTerms = (): ReactElement => {
    const { summary } = useContext(PartnerProfileContext)

    return (
        <Container>
            <Title>Top Terms</Title>
            <BoxesWrapper>
                {summary.topTerms.map(({ term }) => {
                    return <TopTermBox term={term} />
                })}
            </BoxesWrapper>
        </Container>
    )
}
