# OpenEPCIS (epcis-repository-ce)

- Status: `curated`
- Region / reach: international (maintainer in Germany; food & beverage a target industry)
- Project: https://openepcis.io/
- Repository: https://github.com/openepcis/epcis-repository-ce
- Field-guide context: new discovery via the processing sectoral scan (G-OSA-33, `research/2026-08-processing-sectoral-scan.md` sub-cells 1 and 4); verified 2026-09-02

## Problem addressed

Event-based supply-chain traceability at processing scale: FSMA 204 KDE/CTE records, meat and cattle traceability frameworks, and the coming EU digital product passport all need an EPCIS event repository. OpenEPCIS provides the community-edition reference implementation of that substrate.

## Open layer

Open-source implementation of the GS1 EPCIS 2.0 / CBV 2.0 standard (with EPCIS 1.2 backward compatibility), plus a toolchain: document converter, event-hash generator, test-data generator, digital-link translator, and a DPP-ready vocabulary project harmonising GS1 with EU ESPR / UNTP / CEN-CENELEC JTC 24.

## What is actually open

The Community Edition repository is Apache-2.0 (verified from the repo LICENSE file). Caveats recorded asset-by-asset: the repo also contains a "Research Edition" whose SAX-based XML converter components carry a separate benelog GmbH & Co. KG commercial licence — not everything in the repo is Apache-2.0. GS1 conformance ("100% EPCIS 2.0 and CBV 2.0 conformant") is a vendor self-declaration, not third-party certification. The org holds 34 public repositories; the proprietary OpenEPCIS Business Edition is separate.

## Governance and control

Maintained by benelog GmbH & Co. KG (Cologne), a commercial software company that co-chairs the GS1 group responsible for maintaining EPCIS itself — the maintainer sits inside the standards body. Open-core funding: Apache-2.0 tools on GitHub monetised via the proprietary Business Edition and hosted services. No public GitHub org members.

## Evidence of use

The repository itself shows thin engagement: 38 commits, 11 stars, 6 forks, zero formal releases/tags, last commit 2026-01-10 — and it appears recently restructured. The wider org is active (openepcis-odoo updated 2026-09-02; dpp-ready 2026-09-01). Usage evidence attaches to the *standard*, not this codebase: the Wholechain/IDH GS1-EPCIS-based deforestation-free cattle framework in Brazil (July 2024) credits GS1 EPCIS, with no evidence it uses epcis-repository-ce specifically. No verified third-party deployment of the community edition was located.

## Maintenance and funding

Commercial open-core via benelog's Business Edition, hosted tools, and GS1 PINE listing. The community edition is best read as the standards-body-facing reference implementation of a commercial product line — the corpus's hybrid open-core archetype (maintenance archetype 3), here at the standards-implementation layer.

## Why it belongs

OpenEPCIS is the open traceability substrate adjacent to the processing plant: the EPCIS event layer is where FSMA 204 and meat-traceability frameworks land, and this is its most complete open implementation. The processing scan's verdict — that open standards stop at the plant walls — makes the existence of a maintained open implementation inside those walls' data layer analytically important. It pairs with the corpus's OADA record: an active standards implementation whose adoption layer is not yet verifiable.

## What it does not demonstrate

Thin repository engagement and no formal releases mean the codebase's own deployment footprint is unverified. No evidence connects it to the cattle-traceability pilots it is adjacent to. The open-core split means the production-grade path runs through the proprietary Business Edition.

## Sources and verification

- Repository (LICENSE verified): https://github.com/openepcis/epcis-repository-ce
- Organization: https://github.com/openepcis
- Project site: https://openepcis.io/
- Last checked: 2026-09-02

Not legal advice.