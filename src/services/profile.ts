import { AxiosInstance } from 'axios'

import apiClient from '~/api/apiClient'
import { getMockPartnerProfile } from '~/api/mockApi'

import { PartnerProfile } from '~/models/PartnerProfile'

class ProfileService {
    private readonly api: AxiosInstance

    constructor() {
        this.api = apiClient
    }

    async get(
        domain: string | string[],
        searchId: string | string[]
    ): Promise<PartnerProfile> {
        // const res = await this.api.get<PartnerProfile>('/profile')
        const res = await getMockPartnerProfile()

        return res.data
    }
}

export default new ProfileService()
