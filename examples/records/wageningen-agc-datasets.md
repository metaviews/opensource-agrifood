# Wageningen Autonomous Greenhouse Challenge (AGC) datasets

- Status: `candidate` (open data; not software/hardware)
- Region / reach: Netherlands (Wageningen University & Research, Greenhouse Horticulture Business Unit, Bleiswijk) + international competition teams
- Project: http://www.autonomousgreenhouses.com/
- Datasets: WUR Research Portal (editions 2018, 2019/2nd, 2021/3rd, 2024/4th)
- Field-guide context: directly extends `units/chinese-hyperscaler-agritech-substrate.md` (Tencent AI Lab × WUR 2nd Autonomous Greenhouse Challenge) and the field guide's autonomous-greenhouse research layer; WUR researchers named (Silke Hemming et al.)
- Last checked: 2026-08-06

## Problem addressed

The AGC is an international competition (WUR-led) challenging teams to grow crops autonomously using AI and IoT, producing reusable greenhouse-cultivation datasets. It is the corpus's clearest research-to-deployment pathway for CEA AI — and a test of whether competition outputs are openly released.

## Open layer

Open research data. Each edition publishes climate, irrigation, actuator, weather, imagery, and yield datasets under persistent DOIs.

## What is actually open

- 4th AGC "Dwarf Tomato Timeseries and Images" (2024, Bleiswijk): DOI 10.4121/fa102772-32db-4b30-bace-12f2016722ce, made available 2025-06-23. Raw + processed 5-minute climate/control/weather data, plant measurements, canopy RGBD camera images (4×/day over 2 months), 96 m² compartment, six remote-controlled teams.
- Editions 1 (2018, figshare), 2 (2019, Kaggle + WUR), 3 (2021, Tencent × WUR) similarly published.
- Creators named (4th ed.): Stef Maree, Pinglin Zhang, Bart van Marrewijk, Feije de Zwart, Monique Bijlaard, **Silke Hemming** (WUR) — fills the field guide's gap of unnamed WUR researchers.

## Governance and control

WUR-published open datasets under DOI; WUR Greenhouse Horticulture Business Unit. No open *software* or *hardware* is part of the release — the open layer is data only.

## Evidence of use

Persistent DOIs and WUR Research Portal hosting across four editions (2018–2024) confirm durable, citation-grade open publication. Used by competition teams and subsequent research (e.g. "Autonomous Greenhouse Cultivation of Dwarf Tomato" paper by the same authors).

## Maintenance and funding

Institutional (WUR). Datasets are static publications, not live-maintained systems; durability is via DOI/archival, not ongoing development.

## Why it belongs

The AGC answers the field guide's open-question directly: the WUR/Tencent Autonomous Greenhouse Challenge — which the field guide documents only as research-stage — **does** release its data openly under DOI across four editions. That converts a "research-stage" note into a verified "open data" finding. It is the open *data* layer of CEA AI, distinct from the absent open *control* layer.

## What it does not demonstrate

AGC releases **data, not code or hardware**. The autonomous-control algorithms and greenhouse hardware remain with the teams/vendors; the open asset is the dataset. It does not demonstrate an open greenhouse *automation system* — only open evidence about one.

## Sources and verification

- 4th AGC dataset (WUR Research Portal, DOI 10.4121/fa102772-32db-4b30-bace-12f2016722ce): https://research.wur.nl/en/datasets/4th-autonomous-greenhouse-challenge-dwarf-tomato-timeseries-and-i/
- AGC site: http://www.autonomousgreenhouses.com/
- Edition 1 (figshare): https://figshare.com/articles/dataset/Autonomous_Greenhouse_Challenge_First_Edition_2018_/12717758
- Edition 2 (Kaggle): https://www.kaggle.com/datasets/piantic/autonomous-greenhouse-challengeagc-2nd-2019
- Verification pass: research/2026-08-greenhouse-cea-open-automation-scan.md
- Last checked: 2026-08-06

Not legal advice.
