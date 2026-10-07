# The open climate computer: what openness would change in Canada's most closed farming sector

## Executive summary

In Leamington, Ontario, the largest greenhouse cluster in North America grows food under computers, and every one of those climate computers is proprietary. So is every one in Canada's north, where the same technology class — a controlled environment that makes a growing season instead of waiting for one — is most needed and least available. Between the backyard unit and the 40-hectare facility there is no open layer at all. This case asks what openness would change, and where on that ladder it pencils first.

Four things are worth carrying out of the document:

- **Novelty is settled in the negative; the claim is viability.** The corpus's verified scan (G-OSA-22, verified 2026-08-06) found open control software only at maker scale (Mycodo, GPL-3.0, with a peer-reviewed deployment in Bhutan), open research data that does exist (Wageningen's DOI-published Autonomous Greenhouse Challenge datasets, four editions), an open standard with zero vendor adoption (Common Greenhouse Ontology, Apache-2.0), one all-layers flagship that died (MIT OpenAg — archived, licence-unresolved), and nothing open at commercial scale at any price.
- **The protagonist is a scale ladder, not a single farm.** Three rungs: a backyard unit, a northern community greenhouse (the costed spine), a commercial facility (bounded, not claimed). The money math sits at rung B deliberately — in the North, energy and freight costs are extreme and the vendor service model outright breaks: there are no local climate-computer technicians, and a service call is measured in flights. Openness's first product there is uptime, not savings.
- **The energy numbers are real, and so is the honest gap.** Cold-climate greenhouses consume 700–1,200 kWh/m²/yr for heat and light (verified, CC BY *Applied Energy*) — $435–$745/m²/yr at Nunavut's verified 62.08¢/kWh commercial rate — while peer-reviewed control strategies save 17.7–43% and a documented Kuujjuaq thermal store raised its night temperature floor ~7°C (Piché et al. 2020). The gap: no northern community greenhouse has published its own kWh/kg, and the Kuujjuaq design sits in a paywalled paper — open by publication is not open by licence.
- **The funding precedent exists in miniature.** Inuvik's community greenhouse has run cost-recovery since 1999 (174 plots at $50/year), Kuujjuaq has run 20+ years on regional-government funding, and Nutrition North already spends roughly $2.84/kg (derived) subsidizing imported produce — public money is already in the northern food system; the open question is whether it can fund shared growing infrastructure instead of freight.

What has to be true first: the energy model and energy-design commons from published sources, Mycodo beyond maker scale, and one real price (§8). Nothing in this case is priced yet — the cost spine is a provenance-labelled list of research targets, and the claim is framed, not secured.

| | |
|---|---|
| **Status** | Premise document (viability case study, framed; cost spine is a research direction, not a result) |
| **Frame** | A three-rung scale ladder — backyard unit, northern community greenhouse, commercial facility — costed at rung B |
| **Written** | 2026-09-21; executive summary added 2026-10-07 (readability only) |

## 0. The premise

In Leamington, Ontario, the largest greenhouse cluster in North America grows food under computers. Every one of those climate computers is proprietary. So is every one in Canada's north, where the same technology class — a controlled environment that makes a growing season instead of waiting for one — is most needed and least available. Between the backyard unit and the 40-hectare facility there is no open layer at all.

The corpus's verified scan finding (G-OSA-22, scanned and verified 2026-08-06) is stark: open control software exists only at maker scale (Mycodo, GPL-3.0, actively maintained, with a peer-reviewed deployment in Bhutan hydroponics); open research data exists (Wageningen's Autonomous Greenhouse Challenge datasets, DOI-published across four editions); an open data standard exists but has zero vendor adoption (Common Greenhouse Ontology, Apache-2.0, 0 stars); the one all-layers flagship (MIT OpenAg) is archived, licence-unresolved, and publicly discredited; and no open layer touches commercial climate control at any price point. Vendor "open architecture" claims (Priva) are interface-open and licence-closed (C-OSA-06).

