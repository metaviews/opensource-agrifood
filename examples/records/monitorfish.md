# Monitorfish (France)

- Status: `curated`
- Region / reach: France (national production system); open source internationally
- Project: https://github.com/MTES-MCT/monitorfish
- Repository: https://github.com/MTES-MCT/monitorfish
- Field-guide context: new discovery via the fisheries/aquaculture sectoral scan (G-OSA-34, sub-cell 1); verified 2026-09-04

## Problem addressed

Fisheries monitoring and control: the state's Fisheries Monitoring Center must fuse VMS positions, declarative fishing activity (ERS/FLUX), regulated-area rules, fleet-segment risk, prior notifications, and inspection records into a real-time operational picture for enforcement.

## Open layer

Software + governance: a national government built its production fisheries-control system in the open and publishes the full stack. The rare case — in this corpus and generally — of a state running mission-critical regulatory infrastructure on open code it develops publicly.

## What is actually open

**AGPL-3.0**, verified from the repository's LICENCE file (31,740 bytes, full GNU AGPL v3 text; GitHub API spdx_id AGPL-3.0). Stack: React frontend, Kotlin backend, PostGIS, Prefect (GitHub's "HTML" primary-language field is a classification artifact). Feature scope: real-time VMS positions, ERS/FLUX declarations, regulated fishing areas, EFCA risk computation, real-time fraud alerts, prior-notification compliance, inspection reports.

## Governance and control

Developed by and for the Centre National de Surveillance des Pêches (CNSP) under DGAMPA (Ministry of Ecological Transition), via the state's Fabrique Numérique de l'Écologie (beta.gouv.fr / Entrepreneur d'Intérêt Général programme). Started September 2020 as an EIG challenge; in production since ~2021; **used daily by the French FMC**; opened to all field control agents in 2023. Live instance at monitorfish.din.developpement-durable.gouv.fr, operated by the ministry's DTNUM/DIN. Sister product MonitorEnv serves marine-environment control (CACEM).

## Evidence of use

Production at national scale, with public impact dashboards via the ministry's Metabase. Repository: daily commits (pushed 2026-09-04), ~124 releases over ~6 years at roughly weekly cadence (v1.123.0, 2026-09-03), 19 contributors, 427 open issues.

## Why it belongs

Monitorfish is the counter-model to Canada's ELOG layer and the landing-dock finding of the fisheries scan: where catch-reporting mandates elsewhere drive harvesters into proprietary, state-qualified vendor apps, France built the state's own control infrastructure as open source under a copyleft licence. It demonstrates that the regulatory-gravity pattern (mandatory digital reporting → vendor lock-in) is a *procurement choice*, not a necessity. It is the fisheries analogue of what the processing cell found absent, and a template for what a DFO ELOG alternative would look like.

## What it does not demonstrate

International adoption: all 9 repository forks are personal accounts — no other country's government has adopted or forked it (any EU-level reuse would route through EFCA channels; none confirmed). It is also a *control* (enforcement) system, not a harvester-facing reporting tool — the open layer covers the watcher's stack, not the fisher's logbook.

## Sources and verification

- Repository (AGPL-3.0 verified): https://github.com/MTES-MCT/monitorfish
- README (production status): https://github.com/MTES-MCT/monitorfish/blob/master/README.md
- beta.gouv.fr startup page: https://beta.gouv.fr/startups/monitorfish.html
- Last checked: 2026-09-04

Not legal advice.