# Open hardware, robotics, and sensing in agrifood: discovery scan

Research date: 2026-08-02
Method: bounded discovery pass targeting the open-hardware/robotics/sensing cell of the Open Source Agrifood collection. Six query sets across farm machinery, robotics, sensing, GNSS/guidance, autopilots, and Global South hardware; ten sources read in full; licences verified via GitHub API where repositories exist.

This scan is one gap cell in the project's wider environmental-scan programme. It does not claim completeness for the hardware cell, and it names its own omissions explicitly at the end.

## Why this cell

The collection previously held one robotics record (ROMI) plus two farmer-led records with a hardware dimension (Brian Tischler / AgOpenGPS, Matt Reimer). The cell was a single-record cell — the thinnest in the collection — and the field guide's software-centric view of open agrifood could not tell us whether a hardware movement exists. This pass finds that it does, and that it is analytically richer than the software cell: the governance and maintenance variation is wider.

## Currents

### Current 1 — Farmer-maker and cooperative self-build
Openness that originates on farms, driven by repairability, affordability, and appropriateness: farmers (or farmer cooperatives) design, build, and repair their own equipment. Anchors: L'Atelier Paysan (France, cooperative), Vinduino (US, individual grower), AgOpenGPS (Canada, farmer-origin community), Farm Hack (US/UK, peer network). This current carries the strongest farmer-control claims in the hardware cell — and, as L'Atelier Paysan's 2026 liquidation shows, also the clearest maintenance fragility.

