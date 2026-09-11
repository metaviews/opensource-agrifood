# The layers of open in a processing operation

`grocery/levels.md` named five layers — sourcing, information, culture, participation,
structure — and a sixth was drafted in `grocery/labour-layer.md`. This document keeps that
vocabulary deliberately, because a second case example is only worth having if it can be
compared to the first.

But a processor is not a grocer, and three things change:

1. **The information surface is not a shelf.** A grocery operation's information layer
   lives where the eater stands. A processor's lives on a jar, a label, a batch record, and
   a facility that most customers will never visit. Open information here has to survive
   being compressed onto a label or a QR code, and it has to be legible to a buyer who is
   not the eater (a distributor, an institution, an inspector).
2. **The process itself becomes a layer.** Grocery never had to ask whether to publish how
   it does things, because retail does not have a formulation. A processor does — and the
   process layer is, per the scan, closed essentially everywhere in this sector.
3. **Labour stops being a draft.** A processing plant is a workplace in a way a grocery
   aisle is not: seasonal, physical, wage-setting, and the difference between the
   operation working and not. In `grocery/` the labour layer was a recent draft. Here it is
   load-bearing.

So this concept carries seven layers. Each ends with the questions it raises rather than
the answers it settles.

## 1. Open sourcing — the intake

Where the food comes from, who grew it, why it was rejected, and what the plant paid. This
is the layer with the most unusual property: the sourcing relationship is with a stream the
fresh market has already declined, so "open sourcing" here means publishing the terms of a
relationship that exists *because* of what a private grading specification did.

Questions this raises:
- Does publishing an intake specification reduce or increase the operation's bargaining
  position with growers? An explicit, stable price signal is valuable to a grower who
  currently has none; it is also legible to competitors.
- What is the smallest intake record that is actually useful — grade, volume, price, date,
  reason for rejection, or something less?
- Who owns the fact that a particular farm's fruit was rejected? Some growers will not want
  it published, and that refusal has to be a first-class option, not an exception.

## 2. Open process and formulation — the layer grocery did not have

The recipes, the process parameters, the pH and water-activity targets, the fill
temperatures, the batch sizes, the things a second plant would need to make the same
product safely. The scan found this uniformly closed: LOOP Mission's HPP formulations, the
incumbent upcycled-ingredient processes, all trade secret, while the underlying science sits
in open-access papers with closed implementation.

The economic argument is unusual and worth stating plainly: **a formulation commons is a
cost-sharing mechanism whose value scales with the number of plants using it.** For one
plant, secrecy is rational. For five, shared development is cheaper than five parallel
development efforts — provided the process documentation is good enough to be adopted,
which most published recipes are not, because home-canning recipes are not validated
processes.

Questions this raises:
- What is the licensable unit: a recipe, a validated process, a product specification, or a
  whole product line?
- How does a formulation commons avoid becoming a catalogue of untested home recipes? The
  distinction between "a recipe" and "a validated process" is the whole value and the whole
  liability.
- At what network size does sharing beat secrecy, and can that be measured rather than
  asserted? This is the concept's central testable claim.
- What licence actually fits? Food formulations sit awkwardly in software-licence logic;
  there is no established food equivalent of the GPL, and inventing one badly is worse than
  choosing a plain open licence with a liability disclaimer.

## 3. Open records — traceability from jar to field

What was in this jar, from which farm, on what date, processed how, tested to what result.
The corpus has real substrate here: mandatory traceability regimes, GS1 and EPCIS as a
royalty-free standard layer, and the DFC standard for short-chain data. `grocery/` has
already argued that this data layer is the part of the landscape that genuinely exists and
works.

A processor's version is narrower and more testable than a grocer's: a batch record that
answers an inspector's questions, a buyer's questions, and eventually an eater's questions,
without three separate systems.

Questions this raises:
- Does anyone actually want lot-level openness on a jar of preserves, or is the honest buyer
  appetite satisfied by "produced in Ontario, from surplus fruit, here is the grower's name"?
