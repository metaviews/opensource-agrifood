# Sinong (神农, Shennong) — Agricultural Foundation Model

- Status: `curated`
- Region / reach: China (Nanjing Agricultural University); open weights distributed globally via ModelScope and GitHub
- Repository: https://github.com/njauzzx/Sinong
- Field-guide context: new discovery from the China ag digital infrastructure cycle, 2026-08-02

## Problem addressed

Sinong is described as China's first open-source, agriculture-specific large language model: a vertical "agricultural brain" trained on agricultural knowledge to support farmers, agronomists, breeders, veterinarians, and agricultural economists with domain-accurate reasoning rather than generic chatbot responses.

## Open layer

Open-weight foundation model for the agricultural domain, distributed for direct download and deployment, positioned as national agricultural AI infrastructure.

## What is actually open

- The model is released in two parameter scales, 8B and 32B, with the project README stating anyone can directly download and deploy them.
- Released on ModelScope and GitHub; repository github.com/njauzzx/Sinong had 181 stars and last push 2026-05-17 at verification (2026-08-02).
- No SPDX licence was detected on the GitHub repository via API on 2026-08-02; the "fully open-sourced" framing in press coverage exceeds what could be verified — licence terms and model-card terms on ModelScope require per-asset checks.
- Training data is not open: the corpus (reported as ~9,000 books, 240,000+ academic papers, ~20,000 policy documents and standards, plus sector web data) is proprietary to the university.

## Governance and control

Built by Nanjing Agricultural University, a state university. Framing in state media (People's Daily, Xinhua) positions the model as a national-strategic contribution to agricultural AI; the Stanford HAI analysis of China's open-weight AI ecosystem places such models in a broader state-adjacent open-weight movement. The model covers horticulture, crop production and breeding, plant protection, livestock and veterinary medicine, agricultural economics and management, natural resources, smart farming, and digital agricultural technologies.

## Evidence of use

- Primary: the GitHub repository (README_EN) documents the two parameter scales and deployment intent; Xinhua coverage (13 January 2026) and People's Daily describe the launch, 36 intelligent agents, and coverage of agricultural scenarios.
- EastFruit (January 2026) reports the training corpus composition and the open-sourcing on ModelScope/GitHub.
- AgriEval, a Chinese agricultural benchmark (AAAI 2026), provides evaluation infrastructure for such models.
- Deployment scale and actual farmer-facing use are unverified in this pass.

## Maintenance and funding

University-maintained; repository activity is recent (May 2026). Sustained maintenance and the funding model are not documented in the sources read.

## What this case demonstrates

Sinong is the strongest located example of a state-adjacent, open-weight agricultural foundation model — and the clearest Chinese case of the project's asset-by-asset openness discipline: open weights with proprietary training data and an undetected repository licence is a partial openness, not "fully open source". It parallels CGIAR/AgriLLM in the collection as a public-interest-agriculture-AI record with contested asset-level openness.

## What it does not demonstrate

- It does not establish that the model is fully open source; licence terms and training data are not open or not verified.
- Deployment scale and farmer-level outcomes are unverified.
- The "90% of agricultural scenarios" and 36-agent claims are launch framings.
- Data governance for the underlying corpus is not documented.

## Sources and verification

- Repository (activity and licence verified via GitHub API; README_EN): https://github.com/njauzzx/Sinong
- EastFruit (read in full): https://east-fruit.com/en/trending/china-launches-its-first-open-source-ai-model-for-agriculture-what-sinong-means-for-the-sector/
- Xinhua (via east-fruit link): https://english.news.cn/20260113/948f352becce4e0f98535c85552e845d/c.html
- AgriEval (AAAI 2026): https://ojs.aaai.org/index.php/AAAI/article/view/40716/44677
- Stanford HAI, "Beyond DeepSeek: China's Diverse Open-Weight AI Ecosystem": https://hai.stanford.edu/policy/beyond-deepseek-chinas-diverse-open-weight-ai-ecosystem-and-its-policy-implications
- Last checked: 2026-08-02

## Freshness

- Repository activity and licence: `fact` — re-verify annually; no SPDX licence detected as of research date.
- Model scales and corpus composition: `fact` — re-verify annually.
- Deployment and adoption: `claim` — unverified; seek evidence before use in an argument.

Not legal advice.
