# NLR (NREL) InSPIRE Agrivoltaics Map, `bifacial_radiance` & PASE simulation commons

- Status: `curated`
- Region / reach: United States (National Laboratory of the Rockies, formerly NREL / US DOE) and Belgium (University of Liège); used internationally
- Project: https://openei.org/wiki/InSPIRE/Agrivoltaics_Map · https://github.com/NatLabRockies/bifacial_radiance · https://gitlab.uliege.be/deal-public/pase
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cell 2); verified 2026-10-14

## Problem addressed

Agrivoltaics (co-locating solar PV with crop production or grazing) requires modelling spatially heterogeneous ground irradiance under fixed-tilt, single-axis tracking, or vertical bifacial arrays, and balancing photosynthetically active radiation (PAR) for crops against electrical yield. Without open ray-tracing engines and public site-level datasets, farmers, planners, and agricultural extension services depend on black-box developer yield claims.

## Open layer

Open-source optical/irradiance and crop-growth simulation software (`BSD-3-Clause` and `MIT`) paired with a public-domain (`CC0-1.0`), downloadable census of operating agrivoltaic installations.

## What is actually open

Verified via GitHub/GitLab APIs, repository `LICENSE` files, and OpenEI (2026-10-14):

- **`NatLabRockies/bifacial_radiance`** (National Laboratory of the Rockies / US DOE): **BSD-3-Clause** (verified via GitHub API, 109 stars, 57 forks, pushed 2026-09-25). Python ray-tracing toolkit built on RADIANCE for modelling bifacial PV and agrivoltaic ground-irradiance distributions, including under-panel crop-bed shading and albedo effects.
- **`NatLabRockies/InSPIRE`** (US DOE InSPIRE agrivoltaic techno-economic and irradiance modelling repository): **BSD-3-Clause** (verified from `LICENSE.md` in repository root, Alliance for Sustainable Energy, LLC, 2023–2024; 10 stars, 8 forks). Contains the scripts and data pipelines for multi-state agrivoltaic irradiance and crop-modelling studies.
- **`pvlib/pvlib-python`**: **BSD-3-Clause** (verified via GitHub API, 1,694 stars, 1,254 forks, pushed 2026-10-08). The community-maintained Python foundation underneath both `bifacial_radiance` and `PASE`.
- **InSPIRE Agrivoltaics Map (`openei.org/wiki/InSPIRE/Agrivoltaics_Map`)**: **CC0 1.0 Universal (Public Domain Dedication)** (verified in OpenEI page footer; last edited 2026-10-13; direct CSV download via `Special:Ask`). Public facility-level registry tracking **367+ US agrivoltaic sites totalling 5,076 MWdc across 35,157 acres** (and 607 total entries on the map interface), recording site name, coordinates, capacity, crop species, grazing livestock type, habitat type, PV technology, array type, and year installed.
- **`PASE` (Python Agrivoltaic Simulation Environment, University of Liège — Digital Energy and Agriculture Lab / TERRA)**: **MIT License** (verified directly from `https://gitlab.uliege.be/deal-public/pase/-/raw/main/LICENSE`, Copyright 2020–2024 University of Liège DEAL; 14 stars, 7 forks, last activity 2026-10-13; peer-reviewed in *Agroforestry Systems* 2024). Couples 3D VTK ray-tracing and `pvlib` electrical simulation with spatialized crop growth models (GRASSIM / STICS / Simple model) and microclimate temperature/ETP physics.

## Governance and control

- **NLR / InSPIRE**: US Department of Energy national-laboratory governance (Alliance for Sustainable Energy, LLC) with multi-university and extension consortium partners. Data is crowdsourced and curated by NLR staff and released into the public domain (`CC0-1.0`).
- **PASE**: Academic research lab governance at the University of Liège (Belgium), maintained on a public university GitLab instance with open issue tracking and MIT licensing.

## Evidence of use

`bifacial_radiance` and `pvlib` are the de facto international research standard for agrivoltaic optical modelling (cited across hundreds of peer-reviewed studies, including Western University FAST Lab's Canadian agrivoltaic simulations). The InSPIRE Agrivoltaics Map is actively updated (last edit 2026-10-13) and widely cited by state departments of agriculture and utilities. `PASE` is actively developed at ULiège (commits through October 2026) and backs doctoral and European agroforestry/agrivoltaic field trials.

## Maintenance and funding

- **InSPIRE / `bifacial_radiance`**: Funded by the US Department of Energy Solar Energy Technologies Office (SETO).
- **PASE**: Funded by the Walloon Region and University of Liège (TERRA Research Centre).

## Why it belongs

1. **It is the C4 parallel to AquaCrop-OSPy (G-OSA-25), Open Foris / SEPAL (G-OSA-29), and sdmTMB/SS3 (G-OSA-34)**: the scientific simulation and public-data layer of agrivoltaics is genuinely open, permissive (`BSD-3-Clause` / `MIT` / `CC0`), and actively maintained.
2. **It sharpens the US-vs-Canada open-data contrast seen in Land (G-OSA-35)**: the US federal government funds a `CC0` facility-level CSV registry of 367+ agrivoltaic installations, whereas Canada has no public federal or provincial registry of agrivoltaic sites (only industry advocacy maps via Agrivoltaics Canada and university pilot listings).

## What it does not demonstrate

- Direct farmer operation of the simulation stack (`bifacial_radiance` and `PASE` are Python research tools requiring RADIANCE/VTK setup, used by researchers and engineers rather than directly by farmers).
- That open simulation resolves land-use zoning or grid interconnection barriers.

## Sources and verification

- OpenEI InSPIRE Agrivoltaics Map (`CC0-1.0`, CSV download): https://openei.org/wiki/InSPIRE/Agrivoltaics_Map
- `NatLabRockies/bifacial_radiance` repository (`BSD-3-Clause`): https://github.com/NatLabRockies/bifacial_radiance
- `NatLabRockies/InSPIRE` repository (`BSD-3-Clause`): https://github.com/NatLabRockies/InSPIRE
- `pvlib/pvlib-python` repository (`BSD-3-Clause`): https://github.com/pvlib/pvlib-python
- `PASE` GitLab repository (`MIT`): https://gitlab.uliege.be/deal-public/pase
- Bruhwyler et al. (2024), "Vertical agrivoltaics and its potential for electricity production and agricultural water demand: a case study in the area of Chihuahua, Mexico," *Agroforestry Systems*: https://orbi.uliege.be/handle/2268/306948
- Last checked: 2026-10-14

Not legal advice.
