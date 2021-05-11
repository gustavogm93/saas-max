import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CategoryFilters } from './CategoryFilters'
import { CategoryCard } from './CategoryCard'

const Container = styled.div`
    padding: 40px 0px;
`
const CategoryCards = styled.div`
    margin-top: 24px;
    margin-bottom: 160px;
`

export const ProfileCategories = (): ReactElement => {
    return (
        <Container>
            <CategoryFilters />
            <CategoryCards>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </CategoryCards>
        </Container>
    )
}
