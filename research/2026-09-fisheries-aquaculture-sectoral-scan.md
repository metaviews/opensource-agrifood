# Fisheries and aquaculture sectoral scan: the open layer in wild-capture fishing, aquaculture, and the blue food chain (G-OSA-34)

Research date: 2026-09-02
Method: broad sectoral discovery cycle, run as five parallel sub-cells — (1) open fisheries data and vessel tracking, (2) open aquaculture technology, (3) community-supported fisheries and cooperative harvesting, (4) the Canadian frame (DFO data, Indigenous fisheries governance, salmon aquaculture), (5) cross-cutting seafood software, standards, and the landing-dock layer. Each sub-cell ran multiple query sets with primary-source verification; licences recorded from repository or terms documents; honest absences documented per sub-cell. This scan opens G-OSA-34 (candidate workstream A6); the follow-up pass cycles candidates into `examples/` records.

Register context: G-OSA-34. Prior corpus coverage was two incidental hits only — the thinnest gap in the candidate workstream table. The cell widens the corpus rather than deepens it, but the Canadian angle is strong (Atlantic and Pacific fisheries, Indigenous fishing rights, salmon aquaculture), and the sector tests the openness thesis against a distinctive structure: in wild capture, the scarce asset is not a plant but a *licence* — access is governed by quota, fleet-separation, and Indigenous rights regimes, not by equipment ownership.

## The structural question this cell asks

Farming's enclosure story is about land, equipment, and data platforms. Fisheries' is different: the enclosing asset is the fishing licence/quota itself (allocator: the state), the data layer is movement/catch/stock data (enclosed by regulators and watchers of very different intents), and aquaculture sits between — farming the water with ag-like operations but marine regulation. The scan asks where openness appears in each: open data (watching the fleet), open science (stock assessment), open governance (CSFs, harvester co-ops, Indigenous communal licensing), open hardware (marine sensing), and open software (the dock, the boat, the pen).

---

## Sub-cell 1: Open fisheries data and vessel tracking

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| Global Fishing Watch (GFW) | Free platform + public APIs tracking apparent fishing effort, vessel identity, carrier/transshipment, SAR dark-vessel detections; independent nonprofit since 2017 (founded 2015 by Oceana/SkyTruth/Google) | Data + software + governance | Derived datasets **CC-BY-NC-4.0** (verified on Zenodo); code Apache-2.0/GPL-3.0; **raw AIS is commercial and not redistributable** | include — the anchor case; the NC restriction is its central tension |
| DFO AIS vessel-density mapping | Annual/monthly vessel-density GeoTIFFs for Canadian waters on the federal Open Government portal | Data (derived rasters, not raw AIS) | **Open Government Licence – Canada 2.0** (verified on dataset records) | include — Canada's most concrete open vessel-tracking layer |
| EMODnet Human Activities | EU portal: ship-density raster maps (1 km grid) + fishing/aquaculture layers, open download via WMS/WFS | Data + OGC standards | Open; per-layer licence flagged unverified | include (methodological template for DFO) |
| RAM Legacy Stock Assessment Database | ~1,300+ stock-assessment time-series for global commercial stocks; the standard meta-analysis base | Data (versioned releases + rOpenSci R package) | **CC-BY-4.0** (v4.66 verified on Zenodo); package repo licence NOASSERTION | include — contains numerous Canadian (DFO) stocks |
| FAO FishStat | Global capture + aquaculture production databases; SOFIA underlying data | Data | **CC-BY-4.0** (FAO statistical database terms, verified) | include |
| Stock Synthesis 3 (SS3) | NOAA's flagship age-structured stock-assessment engine | Software | **CC0-1.0** (verified via GitHub API) — zero-friction | include; very active (pushed 2026-09-01) |
| sdmTMB | Spatiotemporal index standardization (TMB); **built at DFO's Pacific Biological Station** (pbs-assess) | Software | **GPL-3** (verified in DESCRIPTION) | include — the flagship Canadian open fisheries software; active (2026-09-01) |
| WHAM / FIMS | Woods Hole state-space assessment model; NOAA's next-gen Fisheries Integrated Modeling System | Software | FIMS **GPL-3.0** (verified); WHAM licence UNVERIFIED (GitHub NOASSERTION — confirm from repo) | include (WHAM licence flagged) |
| Monitorfish (MTES-MCT) | France's national fishing-vessel monitoring and control software — VMS/AIS visualization, gear declarations, catch alerts — a full government control stack released open source | Software + governance | **AGPL-3.0** (verified) | include — pushed 2026-09-02, the day of the scan; rare government-operates-on-open-code case |
| OpenEM | Open-source video analytics for fisheries electronic monitoring (gear/catch detection, species classification; grew from NOAA/DrivenData competition) | Software + pretrained models | **MIT** (verified) | include — flagged dormant (last push 2023-09-06); cited in NOAA EM automation white paper |
| NOAA Fisheries Integrated Toolbox | Curated catalogue/r-universe of open fisheries-science tools | Governance/catalogue layer | Per-package (meta CC0) | include as catalogue layer |
| FishBase / SeaLifeBase + rfishbase | Global species biology databases; rfishbase R interface (CC0, verified) | Data (free access) + software | rfishbase CC0; **FishBase data itself has no formal open-data licence — "free access" ≠ CC-licensed** | include with licence caveat |
| exactEarth (closed counter-example) | Commercial satellite-AIS provider (Spire, Canadian-founded in Cambridge ON) | None — proprietary EULA | exactEarth Data Licence (proprietary) | counter-example — Canada's AIS products often derive from such closed providers |

