# Feedback: grocery project findings into the opensource-agrifood landscape

Research date: 2026-08-28
Source: `grocery/` (self-contained concept-development project, 16 research
files). This document feeds back what is relevant to the parent project's
research corpus — its landscape synthesis (v3), its currents, its
maintenance-archetype taxonomy, its contested-claims ledger, and its
Canada-centred convention. Nothing here modifies `grocery/`; this is a
one-way transfer with provenance.

---

## 1. The consumer/retail end of the chain is the open layer's blind side

The parent's landscape synthesis (v3, 79 records) maps the agronomic arc —
inputs through production, post-harvest, logistics — and G-OSA-28 reaches
short-chain distribution. The grocery project extends the map one step
further, to the **retail operation and the eater**, and finds a structural
shape the parent's corpus has not yet recorded:

**Food has been opened at the data level, almost never at the operation,
participation, or culture level.** Open Food Facts (data commons, works at
scale), DFC v2.0.0 (interoperability plumbing, real), FLW Standard /
ReFED / CSA K100 (measurement languages, mature) — while every
consumer-facing surface (what the eater can see, do with, and contribute
to) is thin, marketing-shaped, or absent. The parent's headline finding —
open viability across decentralized interventions, hard enclosure walls at
capital-intensive control — has a downstream twin: **the retail operation
is an enclosure wall of a different kind: an information-and-participation
wall, not a capital wall.** The five chains/80% retail concentration the
Future Herd corpus documents is the economic form; the thin eater-facing
layer is its informational form.

Suggested use: a v4 synthesis could add a consumption/retail cell
(G-OSA-31 candidate) and a structural observation — the open layer's
frontier is now eater-facing, not farm-facing.

## 2. New candidate records the parent corpus does not hold

The parent holds OFN and CoopCycle in Current 4. The grocery research
surfaced four further free-software/infrastructure items that qualify:

| Candidate | What it is | License | Status | Fits current |
|---|---|---|---|---|
| **Foodsoft** | Member-work co-op operating system (catalog, ordering, accounting, job scheduling); dozens of co-ops; Co-op Cloud recipe exists | AGPL-class (GPL family) | Active (commit Aug 2026); maintenance thin — runs on "a server in one member's closet" at Biobulkbende Rotterdam | Current 4 (commons governance); also maintenance archetype data |
| **FoodCoopShop** | Producer-direct ordering for food co-ops/farm shops (producer logins, delivery rhythms, credit/deposit system) | AGPL-3.0 | Very active, single-developer open-core (Austria), v4.2 Mar 2026, DACH deployment map | Current 3 (open-core + paid services — the maintainer sells installation/support) |
| **Foodsharing.de** | Movement platform for peer-to-peer and business food rescue (Fairteiler shelves, trained-foodsaver collection, city partnerships) | MIT (per Wikipedia snapshot; verify against repo) | Active, 500K+ users DACH+, own devdocs | Current 4; unique as an open-source *waste* coordination layer |
| **CSA K100:26** | First national food-loss-and-waste terminology/measurement standard (Canada, April 2026; define-measure-reduce) | Standard (paywalled text) | Published; CSA advocating regulatory adoption | Data-infrastructure/standards scope — the retail-side counterpart to the parent's farm data standards (AgData, WAGRI, OADA) |

Each would need the parent's verification pass before curation; these are
candidate records with provenance (`grocery/research/open-source-software-stack.md`,
`grocery/research/food-waste-canada.md`), not verified records.

Verification outcome (parent pass, 2026-09-02): all four confirmed.
Foodsoft AGPL-3.0-or-later, curated (examples/records/foodsoft.md);
FoodCoopShop AGPL-3.0, curated, single-maintainer ~98.5% of commits
(examples/records/foodcoopshop.md); **Foodsharing.de licence corrected:
MIT claim was wrong — repository LICENSE is AGPL-3.0; the MIT attribution
traced to an unrelated mobile app (raph-ael/foodsharing)**, curated
(examples/records/foodsharing.md); CSA K100:26 confirmed as National
Standard of Canada (Domestic), published May 2026, 35 pages, paywalled
with Canada-only view access, curated as candidate
(examples/records/csa-k100-26.md). CSA publication date corrected:
April 2026 claim → CSA news release dated 2026-05-12 (first edition,
35 pages).

## 3. A new maintenance archetype: the pooled funding circle

