# Research: the energy-design commons inventory (target 2)

| | |
|---|---|
| **Case** | `cea/open-climate-control-case-study.md` |
| **Target** | #2 (the energy-design commons: what energy-optimizing design and control assets already exist online) |
| **Date** | 2026-09-21 |
| **Method** | Online open sources only (case method constraint); no correspondence |

## The question

The case's design thesis says energy optimization is a design practice carried by the open layer: control strategies, thermal designs, and shared performance data. What already exists in the open record, and what does the peer-reviewed literature say control strategies are worth?

## Finding 1: control strategies are worth 22–43% — verified, peer-reviewed

The literature on greenhouse climate-control optimization consistently finds double-digit energy savings from control alone:

| Strategy | Saving | Source |
|---|---|---|
| Dynamic global setpoint optimization | **27% energy, +25% yield** | *Agriculture* 15(9):939 (MDPI, 2025) — verified from the abstract; the same paper's literature review records fuzzy control at 22% (Azaza et al.) and model-predictive control at 16.57% cooling / 7.7% heating (Mahmood et al.) — **verified as cited claims** |
| Reinforcement-learning control vs fixed setpoints | **35.44% total energy** | *PMC11679081* (2024, peer-reviewed) — verified from the abstract |
| Optimized climate-management strategy | **up to 43.13%/day** vs base scenario | ResearchGate 398398234 (2025) — **located; abstract-level only** |
| NYSERDA Greenhouse Energy Best Practices Guidebook | Schedules and setpoints as standard efficiency practice; free guidebook | NYSERDA PDF — **located; unread** (extension-literature anchor for target 1) |

The same MDPI paper states that ~40% of energy-saving research focuses on greenhouse **design** and that better covering materials alone can cut heat loss by 55% — i.e., the literature itself splits the energy lever between design and control, which is the case's §4 argument stated back by the field.

**Reading for the case:** these are simulation and trial results under southern-latitude conditions by default; transferability to a 66°-latitude passive-solar dome is unverified. But the order of magnitude holds: control is a first-rank energy lever, not a software garnish, and every strategy class found (setpoint optimization, predictive control, reinforcement learning) is a **control-profile artifact** — exactly what an open layer can share and fork.

## Finding 2: the northern thermal-design lineage exists, and part of it is peer-reviewed — verified

- **Siqiniq (Nunavik, 1999 onward):** developed to understand thermal behaviour in northern environments; led to a **heat re-uptake and storage system** that captures daytime solar thermal energy and emits it at night to stabilize greenhouse temperature; 300 ft² solar-heated gardens producing into the fall (**verified**, Makivvik/Kativik Environmental Advisory Committee article, 2020).
- **The peer-reviewed paper behind it:** "Design, construction and analysis of a thermal energy storage system adapted to greenhouse cultivation in isolated northern communities" (ResearchGate 340997775, 2020) — **located; abstract-level verification only**; full read is a next-pass target. If the construction details are published in readable form, this is the case's first candidate for a genuinely open northern greenhouse **design artifact** (licence formality unverified — the corpus's recurring pattern: open by publication, not by licence).
- **Growing North, Naujaat (see companion file):** reflector-captured solar heat stored in a black-lined water tank, +30°C over ambient, seven months of operation on solar gain — the same artifact class, built from a shipped-in dome (**verified**, Earth Island Journal 2017).

**Reading for the case:** the thermal-design commons is not hypothetical; it exists in at least two documented northern builds and one peer-reviewed paper. What it lacks is exactly what the case predicts it lacks: licence formality, versioned design files, and shared performance data between builds.

## Finding 3: the open energy-measurement layer already exists off the shelf — verified

**OpenEnergyMonitor** (openenergymonitor.org): open-source software and hardware for energy monitoring — the emonPi3 is a six-channel electricity monitor with integrated Raspberry Pi; the ecosystem covers CT clamps, temperature sensing, and utility interfaces, with an active hardware community (emonTx, emonTH, heatpump monitoring, DIY BMS). **Verified as an active open project** (site + GitHub org, 2026-09-21). Hardware licence formality (CERN-OHL or OSHWA status) **unverified** — flagged per the corpus's G-OSA-13 discipline.

