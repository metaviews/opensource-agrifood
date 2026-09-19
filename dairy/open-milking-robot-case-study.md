# Case study: the open milking robot — what openness would change in Canada's most automated livestock sector

**Status:** working document (viability case study, not a scan; no G-ID)
**Written:** 2026-09-19
**Frame:** ~80-cow Ontario dairy farm under supply management
**Prior evidence cited:** G-OSA-26 livestock/pasture scan (`research/2026-08-livestock-pasture-virtual-fencing-scan.md`), open-hardware/robotics/sensing scan (`research/2026-08-open-hardware-robotics-sensing-scan.md`), machine-data/telematics scan (`research/2026-08-machine-data-access-telematics-scan.md`), definition document (`research/2026-09-definition-of-open-agrifood.md`). This document does not re-scan those sectors.

Not legal advice.

---

## 1. The premise

Dairy is the most automated livestock sector in Canadian agriculture, and robotic milking is its flagship technology. The sector is also the most structurally homogenous in the country: supply management means roughly 9,000 farms **verified** (Agriculture and Agri-Food Canada / Canadian Dairy Information Centre, 9,048 farms, August 1, 2025) selling milk at regulated prices within quota, averaging 107 milking cows per farm **verified** (Dairy Farmers of Canada, 2025), with nine in ten farms at 200 cows or fewer **verified** (DFC). And yet the entire automation layer — the robots that now milk a doubling share of Ontario farms (337 farms in 2016 to 715 in 2021 **verified**; University of Waterloo/OMAFRA case study, March 2024, and corroboration in trade press) — is proprietary. A handful of firms (Lely, DeLaval, GEA, BouMatic) sell, service, and hold the data layer of every robot milking a Canadian cow.

The corpus has already established the gap: G-OSA-26's verified scan found open dairy automation "completely unaddressed in open repos" (last searched 2026-08-14). This case study takes that finding and asks the forward question: **if the milking robot were open — hardware designs, firmware, and data layer — what would change, and could it pencil for a farm that looks like the Canadian average?**

The claim is **viability**, not novelty. Novelty is settled. The question is whether an open robot's savings mechanisms are real, how large they are, and what would have to be true before a farm bet on one.

## 2. The farm the math is done against

A single representative operation, deliberately aligned with the sector median rather than its leading edge:

- ~80 milking cows in Ontario, where the provincial average is 83 cows per farm **verified** (DFC, 2025).
- Quota-capped: the farm cannot grow its way out of a cost problem. Milk revenue is stabilized by the marketing board; production above quota earns nothing extra.
- Free-stall or easily retrofittable barn (tie-stall retrofits are the hard case — see §8).
- Family-operated with intermittent hired milking labour.

**The supply-management frame is the analytical spine of this case study.** In an unconstrained market, a robot pays partly by raising output — more milkings per day, more yield per cow. Under quota, that lever is closed. A Waterloo interviewee stated the sector's own version of this: "you can fill more kilograms of milking quota with less cows on a robot. So invariably through that, you're milking less cows, you're feeding less cows... all of that stuff starts to add up and equates to efficiency" **verified** (Waterloo/OMAFRA case study, March 2024, informant quote). So the robot's value case in Canada is labour substitution, schedule flexibility, cow health and longevity, and capital/service cost — not yield expansion. That makes Canada the cleanest test environment for what openness contributes, because the proprietary robot's advantages of scale and integration are worth less here, while its lock-in costs are borne at full weight by a farm with no growth offset.

## 3. The cost spine as it stands (proprietary path)

Every figure carries a provenance label. Where sources contradict, the contradiction is recorded, not averaged.

