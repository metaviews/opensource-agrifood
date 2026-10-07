# The heat host: data-center waste heat as a CEA energy input, and where openness would enter

## Executive summary

A data center turns roughly a third of its electricity into low-grade heat and pays to push that heat into the air. A heated greenhouse in a cold climate burns fuel to stay warm. The two are increasingly neighbours, and the pairing has moved quickly from thought experiment to documented practice: two formal feasibility studies, operating installations in Norway, Sweden, the United States, the Netherlands and China, and a signed multi-party heat contract that will warm Dutch greenhouse growers.

This case asks the pairing the corpus's usual question: if this is becoming infrastructure, who controls the interface?

Four things are worth carrying out of the document:

- **The evidence sorts into three tiers.** Feasibility work is the strongest — Virginia's 2025 report and North Dakota's Legendary Harvest study. A smaller set of installations actually operates. Canada's two entries, SPUR Innovation in Ontario and Q-Scale in Québec, are announcements, not plants. Two frequently shared concepts (Helsinki Hybrid, Thermalize/Everflow) are designs only.
- **The physics decides more than the economics.** Heat grade — 30–40°C from air-cooled halls versus 45–55°C from liquid-cooled ones — plus year-round supply against seasonal demand, plus the simple fact that one data center over-supplies one greenhouse. The asymmetry that matters most: a greenhouse can absorb heat; an indoor vertical farm generates surplus heat of its own.
- **It does not rescue small northern growing.** This is a commercial and district-scale mechanism: tens of megawatts of compute beside multiple greenhouse hosts. The community-scale rung of the existing CEA case study is untouched.
- **The openness question is open by neglect, not by choice.** Every documented configuration runs on utility contracts and proprietary equipment; no one has yet had reason to publish measurement, standards or control profiles around it. Nothing in this case prices anything, and no open layer was found — but this was a source pass, not a scan, so absence is recorded as unscanned rather than proven.

| | |
|---|---|
| **Status** | Case study, framed (source pass 2026-10-07; no G-ID — this is not a scan, and absence claims are recorded as unscanned, not verified) |
| **Frame** | Waste heat as an energy-side input for controlled environment agriculture: what actually operates today, what the physics allows, and where an open layer could enter |
| **Written** | 2026-10-07; human-first second pass 2026-10-07 |

## 0. The premise

The CEA case study's pivotal unknown is energy: what heat and light actually cost a northern community greenhouse, and whether control and design can close the gap. That case treats energy as something the operator pays for or designs away. This case adds a third possibility the earlier passes did not consider: **the energy arrives as an industrial waste stream.**

A data center converts roughly a third of the electricity it consumes into heat, continuously, and pays to reject it to the atmosphere. Controlled environment agriculture needs heat continuously, in cold climates most of all, and has historically paid for it in gas, diesel or grid power. The pairing — pipe one into the other — is now documented well enough to be a case.

**The question for this corpus:** is this symbiosis forming with an open layer — published measurement, open standards for heat/host matching, forkable control that trades heat against light against power — or is it forming entirely closed, as utility contracts and proprietary heat-pump skids, adding a new closed layer on top of a sector the corpus already found closed?

The claim is **presence of a live, documented pairing, and an unverified openness question.** Nothing in this pass prices anything, and no open layer was found — but this pass was a source pass, not a G-OSA scan, so the absence is recorded as *unscanned*, per §6.

## 1. What exists, in three tiers

**1.1 Formal feasibility work — the strongest tier.**

- **Virginia, "Colocating Data Centers + Greenhouses"** (Resource Innovation Institute et al., June 2025). The most rigorous public analysis found; its findings carry this case. **verified** (primary report, govirginia3.org PDF).
  - **One data center with one greenhouse does not work.** Heat loads mismatch: data centers run year-round, greenhouse heating demand is seasonal — and even a 30–50 MW facility emits more heat than one large greenhouse can absorb.
  - **What works instead is a "Farm Park":** heat-exchange substations up to ~0.6 miles from the data center (a distance that keeps the security perimeter intact) serving multiple greenhouses, plus a CHP microgrid supplying power, heating, cooling and CO₂ enrichment.
  - **Grade decides feasibility.** Air-cooled data centers yield 30–40°C (poor for recovery); water-cooled systems yield 45–55°C (useful). Liquid cooling was projected at 38.3% of enterprises by 2026 — that share is what keeps improving the odds.
  - **The prize is large.** Regional modelling (Falk et al. 2025) estimates that all of Virginia's existing data-center waste heat could support **6,000–8,500 acres of high-tech greenhouse** — 80–120% of the state's fresh tomato demand.