**If the greenhouse climate-control stack were open (control software, sensor/actuator interfaces, data layer), what would change, and where on the ladder from backyard to facility does openness pencil first?**

The claim is **viability, not novelty.** Novelty is settled in the negative by the scan. The forward question is what an open control layer would take, who it serves first, and what has to be true before a community or a grower bets on it.

The case's structural difference from the dairy case study is deliberate and stated up front: **the protagonist is a scale ladder, not a single farm.** CEA is the one agrifood technology whose unit spans a kitchen counter and a 40-hectare facility, and the scan's finding maps directly onto that span: openness verified at the bottom rung, absent at the top. Openness that works at rung A but not rung C is not a footnote; it is the finding that motivates the case, because it says the missing layer is scale-bridging infrastructure, not invention.

## 1. The ladder the case is done against

**Rung A — backyard / maker unit (cited, not costed).** Mycodo-class control on commodity Raspberry Pi hardware, local data by design, documented deployments in real hydroponic structures (Penjor et al. 2022, Bhutan ARDC-Wengkhar, 8+ months in NFT/DWC/vertical towers). Openness is verified at this rung; the question is what it teaches the rungs above it.

**Rung B — community-scale greenhouse in a northern Canadian community (the costed spine).** Roughly 100–500 m² of enclosed growing in a Nunavut, Nunavik, or NWT community, producing fresh greens for local consumption, powered by diesel or a community microgrid, operated by community members. The precedent lineage is documented in the corpus (G-OSA-39): the Nunavik greenhouse lineage including the Siqiniq heat-storage project (1999 onward), community freezer programmes, and Arctic Co-operatives as the distribution and governance backbone. Deliberately aligned with community operation, not entrepreneur operation.

**Rung C — commercial facility (the untested ceiling).** Leamington-grade: proprietary climate computers (Priva, Hoogendoorn), closed data platforms (LetsGrow.com and peers), lighting-as-a-service (Sollum, Signify). The scan found no open layer here. **This case does not claim an open Priva competitor.** It records what would have to be true — standard adoption, service economics, integrator capacity — for rung C to become reachable, and treats the rung as the direction of travel, not the deliverable.

Why the money math is done at rung B: in the North, energy and freight costs are extreme, and the vendor service model breaks — there are no local climate-computer technicians, and a service call is measured in flights. Local operability and repairability shift from preference to survival feature. (Verified as structure from the northern scan; every dollar figure attached to this claim is a research target, below.)

## 2. The cost spine as it stands (proprietary path)

