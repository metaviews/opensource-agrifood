# ICAR Animal Data Exchange (ADE) standard

- Status: `curated`
- Region / reach: international (10+ countries implementing; Canadian governance participation)
- Project: https://www.icar.org/group/working-group-animal-data-exchange/
- Repository: https://github.com/adewg/ICAR
- Field-guide context: new discovery via the processing sectoral scan (G-OSA-33, `research/2026-08-processing-sectoral-scan.md` sub-cell 3); verified 2026-09-02

## Problem addressed

Milk-recording and livestock data locked in device, lab, and recording-organisation silos. ICAR ADE is an open JSON/OpenAPI message standard for exchanging individual animal data — milking visits, milk analysis, reproduction, health — between sensors, milking systems, labs, milk recording organisations, and farm databases.

## Open layer

Open data standard: machine-readable JSON Schemas and OpenAPI specifications, openly published and implementable without paywall. Current release line v1.5 (v1.5.0, 2025-11-04; v1.5.1, 2025-12-10); scope covers animal recording and milk analysis — deliberately *not* plant processing operations, which have no open standard at all (the processing scan's boundary finding).

## What is actually open

The ADE specification is Apache-2.0 (verified from the repository licence). Lineage: derived from DataLinker (NZ) and JoinData (NL) experience, reworked into JSON Schema/OpenAPI. Caution on a related asset: the ICAR *Guidelines* wiki (milk-recording methods, analyser evaluation) is all-rights-reserved — reproduction requires ICAR's written approval; only the ADE specification itself is open.

## Governance and control

ICAR's Animal Data Exchange Working Group (chaired by DRMS's Robert Fourdraine, co-chair UNIFORM-Agri's Jasper van der Noord), with members from CRV, Nedap, Lely, GEA, Datamars, SEGES, VIT, ICBF, DataGene, Datahub360, Amelicor, Mtech, iDDEN — and Lactanet (Canada, Liliana Fadul), giving Canada a seat at the standard's governance table. Technical facilitation by Rezare Systems.

## Evidence of use

The strongest adoption evidence of any standard in the processing cell: CRV and Lely actively exchange milking-visit data in production using ADE-compliant APIs (ICAR, ~2021); ~12 organisations implementing across 10+ countries (Map of Ag, 2023); Map of Ag's Pure Farming ships ADE-compliant APIs; the iDDEN international dairy-data network committed to integrating ADE where possible (2020-11). Canadian angle: Lactanet sits on the working group and stated intent to integrate ADE — governance participation, not confirmed production deployment.

## Maintenance and funding

Standards-body governance (ICAR working group with Terms of Reference), sustained releases (v1.1 2020 through v1.5.1 2025), implementation workshops (May 2025). Repo pushed 2026-08-30; 73 stars. Funded through ICAR membership — the institutional/state-adjacent archetype, applied to a data standard.

## Why it belongs

ADE is the corpus's best case of an open data standard *with* working implementations in the livestock-to-plant chain — and simultaneously the boundary marker of the processing scan: its scope ends at the farm gate. Everything downstream (milk receiving, pasteurization logs, CCP records, plant batch data) has no open standard at all. The record documents both the achievement and the wall.

## What it does not demonstrate

Plant-processing data exchange (out of scope). Confirmed Canadian production deployment (only governance participation is evidenced). Vendor conformance is self-declared by implementers; no third-party certification programme was located.

## Sources and verification

- Repository (Apache-2.0 verified): https://github.com/adewg/ICAR
- ICAR ADE Working Group: https://www.icar.org/group/working-group-animal-data-exchange/
- ICAR announcement (2021): https://www.icar.org/animal-data-standard-broadens-scope-and-utility/
- Map of Ag release note (2023): https://mapof.ag/celebrating-the-release-of-icar-animal-data-exchange-version-1-3/
- Last checked: 2026-09-02

Not legal advice.