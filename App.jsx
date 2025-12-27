import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDataset, setSelectedDataset] = useState('Forchheim');

  const datasets = ['Forchheim', 'Vision', 'Dresden', 'Socrates'];

  // Sample data - you can modify this based on actual results
  const tableData = [
    { method: 'CNN-Based Approach', pla: '94.5', ila: '92.3' },
    { method: 'ResNet-50 Fine-tuned', pla: '96.8', ila: '94.7' }
  ];

  return (
    <div className="app-container">
      <div className="background-animation"></div>

      <div className="content-wrapper">
        <header className="header">
          <div className="title-container">
            <h1 className="main-title">
              Source Camera Model Identification
            </h1>
            <div className="title-underline"></div>
          </div>
        </header>

        <div className="filter-section">
          <label htmlFor="dataset-select" className="filter-label">
            <span className="label-icon">📊</span>
            Select Dataset
          </label>
          <div className="select-wrapper">
            <select
              id="dataset-select"
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
              className="dataset-select"
            >
              {datasets.map((dataset) => (
                <option key={dataset} value={dataset}>
                  {dataset}
                </option>
              ))}
            </select>
            <div className="select-arrow">▼</div>
          </div>
        </div>

        <div className="table-container">
          <div className="dataset-badge">
            Dataset: <span className="badge-highlight">{selectedDataset}</span>
          </div>

          <div className="table-wrapper">
            <table className="results-table">
              <thead>
                <tr>
                  <th>
                    <div className="th-content">
                      <span className="th-icon">🔬</span>
                      Method
                    </div>
                  </th>
                  <th>
                    <div className="th-content">
                      <span className="th-icon">📈</span>
                      PLA (%)
                    </div>
                  </th>
                  <th>
                    <div className="th-content">
                      <span className="th-icon">📊</span>
                      ILA (%)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <td className="method-cell">{row.method}</td>
                    <td className="metric-cell">
                      <div className="metric-value">{row.pla}</div>
                      <div className="metric-bar" style={{ width: `${row.pla}%` }}></div>
                    </td>
                    <td className="metric-cell">
                      <div className="metric-value">{row.ila}</div>
                      <div className="metric-bar" style={{ width: `${row.ila}%` }}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
