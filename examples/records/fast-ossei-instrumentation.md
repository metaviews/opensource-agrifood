# Western University FAST Lab open scientific instrumentation (OSSEI)

- Status: `curated`
- Region / reach: London, Ontario, Canada (Western University FAST Research Group); designs published globally, some with independent use
- Projects: https://github.com/uwo-fast/mass-scale · https://github.com/uwo-fast/turbidity-sensor · https://github.com/uwo-fast/magstir-hotplate · https://github.com/uwo-fast/EnvSafetyLogger
- Field-guide context: opened 2026-10-14 at the user's direction, from a survey of the `uwo-fast` organisation. It extends the field-spectroscopy/soil-diagnostics instrumentation layer (G-OSA-30, `our-sci-reflectometer.md`, `openflexure-microscope.md`) into the *laboratory* and *environmental-safety* forms, and adds the group's by-component licensing model as a documented practice. Not a scan (no G-ID). Verified 2026-10-14.

## Problem addressed

Scientific instruments — analytical balances, turbidity meters, magnetic stirrer hotplates, gas/environmental monitors — are priced for funded laboratories, not for under-resourced research, teaching, field water-quality work, or small operations. Open-source hardware can substitute a printed-and-assembled instrument for the commercial unit, at a fraction of the cost, if the design, firmware and calibration are published well enough to reproduce.

## Open layer

A cluster of open-source scientific and environmental instruments from one academic group, licensed either `GPL-3.0` or, where hardware design files are present, under the group's **two-track by-component** policy (software/firmware `GPL-3.0-or-later`; hardware design files `CERN-OHL-S-2.0`), with peer-reviewed validation for the flagship scale.

## What is actually open

Verified from the repositories, their licence files and the group licensing policy (2026-10-14):

- **`mass-scale`** — a 3-D-printed digital scale (load cell + HX711 amplifier + Arduino Nano), carrying three generations: the 2019 OS Nano Balance, the **lab-grade scale published by Michigan Tech's MOST lab in *Instruments* 4(3):18, 2020** (Hubbard & Pearce), and the FAST 2025–26 revival. **Licensed by component, deliberately with no root `LICENSE`** (which would make GitHub mislabel the whole repository): firmware `GPL-3.0-or-later`; parametric CAD `GPL-3.0-or-later` *and* `CERN-OHL-S-2.0` at the user's option. The 2020 paper reports repeatability within 0.05 g and a parts cost of about **USD 51** (66 with LCD), against **USD 110–289** commercial scales with a serial interface.
- **`turbidity-sensor`** — **`GPL-3.0`** (verified via GitHub API). Portable C modelling and 3-point calibration utilities for the Amphenol `TSW-10`/`TST-10` turbidity sensors, with a calibration CLI, host and Arduino examples, and a printable flow-through case (OpenSCAD). Status: an MVP built from digitised vendor-datasheet curves, useful for integration and bench validation but not a substitute for empirical end-to-end optical calibration.
- **`magstir-hotplate`** — **`GPL-3.0`**. An open-source hardware design for a lab-grade magnetic stirrer hotplate (goal: 50–2000 RPM stirring and precise heating), documented with a public literature review on Appropedia and a Zotero group. Status: **under development**.
- **`EnvSafetyLogger`** — **`GPL-3.0`**. A multi-gas environmental monitoring system (air-quality parameters with temperature/humidity, logging and alerts) in a custom 3-D-printed enclosure, on an Arduino Nano Every with a KiCad schematic; future work listed (weather-resistant enclosure, PCB, WBGT heat-stress measure). Status: design-stage.
- Shared cross-project hardware: plumbing/fabrication designs and the `most-scad-libraries` OpenSCAD library are maintained across the group's projects.

## Governance and control

Academic research-group governance (FAST / Western University). The instruments are released under reciprocal licences (GPL-3.0 / CERN-OHL-S-2.0), so derivatives and built instruments must stay open. Documentation practice is unusually strong for open hardware: the group maintains an organisation-wide **licensing policy**, a **repository template**, and per-project `LICENSING.md` files that state which licence applies to which path — the mechanism that makes per-asset openness legible.

## Evidence of use

Mixed and honestly staged. The **mass-scale's 2020 design is the strongest case**: peer-reviewed in *Instruments*, characterised against commercial balances and standard masses, with a parts cost comparison. The FAST revival of it is partly built (v2 enclosure printed, firmware builds) but the repository's own "Known problems" section states the revival is not characterised the way the paper characterised the 2020 scale (power-on drift, missing 2020 firmware features, unfinished v3). The turbidity, hotplate and gas-logger projects are at MVP/design stage with no independent build located.

## Maintenance and funding

Academic research group (Thompson Endowment, NSERC, SSHRC as for the wider FAST programme). Activity is uneven: `turbidity-sensor` was pushed 2026-10-11; the others 2026-07-04.

## Why it belongs

1. **It extends the corpus's open-instrumentation layer (G-OSA-30) from field to lab and safety.** Our Sci Reflectometer and OpenFlexure cover field soil and microscope work; this cluster adds weighing, water turbidity, stirring/heating, and gas/air monitoring — the bench and environmental instruments a small lab, a water-quality programme, or an aquaculture operation uses.
2. **It documents the by-component licensing model in practice** — the same pattern the corpus's per-asset openness rule demands, with `mass-scale`'s deliberate omission of a root `LICENSE` as a worked example of the GitHub-mislabeling trap.

## What it does not demonstrate

- Farm or field-scale adoption: these are laboratory and bench instruments; no agricultural deployment was located for any of them, and three of the four are at MVP or design stage.
- That the mass-scale revival matches the 2020 paper's characterised performance (the repository explicitly says it does not yet).
- Any OSHWA certification — unlike the group's agrivoltaic hardware, none of these instruments holds a certification record.

## Sources and verification

- `uwo-fast/mass-scale` (README and `LICENSING.md` read in full): https://github.com/uwo-fast/mass-scale
- Hubbard, B. R., & Pearce, J. M. (2020), "Open-Source Digitally Replicable Lab-Grade Scales," *Instruments* 4(3):18: https://doi.org/10.3390/instruments4030018
- `uwo-fast/turbidity-sensor` (`GPL-3.0`; README read in full): https://github.com/uwo-fast/turbidity-sensor
- `uwo-fast/magstir-hotplate` (`GPL-3.0`; README read in full): https://github.com/uwo-fast/magstir-hotplate
- `uwo-fast/EnvSafetyLogger` (`GPL-3.0`; README read): https://github.com/uwo-fast/EnvSafetyLogger
- FAST organisation licensing policy: https://github.com/uwo-fast/.github/blob/main/LICENSING.md
- GitHub repository metadata (licences and push dates) via GitHub API, 2026-10-14
- Last checked: 2026-10-14

Not legal advice.
