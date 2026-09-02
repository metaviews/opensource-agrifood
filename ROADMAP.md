# Roadmap

Last reviewed: 2026-09-02. This is the single place that says where the project is, what is finished, what is open, and what comes next. It replaces the "current phase" prose that used to live in the README. Update it whenever a workstream changes state; the README only points here.

## The project in one paragraph

Open Source Agrifood is a research and knowledge-building project asking who controls the systems — hardware, data, standards, models, seeds, governance — that make up open agrifood, and who benefits. It has three workstreams that share a repository but have different tempos: the **research corpus** (records, scans, syntheses, register), the **grocery concept** (a concept-development space that stress-tests an open grocery operation against real cases), and the **event** (*Building the Open-Source Future of Canadian Agrifood*, a Future Herd spectacular event, 29 October 2026, Discord). The event is a beneficiary of the research, not its organizing purpose.

## Where each workstream stands

| Workstream | State | Authoritative doc | Last moved |
|---|---|---|---|
| Research corpus | Discovery programme complete; 84 records; synthesis v3; register at G-OSA-32 | `research/2026-08-landscape-synthesis-v3.md`, `research/field-guide-gap-and-question-register.md` | 2026-08-19 |
| Grocery concept | Research phase; 16 topic files + synthesis; novelty claim survived a searched negative; feedback transferred to parent corpus | `grocery/synthesis.md`, `grocery/research/research-mapping.md`, `grocery/research/suggested-next-targets.md` | 2026-08-28 |
| Event | Framing and agenda settled and published; date fixed; Discord server live; production and outreach not yet started | `docs/events/event-agenda.md`, `docs/events/event-design-brainstorm.md` | 2026-08-22 (site), 2026-08-05 (briefing) |
| Public site (`web/`) | Astro site at opensource.thefutureherd.ca; event page + accessible research overview | `web/src/pages/index.astro`, `web/src/pages/research.astro` | 2026-08-22 |

## Milestones

### Done

- Transfer from the Agrifood AI Field Guide bounded and completed (`research/field-guide-transfer-map.md`, `research/transfer-reset-and-next-steps.md`).
- Twelve discovery cycles + four verification passes (2026-08-01..03); programme briefing written.
- Nine further production-cell cycles (G-OSA-22..30), Chinese ecosystem deep scan, grain value chain (G-OSA-31), Nepal (G-OSA-32); landscape synthesis v3 (2026-08-14).
- Grocery concept: concept set (`concept.md`, `levels.md`, `tensions.md`, `system.md`, `internet-patterns.md`), research direction, 16 research files, synthesis of the novelty claim, feedback layer into the parent corpus (`research/grocery-feedback-2026-08.md`).
- Event: framing, four sessions, titles, date and schedule settled; agenda published on the site; stakeholder briefing #1 sent (2026-08-05); Future Herd Discord server live.

### Now (September 2026)

Event: **waiting on stakeholder feedback to briefing #1 (2026-08-05).** No briefing #2 and no production brief until that feedback arrives (decision 2026-09-02). The items below are the backlog that unblocks once it does, in rough order. Research continues meanwhile.

Event backlog (blocked on feedback):
1. Stakeholder briefing #2, incorporating the feedback received.
2. Invitation copy and outreach list. Draw first from the Future Herd guest network (`future-herd/src/_data/leaders.json`, episode files), then Canadian open-agrifood practitioners already in the corpus (Tischler, Reimer, OFN Canada, LiteFarm, UBC Farm, Sovereign Seeds, Agri-food Data Canada).
3. Production brief: facilitator run-of-show for the half day, session 3 facilitation notes (situation intro + turn + how the room is held), break/care check-in rhythm, recording plan (Craig.chat interim per the recording-bot decision), backstage roles.
4. Discord first-time experience: arrival channel, plain-language channel structure, participation paths, norms. The design constraint is stated in the brainstorm; the checklist against the live server does not yet exist.
5. Post-event commons: what stays open on the server after 29 October, and who tends it.
6. Sponsorship: the site invites sponsors; there is no sponsor brief or ask.

Research — keep the corpus honest:
7. Fold the four grocery-surfaced candidate records (Foodsoft, FoodCoopShop, Foodsharing.de, CSA K100:26) through the parent's verification pass and into `examples/`; add the seventh maintenance archetype (pooled funding circle) to `research/2026-08-maintenance-funding-profiles.md`; register the G-OSA-28 nuance. All are specified in `research/grocery-feedback-2026-08.md` and have not been acted on.
8. Consolidate the two register threads into one: the field-guide register (G-OSA, Q-OSA, C-OSA) and the grocery `suggested-next-targets.md` are separate queues with no cross-reference.

