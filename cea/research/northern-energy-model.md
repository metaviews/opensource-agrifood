# Research: the northern energy model (target 1)

| | |
|---|---|
| **Case** | `cea/open-climate-control-case-study.md` |
| **Targets** | #1 (energy model, from published sources) and partial #4 (failure-mode evidence) |
| **Date** | 2026-09-21 |
| **Method** | Online open sources only (case method constraint); no correspondence |

## The question

What does the published record say a northern controlled-environment operation costs to run — heat and light kWh, electricity price per kWh — and what does that imply for the case's claim that openness (control + data + design) is the energy lever?

## Finding 1: Nunavut electricity is brutally expensive — verified

Qulliq Energy Corporation's posted rates (effective October 1, 2023, verified from qec.nu.ca on 2026-09-21):

| Customer class | Rate |
|---|---|
| Non-government residential | **74.94 ¢/kWh** (with a 700 kWh/30-day subsidy block Apr–Sep; 1,000 kWh Oct–Mar) |
| Non-government commercial | **62.08 ¢/kWh** |
| Government residential | 113.00 ¢/kWh (tenant pays 6 ¢; government the rest) |
| Government commercial | 105.33 ¢/kWh |

Corroboration: Canada Energy Regulator records the territory-wide uniform residential rate at 62 ¢/kWh as of November 2022 (**verified**, cer-rec.gc.ca). Pembina Institute's QEC submission puts the weighted average **cost of diesel fuel alone** at about $0.25/kWh across Nunavut communities (**verified as the document's content**; a submission by an intervenor, not a rate).

**Implication (derived, illustrative):** at 62.08 ¢/kWh, every 100 kWh saved per month is $62/year, and control-strategy savings in the 22–43% range documented in the companion file (`energy-design-commons-inventory.md`) are not rounding errors — they are the difference between an operating budget closing and not. Where electricity is 10–15× the southern Canadian price, the control layer's value scales with the price. This is the case's strongest structural argument so far, and it is price-verified.

## Finding 2: the consumption anchor — verified, from the vertical-farming literature

A 2024 peer-reviewed benchmarking study of energy use in controlled-environment agriculture (S. Lindberg et al., *ScienceDirect*, S2451904924007832) gives:

- Current specific energy consumption for vertical-farm lettuce: **10–18 kWh/kg**
- Energy use intensity: **850–1,150 kWh/m²/year**
- Projected technical benchmark with better equipment and **operational control strategies**: **3.1–7.4 kWh/kg**

**Caveats, recorded rather than averaged:** these are vertical-farm figures (fully artificial lighting), not greenhouse figures with solar gain — so they are an upper-bound analogy for rung B, not a measurement of it. The study's own projected benchmark attributes much of the improvement to **operational control strategies**, which is precisely the case's design thesis stated back by the efficiency literature. A greenhouse-specific cold-climate figure was located but not read: a University of Southern Denmark study, "Best combinations of energy-efficiency measures in greenhouses considering energy consumption, yield and costs: Comparison between two cold climate cities" (portal.findresearcher.sdu.dk, PDF timed out on retrieval 2026-09-21) — **located, unread**; next-pass target.

## Finding 3: the rung-B precedent exists and already runs on design, not diesel — verified

The Growing North "Green Igloo" in Naujaat, Nunavut (community of ~1,000; Earth Island Journal, January 9, 2017, **verified** from the article):

- 42-foot geodesic dome shipped in modular sections; rated for 7 feet of snow and 110 mph winds
- Hydroponic towers inside; capacity **~2,000 plants**; first-year harvest distributed free to 30 households
- **Energy design:** reflectors on the dome cover capture solar heat, stored in a large black-lined water tank, warming the greenhouse up to 30°C above outside; needs ~4 hours of sunshine a day to hold heat; ran seven months of the year on solar gain alone
- **Winter plan as of the article:** a combined-heat-and-power (CHP) unit to extend through the cold months
- Community operation: one paid greenhouse-manager position plus 10–15 volunteers; managers independently ran successful harvests by year two; produce at "half the cost of importing" (project claim, **observed/claimed**, not audited)

This is rung B already existing in miniature, and — the case's point — its viability came from **design and control** (thermal storage, solar geometry, hydroponic efficiency), not from cheap energy. Nunavut food-insecurity context from the same article: ~70% food insecure (per nunavutfoodsecurity.ca, as cited 2017); produce two to three times Toronto prices; C$10 for a head of iceberg lettuce.

Corroborating northern greenhouse projects (located, less deeply verified): Arctic Research Foundation greenhouse project in Nunavut (CTV, via social post); the Arviat Wellness Centre greenhouse (since 2013, grow boxes then greenhouse; News Deeply, 2016); a Canadian Food Studies (UWaterloo) survey of northern community gardens and greenhouses noting hydroponic greenhouses producing 2,000+ fast-growing plants (kale, spinach, peas, beans, lettuce). **Verified as sources located**; details to be read in the next pass.

## Finding 4: failure-mode evidence (target 4) — thin, analogy-class

No agrifood-specific documented case of a proprietary greenhouse climate computer failing in remote operation was found in this pass. The adjacent record is the consumer-IoT end-of-life pattern (Eye-Fi disabling cloud services for recent-model hardware in 2016; the Jibo robot's server shutdown; the general "bricked by cloud shutdown" class). **Verified as analogy only** — the agrifood-specific failure case remains an open target, and the claim in the case study stays at analogy strength.

## What this file changes in the case

1. The energy row of the cost spine upgrades from **assumed** to price-**verified** (62–75 ¢/kWh, QEC) with consumption still the unknown.
2. The design thesis now has a price-side argument: control-layer savings percentages (verified, peer-reviewed) multiply against a price that is an order of magnitude above southern Canada (verified).
3. Rung B has a named, detailed, community-operated precedent (Growing North/Naujaat) whose viability mechanism — thermal design plus hydroponics, not cheap power — is exactly the case's thesis.
4. The kWh-per-kg figure for an actual northern *greenhouse* (not vertical farm) is still missing: the SDU cold-climate study is the next read.

## Sources (all checked 2026-09-21)

- Qulliq Energy Corporation, Customer Rates: https://www.qec.nu.ca/customer-care/accounts-and-billing/customer-rates
- Canada Energy Regulator, Renewable Energy in Canada – Nunavut: https://www.cer-rec.gc.ca/en/data-analysis/energy-markets/renewable-energy-canada/provinces/renewable-power-canada-nunavut.html
- Pembina Institute, submission on QEC's CIPP policy application (diesel weighted-average cost): https://www.pembina.org/reports/submission-qulliq-energy-corporation-cipp.pdf
- Lindberg et al. 2024 (vertical-farming energy benchmarking): https://www.sciencedirect.com/science/article/pii/S2451904924007832
- Koller, K. (2017), "Green Sprouts in the Canadian Arctic," Earth Island Journal: https://www.earthisland.org/journal/index.php/articles/entry/green_sprouts_in_the_canadian_arctic/
- SDU, "Best combinations of energy-efficiency measures in greenhouses… two cold climate cities": https://portal.findresearcher.sdu.dk/files/287739978/ (located; retrieval failed 2026-09-21)
- Canadian Food Studies, northern community gardens and greenhouses survey: https://canadianfoodstudies.uwaterloo.ca/index.php/cfs/article/download/301/314/1781 (located; unread)
- News Deeply (2016), Arviat greenhouse: https://deeply.thenewhumanitarian.org/arctic/articles/2016/05/27/a-lettuce-and-more-grows-in-arviat-nunavut
