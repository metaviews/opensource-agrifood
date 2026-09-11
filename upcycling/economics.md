# The cost spine: regulation and business economics

Date started: 2026-09-11. Status: working document.

This is the document the concept stands or falls on. The user's framing for this case
example is explicit: it should focus as much on regulatory and business costs as on the
availability of and demand for the food. So this file carries the cost questions in two
columns of provenance:

- **Verified** — read from a primary source, source named, date checked.
- **Unverified / assumed** — a working figure or a sector commonplace with no primary source
  behind it yet. These are prompts for `research-direction.md`, not findings.

Nothing that is unverified should be quoted from this document as though it were
established. That discipline is the whole point of the column.

## Part 1 — The regulatory spine

### Verified: the licensing fork (CFIA, primary source, checked 2026-09-11)

The single most consequential regulatory fact for this concept, read from the Canadian Food
Inspection Agency's guidance on activities that require a licence under the Safe Food for
Canadians Regulations:

- **The SFCR determine licensing by activity, not by type of business.**
- **No SFC licence is required** to manufacture, process, treat, preserve, grade, package,
  or label food that will be **sold and consumed within your province or territory**. The
  same applies to trading food intraprovincially.
- **A licence is required** to manufacture, process, treat, or preserve food for
  **interprovincial trade or export**. "Preserving (such as pickling, brining, salting or
  drying)" is listed explicitly as a licence-required activity.
- **A licence does not switch the requirements on.** The CFIA guidance states that even
  where no licence is required, other SFCR requirements may still apply: preventive
  controls, preventive control plans, traceability, packaging, and labelling including
  standards of identity and grades.
- A provincial or territorial regulation may itself require an SFC licence; the CFIA notes
  commodities that can carry such a requirement, including processed fruit or vegetable
  products. That is a per-province question, not something to assume.

Source: `inspection.canada.ca/en/food-licences/food-business-activities` (page date modified
2024-11-20, read 2026-09-11).

Why this is a fork and not a footnote: an operation that sells only within its province sits
under a provincial and municipal regime; the moment it sells across a border it acquires an
SFC licence and a preventive control plan obligation. That is a step change in documentation
and facility expectations, and it sits at the exact point where a pilot would want to grow.
The concept's ladder and the growth path interact here, and the interaction is a cost.

### Verified: the provincial layer, in outline (Ontario, checked 2026-09-11)

Ontario's food premises requirements sit in O. Reg. 493/17 under the Health Protection and
Promotion Act, administered by local health units rather than a central agency. Publicly
facing health-unit guidance indicates at least one Certified Food Handler must be available
during operation, that food premises registration/inspection applies, and that some
low-risk, home-based food operations are treated differently (Ottawa Public Health notes a
Food Premise Business Licence is not required for low-risk home-based foods).

Sources: `ontario.ca/laws/regulation/170493`; Middlesex-London Health Unit "Starting a Food
Business"; City of Ottawa food premises licence page. Read 2026-09-11.

What this establishes is only structure: a provincial premises regime, a municipal licence
question, a certified-handler obligation, and a low-risk home-based carve-out whose edges
are the interesting part. **What it does not establish is any actual fee, timeline, or
inspection burden.** Those are unverified below.

### Regulatory costs: what is now verified, and what is still open

Verified in the first research pass (2026-09-11, `research/ontario-regulatory-path.md` and
`research/process-validation-and-canning.md`):

- **The health-unit layer carries no application fee.** The Notice of Intent to Operate a Food
  Premises is a notification, and at least one Ontario health unit states in its operator
  guide that there is no fee for the application or its processing. The regulatory cost here
  is compliance and time, not a licence purchase.
- **The home-kitchen route does not clearly exist for preserves.** The low-risk foods exempt
  from parts of O. Reg. 493/17 are bakery-shaped (breads, baked goods without custard,
  chocolate, granola, nuts, cookies); preserves, pickles, and jams are absent from the list,
  and the health-unit guidance routes the preserves question to canning-specific material
  rather than answering it with an exemption. A micro preserving operation therefore needs an
  approved commercial premises — dedicated or shared — and a Certified Food Handler on site.
  **This removes the cheapest facility option from the arithmetic, and it is a document
  finding, not a preference.**
- **A federal PCP may not be required at small scale.** The CFIA notes that certain food
  businesses may not be required to have a written preventive control plan, for example where
  annual gross food sales are $100,000 or less. That is a threshold worth carrying carefully:
  it applies to the federal PCP requirement, and it does not remove provincial premises
  obligations.
- **Ontario expects a thermal process authority.** The province's own manufacturing guide
  states that validating a thermal process "must be done by an appropriate laboratory or
  technology centre with a thermal process authority."

Still open, in order of consequence:

