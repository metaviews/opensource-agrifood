# Case study: the open milking robot — what openness would change in Canada's most automated livestock sector

**Status:** working document (viability case study, not a scan; no G-ID)
**Written:** 2026-09-19
**Frame:** an ~80-cow Ontario dairy farm under supply management
**Prior evidence:** the livestock/pasture scan (`research/2026-08-livestock-pasture-virtual-fencing-scan.md`), the open-hardware/robotics/sensing scan (`research/2026-08-open-hardware-robotics-sensing-scan.md`), the machine-data/telematics scan (`research/2026-08-machine-data-access-telematics-scan.md`), and the definition document (`research/2026-09-definition-of-open-agrifood.md`). This document does not re-scan those sectors.

**How to read this document.** Every figure carries a provenance label — **verified** (primary source named in *Sources and verification* at the end), **unverified**, **assumed**, or **derived**. Where sources contradict, the contradiction is recorded rather than averaged. Section 10 states what the document does not demonstrate. It is a viability argument, not a legal analysis: regulatory requirements are named in §10, not analysed.

## 1. The premise

Dairy is the most automated livestock sector in Canadian agriculture, and robotic milking is its flagship technology. It is also the most structurally uniform sector in the country. Supply management means roughly 9,000 farms — 9,048 on August 1, 2025 (Agriculture and Agri-Food Canada / Canadian Dairy Information Centre) — selling milk at regulated prices within quota, averaging 107 milking cows per farm (Dairy Farmers of Canada, 2025), with nine in ten farms at 200 cows or fewer (DFC).

Yet the entire automation layer is proprietary. The share of Ontario farms milking with robots has doubled — 337 farms in 2016 to 715 in 2021 (University of Waterloo/OMAFRA case study, March 2024; corroborated in trade press) — and every one of those robots comes from a handful of firms (Lely, DeLaval, GEA, BouMatic) that sell it, service it, and hold its data layer.

The corpus has already established the gap: G-OSA-26's verified scan found open dairy automation "completely unaddressed in open repos" (last searched 2026-08-14). Novelty is settled. This case study takes that finding and asks the forward question:

**If the milking robot were open — hardware designs, firmware, and data layer — what would change, and could it pencil for a farm that looks like the Canadian average?**

The claim is **viability**, not novelty. The question is whether an open robot's savings mechanisms are real, how large they are, and what would have to be true before a farm bet on one.

## 2. The farm the math is done against

A single representative operation, deliberately aligned with the sector median rather than its leading edge:

- ~80 milking cows in Ontario (provincial average: 83 cows per farm — DFC, 2025).
- Quota-capped: the farm cannot grow its way out of a cost problem. Milk revenue is stabilized by the marketing board; production above quota earns nothing extra.
- Free-stall or easily retrofittable barn (tie-stall retrofits are the hard case — see §9).
- Family-operated with intermittent hired milking labour.

**The supply-management frame is the analytical spine of this case study.** In an unconstrained market, a robot pays partly by raising output — more milkings per day, more yield per cow. Under quota, that lever is closed. A Waterloo interviewee put the sector's own version of it:

> "you can fill more kilograms of milking quota with less cows on a robot. So invariably through that, you're milking less cows, you're feeding less cows... all of that stuff starts to add up and equates to efficiency" (Waterloo/OMAFRA case study, March 2024)

So the robot's value case in Canada is labour substitution, schedule flexibility, cow health and longevity, and capital/service cost — not yield expansion. That makes Canada the cleanest test environment for what openness contributes: the proprietary robot's advantages of scale and integration are worth less here, while its lock-in costs are borne at full weight by a farm with no growth offset.

## 3. The cost spine as it stands (proprietary path)

