# Open Source Agrifood: gap and research-question register

Research date: 2026-08-01

Updated 2026-08-02: G-OSA-13..15 added from the open-hardware/robotics/sensing discovery cycle (research/2026-08-open-hardware-robotics-sensing-scan.md); G-OSA-16 added from the machine-data-access/telematics cycle (research/2026-08-machine-data-access-telematics-scan.md); G-OSA-15 partially addressed and G-OSA-17 added from the Global South cycle (research/2026-08-global-south-open-hardware-scan.md); G-OSA-18 added from the DPI-for-agriculture cycle (research/2026-08-dpi-agriculture-scan.md); G-OSA-19 added from the China cycle (research/2026-08-china-ag-digital-infrastructure-scan.md); G-OSA-15 further addressed by the farm-level targeted pass (research/2026-08-global-south-farm-level-open-hardware-scan.md); G-OSA-20 added from the data-cooperatives cycle (research/2026-08-data-cooperatives-scan.md); G-OSA-21 added from the biological-commons cycle (research/2026-08-biological-commons-scan.md).

This register is independent of the Agrifood AI Field Guide’s gap IDs. The field guide remains a useful discovery source and comparative research base: https://agrifood.metaviews.ca/. The questions below are not settled negative findings. They identify where the first transfer found incomplete, dated, or contested evidence.

## Gap register

