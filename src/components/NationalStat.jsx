import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const NationalStat = () => {
  const stats = useSelector((state) => state.nationCovidStat.stat);

      const {death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested } = stats
  

  return (
    <div className="ui statistics">
        <div className="statistic">
          <div className="value">
            {totalSamplesTested}
          </div>
          <div className="label">
            Total Samples Tested
          </div>
        </div>
        <div className="statistic">
          <div className="value">
          {totalConfirmedCases}
          </div>
          <div className="label">
          Total Confirmed Cases
          </div>
        </div>
        <div className="statistic">
          <div className="value">
           {totalActiveCases}
          </div>
          <div className="label">
          Total Active Cases
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            {discharged}
          </div>
          <div className="label">
          Discharged
          </div>
        </div>
        <div className="statistic">
          <div className="value">
            {death}
          </div>
          <div className="label">
          Death
          </div>
        </div>
      </div>
  )
}

export default NationalStat
