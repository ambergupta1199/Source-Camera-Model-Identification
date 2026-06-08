# Privacy-Preserving Source Camera Model Identification (SCMI) under Non-IID Federated Learning

This repository contains the official implementation of a privacy-preserving digital forensics framework designed to identify smartphone camera models from image patches. The system combines a localized texture-based patching strategy, an efficient single-branch deep learning network, and a decentralized Federated Learning (FL) setup to handle highly unbalanced, real-world data distributions across clients.

---

## 🚀 Key Features

*   **Advanced Feature Extraction:** Uses a novel texture-based patching strategy to smartly isolate regions with device-specific sensor pattern noise (SPN), bypassing standard variance limitations.
*   **Forensic-Focused Architecture:** A single-branch neural network engineered with a Constrained Convolutional stem to block out distracting visual content, Wavelet downsampling to preserve microscopic noise, and Coordinate Attention to lock onto critical camera fingerprints.
*   **Non-IID Federated Learning:** Built to train securely across decentralized clients, maintaining high accuracy and stability even when data distributions are highly skewed or unbalanced.
*   **Interactive Evaluation Dashboard:** A web-based interface (React frontend + Python backend) that allows real-time inference, image selection, and visualization of camera classification scores.

---

## 🛠️ Repository Structure

```text
├── src/
│   ├── data/             # Texture-based patching and data distribution logic
│   ├── models/           # Single-branch network architecture (Constrained stem, Attention, Wavelets)
│   ├── federated/        # FL aggregation, non-IID data partitioning, and training loops
│   └── utils/            # Forensic processing tools and SPN analysis utils
├── dashboard/            # Interactive dashboard code
│   ├── frontend/         # React-based user interface
│   └── backend/          # Python API handling real-time model weights and inference
├── config/               # Hyperparameters for FL rounds and data distribution splits
├── README.md             # Project documentation
└── requirements.txt      # Dependencies
