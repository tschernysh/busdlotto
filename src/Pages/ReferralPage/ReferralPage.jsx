import { ReferralBenefits } from "./ReferralBenefits/ReferralBenefits"
import { ReferralBonuses } from "./ReferralBonuses/ReferralBonuses"
import { ReferralTitle } from "./ReferralTitle/ReferralTitle"


export const ReferralPage = () => {

  return (
    <div className='referral__background'>
      <ReferralTitle />
      <ReferralBenefits />
      <ReferralBonuses />
    </div>
  )
}