| Item | Figure | Provenance |
|---|---|---|
| Robot hardware + installation | $150,000–$250,000 per robot installed; brand-comparison tables put Lely Astronaut at $180K–$220K and DeLaval VMS at $170K–$210K | **unverified** — commercial equipment-aggregator sites (2026); primary vendors (Lely, DeLaval) publish no prices; a widely shared figure of ~$325,000 for a complete Lely A5 system (Missouri) circulates on social media and is treated as **unverified and weak** |
| Cows per robot | Mean 51 ± 9 (range 27–75) across Canadian AMS farms | **verified** — Matson et al. 2021, *Journal of Dairy Science* 104(7), benchmarking of Canadian AMS farms (cited in the Waterloo case study) |
| Annual maintenance/service | $7,000–$15,000 per robot per year | **unverified, sources conflict** — a University of Wisconsin–Madison extension budgeting tool assumes $8,000/robot/year; trade press uses ~$7,000; an equipment aggregator uses $9,000–$15,000. The spread is itself a finding: the buyer cannot price the ongoing relationship from public information, which is precisely the opacity an open platform removes |
| Software/data layer | Bundled into service agreements; cloud-dependent management software (Lely T4C, DeLaval DelPro, GEA FarmLogic) | **verified as structure** (vendor product documentation), **unverified as cost** — no public per-farm figure; the recurring corpus finding that the sector's own information is sold applies |
| Transition to profitability | Up to four years post-installation | **verified** — Waterloo/OMAFRA case study (March 2024), citing Hansen et al. 2019 |
| Retrofit/infrastructure | New build or significant renovation is the norm; electrical and internet upgrades required | **verified as structure** — Waterloo/OMAFRA case study informant statements; **unverified as cost** |
| US extension economics | Extension analysis (Tranel, USDA) models milking labour saved at ~$35,040/year against robot annual payments of ~$68,976, i.e. robots currently pencil on non-labour value | **verified as the document's content**; the underlying Iowa assumptions are **unverified** for Ontario conditions |

At the farm level: an 80-cow Ontario farm typically needs two robots at the benchmarked 51 cows/robot, putting the all-in automation investment in the **$400,000+ range before barn work** — with the largest figures in the table **unverified**, which is the first savings mechanism openness attacks.

## 4. What openness changes, mechanism by mechanism

The open robot does not win by being a cheaper appliance on day one — an open design with no factory behind it will not undercut a Lely arm at the showroom. Its savings mechanisms are structural:

