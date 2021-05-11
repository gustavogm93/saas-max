import React, { ReactElement } from 'react'
import styled from 'styled-components'

const TermName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #403e59;
    font-weight: 599;
    margin-left: 20px;
    margin-top: 20px;
    display: inline-block;
`
const TermMentioned = styled.p`
    font-size: 16px;
    line-height: 24px;
    mix-blend-mode: multiply;
    margin-top: -23.5px;
    color: #403e59;
    font-weight: 599;
    text-align: right;
    margin-right: 20px;
`

const Logo = styled.img`
    mix-blend-mode: multiply;
    margin-auto: 0;
    display: inline-block;
    margin-top: -5px;
    margin-left: 8px;
    opacity: 0.5;
    border-radius: 1px;
    width: 20px;
    height: 20px;
    fill: #255ae3;
`

type termProps = {
    name: string
    timeMentioned: number
    termFound: boolean
}

export const CategoryCardRow = (termProps: termProps): ReactElement => {
    return (
        <>
            <TermName> {termProps.name} </TermName>
            {termProps.termFound ? <Logo src="/images/star.svg" /> : null}
            <TermMentioned> {termProps.timeMentioned} </TermMentioned>
        </>
    )
}
