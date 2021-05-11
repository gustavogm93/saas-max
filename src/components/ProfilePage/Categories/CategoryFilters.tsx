import React, { FC, ReactElement, useContext } from 'react'
import styled from 'styled-components'

import PartnerProfileContext from '~/contexts/PartnerProfile'

import { ButtonCategory } from './CategoryButton'

const Container = styled.div`
    display: flex;
`

export const CategoryFilters: FC = (): ReactElement => {
    const { termsCategories } = useContext(PartnerProfileContext)

    return (
        <Container>
            {termsCategories.map((category, index) => (
                <ButtonCategory
                    key={index}
                    text={category.key}
                    active={false}
                />
            ))}
        </Container>
    )
}
