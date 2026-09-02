# Canadian Grain Commission open grading data

- Status: `curated`
- Region / reach: Canada (federal; internationally referenced grading authority)
- Project: https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/
- Field-guide context: new discovery via the processing sectoral scan (G-OSA-33, `research/2026-08-processing-sectoral-scan.md` sub-cells 2 and 5); verified 2026-09-02

## Problem addressed

Grain commerce needs a common grading language: what "1 CWRS" means, what tolerances apply, what moisture/protein/falling-number data says about a parcel. Canada's grading authority is public — the question this record answers is whether the authority's outputs are open *infrastructure* or open *documents*.

## Open layer

Open government publication: the grading rules and annual quality data are freely readable public assets. The open layer stops there — no machine-readable interface, no interchange schema, and (for most of it) no open-data licence.

## What is actually open — asset by asset

1. **Official Grain Grading Guide** (2026-27 edition effective 2026-08-01; PDF 10.8 MB + web HTML; ISSN 1704-5118): the complete grading reference used by CGC inspectors. No dataset-level licence stated; covered by canada.ca general terms — free non-commercial reproduction, commercial reproduction requires prior written permission. Not on the Open Government Portal.
2. **Annual harvest and export quality reports** (wheat, barley, oats, canola, flaxseed, lentils, peas, soybeans; moisture, protein, grade distributions, fusarium damage; historical protein series 1995-2024): HTML pages, PDFs, and ad-hoc Excel/CSV annexes on grainscanada.gc.ca. No open licence; NOT listed in the open.canada.ca catalogue (verified by portal search — no corresponding dataset exists).
3. **Canadian grain exports dataset** (Open Government Portal): the one CGC series published as structured CSV under a verified Open Government Licence – Canada (crop years 2012-13 through 2023-24, EN/FR).

## Machine readability

None for the grading layer. The Guide is a PDF; quality reports are HTML/PDF/Excel with no documented schema; only the exports statistics series is structured CSV, and even the open.canada.ca CKAN API is WAF-blocked for programmatic discovery (bulk file URLs remain directly downloadable). There is no open interchange schema for grain-quality grading payloads in Canada or the US — AgGateway ADAPT covers equipment telemetry, not grading records.

## Governance and control

Canadian Grain Commission, a federal Crown agency. The grading authority and its quality data are public-sector; the digital layer consuming them is proprietary and consolidating — DTN (US) acquired Grain Discovery (Picton, ON) with the acquisition announced 2025-07-30.

## Evidence of use

The Guide is revised each crop year (2026-27 edition effective August 2026) and is the operative reference for CGC inspectors and the trade; harvest/export reports publish annually (~Oct-Dec). The proprietary tools consuming these public rules are in commercial use — that contrast is the record's point.

## Why it belongs

Canada's clearest case of open-as-documents versus open-as-infrastructure: the state publishes everything a mill intake system needs to know, as PDFs and spreadsheets with no schema, under a licence that doesn't permit commercial redistribution without permission — and the commercial layer that consumes it is closed. It anchors G-OSA-33's Canadian finding and pairs with the CSA K100:26 record (a national standard readable free in Canada, owned by a standards body) and AgGateway (a standard whose licence is custom).

## What it does not demonstrate

Any intent barrier — the CGC publishes in good faith; the gap is format and licensing formality, not secrecy. Nor does it demonstrate that machine-readability would be adopted: the consuming tools are proprietary, and no demand-side open implementation exists to consume a schema if one were published.

## Sources and verification

- Official Grain Grading Guide: https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/
- Harvest and export quality reports: https://grainscanada.gc.ca/en/grain-research/grain-harvest-export-quality/
- Canadian grain exports (OGL-Canada): https://open.canada.ca/data/en/dataset/f8ef10d3-24ca-402b-aa46-7ce8839bad1c
- canada.ca terms: https://www.canada.ca/en/transparency/terms.html
- Last checked: 2026-09-02

Not legal advice.