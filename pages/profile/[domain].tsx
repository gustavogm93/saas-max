import React, { Component, ReactElement } from 'react'
import { NextPageContext } from 'next'

import ProfileService from '~/services/profile'
import PartnerProfileContext from '~/contexts/PartnerProfile'
import { PartnerProfileHelper } from '~/helpers/PartnerProfile'

import Layout from '~/components/Layout'
import PartnerProfile from '~/components/ProfilePage/PartnerProfile'
import { PartnerProfile as Profile } from '~/models/PartnerProfile'

export interface ProfilePageProps {
    domain: string | string[]
    searchId: string | string[]
}

export interface ProfilePageState {
    fetching: boolean
    // error: boolean
    profile: Profile
}

class ProfilePage extends Component<ProfilePageProps, ProfilePageState> {
    state = {
        fetching: true,
        // error: false,
        profile: PartnerProfileHelper.getCleanContext(),
    }

    async componentDidMount(): Promise<void> {
        const { domain, searchId } = this.props

        try {
            const profile = await ProfileService.get(domain, searchId)

            this.setState({
                fetching: false,
                profile,
            })
        } catch (err) {
            // this.setState({ error: true })
        }
    }

    render(): ReactElement {
        const { fetching, profile } = this.state

        const { Provider } = PartnerProfileContext

        return (
            <Layout fetching={fetching}>
                <Provider value={profile}>
                    <PartnerProfile />
                </Provider>
            </Layout>
        )
    }
}

export async function getServerSideProps(
    context: NextPageContext
): Promise<{ props: ProfilePageProps }> {
    const {
        query: { domain, searchId },
    } = context

    return {
        props: {
            domain,
            searchId: searchId || null,
        },
    }
}

export default ProfilePage
