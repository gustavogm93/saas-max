import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px, 16px;
    height: 40px;
    border-radius: 4px;
    background: ${(props: buttonProps): string => {
        return props.active ? '#255AE3' : '#E4E6ED'
    }};
    margin-right: 16px;
`

const ButtonText = styled.p`
    height: 24px;
    fontstyle: normal;
    fontweight: normal;
    fontsize: 16px;
    color: ${(props: buttonProps): string =>
        props.active ? '#FFFFFF' : '#403E59'};
    margin: 10px;
`

type buttonCategoryProps = {
    text: string
    active: boolean
}

type buttonProps = {
    active: boolean
}

export const ButtonCategory = (
    buttonProps: buttonCategoryProps
): ReactElement => {
    return (
        <Button active={buttonProps.active}>
            <ButtonText active={buttonProps.active}>
                {buttonProps.text}
            </ButtonText>
        </Button>
    )
}
