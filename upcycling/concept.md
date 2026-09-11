# Open Source Upcycling Processor

A working concept for an entity that takes diverted and surplus food and turns it into
shelf-stable products — pickles, ferments, preserves, jams — and asks whether it can be
viable, and how open it can honestly be while getting there.

This directory is a sibling to `grocery/`. It uses the same habit of mind — open is not a
single switch — but it is a different kind of document set, because the question is
different: grocery asked whether an all-open operation is novel. This asks whether a
partly-open one is feasible, and at what cost.

## The premise

Food is discarded at scale while the same food is scarce and expensive. Some of that
discarding is driven by grade and appearance rather than by edibility: fruit that is
undersized, split, hail-marked, over-ripe for the shelf, or simply arriving in a volume
that no buyer in range can absorb before it turns. The information system that decides
what counts as sellable — retailer cosmetic specifications and buyer grading rules — is
private, and the research corpus has already established that it is the manufacturing
cause of much of the waste (`research/2026-09-upcycling-subcell-scan.md`, shape 3).

A processor sits at exactly that seam. It buys or receives what the fresh market will not
take, and converts it into product that does not care about time: preserved, acidified,
fermented, jarred. The operation's core service is not really food-making. It is
**time-shifting** — taking a perishable glut that arrives in a two-week window and turning
it into shelf-stable value that can be sold across twelve months.

That is the value thesis, and it is also where the cost problems live, because a plant
sized for the peak glut sits idle the rest of the year and the people who work it are
seasonal.

## What the operation is

**Inputs — two streams, in priority order.**

1. **Farm-level second-grade and surplus (primary).** Undersized, split, hail-damaged,
   over-ripe, or over-supplied produce direct from growers. This is the stream where an
   open, community-scale operation has a structural advantage a proprietary one does not:
   the relationship is relational, the volumes are knowable, and the corpus's own guest
   grounding sits here (Camden Lawrence, episodes 9/23 — imperfect produce and undersized
   poultry that "could feed that community").
2. **Buyer cosmetic rejects (secondary).** Retail and wholesale rejects passed on by
   grocers and distributors, competing directly with closed incumbents (LOOP Mission's
   stream) and contested by food banks and animal-feed diversion (Loop Resource). See
   `tensions.md` on the legitimacy problem this creates.

**Products — a committed class, with stated exclusions.**

- In scope: high-acid water-bath processed goods (jams, jellies, preserves, chutneys,
  pickles, sauces, relishes) and a named fermented product (the sauerkraut/kimchi family,
  where acidification is part of the process itself).
- Out of scope for this concept as written: low-acid canned goods requiring pressure
  processing or a scheduled process validated by a competent authority; anything
  containing meat, poultry, seafood, or dairy; anything needing refrigeration for shelf
  life. These are not excluded because they are uninteresting — they are excluded because
  they carry a materially different validation, facility, and liability regime, and a
  concept that holds all of them at once cannot say anything testable about cost.

  *Refined 2026-09-11 after the validation research pass:* the two halves of the committed
  class turn out to sit in different regulatory situations, and the concept should not treat
  them as one problem. Jams and jellies meeting published standards of identity are **exempt**
  from the acidified-foods regime in the US model, on water-activity grounds (aw at or below
  0.85), which makes preserves the *easier* half rather than the harder one. Fermented
  products are **excluded** from that regime and from at least one public provider's process
  authority service, which means less paperwork but also less available expertise and a
  less-defined position rather than a clearly easier one. The wording "high-acid water-bath"
  is the food-science label; the regulatory labels are water activity and exclusion, and they
  differ per half. See `research/process-validation-and-canning.md`.

**Form — a pilot, not a plan for a chain.**

One certified micro plant, deliberately small, treated as a pilot for a federated network
of micro plants that would later share recipes, food-safety documentation, procurement,
and possibly brand and sales. The pilot exists to answer the questions in `economics.md`
at the smallest scale where the answers are real. Federation is the hypothesis about what
comes after, not an assumption built into the pilot.

Note that this is a departure from `grocery/`, which went federated by design. Here the
pilot is singular on purpose: the openness propositions that follow are only interesting
if the first plant is a thing that could actually be built and inspected.

## What this is

This is concept development with an evidence layer. It is not a business plan, not a
research tree, and not an example catalog.

The distinction matters because the question is viability. `grocery/synthesis.md` was
explicit that its claim was novelty — "no one has built this" — and that feasibility
remained unearned. This concept inverts that: it does not much care whether it is novel,
and it cares a great deal whether the numbers close and the paperwork is reachable.

So the documents here carry three kinds of statement, and they are kept visibly separate:

- **Verified**: a fact read from a primary source, with the source named and the date
  checked, in the house style of `examples/records/`.
- **Observed**: what direct experience and practitioner sourcing indicate about how the
  sector actually works, recorded with its source named as such. Direct experience
  **informs** this project — it decides where to look, which questions are worth asking,
  and which documented claims are suspect — but it does not **govern** it. Experience that
  cannot be independently confirmed is not admissible here as the basis for a claim, and
  never appears in place of a source.
- **Unverified or assumed**: a plausible figure, a working number, a thing everyone in the
  sector repeats. These are marked as such, never dressed up as findings.

