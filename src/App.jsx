import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedDataset, setSelectedDataset] = useState("Forchheim");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FedAvg");

  const datasets = ["Forchheim", "Vision", "Dresden", "Socrates"];
  const algorithms = ["FedAvg", "FedNova_Prox"];

  // Dataset and Algorithm specific results - MODIFY THESE VALUES
  const datasetResults = {
    Forchheim: {
      FedAvg: [
        { method: "Bennabhakula et al. ", pla: "11.38", ila: "14.94" },
        { method: "Liu et al. ", pla: "50.09", ila: "66.03" },
        { method: "Chen et al. ", pla: "-", ila: "21.32" },
        { method: "Huan et al. ", pla: "23.53", ila: "39.21" },
        { method: "Sychandran et al. ", pla: "10.01", ila: "12.13" },
        { method: "Rana et al. ", pla: "64.15", ila: "78.03" },
        { method: "FedFFTNet et al.", pla: "56.53", ila: "67.56" },
      ],
      FedNova_Prox: [
        { method: "Bennabhakula et al. ", pla: "", ila: "" },
        { method: "Liu et al. ", pla: "40.64", ila: "59.51" },
        { method: "Chen et al. ", pla: "", ila: "22.86" },
        { method: "Huan et al. ", pla: "15.63", ila: "24.52" },
        { method: "Sychandran et al. ", pla: "8.47", ila: "8.30" },

        { method: "Rana et al. ", pla: "62.94", ila: "78.92" },

        { method: "FedFFTNet et al.", pla: "71.19", ila: "85.44" },
        { method: "Proposed", pla: "74.63", ila: "90.42" },
      ],
    },
    Vision: {
      FedAvg: [
        // { method: "CNN-Based Approach", pla: "91.2", ila: "88.6" },
        // { method: "ResNet-50 Fine-tuned", pla: "93.5", ila: "91.2" },
      ],
      FedNova_Prox: [
        { method: "Liu et al. ", pla: "44.78", ila: "62.83" },
        { method: "Chen et al. ", pla: "", ila: "66.85" },
        { method: "Huan et al. ", pla: "33.83", ila: "43.20" },
        { method: "Sychandran et al. ", pla: "13.89", ila: "13.95" },
        { method: "Rana et al. ", pla: "68.03", ila: "78.66" },

        { method: "FedFFTNet et al.", pla: "75.74", ila: "84.49" },
        { method: "Proposed", pla: "70.86", ila: "85.21" },
      ],
    },
    Dresden: {
      FedAvg: [
        // { method: "CNN-Based Approach", pla: "97.3", ila: "95.8" },
        // { method: "ResNet-50 Fine-tuned", pla: "98.6", ila: "97.4" },
      ],
      FedNova_Prox: [
        // { method: "CNN-Based Approach", pla: "96.1", ila: "94.5" },
        // { method: "ResNet-50 Fine-tuned", pla: "97.9", ila: "96.2" },
      ],
    },
    Socrates: {
      FedAvg: [
        // { method: "CNN-Based Approach", pla: "89.7", ila: "86.4" },
        // { method: "ResNet-50 Fine-tuned", pla: "92.1", ila: "89.8" },
      ],
      FedNova_Prox: [
        // { method: "CNN-Based Approach", pla: "88.3", ila: "85.1" },
        // { method: "ResNet-50 Fine-tuned", pla: "90.8", ila: "88.5" },
      ],
    },
  };

  // Get data for currently selected dataset and algorithm
  const tableData = datasetResults[selectedDataset][selectedAlgorithm];

  return (
    <div className="app-container">
      <div className="background-animation"></div>

      <div className="content-wrapper">
        <header className="header">
          <div className="title-container">
            <h1 className="main-title">Source Camera Model Identification</h1>
            <div className="title-underline"></div>
          </div>
        </header>

        <div className="filters-grid">
          {/* Dataset Filter */}
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

          {/* Aggregation Algorithm Filter */}
          <div className="filter-section">
            <label htmlFor="algorithm-select" className="filter-label">
              <span className="label-icon">⚙️</span>
              Aggregation Algorithm
            </label>
            <div className="select-wrapper">
              <select
                id="algorithm-select"
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                className="dataset-select"
              >
                {algorithms.map((algorithm) => (
                  <option key={algorithm} value={algorithm}>
                    {algorithm}
                  </option>
                ))}
              </select>
              <div className="select-arrow">▼</div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="badges-row">
            <div className="dataset-badge">
              Dataset:{" "}
              <span className="badge-highlight">{selectedDataset}</span>
            </div>
            <div className="algorithm-badge">
              Algorithm:{" "}
              <span className="badge-highlight">{selectedAlgorithm}</span>
            </div>
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
                      <div
                        className="metric-bar"
                        style={{ width: `${row.pla}%` }}
                      ></div>
                    </td>
                    <td className="metric-cell">
                      <div className="metric-value">{row.ila}</div>
                      <div
                        className="metric-bar"
                        style={{ width: `${row.ila}%` }}
                      ></div>
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
