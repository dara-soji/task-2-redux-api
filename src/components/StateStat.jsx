import React from 'react'
import { useSelector } from 'react-redux';

const StateStat = () => {

    const stats = useSelector((state) => state.stateCovidStat.stat);

    
    const renderStat = stats.map((stat) => {
        const {death, state, discharged, casesOnAdmission, confirmedCases, _id } = stat
        return (
            <tr key={_id}>
        <td data-label="state">{state}</td>
        <td data-label="confirmedCases">{confirmedCases}</td>
        <td data-label="casesOnAdmission">{casesOnAdmission}</td>
        <td data-label="discharged">{discharged}</td>
        <td data-label="death">{death}</td>
      </tr>
    
        );
      });
    
  return (
    <table className="ui celled table">
    <thead>
        <tr>
            <th>State</th>
            <th>Total Confirmed Cases</th>
            <th>Cases On Admission</th>
            <th>Total Discharged</th>
            <th>death</th>
        </tr>
    </thead>
    <tbody>
      {renderStat}
    </tbody>
  </table>
  )
}

export default StateStat
