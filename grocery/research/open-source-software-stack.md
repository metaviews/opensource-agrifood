# The open-source software stack for food co-ops and grocery — deep dive

Date: 2026-08-28
Scope: A deeper dive on the open-source software layer identified in
multi-layer-operations.md: Open Food Network (platform context in
ofn-and-dfc.md), Foodsoft, FoodCoopShop, Foodsharing.de (detail in
food-waste-canada.md K22), plus the deployment/maintenance infrastructure
(Co-op Cloud, Democratic Tech Fund) and what the stack implies for the
concept.

This is a research pass on the technology layer: what exists, its licenses,
its maintenance health, its user base, and its limits. It is not a design
document.

## The inventory, deepened

### 1. Foodsoft — the member-work co-op operating system

- **What**: open-source web software to manage a non-profit food
  cooperative — product catalog, ordering, accounting, and **job
  scheduling** (the member-work-shift coordination tool). Self-described
  as built for "a collective do-it-yourself supermarket": members order
  online, the co-op aggregates into bulk purchases, the software handles
  the accounting that keeps a volunteer-run operation workable.
- **Provenance and health**: developed originally in/around the German
  food co-op movement (Hamburg roots); GitHub foodcoops/foodsoft, 357
  stars, 159 forks, 2,636 commits; latest commit August 9, 2026 —
  **actively maintained, though thinly** (small maintainer pool; see the
  infrastructure finding below). Multi-instance: foodcoops.net hosts
  shared instances for many co-ops; self-hosting supported.
- **Feature depth relevant to the concept**: workgroups (cooking, set-up,
  membership, orders, finance — matching member skills to co-op needs);
  ordering cycles; supplier management; financial ledgers per member and
  per group; shared-instance configuration that "makes it possible to
  share data with several foodcoops" (supplier-assortment sharing across
  co-ops — a rudimentary federation/data-sharing feature already in the
  codebase).
- **The maintenance finding (Democratic Tech Fund case study, Biobulkbende,
  Rotterdam)**: a 60-member co-op runs Foodsoft on **one server, in one
  member's closet, on residential internet**, maintained informally by
  whoever has time. The Fund's assessment: "the software itself is
  lacking consistent maintenance upstream. Everything works — until, one
  day, something doesn't." But: **50-60 food co-ops and related
  organisations have expressed willingness to co-fund a properly
  maintained, upgraded Foodsoft**; a Co-op Cloud deployment recipe
  already exists; the gap is a maintenance team, a modernised codebase,
  and a collective structure to hold it — a proposed Funding Circle model
  (co-ops co-funding their shared infrastructure).

### 2. FoodCoopShop — the producer-direct ordering system

- **What**: open-source software (AGPL-3.0) for food co-ops, organic
  stores, and farm shops, oriented to **direct ordering from regional
  producers**: manufacturer login area (producers manage their own
  product listings), order lists auto-sent to producers, multiple
  delivery rhythms, collective orders, automated accounting via a
  credit/deposit system (members shop cashlessly against a deposited
  balance).