No cost figure appears here without one of those labels. Where the literature or the
market-report layer contradicts itself, the contradiction is recorded rather than
averaged — the upcycled market-size estimates currently differ by roughly half for the
same year, which is itself a finding about the sector's maturity.

**The anticonflation rule.** Regulatory text and published research describe the envelope
and the discourse; neither describes practice. A regulation states the outer bound of what
is permitted, not what is inspected, enforced, or done. A research finding states what was
measurable and publishable, not what is happening in the parts of the sector that do not
publish. Both are inputs; neither is the ground truth about how food actually moves.

The consequences for this concept, adopted 2026-09-11 and tightened the same day:

- **Documents and transaction evidence govern.** Every finding here must be checkable: a
  cited document, a published fee, a supplier quote, an invoice, a listed price. This is a
  deliberate constraint, and it is the reason the concept cannot be built on anyone's
  first-hand experience of the sector — including the user's, which is extensive but cannot
  be independently confirmed.
- **Direct experience informs but does not govern.** It sets direction: where to look, what
  to ask, which documented claim is suspicious. It is recorded as a lead with its
  provenance stated, never as a finding and never in place of a source.
- **The gap between rule and practice is a research target, not a premise.** Where a
  regulation and market reality are believed to diverge, that divergence is a question to
  be answered with a checkable artefact — a document, a quote, an account with a name on
  it — not a position to reason from. Meanwhile the concept carries the uncertainty
  explicitly rather than resolving it silently in either direction.
- **A "no one does this" conclusion resting only on absent published evidence is weak,**
  and for private commercial activity it is close to meaningless. The correct output there
  is a named list of who to ask, not a negative finding.
- Where the corpus's method already says an item is fieldwork-bound (G-OSA-18 farmer
  agency, G-OSA-02 current scale), the same applies here.

## The openness thesis: a ladder, not a switch

The sector is opaque. Recipes are trade secrets, intake specifications are private,
validation paperwork is duplicated privately by every small operator, and the category's
own defining standards — Upcycled Certified, CSA K100:26 — are paywalled products. Against
that baseline, **gradual openness is an improvement over total opacity**, and a concept
that insists on full openness before it will count as progress cannot start.

So this concept treats openness as a ladder of stages rather than a state, and asks at each
stage what it costs, who benefits, and what breaks. The working draft:

- **Stage 0 — closed pilot, honest about it.** No openness claims. The one non-negotiable
  is that the operation does not call itself open source while publishing nothing; the
  corpus already holds the counter-example (Sharing Excess: "fully open source," both
  public repos with `license: null`).
- **Stage 1 — open the intake specification and the batch record.** Publish what the plant
  accepts, what it pays, and what it did to each lot. Low cost, high legibility, and it is
  the direct counter-artifact to the closed grading specifications that manufacture the
  waste stream in the first place.
- **Stage 2 — open the food-safety documentation.** The PCP/HACCP plan, the validated
  processes, the pH and water-activity targets and test protocols, as licensed templates a
  second plant can adopt. This is the highest-leverage stage: validation is a fixed cost
  that no micro plant can amortize alone, and sharing it is the single clearest economic
  argument for openness in this sector.
- **Stage 3 — open the formulations.** Recipes under a real licence, once a network exists
  big enough that shared development outweighs the copy risk. For a single plant, secrecy
  is better; for a network, commons is better. The crossover is the concept's core
  economic claim and it is testable.
- **Stage 4 — open the facility and equipment designs,** so replication does not require
  reinvention; and the governance template alongside it.
- **Stage 5 — the federation commons.** Shared procurement (jars, lids, labels are
  suspected to be the largest per-unit input — see `economics.md`), shared brand, shared
  software.

Each stage is revisable and none is a precondition for the next. The stages are also a
diagnostic: if a stage cannot be justified on cost or on mission, the honest answer is to
skip it rather than to perform it.

## Where this sits in the project

Three reference layers, unchanged from `grocery/concept.md`: `future-herd/` is the
editorial and voice authority, `agrifood-ai-field-guide/` is the structural reference for
the agrifood domain, `opensource-agrifood/` is the open-source context.

Within `opensource-agrifood/`, this concept is downstream of the A1 processing workstream
and its upcycling sub-cell. `research/2026-09-upcycling-subcell-scan.md` (G-OSA-37) is the
sectoral scan; six records in `examples/` are its verification (Pioreactor, Sharing Excess,
Second Harvest, Upcycled Certified, LOOP Mission, FoodMesh), plus community canneries as a
governance case. This concept cites that work as prior evidence and does not re-scan it. Its
own research (see `research-direction.md`) is confined to what the concept specifically
needs and the parent corpus does not have: Canadian regulatory cost, input availability in
a named place, packaging and facility economics, and the state of open artefacts adjacent
to a processor.

## What lives here

- `concept.md` — this document: premise, scope, the openness ladder
- `layers.md` — the layers of open adapted to a processor, including two layers grocery
  did not carry
- `economics.md` — the regulatory and business cost spine, with verified and unverified
  clearly separated
- `tensions.md` — what the concept cannot yet resolve and has to carry
- `research-direction.md` — what the concept wants to know, in priority order

These are working documents, allowed to be rough, contradictory, and incomplete. What is
not allowed is a number with no provenance.

Not legal advice.
