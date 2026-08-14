# AgriMa & AgriAgent (后稷 / 稷丰)

- Status: `candidate`
- Region / reach: China (Shanxi / national agricultural research universities)
- Project: https://github.com/zhiweihu1103/AgriMa / https://github.com/zhiweihu1103/AgriAgent
- Live docs: https://github.com/zhiweihu1103/AgriMa
- Field-guide context: addresses the open-weight agricultural domain LLM and multimodal vision-language AI layer in China
- Last checked: 2026-08-14

## Problem addressed

General-purpose large language models lack specialized Chinese agronomic knowledge (crop diseases, pest diagnostics, fertilizer recommendations, national seed standards). Agricultural research institutes require specialized domain models to power automated agricultural advisory, multimodal crop disease recognition, and decision support.

## Open layer

Open-weight model releases on GitHub and Hugging Face:
- `AgriMa` (后稷): Domain-tuned LLM (based on Baichuan/Llama) fine-tuned on Chinese agronomic Q&A and technical literature.
- `AgriAgent` (稷丰): Multimodal agricultural agent (based on MiniCPM-Llama3-V 2.5) for foliar disease image recognition and pest diagnostics.

## What is actually open

- Code & Weights: Repositories `zhiweihu1103/AgriMa` (180 stars) and `zhiweihu1103/AgriAgent` (124 stars). Inference scripts, prompt templates, and LoRA/fine-tuned checkpoint weights.
- Note on Licensing Formality: Explicit SPDX license file is absent (`license: null`), representing standard academic open-weight distribution conventions in China where code and weights are public, but training corpora remain closed.

## Governance and control

Developed by Houji Laboratory of Shanxi Province, Shanxi Agricultural University, and Shanxi University (Dr. Zhiwei Hu and research group). Academic lab governance.

## Evidence of use

- Benchmark evaluations in Chinese computational linguistics (CCL 2024/2026 agricultural evaluation tasks).
- Used in university research pilots for automated crop health monitoring, multi-source agronomic question answering, and agricultural advisory extension.

## Maintenance and funding

Funded via provincial science and technology grants (Shanxi Province Key R&D Programs) and university research funding.

## Why it belongs

AgriMa and AgriAgent represent the leading academic open-weight agricultural AI current in China alongside CAAS's `Sinong`. They highlight the structural convention of Chinese agricultural AI: **open inference weights for scientific evaluation paired with closed training datasets and informal licensing.**

## What it does not demonstrate

Does not include open-licensed training datasets, verifiable data provenance, or commercial open-source licensing.

## Sources and verification

- AgriMa GitHub: https://github.com/zhiweihu1103/AgriMa (verified 2026-08-14)
- AgriAgent GitHub: https://github.com/zhiweihu1103/AgriAgent (verified 2026-08-14)
- Evaluation Tasks - CCL 2026: http://cips-cl.org/static/CCL2026/en/cclEval/taskEvaluation/index.html
- Verification pass: research/2026-08-china-open-agrifood-ecosystem-scan.md
- Last checked: 2026-08-14

Not legal advice.
