# WeClock

- Status: `curated`
- Region / reach: International (UNI Global Union — global union federation of service workers, 150 countries); no agricultural deployment located
- Project: https://weclock.it / https://gitlab.com/weclock
- Live docs: https://weclock.it/about
- Field-guide context: worker-side self-tracking of hours, breaks, and working conditions — the labour-governance counterpart to employer-side time-tracking and piece-rate surveillance software
- Last checked: 2026-09-07

## Problem addressed

Farm labour software (PickApp, FieldClock, Croptracker) is built and owned by the employer: hours, piece-rate output, attendance, and location are collected by management for management. Workers have no independent record of their own time and conditions — which matters in a sector with documented wage theft (US federal data: $65M in unpaid wages 2001-2019) and where migrant workers cannot freely change employers. WeClock addresses the data asymmetry: a self-tracking app that lets workers and unions measure their own hours, breaks, commuting, and conditions without any third party holding the data.

## Open layer

Free and open source software (GPL-3.0 verified on the main app repository). Data model is worker-held by design — the project's own claim, matching its UNI Global Union origin: "no other app provides workers and their unions with data that is not owned, controlled, seen or taken by any third party."

## What is actually open

- Code: GitLab group `weclock` with six public projects. Main Android app `weclock/spotlight-android` is GPL-3.0 (LICENSE verified 2026-09-07); last activity December 2024. Formerly named "Spotlight" (iOS repo `spotlight-ios`, last activity October 2021; site repo and data-tools last active 2022).
- Companion materials: WeClock Union Kit (PDF, 2020) — guidance for unions deploying self-tracking; UNI's "Top Ten Principles for Workers' Data Rights" and "Top Ten Principles for Ethical AI" as the normative frame.

## Governance and control

Governed by UNI Global Union (Nyon, Switzerland) as a union technology project, not a company or foundation. The design principle — workers own their data, unions control the analysis — is governance-first openness: the licence opens the code, and the union relationship is what opens the use.

## Evidence of use

- Published on Google Play and the App Store; UNI promoted it for monitoring working conditions including burnout, unpaid time, skipped breaks, and mistreatment.
- No agricultural or farm-worker deployment found (searched 2026-09-07). Its agrifood relevance is as the working model for a missing layer: a worker-held record of hours and conditions that farm workers, unions (UFCW's Agriculture Workers Alliance), and migrant-worker organizations (MWAC) currently lack.

## Maintenance and funding

Union-funded. Maintenance is thin and ageing: the Android app saw its last commit December 2024, the iOS app October 2021; group activity has declined since 2022. This is the volunteer/association fragility pattern from the maintenance taxonomy, and it carries a sharper meaning here: the labour layer's only open instrument is itself under-maintained labour.

## Why it belongs

This is the corpus's first worker-held-data record. The labour scan (research/2026-09-labour-layer-scan.md, G-OSA-36) confirmed the empty layer the grocery method predicted: no free-software implementation for on-farm labour governance exists. WeClock is the closest existing instrument — open, worker-governed, data-sovereign — and its absence from agriculture is the finding: the open agrifood movement has not built for the farm as a workplace.

## What it does not demonstrate

It does not demonstrate agricultural deployment, piece-rate verification (WeClock tracks time and conditions, not output-based pay), or survival of the project itself (maintenance is thin). It is not certified for use in Canadian or US wage disputes; no legal use case is documented.

## Sources and verification

- Main app repository: https://gitlab.com/weclock/spotlight-android (GPL-3.0, LICENSE verified 2026-09-07)
- GitLab group: https://gitlab.com/weclock (six public projects; activity checked 2026-09-07)
- Project site and about page: https://weclock.it / https://weclock.it/about (checked 2026-09-07)
- Union kit: https://weclock.it/assets/files/WeClock_UnionKit_05-08-2020.pdf
- Verification pass: research/2026-09-labour-layer-scan.md

Not legal advice.
