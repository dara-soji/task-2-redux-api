import React from 'react'
import { useSelector } from 'react-redux';

const NationalStat = () => {
  const stats = useSelector((state) => state.nationCovidStat.stat);

  const {death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested } = stats

  
  return (
    <div class="ui statistics">
        <div class="statistic">
          <div class="value">
            {totalSamplesTested}
          </div>
          <div class="label">
            Total Samples Tested
          </div>
        </div>
        <div class="statistic">
          <div class="value">
          {totalConfirmedCases}
          </div>
          <div class="label">
          Total Confirmed Cases
          </div>
        </div>
        <div class="statistic">
          <div class="value">
           {totalActiveCases}
          </div>
          <div class="label">
          Total Active Cases
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            {discharged}
          </div>
          <div class="label">
          Discharged
          </div>
        </div>
        <div class="statistic">
          <div class="value">
            {death}
          </div>
          <div class="label">
          Death
          </div>
        </div>
      </div>
  )
}

export default NationalStat