The parent's maintenance taxonomy (G-OSA-08) has six archetypes. The
grocery research documents a live instance of a **seventh: the pooled
co-funding circle** — many small co-operatives each contributing modest
amounts to fund dedicated maintenance of shared tooling. The Democratic
Tech Fund's Foodsoft circle reports **50-60 food co-ops willing to
co-fund** a maintenance team; Co-op Cloud's deployment-recipe commons is
the complementary infrastructure practice (packaging + shared ops so no
operator reinvents deployment).

This archetype matters to the parent's durability question: it is the
organizational answer to the "volunteer/community" archetype's chronic
fragility (11 records), and its mechanism (co-ops funding their own
infrastructure commons) has no farm-side instance yet in the corpus — the
closest analogues are NAPDC (coop data governance) and farmOS donation +
hosting. Suggested use: add to the taxonomy with Biobulkbende/Foodsoft as
the anchor case, provenance `grocery/research/open-source-software-stack.md`.

## 4. The software mirrors the landscape — a methodological finding

Mapping the concept's five open levels (sourcing, information, culture,
participation, structure) onto the free-software stack produced an exact
correspondence: structure-layer tools (Foodsoft, job scheduling,
accounting) are mature; data-layer plumbing (OFN/DFC) is building; and
the information/participation/culture layers **have no free-software
implementations anywhere** — because no operation has ever needed them.

This is a transferable methodological instrument: **inventory the software
commons along an operation's informational layers, and the empty layers
identify where the frontier is.** The parent's gap-analysis practice
(gap queues, absence findings) works at the record level; this works at
the layer level, and could be applied to other cells (e.g., is there free
software for on-farm *labour* governance? for seed *culture*?).

## 5. Refusals as an open-governance instrument

The parent's corpus treats openness as the thing being built. The grocery
research documents a recurring complementary pattern: **deliberate
non-openness as a governance instrument inside open systems.**

- CoopCycle's Coopyleft — already in the parent's Current 4 — is the
  software form: open code, license restricted to co-operatives.
- CARE principles applied to operational data (the grocery finding:
  where surplus food went, and to whom, can be culturally governed
  information; diversion data is governed data).
- The sacred/not-for-sale boundary from Indigenous food sovereignty:
  some food and food knowledge is not a commodity at any lifecycle
  stage, including end-of-life — so an open system must include
  categories it refuses to expose.
- Landare's no-advertising discipline and no-external-capital rule:
  deliberate self-limitation as structural protection.

Suggested use: the contested-claims ledger and any future synthesis could
register "openness with refusals" as a design pattern — the open layer's
strongest anti-capture instruments are limits it sets on itself. This
connects the parent's existing CARE/fairness threads (Indigenous data
governance is already in scope) to concrete operational practice.

## 6. Economics: margin-justice and the 80/20 split — consumer-side
counterparts to value-capture findings

The parent's G-OSA-28 frames the short-chain layer's value proposition as
avoiding 20-35% platform tolls. The grocery research adds the retail
operation's own economics, with two transferable facts:

- **Fixed-margin policy as producer-side justice**: the Spanish CSN
  supermarkets run one or 2-3 fixed margins (~20-25%) on all products,
  explicitly rejecting Big Retail's margin-compensation policy (high
  margins on staples subsidizing below-cost traffic drivers) "for
  reasons of fairness in the value chain." Margin simplicity is a
  fairness mechanism, not a disclosure feature.
- **Landare's 80/20 rule**: 80% of sale price to producers, 20% to
  management — stated as policy, 30+ years in force, at city scale
  (2,600-3,600 members), with no external capital ever. The existence
  proof that viability-with-values holds at retail scale.

Suggested use: a v4 currents synthesis could note that the open layer's
value-capture story now extends through the retail margin: the open
economics are visible in the margin structure, and the strongest cases
(CSN, Landare) are consumer co-ops that make their margin structure a
justice commitment.

## 7. The participation-viability tension, quantified

The parent's corpus carries the co-op participation question qualitatively.
The grocery research adds numbers and a documented failure:

- **La Osa (Madrid)**: 3 years to break even; members must spend ~150€/
  month for the operation to cover costs; only 22.5% reach it; membership
  decays with driving time (r=-0.98); 92.6% satisfaction coexists with
  weak economic commitment. Mandatory shifts enjoyed by 71%.
- **The People's Supermarket (London)**: a 6-year longitudinal study
  (Muñoz et al., Business & Society 2024) documents volunteering — the
  model's core — decaying under commercial pressure, ethical aims made
  secondary to survive, community decisions vetoed by founders.
- **Landare**: the counterexample — 30+ years of practiced reflexivity
  ("we are not afraid to admit when we make mistakes"), growth without
  advertising, values intact at scale.