**Reading for the case:** the measurement layer of an energy-design commons needs no invention. A community greenhouse running Mycodo for control and OpenEnergyMonitor for metering has, with two off-the-shelf open stacks, the instrumentation to produce the one dataset the commons currently lacks: **kWh per kilogram, per climate zone, per design**. That dataset is the missing public good behind every number in the companion file.

## Finding 4: what the WUR open datasets can and cannot carry — verified structure, open question

The Wageningen Autonomous Greenhouse Challenge datasets (four DOI-published editions, 2018–2024, including the 4th-edition "Dwarf Tomato Timeseries and Images") are grow-and-climate timeseries under high-fidelity control. They can support control-strategy and resource-use analysis (the case's cumulative-optimization mechanism). They cannot, as published, answer the northern question directly: they are Dutch-light, commercial-greenhouse-context datasets. **Verified as to what they are** (G-OSA-22 scan); their energy-analytic usability is a next-pass target (read the dataset documentation, check for resource-use variables).

## Synthesis: the commons exists in fragments; the missing layer is the join

| Layer | Status | Evidence |
|---|---|---|
| Control strategies (the energy lever) | Real, peer-reviewed, 22–43% savings — but trapped in papers, not in forkable control profiles | MDPI, PMC, ResearchGate (this file) |
| Thermal designs for the North | Real, documented builds + 1 peer-reviewed paper — open by publication, not by licence | Siqiniq/Makivvik; Growing North (this file + companion) |
| Energy measurement | Real, active, off-the-shelf open hardware | OpenEnergyMonitor (this file) |
| Performance data | Real but southern-context (WUR); **no published kWh/kg from any northern community greenhouse found** | G-OSA-22; this pass |

The join — versioned control profiles + licensed design files + metered performance data from actual northern builds — does not exist. That absence is the case's actionable finding: the commons is not missing invention, it is missing **publication, licensing, and instrumentation**, which are the cheapest rungs on the case's staged ladder and are all doable at rung B without any vendor's permission.

## Next-pass targets (refined by this inventory)

1. Read the SDU cold-climate greenhouse study (kWh figures for tomato in cold-climate cities).
2. Read the Siqiniq thermal-storage paper in full; check what is published and under what terms.
3. Check OpenEnergyMonitor hardware licence formality (G-OSA-13 discipline).
4. Check the WUR dataset documentation for resource-use variables.
5. Greenhouse-specific (not vertical-farm) kWh/kg for leafy greens at high latitude.
6. NYSERDA guidebook read (extension-literature anchor for the case's cost spine).

## Sources (all checked 2026-09-21 unless noted)

- *Agriculture* 15(9):939 (MDPI, 2025), "Global Optimization and Control of Greenhouse Climate Setpoints for Energy Saving and Crop Yield Increase": https://www.mdpi.com/2077-0472/15/9/939
- "Enhancing Greenhouse Efficiency: Integrating IoT and Reinforcement Learning" (2024): https://pmc.ncbi.nlm.nih.gov/articles/PMC11679081/
- "Optimal Strategy for Energy-Efficient Management of Greenhouse Climate Control" (2025): https://www.researchgate.net/publication/398398234
- Makivvik / Kativik Environmental Advisory Committee, "Greenhouses in Nunavik" (2020): https://www.makivvik.ca/article/greenhouses-in-nunavik/
- Thermal-energy-storage paper (2020): https://www.researchgate.net/publication/340997775
- OpenEnergyMonitor: https://openenergymonitor.org/ ; https://github.com/openenergymonitor/emonpi
- NYSERDA Greenhouse Energy Best Practices Guidebook: https://www.nyserda.ny.gov/-/media/Project/Nyserda/Files/Publications/Fact-Sheets/AG-bpgreenhouse-bk.pdf (located; unread)
