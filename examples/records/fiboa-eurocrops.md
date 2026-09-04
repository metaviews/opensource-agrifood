# fiboa and EuroCrops

- Status: `curated`
- Region / reach: international (fiboa datasets span 30+ countries; EuroCrops 16 EU countries) — **Canada absent from both**
- Project: https://fiboa.org/ and https://github.com/maja601/EuroCrops
- Repository: https://github.com/fiboa/specification
- Field-guide context: new discovery via the land sectoral scan (G-OSA-35, sub-cell 3); verified 2026-09-04

## Problem addressed

Agricultural field boundaries — the geometry beneath every farm program, subsidy, and remote-sensing analysis — are state-held administrative data that neither North American government publishes. fiboa provides the open community specification for representing field-boundary data; EuroCrops demonstrates what aggregation of official parcel data looks like where states release it.

## Open layer

Open specification + open tooling + open datasets — and, in Canada's absence from both catalogues, a documented gap.

## What is actually open — asset by asset

- **fiboa specification**: v0.3.0 (2025-08-27), **Apache-2.0** (verified from repo and CITATION.cff); GeoJSON/GeoParquet encoding with extensions; explicitly an extension of the Vecorel ecosystem ("Vecorel and fiboa share significant portions of the extensions and tooling"). Community governance (bi-weekly meetings, shared code of conduct, no corporate owner); emerged from the Taylor Geospatial Engine's Field Boundary Initiative.
- **fiboa CLI/tooling**: **Apache-2.0** (verified — the scan's earlier CC-BY claim for tooling was wrong).
- **fiboa dataset catalogue** (fiboa.org/data/, 55 datasets as of 2026-08-17): official and community datasets on Source Cooperative and beyond — ~550,000 Lower Saxony field boundaries, Germany's federal states, Spain's regions, UKFields, Japan, New Zealand, Brazil, Cambodia/Vietnam, US (California, USDA CSB, Fields of the World). Per-dataset licences vary (CC-BY-4.0, CC0). **No Canadian dataset.**
- **EuroCrops**: harmonized agricultural parcel polygons with self-declared crop codes (HCAT taxonomy) from national IACS/LPIS systems of **16 EU countries** (AT, BE, DE, DK, EE, ES, FR, HR, LT, LV, NL, PT, RO, SE, SI, SK). Schneider et al., *Scientific Data* 10:612 (2023-09-11). Licence: **CC BY-SA 4.0** (verified on the GitHub repo and Zenodo record v9) — the project site says CC BY 4.0; the *CC0 1.0* mention in the Nature paper applies to one contributing country's raw national data, not the dataset. A EuroCrops 2.0 (JRC, ~12 member states, multi-annual) supersedes it.

## Governance and control

fiboa: community specification, fiscally associated with the Source Cooperative ecosystem; EuroCrops: research team (TUM/BOKU lineage) funded by the German Space Agency (DLR/BMWK). Neither is state-operated — both exist because states' own parcel data is closed or fragmented.

## Evidence of use — and Canada's absence

fiboa's catalogue is the working open-geodata commons for field boundaries, used for ML training and ag analytics. Canada appears in neither catalogue: AAFC publishes an annual **raster** crop inventory, not open boundary vectors, and the US farm-program equivalent (USDA FSA Common Land Units) is explicitly not public domain. North America contributes no open farm-parcel geometry; its two program datasets are closed by law or licence.

## Why it belongs

The land cell's proof that standards and data commons emerge where states don't publish: fiboa/EuroCrops are what a Canadian open field-boundary layer would plug into, and Canada's absence — unique among surveyed peers including Japan, New Zealand, and Brazil — is the concrete form of the cell's "closed registries" shape. Pairs with the CGC grading-data record (open rules, no interoperable data) as the second instance of Canada publishing agricultural *documents* while other jurisdictions publish agricultural *geodata*.

## What it does not demonstrate

Survey-grade accuracy everywhere (community datasets vary); the "~22M parcels" figure for EuroCrops was not verifiable from the paper text (per-country counts vary); any Canadian adoption or derived product.

## Sources and verification

- fiboa spec (Apache-2.0 verified): https://github.com/fiboa/specification ; catalogue: https://fiboa.org/data/
- fiboa CLI (Apache-2.0 verified): https://github.com/fiboa/cli
- EuroCrops paper: https://www.nature.com/articles/s41597-023-02517-0 ; Zenodo (cc-by-sa-4.0 verified): https://zenodo.org/api/records/8229128
- EuroCrops repo (CC BY-SA 4.0 verified): https://github.com/maja601/EuroCrops
- Last checked: 2026-09-04

Not legal advice.