- **Whether a high-acid water-bath product needs that validation at all.** The guide's
  statement sits in general thermal-processing material and does not draw the line by product
  class. This is the concept's single most important open question, because the second rung of
  the openness ladder depends on it.
- Municipal business licence fees; certified food handler course costs; the SFC licence fee
  (only relevant once the operation sells across a provincial border).
- Laboratory costs for pH, water activity, and shelf-life substantiation, and a process
  authority's engagement fee.
- Product liability and recall insurance for a Canadian food manufacturer. Only US figures
  were located and none is transferable.
- Label compliance costs: bilingual requirements, nutrition labelling, standards of identity
  (what may legally be called a "jam"), and whether any small-business labelling flexibility
  applies.
- Whether any federal food-donation incentive exists in Canada. The Global Food Donation
  Policy Atlas documents a *recommendation* to amend the Income Tax Act to allow food
  businesses to benefit from a deduction for donated food, which implies absence as of that
  publication — current status unverified, and it matters because it shapes what donors do
  with surplus.

## Part 2 — The business cost structure

### The value thesis, restated as an economic mechanism

The operation buys (or is given) a perishable glut at or near zero and converts it into
shelf-stable product sold across a year. The margin comes from **time-shifting**, not from
the food. Two consequences follow immediately:

1. **The input is not the cost.** If the economics depended on cheap food, the operation
   would be fragile by design, because the stream's availability and terms are set by
   someone else's private grading decisions.
2. **Capacity is defined by the peak.** A plant sized for the glut is idle most of the year,
   while its fixed costs and its skilled people are annual. This is the defining constraint
   and it appears in every version of the arithmetic.

### The per-unit cost skeleton

Working structure, with what each line rests on:

| Cost line | Character | Provenance |
|---|---|---|
| Food input | Near zero to low; gleaning/collection labour is the real cost | Assumed — the stream's terms vary by grower and by year |
| Packaging (jar, lid, label, case) | Suspected largest per-unit input for preserved goods | **Partly sourced** — verified list prices (a 16 oz jar at $1.40–$1.50 each at case and pallet quantities; a 12 oz bottle listed from $0.74) and a clear run-length effect on labels (about 18¢ each at 1,000 versus 73¢ at 250). MOQ and Canadian distributor quotes outstanding. See `research/packaging-facility-and-equipment-costs.md` |
| Direct labour | Seasonal, collides with the farm season's peak; the honesty test for the model | Assumed — see `layers.md` section 7 |
| Facility | Shared kitchen time by the hour, or leased/fitted space — **an approved commercial premises in either case**, since the home-kitchen route does not cover preserves | **Partly sourced** — one secondary Ontario figure (GTA shared kitchens from $22/hour; $200–400/month typical for 8–16 hours) from a platform's own marketing. No named facility quote obtained |
| Process validation and documentation | Fixed cost, largely independent of volume — the sector's central economic fact | Structure verified, magnitude unverified |
| Licensing, inspection, certification | Low cash cost, non-trivial time cost; steps up at the provincial border | Fork verified, amounts unverified |
| Insurance | Unknown | **Unverified** |
| Distribution and sales | Farmers' markets and direct cost time; retail costs margin and listing | Structure assumed, neither priced |
| Certification (optional) | Upcycled Certified: fees verified in the corpus (`examples/records/upcycled-certified.md`) | Verified (2026-09-07) |

### Verified context: what the closed incumbents pay to be credible

From the corpus's own verification work, so that the concept does not have to re-derive it:
Upcycled Certified charges an application fee, a per-review fee band, a per-product annual
licensing fee, and a per-location chain-of-custody audit fee (fee schedule read from the
certifying body, 2026-09-07). CSA K100:26, the first Canadian food-loss-and-waste
terminology and measurement standard, is a paid standard, not an open specification.

The read is that the category's definitional vocabulary is a product, and a small operator
either buys into it or competes without it. For a micro plant, this is a real line item
against a recognizability benefit that has not been measured.

### Where the open layer pays, and where it costs

This is the concept's central economic question and it is stated here in a form that can
later be tested rather than argued:

**Open layers that plausibly reduce cost at micro scale**

- **Intake specification and batch record (stage 1).** Cheap to publish; substitutes a
  specific, checkable record for a certification mark; gives growers a stable price signal.
  Cost: some administrative time and some competitive legibility.
- **Food-safety documentation (stage 2).** The strongest cost argument in the concept,
  because validation is a fixed cost each tiny operator otherwise pays alone. Sharing it is
  how a sector of micro plants amortizes something none of them can. Cost: shared liability
  exposure, and the obligation not to abandon the document (Underground Meats is the
  cautionary case in the corpus — an open HACCP plan whose host has disappeared).
