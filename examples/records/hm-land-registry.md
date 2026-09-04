# HM Land Registry open data and open source

- Status: `curated`
- Region / reach: England & Wales (reference model cited internationally)
- Project: https://www.gov.uk/government/organisations/land-registry
- Repository: https://github.com/LandRegistry
- Field-guide context: new discovery via the land sectoral scan (G-OSA-35, sub-cell 3); verified 2026-09-04

## Problem addressed

A land registry's data is the state's monopoly record of who owns what and for how much. HM Land Registry (HMLR) — non-ministerial department, 27M+ titles covering >90% of England & Wales — publishes a substantial share of it as open data and develops its software in the open, making it the reference model for what a land registry *can* open.

## Open layer

Open data (transaction-level) + open source software, from the registry itself.

## What is actually open — asset by asset

1. **Price Paid Data (PPD)**: transaction-level record of all property sales in England & Wales sold for value and lodged for registration. **Open Government Licence v3.0**; coverage from 1 January 1995 (Category A standard transactions; Category B additional data — repossessions, buy-to-let, non-private transfers — from October 2013); **monthly releases** (20th working day; first published 24 July 2014 — not 2015 as the scan note had it); full CSV files (1995-present, 115-230 MB), linked data (RDF/SPARQL), and a report builder; from 2026-08-28 includes UPRNs and INSPIRE IDs. Not personal data ("price paid information is not personal, but property-related information") — but address fields are processed against Ordnance Survey AddressBase Premium (Royal Mail PAF), a third-party restriction layered on the OGL.
2. **INSPIRE Index Polygons**: indicative extent polygons of freehold registered property, OGL v3.0, monthly — explicitly not title extents.
3. **CCOD/OCOD**: corporate/overseas-company ownership datasets, free since November 2017.
4. **UK House Price Index**: National Statistics, built on the registry.
5. **GitHub org LandRegistry**: **exactly 289 public repositories** (verified via API), 192 MIT-licensed, active (multiple pushes 2026-09-02..04); notable: common-dev-env (MIT), govuk-frontend-jinja, land-registry-elements. ~90 repos carry no detected licence.

## Limits — what HMLR does not open

Individual title registers and title plans remain **fee-based** (£7 each) — ownership is pay-per-view, not bulk-open; PPD excludes gifts, court orders, right-to-buy discounts, leases ≤7 years, and the two most recent months; INSPIRE polygons are indicative only; UPRN/INSPIRE look-up tables carry separate conditions.

## Evidence of use

PPD is the backbone of UK property research, journalism, and proptech; an Open Data Impact case study documents quality improvements from user feedback after open release; the 2026 UPRN addition was justified by professional/researcher demand.

## Why it belongs

The reference-model record for the land cell: a national registry that chose, by policy, to publish transaction prices as bulk open data under OGL and to develop publicly. It grounds the Canadian comparison concretely — no Canadian province publishes open price-paid or transaction data (Ontario's parcel layer is commercially licensed; BC's LOTR is search-not-bulk), so "who paid what for which farmland" is answerable in England & Wales and unanswerable in Canada. Also a caution: even the reference model keeps title registers fee-based — openness by decision, line by line.

## What it does not demonstrate

Full openness of ownership (fee-gated titles); Canada-transferability (the choice was UK-specific policy); the ~90 unlicensed repos show even model organizations have licence hygiene gaps.

## Sources and verification

- PPD downloads and licence: https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads
- PPD specification: https://www.gov.uk/guidance/about-the-price-paid-data
- GitHub org (289 repos verified): https://github.com/LandRegistry
- INSPIRE polygons: https://use-land-property-data.service.gov.uk/datasets/inspire
- Open Data Impact case study: https://odimpact.org/case-united-kingdoms-hm-land-registry-price-paid-data.html
- Last checked: 2026-09-04

Not legal advice.