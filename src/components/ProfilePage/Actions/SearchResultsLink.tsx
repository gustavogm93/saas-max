import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { goToSearhResults } from '~/actions/navigation'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Arrow = styled.img`
    height: 24px;
    margin-right: 12px;
`
const LinkText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #403e59;
`

export const SearchResultsLink = (): ReactElement => {
    return (
        <Container onClick={goToSearhResults}>
            <Arrow src="/images/arrow-left.svg" />
            <LinkText>Search Results</LinkText>
        </Container>
    )
}
