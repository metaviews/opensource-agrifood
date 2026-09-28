# Research: cold-climate energy readings (second pass, targets 1, 2, 4)

| | |
|---|---|
| **Case** | `cea/open-climate-control-case-study.md` |
| **Targets** | #1 (energy model — now consumption-side), #2 (energy-design commons), #4 partial (failure modes), plus OpenEnergyMonitor licence check |
| **Date** | 2026-09-21 |
| **Method** | Online open sources only (case method constraint) |

## 1. The consumption anchor: 700–1,200 kWh/m²/yr for cold-climate greenhouses — verified, and the paper is itself CC BY

Trépanier, Gosselin & Jørgensen (2025), "Best combinations of energy-efficiency measures in greenhouses considering energy consumption, yield, and costs: Comparison between two cold climate cities," *Applied Energy* 382:125163, DOI 10.1016/j.apenergy.2024.125163 — read in full (open-access version, **CC BY licence**). Université Laval + SDU. Simulated 31 energy-saving scenarios for greenhouse tomato in Montreal and Copenhagen.

Key verified figures:

- Cold-climate greenhouse energy for heating and lighting: **700–1,200 kWh/m²** (their refs [3–5]; consistent with the vertical-farm EUI band of 850–1,150 from the first pass)
- Energy costs are **25–30% of operating costs** in such greenhouses
- Thermal screens: **17.7–26.5% energy reduction**; envelope losses account for **up to 40%** of energy in traditional designs; LED lighting saves **10–25%** vs HPS; winter tomato lighting needs **1–2 MW per hectare** of electrical capacity
- Copenhagen's energy costs ran **77% above Montreal's** — latitude and tariff both bite, and the best measure combination differs by city (LED toplights + thermal screens + envelope insulation for Montreal; + heat harvesting for Copenhagen); the best single measure in both cities was **LED toplights**
- The study itself is open-licensed (CC BY) — a small but real instance of the energy-design commons the case calls for: a published, reusable comparison of 31 design-and-control strategies for cold-climate greenhouses

**Derived, labelled as such:** at QEC's verified 62.08 ¢/kWh commercial rate, a fully serviced modern cold-climate greenhouse at 700–1,200 kWh/m²/yr implies **$435–$745/m²/yr** in energy cost (at the 74.94 ¢ residential rate, $525–$899). Thermal screens alone, at the study's verified 17.7–26.5%, would be worth roughly **$77–$198/m²/yr** at the commercial rate. Caveats, recorded honestly: these are continuous-operation, artificially lit, southern-design greenhouses — an upper bound, not a measurement of rung B's passive-solar dome. But they bound the problem from above, and they make the design thesis quantitative: at Nunavut prices, every verified efficiency percentage point is worth hundreds of dollars per square metre per year.

## 2. The northern thermal-design lineage now has a measured paper trail — verified at abstract level, with numbers via an open citing paper

Piché, Haillot, Gibout, Arrabie et al. (2020), "Design, construction and analysis of a thermal energy storage system adapted to greenhouse cultivation in isolated northern communities," *Solar Energy* 204:90–105, DOI 10.1016/j.solener.2020.04.008 (**Elsevier; full text not openly available** — verified at abstract level only):

- Surveyed most North American northern greenhouses; found the need for appropriate data and the right energy system design
- Case: the **Kuujjuaq cooperative greenhouse (Nunavik)**, instrumented since June 2016; documented a day/night temperature swing too large for crop development
- Designed, built and installed (October 2018) a **rock-bed sensible thermal storage system using local materials** — stated as the first of its kind in a northern greenhouse
- Published an energy balance for three days in June 2019

Full-text numbers reach the record through an open citing paper (Stewart, Lubitz, Tasnim et al. 2023, "Measured performance of an earth-air heat exchanger in a commercial solar greenhouse in Ontario, Canada," conference paper, **full text available**, quoting Piché et al.): the rock bed stored **6.2–10.6% of daily available solar energy**, and the May 2019 minimum inside temperature was **13°C with the storage system versus 6°C on a similar day in 2016 without it** — a ~7°C floor-raising effect, verified as the citing paper's report of Piché's measurements.

The same citing literature adds two adjacent verified data points: an earth-air heat exchanger in southern France supplying **80% of heating needs** (+7–9°C over outdoor), and a Nunavik (58°N) EAHE maintaining a **minimum 10°C inside** alongside supplemental heat.

**Licence formality, recorded per corpus discipline:** the Piché paper is paywalled Elsevier; the thermal-storage design it documents is open by publication, not by licence. The design commons the case calls for would have made the Kuujjuaq rock bed a buildable artifact for the next community; as it stands, the next community has an abstract.