- **Procurement (stage 5).** If packaging is truly the largest cost line, cooperative buying
  is the largest available margin lever, and it is the oldest co-operative pattern there is.
  Cost: coordination, and MOQ commitments the plant must honor regardless of the season.

**Open layers that plausibly increase cost or risk at micro scale**

- **Formulations (stage 3).** Copying risk is real and the licence cannot prevent it. The
  argument for openness here is scale-dependent: it is weak at one plant, stronger at
  several. Cost: the recipe itself, plus the cost of maintaining a process commons properly.
- **Open structure (stage 6).** Co-operative and nonprofit forms have capital consequences.
  A form can be chosen for mission and still be unable to finance a facility.
- **Publishing anything about supply relationships.** Grower identities, prices, and volumes
  are competitively meaningful, and in some cases culturally governed. Not all of this layer
  is publishable, and the concept should treat refusal as a capability rather than a gap.

**The honesty clause:** if a rung measurably threatens the pilot's survival, the concept
drops the rung and publishes which one and why. A viability concept that quietly assumes
openness is free is not a viability concept.

## Part 3 — Availability of and demand for the food

### Availability: ordered in principle, and much larger in practice

**The claim order, in policy.** Edible surplus is conventionally ordered charity first,
animal feed second, then composting or landfill. Loop Resource (a Canadian farmer-facing
diversion program, tied to the same grocery surplus that FoodMesh handles as a donation
channel per the corpus) moves grocery surplus to small farms as livestock feed; its own
social channels report 1.66 million kg diverted in a year (self-reported, therefore low
reliability, and recorded here only to establish that the channel is large).

**What this concept got wrong at first, corrected 2026-09-11.** The first draft of this
document reasoned from that claim order to an economic conclusion — that the affordable
input stream is "the residue that donation and feed cannot absorb" — and treated the
processor as a late claimant on a contested, scarce stream. That was the anticonflation
error named in `concept.md`: it read a policy convention as a description of flows, from
rescue-sector and regulatory discourse rather than from anyone who buys or moves surplus.

**Informing observation, not admitted as evidence (2026-09-11).** The starting direction for
this section came from the user's first-hand experience of the sector — considerable food
continues to be wasted despite the donation and feed channels, and the emergence of upcycling
and comparable marketplaces suggests a non-charity, low-cost supply is forming. That is not
independently confirmable, so it is not a finding here: it is the reason target 4 exists, and
target 4 is what decides the question.

If it holds, the input is not a residue left after charity and feed have taken what they can.
It is a category of supply with sellers, buyers, and emerging terms, and the processor is a
buyer in it rather than an applicant to it. Per the evidence classes in
`research-direction.md`, the finding has to arrive as documents, listed terms, or transaction
evidence — not as a premise, and not as an inference from anyone's experience.

That reframes the supply question from *whether surplus will be released to a
non-charitable buyer* to *what terms a low-cost surplus market is converging on* — price,
grade, volume reliability, seasonality, and who is already buying. It is a materially
better question, and it is research targets 3 and 4.

What does **not** change: the legitimacy question. If the stream is ample, that removes a
supply constraint, not the reputational and ethical one — a for-profit processor taking
food that could have gone to a food bank still has to justify its position, and the
strongest justification remains that it takes what donation cannot place in time. The
scarcity framing weakens; the justification burden does not.

### Demand: what the evidence actually supports

- **Market-size estimates for upcycled food contradict each other by roughly half for the
  same year** (two market-research sources found 2026-09-11: one puts the 2026 global market
  at approximately $44.7 billion, another at approximately $70.7 billion). These are
  aggregator figures with unpublished methodology. The contradiction is the finding: the
  category's numbers are not yet reliable, and any pitch quoting one of these should be read
  with that in mind.
- **A peer-reviewed consumer-acceptance literature exists and is not uniformly flattering.**
  Choices magazine carries a consumer study on upcycled foods reporting low hedonic appeal
  scores and framing acceptance as conditional on message and category. The headline is worth
  reading at the source before use; the takeaway for now is that an upcycled identity is not
  by itself a price premium.
- **What has not been established:** what the products actually sell for at retail and
  wholesale in Canada, what margin a small producer holds, and whether the upcycled framing
  changes willingness to pay. All of it research target 9.

## What has to be true before this concept claims viability

1. A named jurisdiction's actual regulatory burden is documented, not inferred.
2. The validation requirement for high-acid and acidified products in Canada is established,
   because the concept's best openness argument depends on it being shareable.
3. A region's surplus volumes, grades, and timing are documented — including who already
   takes them, and on what commercial terms an operation could buy (targets 3 and 4).
4. Packaging, facility, labour, insurance, and distribution costs are real quotes rather
   than sector commonplaces.
5. The idle-capacity problem has at least one credible answer.

Until then the concept claims a thesis and a method, not feasibility.

Not legal advice.
