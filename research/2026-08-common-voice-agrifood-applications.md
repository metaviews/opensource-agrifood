# Common Voice and open language datasets in agrifood: verification scan (G-OSA-03)

Research date: 2026-08-03
Method: bounded verification pass targeting G-OSA-03 / Q-OSA-10 ("Where are Common Voice or other open language datasets being used in agricultural extension or farm systems?"). Seven query sets; sources read in full: Jones-Garcia 2022 (CIMMYT/Nottingham, CGIAR Digital Innovation Initiative), AgriGPT-Omni (arXiv 2512.10624), Kallaama (arXiv 2404.01991), Bhashini Kisan Divas page, FAIR Forward / GIZ project catalog entries (FarmerChat, Haki des Femmes, East African Common Voice expansion, SYSPIN), Ama KrushAI coverage (Samagra, Odisha DAFE), PaddyMitra (IRRI). Verification tools: FAIR Forward catalog status checks (checked 2026-08-02), GitHub/Hugging Face evidence for FarmerChat. Two records added (FarmerChat curated; Kallaama candidate), one record added for the language-DPI layer (Bhashini curated), Common Voice record updated.

## Why this cell

The register's G-OSA-03 tested whether an open language dataset is automatically an agricultural deployment: Common Voice was verified as a platform but "agrifood application not established." This pass asks the question with a denominator: where, concretely, is Common Voice — or any open language dataset — used in agriculture, with which languages, licences, and outcomes?

## Headline finding

**Common Voice itself has no verified farmer-facing deployment — but the gap resolves into three named shapes, and the wider open-language-data layer shows the strongest deployment evidence in the entire open-AI stack.** Shape 1: a verified research chain — Common Voice → XLS-R (436K hours, 128 languages, pre-trained on open corpora including Common Voice) → Farm Radio International farmer voice-message analysis (Jones-Garcia 2022, CIMMYT/CGIAR, Swahili and Hausa), plus Bengali Common Voice ASR research. Shape 2: Mozilla's own Common Voice Kiswahili program (2023-24) funded an agrifood-adjacent pilot — Haki des Femmes, a Kiswahili voice app for women's land rights in DRC (Gates/BMZ-financed, GIZ FAIR Forward-catalyzed). Shape 3 — the deployment layer — is where the evidence concentrates: India's Bhashini language DPI powers the PM-KISAN voice chatbot in 11 languages; Odisha's Ama KrushAI (launched Sept 2023) delivers advisory in audio in Odia; Digital Green's FarmerChat has delivered personalized farm advice to 1.6 million farmers across five countries with Apache-2.0 code and CC-BY-4.0 datasets; and Kallaama is an openly licensed agricultural speech dataset (125 hours in Wolof, Pulaar, Sereer, CC BY 4.0). The field itself states the residual gap: "the speech modality — arguably the most natural interface for farmers — remains severely under-resourced" (AgriGPT-Omni, Dec 2025), which is why the newest agricultural speech datasets are synthetic (492K synthetic vs 1.4K real samples). C-OSA-03's "unproven" verdict splits: the language layer is now partially evidenced at deployment scale; the broader open-AI-in-agrifood claim remains unproven.

## Currents

### Current 1 — The Common Voice research chain (verified, not deployed)

Common Voice feeds agricultural speech research through open pre-trained models: Jones-Garcia (2022, CIMMYT + University of Nottingham, CGIAR Digital Innovation Initiative, CC BY 4.0) used XLS-R — pre-trained on 436K hours across 128 languages "using data from across the largest open-source repositories, including Common Voice" — to automate translation and analysis of Farm Radio International's farmer voice messages in Swahili and Hausa, targeting digital extension. This is the closest verified Common Voice → agrifood link: research-grade, pilot-stage (2022, with proposed 2023-24 capacity-building field work), not a deployed farmer service. Bengali Common Voice datasets also appear in ag speech-recognition research (review literature, 2022).

### Current 2 — Mozilla's Common Voice Kiswahili program (program-funded pilots)

Mozilla's 2023-24 Common Voice Kiswahili program funded projects using Kiswahili voice technology for marginalized groups in Kenya, Tanzania, and DRC. Located pilot: Haki des Femmes (Core23Lab) — a voice-enabled Android app answering women's land-ownership queries in Kiswahili (Katanga and Lualaba provinces, DRC), developed from surveys of women's land-rights knowledge gaps; catalyzed by Mozilla Foundation and FAIR Forward (GIZ), financed by Gates Foundation and BMZ; licence "not specified". Agrifood-adjacent (land rights for rural women), pilot-stage, and the only located direct Common Voice program output touching agriculture.

### Current 3 — The deployment layer: open language data at scale in agrifood