| Item | Figure | Provenance |
|---|---|---|
| Robot hardware + installation | $150,000–$250,000 per robot installed; brand-comparison tables put Lely Astronaut at $180K–$220K and DeLaval VMS at $170K–$210K | **unverified** — commercial equipment-aggregator sites (2026); primary vendors publish no prices; a widely shared ~$325,000 figure for a complete Lely A5 system (Missouri) circulates on social media and is treated as **unverified and weak** |
| Cows per robot | Mean 51 ± 9 (range 27–75) across Canadian AMS farms | **verified** — Matson et al. 2021, *Journal of Dairy Science* 104(7), benchmarking of Canadian AMS farms (cited in the Waterloo case study) |
| Annual maintenance/service | $7,000–$15,000 per robot per year | **unverified, sources conflict** — a University of Wisconsin–Madison extension budgeting tool assumes $8,000/robot/year; trade press uses ~$7,000; an equipment aggregator uses $9,000–$15,000. The spread is itself a finding: the buyer cannot price the ongoing relationship from public information, which is precisely the opacity an open platform removes |
| Software/data layer | Bundled into service agreements; cloud-dependent management software (Lely T4C, DeLaval DelPro, GEA FarmLogic) | **verified as structure** (vendor product documentation), **unverified as cost** — no public per-farm figure; the recurring corpus finding that the sector's own information is sold applies |
| Transition to profitability | Up to four years post-installation | **verified** — Waterloo/OMAFRA case study (March 2024), citing Hansen et al. 2019 |
| Retrofit/infrastructure | New build or significant renovation is the norm; electrical and internet upgrades required | **verified as structure** — Waterloo/OMAFRA case study informant statements; **unverified as cost** |
| US extension economics | Extension analysis (Tranel, USDA) models milking labour saved at ~$35,040/year against robot annual payments of ~$68,976 — i.e. robots currently pencil on non-labour value | **verified as the document's content**; the underlying Iowa assumptions are **unverified** for Ontario conditions |

At the farm level: an 80-cow Ontario farm typically needs two robots at the benchmarked 51 cows/robot, putting the all-in automation investment in the **$400,000+ range before barn work** — with the largest figures in the table unverified. That opacity is the first savings mechanism openness attacks.

## 4. The financial case: what is saved, what is gained

### The core argument in one sentence

Under supply management, revenue is fixed by quota, so cost is the farm's only lever — and the proprietary robot's largest cost after purchase is a recurring stream whose price the farm cannot see before buying. **Openness converts that opaque, escalating stream into a known, contestable one.** The financial case is the conversion of the stream, not the sticker price.

### The stream, sized

From the cost spine (§3): maintenance runs $7,000–$15,000 per robot per year (unverified; sources conflict), and the software/data layer is bundled into service agreements at no public price (verified as structure, unverified as cost). For the two-robot farm:

| Line | Annual | Provenance |
|---|---|---|
| Maintenance, 2 robots | $14,000–$30,000 | unverified (aggregator spread; recorded, not averaged) |
| Software/data subscriptions | $2,000–$8,000 illustrative | unverified — the band is illustrative; the true figure is not public, which is the finding |
| **Total recurring** | **$16,000–$38,000** | derived from the above |

Over the asset's working life — 12 years, mid-range for robots pushed to the million-milkings benchmark (**assumed**; no verified Canadian service-life figure located) — that stream totals **$192,000–$456,000: half to more than the entire $400,000+ purchase price**. The purchase is the entry fee; the stream is the product. This is the subscription-economy structure the telematics scan documented in field equipment, at its most concentrated.

### What openness saves from the stream

Not all of it — the robot needs parts and some skilled labour either way. The contestable share is routine maintenance, diagnostics, and the software fee:

- Contestable assumption: 30–50% of the recurring stream (**assumed** — the pivotal assumption in this case study, flagged for farm-record validation in §9).
- That is **$4,800–$19,000 per year**, or **$58,000–$228,000 over the 12-year life — 14% to 57% of the capital cost** — from contesting the relationship alone, before any capital saving.

Two properties make this worth more than its face value:

1. **It compounds in the farm's favour.** Proprietary service is a priced monopoly, so the stream escalates with the vendor's pricing power; the open share is bounded by competition.
2. **It converts an unknown into a known.** For a farm whose milk cheque is fixed, cost *predictability* is itself worth money — and the $7K–$15K spread exists precisely because public information is absent.

### The other gains, in order of certainty

