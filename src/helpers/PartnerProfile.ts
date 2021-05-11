import {
    PartnerProfile,
    Summary,
    Scores,
    TermCategory,
    Address,
} from '~/models/PartnerProfile'

export class PartnerProfileHelper {
    static getCleanContext(): PartnerProfile {
        return {
            summary: PartnerProfileHelper.getCleanSummary(),
            scores: PartnerProfileHelper.getCleanScores(),
            termsCategories: PartnerProfileHelper.getCleanTermsCategories(),
        }
    }

    static getCleanSummary(): Summary {
        return {
            address: PartnerProfileHelper.getCleanAddress(),
            analyzedPages: 0,
            companyName: '',
            domain: '',
            lastUpdateDate: new Date(),
            saasmaxId: '',
            topTerms: [],
            website: '',
        }
    }

    static getCleanAddress(): Address {
        return {
            country: '',
            state: '',
            street: '',
        }
    }

    static getCleanScores(): Scores {
        return {
            overallMatchScore: 0,
            scoreByCategory: [],
        }
    }

    static getCleanTermsCategories(): TermCategory[] {
        return []
    }
}
