import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/Table.module.css';

const Table = () => {
  const headers = [
    'Feature',
    'Amlgo Gen-AI Bot',
    'Traditional RAG Systems',
    'Cloud-based AI APIs',
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>Accuracy & Comparison Matrix</h2>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label={headers[0]}>Processing Speed</td>
              <td data-label={headers[1]}>Fast</td>
              <td data-label={headers[2]}>Moderate</td>
              <td data-label={headers[3]}>Variable (depends on API)</td>
            </tr>
            <tr>
              <td data-label={headers[0]}>Data Security</td>
              <td data-label={headers[1]}>On-premise option</td>
              <td data-label={headers[2]}>Limited</td>
              <td data-label={headers[3]}>Data sent to cloud</td>
            </tr>
            <tr>
              <td data-label={headers[0]}>Customization</td>
              <td data-label={headers[1]}>Highly customizable</td>
              <td data-label={headers[2]}>Somewhat</td>
              <td data-label={headers[3]}>Limited customization</td>
            </tr>
            <tr>
              <td data-label={headers[0]}>LLM Hosting</td>
              <td data-label={headers[1]}>Local & API options</td>
              <td data-label={headers[2]}>Mostly API</td>
              <td data-label={headers[3]}>API-based</td>
            </tr>
            <tr>
              <td data-label={headers[0]}>Cost</td>
              <td data-label={headers[1]}>One-time infra cost</td>
              <td data-label={headers[2]}>Moderate</td>
              <td data-label={headers[3]}>Recurring API costs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;