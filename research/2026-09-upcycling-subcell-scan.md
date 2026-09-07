# Upcycling sub-cell scan: surplus valorization as a processing layer (G-OSA-37)

Research date: 2026-09-07
Method: targeted sub-cell under the A1 processing workstream (G-OSA-33), run as four query sets with primary-source checks against repositories and standards bodies; licences recorded from repository metadata where reachable; every candidate distinguishes published artefacts from deployed operations; honest absences documented per query set.

Register context: opened as a sub-cell of G-OSA-33 (candidate workstream A1, Processing) rather than a standalone sectoral scan, on the argument that upcycling *is* processing applied to streams the market discards. Prior coverage: grocery food-waste files (`grocery/research/food-waste.md`, `food-waste-canada.md` — retail waste opacity, diversion apps, all closed); Cargill CarVe caveat in the field guide (don't conflate branded waste portfolios with open practice); compost records (Compost for Good as the one open commercial-scale artifact, adjacent C4). Future Herd grounding: Camden Lawrence (First Nations Agriculture & Finance Ontario, episodes 9/23) names "waste diversion and what the industry calls food upcycling" as community-level innovation — imperfect produce and undersized poultry that "could feed that community."

## Scope note: two senses of "upcycling"

The industry term covers (a) **surplus redistribution** — moving edible surplus to people (the grocery food-waste layer's territory, and where most open-source activity actually is), and (b) **valorization** — processing discarded streams into new value-added product (juice from cosmetically rejected fruit, flour from spent grain, ingredients from byproducts). This sub-cell covers both, because the open-layer question differs sharply between them: redistribution is a *logistics/data* problem (open software plausible); valorization is a *process* problem (where the A1 scan's regulatory-gravity finding predicts the open layer thins).

## Sub-cell A: Surplus redistribution platforms (logistics/data layer)

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| Sharing Excess (Philadelphia nonprofit) | Food rescue at national US scale (150M+ lbs redistributed since 2018; 1,500+ partners); publicly claims "our organization, repos, and backlog are all fully open source" (Medium, dev.to, ReFED) | Software + claimed community model | **NO LICENCE FILE on either public repo** (sharingexcess/sharingexcess.com, sharingexcess/.github — GitHub API checked 2026-09-07). Public code, not legally open | candidate — the open-claim-without-licence case; the sub-cell's sharpest finding |
| Second Harvest Food Rescue App (Canada, Toronto) | Canada's largest food rescue org; app matches businesses with donees, logistics + audit tracking (Flowfinity no-code field layer) | None — **commercially licensed**: the app is offered *to other orgs as a paid licence* (secondharvest.ca/licensing) | Proprietary, licensed out | counter-example — Canadian flagship rescue infrastructure is closed and monetized |
| FoodHero (Montreal/Morin Heights, QC) | Consumer discount app for retailer fresh surplus (Sobeys, Metro, IGA; 25–60% off); operates in Canada + France | None | Proprietary | counter-example — the Canadian retail-surplus consumer layer |
| Copia (US) | B2B surplus redistribution as "disposition channel"; audit-ready records for donors | None | Proprietary | counter-example (already in grocery food-waste files as Copia) |
| 412 Food Rescue / Food Rescue Hero (Pittsburgh) | Volunteer-driver rescue platform, 50k+ volunteers; the *data layer* is becoming academically legible (RescueLens, AAAI 2026 — LLM triage on volunteer feedback, built with 412FR) | None in the platform; research outputs published but platform proprietary | Proprietary; RescueLens paper public | lead — watch whether research tooling spins out |
| GitHub food-donation / food-redistribution repos (long tail) | Dozens of student/hackathon projects (Food-Redistribution-Platform console app, food-donation topic pages) | Software, nominally | Various per-repo; quality hobby-level | documented absence — no maintained, production-grade open redistribution platform found beyond Sharing Excess |

### Honest absences (redistribution)

- No maintained, licence-bearing, production-grade open-source surplus redistribution platform exists. The most credible claimant (Sharing Excess) has no licence files; the field is proprietary platforms (Second Harvest, FoodHero, Copia, Food Rescue Hero) or unmaintained student code.
- No open data standard for surplus food listings (quantity, grade, window, food-safety handling class). Each platform's inventory schema is private; interoperability between donor ERPs and donee systems does not exist.
- No open dataset of rescue volumes at platform level in Canada; Second Harvest publishes research reports ($58B waste figure), not data.

## Sub-cell B: Valorization processing (the plant-scale question)

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| LOOP Mission (Montreal, QC) | Canada's flagship upcycled-food company: HPP-pressed juices/sodas from cosmetically rejected produce (36M+ lb upcycled); Food Waste Reduction Challenge alumnus | None — formulations, sourcing contracts, HPP process all proprietary | Proprietary | counter-example — Canadian upcycling leader is fully closed; the category's Canadian face |
| Upcycled Certified Standard (Upcycled Food Association, now administered by Where Food Comes From) | Third-party certified mark for upcycled ingredients/products; supply-chain audit required | Standard exists but **paywalled/gated certification regime**, not an open specification | Closed (certification standard, WFCF-administered) | counter-example — the category's standards layer is a certification business, like the maintenance-funding archetype predicted |
| CSA K100:26 (Canada, 2026) | First national food-loss-and-waste terminology + measurement standard; common framework for defining, measuring, monitoring FLW | Standard published by CSA Group — **purchased, not open**; consistent with the CGC-grading finding (public rules, closed artefacts) | Paid standard | curated (already in corpus via grocery; the upcycling measurement substrate, not open) |
| Pioreactor (Toronto, ON) | Open-source Raspberry Pi bioreactor platform (software MIT-verified on repo, 2026-08 active; hardware published); positioned as accessible fermentation lab | Software + hardware designs; community of food/fermentation experimenters (FlavorReactor gastronomic-science builds) | MIT (software, verified); hardware published | candidate — the only Canadian open artifact in fermentation; lab-scale, 2-3 orders below plant scale |
| Open-source bioreactor ecosystem (Open Bio Economy Lab, BIO-SPEC, Innocell, BioSamplr) | Academic open bioreactor hardware, peer-reviewed, mostly bench/lab scale; fermentation-for-valorization literature is huge but processes stay in papers | Hardware designs (published, per-paper licences) | Per-paper (various CC/GPL) | adjacent — open hardware exists in fermentation but at lab scale; nothing plant-scale, nothing food-safety-validated |
| Community canneries / collective kitchens (US tradition, Cornell Cooperative Extension, NCHFP guidance) | Shared commercial-grade processing kitchens for preserving surplus; revival documented (Civil Eats 2025) | Governance + tacit knowledge (USDA/NCHFP tested-process guidelines freely published) | Guidelines public-domain-adjacent (USDA); designs N/A | curated (governance case; the A1 pattern again — open governance, no open artifacts) |

### Honest absences (valorization)

- No open formulation or process-specification commons for upcycled food: every commercial valorization process (LOOP's HPP juice, ReGrained spent-grain flour, Upcycled Foods' ingredients) is trade-secret. The one historical open HACCP artefact in the corpus (Underground Meats, CC0) remains the field's only open food-safety document, and it is dead-hosted.
- No plant-scale open valorization equipment. Pioreactor et al. are lab-scale; the A1 scan's zero-OSHWA-processing-equipment finding extends to valorization equipment specifically.
- No open grading/cosmetic-specification dataset. The research literature confirms private retailer cosmetic specifications are a primary *manufacturing cause* of upcyclable surplus (de Menna et al. lineage; UBC case study), but the specifications themselves are trade secrets — the closed information system that produces the waste stream is not documented anywhere openly.
- Fermentation-valorization science is overwhelmingly open-access literature with closed implementation — the mirror image of A1's "open standards that stop at the plant wall": here open knowledge stops at the process door.

## Provisional resolution (three shapes)

1. **Open claims without open artefacts (redistribution).** The social-mission food-rescue sector performs openness ("fully open source") but does not produce licensed artifacts; the actual infrastructure is proprietary and, in Canada, directly monetized (Second Harvest licenses its app out; FoodHero sells retailer surplus discounts). This extends the G-OSA-36 headline to mission-driven organizations: openness as identity, not artefact.
2. **Certification as the value-capture point (valorization).** The Upcycled Certified mark and CSA K100:26 both put the standards layer behind a paywall — the upcycling economy's definitional vocabulary is itself a product. Matches the maintenance-funding archetype finding that standards bodies capture value where practices scale.
3. **The waste stream's cause is the closed artefact.** The single most consequential open artifact in this sub-cell would be open cosmetic/grading specifications — the retailer and buyer documents that manufacture upcyclable surplus. They are uniformly trade secrets. Openness in upcycling currently organizes *downstream* of the cause (rescue apps, bioreactors, certification marks), never at the grading layer where the waste is decided. The CGC grading-data record is the public-regulatory edge of the same finding.

**Relation to the A1 four shapes:** upcycling inherits shape 4 (the regulatory-validation wall) wholesale — any valorization process entering commerce faces the same inspection/HACCP validation regime — and adds a distinct finding: the category's *definitional standards* (Upcycled Certified, K100:26) are closed, so unlike processing (where EPCIS is royalty-free), upcycling's standards layer is captured from birth.

**Guest/corpus grounding:** Camden Lawrence's episodes 9/23 framing (upcycling as Indigenous community food-system innovation, feeding "that community") sits closest to the community-cannery governance shape — a live lead for the event's room, and a reminder that the grocery feedback's CARE-governed refusal pattern applies: *where surplus went and who processed it* can be culturally governed information, not publishable data.

## Verification pass (completed 2026-09-07, same day)

All five priority candidates verified against primary sources and curated into `examples/` — plus FoodMesh, added at the user's direction as a sixth record (an additional Canadian company the scan had missed):

1. **Pioreactor** — curated (pioreactor.md). MIT software verified from repo LICENSE (full text read); hardware confirmed CC BY-SA 4.0 from Pioreactor/hardware LICENSE (read 2026-09-07); open-designs index confirmed on the project forum; active (last push 2026-08-19).
2. **Sharing Excess** — archived (sharing-excess.md), the open-claim-without-licence case. GitHub API org endpoint: exactly two public repos (marketing site + org README), `"license": null` on both; Surplus platform source unpublished despite the docs site; open-source claim documented on Medium and repeated by ReFED.
3. **Second Harvest Food Rescue App** — curated (second-harvest-app.md), closed-and-monetized counter-example. Licensing page read: the charity sells licences of the app ("power scalable, branded food rescue solutions"), 226M meals self-reported since 2018.
4. **Upcycled Certified / WFCF** — curated (upcycled-certified.md). 2024 fee schedule read from WFCF's library (primary source): $250 application, $1,250 for 1–5 product reviews, $175/product/year licensing fee, $500/location chain-of-custody audit; WFCF the "exclusive source."
5. **LOOP Mission** — curated (loop-mission.md). HPP dependency confirmed (five Hiperbaric 420 machines, "biggest buy" per founders); 36M+ lb self-reported; no open component anywhere in the stack.
6. **FoodMesh / Mesh Exchange** (added on user direction) — curated (foodmesh.md). Vancouver B Corp; proprietary Salesforce-based marketplace (Traction on Demand build, Digital Technology Supercluster consortium); **Metro Vancouver contract** to run the regional food recovery network — public waste policy on closed infrastructure; Sobeys/Save-On-Foods zero-surplus delivery partner alongside Loop Resources.

Collection now 116. Verification sharpened the scan's shapes: FoodMesh adds a distinctly Canadian enclosure form — closed infrastructure winning public contracts — and the Pioreactor hardware licence (CC BY-SA 4.0) makes it the A1 layer's second fully dual-licensed open hardware platform after Grain Bikes (CC BY 4.0).

## Sources

Key primary sources read 2026-09-07: github.com/sharingexcess (+ GitHub API org repos endpoint: 2 repos, licence: null on both), github.com/Pioreactor/pioreactor (MIT badge, active Aug 2026), secondharvest.ca/licensing, upcycledfood.org/upcycled-certification, csagroup.org K100:26 store page + SCC notice of intent, loopmission.com, refed.org tech-enabled food rescue, Medium (Sharing Excess engineering post), RescueLens (AAAI-40 / arXiv 2511.15698), Civil Eats community-cannery op-ed (2025-10-01), NAL community canning centers exhibit. Register entry: G-OSA-37.

---

## What this scan does not do

- It does not cycle the five verification targets through full verification or curate them into `examples/` — follow-up pass, per house practice.
- It does not treat the grocery food-waste files as superseded; redistribution-platform detail lives there at retail depth, and this sub-cell cites rather than repeats it.

Not legal advice.
