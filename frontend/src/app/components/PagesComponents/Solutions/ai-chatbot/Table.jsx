import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/Table.module.css';


const Table = () => {
  return (
    <div className={styles.mainContainer}>
            <div className={styles.heading}>
                <h2>Accuracy & Comparison Matrix</h2>
            </div>

    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Amlgo Gen-AI Bot</th>
            <th>Traditional RAG Systems</th>
            <th>Cloud-based AI APIs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Processing Speed</td>
            <td>Fast</td>
            <td>Moderate</td>
            <td>Variable (depends on API)</td>
          </tr>
          <tr>
            <td>Data Security</td>
            <td>On-premise option</td>
            <td>Limited</td>
            <td>Data sent to cloud</td>
          </tr>
          <tr>
            <td>Customization</td>
            <td>Highly customizable</td>
            <td>Somewhat</td>
            <td>Limited customization</td>
          </tr>
          <tr>
            <td>LLM Hosting</td>
            <td>Local & API options</td>
            <td>Mostly API</td>
            <td>API-based</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>One-time infra cost</td>
            <td>Moderate</td>
            <td>Recurring API costs</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
