import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { exportProfileToPDF } from '~/actions/pdf'

const Container = styled.div`
    width: 176px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #cbd0e1;
    box-sizing: border-box;
    border-radius: 4px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    justify-content: center;
    align-items: center;
`

const ButtonIcon = styled.img`
    height: 16px;
    flex: none;
    order: 1;
    align-self: center;
    margin: 8px 0px;
`
const ButtonText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;

    /* Primary */

    color: #255ae3;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: center;
    margin: 8px 0px;
    margin-right: 8px;
`

export const ProfileExportButton = (): ReactElement => {
    return (
        <Container>
            <Content>
                <ButtonText onClick={exportProfileToPDF}>
                    Export to PDF
                </ButtonText>
                <ButtonIcon src="/images/download.svg" />
            </Content>
        </Container>
    )
}
