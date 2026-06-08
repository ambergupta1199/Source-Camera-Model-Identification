# Privacy-Preserving Source Camera Model Identification (SCMI) under Non-IID Federated Learning

## 📖 Theoretical Overview

### What is Source Camera Model Identification (SCMI)?
Source Camera Model Identification (SCMI) is a foundational task in digital image forensics. Every smartphone camera sensor introduces unique, imperceptible hardware artifacts during the image acquisition process—most notably Sensor Pattern Noise (SPN) caused by Photo-Response Non-Uniformity (PRNU). SCMI aims to isolate these microscopic, high-frequency digital fingerprints from an image to determine the exact make and model of the smartphone that captured it, independent of the visible image content.

### The Challenge of Non-IID Data in Forensic FL
In real-world forensic deployment, aggregating user photos into a centralized server creates massive privacy concerns. Federated Learning (FL) solves this by keeping data localized on decentralized client devices and only sharing model weights. However, real-world user data is naturally **Non-IID (Non-Independent and Identically Distributed)**:
* **Label Skew:** Different users own completely different smartphone models, creating extreme data imbalances across clients.
* **Quantity Skew:** Some clients may only have a handful of images available for local training, while others have large repositories.

Standard deep learning frameworks quickly degrade under severe Non-IID conditions, causing model updates to diverge during global aggregation. This framework is specifically engineered to maintain structural stability and high forensic classification accuracy under these highly skewed decentralized distributions.

---

## 💡 My Novel Contributions

This project introduces a mathematically rigorous, single-branch pipeline optimized for both forensic sensitivity and federated stability, solving the core limitations of existing architectures.

### 1. Local Texture Descriptor (LTD) Patching Strategy
Traditional SCMI frameworks rely on standard Laplacian-based variance patching to find image regions suitable for noise extraction. However, variance alone fails to isolate true hardware imperfections from high-frequency scene details. 
* **The Novelty:** We introduce the **LTD Strategy**, which evaluates and selects image patches based on a specialized texture score rather than simple variance. This intelligently isolates optimal, feature-rich regions where device-specific sensor pattern noise (SPN) is most prominent, ensuring maximum signal-to-noise ratio even when analyzing fewer patches.

### 2. Streamlined Single-Branch Architecture
To efficiently capture and preserve fragile high-frequency noise without the computational overhead of dual-branch models, our core network leverages three specialized components:
* **Constrained Convolutional Stem:** Effectively suppresses the distracting semantic visual content (the actual picture objects) right at the input layer, forcing the network to look exclusively at residual noise.
* **Wavelet Downsampling:** Instead of standard pooling operations that discard vital high-frequency details, we employ Wavelet transformations to compress spatial dimensions while preserving microscopic camera noise characteristics.
* **Coordinate Attention (CoordAtt):** Maximizes features by encoding horizontal and vertical spatial coordinates simultaneously, locking onto exact positional patterns left by camera sensors.

### 3. Federated Stability and Normalization
Standard normalization layers like Group Normalization (GN) combined with SiLU activation functions struggle with stability when client datasets are highly unbalanced. 
* **The Novelty:** Through extensive ablation testing, this framework utilizes a strictly optimized **Batch Normalization (BN) and ReLU** configuration. This selection provides vastly superior stability and convergence across non-IID federated learning updates compared to GN+SiLU or completely non-normalized baselines.

---

## 🔮 Future Research Directions

To further advance the boundaries of digital image forensics, this framework is designed to pave the way for several key areas of exploration:
* **Open-Set & Continual Forensics:** Utilizing Few-Shot Learning, Zero-Shot Learning, and Continual Learning frameworks to adapt rapidly to newly released smartphone models without degrading performance on older devices.
* **Multimodal Core Analysis:** Exploring the integration of Large Language Models (LLMs) and vision-language architectures to directly evaluate image streams for device classification.
* **Explainability:** Enhancing deep learning interpretability to visually map out and understand exactly which microscopic features the network relies on when predicting a smartphone model.
* **Anti-Spoofing & Resilience:** Developing robust detection methods against cross-device camera spoofing (e.g., modifying an image from Model A to mimic the digital fingerprint of Model B), alongside evaluating model resilience against heavy social media compression algorithms and adversarial attacks.