### Honest absences (fisheries data)

- Raw AIS data is open nowhere at scale: GFW states raw AIS is commercial and cannot be redistributed; only derived products are open, under NC or government licences. No general-purpose open AIS archive exists.
- NOAA VMS data is closed (enforcement confidentiality); only derived grids released.
- No maintained open fish-species-classification model ecosystem beyond OpenEM; camera-AI fish ID is proprietary-vendor dominated.
- ICES published an EM interchange format specification (2025-2026) with no located open-source implementation.
- Licence texts for r4ss, WHAM, EMODnet per-layer: flagged unverified rather than guessed.
- rfisheries/openfisheries.org (global landings API): unmaintained since Dec 2019 — legacy.

### Key facts (fisheries data)

- The landscape splits cleanly: derived/training data and government statistical products are open (GFW derived, EMODnet, DFO density maps, FishStat, RAMLDB); raw tracking data (AIS, VMS) is commercially or legally closed everywhere found.
- Stock assessment software is the most genuinely open software layer found in any agrifood cell to date: SS3 under CC0, actively maintained, zero-friction adoption, used in Canada.

## Sub-cell 2: Open aquaculture technology

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| OpenCTD | Low-cost (~US$350) Arduino-based CTD for coastal water-quality; Rev 8; peer-reviewed (Oceanography 37(2), 2024); "Year of the OpenCTD" 2024 built 40+ units via workshops | Open hardware + firmware + build manual | **MIT** (LICENSE.md verified) | include — flagship of open marine sensing; **not OSHWA-certified**; active (commit 2026-06-21) |
| open-pisciculture LoRaWAN data buoy | Battery buoy measuring temp/pH/DO in fish ponds, LoRaWAN uplink; field-tested at an operating farm (PLoS ONE 2022) | Open hardware + software + docs | **CERN-OHL-P v2 + MIT + CC BY 4.0** (all verified in repo) | include — dormant (2022), peer-reviewed |
| reef-pi | Mature open-source aquarium/reef controller on Raspberry Pi (control, monitoring, dosing, camera); 4,048 commits | Software | MIT (repo verified) | include — the most technically mature open controller adaptable to small RAS; active (2026-06) |
| AquaPi | ESP32/ESPHome aquarium monitoring with Atlas Scientific probes + Home Assistant | Firmware/config | **Apache-2.0** (verified) | include; active (2026-08) |
| ADO tank-aquaculture platform | End-to-end open IoT stack for tank aquaculture (HardwareX 2022) | Hardware + software stack | Paper CC BY-NC-ND; hardware repo licence not verified | lead |
| OpenROV / Sofar Trident (cautionary) | Underwater ROV: open-source project → crowdfunded product → proprietary (Sofar) → **discontinued, support ended 2020-12-31** | Historically open; shipped product closed | Early designs open (legacy org); Trident closed | counter-example — the open-to-proprietary-to-dead lifecycle |
| GreenWave 3D ocean farming | Kelp/shellfish farming model distributed via open manuals, training, Farm Design Tool; founder Canadian (NL-born) | Open knowledge/model — **not licensed open hardware** | No explicit open licence identified | include with "open-by-sharing, not licensed" caveat |
| 3D-printed oyster gear field test (SARE FNE22-017) | Farmer-led test of printed/CNC oyster bags on a Maine farm; conclusion: DIY fabrication impractical at current technology | Open knowledge (grant report) | No formal licence on design files | include as documented negative result |
| ZAF zebrafish feeder | First open-source fully automated feeder for aquatic facilities (2022) | Hardware + software (lab scale) | Publication open; repo licence not verified | include as lab-scale boundary marker |

