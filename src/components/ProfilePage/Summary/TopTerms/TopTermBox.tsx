import React, { ReactElement } from 'react'
import styled from 'styled-components'

const TermWapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 6px 12px;

    background: #e4e6ed;
    border-radius: 4px;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
`
const TermText = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    /* Primary Typography */

    color: #403e59;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: center;
    margin: 10px 0px;
`

export interface Props {
    term: string
}

export const TopTermBox = ({ term }: Props): ReactElement => {
    return (
        <TermWapper>
            <TermText>{term}</TermText>
        </TermWapper>
    )
}