## 3. The extension-design layer: NYSERDA's guidebook, read — verified

The NYSERDA *Greenhouse Energy Best Practices Guidebook* (free, EnSave/NYSERDA) is the extension-literature anchor for the cost spine:

- The **energy pyramid**: energy analysis → conservation → efficiency → time-of-use management → renewables, in strict order of cost-effectiveness
- **kWh-per-unit benchmarking** as the core comparison method: greenhouses of similar type and climate should have similar kWh per unit of product; the guide's example table runs poor (5.3) / average (3.3) / excellent (1.2) kWh per hundredweight
- Sensor-based supplemental-lighting control (dim/off on sunlight) saving "considerable energy over schedule- or timer-based systems"
- Time-of-use management against utility rate categories — directly relevant at QEC's demand-charged commercial rates

**Reading for the case:** the guidebook's benchmarking metric — kWh per unit of product, comparable across similar operations — is exactly the public dataset the commons lacks (companion file, finding 4). The method is standard, the instrumentation is off-the-shelf open hardware, and no northern community greenhouse has published its number. The gap is institutional, not technical.

## 4. Licence checks (GitHub API, 2026-09-21)

- `kizniche/Mycodo`: **GPL-3.0, 3,286 stars, pushed 2026-08-03** — re-verified, consistent with the G-OSA-22 scan
- `openenergymonitor/emonpi`: **no SPDX licence on the repo** (`license: null`, 279 stars, pushed 2025-10-12); the emontx repo has moved (404). OpenEnergyMonitor is an active open project with incomplete licence formality on its flagship repo — flagged per G-OSA-13, not judged
- (First-pass record, unchanged: the SDU Applied Energy paper is CC BY; the Piché Solar Energy paper is paywalled)

## What this file changes in the case

1. The cost spine's energy row completes on the consumption side: **700–1,200 kWh/m²/yr for cold-climate greenhouses, verified (CC BY source)**, with rung-B-specific consumption (passive-solar dome, seasonal operation) still unmeasured and likely far lower — the honest gap.
2. The design thesis now has quantitative teeth from two independent literatures: control/design measures worth 17.7–43% (this pass and the first pass), multiplying against a price-verified 62–75 ¢/kWh.
3. The northern design lineage is confirmed as peer-reviewed (Piché 2020) with a measured effect (+7°C night floor, 6.2–10.6% of daily solar stored), and simultaneously as a licence-formality case: paywalled paper, buildable design locked behind it. This is the case's sharpest instance of "open by publication is not open by licence."
4. The kWh/unit benchmarking metric (NYSERDA) gives the commons a ready-made measurement standard — the missing dataset just needs a community greenhouse to publish one season.

## Remaining next-pass targets (refined)

1. Allen (2013), "Costs and benefits of a northern greenhouse," 8th Circumpolar Agricultural Conference proceedings — the direct cost-side document; located in the Piché bibliography.
2. Agriculture and Agri-Food Canada (2013), "Understanding sustainable northern greenhouse technologies…" tech. rep.
3. Holzman (2011), U of Guelph master's thesis, "Community Agriculture in Nunavut — How to Ensure Successful Community Greenhouses."
4. CCHRC (2017), *Biomass-Heated Greenhouses* manual, Alaska Energy Authority (open URL, verified as located).
5. WUR AGC dataset documentation for resource-use variables (carried over, not yet read).
6. Greenhouse-specific kWh/kg for leafy greens at high latitude (carried over).

All online-open-source work; correspondence deferred.

## Sources (all checked 2026-09-21)

- Trépanier, M.-P., Gosselin, L., Jørgensen, B.N. (2025), *Applied Energy* 382:125163, DOI 10.1016/j.apenergy.2024.125163 (CC BY, read via SDU research portal)
- Piché, P. et al. (2020), *Solar Energy* 204:90–105, DOI 10.1016/j.solener.2020.04.008 (abstract-level)
- Stewart, R., Lubitz, W., Tasnim, S.H. et al. (2023), "Measured performance of an earth-air heat exchanger in a commercial solar greenhouse in Ontario, Canada": https://www.researchgate.net/publication/376419934 (full text; the source of the quoted Piché measurements)
- NYSERDA, *Greenhouse Energy Best Practices Guidebook*: https://www.nyserda.ny.gov/-/media/Project/Nyserda/Files/Publications/Fact-Sheets/AG-bpgreenhouse-bk.pdf (read)
- GitHub API: openenergymonitor/emonpi, kizniche/Mycodo (2026-09-21)
