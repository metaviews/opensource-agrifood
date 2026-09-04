# OpenCTD

- Status: `curated`
- Region / reach: international (community workshops US + BVI; design usable anywhere)
- Project: https://oceanographyforeveryone.com/
- Repository: https://github.com/OceanographyforEveryone/OpenCTD
- Field-guide context: new discovery via the fisheries/aquaculture sectoral scan (G-OSA-34, sub-cell 2); verified 2026-09-04

## Problem addressed

Baseline coastal oceanography — the temperature/salinity/depth profiles that aquaculture siting, estuary monitoring, and education need — normally requires CTD instruments costing thousands to tens of thousands of dollars. OpenCTD builds a functional CTD for ~US$370 in parts plus 2-3 days of labour.

## Open layer

Open hardware, firmware, build manual, and calibration protocol — the strongest open marine-sensing project found in the scan.

## What is actually open

**MIT licence** (LICENSE.md created 2015-09-29, verified; Copyright Oceanography for Everyone). Build: Adafruit Adalogger M0 Arduino-compatible microcontroller, Atlas Scientific EZO conductivity circuit with K 1.0 probe, MS5803-14BA pressure sensor, DS18B20 digital temperature sensors, electronics in 2-inch PVC. (Note: the widely repeated "Arduino M0 + PT1000" description is not the peer-reviewed configuration — the Oceanography paper's build uses DS18B20s; PT1000-class probes were a 2025 roadmap item, Rev 8 hardware of June 2026 may have adopted them.) Specs per the peer-reviewed paper: to 140 m, depth accuracy <1 cm, temperature ±0.1°C, salinity error 1%, 90% response 1 s.

## Governance and control

Community project ("Oceanography for Everyone") led by marine ecologist Andrew Thaler; no formal institution; crowdfunded via Patreon plus kit sales and 3-day workshops. The project lead notes financial sustainability is not yet reached — durability rests on one motivated maintainer.

## Evidence of use

Peer-reviewed in *Oceanography* 37(2) 2024 (doi:10.5670/oceanog.2024.602, open access). Replication evidence (distinct from the design paper): the "Year of the OpenCTD" 2024 workshops built **40+ units across five workshops** (Boston; Albemarle Sound NC — including a 25-unit student-built array deployed for a full season of casts to 50 m+ with head-to-head calibration against a YSI Castaway; Homer and Fairbanks Alaska — first freshwater OpenCTDs; British Virgin Islands — first international workshop). The 40+ figure is the project lead's self-report, consistent with the 25-unit Albemarle deployment alone. **Not OSHWA-certified** (checked the directory). No aquaculture/fishery-specific deployment documented — aquaculture siting appears only as a generic CTD use case in the paper.

## Why it belongs

The aquaculture cell's positive counterweight: where farm operations software is proprietary and feeding controllers empty, open marine *sensing* is real, cheap, peer-reviewed, and community-replicated. OpenCTD demonstrates the viable open seam in aquaculture technology — environmental monitoring hardware — and its weaknesses (no OSHWA certification, single-maintainer durability, no farm deployments) map exactly the gap a farm-facing open sensing programme would need to close. It sits in the corpus's open-sensing lineage alongside Vinduino (irrigation) and Our Sci (soil).

## What it does not demonstrate

Farm or aquaculture deployment. OSHWA certification. Sustained institutional funding (Patreon/workshop model). The 40+ units figure is self-reported.

## Sources and verification

- Repository (MIT verified): https://github.com/OceanographyforEveryone/OpenCTD
- Peer-reviewed paper: https://tos.org/oceanography/article/the-openctd-a-low-cost-open-source-ctd-for-collecting-baseline-oceanographic-data-in-coastal-waters
- Year of the OpenCTD retrospective: https://www.southernfriedscience.com/open-source-science-hardware-for-an-open-ocean-reflecting-on-the-year-of-the-openctd/
- Last checked: 2026-09-04

Not legal advice.