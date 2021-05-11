export interface Term {
    term: string
    searched?: boolean
    count: number
}

export interface Address {
    street: string
    state: string
    country: string
}

interface TopTerm {
    term: string
}

export interface Summary {
    website: string
    domain: string
    companyName: string
    address: Address
    topTerms: TopTerm[]
    analyzedPages: number
    lastUpdateDate: Date
    saasmaxId: string
}

export interface CategoryScore {
    key: string
    score: number
}

export interface Scores {
    overallMatchScore: number
    scoreByCategory: CategoryScore[]
}

export interface TermCategory {
    key: string
    uniqueTerms: number
    totalTerms: number
    terms: Term[]
}

export interface PartnerProfile {
    summary: Summary
    scores: Scores
    termsCategories: TermCategory[]
}
