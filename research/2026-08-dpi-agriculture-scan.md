# Digital public infrastructure (DPI) for agriculture: discovery scan

Research date: 2026-08-02
Method: fourth bounded discovery cycle. Scope: digital public infrastructure for agriculture — national stacks (India), government API platforms (Japan), supranational data spaces (EU), open-protocol networks (India/global), and DPG data-exchange building blocks. Six query sets plus follow-up verification; key sources read in full (MAFF WAGRI overview, EC policy brief on CEADS, FarmStack DPG profile, ONDC coverage); licences and repository activity verified via GitHub API where possible; one official site (agristack.gov.in) timed out and is flagged as an evidence gap.

## Why this cell

The collection covered farmer data governance (JoinData), interoperability standards (OADA), and open data coordination (GODAN), but not the largest-scale governance form of all: states and supranational bodies building digital public infrastructure for agriculture. This is where the project's central question — who controls the data, interfaces, maintenance, and benefit — plays out at national scale. It also begins to fill the Asia-Pacific row of the hardware-cycle matrices, though at the data layer rather than the hardware layer.

## Currents

### Current 1 — National DPI stacks
States building registry-and-consent infrastructure for agriculture. Anchor: India's AgriStack / Digital Agriculture Mission (Farmer Registry, Geo-referenced Village Maps, Crop Sown Registry; consent-manager architecture; budget reported at ₹2,817 crore). The most contested record in this cell: government consent framing vs civil-society and legal critiques (English-only privacy notice, weak consultation, data-blind sharing with private entities).

### Current 2 — Government API platforms
States building open-interface data platforms rather than registries. Anchor: WAGRI (Japan) — MAFF-constructed, NARO-operated since April 2019, ~60 APIs across weather, soil, farmland, market, livestock, and growth-prediction data, with private companies building farmer services on top. Openness at the interface layer; membership-based and partly charged.

### Current 3 — Supranational data spaces
Federated, standards-based data-sharing environments with multi-actor governance. Anchor: CEADS / AgriDataSpace (EU) — the €2M Digital Europe preparatory action concluded with a September 2024 policy brief and a deployment action from early 2025; companion instrument FSDN replaces FADN as the EU's farm-data statistical backbone. Governance analysis shows farmer organisations in advisory capacity while institutional actors hold the structural majority.

### Current 4 — Open-protocol networks
Open specifications that unbundle commerce (and other domains) from platforms. Anchor: ONDC / Beckn (India/global) — an open, interoperable, decentralised commerce protocol; agriculture activated June 2022 with NABARD to link Farmer Producer Organizations to markets. Openness at the protocol layer; network policy held by a not-for-profit operator; big platforms (Amazon, Flipkart, Meta) among adopters.

### Current 5 — DPG building blocks in the DPI-for-agriculture paradigm
Open-source components certified as Digital Public Goods and assembled into DPI. Anchor: FarmStack (Digital Green) — Apache-2.0 data-exchange protocol, DPGA-verified, used as DPI in Ethiopia, with KALRO (Kenya) listed as a user. The surrounding paradigm is documented in the World Bank/Co-Develop/Gates Foundation DPI-for-agriculture report and in Mazzucato's work on DPI and public value.

## Working matrix

Governance form x what is open x who governs x farmer agency. `●●` = well documented; `●` = single strong source; `○` = emerging/thin.

| Infrastructure | What is open | Who governs | Farmer agency | Evidence |
|---|---|---|---|---|
| AgriStack (India) | consent architecture; registry APIs (UFSI) | state + private services | contested — architecture vs practice | `●●` (contested) |
| WAGRI (Japan) | API interfaces (membership, partly charged) | state (MAFF/NARO) + private services | low — farmers are service users | `●` |
| CEADS/AgriDataSpace (EU) | standards, federated governance | supranational; farmers advisory | low-structural — advisory only | `●●` |
| ONDC/Beckn (India/global) | open protocol, open specs | non-profit operator + protocol | medium — FPOs can join; not owned | `●` |
| FarmStack (Digital Green) | Apache-2.0 data-exchange suite | nonprofit owner; consent-based | medium — protocol-level consent | `●` |

Blank cells: no located infrastructure opens farmer data ownership itself; none makes farmers structural governors; none documents cross-border interoperability between stacks.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| AgriStack / Digital Agriculture Mission | India | consent architecture, registries, UFSI API | state | curated |
| WAGRI | Japan | open API platform (membership, partly charged) | state (MAFF/NARO) | curated |
| CEADS / AgriDataSpace / FSDN | EU | data-space standards and federated governance | supranational, multi-actor | curated |
| ONDC / Beckn | India / global | open protocol and specifications | non-profit operator + protocol | curated |
| FarmStack | global | Apache-2.0 data-exchange DPG | nonprofit (Digital Green) | curated |

## Contested claims

