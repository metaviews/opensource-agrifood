# Global Fishing Watch

- Status: `curated`
- Region / reach: global (independent US 501(c)(3) nonprofit; ~125+ employees)
- Project: https://globalfishingwatch.org/
- Repository: https://github.com/GlobalFishingWatch
- Field-guide context: new discovery via the fisheries/aquaculture sectoral scan (G-OSA-34, `research/2026-09-fisheries-aquaculture-sectoral-scan.md` sub-cell 1); verified 2026-09-04

## Problem addressed

Industrial fishing is invisible: most of the world's fishing fleet is untracked, and IUU activity hides in that opacity. GFW tracks apparent fishing effort, vessel identity, carrier/transshipment encounters, and dark-vessel (satellite radar) detections from AIS and publishes them through a free platform and public APIs — the sector's flagship transparency initiative.

## Open layer

Data + software + governance — with a licence structure that must be recorded precisely, because the "open" here is conditional.

## What is actually open — asset by asset

- **Derived datasets**: flagship datasets on Zenodo are **CC-BY-NC-4.0** (verified via Zenodo API on the Global AIS-based Apparent Fishing Effort Dataset, record 14982712, v3.0.0, 2025-03-11). Free to access, **not openly licensed for commercial reuse**.
- **Code**: open-source clients and infrastructure — gfwr (R), gfw-api-python-client, pyseas all **Apache-2.0** (verified); map-client and 4wings **GPL-3.0** (verified; no repo named "4wings-map-client" exists).
- **APIs**: free for non-commercial use via self-registration; commercial use requires custom mission-aligned licences (no public pricing). 4wings, events (encounters/transshipment), vessels (identity across 40+ registries), insights, bulk-download and SAR dark-vessel endpoints.
- **Raw AIS**: commercial data, **cannot be redistributed** (FAQ, verified). Only an anonymized labelled training sample is published.

## Governance and control

Independent nonprofit since June 2017 (partnership founded 2015; public site launched September 2016 with Google, Oceana, SkyTruth; initial funding ~$225k split three ways; Leonardo DiCaprio provided $6M). Board of 11 unpaid members (Chair Melissa Wright, Bloomberg Philanthropies); CEO Tony Long. Primary current funding: **$60M through The Audacious Project (2023-2028)**; 2025 income $20.4M, spend $24.95M (2025 Annual Report).

## Evidence of use

Scale is substantial but self-reported: 2025 annual report counters report 84.5M API requests, 765k unique website visitors, ~900,000 vessels tracked on the flag-of-registry portal; 20% growth in new registered map users in 2025. Not independently audited — cited as organization-reported.

## Why it belongs

The anchor open initiative of the fisheries cell — and its central tension. GFW is the world's leading fishery-transparency organization, yet publishes its flagship datasets under a non-commercial licence and cannot open its raw data because raw AIS is itself commercial (exactEarth-lineage providers). It is the clearest instance of the sector's pattern: **open derivative transparency built on closed source data**. The record pairs with the closed counter-examples (exactEarth) and with DFO's own OGL-Canada density rasters, which choose a different licence path for the same kind of derived product.

## What it does not demonstrate

Open data in the corpus's full sense: the NC restriction and non-redistributable raw AIS mean GFW is "free access, non-commercial licence," not an open-data commons. Usage counters are self-reported. The SAR/dark-vessel layer's enforcement impact is not independently evaluated here.

## Sources and verification

- Zenodo dataset (licence verified): https://zenodo.org/records/14982712
- API commercial-use FAQ: https://globalfishingwatch.org/faqs/can-i-use-global-fishing-watch-apis-for-commercial-purposes/
- Raw-AIS FAQ: https://globalfishingwatch.org/faqs/can-i-download-raw-ais-data/
- Leadership: https://globalfishingwatch.org/leadership/ ; 2025 Annual Report: https://globalfishingwatch.org/annual-report-2025/
- SkyTruth launch history: https://skytruth.org/case-studies/from-oil-slicks-to-ocean-transparency-the-launch-of-global-fishing-watch
- Last checked: 2026-09-04

Not legal advice.