Suggested use: these three cases give the parent's platform-cooperativism
current its first quantified viability-and-failure evidence on the
consumer side. TPS belongs in the contested-claims/failure ledger the way
L'Atelier Paysan does on the hardware side.

## 8. Canada-centred additions

Per the corpus's home-jurisdiction convention, the grocery research adds
Canadian items the parent does not hold:

- **CSA K100:26** (see §2) — the national FLW measurement standard; the
  retail-side counterpart to AAFC's Holos in the parent's institutional
  archetype.
- **Provincial organics regulation patchwork**: Nova Scotia's 1997/98
  ban (first in Canada, ~30 years operating), Ontario's IC&I targets and
  300 kg/week audit expectations, BC regional bans, Québec's policy +
  2016 aesthetic-standards repeal; no federal mandate; donor liability
  protection in every province; farm-donation tax credits in four.
- **Flashfood** (Canadian-founded, live in 900+ Loblaw stores, 21M lb
  diverted in 2025 — self-reported): the proprietary discount-diversion
  channel, i.e., the closed counterpart to the open coordination layer.
- **Second Harvest / FoodRescue.ca, Food Banks Canada retail programs**:
  the charity-mediated diversion infrastructure, chain-proprietary in its
  dominant form — the fragmentation caution runs through the five
  concentrated chains.

Provenance: `grocery/research/food-waste-canada.md`,
`grocery/research/canadian-co-op-survey.md`.

## 9. A correction/nuance for G-OSA-28

The parent's G-OSA-28 presents OFN as the anchor of the open short-chain
layer. The grocery research's dedicated OFN/DFC dive (ofn-and-dfc.md)
supports the record but adds the boundary the concept depends on: **OFN
is a platform, not a grocery operation** — it does not own the sourcing
relationship, the physical information surface (shelf, QR, receipt), or a
continuous participatory environment. The negative-result search
(multi-layer-operations.md) strengthens the same point from the other
side: even the closest operations (CSN, Unicorn, La Louve wave) combine
at most two-plus layers; the joint realization does not exist. G-OSA-28's
"mature, production-proven" verdict stands; the nuance is that maturity
at the platform layer is not maturity at the operation layer.

## 10. A transferable analytical framework: the five layers of open

The grocery project's organizing frame — open as five levels (sourcing,
information, culture, participation, structure) that reinforce each other
and decouple destructively — has proven itself across 16 research files
as a diagnostic: it maps every existing operation onto a layer-combination
and locates the frontier precisely. The parent's three-axis taxonomy and
currents do this for the production side; the five-layer frame does it
for any operation in any part of the chain. Offered to the parent as an
optional lens (with provenance `grocery/levels.md`), particularly for
event sessions touching platform cooperativism, data governance, or the
food side of the value chain — where "what is open, at which layer, and
what is refused" is the discriminating question.

---

## What is deliberately NOT fed back

- The grocery concept documents (concept.md, levels.md, system.md,
  internet-patterns.md, synthesis.md) — the concept is self-contained by
  design and is not a claim the parent project endorses or advances.
- Concept-position statements (what the concept should do) — transferred
  findings only, not the concept's design language.
- Scenario and aspirational material (no scenarios exist yet by design).

## Provenance map

| Feedback item | Grocery source file(s) |
|---|---|
| §1 data-open/operation-closed | open-in-food.md, open-in-culture.md, traceability.md, consumer-feedback.md, food-waste.md, ofn-and-dfc.md |
| §2 candidate records | open-source-software-stack.md, food-waste-canada.md |
| §3 funding-circle archetype | open-source-software-stack.md (Democratic Tech Fund case) |
| §4 software-mirrors-landscape | open-source-software-stack.md |
| §5 refusals pattern | food-waste-canada.md (K24), meaning-and-culture.md, multi-layer-operations.md (CoopCycle), canadian-co-op-survey.md (Landare) |
| §6 margin-justice / 80-20 | csn-tps-landare-deep-dives.md, multi-layer-operations.md |
| §7 participation-viability numbers | csn-tps-landare-deep-dives.md |
| §8 Canadian additions | food-waste-canada.md, canadian-co-op-survey.md |
| §9 OFN nuance | ofn-and-dfc.md, multi-layer-operations.md |
| §10 five-layer lens | levels.md, synthesis.md |

## What this is for

This is the transfer layer between a self-contained concept project and
the parent research corpus: grocery findings that extend the parent's
map (§1, §2, §8), upgrade its taxonomies (§3, §6, §7), sharpen its
boundary conditions (§5, §9), and offer an analytical instrument (§4,
§10). Nothing in the parent project is modified by this document; the
parent decides what to verify, curate, and synthesize from here.