- **AgriStack is consent-based (government framing) vs consent architecture does not produce farmer agency (civil society).** Asserting: Government of India (site, parliamentary answer). Contesting: Rethink Aadhaar/IFF 2022 legal review (English-only privacy notice, farmers unaware of data flows), IFF consultation comments (no farmer consultation), Oxford Human Rights Hub (informational privacy), sectoral critics (consent framing only holds if farmers can meaningfully withhold). Last reviewed: 2026-08-02.
- **ONDC democratises commerce.** Asserting: ONDC/Wikipedia/IBM framing (open network, unbundling, FPO market linkage). Contesting: inconsistent scale claims (7 million orders vs 3-crore-seller and 30-crore-shopper targets), seller maintenance fees, and adoption by the very walled gardens the network claims to counter (Amazon, Flipkart, Meta). Last reviewed: 2026-08-02.
- **CEADS puts farmers at the centre.** Asserting: EU data-space framing. Contesting: the 2026 governance analysis — farmers' organisations in advisory capacity, institutional actors holding the structural majority, no farmer-level revenue model. Last reviewed: 2026-08-02.
- **WAGRI "opens" agricultural data.** Asserting: platform framing ("data collaboration platform", open APIs). Contesting: membership-based access, charged public data, and state-structured governance — openness at the interface, not the data. Last reviewed: 2026-08-02.

## Gaps

- **G-DPI-01 — Farmer agency evidence in DPI-for-agriculture.** Consent in practice (grievance, opt-out, verification) is unmeasured across AgriStack, WAGRI, and CEADS; architecture is documented, outcomes are not. Registered as G-OSA-18.
- **G-DPI-02 — Current adoption scale for WAGRI.** Documentation concentrates on 2019-2022; current API counts, membership, and service uptake are unverified. Last searched: 2026-08-02.
- **G-DPI-03 — Cross-border interoperability between national stacks.** No evidence located on data or consent portability between AgriStack, WAGRI, CEADS, or DPG building blocks. Last searched: 2026-08-02.

## Actors (critical lens)

- **Rethink Aadhaar, Internet Freedom Foundation, Oxford Human Rights Hub** — the critical counterweight on AgriStack consent.
- **Digital Green / FarmStack** — nonprofit open-source data exchange with DPG verification.
- **Farmer Producer Organizations (via ONDC/NABARD)** — the farmer-side participants in open-protocol commerce.
- **Counterweights, named to position:** Government of India (state stack), MAFF/NARO (state platform), European Commission (supranational data space), ONDC (non-profit network operator).

## Freshness model

- Programme facts (WAGRI launch, AgriDataSpace budget, FarmStack DPG status): `fact` — re-verify annually.
- Governance structures: `framework` — re-verify every 2 years.
- Deployment and scale figures: `claim` — re-verify annually; treat as self-reported or target figures.
- Contested claims: `claim` — re-verify annually; the AgriStack and ONDC debates are live.

## What this scan does not yet do

- **No China coverage.** Chinese agricultural digital infrastructure (e.g., JD/cloud ag platforms, state data systems) was not searched; the Asia-Pacific row remains partially open.
- **No DPDP Act analysis.** The interaction of AgriStack with India's Digital Personal Data Protection Act was not assessed.
- **No cross-border interoperability evidence.** G-DPI-03 is named but unresolved.
- **No farmer-level fieldwork.** On-the-ground consent experience was not verified; the record relies on legal reviews and official framing.
- **No open-source audit of the stacks.** Whether AgriStack or ONDC's underlying software is open source (licences, repositories) is largely unverified.

## Sources

- AgriStack: https://agristack.gov.in/ (timeout 2026-08-02); Rethink Aadhaar/IFF review: https://www.lexology.com/library/detail.aspx?g=ee5d7956-66f2-4ae2-a947-ecea1dc430af ; IFF comments: https://forum.internetfreedom.in/t/a-thoroughly-bad-idea-our-comments-on-the-agristack-consultation-paper/2090.html ; OHRH: https://ohrh.law.ox.ac.uk/the-digitisation-of-agriculture-in-india-how-agristack-infringes-informational-privacy/
- WAGRI: MAFF overview: https://www.maff.go.jp/e/policies/tech_res/smaagri/attach/pdf/WAGRI.pdf ; FFTC: https://ap.fftc.org.tw/article/1634
- CEADS/AgriDataSpace: EC policy brief: https://digital-strategy.ec.europa.eu/en/news/policy-brief-rolling-out-common-european-agricultural-data-space ; https://ceads.eu/ ; https://agridataspace-csa.eu/ ; MDPI governance analysis: https://www.mdpi.com/2077-0472/16/10/1117 ; FSDN: https://agriculture.ec.europa.eu/data-and-analysis/farm-structures-and-economics/fsdn_en
- ONDC/Beckn: https://ondc.org/ ; https://en.wikipedia.org/wiki/Open_Network_for_Digital_Commerce ; IBM: https://www.ibm.com/think/topics/ondc
- FarmStack: DPG profile: https://www.digitalpublicgoods.net/r/farmstack ; repos: https://github.com/digitalgreenorg/farmstack-backend
- DPI paradigm: World Bank/Co-Develop report: https://connect4impact.worldbank.org/system/files/2026-02/DPI-Approach-for-Agriculture-Sector_Final_.pdf ; FAO e-Agriculture: https://www.fao.org/e-agriculture/news/transforming-agrifood-systems-digital-public-infrastructure-one-paths-sustainable-development

Not legal advice.