| ID | Gap | Why it matters | Evidence currently available | Next verification | Status |
|---|---|---|---|---|---|
| G-OSA-01 | OADA implementation and adoption scale | Open standards only reduce lock-in if vendors and services implement them | OADA Principles; public GitHub organisation; archived API-spec repository | Check compliant implementations, current maintainers, independent users, and farmer-facing deployments | Open |
| G-OSA-02 | Current JoinData membership and operating scale | Historical scale cannot be presented as current deployment | Current JoinData site plus 2023 case study | Request or locate current membership, participating parties, fees, governance, and geographic reach | Dated |
| G-OSA-03 | Common Voice agrifood applications | An open language dataset is not automatically an agricultural deployment | Common Voice platform verified; agrifood application not established | Locate agricultural extension, farm, or food-system applications and document language, licence, and outcomes | Open |
| G-OSA-04 | OSSI geographic and farmer adoption | Pledged-variety and partner counts do not establish farmer use or regional distribution | OSSI homepage provides current public counts | Verify current seed catalogue distribution, farmer adoption, breeding participation, and non-US deployments | Open |
| G-OSA-05 | GODAN current institutional and measurable impact | Current public framing is clear, but historical and impact claims vary | GODAN 2.0 site; public counters include placeholders | Trace current organisation, funding, active communities, datasets, and independently documented outcomes | Unclear |
| G-OSA-06 | ODK agrifood deployment inventory | The field guide names multiple cases, but each requires claim-level evidence | Field-guide deployment leads; ODK project site | Retrieve original papers and programme records for Nigeria, Sierra Leone, Tanzania, Ghana, and other cases | Open |
| G-OSA-07 | AgriLLM asset-level openness | Public-good or multilateral framing does not prove that every asset is open | Public Hugging Face model card; CGIAR announcement; FAO STI record | Verify Q&A dataset, benchmark, document corpus, code, model terms, underlying Llama terms, and deployment documentation | Partially resolved |
| G-OSA-08 | Open-project maintenance economics | Technical openness does not explain who pays for maintenance | Narrative evidence across OADA, GODAN, OSSI, ODK, and CGIAR | Build comparable funding, contributor, governance, and revenue/value-capture profiles | Open |
| G-OSA-09 | Farmer and Indigenous governance beyond named exemplars | A few strong cases can obscure weak representation elsewhere | JoinData, OADA, OSSI, CARE-related leads | Add farmer-led, Indigenous, women-led, and community-governed cases from multiple regions | Open |
| G-OSA-10 | Interoperability beyond standards declarations | Standards can exist without integration or exit rights in practice | OADA principles; JoinData permission model | Compare real data flows, API implementations, export rights, and switching experience | Open |
| G-OSA-11 | Open agrifood AI deployment evidence | General open-AI statistics cannot be converted into agrifood statistics | Field-guide warning; CGIAR and Common Voice leads | Build a sector-specific deployment evidence set with explicit denominator and geography | Open |
| G-OSA-12 | Licensing boundaries across layers | “Open source” is used across code, data, models, seeds, and governance with different legal consequences | OADA, Common Voice, OSSI, CGIAR leads | Record asset-specific licences and restrictions for every dossier entry | Open |
| G-OSA-13 | Open-hardware licensing and certification ambiguity | Only FarmBot commits to the OSHWA definition; none of the located hardware cases holds certification; CERN OHL absent | FarmBot policy page; per-asset licences in hardware records | Audit OSHWA/CERN OHL adoption across open agrifood hardware; record per-asset licences for every hardware record | Open (added 2026-08-02, hardware cycle) |
| G-OSA-14 | Open agrifood hardware replication evidence | Published designs are routinely treated as deployment evidence; independent builds are rarely documented | OSE anecdotal replication threads; FarmBot DIY support boundary; Vinduino single-farm | Establish an evidence standard distinguishing “designs published” from “machines built and used”; collect independent build reports | Open (added 2026-08-02, hardware cycle) |
| G-OSA-15 | Global South open agrifood hardware | Cost barriers to commercial equipment are highest where open designs would be cheapest entry points | Two 2026-08-02 passes: network/transfer layers (Think Oggún, Flying Labs, AfricaOSH, REGOSH); farm-level layer resolved into three shapes (Appropedia/OSAT design commons, NGO-published designs such as Farm Africa/NECPA solar dryer, affordable-but-closed commercial hardware) | Farmer-led, explicitly licensed open hardware with public design files remains confirmed absent (G-GS-05); local-language searches and field verification still outstanding | Partially addressed (2026-08-02 x2; the remaining gap is the farmer-led licensed layer) |
| G-OSA-16 | Machine-data ownership and portability | Open telematics and repair access do not establish who owns, can port, or can delete machine data; the July 2026 FTC/Deere order mandates repair access, not data openness | ISOBlue (data on farmer's device by design); AgIsoStack++ (open ISOBUS implementation); FTC/Deere stipulated order 2026-07-08 | Establish evidence on machine-data ownership, portability, and deletion rights across vendor and open systems; track settlement implementation | Open (added 2026-08-02, machine-data cycle) |
| G-OSA-17 | Ownership and licensing of manufacturing-transfer models | "Open system" manufacturing models may combine open framing with paid licensing; who owns designs after transfer is unresolved | Think Oggún primary source: 5-year technology licence fee after 100% in-country manufacture; no public design files located | Track Oggún distributors and licence terms; identify comparable open-manufacturing transfer models and their licence reality | Open (added 2026-08-02, Global South cycle) |
| G-OSA-18 | Farmer agency in DPI-for-agriculture | Consent architecture is documented across national stacks and data spaces, but consent in practice (grievance, opt-out, verification, farmer awareness) is unmeasured | AgriStack consent architecture vs Rethink Aadhaar/IFF 2022 review; CEADS governance analysis (farmers advisory-only); WAGRI membership model | Collect evidence on consent in practice, grievance mechanisms, and opt-out experience across AgriStack, WAGRI, CEADS, and DPG-based deployments | Open (added 2026-08-02, DPI cycle) |
| G-OSA-19 | China ag digital infrastructure implementation status | The Smart Agriculture Action Plan 2024-2028 names a national agricultural and rural big data platform, "one map", and "All Farmers Code", but public documentation of implementation is absent in the English-language record | USDA FAS report; DCZ summary; MARA policy framing | Track implementation of the national ag big data platform, All Farmers Code, and data classification standards; monitor Chinese-language sources | Open (added 2026-08-02, China cycle) |
| G-OSA-20 | Data cooperative durability beyond JoinData | Cooperative and consent-governance forms exist outside the Netherlands (NAPDC/GADC US, Agdatahub EU), but membership scale, usage, and farmer control outcomes are unverified; SAOS (Scotland) and GISC are leads | NAPDC governance-framework work (2025-2026); Agdatahub DGA registration; GiSC/GADC/ADC lineage (2014-2017) | Verify membership scale and control outcomes for NAPDC and Agdatahub; follow up SAOS/GISC; track FBN IPO data-handling question | Open (added 2026-08-02, data-cooperatives cycle) |
| G-OSA-21 | Open seed licence enforcement and uptake | The OSSL binds derivatives contractually and is the enforceable counterpart to the OSSI pledge, but no court-tested case, derivative-tracking record, or licensee count is public; Global South uptake of licence-based seed systems is absent from the record | OSSL registry (Sunviva tomato, Convento C wheat, etc.); Kotschi 2018 legal design; OSSI pledge contrast | Track OSSL enforcement and licensee scale; search for licence-based seed systems in the Global South; monitor whether derivatives remain open in practice | Open (added 2026-08-02, biological-commons cycle) |

## Research-question register

### Definitions and boundaries

- Q-OSA-01: What should count as open software, open data, open weights, open standards, digital public goods, commons governance, or biological commons in this project?
- Q-OSA-02: Which combinations of open layers are necessary for a system to be meaningfully farmer-controllable?
- Q-OSA-03: When should “open-source agrifood” be used, and when is “open agrifood infrastructure” the more accurate term?

### Infrastructure and interoperability

- Q-OSA-04: Which OADA-compatible implementations exist today, and what evidence demonstrates active use?
- Q-OSA-05: How do farmers actually export, revoke, transfer, or reuse data across systems using open standards?
- Q-OSA-06: What technical and institutional conditions make interoperability durable rather than merely declarative?

### Governance and sovereignty

- Q-OSA-07: Which data cooperatives outside the Netherlands have achieved durable farmer participation and control?
- Q-OSA-08: How are Indigenous data governance principles applied when agricultural data, genetic resources, or traditional knowledge enter open systems?
- Q-OSA-09: Who has authority to define consent, access, deletion, reuse, and benefit sharing in open agrifood projects?

### Language, access, and deployment

- Q-OSA-10: Where are Common Voice or other open language datasets being used in agricultural extension or farm systems?
- Q-OSA-11: Which open tools work under low-bandwidth, offline, feature-phone, or low-literacy conditions, and what evidence supports that claim?
- Q-OSA-12: How do local-language and voice-first systems handle accuracy, consent, dialect variation, and community ownership?

### Maintenance, funding, and value capture

- Q-OSA-13: Who pays for maintenance after grant-funded development ends?
- Q-OSA-14: Which open projects have durable contributor communities, institutional homes, or service revenues?
- Q-OSA-15: Where does value created by open agrifood infrastructure accumulate: farmers, communities, vendors, funders, institutions, or intermediaries?
- Q-OSA-16: Which cooperative, public, multilateral, or blended models have supported long-term maintenance?

### Evidence and scale

- Q-OSA-17: What is the minimum evidence required before describing a project as deployed, adopted, farmer-controlled, or impactful?
- Q-OSA-18: How can agrifood-specific open-source AI deployment be measured without borrowing global AI denominators?
- Q-OSA-19: Which regions and languages are systematically missing from current evidence?
- Q-OSA-20: How often do open agrifood projects become inactive, forked, absorbed, or commercially enclosed?

## Contested claims to track

### C-OSA-01: “Open standards solve vendor lock-in.”

- Supporting logic: open APIs and portable data can improve switching and competition.
- Counterpoint: standards without vendor implementation, governance, or usable export mechanisms may not change practical lock-in.
- Current status: unresolved; linked to G-OSA-01 and G-OSA-10.

### C-OSA-02: “Open data creates farmer benefit.”

- Supporting logic: access and reuse can improve services, research, and innovation.
- Counterpoint: data release can redistribute value toward platforms or intermediaries unless rights, consent, and benefit sharing are governed.
- Current status: unresolved; linked to JoinData, GODAN, CARE, and data-cooperative research.

### C-OSA-03: “Open-source AI is ready for agrifood deployment.”

- Supporting logic: open models and supporting infrastructure may be technically capable.
- Counterpoint: agrifood-specific deployment, data quality, local-language performance, safety, maintenance, and accountability remain insufficiently evidenced.
- Current status: unresolved; global AI figures must not be treated as agrifood evidence.

### C-OSA-04: “Open-source seed licensing is equivalent to open-source software licensing.”

- Supporting logic: both seek to preserve downstream freedoms.
- Counterpoint: biological reproduction, breeding, material transfer, patents, plant-variety rights, and traditional knowledge create distinct legal and ecological conditions.
- Current status: rejected as a simple equivalence; OSSI requires its own legal analysis.

## Verification protocol

For every question advanced into a published scan:

1. Identify the exact claim being tested.
2. Search the primary project or institution first.
3. Add independent or academic evidence where available.
4. Record the geographic scope and date of the evidence.
5. Separate project existence from deployment, adoption, impact, and sustainability.
6. Record uncertainty instead of filling gaps with field-guide synthesis.
7. Add the source and verification date to `research/sources/` practices.

## Immediate priority queue

1. G-OSA-01 / Q-OSA-04: OADA current implementation and adoption beyond repository activity.
2. G-OSA-07: AgriLLM dataset, benchmark, document corpus, code, and licence status.
3. G-OSA-06: original-source verification of ODK agrifood deployments.
4. G-OSA-03 / Q-OSA-10: concrete Common Voice agrifood applications.
5. G-OSA-08 / Q-OSA-13: maintenance and funding profiles across the dossier.

Not legal advice.
