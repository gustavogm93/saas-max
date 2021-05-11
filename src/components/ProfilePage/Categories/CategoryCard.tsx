import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { CategoryCardRow } from './CategoryCardRow'

const Container = styled.div``

const Header = styled.div`
    max-width: 540px;
    width: 100%;
    height: 92px;
    border: 1.5px solid #f1f1f4;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: right;
    border-bottom: none;
    margin-right: 80px;
    margin-top: 5px;
`

const Content = styled.div`
    margin-bottom: 15px;
    max-width: 540px;
    width: 100%;
    height: 250px;
    border: 1.5px solid #f1f1f4;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: left;
    margin-right: 30px;
    overflow: auto;
    ::-webkit-scrollbar {
        background: #edf0f7;
        border-radius: 4px;
        transform: rotate(90deg);
        width: 7px;
        height: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background: #cbd0e1;
        border-radius: 4px;
        transform: rotate(90deg);
        width: 7px;
        height: 1px;
    }
`

const CategoryName = styled.div`
    height: 32px;
    margin-left: 15px;
    margin-top: 15px;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    color: #403e59;
    font-weight: bold;
`

const TermCountSummary = styled.div`
    margin-top: 22px;
    margin-right: 20px;
    margin-bottom: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #403e59;
    opacity: 0.5;
`
const TermLabel = styled.div`
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    color: #403e59;
    opacity: 0.4;
    margin-left: 40px;
    margin-top: -0.5px;
`
const CountLabel = styled.div`
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    color: #403e59;
    opacity: 0.4;
    margin-top: -0.5px;
    margin-left: 425px;
`

export const CategoryCard: FC = (): ReactElement => {
    type termProps = {
        name: string
        timeMentioned: number
        selected: boolean
    }

    const terms: termProps[] = [
        { name: 'Consulting firm', timeMentioned: 100, selected: true },
        {
            name: 'Referral partner / affiliate',
            timeMentioned: 15,
            selected: true,
        },
        {
            name: 'Application service provider',
            timeMentioned: 6,
            selected: false,
        },
        {
            name: 'Merchant services provider',
            timeMentioned: 5,
            selected: false,
        },
        {
            name: 'Search engine optimization consultant',
            timeMentioned: 3,
            selected: false,
        },
        { name: 'Consulting firm', timeMentioned: 100, selected: false },
        {
            name: 'Referral partner / affiliate',
            timeMentioned: 15,
            selected: false,
        },
        {
            name: 'Application service provider',
            timeMentioned: 6,
            selected: false,
        },
        {
            name: 'Merchant services provider',
            timeMentioned: 5,
            selected: false,
        },
        {
            name: 'Search engine optimization consultant',
            timeMentioned: 3,
            selected: false,
        },
    ]

    return (
        <Container>
            <Header>
                <CategoryName>Partner Company Types</CategoryName>
                <TermCountSummary> 77 Terms • 22 Unique</TermCountSummary>
                <TermLabel>Term</TermLabel>
                <CountLabel>Times Mentioned</CountLabel>
            </Header>

            <Content>
                {terms.map((term, index) => (
                    <CategoryCardRow
                        key={index}
                        name={term.name}
                        timeMentioned={term.timeMentioned}
                        termFound={term.selected}
                    />
                ))}
            </Content>
        </Container>
    )
}
