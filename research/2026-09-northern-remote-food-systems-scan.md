# Northern and Remote Food Systems: the Open Layer (A5)

**Register:** G-OSA-39 · **Workstream:** A5 (northern and remote food systems — application) · **Date:** 2026-09-09

Method: broad sectoral discovery scan, five sub-cells — (1) the retail/subsidy frame (Nutrition North, northern grocers, Arctic Co-operatives), (2) country food and community infrastructure (community freezers, greenhouses, harvesting governance), (3) Indigenous data governance as the openness question (OCAP, Inuit-led platforms), (4) open technology in the northern food chain (harvest monitoring, cold chain, food-hub software), (5) the remote-resilience frame carried over from A4. Sources read inline 2026-09-09; licences verified from repositories/APIs where code exists. The scan's discipline: northern food systems are dominated by governance and policy objects (programs, co-ops, standards of care) rather than software artifacts, so "open" is assessed against the grocery five-layer lens with the ownership/data layers weighted ahead of code.

---

## Sub-cell 1: The retail/subsidy frame — a market failure with a governance layer

- **Nutrition North Canada (NNC)**: retail subsidy (freight support) to make perishable food affordable in 124 isolated northern communities; ~$360M federal spending 2012-13–2017-18 (CIRNAC Horizontal Evaluation, 2020). The evaluation and subsequent academic work (Journal of Health Economics 2023, "Pass-through of subsidies to prices under limited competition") find incomplete pass-through where retail competition is thin — the subsidy partly accrues to retailers. Program data (shipping weights, subsidy claims) is reported to government, published as aggregate statistics; claim-level retailer data is not open. The subsidy itself is *public money flowing through private, closed retail systems* — the same architecture A4 found fragile and A1 found concentrated.
- **Concentration with a twist**: the northern retail market is effectively a duopoly-plus — The North West Company and Arctic Co-operatives Ltd (with the North West Company historically dominant). The Food Secure Canada op-ed (Alexander & Thorhaug, Hill Times, 2024-09-16) supplies the comparison the corpus loves: economist Nicholas Li found North West Company profits rose significantly 2019–2023 (matching southern retail's "greedflation" pattern) while **Arctic Co-op Ltd.'s net margins and patronage dividends were stable or declining over the same period**. Same geography, same customers, opposite conduct — the co-op ownership layer did what regulation did not.
- **Arctic Co-operatives Ltd**: federation of 32+ independent member-owned multi-purpose co-ops across Nunavut, NWT, Yukon (retail, hotels, fuel, arts marketing). Its 2025 Annual Report is published as a PDF; business data is reported, not open. Governance is genuinely community-owned — many Inuit members view the co-op as "their own innovation" (Springer 2025, retail store governance in remote Indigenous communities) — but the *systems layer* (POS, inventory, ordering) is conventional proprietary retail software; no open-software layer located.

Sub-cell verdict: the strongest structural finding in the north mirrors A1/A4 — public subsidy and concentrated retail — but adds the corpus's first retail-market natural experiment: co-op vs private chain under identical conditions, with the co-op demonstrably not extracting. The open layer, again, is absent at the systems level and present only as governance.

## Sub-cell 2: Country food and community infrastructure

- **Community freezers**: documented mechanism for country-food sharing and food sovereignty (Food Security/ScienceDirect 2014, Inuit perspectives on community freezers; Canadian Geographer 2023, food programs in northern Indigenous communities). Operating examples from Nunatsiavut (NunatuKavut community freezer supplying elders) to Nunavut. These are *governance innovations* (shared harvest, elder priority) wrapped around a commodity appliance — no open layer exists or is needed at the hardware level; the open question is the sharing protocol, which is customary law, not code.
- **Northern greenhouses and cold-climate growing**: a real Canadian lineage — Kuujjuaq community greenhouse operating since 1999; the Siqiniq project (2016, OHMI Nunavik + Northern Village of Kuujjuaq + KRG, funded by Société du Plan Nord) developed a **heat re-uptake and storage system** for arctic greenhouses; Kuujjuaq's second greenhouse runs in a 40-foot shipping container since 2018. Makivvik's Pirursiivik project (Inukjuak) is building toward year-round production; Sirivik (Inukjuak, EVOQ Architecture) is a four-season solar greenhouse + community kitchen; a hydroponic container farm arrived in Inukjuak. Academic design literature exists (MDPI Sustainability 2026: community-scale solar-powered off-grid greenhouse energy systems for northern/remote locations). **No open-licensed designs located** — the thermal-engineering knowledge (Siqiniq's heat storage) is the closest thing to a public good and it circulates as reports, not replicable open documentation.
- **Harvesting governance**: Nunavut's wildlife co-management (NWMB) sets total allowable harvests using harvester data — see sub-cell 4. Country food is the majority food system; the market-food frame (subsidy, retail) covers the minority, expensive, and less healthy half. The corpus's own definitional work (C1) applies cleanly: the country-food system is already "open" in the governance sense (communal sharing rules) while the market-food system is closed in every layer but governance.

## Sub-cell 3: Indigenous data governance — where the openness question changes

This is A5's distinctive contribution to the project's "who controls" question. In the north, the dominant openness framework is **not open licensing but Indigenous data sovereignty**:

- **OCAP®** (Ownership, Control, Access, Possession — First Nations Information Governance Centre): a registered trademark of FNIGC, operating as a governance standard, not an open licence. Its stance toward "open data" is deliberately conditional: data about First Nations may be opened *by and under the authority of* the nations concerned.
- **Inuit equivalents**: ITK's National Inuit Strategy on Research (governance of research data in Inuit Nunangat) and the Inuit Nunangat Food Security Strategy (2021), which explicitly calls for national household harvesting and country-food consumption data to inform policy under Inuit authority (Senate submission 2023).
- The practical consequence for this corpus: the project's verification categories ("open data", "openly licensed") do not map one-to-one onto the north's own frameworks. A dataset that is publicly accessible but collected/managed under OCAP-style authority is *governed-open*, not *licensed-open*. The grocery method's five-layer lens still applies, but the data layer's ideal is community authority, not public licensing — an important refinement the C1 definition document anticipated but the north makes concrete.

## Sub-cell 4: Open and community technology in the northern food chain — the finds

This sub-cell produced the scan's genuine discoveries — an ecosystem of community-owned monitoring technology built on open foundations:

- **NWMB Community-Based Monitoring Network (CBMN, Nunavut, since 2012)**: recognized Nunavut harvesters record wildlife sightings, harvests, and environmental observations on hand-held computers (MESAs), synced by community data clerks into a community database; the program's stated purpose is to feed Inuit Qaujimajatuqangit into wildlife co-management (total allowable harvest decisions, Species at Risk listings). Since 2020 it has used a mobile app anyone can use (Mongabay 2020; Arctic Science paper on the program's first eight years). **The database is community-owned** — the data architecture is the open-governance story even where the software isn't licensed.
- **The software underneath: SMART (Spatial Monitoring and Reporting Tool) + CyberTracker**: SMART is explicitly **open-source, non-proprietary, freely available** (smartconservationtools.org); CyberTracker (South African non-profit, since 1997) provides free handheld data-capture software for Indigenous communities and community science. Nunavut's CBMN runs on this stack. This is the corpus's first sighting of **mature Global-South open-source software serving Canadian Indigenous food-system governance** — the direction of technology transfer is south-to-north.
- **SIKU (the Indigenous Knowledge Social Network, Arctic Eider Society)**: free mobile/web platform "by and for Indigenous Communities and Harvesters" — wildlife, ice, weather, and food observations with community-controlled visibility; Canadian Space Agency partnership (2025) for satellite-data integration. SmartICE's ice-thickness data (SmartBUOY/SmartQAMUTIK) is distributed **through SIKU** — community-controlled channels, not open-data portals. Data governance is community-defined per the platform's design; source-code licence status for the app itself not verified (site under maintenance at check; AGU abstract 2022 documents the design). SIKU is the clearest living example of *sovereignty-first* platform design: sharing is possible, opening is a community decision.
- **Harvest Food Hub (Harvest Algoma, Sault Ste. Marie — Northern Ontario)**: digital food-rescue tracking platform (tablet-based) developed in the north for food banks/resource centres, now expanding across Canada (Trillium-funded; CTV/TimminsToday 2025–26). Licence status unverified — flagged as a verification lead: if open, it is a northern-built open alternative in the G-OSA-28 logistics layer.
- **CORE-POS** (Cooperative Operational Retail Environment): GPL-2.0 (verified via GitHub API 2026-09-09: CORE-POS/IS4C, active, pushed 2026-03-09), community-run POS for co-op groceries. No Arctic Co-op deployment located — but it is the existing open artifact that *could* carry the retail layer of a community-owned northern store; relevant to both A5 and the grocery concept's software stack.

## Sub-cell 5: The remote-resilience frame (from A4)

A4's shape 3 — local operability when the cloud fails — is *the default condition* in the north, not a design aspiration: intermittent connectivity, diesel/grid fragility, long supply chains. The open-tech pattern that A4 found aspirational (local storage, offline-first, community-hosted) is survival-grade requirements in Nunavut. The north is therefore the place where the open-resilience argument is strongest: CyberTracker/CBMN's store-and-forward field data flow, community databases with local clerks, and paper fallbacks are structurally what ISOBlue/OpenSprinkler do by design. The northern food system has been *forced* into the architecture the southern open movement *chooses*.

---

## Resolution

A5 resolves provisionally into **four shapes**:

1. **Governance-open without systems-open** — the north's strongest layer is ownership and sharing governance (Arctic Co-ops' conduct under identical market conditions; community freezers' customary sharing protocols), while every retail and production system runs proprietary software. The co-op-vs-chain margin experiment is the corpus's cleanest evidence that the ownership layer alone changes conduct.
2. **Sovereignty-first data platforms** — OCAP®/NISR/INFSS define the north's openness framework: community authority over access rather than public licensing. SIKU, CBMN, and SmartICE show the working pattern: open *capability* (free tools, open-source SMART/CyberTracker stack) inside community-controlled *channels*. This refines C1: the data layer's northern ideal is governed access, not open licensing.
3. **South-to-north open-source transfer** — the northern food-monitoring stack runs on Global-South-origin open software (CyberTracker, SMART) adapted to Inuit governance — the corpus's first documented reverse-transfer pattern, and an argument that the open commons already exists for northern needs.
4. **Necessity-grade resilience** — offline-first, store-and-forward, community-hosted architecture is the northern default; the north proves (rather than proposes) the A4 resilience thesis. The remaining gap is the same as everywhere: greenhouse/energy engineering knowledge (Siqiniq heat storage) and northern retail software exist as reports and proprietary stacks, not open-licensed designs.

**Headline:** *The north already runs on the architecture the open movement aspires to — community ownership, offline-first, community-controlled data — built on open-source tools from the Global South; what it lacks is open systems in the market layer, where public subsidy flows through closed, concentrated retail.*

## Candidate records for `examples/` (follow-up verification pass)

Priority order:

1. **SIKU / Arctic Eider Society** — the sovereignty-first platform; verify governance model, licence status of app/code, scale (communities, posts).
2. **NWMB Community-Based Monitoring Network** — community-owned harvester data feeding co-management; verify SMART/CyberTracker usage and data ownership terms (Arctic Science paper).
3. **SMART conservation software** — open-source suite (verify licence text and governance; it anchors the software layer).
4. **CyberTracker** — free-software lineage for Indigenous/community monitoring (verify current licence — 2025 changes noted on WIPO/pricing pages need checking).
5. **CORE-POS** — GPL-2.0 verified; record as the open retail-layer artifact adjacent to northern co-ops and the grocery stack.
6. **Arctic Co-operatives Ltd** — governance record (no open systems; the margin-stability finding is the point; SMU case study + 2025 annual report as sources).
7. **Harvest Food Hub (Harvest Algoma)** — lead; verify licence before curating (northern-built food-logistics platform).

Suggest NOT creating records for: Nutrition North (policy program — belongs in scan prose and any future A3 procurement work), community freezers (governance practice, no artifact), Siqiniq/greenhouses (engineering reports, not open designs — but register the heat-storage report as a lead for C4 energy).

## What this scan does not do

- It does not cycle candidates into `examples/` — that is the follow-up pass, per house practice.
- It does not treat OCAP®/Inuit governance as merely a "constraint" on openness; the scan treats community authority as the northern form of the open-data ideal (the C1 refinement), while noting honestly that platform source-code licences (SIKU) remain unverified.
- It does not cover Alaska/Greenland except as SIKU's documented range.

Not legal advice.