- Can an open batch-record schema be small enough for a three-person plant to maintain?
- What is the refusal case — which parts of a batch record (a grower's identity, a
  community's involvement, a price) should be held rather than published? The governance
  question from the corpus's CARE/OCAP findings applies here directly.

## 4. Culture — whose recipe, whose name, whose food

Food is not a commodity with a supply chain attached. A preserves operation makes products
that carry traditions: someone's family recipe, a regional preparation, a community's
foodway. The grocery concept named this as the layer most likely to do damage, and a
processing operation is more exposed than a retailer, because it is not just selling the
food — it is *making* it and putting a name on it.

The dangerous move is the obvious one: taking a traditional preparation, industrializing it,
and marketing it as a discovery.

Questions this raises:
- When the operation preserves a community's preparation, who is credited, and who decides?
  Is the answer a sourcing relationship, a licence, a revenue share, or a refusal to
  commercialize at all?
- Where the surplus's origin is Indigenous or a settlement community, does the operation
  respect that "where this went and who processed it" can be governed information rather
  than publishable data (the scan's own note, drawing on the grocery feedback's refusal
  pattern)?
- Does an upcycled framing risk making a food culture legible only as waste rescued, which
  is the opposite of what the food is?

## 5. Open participation — who decides what gets made

A processor's participation question is not a review box. It is: who has a say in what the
plant makes from what arrives? Growers who supply the stream, workers who run it, eaters who
buy it, and the community the surplus came from all have claims, and they are not the same
claims.

The practical version of this is a production planning meeting that people outside the
operation can influence — a standing invitation rather than a suggestion box, because the
scan's core finding is that tiny food operations cannot sustain high-touch participation
rituals. Participation has to be cheap or it will not happen. That is a design constraint,
not an aspiration.

Questions this raises:
- What is the minimum viable participation for a plant this size — an annual meeting, a
  planning list, or something asynchronous?
- What happens when a grower's surplus and an eater's preference point in different
  directions (the operation has 3,000 lb of apples and nobody wants more apple butter)?
- Does participation extend to price setting, or only to product selection?

## 6. Open structure — ownership and the economics

Who owns the plant, who decides, where the surplus goes, and whether the operation can be
understood by the people in it. The corpus's grocery work found that governance-open with
systems-closed is a common and stable combination (a co-op running a proprietary POS).
A processor has the same shape available: a co-operative that runs closed software and
open food-safety documentation, or the reverse.

Because this concept is a viability question, this layer has a hard edge: co-operative and
nonprofit forms have real capitalization consequences, and those consequences decide whether
the pilot can be built at all.

Questions this raises:
- Worker co-op, multi-stakeholder co-op (growers and workers and eaters), nonprofit, or
  conventional small business? Each has a different capital story and a different claim to
  the surplus.
- Does a nonprofit form strengthen the legitimacy of taking a stream that charity also
  wants (see `tensions.md`), or weaken it by making the operation depend on grant cycles?
- What does "open structure" mean when the operation is 1.5 FTE and pre-revenue — does it
  mean anything yet, or is it a document to write later?

## 7. Labour — the workplace

The scan of the labour layer (G-OSA-36, `grocery/labour-layer.md`) named the principle:
openness should co-exist with labour rather than replacing or invisibilizing it. For a
processing plant the questions are concrete and immediate:

- The peak is the glut. The work is seasonal, and it collides with the farm season — the
  same weeks that surplus arrives are the weeks that farm labour is most expensive and
  hardest to find. Where does the crew come from in a two-week window?
- Is the work skilled enough to be worth paying well, and is the pay premium compatible
  with a margin built on free inputs? A plant whose economics assume cheap seasonal labour
  is a plant whose economics are dishonest.
- Who holds the tacit knowledge — the jam setting point, the ferment that smells right — and
  what happens to the operation when they leave? This is the strongest argument for
  documenting process, and documentation of process is the process layer above.

Questions this raises:
- Does open documentation of process *raise* or *lower* the position of skilled workers —
  does it deskill the work by making it replicable, or free the practitioners from being
  the only ones who know?
- What is the living-wage version of the pilot's staffing model, and what does it do to the
  numbers in `economics.md`?

## How the layers relate

They are not a checklist and they do not all belong at once. The ladder in `concept.md` is
the sequencing device: intake spec and batch record first (cheap, legible), food-safety
documentation second (expensive alone, cheap shared), formulations third (only worth it
with a network), facility designs and governance later, federation commons last.

The claim worth testing is that layers 1–2 are affordable for a single plant, layer 3 is not
justifiable for a single plant but is for two or more, and layers 4–5 depend on 2–3 being
real. If that ordering is wrong, the concept is wrong, and it should be found out by
examining real costs rather than by further reasoning.

## What this is not

Not a proposal that everything must be open. Not an argument that openness is free. The
recurring temptation in this sector is to treat "open" as an identity rather than a set of
artifacts with costs — the scan found exactly that pattern in food rescue. This document
treats each layer as a decision with a price.

Not legal advice.
