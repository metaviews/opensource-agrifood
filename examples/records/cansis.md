# CanSIS / National Soil Database

- Status: `curated`
- Region / reach: Canada (federal; research use international)
- Project: http://sis.agr.gc.ca/cansis/
- Field-guide context: new discovery via the land sectoral scan (G-OSA-35, sub-cell 3); verified 2026-09-04

## Problem addressed

Land-use and farm-level decisions need soil and land-capability data. Canada's authoritative soil/land-resource data — Soil Landscapes of Canada, detailed soil surveys, land inventory ratings, national gridded products — is published by AAFC through CanSIS and is fully open. The record documents what a national land-data commons looks like when a state decides to open it.

## Open layer

Open government geodata: downloadable databases + live web services, under a verified open licence.

## What is actually open — asset by asset

1. **Soil Landscapes of Canada (SLC) v3.2** (2011, latest revision; 1:1M, full land mass): FGDB, GeoPackage, CSV + ISO 19131 specification — **Open Government Licence – Canada** (verified on open.canada.ca record 5ad5e20c). Attributes cover agricultural areas (province-wide in AB/NS/PE); full-country attributes use the retained v2.2 (1996).
2. **Detailed Soil Surveys (v3 compilations)**: 1:20,000-1:250,000 for most agricultural areas; FGDB/GPKG/CSV — OGL-Canada (record 7ed13bbe).
3. **Soil Landscape Grids of Canada, 100 m**: GeoTIF + ESRI REST ImageServers; ML-trained on >10,000 pedons and 70 covariates; OGL-Canada (record 4d39c9f9) — flagged by AAFC as **"under evaluation and review"** (preliminary).
4. **Canada Land Inventory** — soil capability for agriculture (1960s-early 1980s, static): per-mapsheet downloads from sis.agr.gc.ca under a legacy free-use-with-attribution notice (not uniformly OGL-Canada on that page).
5. **National Soil Database / National Pedon Database**: soil name/layer tables, 100+ soil properties (licence explicit only on the open.canada.ca records).
6. **Canadian Prairie Soil Spectral Library** (8,396 Vis-NIR spectra): described with a project contact — **not yet an open bulk download**.

## Governance and control

Agriculture and Agri-Food Canada (federal). Publication is a standing AAFC programme, not a project.

## Evidence of use

Substantial and documented: Canada's 306 Pg soil-carbon estimate (Sothe et al. 2022, *Global Biogeochemical Cycles*) used CanSIS pedon/SLC inputs; the 100 m grids paper (2025) is built directly on the National Pedon Database; a 2023 FACETS study of Alberta SOC used the SLC/DSS two-scale approach; Environment Canada's National Ecological Framework is built on SLC polygons; CLI ratings remain in use for land-use planning.

## Why it belongs

The land cell's positive Canadian counterweight and the boundary of the openness finding: the one Canadian land-data layer that is fully, verifiably open (OGL-Canada, bulk downloads, web services) — soil — alongside the closed layers (parcels, ownership, prices). It shows the openness is a per-dataset *decision*: the same department publishes soil openly and has no open parcel fabric. Pairs with SSURGO (US public domain — the licence difference is attribution vs none) and with the cell's asymmetry finding: environmental/scientific land data is open; transactional/ownership land data is closed.

## What it does not demonstrate

Currency (SLC v3.2 is from 2011; NSDB functions partly as an archive of legacy surveys) or complete coverage (detailed modern mapping exists only for agricultural areas — non-agricultural Canada relies on 1:1M SLC or 1960s-80s CLI). Openness parity with SSURGO is licence-plus-coverage partial, not total.

## Sources and verification

- CanSIS/NSDB: http://sis.agr.gc.ca/cansis/ and https://sis.agr.gc.ca/cansis/nsdb/index.html
- SLC v3.2 (OGL-Canada verified): https://open.canada.ca/data/en/dataset/5ad5e20c-f2bb-497d-a2a2-440eec6e10cd
- Detailed Soil Surveys: https://open.canada.ca/data/en/dataset/7ed13bbe-fbac-417c-a942-ea2b3add1748
- 100 m Soil Landscape Grids: https://open.canada.ca/data/en/dataset/4d39c9f9-a85c-4bf2-b920-138fdd423384
- Sothe et al. 2022: https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GB007213
- Last checked: 2026-09-04

Not legal advice.