- **Legendary Harvest Project** (North Dakota State University + Resource Innovation Institute + Applied Digital). A public-private feasibility study at Applied Digital's Polaris Forge 2 AI/HPC campus near Harwood, North Dakota, examining a "Farm Park" co-located with an active data center; the operator provides site access, funding and operations input. RII's second study after Virginia. **verified as announced study** (DataCenterDynamics).
- **RISE "DC-Farming"** (Sweden, Luleå). Technical and socio-economic study of locating year-round vegetable production next to data-center waste heat in a sub-Arctic climate; completed 2020-12-31. **verified as project record** (RISE project page).

**1.2 Operating installations** — reported by named sources; individual plants were not independently visited (online-open-sources constraint).

- **Green Mountain, Norway → land-based trout farm:** data-center effluent heat into aquaculture. **verified as reported** (ICEF roadmap).
- **University greenhouses:** Luleå University of Technology (Sweden) and the University of Notre Dame (US) both heat greenhouses from data centers. **verified as reported** (same roadmap).
- **Nordic district heating:** Bahnhof (Stockholm), Telia/Ericsson/Yandex into municipal heat networks; EcoDataCenter (Falun). **verified as reported** (same roadmap).
- **The Netherlands — the closest thing to a contractual model.** The Municipality of Uithoorn, a grower cooperative covering the De Kwakel–Kudelstaart region, Switch Datacenters, Greenport Aalsmeer and grid operator Liander signed a multi-party agreement for a district heat network fed by a new data center (a repurposed logistics building, SDE++ funded). The water loop is closed — no drinking-water draw — and the benefit for growers is stated plainly: decarbonize without every facility adding transformers and grid upgrades. **verified as reported** (Environment + Energy Leader).
- **China.** Tencent (Tianjin) captures server waste heat and, with heat pumps, supplies municipal hot water. **verified as reported** (ICEF roadmap). The **Huailai Project** (Zhongnong Meiya + Tsinghua University + UK process engineers) is billed as China's first AI-data-center waste-heat demonstration: heat pumps lift DC waste water to 55°C, an AI scheduler allocates it across greenhouses, residential heating and PCM phase-change storage, >75,000 GJ/yr claimed. The company claims break-even within one year. **verified as an announced demonstration; financial and output figures unverified** (company release).

**1.3 Canada — announced, not operating.**

- **SPUR Innovation (Fergus / Woolwich, Ontario):** announced June 2026 an "ecological AI data centre" with a vertical farm stacked over the server farm to harvest rising heat. The project has already moved from a 25-acre Grand River site to a 14-acre campus with a farm-to-table restaurant emphasis. **verified as an announcement; plan-stage** (Vertical Farm Daily). The site change is itself a signal — announcements drift.
- **Q-Scale (Lévis, Québec):** a data center with adjacent greenhouses on residual heat; the company claims output of 2,800 t of small fruit and 80,000 t of tomatoes per year. **verified as a claim; figures unverified** (deck that itself attributes them to the company).
- **Adjacent non-data-center precedent** — the same industrial-symbiosis pattern with a different heat source: Toundra Greenhouse at the Resolute pulp mill (heat + CO₂; 8.5 ha of a planned 34 ha agrothermic industrial park); Seacliff Energy's anaerobic digester integrated with a 300,000 ft² organic greenhouse in Leamington, Ontario; Foothill Greenhouse (3.2 MW CHP on site, with a new 1.2 MW CHP approved by the town on 2023-02-06 to serve as a grid asset). **verified as reported** (same deck). Leamington is the rung-C market of the existing CEA case study, and the surrounding numbers explain the timing: Ontario holds ~64.9% of Canada's greenhouse area (Global News), the province needs ~4,000 MW of additional electricity supply 2025–2027, and the federal government has committed $750M to expand year-round Canadian production of fruits and vegetables.