### Current 2 — Company-backed open hardware
Openness as an encoded company mission: open designs and software sustained by commercial kit and service revenue. Anchor: FarmBot (US benefit corporation). This current tests whether "open" and commercial value capture can coexist, and where the company draws the boundary of support (FarmBot's DIY builders are directed to the community forum, not company support).

### Current 3 — Maximalist open manufacturing
Civilization-scale design commons: publishing designs for complete machine sets with the claim that communities can fabricate them at a fraction of commercial cost. Anchor: Open Source Ecology / Global Village Construction Set. The gap between published designs and demonstrated replication is the defining feature of this current.

### Current 4 — Open infrastructure as enabler
Generic open technology — autopilots, GNSS receivers, guidance software, irrigation controllers — that becomes agricultural by application. Anchors: ArduPilot, the AgOpenGPS/RTK ecosystem (including commercial hardware that interoperates, e.g. ArduSimple), OpenSprinkler. Maintenance is community- or company-sustained, and openness attaches unevenly: the ecosystem can be open while the hardware in it is not.

## Working matrix

Hardware type x governance pattern. `●●` = multiple actors, well documented; `●` = piloting/single strong actor; `○` = emerging/thin evidence; `—` = gap.

| Hardware type | Farmer-led / individual | Cooperative | Company-backed | Community / NGO |
|---|---|---|---|---|
| Farm machinery / equipment | AgOpenGPS ecosystem `●` | L'Atelier Paysan `●●` | — | OSE LifeTrac `○`; Farm Hack designs `●` |
| Robotics | Matt Reimer (grain cart) `●` | — | FarmBot `●●` | ROMI `●`; ArduPilot-based robots `●` |
| Sensing / irrigation | Vinduino `●` | — | OpenSprinkler (kit sales) `●` | DIY sensor ecosystem `○` |
| GNSS / guidance | AgOpenGPS + open RTK builds `●●` | — | ArduSimple (open ecosystem, closed hardware) `○` | — |
| Autopilots / drones | DIY sprayer builds `●` | — | — | ArduPilot `●●`; PX4 `●` |

Named gaps in the matrix: company-backed farm machinery is empty (no open John Deere-equivalent exists); cooperative robotics is empty; GNSS community-governance is thin; autopilot farmer-led builds are anecdotal.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| L'Atelier Paysan | France | machinery designs + self-build training | farmer cooperative (SCIC, liquidated 2026-04-21; movement continues via Communs Paysans / Soudons fermes !) | curated |
| FarmBot | US / global | CNC robot hardware + software (MIT) | benefit corporation | curated |
| Open Source Ecology | US | machine design commons (GPL / CC-BY-SA) | founder-led NGO | curated |
| ArduPilot | global | autopilot firmware (GPL-3.0) | community project | curated |
| Vinduino | US (California) | sensing + irrigation control (GPL-3.0) | individual grower | curated |
| Farm Hack | US / UK | design-sharing platform + events | peer community | candidate |

## Gaps

Gaps are findings, not failures. Each carries the intersection, why activity is plausible, and what was searched.

- **G-HW-01 — Global South open agrifood hardware.** No substantive record was found of open farm hardware, robotics, or sensing originating in or deployed across Africa, Asia, or Latin America in this pass. Plausibility is high: cost barriers to commercial equipment are highest there, and open designs are the cheapest entry point. Searched: open-source farm tools Africa/Asia/smallholder hardware, Farm Hack regional spread, Vinduino-style low-cost configurations. Last searched: 2026-08-02. The developing-country configuration of Vinduino (US$60 minimum) is the only adjacent evidence found.
- **G-HW-02 — Open-hardware licensing and certification ambiguity.** Only FarmBot commits to the OSHWA definition of open source hardware. None of the cases located holds OSHWA certification; CERN Open Hardware Licence did not appear in any located project. "Open" hardware claims therefore rest on inconsistent, per-asset licence practice. Last searched: 2026-08-02.
- **G-HW-03 — Replication evidence.** Published designs are routinely taken as deployment evidence. Across OSE (anecdotal "has anyone built one?" threads), FarmBot (DIY builds explicitly outside company support), and Farm Hack (contribution scale undocumented), independent builds are rarely documented. The field lacks a standard for recording "designs published" vs "machines built and used". Last searched: 2026-08-02.
- **G-HW-04 — Safety and regulatory layer for open autonomous equipment.** ArduPilot itself flags that regulations governing autonomous vehicles vary by country; no located open project documents regulatory status or safety certification of its designs. For the project's central question this is a constraint layer, not a technology gap. Last searched: 2026-08-02.

## Contested claims

- **"100% open source" (FarmBot) vs asset-level licence reality.** FarmBot's framing is a company claim; its own web pages are internally inconsistent (kits shipped to "over 65 countries" vs "over 90 countries"). Asserting: FarmBot company pages. Contesting: the project's own evidence discipline (per-asset audit absent). Last reviewed: 2026-08-02.
- **OSE completion and replication claims.** The project reported 12/50 machines prototyped (2014) and "33% completion" (2018); the LifeTrac page is internally inconsistent (7th prototype vs "Prototype 6, September 2013"); Wikipedia flags a conflict of interest (2020). Asserting: opensourceecology.org. Contesting: thin independent replication evidence; Wikipedia COI flag. Last reviewed: 2026-08-02.
- **Vinduino water-savings method.** The grower reports 25% savings (430,000 gallons, 2015; monthly figures of 55% and 33%). Commenters contest frequent-shallow irrigation as potentially encouraging shallow rooting and evaporation; the grower responds with recorded data. Asserting: Reinier van der Lee (self-reported, single farm). Contesting: Hackaday comment thread; no independent measurement. Last reviewed: 2026-08-02.
- **"Open hardware" vs "open ecosystem" (ArduSimple and the RTK ecosystem).** Commercial RTK receivers sold as compatible with open software (AgOpenGPS) are sometimes read as open hardware. The openness attaches to the software ecosystem; the receiver hardware and firmware are commercial. Asserting: ecosystem marketing. Contesting: asset-level openness discipline. Last reviewed: 2026-08-02.

## Actors (critical lens)

- **L'Atelier Paysan / Communs Paysans / Soudons fermes !** — the strongest farmer-governed open-hardware structure located, and the clearest evidence that governance strength does not solve funding fragility (SCIC liquidated 2026-04-21; successor associations committed to preserving the commons from commercial appropriation).
- **Farm Hack** — peer design-sharing infrastructure; the loose counterpart to cooperative structure.
- **Vinduino** — individual grower-developer; shows the single-farm origin of open hardware.
- **AgOpenGPS / Brian Tischler** — farmer-origin precision-agriculture community (already in the collection).
- **Counterweights, named not to celebrate but to position:** FarmBot Inc. (company-controlled openness), Open Source Ecology (vision-led NGO with weak replication evidence), ArduPilot (open infrastructure, not farmer-governed), ArduSimple (commercial hardware inside an open ecosystem).

## Freshness model

- Licences verified via GitHub API (ArduPilot GPL-3.0, FarmBot MIT, Vinduino GPL-3.0, OpenFarm MIT): `fact` — re-verify annually.
- L'Atelier Paysan liquidation and successor structures: `fact` — re-verify within 12 months; this is the freshest and most load-bearing fact in the cell.
- All deployment, savings, and shipment figures: `claim` — self-reported; re-verify only if used in an argument.
- OSE design corpus and completion claims: `claim` — re-verify annually.
- Farm Hack platform status: `claim` — verify before promotion from candidate.

## What this scan does not yet do

- **No Global South pass.** G-HW-01 is named but unresolved; a dedicated regional pass (Africa/Asia/LatAm open hardware, including seed- and water-related hardware and drone ecosystems) is the obvious next cycle for this cell.
- **No OSHWA-certified inventory.** Certification status across the wider open-hardware field was not audited; G-HW-02 stays open.
- **No safety/regulatory analysis.** Legal operation of open autonomous equipment (drones, robots, autosteer) varies by jurisdiction and is outside this pass.
- **No Asian/Chinese open robotics coverage.** Asian open agrifood robotics may exist but was not searched in this pass.
- **Current maintenance of several records is unverified** (Vinduino activity concentrated 2015-2017; Farm Hack candidate status; OSE documentation freshness).

## Sources

- L'Atelier Paysan: https://www.latelierpaysan.org/ ; Commons Transition case study: https://primer.commonstransition.org/4-more/5-elements/case-studies/case-study-l-ateliet-paysan/ ; FAO STI portal: https://sti-portal.fao.org/info-resources/19976
- FarmBot: https://farm.bot/pages/open-source ; Wikipedia: https://en.wikipedia.org/wiki/FarmBot ; repos: https://github.com/farmbot/farmbot-web-app , https://github.com/farmbot/farmbot-arduino-firmware
- Open Source Ecology: https://www.opensourceecology.org/portfolio/tractor/ ; https://www.opensourceecology.org/gvcs/ ; Wikipedia: https://en.wikipedia.org/wiki/Open_Source_Ecology
- ArduPilot: https://ardupilot.org/ ; repo: https://github.com/ArduPilot/ardupilot ; UAV-in-agriculture list: https://github.com/brandonhimpfen/awesome-uav-in-agriculture
- Vinduino: https://hackaday.io/project/6444-vinduino-a-wine-growers-water-saving-project ; https://hackaday.com/2015/06/27/hackaday-prize-entry-saving-water-with-the-vinduino/ ; repo: https://github.com/ReiniervdL/Vinduino
- Farm Hack: FAO record: https://www.fao.org/agroecology/in-action/detail/farm-hack-farm-to-farmer-innovation-open-source-and-creative-commons/en ; resilience.org: https://www.resilience.org/stories/2016-08-05/farm-hack-a-commons-for-agricultural-innovation/
- Ecosystem context: ArduSimple precision-agriculture pages: https://www.ardusimple.com/precision-agriculture/ ; OpenSprinkler: https://opensprinkler.com/

Not legal advice.