### Honest absences (aquaculture technology)

- No open-source feeding-system controller at commercial scale (open feeders are lab/student scale; commercial feeding is proprietary: AKVA, DSG, Arvo-Tec).
- No open-source aquaculture farm-management software of farmOS maturity; the sector is proprietary (Innovasea Farm360, Folio3, aquaculture ERPs). GitHub's aquaculture topic (152 repos) is dominated by student prototypes, many unlicensed — licensing discipline is the gap.
- OpenCTD is not OSHWA-certified (checked the directory) — its MIT licence and peer review are the openness evidence.
- No maintained, community-governed open RAS controller; RAS monitoring open code is single-user unlicensed scripts.
- No dedicated open shellfish/kelp gear-design repository with a formal licence; gear sharing is model-level (GreenWave) or grant-report level (SARE), and the one rigorous DIY test found fabrication impractical at current technology.
- No Canadian-led open aquaculture hardware or software project identified.

### Key facts (aquaculture technology)

- The strongest open layer in aquaculture is marine *sensing* (OpenCTD lineage: cheap, peer-reviewed, community-workshopped), not farm *operations* — inverting the land-agriculture pattern where farm-management software (farmOS) is the mature open layer.
- Openness lifecycle risk is sector-specific and documented: OpenROV went open → proprietary → discontinued. "Open" claims in marine tech require licence-level verification.

## Sub-cell 3: Community-supported fisheries and cooperative harvesting

### Candidates

| Candidate | What it is | Governance | Open layer | Status |
|---|---|---|---|---|
| Off the Hook CSF (Digby County, NS) | Atlantic Canada's first CSF (2010): fisher-owned cooperative selling hook-and-line groundfish shares direct; launched with Ecology Action Centre | Fisherman co-op (five founding members, 2010) | None — no open data, software, or playbooks | include — flag: website stale and spam-injected; **likely dormant since ~2018-19; status needs primary verification** |
| Skipper Otto CSF (Vancouver, BC) | Canada's largest and active CSF (2008): 45+ small-scale BC fishing families, thousands of member households, 80+ pickup points; UBC food-services partnership Sept 2025 | **NOT a co-op** — private woman-led family business, B Corp; members are customers, not owners; prepayment mimics CSA risk-sharing | None — "100% traceability" is marketing; ordering platform proprietary | include — canonical Canadian CSF with the governance caveat |
| Local Catch Network | North America-wide CSF network (2011, UMaine/NAMA, ~500 members incl. 200+ businesses): public core-values charter (2016), free CSF start-up guides, public strategic plan (2025), public Seafood Finder | Volunteer governance, member-developed values | **Partial** — open governance documents + public directory; no open datasets or code | include — the sector's strongest open layer |
| Tignish Fisheries Co-operative / Royal Star Foods (PEI) | Canada's first fishermen's co-op (roots 1920, incorporated 1925; co-op 1959); lobster purchasing/processing; spawned Tignish Credit Union 1937; model for the Antigonish Movement | Member-owned harvester co-op (178 members) | None | include as historical/structural context |
| Owner-Operator / Fleet Separation / PIIFCAF | Federal structural policy: Fleet Separation (1979) bars processor licence ownership; Owner-Operator requires personal fishing; PIIFCAF (2010, strengthened 2019/2020) preserves inshore independence | State policy — the legal backbone keeping inshore licences in community hands | Public law (the licence policy itself, not an open layer) | structural context |
| Indigenous communal commercial licences (SOR/93-332, 1993) | Communal licences held collectively by First Nations, with internal allocation; Atlantic Integrated Commercial Fisheries Initiative | Indigenous community tenure — Canada's most durable community-held fishery tenure | None — allocations/agreements not published as open data | governance/tenure context |
| Port Clyde / Cape Ann / NH Community Seafood (US exemplars) | CSF movement's reference points: Port Clyde Fresh Catch (ME, 2007) is the cited *first* CSF; Cape Ann is oldest/largest but was explicitly corrected as NOT a co-op; NHCS (2013) is a true fisher+consumer co-op | Mixed | None at exemplar level | model history — corrects the "Cape Ann 2007" assumption |

