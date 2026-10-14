# openreactor & open-source-bioreactor — FAST open bioprocess instrumentation

- Status: `curated`
- Region / reach: London, Ontario, Canada (Western University FAST Research Group); software published openly, hardware design source on GitHub
- Project: https://github.com/uwo-fast/openreactor · https://github.com/uwo-fast/open-source-bioreactor
- Field-guide context: opened 2026-10-14 at the user's direction, from a survey of the `uwo-fast` organisation. It supplies an open pattern the corpus lacked — benchtop bioprocess control — directly relevant to the upcycling concept's fermentation and process-validation strand (`upcycling/concept.md`, `upcycling/layers.md`) and adjacent to the CEA automation question (G-OSA-22). Not a scan (no G-ID). Verified 2026-10-14.

## Problem addressed

Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run. Commercial benchtop bioreactor controllers are proprietary and expensive; an open stack lets a lab, a microbusiness, or a co-packing kitchen supervise and log a vessel on commodity hardware (a Raspberry Pi over I2C) and keep the run data.

## Open layer

Two linked repositories: **`openreactor`** — AGPL-3.0-or-later control software (Raspberry Pi, HTTP API + browser UI, run recording/export) — and **`open-source-bioreactor`** — a composable OpenSCAD bioreactor design. This is the corpus's clearest instance of open *bioprocess* instrumentation: the software that closes the loop and the vessel that runs the process.

## What is actually open

Verified from the repositories and their licences (2026-10-14):

- **`uwo-fast/openreactor`**: **AGPL-3.0-or-later** (verified from README badge and GitHub API; last pushed 2026-10-14). Supervises one benchtop vessel per instance — applies setpoints, reads water-chemistry sensors, records and exports runs, serves an HTTP API and browser UI. Drives RLHT heater slices running `feastorg/Slice_RLHT` firmware (onboard PID, two thermocouples) and reads Atlas Scientific EZO pH, ORP, RTD, EC, DO and HUM circuits. Version 2.0.0a1 is an alpha rewrite (v1.2.1 is the stable install; alpha is the only version on PyPI).
- **`uwo-fast/open-source-bioreactor`**: a composable, modular bioreactor built around registered parameter sets for purchased parts and composable printed modules (OpenSCAD). **No licence file was detected** in the repository (GitHub API reports no licence), so it is **unlicensed as published** even though the org default would be a mixed `GPL-3.0-or-later` + `CERN-OHL-S-2.0` release; the README states it is "under development, not yet ready for use." Documentation is unusually complete for a pre-release (build, architecture, design-conventions, agitation, ports-layout, procurement, references — the last recording "how far each source was actually read").
- **Scope limits stated by the projects themselves:** openreactor 2.0 excludes plugins/user scripts, device discovery, a simulator, mechanical processing, and 1.x data migration; host control loops such as dosing are planned for 2.1.

## Governance and control

Academic research-group governance (FAST / Western University). The control software is AGPL-3.0-or-later — strongly reciprocal, so a hosted derivative must publish its source — while the vessel design, unlicensed as published, grants no rights until a licence is added. The split is instructive: the same project pair is fully open in code and licence-incomplete in hardware.

## Evidence of use

Software maturity at bench/alpha stage; hardware at design stage. The control software is actively developed (pushed 2026-10-14) and published to PyPI; the bioreactor README's own status line — "under development, not yet ready for use" — is the honest limit. No independent lab deployment, product, or farm/processing-facility use was located for either.

## Maintenance and funding

Academic research group (Thompson Endowment, NSERC, SSHRC as for the wider FAST programme). Both repositories are actively worked (both pushed within days of this check), but with tiny contributor bases and no external adopters visible.

## Why it belongs

1. **It fills a genuine corpus gap: open bioprocess instrumentation.** The corpus's fermentation and process layers (Pioreactor, the upcycling concept's stages) previously had open *hardware* (Pioreactor) but no open benchtop *control stack* of this kind. openreactor is the control loop; open-source-bioreactor is the vessel.
2. **It is a clean specimen of the corpus's "open code, licence-incomplete hardware" boundary.** Paired repositories that are fully reciprocal in software and unlicensed in hardware make the "open is recorded asset by asset" rule (README inclusion test) concrete, and echo the licence-split pattern the group applies more rigorously elsewhere.

## What it does not demonstrate

- That an open benchtop reactor stack scales to production fermentation or is deployable in a compliant food-processing environment; the hardware is explicitly pre-release and the software alpha.
- That the unlicensed bioreactor design can be lawfully reused or built — as published it carries no grant of rights (the AGPL on the software does not extend to the OpenSCAD vessel).
- Any food-safety validation, process-authority recognition, or regulatory qualification — the upcycling concept's own open question (whether a high-acid water-bath product needs process-authority validation) is untouched by an open controller.

## Sources and verification

- `uwo-fast/openreactor` repository (AGPL-3.0-or-later; README read in full): https://github.com/uwo-fast/openreactor
- `uwo-fast/open-source-bioreactor` repository (no licence file detected; README read in full): https://github.com/uwo-fast/open-source-bioreactor
- `feastorg/Slice_RLHT` heater-slice firmware: https://github.com/feastorg/Slice_RLHT
- FAST organisation licensing policy (default two-track licences): https://github.com/uwo-fast/.github/blob/main/LICENSING.md
- GitHub repository metadata (openreactor pushed 2026-10-14, AGPL-3.0; open-source-bioreactor licence absent, pushed 2026-10-13) via GitHub API, 2026-10-14
- Last checked: 2026-10-14

Not legal advice.
