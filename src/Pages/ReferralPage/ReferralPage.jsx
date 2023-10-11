import { useEffect } from "react"
import { ReferralBenefits } from "./ReferralBenefits/ReferralBenefits"
import { ReferralBonuses } from "./ReferralBonuses/ReferralBonuses"
import { ReferralTitle } from "./ReferralTitle/ReferralTitle"


export const ReferralPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='referral__background'>
      <ReferralTitle />
      <ReferralBenefits />
      <ReferralBonuses />
    </div>
  )
}
