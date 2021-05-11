import React, { ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { formatDate } from '~/utils/dates'
import { TopTerms } from './TopTerms/TopTerms'
import PartnerProfileContext from '~/contexts/PartnerProfile'

const Container = styled.div`
    text-align: left;
    flex: 1 1 0px;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    letter-spacing: 0.12em;
    text-transform: uppercase;

    /* Primary Typography */

    color: #403e59;
    opacity: 0.5;
    margin-bottom: 8px;
`

const DomainLink = styled.a`
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height, or 125% */

    /* Primary */

    color: #255ae3;
`

const CompanyNameWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
`
const BuildingIcon = styled.img`
    width: 18px;
    height: 16px;
    margin-right: 10px;
    margin-left: 3px;
`
const CompanyName = styled.span`
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Primary Typography */

    color: #403e59;
`
const AddressWrapper = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
`
const LocationIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 7px;
`
const AddressInformation = styled.span`
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Primary Typography */

    color: #403e59;
    opacity: 0.5;
`
const AdditionalInformation = styled.div`
    margin-top: 24px;
`
const AdditionalText = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* Primary Typography */

    color: #403e59;
    opacity: 0.5;
    margin-bottom: 8px;
`

export const PartnerProfileSection = (): ReactElement => {
    const { summary } = useContext(PartnerProfileContext)

    return (
        <Container>
            <Title>PARTNER PROFILE</Title>
            <div>
                <DomainLink href={summary.website}>{summary.domain}</DomainLink>
            </div>
            <CompanyNameWrapper>
                <BuildingIcon src="/images/building.svg" />
                <CompanyName>{summary.companyName}</CompanyName>
            </CompanyNameWrapper>
            <AddressWrapper>
                <LocationIcon src="/images/location.svg" />
                <AddressInformation>N/A</AddressInformation>
            </AddressWrapper>
            <TopTerms />
            <AdditionalInformation>
                <AdditionalText>
                    {`${summary.analyzedPages} web page${
                        summary.analyzedPages > 1 ? 's' : ''
                    } analyzed`}
                </AdditionalText>
                <AdditionalText>
                    {`Last indexed on ${formatDate(summary.lastUpdateDate)}`}
                </AdditionalText>
                <AdditionalText>{`Search ID ${summary.saasmaxId}`}</AdditionalText>
            </AdditionalInformation>
        </Container>
    )
}
