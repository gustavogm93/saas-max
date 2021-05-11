import { AxiosResponse } from 'axios'

import { PartnerProfile } from '~/models/PartnerProfile'
import { Session } from '~/models/Session'

type MockProfile = Promise<Partial<AxiosResponse<PartnerProfile>>>

export function useSession(): Session {
    return {
        portal: {
            name: 'Master',
        },
    }
}

export function getMockPartnerProfile(): MockProfile {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: {
                    summary: {
                        website: 'http://www.byzantiumllc.com',
                        domain: 'byzantiumllc.com',
                        companyName: 'Byzantium LLC',
                        address: {
                            street: '',
                            state: '',
                            country: '',
                        },
                        topTerms: [
                            { term: 'Search engine optimization consultant' },
                            { term: 'Document management' },
                            { term: 'Social media sector' },
                            { term: 'Accounting industry' },
                            { term: 'Certified security sentinel ' },
                        ],
                        analyzedPages: 72,
                        lastUpdateDate: new Date(),
                        saasmaxId: '200320_002647_1584718947298',
                    },
                    scores: {
                        overallMatchScore: 78,
                        scoreByCategory: [
                            {
                                key: 'PARTNER_COMPANY_TYPE',
                                score: 100,
                            },
                            {
                                key: 'SOLUTIONS_AND_SERVICES',
                                score: 100,
                            },
                            {
                                key: 'PRODUCT_TYPE',
                                score: 78,
                            },
                        ],
                    },
                    termsCategories: [
                        {
                            key: 'PARTNER_COMPANY_TYPE',
                            uniqueTerms: 22,
                            totalTerms: 77,
                            terms: [
                                {
                                    term: 'Consulting firm',
                                    searched: true,
                                    count: 100,
                                },
                                {
                                    term: 'Referral partner / affiliate',
                                    searched: true,
                                    count: 15,
                                },
                                {
                                    term: 'Application service provider',
                                    count: 6,
                                },
                            ],
                        },
                        {
                            key: 'SOLUTIONS_AND_SERVICES',
                            uniqueTerms: 91,
                            totalTerms: 1624,
                            terms: [
                                {
                                    term: 'Consulting firm',
                                    searched: true,
                                    count: 100,
                                },
                                {
                                    term: 'Referral partner / affiliate',
                                    searched: true,
                                    count: 15,
                                },
                                {
                                    term: 'Application service provider',
                                    count: 6,
                                },
                            ],
                        },
                        {
                            key: 'PRODUCT_TYPE',
                            uniqueTerms: 14,
                            totalTerms: 806,
                            terms: [
                                {
                                    term: 'Consulting firm',
                                    searched: true,
                                    count: 100,
                                },
                                {
                                    term: 'Referral partner / affiliate',
                                    searched: true,
                                    count: 15,
                                },
                                {
                                    term: 'Application service provider',
                                    count: 6,
                                },
                            ],
                        },
                    ],
                },
            })
        }, 1500)
    })
}