Every figure carries the corpus provenance convention: **verified** (primary source named in Sources), **unverified** (recorded, not asserted), **assumed** (the case's own supposition), or **derived**.

| Item | Figure | Provenance |
|---|---|---|
| Commercial climate computer + installation | No public pricing; Priva and Hoogendoorn publish none | **unverified**; the opacity is itself a finding (the dairy pattern repeats) |
| Remote monitoring / data platform subscriptions (LetsGrow.com et al.) | No public per-facility figure | **unverified** as cost; the structure (closed data behind interface-friendly platforms) is **verified** (C-OSA-06) |
| Sensor/actuator hardware | Commodity, Raspberry Pi-class; per-node cost roughly $50–$300 | **verified as market structure** (Mycodo runs commodity hardware); per-installation BOM **unverified** |
| Lighting-as-a-service | Subscription (Sollum, Signify); no open analogue found at any scale | **verified as structure**, **unverified** as cost |
| Energy: heat + light | **Price verified**: Nunavut electricity 62.08 ¢/kWh commercial, 74.94 ¢/kWh residential (QEC, Oct 2023). **Consumption range verified for cold-climate greenhouses**: 700–1,200 kWh/m²/yr heating + lighting (Trépanier et al. 2025, *Applied Energy*, CC BY) → derived $435–$745/m²/yr at the commercial rate; thermal screens alone worth 17.7–26.5% (verified) ≈ $77–$198/m²/yr. **Rung-B-specific consumption still unmeasured** (a passive-solar dome running seasonally should sit far below the range; the honest gap). Piché et al. 2020: a Kuujjuaq rock-bed thermal store raised the night temperature floor by ~7°C and stored 6.2–10.6% of daily solar energy — verified via an open citing paper | Prices **verified** (QEC; checked 2026-09-21); range **verified** (CC BY); rung-B figure **unmeasured**; see `research/northern-energy-model.md`, `research/energy-design-commons-inventory.md`, `research/cold-climate-energy-readings.md` |
| Community greenhouse capital | **Verified as reported**: Naujaat dome $164,000 (Eyeopener, 2015); >$250,000 total raised by 2016 (CBC) ≈ derived $1,270/m² for the ~129 m² dome, upper-bound cash (excludes volunteer labour); Inuvik's 1999 arena conversion and Iqaluit's 1,000 ft² facility show the range of the form | **verified as reported figures** (Lamalice et al. 2018; CBC; Eyeopener); per-m² conversion **derived** |
| Open control software (Mycodo) | $0 licence; commodity hardware; maintenance is volunteer maintainer labour | **verified as structure**; the labour pricing question is §5 |

**The recurring-stream thesis transfers from dairy, but the North adds a second lever.** Where revenue is capped and costs extreme, the opaque recurring stream (service contracts, data platforms) is the cost lever, as in dairy. But northern CEA adds **availability**: a proprietary climate computer that fails at −40°C in February is not an expensive inconvenience, it is a crop loss with no service call for weeks. Openness's first product at rung B is uptime, not savings. (The resilience principle is verified in the corpus's cybersecurity scan — local operability is the proven open design pattern, ISOBlue — but the specific failure-mode claim for northern greenhouses needs case evidence: research target #4.)

## 3. What openness changes, mechanism by mechanism

**3.1 Control stays local.** Open control on local hardware has no cloud dependency: no outage, no subscription lapse, no end-of-life server can stop the fans. This is the ISOBlue principle (data and control on the farmer's device by design) transplanted from tractors to greenhouses, and in the North it is the difference between a tool and a liability.

**3.2 The service relationship becomes contestable — or becomes local.** Where no vendor technician will ever visit, the proprietary service model is not expensive, it is absent. Open control, documented protocols, and community-repairable commodity hardware let the operator, a regional co-op technician, or a visiting tradesperson be the service layer. The skills travel: a person who can service a community freezer can learn an open climate controller.

**3.3 The data layer stays with the community.** Grow data, energy data, and harvest data are the community's. This is where the case must be most careful: in northern and Indigenous contexts, data governance is jurisdiction, not licence (the land scan's OCAP principle). Openness-as-publication is not the goal; the open layer is the *capability* — community-held data in community-readable, standard-formatted (CGO-shaped) form, portable and sovereign, published or not at the community's discretion.

**3.4 One codebase, every scale.** The backyard-to-facility span is the case's distinctive mechanism. A grower who learns open control on a kitchen unit carries the same skill into a community greenhouse; a technician who services one can service all; a config written for one community's microgrid can be forked by the next. Vendor training builds integrator credentials; open control builds a commons of transferable skill. (This is L'Atelier Paysan's self-build training logic applied to controlled environment.)

**3.5 Diversity and responsiveness.** The closed commercial stack is built to serve the big homogeneous facility growing the same crop the same way. An open control layer lowers the entry cost of growing something unusual, somewhere new, at some other scale — a school unit, a hamlet greenhouse, a specialty crop trial. The dairy case argued openness in a sector designed to be identical; CEA's unmet promise is the opposite: variety. Openness is the enabler of the long tail.

**3.6 Standard, not silo.** The Common Greenhouse Ontology exists, is Apache-2.0, and has zero vendor adoption. An open-standard data layer would make grow data portable between facilities, between communities, and into research (the WUR AGC datasets show what published grow data enables). Adoption is the open question, and it is institutional, not technical.

## 4. The northern enablement

CEA in the North is usually framed as a food-security intervention fighting freight costs and a short season. The corpus adds the openness frame: the North is where the closed CEA model works worst (no technicians, no service economy, no margin for downtime) and where the open model works best (commodity hardware, local repair, community operation, microgrid-aware control logic that can trade heat, light, and power in real time).

But the deeper correction to the usual framing, and the case's design thesis: **energy is not only the constraint; energy optimization is a design practice, and design is part of the open layer.** The closed CEA model treats energy as the operator's problem to pay for; the open model treats it as a design problem the commons solves together. Concretely:

- **Control is the energy lever.** Most of a greenhouse's energy waste is control waste: over-lighting, loose setpoints, heating and lighting fighting each other, no scheduling against peak power, no thermal-mass management. These are control-logic problems, and the open layer (Mycodo-class scheduling, PID and conditional logic on commodity hardware; forkable control profiles per climate zone) is precisely the artifact that carries them.
- **Design concepts are commons-able.** Passive and semi-passive northern greenhouse design — thermal mass, heat storage, insulation shutters, seasonal light strategy — has a documented lineage in the corpus (the Nunavik Siqiniq heat-storage work, 1999 onward, G-OSA-39) and in the wider open-design tradition (the corpus's compost, biochar and solar-dryer design commons). Open-published greenhouse *designs and control profiles* are the same artifact class as the Kon-Tiki kiln: a design commons others can build on.
- **Open data makes optimization cumulative.** The WUR Autonomous Greenhouse Challenge datasets (four DOI-published editions of grow-and-climate timeseries) are the seed of an evidence base for which control strategies actually cut kWh per kilogram. A closed vendor learns this from its own silo; an open commons learns it from everyone's. Energy performance becomes a forkable, comparable, improvable asset — the grower in one community inherits the winter profile of the last.

So the case's energy question has two halves, and both are now substantially answered online: what a cold-climate greenhouse costs to run — 700–1,200 kWh/m²/yr heating and lighting, verified in a CC BY *Applied Energy* study, worth $435–$745/m²/yr at Nunavut's verified commercial rate — and what energy-optimizing design and control assets exist in the open record: peer-reviewed control-strategy savings of 17.7–43%, two documented northern thermal builds, and off-the-shelf open metering. The measured northern data point exists too: Piché et al. (2020, *Solar Energy*) built a rock-bed thermal store in the Kuujjuaq cooperative greenhouse that raised the night temperature floor by about 7°C and stored 6.2–10.6% of daily solar energy. The energy math may still fail for a given design — the honest gap is that no northern community greenhouse has published its own kWh/kg — but the counter-move is now demonstrated, not hypothetical: measured design+control effects at this magnitude, against a price-verified 10–15× electricity premium, are the difference between a greenhouse that closes and one that carries through winter. And the sharpest finding of the second pass: the Kuujjuaq design is documented in a paywalled paper. Open by publication is not open by licence. The next community cannot build from the abstract.

## 5. Culture and labour (load-bearing, not add-ons)

**Culture / jurisdiction.** The community's data is governed by OCAP principles where applicable; the case's "open data" rung means capability and community control, never default publication. Where the community is Inuit or First Nations, the frame is jurisdiction and consent, and the case's staged ladder must be read through that lens rather than through an open-source licence alone.

**Labour.** Rung B needs a grower-operator: a real, teachable, locally valuable role. Open control makes the skill portable, the documentation teachable, and the operator's knowledge an asset that stays in the community instead of leaving with an integrator. The flip side is the corpus's own fragility finding (G-OSA-36 and the maintenance-funding profiles): Mycodo is volunteer-maintained, and an open CEA commons that wants a maintainer must budget for the maintainer, not just the greenhouse. The pooled funding circle archetype is the observed fix.

## 6. Staged openness ladder (scale-aware)

| Stage | What | Cost | Who benefits | What breaks |
|---|---|---|---|---|
| 0. Closed but honest | Never describe a system as open source while publishing nothing | — | — | The corpus's counter-examples (a rescue nonprofit claiming "fully open source" with `license: null`; OpenAg's claimed-but-unresolved licences; OpenGrowBox's non-commercial "open") |
| 1. Open data capability | Community-held grow data in CGO-shaped, exportable form | Low; software only | The community first; research second | Nothing at this scale; value multiplies only when several communities share |
| 2. Open control on commodity hardware | Mycodo-class control, documented sensor interfaces, local operation | Low–moderate | Rung A and B operators immediately | Vendor support absence; the operator carries the learning curve |
| 3. The shared fleet | One open control profile, maintained and versioned across community greenhouses; shared configs per crop and per microgrid | Moderate; **only pays once several operators share** (the scale-dependent economic claim) | All rung B operators; the maintainer (funded) | Maintainer funding; profile drift between communities |
| 4. Open hardware designs | Sensor/actuator designs, OSHWA-class | High | Rung C aspirants | The reliability-engineering wall (FarmBot/open ≠ cheap finding); dropped rung candidate, §7 |

Funding question, recorded honestly: dairy's answer was the sector check-off; the northern analogue now has verified precedents and a fiscal comparator instead of a hypothesis. Inuvik's community greenhouse has run a cost-recovery architecture since 1999 (174 plots at $50/year plus a commercial second floor whose sales offset operating costs); Kuujjuaq's project has run 20+ years on Kativik Regional Government funding. And the comparator for any levy: Nutrition North already spends roughly $2.84/kg in permanent subsidy on imported fruits and vegetables (derived: $21M ÷ 7.4M kg, 2016). Public money is already in the northern food system — the question is whether it can fund shared growing infrastructure instead of freight. Whether a board, a regional government, or a federal programme will fund shared control infrastructure rather than facilities is an institutional question, not a technical one.

## 7. The honesty clause

Named in advance, per the discipline: if the numbers demand a dropped rung, it will be **Stage 4, open hardware.** The case concedes commodity-closed sensors under open control and community-held data before it concedes the control software or the data jurisdiction. The control layer and the community's data are the rungs this case does not drop, because §3.1 and §3.3 are where rung-B value concentrates, and OpenAg is the standing warning that all-three-layers ambition is how the flagship died. A narrow honest open layer beats a broad claimed one. The dropped rung, if dropped, gets published.

## 8. What has to be true before this claims viability

1. **The energy model, from published sources.** A verified operating-cost picture for a northern community greenhouse — heat and light kWh, diesel or renewable cost per kilogram of greens — assembled from online open sources: peer-reviewed and extension literature on high-latitude CEA energy, published community-greenhouse project records, territorial energy-cost data. Without it the case is a software argument in search of a furnace.
2. **The energy-design commons, inventoried.** What energy-optimizing design and control assets already exist online: open control strategies for low-energy greenhouse operation, published northern greenhouse thermal designs (the Siqiniq lineage and successors), microgrid-aware control work, and the usable energy content of the WUR open datasets. The case's design thesis (§4) lives or dies on what this inventory actually finds.
3. **Mycodo beyond maker.** At least one documented community-scale deployment running more than a year (the Bhutan deployment is research-scale; scaling evidence is a named gap in G-OSA-22).
4. **One real price.** At least one verified climate-computer quote, service contract, or data-platform fee for a small facility. The opacity is the finding, but the case needs one transaction data point to size the stream it attacks.
5. **The failure-mode evidence.** Documented cases of proprietary CEA control failing in remote operation (cloud outage, end-of-life, service latency) to ground the availability claim beyond analogy.
6. **A host.** One northern community organisation, co-operative, or research station willing to host a Stage 2–3 pilot.
7. **The regulatory envelope is small.** Greens for community consumption: confirm the food-safety obligations at this scale and jurisdiction (SFC intra-territorial carve-outs and territorial public-health rules; named, not analysed — not legal advice).

## 9. What this case study does not demonstrate

- **No open commercial-scale CEA control exists.** The scan's negative finding stands; this case does not claim one is imminent and does not attempt rung C.
- **Nothing is priced.** The cost spine is a list of research targets with provenance labels, not a model. The claim is framed, not secured.
- Lighting is excluded (no open layer exists at any scale); vertical farms and mushroom CEA are excluded as separate sub-sectors; crop choice is excluded (leafy greens and tomatoes as the working crops, matching the WUR datasets and the northern lineage).
- The jurisdiction question (which territory hosts the pilot) is open and deliberately so; the case prices nothing until one is chosen.
- **Who to ask** (the house rule for absent evidence): the Nunavik greenhouse projects and their operators, Arctic Co-operatives, the Mycodo maintainer (Kyle Gabriel), WUR greenhouse horticulture (Silke Hemming's group), TNO on CGO adoption, the Bhutan ARDC deployment team, Greenhouse Canada and OMAFRA greenhouse staff, and northern community-futures and territorial agriculture programmes. **Deferred:** the project's current stage is online-open-sources only, so this list is the correspondence agenda for when fieldwork opens, not a work item now.

## Sources and verification

- G-OSA-22 scan: `research/2026-08-greenhouse-cea-open-automation-scan.md` and vendor pass `research/2026-08-greenhouse-cea-vendor-open-programmes.md` (open control/data/standard layers, OpenAg failure case, licence traps; records `mycodo.md` curated, `openag-food-computer.md`, `common-greenhouse-ontology.md`, `wageningen-agc-datasets.md` candidates). Last checked 2026-08-06.
- G-OSA-39 northern/remote scan: `research/2026-09-northern-remote-food-systems-scan.md` (Nunavik greenhouse lineage, community freezers, Arctic Co-operatives, OCAP frame, SIKU data sovereignty). Last checked 2026-09-09.
- G-OSA-36 labour-layer scan: `research/2026-09-labour-layer-scan.md` (maintainer fragility, pooled funding circle). Last checked 2026-09-07.
- G-OSA-38 cybersecurity scan: `research/2026-09-cybersecurity-resilience-scan.md` (local operability as the proven open design pattern; ISOBlue). Last checked 2026-09-09.
- Land scan (G-OSA-35): OCAP as the appropriate data-governance frame in Indigenous contexts. Last checked 2026-09-04.
- Definition document: `research/2026-09-definition-of-open-agrifood.md` (five operational layers; the control/funding/value-capture test).
- National Food Security Strategy: Controlled Environment Agriculture named as a target sector (agriculture.canada.ca, read 2026-09-21).
- Maintenance-funding profiles: `research/2026-08-maintenance-funding-profiles.md` (six archetypes plus the pooled funding circle).

## Document status and conventions

Machine-facing notes; humans can stop at the sources above.

- **Status:** premise document, viability-framed (not a scan; no G-ID). The dairy case study (`dairy/open-milking-robot-case-study.md`) is the structural template; this case's deliberate difference is the scale-ladder protagonist, stated in §0.
- **Method constraint (user direction, 2026-09-21):** all case research is limited to online open sources, per the project's larger methodology. Correspondence, site visits, and pilot-host conversations are deferred; the §9 who-to-ask list is the agenda for that later stage, not a work item now.
- **Frame:** three rungs; costed spine at rung B (northern community greenhouse); rung C bounded, not claimed.
- **Prior evidence:** the G-OSA-22 and G-OSA-39 scans and their curated records are cited, not re-scanned.
- **Provenance convention:** every figure carries a label — **verified**, **unverified**, **assumed**, or **derived**. Contradictions are recorded, not averaged. §8 states what has to be true before the case claims viability; §9 states what it does not demonstrate.