**1.4 Concept only** — recorded so they are not mistaken for evidence.

- **Helsinki Hybrid:** a 30–60 MW immersion-cooled data center "wrapped in" a vertical farm and greenhouse, up to 63 MW recovered, surplus heat for 1,000+ homes. A published design concept. **concept** (W.Media special feature).
- **Thermalize + Everflow Farms:** the source post itself states "**pre-pilot illustration, not an actual facility**". **concept, self-labelled**.

## 2. The physics, which decides everything

- **Grade.** 30–40°C (air-cooled) versus 45–55°C (water-cooled/liquid). Low-grade heat is usable only through heat pumps or very low-temperature distribution — which costs money and equipment. **verified** (Virginia report).
- **Seasonal mismatch.** Supply is constant; greenhouse heating demand peaks in winter (useful) and disappears in summer — when the greenhouse wants cooling. The report's summer options: absorption/adsorption chillers driven by the waste heat itself, plus thermal storage. **verified** (Virginia report).
- **Scale.** One data center over-supplies one greenhouse. The report's answer: district-style heat exchange with multiple hosts, or a Farm Park with a CHP microgrid. **verified** (Virginia report). A frequently repeated rule of thumb — ~1 MW of data-center thermal supports ~2–3 ha of greenhouse — traces only to SEO market-research pages in this pass: **recorded, not asserted (unverified)**.
- **The asymmetry that matters most for a CEA case study.** A *greenhouse* is a heat sink; an *indoor vertical farm* is a net heat source (LEDs dump 40–50% of their input as heat) and normally wants to shed it. So the data-center heat that serves CEA serves greenhouses and aquaculture; the vertical-farm case is narrower — dehumidification, desiccant regeneration and nutrient-solution warming. Meaningful HVAC savings, but not the headline. **verified** (DataCenterDynamics analysis; corroborated by the Virginia report's greenhouse framing).
- **CO₂.** The Farm Park's CO₂ enrichment comes from the CHP unit in the model, not from server exhaust — do not conflate the two. **verified as modelled** (Virginia report).

## 3. Why this belongs beside the CEA case study

The existing CEA case prices energy as the pivotal unknown: 700–1,200 kWh/m²/yr for cold-climate greenhouses, $435–745/m²/yr at verified Nunavut rates, control strategies worth 22–43%. This case does not change those numbers. It adds an energy-side scenario at a different rung:

- **It is a rung-C / district-scale mechanism.** The pairing needs a data center (tens of MW class) and multiple greenhouse hosts — Leamington-scale or Dutch Greenport-scale. It does **not** rescue rung B: northern communities have no data centers to spare heat from, and the report's own finding is that one DC + one greenhouse is non-functional. The case records this rather than bending the ladder: **the heat-host scenario is the commercial/district rung's energy answer, not the northern rung's.**
- **What transfers directly is the design thesis.** §4 of the CEA case argues that energy optimization is an open-layer practice — control profiles, thermal design, published measurement. The DC pairing is that thesis's strongest use case: a control layer that trades heat, light and power in real time against a free heat input is exactly the "microgrid-aware control logic" the earlier inventory named as a missing commons artifact.
- **Why the timing is Ontario-specific.** Data centers and heated greenhouses are landing in the same grid conversation: ~64.9% of Canada's greenhouse area, ~4,000 MW of new electricity demand 2025–2027, and $750M in federal money for year-round production.

## 4. Where openness would enter (the corpus's lens)

Nothing here is verified as an open layer; these are the *candidate* entries, named so a future scan can test them.

1. **Heat/host matching.** The Dutch model is a negotiated multi-party contract; the European default is district-energy monopolies plus, under the EU Energy Efficiency Directive, reporting obligations for data centers above 500 kW–1 MW. There is no open registry or standard for "source X has N MW at °C, host Y can absorb it seasonally." An open heat-exchange inventory — grade, location, seasonality, host demand curves — is the data-layer analogue of the corpus's data-cooperative finding: whoever owns that interface captures the match.
2. **Measurement, published and licence-clear.** No source in this pass reports a paired measurement: MW-thermal delivered in, kilograms of produce out, per season. The WUR AGC precedent (DOI-published grow datasets) is the model; the DC↔CEA equivalent would be a first. **The absence is unscanned, not verified** (§6, target 1).
3. **Control that trades heat against light against power.** A forkable control profile for a heat-hosted greenhouse — preheat on heat-pump COP, charge storage at night, shed light when the exchanger delivers — is the artifact the CEA case's §4 already calls for, and this pairing is its clearest economic justification. Mycodo-class control is the rung-A implementation substrate.
4. **Standards.** The Common Greenhouse Ontology (Apache-2.0, zero vendor adoption per G-OSA-22) has no waste-heat or energy-interface extension in evidence. A heat-interface vocabulary would sit on top of an adopted-but-ignored standard — or repeat the CGO adoption problem.
5. **The risk this case exists to name.** The pairing's real-world formation is utility-scale: SDE++-funded networks, EED-mandated reporting, CHP microgrids, proprietary heat-pump skids and control. Every documented configuration is closed-interface. **Openness in this pairing is absent by default rather than by rejection** — the honest status is that no one has had reason to open it yet.

## 5. What has to be true before this case claims viability

1. **One paired measurement, published.** An operating DC↔greenhouse pair reporting heat delivered (MW-h) against produce (kg) per season. Without it the pairing is engineering-credible and agronomically unquantified.
2. **An open-licensed heat-host control profile exists** (or a demonstrable Mycodo-class build carries one). This is the case's only testable openness claim.
3. **Canadian status verified past announcement.** SPUR Innovation's Woolwich campus — permits, construction, actual farm integration; Q-Scale's Lévis build. Both currently carry company claims only.
4. **The Ontario market reality.** Whether a Leamington-scale greenhouse cluster can be matched to Ontario data-center heat at all, or whether district-energy contracts (the Dutch pattern) capture the heat first. Grid and siting documents, not press releases.
5. **The seasonal-mismatch economics.** What storage or chilling is actually installed on any operating pair, and what it costs.
6. **A G-OSA-style openness check**, if the corpus wants the absence claim: repos, licences, standards activity for heat-exchange interfaces and heat-host control. This pass did not do that work.

**Who to ask** (house rule for absent evidence; deferred — online-open-sources only for now): Resource Innovation Institute (the two feasibility studies), Applied Digital's Polaris Forge 2 team, Greenport Aalsmeer / Switch Datacenters / Liander on the Uithoorn network, RISE DC-Farming authors, Q-Scale and SPUR Innovation, OMAFRA greenhouse staff, and the ICEF roadmap authors.

## 6. What this case study does not demonstrate

- **No open layer is verified here, and none is verified absent.** This was a source pass (2026-10-07), not a scan; §4's candidates are hypotheses, §5.6 is the test.
- **No operating North American data-center↔greenhouse pair was confirmed.** Every confirmed operating example is Nordic, Dutch, Chinese or academic (Norway, Sweden, US, Netherlands, China); both Canadian entries are announcements.
- **Nothing is priced.** No capital cost, no heat-price, no $/kg. The report's own economics say heat-exchange-only coupling is "economically limited" without the Farm Park's CHP — a structural finding, not a number.
- **Crypto-mining heat is excluded** (different actor class, different reliability profile); **municipal district heating as an end in itself is excluded** (not CEA); **the vertical-farm-as-heat-host asymmetry is a finding, not a sub-case** (§2).
- **Company figures are recorded as claims**: Huailai's one-year break-even, Q-Scale's 80,000 t of tomatoes, SPUR's farm-on-top design — announcement-grade, not verified.

## Sources and verification

All retrieved online 2026-10-07; the method constraint (online open sources only) is the CEA case's own, carried over.

- Virginia feasibility report (primary, carries §1.1 and §2): https://govirginia3.org/wp-content/uploads/2025/09/Colocating-Data-Centers-Greenhouses-Final-Report-June-2025.pdf
- Legendary Harvest / NDSU–RII–Applied Digital: https://www.datacenterdynamics.com/en/news/ndsu-rii-launch-study-on-data-center-heat-reuse-for-greenhouses-in-north-dakota/
- RISE DC-Farming: https://www.ri.se/en/agriculture/project/data-center-for-greenhouse-farming
- ICEF Sustainable Data Centers Roadmap, Heat Reuse chapter (Green Mountain trout farm, Luleå/Notre Dame greenhouses, Nordic district heating, Tencent Tianjin): https://icef.go.jp/wp-content/themes/icef_new/pdf/roadmap/2025/09_CHAPTER%20%E2%85%A1%20%E2%80%93%204.%20HEAT%20REUSE.pdf
- DataCenterDynamics analysis (greenhouse/vertical-farm heat asymmetry, Microsoft NL rainwater, Blockheating competition example): https://www.datacenterdynamics.com/en/analysis/server-farms-serving-farms-data-centers-and-indoor-farming/
- W.Media "from server farm to fork" (Helsinki Hybrid, concept): https://w.media/special-feature-from-server-farm-to-fork-could-data-centers-supply-produce/
- Uithoorn / Greenport Aalsmeer / Switch / Liander heat network: https://www.environmentenergyleader.com/stories/dutch-heat-network-turns-data-centers-into-grid-assets,134439
- SPUR Innovation, Ontario: https://www.verticalfarmdaily.com/article/9862101/canadian-company-wants-to-use-data-center-waste-for-vertical-farming/
- Pace University / IEEE Smart Village webinar deck (Q-Scale, Toundra, Seacliff, Foothill, Ontario grid figures): https://www.pace.edu/sites/default/files/2026-01/law-world-food-day-ieee-smart-village-webinar.pdf
- Huailai Project (company release): https://www.hctechgp.com/news/index1458.html
- Global News on Canadian indoor farming (64.9% Ontario share; $750M federal commitment): https://globalnews.ca/news/11902348/indoor-farming-canada/
- Thermalize / Everflow (self-labelled pre-pilot illustration): https://www.linkedin.com/posts/thermalize_datacenters-communitybenefit-localfood-activity-7462642891903979520-afhY
- Prior evidence from this corpus: `cea/open-climate-control-case-study.md` (energy spine, §4 design thesis), `cea/research/cold-climate-energy-readings.md`, `cea/research/energy-design-commons-inventory.md`, G-OSA-22 (open control/CGO findings), `research/2026-08-maintenance-funding-profiles.md`.
- **Source-quality note:** several market-research pages on this pairing (dataintelo, prism.sustainability-directory) are SEO-generated with internally inconsistent figures (e.g. two different greenhouse-share numbers in two reports). Not used; the ~1 MW ≈ 2–3 ha rule of thumb appears only there and is labelled unverified for that reason.

## Document status and conventions

Machine-facing notes; humans can stop at the sources above.

- **Status:** case study, framed. No G-ID: this is not a scan and does not claim corpus-grade negative findings; §6 says so explicitly.
- **Second pass (2026-10-07, human-first):** executive summary added above the status table, §1 restructured into scannable sub-bullets, long sentences tightened throughout. **No figure, provenance label, citation or claim was changed** — readability only, following the dairy case's "human-first document order" precedent.
- **Relation to the existing CEA case study:** an energy-side companion at the commercial/district rung. It does not modify the rung-B cost spine, the staged-openness ladder, or the honesty clause of `open-climate-control-case-study.md`.
- **Method constraint (carried from 2026-09-21):** online open sources only; correspondence, site visits and operator conversations are deferred; §5's who-to-ask list is the agenda for that later stage, not a work item now.
- **Provenance convention:** every figure carries **verified** (primary/named source), **unverified** (recorded, not asserted), **assumed** or **derived**. Company announcements are announcement-grade, not operating evidence. Contradictions are recorded, not averaged.
- **Next step if the corpus wants this opened properly:** a G-OSA-style scan cell for heat-exchange interfaces, heat-host control, and standards activity (§5.6), which would upgrade §4 from candidates to findings.