### Honest absences (CSF cell)

- No CSF (US or Canada) publishes open data — machine-readable catch, member, or pricing data. Traceability claims are marketing-level.
- No open-source software stack in the CSF sector; Skipper Otto's platform is proprietary; LocalCatch's Seafood Finder is a web app with no API/data dump.
- Off the Hook's current status unverifiable (spammed, stale site) — flagged for direct contact.
- The "Cape Ann 2007 first CSF" origin is corrected: Port Clyde (2007) per Hakai.
- No current Canadian CSF count; last figures: 1 (2007) → ~250 (2015) North America-wide.
- FISH SAFE (BC vessel safety) and United Fishermen of Alberta could not be substantiated as harvester co-ops — misattributions in the prompt's lead list.

### Key facts (CSF cell)

- Answer to the cell's key question: **the fisheries parallel of the grocery co-op exists at scale (~200-270 CSFs in North America) but produces no open assets** — the same pattern the grocery cell found at retail. The biggest Canadian CSF is not even a co-op; the fisher-cooperative form survives in legacy Atlantic co-ops (Tignish, 1925).
- Canada's structural layer is unusually strong: PIIFCAF/Fleet Separation legally prevent licence consolidation — the policy precondition for community-scale harvesting, and the fisheries analogue of anti-consolidation rules.
- The only openly published sector assets are network-level: Local Catch's values charter, start-up guides, strategic plan, and directory.

## Sub-cell 4: Canadian frame — DFO data, Indigenous fisheries governance, salmon aquaculture

### Open-data candidates

| Dataset | What | Licence | Status |
|---|---|---|---|
| DFO sea-lice audits of BC marine finfish sites | Industry counts, DFO-audited, monthly means from 2010, weekly from 2013, farm→pen granularity | GoC open licence (verify per record; typically OGL-Canada) | live; cited as official source in Revie et al. (Sci Data, 2025-07-31) |
| National Aquaculture Public Reporting Data | Fish health, sea lice, antimicrobial use, transfers, production — aggregated industry submissions | GoC open licence | live; DFO frames it as implementing the Directive on Open Government |
| Sea-lice mitigation events; fish-health/transfer datasets (BC) | Treatment and transfer reporting under licence conditions | GoC open licence | live |
| Harmonized 2001-2023 wild+farmed sea-lice dataset (Revie et al. 2025) | 23-year curated dataset harmonizing DFO open data + operator sites + Salmon Coast Field Station's GitHub database | **CC-BY** (Scientific Data/figshare, verified) | the best secondary layer; documents how heterogeneous official reporting is |
| DFO Pacific commercial licence statistics | Aggregated licence counts only — **not a licence-holder registry** | OGL-Canada | live |
| DFO AIS vessel-density mapping (from sub-cell 1) | Derived rasters | OGL-Canada 2.0 | live |

### The Canadian structural findings