**4.1 The service relationship becomes contestable.** The maintenance figure that varies $7K–$15K per robot per year **unverified** is the price of a captive relationship: Ontario service is delivered through vendor-owned or dealer networks (six Lely Centres, nine GEA dealerships, DeLaval's Peterborough training centre — **verified**, Waterloo case study). With open documentation, published diagnostics, and a right-to-repair firmware layer, part of that spend moves to the farmer or to any independent technician. The corpus's telematics scan (machine data access) documents the same enclosure in field equipment; dairy is its most concentrated instance.

**4.2 The data layer stays on the farm.** Proprietary robots are cloud products: herd health, milk quality, and milking-frequency data live in vendor software on vendor terms. Under the definition document's five operational layers, this is the layer where openness is worth the most per dollar — an open data schema and local-first software cost little to build and cannot be repriced later. For a quota farm whose milk cheque is fixed, data about cow health (earlier mastitis detection, longer cow life — both documented benefits **verified** as claims, Waterloo case study) is value that accrues to the farm only if it controls the data.

**4.3 No vendor-sunset risk.** A proprietary robot is a fifteen-to-twenty-year capital asset bound to a software lifecycle the farm does not govern. Open firmware on documented hardware means the farm — or the fleet's maintenance commons (§5) — can keep a robot in service after the vendor has moved on. In a sector where farms take on four-year transitions to profitability **verified**, the asset's outliving its vendor's support window is a material risk, and it is unpriced in the current market.

**4.4 Homogeneity amortizes the design cost.** This is the supply-management dividend. Open designs win when a population of similar users shares one platform instead of N vendor silos. Canada has 9,048 farms **verified** at 107-cow averages, all producing the same regulated product under the same standards, mostly in two provinces — a more uniform deployment population than any other livestock sector in the country. One good open robot design, one shared parts catalog, one regional technician network: the design cost spread over ~9,000 near-identical barns is the closest thing agrifood hardware has to a natural open-source market.

**4.5 Quota discipline is an open-system advantage.** Because supply management caps output, the open robot does not need to out-produce the proprietary one — only to milk the same cows at the same frequency while costing less to own, service, and trust. Proprietary platforms compete partly on integration breadth (feeders, sort gates, breeding modules — more subscription surface). A quota farm's rational purchase is the opposite: the minimal, durable, repairable core.

## 5. Entity form: one farm pilots, the fleet compounds

The viability case is made at a single farm; the economics are won at the fleet level. Staged openness, cheapest rungs first (each rung: cost, who benefits, what breaks):

- **Stage 0 — closed but honest.** Never describe a system as open source while publishing nothing (the corpus's counter-example: a food-rescue nonprofit claiming "fully open source" with `license: null` on both public repos).
- **Stage 1 — open data and interfaces.** Publish the data schema, milk-meter outputs, and farm-management APIs; keep hardware proprietary. Cheapest rung; the farm gains data control and vendor comparison power immediately.
- **Stage 2 — open firmware on commercial hardware.** GPL firmware, documented protocols, right-to-repair on the installed base. Service contestability (§4.1) begins here; only pays widely once a community of farms shares diagnostics.
- **Stage 3 — open hardware design.** Full mechanical/electrical designs (CERN-OHL-class reciprocity or permissive), self-build and third-party manufacture. The stage that only pays at fleet scale, and the stage the current market makes hardest to enter.
- **Stage 4 — the maintenance commons.** Shared parts inventory, a regional independent-technician network, pooled spares across farms — the federated layer, and the analogue to the co-operative institutions dairy already has.

## 6. Labour

Labour is load-bearing here, not a footnote. The documented primary driver of adoption in Ontario is the labour shortage — "the labor shortage is a very real thing. It's just hard to find people to do that type of work" **verified** (Waterloo/OMAFRA informants) — and the robot's first product is hours returned: the hockey-game flexibility quote in the same study is the honest face of it. An open robot does not change the labour displacement; milking labour, often hired and increasingly migrant across the sector, is reduced either way. What openness changes is the *other* labour:

- **Who services the machine.** Proprietary robots create a licensed-technician labour channel (Waterloo informants describe farm kids becoming "fantastic technicians" through vendor channels). Open service localizes that work — an independent-technician trade instead of a dealer credential — and keeps those wages in the region.
- **The skills commons.** Vendor training is proprietary and unpriced publicly. Open documentation makes service knowledge itself a shared, teachable asset — L'Atelier Paysan's self-build training model (curated record) applied to a robotic barn.

## 7. The honesty clause

Named in advance, per the upcycling concept's discipline: if the numbers demand a dropped rung, it will be **Stage 3 hardware reciprocity** — the case study concedes an open-firmware, open-data robot built with proprietary-sourced components before it concedes the data layer or the service commons. The data layer is the rung this concept does not drop, because §4.2 is where quota-farm value concentrates, and a platform that re-encloses data would make the whole case incoherent. The dropped rung, if dropped, gets published.

## 8. What has to be true before this claims viability

1. A credible prototype path exists — at minimum Stage 1–2 on an installed proprietary base (data capture, diagnostics, firmware on one vendor's machine), before any full open hardware build.
2. An independent-service legal and practical route is confirmed (equipment warranty terms, milk-equipment regulatory requirements, and standards for milking-machine construction — not analysed in this document; see §9).
3. The maintenance figure's real spread is established from farm records rather than aggregators — the $7K–$15K conflict needs farm-level resolution.
4. At least one organization with fleet access (a dairy co-op, a research centre, a farmer association) commits to hosting a Stage 1 pilot.
5. The retrofit constraint is scoped: free-stall farms first; the tie-stall share of Ontario barns is the segment where even a perfect open robot pencils worst **verified as structure** (Waterloo informant: a 40-cow tie-stall farm "is a little bit more challenging to adopt this technology").

## 9. What this case study does not demonstrate

- **No open milking robot exists.** The closest things found: Open Source Ecology Germany's "Milker/AMOR" project — a development-stage wiki project, not examined in depth here (**lead, unverified**); a GPL-2.0 DIY milker/receiver documentation repo (MikesMachines/MilkIt — verified via GitHub API, GPL-2.0, last pushed 2024 — a DIY milker, not a robot); and a DeLaval data-analysis repo with **no licence** (therefore not open) dormant since 2019. G-OSA-26's finding stands.
- No prototype is costed; no service economics are modelled from real farm records; the retrofit cost universe is unpriced.
- Regulatory requirements for milking equipment and milk quality are named, not analysed. Compliance paths are a pilot question, not a desk question.
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
- GitHub API licence checks: MikesMachines/MilkIt (GPL-2.0, pushed 2024-01); Leijtenss/Milking-Robot (no licence, pushed 2019-08). Last checked 2026-09-19.
- Parent corpus: G-OSA-26 livestock scan; open-hardware/robotics/sensing scan; machine-data/telematics scan; definition document.

Not legal advice.