The strongest evidence in the open-AI stack: (a) Bhashini (India's National Language Translation Mission, MeitY) — the language DPI; its PM-KISAN chatbot (Kisan e-Mitra) is voice-based and supports 11 regional languages, with voice-to-text for spoken farmer queries; (b) Ama KrushAI (Odisha DAFE + Samagra, launched 2023-09-20, helpline 155333) — AI chatbot sharing advisory in audio in Odia; PaddyMitra (IRRI, Odisha) — audio or text paddy queries with personalized recommendations; (c) FarmerChat (Digital Green) — deployed AI assistant, 1.6M farmers, five countries (India, Kenya, Nigeria, Ethiopia, Brazil), languages incl. English, Hindi, Telugu, Amharic, Kiswahili, Hausa, Portuguese, Spanish; open code (github.com/digitalgreenorg/DG_Open, Apache 2.0), open datasets (Hugging Face farmerchat-queries-large, CC-BY 4.0); agronomist-reviewed content pipeline. FarmerChat is the collection's first verified deployed open-data ag AI system with an explicit denominator.

### Current 4 — Open agricultural speech datasets (the supply side)

Kallaama (Gauthier, Ndiaye, Guissé; RAIL@LREC-COLING 2024; CC BY 4.0): a transcribed agricultural speech dataset — 125 hours of agriculture-focused recordings in each of Wolof, Pulaar, and Sereer (~10M native Senegalese speakers), textual corpora for Wolof/Pulaar, and a 49,132-entry Wolof pronunciation lexicon — explicitly built "for speech technologies developments, in the field of agriculture." SYSPIN (open TTS corpora for 9 Indian languages, CC-BY 4.0) and the East African Common Voice expansion project (Kiswahili → Kidaw'ida, Kalenjin, Dholuo; Apache 2.0) supply the open-language layer. The field's newest answer to ag speech scarcity is synthetic: AgriGPT-Omni (Zhejiang University, Dec 2025) built the "largest agricultural speech dataset to date" (492K synthetic + 1.4K real samples, six languages) via Qwen2.5-72B translation + CosyVoice synthesis — with all models/data/benchmarks promised for release.

## Working matrix

Layer x verified evidence x licence x deployment status. `●●` = multiple sources; `●` = single strong source; `○` = thin.

| Layer | Agrifood connection | Licence | Deployment |
|---|---|---|---|
| Common Voice (dataset) | research chain via XLS-R (FRI analysis); Bengali ASR research | CC0/CC-BY variants per release | research/pilot `●` |
| Common Voice Kiswahili program | Haki des Femmes (land rights, DRC) | not specified | pilot `●` |
| Bhashini language DPI | PM-KISAN voice chatbot, 11 languages | partial (ULCA, API) | deployed `●●` |
| Ama KrushAI / PaddyMitra (Odisha) | audio advisory in Odia | closed (state) | deployed `●` |
| FarmerChat (Digital Green) | farm advice, 1.6M farmers, 5 countries | Apache-2.0 code; CC-BY-4.0 data | deployed `●●` |
| Kallaama (Senegal) | agricultural speech dataset (Wolof/Pulaar/Sereer) | CC BY 4.0 | dataset `●` |
| SYSPIN / E.Africa CV expansion | TTS corpora (9 Indian langs); Kiswahili→indigenous langs | CC-BY 4.0; Apache 2.0 | dataset `●` |
| AgriGPT-Omni (Zhejiang) | agricultural speech dataset (synthetic-led, 6 langs) | promised release | research `●` |

## Contested claims

- **"Common Voice is used in agriculture" (occasional framing).** Asserting: the platform's scale (290 languages) and research citations. Contesting: no farmer-facing deployment of Common Voice itself was located; the verified uses are research chains and program-funded pilots. Open dataset ≠ ag deployment; the gap's original formulation holds. Last reviewed: 2026-08-03.
- **"Open-source AI is ready for agrifood deployment" (C-OSA-03).** Asserting: the deployment layer above (FarmerChat 1.6M farmers; Bhashini chatbot; Ama KrushAI). Contesting: these are state-DPI and NGO/company deployments built partly on open data — not open-model deployments; farmer-benefit outcomes unmeasured; the broader model/weights layer remains unproven (Sinong, AgriLLM asset-level unresolved). Verdict splits: language/advisory layer partially evidenced, full claim unproven. Last reviewed: 2026-08-03.
- **"FarmerChat is open source" (fair-forward catalog framing).** Asserting: Apache-2.0 codebase (DG_Open), CC-BY-4.0 datasets. Contesting: the deployed service is a managed platform with partnership tiers (community/custom); openness attaches to the foundation code and datasets, not the running service; 13 stars / 181 downloads indicate modest open-community uptake. Open foundation, managed deployment. Last reviewed: 2026-08-03.
- **"Synthetic speech data solves the agricultural speech gap" (AgriGPT-Omni framing).** Asserting: 492K synthetic samples vs 1.4K real; "largest agricultural speech dataset to date." Contesting: synthetic data does not capture farmer voices, dialects, or field conditions; the authors' own evaluation used real-world recordings for validation; release promised, not verified. Last reviewed: 2026-08-03.

## Gaps

- **G-CV-01 — Farmer-benefit outcomes for the deployed language layer.** Bhashini chatbot, Ama KrushAI, and FarmerChat all report usage; none has independently verified farmer-level benefit, consent, or grievance evidence. Maps to G-OSA-18 (farmer agency) at the language layer. Last searched: 2026-08-03.
- **G-CV-02 — Common Voice agrifood deployments outside the research/pilot shapes.** None located in this pass (English-language searches; the Kiswahili program is the only program-level link). Whether francophone or Lusophone Common Voice communities host ag deployments is unsearched (local-language follow-up). Last searched: 2026-08-03.
- **G-CV-03 — Kallaama downstream use.** The dataset is openly licensed and agriculture-specific; downstream ASR systems built on it, and any deployed extension services using them, are unverified. Last searched: 2026-08-03.
- **G-CV-04 — AgriGPT-Omni release verification.** "All models, data, benchmarks, and code will be released" (Dec 2025 paper); release state unverified as of 2026-08-03.

## Actors (critical lens)

- **CIMMYT / CGIAR Digital Innovation (Jones-Garcia)** — the verified Common Voice → agrifood research chain; the closest thing to an institutional use.
- **Digital Green (FarmerChat, FarmStack)** — the deployed open-data ag AI anchor; the collection's FarmStack record now has a sibling in the AI layer.
- **Bhashini / MeitY** — the language DPI underwriting the PM-KISAN voice chatbot; state-scale language infrastructure with partial openness.
- **Mozilla Foundation (Common Voice Kiswahili program)** — the program layer between dataset and application.
- **Counterweights, named to position:** the deployed state chatbots (closed, state-operated), AgriGPT-Omni's synthetic-data turn (research-led, release unverified), commercial voice providers absent from the open layer.

## Freshness model

- FarmerChat deployment and dataset state: `claim` — re-verify annually (13 stars/181 downloads as of 2026-08-02).
- Bhashini PM-KISAN chatbot language coverage: `fact` — re-verify annually.
- Kallaama dataset and licence: `fact` (2024, CC BY 4.0) — re-verify every 2 years.
- Jones-Garcia 2022 report: `framework` — re-verify every 2 years.
- Common Voice agrifood deployment absence: `gap` — actively sought, not found.

## What this scan does not yet do

- **No francophone/Lusophone Common Voice pass.** French- and Portuguese-language Common Voice agrifood uses were not searched (the Kiswahili program is the located program link).
- **No farmer-level outcome verification.** Usage counts for the deployed chatbots are operational metrics, not benefit evidence; no farmer interviews.
- **No Bhashini openness audit.** ULCA dataset terms, model licences, and API access were not read in full.
- **No Kallaama dataset inspection.** The 125-hour corpus itself was not downloaded or audited for content/licence consistency.
- **No AgriGPT-Omni release check beyond the paper's promise.**

## Sources

- Jones-Garcia, E. (2022). Speech Recognition, Machine Translation, and Corpus Analysis for Identifying Farmer Demands and Targeting Digital Extension. CIMMYT/Nottingham, CGIAR Digital Innovation, CC BY 4.0: https://cgspace.cgiar.org/bitstreams/ce6b4398-ac6b-46ae-9736-85ec6d0a23c5/download
- AgriGPT-Omni (2025): https://arxiv.org/abs/2512.10624
- Kallaama (2024): https://arxiv.org/abs/2404.01991
- Bhashini Kisan Divas: https://bhashini.gov.in/pravakta/farmers-day ; PM-KISAN Kisan e-Mitra: https://www.facebook.com/PMKISANofficial/posts/295821419871628/
- FAIR Forward / GIZ project catalog: FarmerChat https://fair-forward.github.io/datasets/projects/ui_28-farmerchat_delivering_personalized_farm_advice_to/ ; Haki des Femmes https://fair-forward.github.io/datasets/?project=ui_8-using_locallanguage_ai_advise_women_in ; East African CV expansion https://fair-forward.github.io/datasets/projects/ui_44-enabling_machine_translation_from_kiswahili_into/
- Ama KrushAI (Samagra, Odisha DAFE): https://samagragovernance.in/blog/2023-03-31-leveraging-artificial-intelligence-to-deliver-advisory-to-farmers/ ; PaddyMitra (IRRI): https://www.irri.org/news-and-events/news/paddymitra-chatbot-launched-empower-odishas-farmers-ai-driven-insights
- Common Voice: https://commonvoice.mozilla.org/
- Applications of Speech Recognition in the Agriculture Sector: A Review (2022): https://www.researchgate.net/publication/360282749

Not legal advice.