- **Concentration**: BC salmon farming is dominated by Norwegian-owned multinationals (Mowi Canada West, Cermaq Canada, Grieg BC); Cermaq signed to acquire Grieg's BC + Newfoundland operations (2025); Cooke Aquaculture (NB, Canadian) agreed to acquire Mowi Canada East for $225M — concentrating both coasts. Industry statements: BC farmed-salmon production down >40% since 2015; imports doubled.
- **The salmon controversy, as an open-data story**: the Discovery Islands phase-out (announced Dec 2020, renewed refusals 2023, Federal Court of Appeal upheld 2026-01-29) and the pan-BC open-net pen phase-out by 2029-06-30 exist as announcements, QP notes, and court records — **no structured open dataset of aquaculture licence decisions exists**. Meanwhile BC sea-lice data is genuinely strong open data — but heterogeneous formats forced academic harmonization (Revie et al. 2025).
- **Marshall and the moderate livelihood**: SCC affirmed the Mi'kmaq treaty right to fish for a moderate livelihood (1999); 25+ years on, the moderate-livelihood fishery "has yet to be successfully implemented" (Marine Policy 2024). DFO reports $259.4M (2024-2027) toward the right of 34 Mi'kmaq and Wolastoqey Nations; treaty-Nation commercial landings rose $3M (1999) → $144.2M (2024). A 2022 Senate committee directed transfer of negotiations to Crown-Indigenous Relations — fisheries-first implementation had failed.
- **Sipekne'katik (2020)**: self-regulated moderate-livelihood fishery with its own licences, seasons, and management plan — an assertion of jurisdictional, not consultative, governance. UNSM: treaty-rights fisheries are "self-regulated through community-defined rules grounded in Netukulimk and Mi'kmaw law."
- **OCAP® in fisheries**: documented as principle and emerging agenda (FACETS 2024 on salmon data sovereignty; CIOOS references) — but **no operating Indigenous-led open fisheries-data registry implementing OCAP was located**.
- **The registry gap**: DFO considers quota holdings, catch, and sales data confidential; there is no licence-holder-level public registry (Marine Policy 2022; DFO's own Atlantic licence survey was released only in aggregated form).

### Honest absences (Canadian frame)

- No open licence-holder-level fisheries registry (explicitly closed per Marine Policy 2022).
- No structured open dataset of aquaculture licence decisions (Discovery Islands lives in announcements/court records).
- No OCAP-governed open fisheries dataset in operation.
- No open dataset tracking moderate-livelihood negotiations.
- No verified open sea-lice/fish-health reporting depth for Atlantic Canada (BC only).
- No DFO-published company-level concentration data.

## Sub-cell 5: Cross-cutting software, standards, and the landing-dock layer

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| GDST 1.2 standard + OpenEPCIS CE | The seafood traceability standard (KDEs/CTEs, interoperable with GS1 EPCIS 2.0) + the open EPCIS implementation already in the corpus | Standards + implementation | GDST spec freely published; OpenEPCIS Apache-2.0 (verified) | include — **the most "openable" seam in the sector** |
| openMSE (DLMtool/MSEtool/SAMtool) | Umbrella R stack for operating models, data-limited methods, MSE — the de-facto open fisheries-science stack | Software | **GPL-3** (verified in DESCRIPTION) | include as science-layer adjacency; slowing (last commit 2024-09) |
| DFO ELOG vendor ecosystem (Vericatch, FisheriesApp) | Canada's mandatory electronic-logbook program: harvesters must use DFO-qualified *proprietary* vendor apps (rollout expanding since Jan 2025) | None — the collection layer is closed and vendor-locked | Proprietary per vendor | document as the closed landing-dock layer — **no open-source DFO-qualified ELOG client exists** |
| NOAA FOSS / ACCSP warehouse (US) | Federal/state landing-data query systems | Open data, **explicitly not machine-to-machine accessible** | US federal/public | include with concrete gap: "public data" without an API |
| EU Reg. 2023/2842 | Revised Fisheries Control System: mandatory electronic recording for all EU vessels (2024-2026 phase-in) | Legal standard open as requirement; implementations proprietary | Public law | regulatory-standard layer |
| Oceana seafood-fraud reports + FDA/Smithsonian DNA reference library | NGO DNA-testing reports (Oceana Canada 2018 Canadian dataset; meta-analysis 2024: 26.2% species substitution) + public-domain DNA reference sequences | Reports/PDF + US federal DNA data | Oceana reports © PDFs; RefSeq public-domain | include — fraud evidence exists, not as queryable open data |
| MSC conditions log + Data Validation API | Ecolabel data: conditions log **CC BY-SA 4.0** (verified); API scope-limited to certificate status | Partially open | CC BY-SA 4.0 (log); API B2B-restricted | include with licence heterogeneity flagged |
| ThisFish Tally (closed counter-example) | Vancouver BC AI seafood traceability SaaS — the de-facto Canadian commercial traceability stack | None | Proprietary | counter-example — leading Canadian seafood traceability software is proprietary |
| Ocean Disclosure Project / FishSource | Voluntary corporate sourcing disclosure + public fishery-status database | Publicly viewable; **no open licence found** | Not stated | include with licence caveat |
| FisheryProgress + FIP-DB | FIP registry/progress tracking + academic historical dataset | Publicly viewable; no bulk/API licence | Not stated | include as partially-open |
| Blockchain seafood pilots | FAO-documented tuna/shrimp/toothfish pilots | Mostly closed (IBM Food Trust, OpenSC, Provenance commercial engagements; several defunct) | Proprietary | document — blockchain did not yield a durable open stack |
| rfisheries/openfisheries.org | Global landings API + R client | Data + client | MIT (client); API availability stale | legacy/unmaintained |

### Honest absences (landing-dock layer)

- No production-grade open-source dockside/harvest catch-log software anywhere; commercial ELOG space is entirely proprietary (Vericatch, FisheriesApp in Canada).
- No farmOS-equivalent open aquaculture farm-management platform.
- No open licence confirmed for FisheryProgress, FishSource, or ODP — publicly viewable ≠ openly licensed (the corpus's standing distinction).
- NOAA FOSS landings: explicitly no machine-to-machine access.
- No open-source DFO-qualified ELOG client; DFO's qualified list is proprietary-vendors only.
- No durable open-source blockchain seafood traceability stack emerged from the pilots.
- Canada has no public landing-data warehouse comparable to ACCSP.

### Key facts (landing-dock layer)

- The least open part of the seafood stack: catch-reporting mandates (DFO ELOG 2025 rollout; EU full electronic recording) are driving procurement of proprietary vendor software, not open source.
- The most openable seam: GDST 1.2 + EPCIS 2.0 + OpenEPCIS CE — an open standard, an open implementation, and regulatory drivers (US/EU import programs) aligned.

## Cross-cell synthesis

1. **Fisheries inverts the corpus's pattern — and then reconfirms it one layer down.** In farming and processing, the open layer was thinnest where capital and regulation concentrated, and the *science* layer was consistently open. Fisheries is the only cell where the most open layer is the *science* layer itself: the stock-assessment stack (SS3 under CC0, sdmTMB GPL-3 built inside DFO, FIMS, WHAM) is genuinely, durably open software — better open practice than any farm-software cell in the corpus. And the watching layer (GFW, EMODnet, DFO density rasters) is open at the derived-data level. But the *operational* layer — the boat's logbook, the dock, the pen, the farm records — is as closed as the processing plant, and for the same reasons the processing scan found: regulatory mandates route through proprietary, state-qualified vendors (DFO ELOG; EU Reg. 2023/2842), and raw data (AIS, VMS, catch) is commercially or legally closed everywhere found.

2. **The open-watchers paradox.** Global Fishing Watch is the sector's flagship open initiative, yet its flagship datasets are CC-BY-**NC**-4.0: the world's leading fishery-transparency organization publishes data under a licence that forbids the commercial reuse the corpus's other data commons permit. Raw AIS is closed everywhere — so openness in fleet transparency is parasitic on a commercial data layer (exactEarth lineage, Canadian-founded). The pattern: open *derivative* transparency, closed *source* data.

3. **Governance without open assets, again — with a Canadian twist.** The CSF cell answers the cell's key question the same way the grocery cell answered its retail question: the cooperative form is real (Off the Hook 2010; Tignish 1925; ~200+ CSFs North America-wide) and produces no open data, software, or playbooks. The largest Canadian CSF (Skipper Otto) is not a cooperative at all but a B Corp whose co-op-like feature is only member prepayment. The one openly published layer is network-level governance documentation (Local Catch values charter, start-up guides, strategic plan). Meanwhile Canada holds the *policy* anti-enclosure layer no other jurisdiction has: Fleet Separation/PIIFCAF keep inshore licences out of processor hands, and Indigenous communal licences (SOR/93-332) are the most durable community-held fishery tenure found anywhere in the scan.

4. **Indigenous fisheries governance is the cell's distinctive contribution — and it is jurisdictional, not open-data.** The Marshall right (1999) remains unimplemented as a moderate-livelihood fishery 25+ years on ($259.4M committed 2024-2027; landings $3M → $144.2M); Sipekne'katik's self-regulated fishery and the Mi'kmaq Netukulimk-grounded standards assert fisheries *jurisdiction* through community-defined rules — governance documents, deliberately not open datasets. OCAP applied to salmon data is documented as principle and agenda (FACETS 2024) with no operating registry. This connects directly to the corpus's standing finding: the strongest Indigenous governance cases govern *through* limits on exposure, not through open data — the refusals pattern the grocery feedback registered (§5), here in its most materially grounded form.

5. **Aquaculture technology mirrors the farm layer at lower maturity.** OpenCTD (MIT, peer-reviewed, 40+ community-built units) is a genuinely successful open-sensing project but is not OSHWA-certified; the controller layer's maturity sits in the hobbyist stack (reef-pi, AquaPi) not farm software; open feeding and farm-management are empty; and the OpenROV lifecycle (open → proprietary → dead) documents the sector's openness-to-enclosure lifecycle risk. GreenWave's kelp model — Canadian-born founder — shares its farming model openly but licenses nothing.

6. **Canada-specific verdict.** Canada's open layer in fisheries is real but split-form: strong open *science* (sdmTMB, DFO's assessment lineage), strong open *watching* (AIS density rasters, sea-lice audits under OGL-Canada), and near-empty open *operations* (ELOG vendor-locked; no licence-holder registry — explicitly confidential; no licence-decision dataset even amid the sector's largest licensing controversy in decades, the 2029 open-net phase-out upheld by the Federal Court of Appeal on 2026-01-29). The sea-lice harmonization paper (Revie et al. 2025) is the pattern in miniature: the official open data is real but heterogeneous enough that researchers must rebuild it before it is usable.

G-OSA-34 resolves provisionally into four shapes: (1) open science and open watching — stock-assessment software and derived observation data, the sector's genuinely open layers; (2) closed raw data under commercial/confidentiality licence (AIS, VMS, catch records, quota holdings) — the sector's source-data enclosure; (3) governance without open assets — CSFs and co-ops, with Canada's policy anti-enclosure layer (PIIFCAF, communal licences) as the distinctive form; (4) Indigenous jurisdiction through community-defined rules, with OCAP-in-fisheries as emerging agenda rather than operating infrastructure.

### Priority verification targets for `examples/` (follow-up pass)

1. **Global Fishing Watch** — the anchor case; verify the CC-BY-NC-4.0/Apache-2.0 split, API terms, funding, governance.
2. **sdmTMB** — the flagship Canadian open fisheries software (DFO Pacific Biological Station, GPL-3); strongest Canadian record candidate.
3. **OpenCTD** — MIT, peer-reviewed, community-built; the open marine-sensing flagship; verify OSHWA-absence and workshop replication.
4. **Monitorfish (France)** — government fisheries control on AGPL-3.0 open source; the state-operates-open-code precedent.
5. **DFO sea-lice / aquaculture open reporting** — the Canadian open-data exemplar; verify dataset licences per record and the Revie 2025 harmonization layer.
6. **Skipper Otto** — the canonical Canadian CSF; verify scale, B Corp status, governance caveat (not a co-op), and the honest absence of open assets.
7. **SS3 (CC0)** — possibly folded with sdmTMB into a stock-assessment-stack record if comparably verified.

## What this scan does not do

- It does not cycle candidate records through full verification or curate them into `examples/` — that is the follow-up pass, per house practice.
- It does not treat cooperation or community ownership alone as an open layer; ownership models are recorded with their open layers (or the honest absence of one) separately.
- It treats Indigenous fishing rights as governance substance, not as a solidarity frame; Indigenous-led data governance (OCAP applied to fisheries) is recorded where found.

## Sources

[to be completed]

Not legal advice.