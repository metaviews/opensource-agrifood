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

Event work dominates because the date is fixed. Research continues at a lower tempo.

Event — eight weeks out:
1. Stakeholder briefing #2. Briefing #1 promised a follow-up "within two to three weeks" after Discord setup, role-play design, and scheduling; all three are done and the update is a month overdue.
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

## Open decisions (yours, not the roadmap's)

- Whether open-source AI is named explicitly to participants or stays implicit in the framing (brainstorm, "The purpose, stated clearly").
- Whether the grocery concept goes to "sharpen" or "build" after the event.
- Whether `examples/README.md` and `examples/catalog.md` keep being maintained as two parallel tables or collapse into one (they drift: both currently miss LiteFarm; the catalog header still says "seven examples").

## Maintenance rules for this file

- One line per state change; do not narrate.
- When a milestone moves from Now to Done, update the table's "last moved" date and the README pointer in the same commit.
- Docs that describe the past (scan docs, briefings, the brainstorm) are not edited to match this file; this file cites them.
