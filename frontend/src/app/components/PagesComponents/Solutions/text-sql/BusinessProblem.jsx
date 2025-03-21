import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/text-sql/BusinessProblem.module.css';

const BusinessProblem = () => {
  const data = [
    { impact: 'Improved Efficiency', details: 'Routine property searches and market analyses resolved in seconds, procurement analysis time reduced from 3 days to minutes.' },
    { impact: 'Higher Productivity', details: 'Agents focused on client interactions and deal closures, while managers gained immediate access to performance metrics.' },
    { impact: 'Cost Savings', details: 'Reduced reliance on data teams and eliminated inefficiencies in production processes.' },
    { impact: 'Data Democratization', details: 'Equal access to insights across teams, fostering collaboration and breaking down silos.' },
    { impact: 'Competitive Advantage', details: 'Real-time access to market data enabled faster responses to changing market conditions, leading to increased deal closures.' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Business Problem</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Impact Area</th>
              <th className={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={styles.tr}>
                <td className={styles.td}>{item.impact}</td>
                <td className={styles.td}>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BusinessProblem;
