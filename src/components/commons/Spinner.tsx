import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Img = styled.img<SpinnerProps>`
    height: ${({ size }): number => size}px;
    width: ${({ size }): number => size}px;
    animation: ${rotate} ${(props): string => props.velocity} linear infinite;
`

export interface SpinnerProps {
    size?: number
    velocity?: string
}

const Spinner: FC<SpinnerProps> = ({ size, velocity }) => (
    <Img size={size} velocity={velocity} src="/images/spinner.svg" />
)

Spinner.defaultProps = {
    size: 20,
    velocity: '1500ms',
}

export default Spinner
