# The open climate computer: synthesis

*The summary document for the CEA case study, written for the human reader first. The research files under `cea/research/` carry the provenance machinery; this document carries the argument. Every factual claim here is backed there. Written 2026-09-21.*

---

## The claim, in one sentence

An open-source climate-control layer for greenhouses is technically proven at the backyard scale, economically most valuable at the community scale in Canada's North, entirely absent at the commercial scale, and the fastest route to building it runs through design and data sharing that three existing northern greenhouses have already proven the need for but never published.

## What this case study is about

Dairy was our first case study in what open source would change about farming. Its protagonist was a machine. This one has a different protagonist: a span of scale. Controlled-environment agriculture, or CEA, is the one farming technology whose unit stretches from a kitchen-counter grow unit to a forty-hectare facility, and our starting finding was strange enough to build a case on: the open layer exists at the bottom of that span and vanishes at the top. A hobbyist can run a greenhouse on open-source software today (Mycodo, GPL-3.0, actively maintained, with a peer-reviewed deployment in Bhutan). The biggest greenhouse companies in the world sell systems with no open layer at all, and no open project has ever reached their scale. Nothing exists in between.

We framed the case as a ladder with three rungs: the backyard unit, the community greenhouse in a northern Canadian hamlet, and the commercial facility. The community greenhouse is where we did the math, because it is where the closed model fails hardest and where openness has a job no vendor is coming to do.

## What the evidence shows

Four things, each verified against primary sources.

