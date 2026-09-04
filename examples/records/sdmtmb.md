# sdmTMB

- Status: `curated`
- Region / reach: international use; Canadian origin (DFO Pacific Biological Station)
- Project: https://github.com/sdmTMB/sdmTMB
- Repository: https://github.com/sdmTMB/sdmTMB (formerly pbs-assess/sdmTMB — old URLs redirect)
- Field-guide context: new discovery via the fisheries/aquaculture sectoral scan (G-OSA-34, `research/2026-09-fisheries-aquaculture-sectoral-scan.md` sub-cell 1); verified 2026-09-04

## Problem addressed

Modern stock assessment needs spatiotemporal statistical models: fish populations distribute unevenly, indices must be standardized for space and time, and survey data are zero-inflated. sdmTMB provides fast, flexible spatial and spatiotemporal GLMMs (SPDE mesh + TMB) in R — the tooling layer under Canada's fisheries science.

## Open layer

Open-source software, from inside the state: developed at Fisheries and Oceans Canada's Pacific Biological Station and copyright-held by "His Majesty the King in Right of Canada, as represented by the Minister of the Department of Fisheries and Oceans" (CRAN record).

## What is actually open

**GPL-3**, confirmed verbatim in the DESCRIPTION file (`License: GPL-3`; the GitHub API reports licence null because it lives in DESCRIPTION, not a LICENSE file). Authors: Sean C. Anderson (maintainer), Eric J. Ward, Philina A. English, Lewis A. K. Barnett (all DFO PBS), with James T. Thorson (VAST author). Peer-reviewed: Anderson, Ward, English, Barnett & Thorson (2025), *Journal of Statistical Software* 115(2), doi:10.18637/jss.v115.i02 — 26 Crossref citations.

## Governance and control

Maintained by the DFO-affiliated author team; repo migrated to the sdmTMB organization. CRAN-published (v1.1.0, 2026-07-03); active development (pushed 2026-09-01, 255 stars, 31 forks, not archived).

## Evidence of use

4,079 CRAN downloads in the month before verification; use in DFO CSAS research documents (e.g., DFO library doc 41118315 uses sdmTMB as its spatiotemporal stock-distribution model). This is production state science, not a side project.

## Why it belongs

The flagship record of the fisheries cell's central finding: fisheries is the corpus's only sector where the *science* layer is the most open layer, and sdmTMB is that claim's strongest Canadian instance — a state institution developing its statistical infrastructure in the open, under a copyleft licence, and publishing the peer-reviewed paper open-access. It anchors the Canada-centred claim that the open layer in fisheries runs through DFO's own science, and pairs with SS3 (companion record) as the assessment stack Canada actually runs.

## What it does not demonstrate

Anything operational: sdmTMB is assessment science, not dockside software, quota reporting, or farm management. Its openness exists inside a science culture; the same institution's operational data (quota holdings, catch records) remains confidential. Openness of method does not transfer to openness of data.

## Sources and verification

- DESCRIPTION (GPL-3 verified): https://raw.githubusercontent.com/sdmTMB/sdmTMB/main/DESCRIPTION
- CRAN: https://cran.r-project.org/web/packages/sdmTMB/index.html
- Peer-reviewed paper: https://doi.org/10.18637/jss.v115.i02
- DFO CSAS usage example: https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/41118315.pdf
- Last checked: 2026-09-04

Not legal advice.