1. **Price transparency itself** (Stage 1, cheapest): published data schemas and interfaces let the farm comparison-shop service and modules. Zero hardware risk; immediate leverage.
2. **Asset protection** (Stage 2): the $400,000 capital is defended against vendor sunset. An open-firmware robot remains serviceable — and retains residual/resale value — after its vendor's support window closes. The salvage value of proprietary robots post-sunset is unquantified; the risk it hedges is real.
3. **Cow-health data competition** (Stage 1–2): open data lets independent analytics tools compete on the farm's own herd data. Documented AMS benefits include earlier health detection and longer cow life (verified as claims — Waterloo/OMAFRA). An assumed modest delta — two fewer premature culls a year at $2,500–$3,500 per replacement — is **$5,000–$7,000/year** (**assumed**, unverified).
4. **Capital saving**: the honest answer is "not for the first-generation machine; yes through two other routes that already exist" — see the three routes below.

### Could the open alternative be substantially cheaper up front? Three routes, in order of evidence

**Route A — the used-robot on-ramp, secured by openness** (Stage 1–2; strongest evidence).

A used market already exists. Lely runs a certified pre-owned programme, and its own listings put a used Astronaut A4+ at **from $80,000 USD** against **from $186,308 USD** for a new Astronaut PowerStart package — a 57% discount, verified from Lely's own pre-owned listings (checked 2026-09-19; figures USD). Two used robots instead of two new is a **$160,000 vs $372,616** entry point: a >$212,000 reduction that exists today without any open-source effort.

But the discount is a gamble, and that is the point. A used proprietary robot is cheap precisely because its software lifecycle is the vendor's — it ages toward the sunset risk of §5.3, and Lely's certification exists to keep the used channel inside its own service stream.

So openness's upfront-cost move is not a cheaper new machine; it is **making the used machine safe to buy.** Open diagnostics and firmware support convert the used-robot discount from a depreciation gamble into an on-ramp: the farm that could never fund $400K can fund $160K, and the open layer (Stage 1–2) is what protects the difference. This is the largest defensible upfront saving in this case study, and it requires no new hardware to be built.

**Route B — the design-commons assembly mechanism** (Stage 3; the strongest precedent).

The corpus's closest verified precedent for open hardware undercutting proprietary capital cost is AgOpenGPS (curated record): a full open RTK autosteer build runs **~€1,660–2,190** (AgOpen Shop kit pricing) against commercial RTK guidance entry points of **$10,000+** — a ~78% reduction (order-of-magnitude; currency-mixed), achieved with commodity components, farmer assembly, and a community-maintained design. The mechanism is real and documented.

But guidance is a bolt-on to a tractor; a milking robot touches milk and cows, and carries compliance, hygiene, and animal-safety engineering that a steering kit does not. The realistic band for a full open milking robot built the AgOpenGPS way — commodity arm (industrial 6-axis arms start around **$15,000**; cobots **$3,000–$30,000**; open-source arms far less; verified as market ranges), open firmware, local assembly, no dealer margin — is **30–50% below the proprietary installed price: $200,000–$280,000 for the two-robot farm** (**speculative**: no open design exists to cost; the band is bounded by the AgOpenGPS mechanism and the complexity discount below).

**Route C — the FarmBot counter-example** (the honesty check).

Open does not automatically mean cheap for complex machines at low volume. FarmBot is genuinely open (MIT licence, curated record) and costs more than comparable closed garden systems, because small-scale manufacturing of complex machines is expensive — the margin was never the whole premium; volume manufacturing and reliability engineering are. A milking robot is closer to FarmBot's complexity class than to AgOpenGPS's.

So the honest claim is: **a first-generation open milking robot will probably not be substantially cheaper up front.** Its early cost case is the recurring-stream conversion above, which starts immediately. The substantial upfront reductions arrive on two clocks: Route A immediately (used base + open support) and Route B at fleet scale (local assembly amortized across the 9,048-farm population of §5.4). Upfront cheapness is the *last* thing openness delivers, and the case for pursuing it does not wait on it.

### The sector-level gain — where supply management earns its keep in this argument

Canada's 715 Ontario robot farms (2021, verified) spend a seven-figure annual sum on a service channel that is mostly dealer-captive. Localizing even $5,000–$10,000 per farm per year of that spend keeps **$3.6M–$7.2M a year** in regional independent-technician wages instead of flowing to dealer margins (**scenario**, derived).