### Next (after the event, Q4 2026)

- Event follow-through: what was noticed (session 4's naming), transcripts/quotes into the Future Herd pipeline, commons stewardship, and a short honest debrief in `docs/events/`.
- Grocery: decide between the two paths named in `grocery/research-direction.md` — sharpen the concept against the research, or move toward something concrete. Remaining second-pass targets (13-20, 25-29; #2 viability papers; #9/#25/#27 Indigenous workstream; #19 community-governed feedback) are inputs to that decision, not prerequisites.
- Research: the fieldwork-bound items (G-OSA-18 farmer agency in practice, G-OSA-02 JoinData current scale, ~15 unverified maintenance statuses) need correspondence or interviews, not more web search. The event's room is the first place that correspondence can start.

### Later / tracking

- Annual re-verification of tracking items: OSSL enforcement (G-OSA-21), AGAPECert under ADC (G-OADA-02), Scottish Agriculture Data Partnership (G-DC-04), Chinese maker-media designs (G-LL-01), language-layer outcomes (G-CV-01..04).
- Landscape synthesis v4 only when a verdict changes or the grocery candidates are curated — not on a calendar.
- The "clearing house" idea (deferred in the brainstorm) stays deferred until the event shows whether anyone wants it.

## Candidate workstreams (no commitment; orientation for future work)

Assessed 2026-09-02 against the corpus. Coverage counts are file hits across `research/`, `examples/`, `grocery/`, `docs/` at that date. The grocery concept worked because it picked one node of the chain where the parent corpus was blind, asked what an operation holding all five open layers at once would look like, and produced a falsifiable claim. Candidates marked *application* share that shape; those marked *concept* deepen the frame itself rather than apply it. None is started; pick by what the event and the stakeholder feedback make load-bearing.

| # | Candidate | Type | Why | Current coverage | Nearest entry points |
|---|---|---|---|---|---|
| A1 | **Processing** — abattoirs, mills, dairy plants, cold storage at plant scale | application | Grocery's upstream twin. Where Canadian concentration is most extreme (2 firms ≈ 95% of beef processing, Episode 36) and where small producers lose access first (no local kill floor, no local mill). Open plant design, shared inspection/HACCP records, cooperative ownership, open scheduling. | slaughter/abattoir/mill appear only in passing (SAOS, WAGRI, data-coop follow-up) | mobile-abattoir movement; community mills; provincial inspection regimes; SAOS/ScotEID as the traceability precedent; grocery five-layer lens |
| A2 | **Land** — access, tenure, transfer, ownership transparency | application / concept | The first input and most concentrated asset; strongest commons history (community land trusts, Terre de Liens, Ontario Farmland Trust); open land registries and beneficial-ownership transparency; Indigenous title as material, not metaphor. Gives "who controls" its most material answer. | none (farmland/land trust: ~10 incidental hits) | Terre de Liens; Cadasta (open tenure records); Ontario Farmland Trust; Farmland Access programmes (FarmLINK, Young Agrarians); provincial land registries; Canadian beneficial-ownership registry debate |
| A3 | **Institutional procurement** — schools, hospitals, prisons, universities | application | The largest buyer many small farms will meet; opaque contracts and closed distributor catalogues; "open" meets public money (open contracting data, open menu/nutrition data, shared logistics). Grocery's five layers transfer almost directly. | 14 incidental hits, no treatment | Open Contracting Partnership; Canada's National School Food Program (2024–); Nourish (health-care food); Farm to Cafeteria Canada; OFN as ordering layer |
| A4 | **Cybersecurity and resilience** of the food system | application (short) | Session 3's fiction is a cyberattack; the corpus has nothing on it. What openness does for resilience (auditability, no single vendor of failure, forkability, local operability when the cloud is down) and what it costs (open attack surface). Lets the event stand on research. | cyber/resilience hits are the event docs and China scan only | JBS ransomware 2021; Sobeys/Empire 2022; AGCO/Deere incidents; CISA food-sector profile; Canada's Critical Infrastructure list; ISOBlue/OpenSprinkler local-operation design as positive cases |
| A5 | **Northern and remote food systems** | application | Open infrastructure tested by geography rather than capital; Nutrition North, country food, community freezers, Inuit food sovereignty; OCAP appears once in the whole corpus. Where the Canada-centred posture is most distinctive. | 9 incidental hits, no scan | Nutrition North Canada evaluations; Inuit Tapiriit Kanatami food-security strategy; Arctic Co-operatives Ltd (a real multi-layer co-op); First Nations Information Governance Centre (OCAP); community freezer programmes |
| A6 | **Aquaculture and fisheries** | application | Genuine gap; pulls the corpus wider rather than deeper, but the Canadian angle is strong (Atlantic and Pacific fisheries, Indigenous fishing rights, DFO data, salmon aquaculture controversy). Open vessel/catch data, open aquaculture monitoring hardware, community-supported fisheries. | 2 incidental hits | Global Fishing Watch (open AIS); Community Supported Fisheries (Off the Hook, Skipper Otto); DFO open data; open-source aquaculture sensing (e.g. OpenCTD); Marshall-decision fisheries governance |
| C1 | **Definition document** — what open-source agrifood is, is not, and how the layers relate | concept | Requested in `research/transfer-reset-and-next-steps.md` ("make the differences between kinds of openness legible — a core deliverable"); still does not exist as a standalone. Grocery's five-layer framework now gives it a spine. The document a newcomer, funder, or participant would actually read. | asset-by-asset discipline exists in every record; no synthesis of the *kinds* of open | `research/grocery-feedback-2026-08.md` §10 (five layers); synthesis v3 currents; `research/sources/README.md` verification labels; Sievers-Glotzbach seed-commons criteria |
| C2 | **The labour layer** — who does the work in an open system, and does openness change their position | concept | Labour is everywhere in the corpus (66 hits) as context, never as subject. Only CoopCycle/Coopyleft answers it directly. Migrant farm labour, processing-line labour, gig delivery. Open agrifood that ignores labour repeats the pattern already named for Indigenous governance. | 66 incidental hits; 1 record (CoopCycle) | CoopCycle; SAWP/TFW programme research; Migrant Workers Alliance for Change; platform-cooperativism literature; Episode 36 labour invisibility |
| C3 | **Finance and risk** — credit, insurance, crop-insurance data, price formation | concept / application | Open data here (public crop-insurance records, open price discovery, mutual/cooperative insurance) is a lever on farmer agency never examined. The grain scan flagged price formation as unverified and stopped. | ~30 incidental hits | AgriStability/AgriInsurance public data; FCC; mutual insurance history; grain price discovery (G-OSA-31 residual); FBN's pricing-transparency claim as contrast |
| C4 | **Energy and biological byproducts** — biogas, digesters, agrivoltaics, farm microgrids | application | Major farm cost and concentration point (utilities); active open-hardware layer (open digester designs, open microgrid controllers); connects to existing compost and biochar records. | none | Open Source Ecology; Solar Biogas/HomeBiogas open designs; agrivoltaics research consortia; Ontario Renewable Energy Co-ops; Kon-Tiki/compost records as adjacent |
| C5 | **Fibre and non-food agriculture** — wool, hemp, flax | application (low) | Genuine gap, low Canadian salience relative to the above; note for completeness. | 1 hit | Fibreshed movement; Canadian hemp regulatory history |

Reading the table: A1, C1, and A2 were judged highest-value on 2026-09-02 (A1 as the next grocery-sized application; C1 as overdue by the project's own plan; A2 as the largest conceptual hole in a project asking "who controls"). A4 is the shortest and most event-relevant. When one is started, move it from this table to "Now" and open a register entry or a `<topic>/` concept directory as appropriate.

## Open decisions (yours, not the roadmap's)

- Whether open-source AI is named explicitly to participants or stays implicit in the framing (brainstorm, "The purpose, stated clearly").
- Whether the grocery concept goes to "sharpen" or "build" after the event.
- Whether `examples/README.md` and `examples/catalog.md` keep being maintained as two parallel tables or collapse into one (they drift: both currently miss LiteFarm; the catalog header still says "seven examples").

## Maintenance rules for this file

- One line per state change; do not narrate.
- When a milestone moves from Now to Done, update the table's "last moved" date and the README pointer in the same commit.
- Docs that describe the past (scan docs, briefings, the brainstorm) are not edited to match this file; this file cites them.
