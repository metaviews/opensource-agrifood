# Plant-scale processing sectoral scan: the open layer in abattoirs, mills, dairy plants, and cold storage (G-OSA-33)

Research date: 2026-09-02
Method: broad sectoral discovery cycle, run as five parallel sub-cells — (1) slaughter/meat, (2) milling/malting, (3) dairy processing, (4) cross-sector processing software and data standards, (5) Canadian sector frame. Each sub-cell ran multiple query sets with primary-source verification; licences are recorded from repository or terms documents; every candidate distinguishes published designs from deployed systems; honest absences are documented per sub-cell. This scan opens G-OSA-33; follow-up verification passes will cycle candidates into `examples/` records.

Register context: G-OSA-33 (candidate workstream A1). Prior corpus coverage was passing only: SAOS/ScotEID livestock traceability (G-OSA-20), ColdSnap/CoolBot small-scale cold rooms (G-OSA-27), grain chain beyond the farm gate (G-OSA-31). The grocery concept (2026-08) established the retail-end pattern this cell tests upstream: open at the data level, closed at the operation level — with the operation here being the plant, not the store.

## Why this cell is the strongest test of the openness thesis

Processing is where Canadian agrifood concentration is most extreme and where small producers lose access first. The prior corpus claim (Episode 36): two firms ≈ 95% of fed-cattle slaughter. Capital intensity is highest here, safety regulation is strictest here (federal/provincial inspection, HACCP), and — if the thesis "open layers thin as capital intensity rises" holds — the open layer should be thinnest here. The scan tests that prediction sector by sector.

---