- **Health**: single lead developer (Mario Rothauer, Austria) plus
  community; 10,052 commits, 122 stars; v4.2 released March 2026, frontend
  redesign June 2026 — **very actively maintained** (guarantees at least
  one release/year), with paid installation/maintenance support offered
  (the developer's livelihood — a one-person open-core model).
- **Deployment map**: an OpenStreetMap-based uMap shows installations
  across Austria, Germany, and beyond; new co-ops documented on the site
  (2025-2026: Schalchen, Neumarkt am Wallersee). Stack: CakePHP/MySQL,
  Docker dev environment; self-hosting explicitly welcomed.

### 3. Open Food Network — the federated marketplace platform

(Deep reference remains ofn-and-dfc.md; what this pass adds:) OFN's
position in the stack is the **multi-enterprise shopfront layer** —
individual farm shops and food hubs with their own storefronts, which
"really gets exciting when there's a community of farmers working
together" (regional food-system aggregation). Its national instances
(founded Australia; active nodes include **Katuma in Catalonia**) and
the DFC interoperability work are the concept's federation layer. OFN's
governance model (sociocracy/holacracy blend, global-but-locally-led)
is the most developed governance answer among the four.

### 4. Foodsharing.de — the open-source waste-coordination movement
platform

(Detail in food-waste-canada.md K22.) In stack terms: the **peer-to-peer
and business-surplus coordination layer** — Fairteiler free shelves,
food baskets, trained-foodsaver business collection — with its own
public devdocs (Vue/Symfony), volunteer dev community, and movement
governance (foodsharing e.V.). License MIT (per Wikipedia snapshot).

### 5. The surrounding infrastructure commons

- **Co-op Cloud** (coopcloud.tech): a "shared configuration commons" for
  collectively-run self-hosting — standardized deployment "recipes" so
  any co-op can run applications "predictably, collectively, and without
  every operator reinventing deployment from scratch." Foodsoft has a
  recipe. This is the missing layer between free software and reliable
  operation: packaging + shared ops practice.
- **Co-op Cloud Federation** and the Democratic Tech Fund's Funding
  Circle proposal: the organizational innovation — small co-ops pooling
  money to fund dedicated maintenance of shared tools. Named ecosystem:
  KolliCloud (community cloud), Newsmast, Goteo.org (cooperative
  crowdfunding, €25M/15 years).
- **Odoo**: the ERP the CSN is considering as its shared management
  system (csn-tps-landare-deep-dives.md) — open source ERP (community
  edition LGPL) but a conventional enterprise tool, not co-op-specific.
  The CSN's choice of a generic ERP over Foodsoft/OFN is itself a
  finding: at supermarket scale (2,500-3,000 references, paid staff),
  the co-op-specific tools may not yet be enough.

### 6. Also noted

- **CoopCycle**: open code, **license restricted to co-operative use**
  (protective/ethical license — not permissive open source). The
  anti-appropriation precedent (multi-layer-operations.md).
- **Grocy**: open-source household grocery management (home scale;
  adjacent — the consumer-side counterpart).

## What the stack tells the concept

### 1. Every functional layer of a co-op grocery operation exists as free
software — except the concept's distinctive layers

Mapping the stack onto the concept's five open levels:

| Concept layer | Existing free software | Status |
|---|---|---|
| Open structure (governance, member work, economics) | Foodsoft (job scheduling, accounting, workgroups); Odoo (ERP, CSN candidate) | Mature enough to run real co-ops |
| Open sourcing (records, origin, producers) | OFN + DFC (interoperable origin/product data for short chains) | Real but platform-bound; not an operation's published record |
| Open information (eater-facing environment) | **Nothing** — no product-linked, community-facing information surface exists as free software | The gap |
| Open participation (comments, questions, community knowledge) | **Nothing** — Foodsoft/FCS have no community-discussion layer; Foodsharing has movement chat but not product-linked | The gap |
| Open culture (foodways, meaning, refusals) | **Nothing** — no software recognizes culturally governed information | The gap |

The pattern is exact and load-bearing: **the software mirrors the
landscape**. The structure layer is built (that's what co-ops needed);
the data layer is building (that's what institutions fund); the
information, participation, and culture layers don't exist as software
because no operation has ever needed them. The concept's novel layers
would be novel software too — there is no free-software head start on
them, though OFN/DFC data plumbing and Foodsoft governance tooling are
the foundation they would sit on.

### 2. The maintenance question is the real open-source question

The Biobulkbende finding generalizes: free software for food co-ops
exists but runs on "borrowed infrastructure and volunteer goodwill"
( mantainers are one person for FoodCoopShop, a thin pool for Foodsoft).
The sector's own answer — co-funding circles, Co-op Cloud recipes,
federated hosting — is the open-structure principle applied to the
software itself. For the concept this is a design commitment, not a
procurement choice: **an open grocery operation must treat its software
as a commons it maintains, not a tool it consumes** — contributing
upstream, funding maintainers, sharing its deployments. The Co-op Cloud
recipe model makes this tractable.

### 3. The stack is integrable, and the integration itself is novel

No operation currently runs OFN-style sourcing data + Foodsoft-style
governance tooling + a participatory information layer on one stack. The
pieces are license-compatible (AGPL, MIT, LGPL all coexist) and the
data-plumbing standard (DFC) exists precisely to connect them. An open
grocery operation assembling this stack — and releasing its own
integrations and its information/participation software back as free
software — would itself be an open-source contribution no one has made.
The CoopCycle protective-license precedent suggests the concept could
choose permissive or protective terms deliberately (permissive for the
data standards, protective for operation-specific tooling — a split the
CARE/not-for-sale boundary already implies).

### 4. The user base is real but small; the co-funding moment is live

Foodsoft: dozens of co-ops (50-60 potential co-funders); FoodCoopShop:
dozens of installations across DACH; OFN: global instances; Foodsharing:
500K users. This is not big-tech scale — it is the correct scale for the
concept's community-governed ambition, and the Democratic Tech Fund's
finding that 50-60 organisations are ready to co-fund maintenance is the
first time the tree has documented **demand for shared digital
infrastructure expressed in organizational commitments**. A Canadian
open grocery operation would be entering a live, resolvable maintenance
economy, not starting one.

## Findings for the concept

- The concept's software strategy has three tiers, all free-licensed:
  adopt (Foodsoft/FCS governance tooling, Co-op Cloud deployment),
  integrate (OFN/DFC sourcing data with the governance stack), and
  build (the information/participation/culture software that does not
  exist). Tiers one and two are assembly; tier three is the concept's
  genuine R&D contribution to the commons.
- The open-source claim in "open source grocery" is most defensible at
  the software tier — provided the operation contributes back rather
  than merely consuming. "Open source" as a label for sourcing
  transparency (the dilution risk in open-in-culture.md) should be
  reserved; the software is where the term is literal.
- The maintenance economy (funding circles, shared recipes) is itself an
  open-structure practice: the concept's operation would be more
  structurally open than its competitors partly by *how it maintains its
  software*, a dimension no retail competitor even has.
- The CSN's Odoo choice flags the scale limit: co-op-specific tools
  cover participation-scale operations; supermarket-scale operations may
  outgrow them. The concept should know which scale its software story
  is honest at.

## What remains thin or unverified

- Foodsoft's exact instance count and the foodcoops.net hosted
  population (no public registry found).
- FoodCoopShop's installation map was seen as a uMap embed; the actual
  count was not tabulated.
- Foodsharing's MIT license claim rests on the Wikipedia snapshot; the
  repo's LICENSE file was not read directly.
- The Democratic Tech Fund's "50-60 co-ops willing to co-fund" is the
  Fund's own claim, pre-funding-circle.
- OFN's technical architecture (Spree/Solidus Rails heritage) and current
  DFC connector coverage are known from ofn-and-dfc.md but not re-verified
  here.

## Suggested next targets from this pass

- Read the DFC connector implementations against Foodsoft/OFN data
  models — the integration feasibility question for tier two, in
  concrete terms (extends target #5).
- Watch the Democratic Tech Fund's Foodsoft Funding Circle: if it lands,
  the maintenance economy exists as fact and the concept's software
  strategy has a working template.

## How this connects to the rest of the grocery research

- multi-layer-operations.md: this deep dive fills its software layer in;
  the "software mirrors the landscape" finding sharpens the negative
  result — the missing layers are missing in code, not just in practice.
- ofn-and-dfc.md: OFN/DFC remain the data-plumbing layer; this file adds
  the surrounding infrastructure commons (Co-op Cloud, funding circles)
  that file does not cover.
- synthesis.md: the novelty claim is confirmed at the software level —
  the concept's distinctive layers have no free-software implementations
  anywhere. The viability condition gains a new, cheap lever: software
  assembly is far cheaper than the retail infrastructure the viability
  numbers describe.
- food-waste-canada.md K22: Foodsharing's stack position and its open
  devdocs confirm the movement-platform pattern the concept's
  participation layer would extend.
- open-in-culture.md: the protective-license precedent and the
  maintenance-commons practice are the structural answers to openwashing
  — the concept's software governance would be its strongest anti-
  dilution evidence.

## What this is for

This file establishes what the concept's software strategy can honestly
claim: adopt a mature governance stack, integrate an existing
interoperable data layer, and build the three missing layers (information,
participation, culture) as new free software — maintained as a commons,
in a live co-funding economy, at a scale the existing tools already
serve. It also fixes the meaning of "open source" in the concept's name:
literal in software, structural elsewhere, and never a mere label.
