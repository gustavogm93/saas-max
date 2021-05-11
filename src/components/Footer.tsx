import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Divfooter = styled.div`
    background: #403e59;
    height: 222px;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: left;
`
const ParagraphFooter = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    width: 1170px;
    height: 60px;
    color: #ffffff;
    opacity: 0.5;
    margin-bottom: 40px;
`

const CopyrigthFooter = styled.p`
    width: 316px;
    height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    position: absolute;
    margin-top: 40px;
    margin-left: -430px;
`
const Footer = (): ReactElement => {
    return (
        <>
            <Divfooter>
                <ParagraphFooter>
                    The data displayed in this record is sourced through the
                    automated crawling of each URL respective pubic facing
                    website. Occasionally, supplemental data is also obtained
                    from mentions on other publicly available websites and
                    directories. SaaSMAX makes no representation or warranty as
                    to the accuracy, completeness or current status of the data
                    identified, as SaaSMAX makes no independent investigation of
                    the content or ownership of the websites or directories
                    sourced.
                </ParagraphFooter>
                <CopyrigthFooter>
                    © 2020 SaaSMAX Corp. All rights reserved.
                </CopyrigthFooter>
            </Divfooter>
        </>
    )
}

export default Footer