The design cost amortizes the same way: a platform developed for $5M–$10M (**assumed** scale) spread across 500 adopting farms costs **$10,000–$20,000 per farm** — against a $400,000 proprietary alternative carrying that margin per unit. And the money currently leaves the country: Lely is Dutch, DeLaval Swedish, GEA German. The open robot is the only version of dairy automation where a meaningful share of the spend stays in Canada.

### Why this scenario is worth pursuing despite the assumptions

- **The verified baseline:** robots already take up to four years to reach profitability — the technology is marginal even when it works, and every recurring dollar shaved is the difference between pencil and not.
- **The verified structure:** 9,048 farms, near-identical, quota-stabilized, holding a 12+-year asset — the exact population for which shared open infrastructure beats nine vendor silos.
- **The verified gap:** nobody has built it.

A sector whose revenue is deliberately stabilized is the one place where a lower-cost, longer-lived, farmer-serviceable automation layer doesn't need to out-innovate the incumbents — only to outlast them.

## 5. What openness changes, mechanism by mechanism

The open robot does not win by being a cheaper appliance on day one — an open design with no factory behind it will not undercut a Lely arm at the showroom. Its savings mechanisms are structural:

**5.1 The service relationship becomes contestable.** The maintenance figure that varies $7K–$15K per robot per year (unverified) is the price of a captive relationship: Ontario service is delivered through vendor-owned or dealer networks (six Lely Centres, nine GEA dealerships, DeLaval's Peterborough training centre — verified, Waterloo case study). With open documentation, published diagnostics, and a right-to-repair firmware layer, part of that spend moves to the farmer or to any independent technician. The telematics scan documents the same enclosure in field equipment; dairy is its most concentrated instance.

**5.2 The data layer stays on the farm.** Proprietary robots are cloud products: herd health, milk quality, and milking-frequency data live in vendor software on vendor terms. Under the definition document's five operational layers, this is the layer where openness is worth the most per dollar — an open data schema and local-first software cost little to build and cannot be repriced later. For a quota farm whose milk cheque is fixed, data about cow health (earlier mastitis detection, longer cow life — both documented benefits, verified as claims, Waterloo case study) is value that accrues to the farm only if it controls the data.

**5.3 No vendor-sunset risk.** A proprietary robot is a fifteen-to-twenty-year capital asset bound to a software lifecycle the farm does not govern. Open firmware on documented hardware means the farm — or the fleet's maintenance commons (§6) — can keep a robot in service after the vendor has moved on. In a sector where farms take on four-year transitions to profitability (verified), the asset's outliving its vendor's support window is a material risk, and it is unpriced in the current market.

**5.4 Homogeneity amortizes the design cost.** This is the supply-management dividend. Open designs win when a population of similar users shares one platform instead of N vendor silos. Canada has 9,048 farms (verified) at 107-cow averages, all producing the same regulated product under the same standards, mostly in two provinces — a more uniform deployment population than any other livestock sector in the country. One good open robot design, one shared parts catalog, one regional technician network: the design cost spread over ~9,000 near-identical barns is the closest thing agrifood hardware has to a natural open-source market.

**5.5 Quota discipline is an open-system advantage.** Because supply management caps output, the open robot does not need to out-produce the proprietary one — only to milk the same cows at the same frequency while costing less to own, service, and trust. Proprietary platforms compete partly on integration breadth (feeders, sort gates, breeding modules — more subscription surface). A quota farm's rational purchase is the opposite: the minimal, durable, repairable core.

## 6. Entity form: one farm pilots, the fleet compounds

The viability case is made at a single farm; the economics are won at the fleet level. Staged openness, cheapest rungs first (each rung: cost, who benefits, what breaks):

- **Stage 0 — closed but honest.** Never describe a system as open source while publishing nothing (the corpus's counter-example: a food-rescue nonprofit claiming "fully open source" with `license: null` on both public repos).
- **Stage 1 — open data and interfaces.** Publish the data schema, milk-meter outputs, and farm-management APIs; keep hardware proprietary. Cheapest rung; the farm gains data control and vendor comparison power immediately.
- **Stage 2 — open firmware on commercial hardware.** GPL firmware, documented protocols, right-to-repair on the installed base. Service contestability (§5.1) begins here; only pays widely once a community of farms shares diagnostics.
- **Stage 3 — open hardware design.** Full mechanical/electrical designs (CERN-OHL-class reciprocity or permissive), self-build and third-party manufacture. The stage that only pays at fleet scale, and the stage the current market makes hardest to enter.
- **Stage 4 — the maintenance commons.** Shared parts inventory, a regional independent-technician network, pooled spares across farms — the federated layer, and the analogue to the co-operative institutions dairy already has.

**Who pays for the commons: the supply-management dividend, stated institutionally.** The staged ladder's missing question is funding — and supply management is what answers it.

In an unconstrained commodity market, open source is a prisoner's dilemma: each farm privately benefits from a proprietary edge over its neighbours, so nobody rationally funds a commons. Supply management removes that dilemma structurally. Quota caps output and marketing boards pool the market side, so **no farm gains relative advantage by keeping its robot proprietary** — the robot cannot buy more quota. With inter-farm competition designed out of the production decision, the open robot becomes a pure shared good, and the rational funding model is the one the sector already runs: collective. The institutions exist — marketing boards, Dairy Farmers of Canada's research check-off, provincial co-op federations — and they can levy at sector scale.

The arithmetic: a $5M–$10M open platform (**assumed** scale, §4) levied across all 9,048 Canadian dairy farms (verified) is:

- **$553–$1,105 per farm one-time**, or
- **$111–$221 per farm per year on a five-year check-off** (**derived scenario**)

Less than a single maintenance visit per year, against the $7K–$15K annual service spend it attacks. At full-sector levy the design cost is essentially free to each farm. The reason to structure it as a commons rather than a vendor product is not idealism but arithmetic: the levy converts what the proprietary model prices per unit at $400K into a sector fixed cost smaller than the sector's annual robot-service rounding error.

This is also why the supply-managed commodities — dairy, poultry, eggs — are the natural first hosts of shared open infrastructure in Canadian agriculture generally: they are the only sectors where the institutional vehicle, the homogeneous fleet, and the absence of a competitive reason to refuse the commons all hold at once.

The open question, recorded honestly: whether the boards will treat on-farm automation as within their research-mandate check-off, or as a private capital decision they leave alone. That is an institutional question, not a technical one, and it is untested.

## 7. Labour

Labour is load-bearing here, not a footnote. The documented primary driver of adoption in Ontario is the labour shortage — "the labor shortage is a very real thing. It's just hard to find people to do that type of work" (verified — Waterloo/OMAFRA informants) — and the robot's first product is hours returned: the hockey-game flexibility quote in the same study is the honest face of it. An open robot does not change the labour displacement; milking labour, often hired and increasingly migrant across the sector, is reduced either way. What openness changes is the *other* labour:

- **Who services the machine.** Proprietary robots create a licensed-technician labour channel (Waterloo informants describe farm kids becoming "fantastic technicians" through vendor channels). Open service localizes that work — an independent-technician trade instead of a dealer credential — and keeps those wages in the region.
- **The skills commons.** Vendor training is proprietary and unpriced publicly. Open documentation makes service knowledge itself a shared, teachable asset — L'Atelier Paysan's self-build training model (curated record) applied to a robotic barn.

## 8. The honesty clause

Named in advance, per the upcycling concept's discipline: if the numbers demand a dropped rung, it will be **Stage 3 hardware reciprocity** — the case study concedes an open-firmware, open-data robot built with proprietary-sourced components before it concedes the data layer or the service commons. The data layer is the rung this concept does not drop, because §5.2 is where quota-farm value concentrates, and a platform that re-encloses data would make the whole case incoherent. The dropped rung, if dropped, gets published.

## 9. What has to be true before this claims viability

1. A credible prototype path exists — at minimum Stage 1–2 on an installed proprietary base (data capture, diagnostics, firmware on one vendor's machine), before any full open hardware build.
2. An independent-service legal and practical route is confirmed (equipment warranty terms, milk-equipment regulatory requirements, and standards for milking-machine construction — not analysed in this document; see §10).
3. The maintenance figure's real spread is established from farm records rather than aggregators — the $7K–$15K conflict needs farm-level resolution.
4. At least one organization with fleet access (a dairy co-op, a research centre, a farmer association) commits to hosting a Stage 1 pilot.
5. The retrofit constraint is scoped: free-stall farms first; the tie-stall share of Ontario barns is the segment where even a perfect open robot pencils worst (verified as structure — Waterloo informant: a 40-cow tie-stall farm "is a little bit more challenging to adopt this technology").

## 10. What this case study does not demonstrate

- **No open milking robot exists.** The closest things found: Open Source Ecology Germany's "Milker/AMOR" project — a development-stage wiki project, not examined in depth here (**lead**, unverified); a GPL-2.0 DIY milker/receiver documentation repo (MikesMachines/MilkIt — verified via GitHub API, GPL-2.0, last pushed 2024 — a DIY milker, not a robot); and a DeLaval data-analysis repo with **no licence** (therefore not open) dormant since 2019. G-OSA-26's finding stands.
- No prototype is costed; no service economics are modelled from real farm records; the retrofit cost universe is unpriced. The financial case's pivotal 30–50% contestable-share assumption is illustrative, not evidenced — it is the first number a farm-record pilot must test. The 12-year asset life is assumed.
- Regulatory requirements for milking equipment and milk quality are named, not analysed. Compliance paths are a pilot question, not a desk question. This document is a viability argument, not legal advice.
- Quota transfer, quota capital, and the sector's financing structures are outside this document's scope.
- The proprietary figures rest partly on aggregator sources because the vendors do not publish prices; the case study's own finding is that this opacity is part of the case — but it means the cost spine's largest numbers are the least verified.
- **Who to ask** (the house rule for absent evidence): the Ontario Dairy Research Centre (University of Guelph — AMS research fleet), OMAFRA dairy staff, Lely/GEA Ontario dealer principals, the Canadian Dairy XPO community, ICAR (international animal-recording standards), and dairy co-operatives considering fleet-level technology strategy.

## Sources and verification

- Agriculture and Agri-Food Canada / Canadian Dairy Information Centre — "Canada's dairy industry at a glance" (9,048 farms, August 1, 2025). Last checked 2026-09-19.
- Dairy Farmers of Canada — farm size statistics (107-cow average 2025; provincial averages; 9-in-10 ≤200 cows). Last checked 2026-09-19.
- University of Waterloo, School of Environment, Enterprise and Development (Rana, Huneke, Hall, Vinodrai), "Case Study: Dairy Robotics," prepared for *Remote controlled: The impacts of disruptive technologies in the Ontario agriculture sector*, funded by ARIO/OMAFRA, March 2024 (Ontario farm counts, adoption drivers, labour, retrofit, service networks, informant quotes). Last checked 2026-09-19.
- Matson, King, Duffield, Santschi, Orsel, Pajor, Penner, Mutsvangwa, DeVries (2021), *Journal of Dairy Science* 104(7) — Canadian AMS benchmarking (51 ± 9 cows/robot), via the Waterloo case study's citations.
- USDA ERS Charts of Note (June 2026) — US robotic milking 6% of milk 2021; 13% of 150–499-head farms. Last checked 2026-09-19.
- Tranel (USDA) — "Economics of Robotic Milking Systems" (extension model). Document content verified; Ontario transferability unverified.
- Equipment-price aggregators (dairyequipmentmfg.com 2026; ccf.us; TheBullvine; Univ. of Wisconsin–Madison extension budgeting tool) — recorded as **unverified**, contradictions preserved.
- Lely pre-owned listings (pre-owned.lelyna.com) — used Astronaut A4+ from $80,000 USD; Astronaut PowerStart package from $186,308 USD. Vendor's own sales channel, **verified as the listing content**, last checked 2026-09-19.
- AgOpen Shop (agopen.shop) kit pricing ~€1,660–2,190 for a full open RTK autosteer build; commercial RTK entry ~$10,000+ (trade/forum/video sources) — order-of-magnitude comparison, currency-mixed, **labelled accordingly**.
- Robot-arm market ranges (industrial 6-axis from ~$15K; cobots $3K–$30K; open-source arms cheaper) — market-survey sources, **verified as ranges**, last checked 2026-09-19.
- GitHub API licence checks: MikesMachines/MilkIt (GPL-2.0, pushed 2024-01); Leijtenss/Milking-Robot (no licence, pushed 2019-08). Last checked 2026-09-19.
- Parent corpus: G-OSA-26 livestock scan; open-hardware/robotics/sensing scan; machine-data/telematics scan; definition document.