## Sub-cell 1: Slaughter and meat processing

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| Island Grown Farmers Cooperative (IGFC) mobile slaughter unit, WA | First USDA-FSIS-inspected mobile red-meat slaughter unit in the US (2002, Lopez Community Land Trust + IGFC); on-farm slaughter plus cut-and-wrap; active (Dec 2024 service resumption reported; new facility) | Governance (farmer co-op) — replication happened by copying, not open licensing | N/A — design/operating model not published as open hardware | curated (governance case) |
| US mobile slaughter / co-op abattoir movement | Network of community-owned mobile units and small co-op plants (Community Agricultural Development Center WA; N. California rancher co-op 2020; Martha's Vineyard/Hawaii units 2026) | Governance; knowledge transfer via USDA extension docs and Niche Meat Processors Network (freely readable, not open-licensed) | N/A | candidate |
| GS1 EPCIS 2.0 / UN/CEFACT animal traceability standards | Open (royalty-free) data standards for event-based traceability; UN/CEFACT animal traceability linkage; used in meat pilots (Wholechain cattle framework) | Data standard | GS1 public licensing terms (free to implement); licence text not independently read | curated (standard) |
| OpenEPCIS (epcis-repository-ce) | Open-source GS1-conformant EPCIS 2.0 event repository; used in meat/cattle traceability pilots | Software + standard implementation | Apache-2.0 (verified from repo badge); open-core with proprietary Business Edition | candidate — active (last commit 2026-01-10; 33 repos in org) |
| ScotEID + SAOS (already in corpus, saos.md) | Statutory livestock movement data incl. from abattoirs; industry-owned data infrastructure via co-op sector body; MyHerdStats returns derived stats to keepers | Data governance (industry-owned via co-ops) — NOT open-licensed data | Not openly licensed; statutory data restricted | verified precedent |
| Deonar-AI (Ubada12/Deonar-AI) | Real-time livestock detection/counting (YOLOv11 + ByteTrack on CCTV) built for Deonar abattoir, Mumbai — one of very few open-source projects targeting an operating abattoir | Software (throughput/queue management) | Apache-2.0 (verified) | candidate — small community (3 stars; last commit 2026-07-26) |
| Campaign for Local Abattoirs / Sustainable Food Trust (UK) | Advocacy + evidence network documenting UK small-abattoir collapse (2,500 in 1970s → ~203 today; 59% of small abattoirs expect to close within 5 years) | Openly published research reports (copyrighted, not licensed) | Reports freely published | curated (sector context) |
| Canadian community abattoir initiatives (Leeds & Grenville; Rainy River; Northern Ontario co-op feasibility) | Community-owned abattoir attempts amid access crisis | Governance only — no open software/hardware/data component found | N/A | lead (all at feasibility/announcement stage) |
| HASSAPP (AndrewOwens121/HASSAPP) | Android HACCP-compliance app for small food businesses | Software (HACCP records) | NO LICENCE FILE — public code, not legally open | lead — dormant (last commit 2017-04-26) |

### Honest absences (slaughter/meat)

- No open-source carcass tracking, kill-floor scheduling, or yield/lot-record system exists (GitHub/SourceForge searched multiple query sets). The commercial field (Merit-Trax/Trax-It, CAT Squared, Carlisle Technology) is entirely proprietary.
- No open or openly licensed hardware designs for slaughter equipment (kill floor, scalding, chillers, cut lines, mobile-unit build drawings). Equipment is proprietary-vendor supplied (Lefiell, Walton's, Friesla). IGFC's unit is widely replicated but its engineering drawings were never published under an open licence.
- No maintained, licensed open-source HACCP/food-safety records software suitable for regulated meat plants; only marginal dormant projects.
- No machine-readable open dataset of Canadian licensed abattoirs from CFIA; best available list is the Farm Transparency Project's crowd-mapped database, not an official release.
- AgGateway meat modules: not located in this scan — flagged not-verified rather than confirmed absent.

### Key facts (slaughter/meat)

- UK small abattoirs: ~2,500 (1970s) → ~203 (2026); closures ~10%/year (FSA figures via SFT/National Craft Butchers, read 2026-09-02).
- BC: 58 licensed Class A/B abattoirs under the 2004 Meat Inspection Regulation (new 5-year licence system announced Oct 2021); producers report a slaughter-access crisis (Vancouver Sun, NFU-BC).
- Canada's 2004 federal inspection tightening effectively eliminated many small abattoirs (Food Research International, 2013); provincial licence classes now gate small-producer access.
- Academic abattoir research uses open-source vision tools (pig welfare lesion detection, 2023-2025) but outputs are models/papers, not deployable plant systems.

## Sub-cell 2: Mills, flour, and craft malting

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| Grain Bikes (FarmHack) | Bicycle-powered thresher, fanning mill, dehuller/flour mill; complete build plans + video; SARE-funded (ONE16-277); ~$200 materials, ~1 lb/min | Published hardware (build plans, not CAD) | CC BY 4.0 (verified on tool page) | curated — but micro-scale, 2-3 orders below plant scale |
| Open Source Ball Mill (FAST, Western University) | AC/PV-powered ball mill, complete CAD, HardwareX-published (Mottaghi et al. 2023) | Full open hardware, peer-reviewed | CC-BY-SA-4.0 (Appropedia, verified) | candidate — Canadian provenance but industrial/non-food-grade |
| OSE GVCS hammer mill | Listed GVCS machine; only two preliminary sketches ever published (2012) | Intended open hardware; never completed | None on the artefacts | documented absence-in-progress (14 years, no design) |
| Torth y Tir (Wales) | Community-owned mill/bakery/grain project (community benefit society) | Ownership + practice sharing only; no licensed artefacts | None found | curated (community-ownership exemplar) |
| UK Alternative Grain Networks (UK Grain Lab, Yorkshire Grain Alliance) | Farmer-miller-baker-maltster knowledge commons; 2025 peer-reviewed study frames them explicitly as commons governance ("a more accessible kind of open knowledge sharing platform") | Tacit/process knowledge; not licensed | None | curated (sector context — strongest scholarly grounding that community milling organizes as a commons, while the knowledge stays tacit) |
| New American Stone Mills (Vermont) | De facto standard craft stone-mill builder in North America, incl. Canada (Brodflour Toronto) | None — proprietary closed hardware; the closed incumbent an open design would address | Proprietary | counter-example (actively manufacturing, Aug 2026) |
| CGC Official Grain Grading Guide + harvest/export quality data | Canada's grading rules and annual quality data, published openly | Open government data/reference — as PDFs/spreadsheets, not machine-readable schemas | Open Government Licence – Canada (per dataset; flagged unverified per dataset) | curated — the gap is machine-readability, not secrecy |
| Craft Maltsters Guild webinars | Malting equipment-design technical knowledge | None publicly — members-only | Membership-gated | counter-example (craft malting's knowledge is organized as a closed guild) |
| HomebrewTalk micro malt-house thread | Community DIY design sketch for a rotating-drum germination box | Informal community sketch; no BOM, no licence | None | weak candidate (hobby level only) |
| Brewtarget + brewing-software ecosystem | ~21 open-source repos for homebrew recipe/mash management | Open software for the *homebrew* end | GPL-family (per-repo verification flagged) | adjacent — nothing for malthouse plant control |
| DTN / Grain Discovery (counter-example) | Canadian grain origination/traceability SaaS (Guelph ON; acquired by DTN 2023); piloting AI grain QA with Protein Industries Canada | None — closed SaaS; now US-owned | Proprietary | counter-example — the digital layer of Canadian grain processing is proprietary and consolidating |
| AgGateway ADAPT (adjacent) | Open ag machine-data interoperability framework | Machine/telemetry data, not grain-grading payloads | Open source (per-repo licence not verified in this scan) | adjacent; no open standard found for mill-intake grain quality payloads |

### Honest absences (milling/malting)

- No OSHWA-certified grain/flour mill or malting equipment (directory + web searched; zero results).
- No open-source flour-mill or grain-elevator plant management software: only proprietary products (GrainTrac, Vertical Software, BatchNet, GMS Grain, Solentra, Qaltivate).
- No open CAD/engineering design package for a plant-scale stone or roller mill anywhere (Appropedia, GitHub, Thingiverse, Instructables searched): only the OSE sketches (never completed), the non-food-grade ball mill, and unlicensed hobby articles.
- No open craft-malting equipment design at plant scale; the Guild's technical knowledge is members-only.
- No machine-readable open interchange schema for grain-quality grading payloads (moisture/protein/falling number/grade) in Canada or the US — grading *rules* are public documents, grading *data exchange* is not standardized openly. AgGateway ADAPT covers telemetry, not grading.
- No open mill design built in Canada; the only Canadian-origin open milling design is Western's non-food-grade ball mill. Canadian craft mills all run proprietary equipment.
- No formal open licence on any community-mill knowledge output — the movement shares as practice, not licensed artifacts.

### Key facts (milling/malting)

- Canadian flour milling concentrated: ADM ~75% of Canadian flour capacity (Western Producer, acquisition-era figure widely cited since), with Rogers Foods, P&H (nine mills), Ardent Mills; IBISWorld counts ~110 businesses but capacity sits with the majors.
- A vibrant Canadian craft-milling tier exists (1847 Stone Milling, Brodflour, K2 Milling, Arva Flour Mill, Wolfgang's, Engrained, Balmoral Grist Mill) — all on proprietary equipment, notably New American Stone Mills.

## Sub-cell 3: Dairy processing

[findings pending — sub-scan re-running]

## Sub-cell 4: Cross-sector processing software and data standards

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| ERPNext (Frappe) | Open-source ERP with batch/lot traceability, BOMs, FEFO, quality inspections; marketed for food manufacturing (HACCP/ISO 22000 via partner verticals: Dexciss, Quantbit, Turqosoft) | ERP + lot traceability + QMS | GPL-3.0-only | active (releases through 2026); food features via third-party integrators, not the core |
| Odoo Community Edition | Open-source ERP (inventory, MRP, quality); food use via community/OCA modules (AwesomeFoodCoops) | ERP + inventory + manufacturing | LGPL-3.0 (Community); Enterprise modules proprietary | very active (v19); food vertical via add-ons |
| Carbon (crbnos/carbon) | Open-source ERP+MES+QMS (TypeScript/Postgres); general discrete manufacturing, no food modules | MES + ERP + QMS | Not confirmed in scan (README names no licence — flag, verify LICENSE) | very active (2.4k stars; commit 2026-09-01) but not food-specific |
| OpenEPCIS epcis-repository-ce | GS1 EPCIS 2.0 event repository + DPP-ready ontology; explicitly targets food & beverage traceability | Traceability standard implementation | Apache-2.0 (community edition); commercial Business Edition separate | active (org of 33 repos; commit 2026-01-10) |
| Oliot EPCIS 2.0 (JaewookByun/epcis) | Academic open implementation of EPCIS 2.0/CBV (SoftwareX: first open-source EPCIS 2.0 system) | Traceability standard implementation | Apache-2.0 | active but slowing (last commit 2025-01-10); low adoption |
| GS1 EPCIS 2.0 / CBV | The open data standard for supply-chain event data; GS1 US publishes FSMA 204 CTE recommendations; FSMA 204 KDE/CTE records expressible as EPCIS events | Data standard | Royalty-free per GS1 IP Policy; "open standard, paid identifiers" (GTINs/GLNs require licensed member registration) | standard exists; food adoption partial |
| OpenWMS.org | Open WMS (Java/Spring microservices); generic | Warehouse management | Apache-2.0 | active (728 stars; donation-funded) — not food/cold-chain specific |
| ModernWMS | Open WMS (.NET/Vue) for small/mid warehouses | Warehouse management | Apache-2.0 | stalled (last commit Jun 2025) |
| Underground Meats open-source HACCP plan | First "open-source" HACCP plan — USDA-validated salami-plant plan released CC0 via 2013 Kickstarter; wiki for processors to adapt; reportedly used by ≥20 US processors ("Wikipedia for food safety") | Shared food-safety compliance records (templates, not software) | CC0 / public domain | existed; likely dormant — current host unconfirmed; no successor infrastructure |
| FSIS / CFIA open inspection data | USDA FSIS inspection task datasets; CFIA food-safety testing reports (110k+ tests) | Public inspection/monitoring data — one-way (regulator → public), not shared plant records | US public domain / open.gov terms; CFIA reports public documents | current |
| PackML / OPC UA PackML (OPC 30050) | Machine-control/interop standard for packaging/processing lines (ISA-TR88 state model, PackTags) | Equipment interop standard | NOT open — ISA-TR88 text purchased from ISA; OMAC guides membership-gated; OPC UA spec under OPC Foundation terms | standard exists but paywalled — a structural gap for open plant integration |
| Open SCADA (Eclipse SCADA lineage, ScadaBR, etc.) | Generic open SCADA/HMI platforms usable for plant utilities | Plant monitoring | EPL/GPLv2 mix; ScadaBR GPLv2 | exist; generic only — no food-refrigeration vertical |
| IoT cold-chain monitoring repos | Hobbyist/reference cold-room monitoring (Raspberry Pi etc.) | Cold-chain sensing software | Varies; many unlicensed | prototype-scale only |

### Honest absences (cross-sector software/data)

- No production-grade, food-specific open-source HACCP/QMS with active maintenance: GitHub results are student projects; commercial tools (Safefood 360°, FoodReady, iAuditor) dominate.
- No open-source food-vertical MES: Carbon is active but discrete-manufacturing oriented (no HACCP, no kill-step/batch-validation concepts).
- No open-source FSMA 204 compliance implementation (KDE/CTE models, Traceability Lot Code management) — only EPCIS-level infrastructure plus commercial SaaS; GS1 guidance is a document, not code.
- No open plant-scale cold-store WMS or open refrigeration-plant controller: open WMS options are generic; open cold-chain projects are prototypes; plant refrigeration control is proprietary.
- No active maintained repository of shared HACCP plans: the Underground Meats CC0 model is dormant with no successor — the one proven open intervention in food-safety records failed to become infrastructure.
- No FEFO-aware perishables production-scheduling open system; scheduling exists only as generic ERP modules.
- Open inspection data flows one way (regulator → public); no open two-way shared-records layer between processors and inspectors exists.

### Key facts (cross-sector)

- FSMA 204 compliance date extended 30 months to 2026-07-20 → 2028-07-20 (Federal Register, Aug 2025) — delays pressure for lot-level record systems and reduces current incentive for open tooling.
- HACCP plans require plant-specific validation, which structurally limits template reuse — the likely reason shared/open HACCP records never became infrastructure (the one open intervention, Underground Meats, validated demand but not durability).
- PackML is the dominant machine-interop model for processing lines and is not open — the standard text itself is a paid product.
- ERP-based lot traceability is the main open entry point at plant scale (ERPNext, Odoo Community) — with food functionality contributed by commercial integrators, echoing the corpus's open-core pattern.

## Sub-cell 5: Canadian processing sector frame

### Concentration facts (sourced)

| Segment | Fact | Source |
|---|---|---|
| Beef | Two firms (Cargill High River AB; JBS Brooks AB) ≈ 85%+ of Canadian beef processing capacity per the House of Commons Agriculture Committee (45th Parl.); the "two firms ≈ 95%" claim (NFU, c. 2020-21 COVID era) circulates but the defensible current figure is ~85%+ | ourcommons.ca AGRI report (45th Parl.) |
| Pork | Three main players: Maple Leaf (Brandon MB largest western plant), Olymel, Conestoga; Olymel's 2023-24 closures left ~40% of affected hogs initially without a processing home | thepigsite.com sector overview; Globe and Mail |
| Dairy | "Big three": Saputo, Lactalis (Parmalat), Agropur; Saputo largest share (IBISWorld). Regional co-ops persist: Gay Lea (~1,400 member farms), Agropur co-op (~2,700 farmer-owners), St-Albert, Organic Meadow | IBISWorld Canada dairy report |
| Flour milling | ADM ~75% of Canadian capacity (acquisition-era figure, widely cited since); Rogers Foods, P&H the main remaining Canadian millers | Western Producer |
| Poultry | Maple Leaf, Maple Lodge, Olymel, Lilydale (Sofina), Exceldor ≈ 60% of broiler processing (INAC); supply management keeps farmers out of processing ownership | INAC Services; USDA FAS GAIN 2025 |
| Cold storage | Lineage and Americold dominate North American public refrigerated warehousing, both with large Canadian networks (Americold: 119,620 pallet positions in Canada); no Canada-specific share figure public | americold.com |

Note: the corpus's Episode 36 "two firms ≈ 95%" framing should be carried forward as "two firms ≈ 85%+ (committee-reported), with higher COVID-era estimates circulating" — the record-level precision matters here.

### Named Canadian projects (community/Indigenous processing access)

| Project | Governance | Status | Open layer |
|---|---|---|---|
| Quebec producer-led mobile abattoir | Producer co-op | Closed — bankrupt 2008, insufficient utilization (the cautionary precedent, Sustain Ontario) | None |
| Yukon territorial mobile abattoir | Territorial government | Operating since 2006 (per Atlantic Farm Focus 2022) | None |
| BC Class E mobile abattoir prototype (Roth family) | Private farm family, Class E licence | Prototype stage (~2021-2023); SSMPA lobbied to expand Class D/E province-wide | None |
| Thunder Bay / Northern Ontario community abattoir efforts | Family plant seeking buyer; Nordik Institute co-op feasibility (500-700 animals, ~10% of regional cattle) | Feasibility stage only | None |
| Treaty #3 Regional Abattoir and Food Sovereignty Initiative | Grand Council Treaty #3 (Anishinaabe government); P3 RFP | RFP/feasibility stage; not confirmed operational | None |
| Fort Simpson bison processing (Fort Simpson Métis Development Corp, NWT) | Indigenous development corporation; CanNor Northern Food Innovation Challenge | Phase 2 (2022), in development | None |
| Sik-E-Dakh First Nation meat-processing facility (Glen Vowell, BC) | First Nation-led | Active initiative; operational status unconfirmed | None |
| North Bay proposed CFIA-inspected abattoir | Private proposal (~200 head/day) | Announcement stage only | None |

### Regulatory shape (Canada)

- Only CFIA-federally-inspected plants can sell interprovincially/export — the structural driver of concentration; provincially inspected plants are confined intraprovincial.
- BC graduated licences: Class A/B provincial; Class D/E on-farm/farm-gate limits; 2013 pilot licences; new 5-year licence system from Oct 2021.
- Alberta Meat Inspection Branch: ~125 abattoirs, 55 mobile butcher facilities, 99 mobile-type units; licensing limits mobile scope.
- Quebec: transitional/local slaughter permits (P-29 amendments); its mobile abattoir failed in 2008; Quebec-Ontario interprovincial slaughter pilot after the region's last cattle abattoir closed.
- Ontario: $7M (Nov 2021) + Meat Processor Capacity Improvement Initiative responding to the post-2020 shortage.
- PEI licenses slaughterhouses under the Public Health Act at no fee; Atlantic Canada broadly lacks capacity (Farm Focus 2022).
- CFIA publishes some datasets on the federal Open Government Portal, but there is no open provincial registry of licensed abattoirs with inspection outcomes.

### Honest absences (Canada)

- No open-source software stack for plant-scale processing in use or developed anywhere in Canada.
- No open-data layer beyond federal aggregates; no open registry of provincially licensed abattoirs with inspection outcomes.
- No community/shared cold-storage co-ops with published operational data found in Canada.
- Mobile-abattoir pilots publish no operational/throughput data; the 2008 Quebec failure is documented only in secondary writeups.
- Indigenous- and community-led processing initiatives (Treaty #3, Sik-E-Dakh, Fort Simpson) have no open-data or open-source component; status reporting is limited to funder announcements.

---

## Cross-cell synthesis

[to be completed when the five sub-cells return]

## What this scan does not do

- It does not cycle candidate records through full verification or curate them into `examples/` — that is the follow-up pass, per house practice.
- It does not treat cooperation or community ownership alone as an open layer; ownership models are recorded with their open layers (or the honest absence of one) separately.

## Sources

[to be completed]

Not legal advice.