import styles from '../../styles/pages/Components/RegulatoryReach.module.css';



const RegulatoryReach = () => {
  const regulatorData = [
    { region: 'EMEA', regulators: ['FCA', 'PRA', 'BOE', 'DNB', 'BBK', 'EBA', 'ECB', 'CBI'] },
    { region: 'Americas', regulators: ['Fed', 'FINRA', 'FCAC'] },
    { region: 'APAC', regulators: ['MAS', 'FSA', 'ASIC', 'APRA', 'HKMA'] }
  ];

  return (
    <section className={styles.section} aria-labelledby="regulatory-reach-heading">
      <div className={styles.container}>
        <h2 id="regulatory-reach-heading" className={styles.heading}>
          Regulatory Reach & Impact
        </h2>

        <div className={styles.statsGrid}>
          {/* Jurisdictions */}
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statIcon}>🌍</span>
              <h3>Jurisdictions Covered</h3>
            </div>
            <div className={styles.regionProgress}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '100%' }}></div>
              </div>
              <ul className={styles.regionList}>
                <li>US</li>
                <li>EMEA</li>
                <li>APAC</li>
              </ul>
            </div>
          </div>

          {/* Reports Delivered */}
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <span className={styles.statIcon}>📈</span>
              <h3>Reports Delivered</h3>
            </div>
            <div className={styles.reportStats}>
              <p className={styles.bigNumber}>3100+</p>
              <p className={styles.subText}>across <strong>100+</strong> report types</p>
            </div>
          </div>
        </div>

        {/* Regulators by Region */}
        <div className={styles.regulatorSection}>
          <h3 className={styles.sectionTitle}>Regulators Served by Region</h3>
          <div className={styles.regionTabs}>
            {regulatorData.map((region, index) => (
              <div key={index} className={styles.regionBlock}>
                <h4 className={styles.regionName}>{region.region}</h4>
                <div className={styles.regulatorBadges}>
                  {region.regulators.map((regulator, i) => (
                    <span key={i} className={styles.badge}>{regulator}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Reports */}
        <div className={styles.reportsSection}>
          <h3 className={styles.sectionTitle}>Key Reports Generated</h3>
          <div className={styles.reportPills}>
            {['CoRep', 'FinRep', 'AnaCredit', 'MREL TLAC', 'STDF', 'RUBA', 'TIC-B', 'TIC-D'].map((report, i) => (
              <span key={i} className={styles.pill}>{report}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryReach;