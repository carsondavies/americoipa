import React from 'react'

const Landing = () => {


  return (
    <div className='landing'>

      <div className='aff-box'>
        <p className='aff-title'>AFFIRMATION STATEMENT</p>
        <p className='aff-statement'>
          Utilization Management (UM) decision making is based only on appropriateness of care and service and existence of coverage. Americo IPA does not specifically
          reward practitioners or other individuals for issuing denials of coverage or service
          care.
        {<br></br>}
          {<br></br>}
          Americo IPA does not offer financial incentives to UM decision makers that
          encourage decisions that result in underutilization.
          Our practitioners are ensured independence and impartiality in making referral
          decisions that will not influence hiring, compensation, termination, promotion or any other similar matters.
          </p>
      </div>

      <div className='claims-box'>
        <div className='claims'>
          <p className='claims-title'>Please submit claims to:</p>
          <p className='claims-address'>P.O. Box 11509, San Bernardino, CA 92423.</p>
        </div>
      </div>

      <div className='contact-box'>
        <p className='address'>12631 Imperial Highway, #A-106, Santa Fe Springs, CA  90670</p>
      </div>
    </div>
  )
}

export default Landing