import { createContext } from 'react'
import { PartnerProfile } from '~/models/PartnerProfile'
import { PartnerProfileHelper } from '~/helpers/PartnerProfile'

const PartnerProfileContext = createContext<PartnerProfile>(
    PartnerProfileHelper.getCleanContext()
)

export default PartnerProfileContext