**First, the North pays an order of magnitude more for energy, and control is where that money leaks.** Electricity in Nunavut costs 62 to 75 cents per kilowatt-hour, ten to fifteen times southern Canadian rates (Qulliq Energy Corporation's posted rates). A cold-climate greenhouse consumes 700 to 1,200 kWh per square metre per year for heating and lighting (a 2025 *Applied Energy* study, which is itself open-licensed). Put together, that is roughly $435 to $745 per square metre per year for a continuously operated modern greenhouse, before a single tomato is sold. And the research literature is unanimous that control strategies alone, better setpoints, scheduling, predictive control, recover 17 to 43 percent of that. Where electricity costs ten times normal, the software that schedules your lights is not a gadget. It is the operating budget.

**Second, the community greenhouse already exists, and it already runs on design rather than cheap power.** The best-documented example is Naujaat, Nunavut: a 42-foot geodesic dome, built in 2015 for $164,000, running hydroponic towers with a capacity of about 2,000 plants. Its solar design captures and stores heat so well that one to three hours of sunlight holds it thirty degrees above the outside temperature, and it operated seven months of the year without buying power at all. In Nunavik, the Kuujjuaq cooperative greenhouse instrumented its own building, diagnosed its day-night temperature swing, and built a rock-bed heat store that raised its night-time floor by about seven degrees. These communities were doing open-source-style engineering before the case study existed. They just were not calling it that, and nobody published the designs under a licence anyone can build from.

**Third, the pieces of the commons all exist separately.** Peer-reviewed proof that control strategies save 22 to 43 percent of energy. Two documented northern thermal designs, one of them in a peer-reviewed journal. Open-source energy metering you can buy today (OpenEnergyMonitor). A published, unadopted open data standard for greenhouses. What does not exist is the join: nobody has published the designs under an open licence, versioned control profiles other communities can fork, or the performance numbers, the kilowatt-hours per kilogram of greens, that would let community number four start where community three left off.

**Fourth, the economics have a comparator, and it is already public money.** Nutrition North, the federal program that subsidizes food freight to the North, spent $21 million in 2016 subsidizing 7.4 million kilograms of imported fruit and vegetables. That is about $2.84 per kilogram, forever, to move food instead of growing it. A community greenhouse in Naujaat was built for $164,000. A dollar of capital grows produce; a fraction of a cent per kilogram of subsidy moves it. The case does not need to argue that local growing is morally urgent. The arithmetic already treats it as underfunded.

## The strongest things a skeptic can say back

We keep these in the document rather than footnotes, because they are the honest test of the claim.

**Open does not mean cheap.** FarmBot is genuinely open source and costs more than a closed garden system, because building complex machines at low volume is expensive. A first-generation open climate computer will probably not undercut a commercial controller's sticker price. Our answer: at rung B, the sticker price is not where the money is. Energy and downtime are, and both are design and control problems.

**The flagship failed.** MIT's OpenAg Food Computer was the loudest everything-open CEA project ever launched, and it collapsed into archived repositories and abandoned builds before its greenhouse phase produced a working system at any scale. The lesson we draw is not that open CEA is impossible; it is that claiming all layers at once, before any layer works, is how the field's best-funded attempt died. This case starts at the layers that already work: control and data.

**Energy might still not close.** The honest gap in our cost spine is that no northern community greenhouse has ever published its own kilowatt-hours per kilogram. We verified the electricity price, we verified the consumption range for the building class, and we verified that design measures move both. But the number that would settle the viability question, the measured kWh per kilogram from an actual northern dome through a full year, has never been published by anyone. That is not an accident, and it is the case's point: the missing layer is measurement and publication, not invention.

**The best design in the field is locked behind a paywall.** The Kuujjuaq rock-bed heat store, the one peer-reviewed thermal storage system built for a northern greenhouse, is documented in a paper you have to buy from Elsevier. Open by publication is not open by licence. The next community cannot build from the abstract. If anything demonstrates why this case exists, it is that.

**Demand is assumed.** Fifty-three community gardens and greenhouses are inventoried across the territorial North, and we know from one of them (Inuvik, running since 1999) that the form survives on plot fees and a commercial second floor. But we have not surveyed whether those operators want shared control infrastructure. The event in October is the first place that question gets asked in a room.

## What would change our mind

The claim is falsifiable, and here is what would falsify it:

1. A measured full-year energy ledger from a northern greenhouse showing that design and control cannot close the gap between local growing cost and imported cost, even at the design levels Naujaat and Kuujjuaq reached.
2. Evidence that proprietary climate computers already serve the community scale adequately, with service models that work in fly-in communities. We found none; if one exists, the case's availability argument weakens.
3. A commercial open greenhouse platform emerging from somewhere we did not look, which would move this from "nobody has built it" to "somebody has, and the case becomes a study of why it did not spread."

## What this synthesis does not claim

- It does not claim an open commercial greenhouse system is imminent. Rung C is a ceiling, not a deliverable.
- It does not claim open source makes greenhouse food cheap. It claims openness moves the cost from an opaque, vendor-captured stream to a shared, improvable one, which at these electricity prices is worth more than cheapness.
- It does not claim northern communities need outside technologists. The evidence says the opposite: Naujaat and Kuujjuaq built the hard parts. The missing layer is publication and instrumentation, which is the cheapest rung on the ladder and the only one this project is positioned to argue for.
- It does not claim a pilot. The pilot question (which community, which jurisdiction, what funding) is deliberately open and recorded in the roadmap as a decision for later.

## Where the evidence stands

**Earned:** the closed commercial stack (verified against vendor documentation and the G-OSA-22 scan); the price of northern electricity (Qulliq Energy's posted rates); the consumption range for the building class (peer-reviewed, open-licensed); the value of control strategies (peer-reviewed, three independent studies); the existence and design of northern community greenhouses (peer-reviewed and journalistic sources, read in full); the cost of building one (reported figures from the build itself); the subsidy comparator (federal figures, derived division shown).

**Thin:** the availability argument (no documented case of a proprietary climate computer failing in a fly-in community; the analogy to consumer IoT and the ISOBlue design principle carries it, but a documented case would carry it further). The transferability of southern control-strategy savings to passive-solar domes at 66°N. OpenEnergyMonitor's licence formality (active project, incomplete licensing).

**Not yet earned:** the measured kWh per kilogram from a real northern greenhouse. The demand signal from the operators themselves. Any claim about rung C.

The first two not-yet-earned items are the same thing: a season of instrumented operation, published openly, would move the case from "the numbers say it should work" to "here is the number." Everything needed to produce it, control software, metering hardware, and the benchmarking method, already exists as open source. That is the case's ending and its ask: the hardware is on the shelf, the communities have proven the need, the subsidy arithmetic says the money is already being spent. What nobody has done is connect the meter to the commons and publish.

---

## Sources (the short list)

The full provenance trail is in `cea/research/` and the case study document. The load-bearing sources:

- Qulliq Energy Corporation, posted customer rates (October 2023)
- Trépanier, Gosselin & Jørgensen (2025), *Applied Energy* 382:125163 (open access, CC BY)
- Piché et al. (2020), *Solar Energy* 204:90–105 (paywalled; the case's own cautionary example)
- Lamalice et al. (2018), *Canadian Food Studies* 5(2) (open access)
- Koller (2017), Earth Island Journal, on the Growing North greenhouse, Naujaat; CBC News (2016); The Eyeopener (2015)
- G-OSA-22 (greenhouse/CEA scan) and G-OSA-39 (northern food systems scan), with curated records: mycodo.md, openag-food-computer.md, common-greenhouse-ontology.md, wageningen-agc-datasets.md, arctic-cooperatives.md, siku.md
- Nutrition North Canada program spending, 2016
