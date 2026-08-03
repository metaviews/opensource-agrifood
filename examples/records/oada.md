# Open Ag Data Alliance (OADA)

- Status: `curated`
- Region / reach: international; precision agriculture and agricultural data exchange
- Project: https://openag.io/
- Repository organisation: https://github.com/OADA
- Field-guide context: `units/oada-open-ag-data-alliance.md`

## Problem addressed

OADA addresses incompatible agricultural data systems, vendor lock-in, uncertain data ownership, and weak privacy and security.

## Open layer

Open software, API specifications, interoperability tooling, and technical community processes.

## What is actually open

OADA publishes principles, an API approach, public repositories, a reference server, client libraries, formats, certificates, and CLI tooling. Verified 2026-08-03: the active layer is a modern Apache-2.0 reference server (Kafka/Redpanda + ArangoDB micro-services, docker-compose deployment) plus supporting repos (`formats` Apache-2.0/MIT, `cli`, `client`, `jobs`, `oada-error-js`, `oadaify`, `list-lib`), all under the OADA GitHub organisation. The founding-era specification layer (`oada-api-spec`, `oada-ref-server`, `oada-ref-impl-java`, `oada-api-server`, `oada-conformance`) is owner-archived (spec repos May 2024; conformance suite last pushed 2016); the active reference server is now the de facto specification.

## Governance and control

OADA’s stated principle is that farmers own data generated or entered by them, their employees, or machines on their farms. Governance reality (2026-08-03): the project is maintained and hosted by Purdue's OATS Center (top contributors are OATS personnel: Layton, Noel, Ault, Balmos), whose sponsors include USDA, Purdue, CNH Industrial, WinField United, Infosys, AgGateway, FFAR, ADM, Microsoft, Solinftec, and Climate (Bayer). The founding principles' promised not-for-profit foundation was not located; the compliance-levels community guidelines are still described as "being developed". The farmer-centric repository in OADA's own institutional family (ADC/NAPDC) explicitly disclaims OADA: "OADA is not a data storage entity but serves to facilitate data movement in real time" (ADC FAQ Q16).

## Evidence of use

Verified 2026-08-03: the reference server is actively maintained (commits 2026-08-01) but no OADA-compliant third-party implementation, no farmer-facing deployment, and no market certification were located. WinField United's January 2015 collaboration announced intent to build proprietary tools "to perform in this environment" with no located conformance outcome; all 43 server forks are 2017-2020 student-exercise copies; the market's interoperability answers (Leaf Agriculture aggregator, AgGateway ADAPT) do not implement OADA. Active core, unverified adoption.

## Maintenance and funding

Maintained by Purdue OATS Center personnel; institutional hosting is the funding answer located (OATS sponsors above). The founding principles' not-for-profit foundation model did not publicly materialize; no audited finances located. See research/2026-08-oada-implementation-scan.md for the full verification.

## Why it belongs

OADA is a strong case for testing whether open interfaces can create practical data portability and exit from agricultural platform lock-in.

## What it does not demonstrate

OADA’s public principles and repositories do not by themselves demonstrate successful interoperability across the sector or meaningful farmer control in practice. Specifically (2026-08-03): no OADA-compliant vendor implementation, no farmer-facing deployment, and no conformance-based certification were verified; the family's own farmer-centric repository (ADC/NAPDC) disclaims OADA as its storage layer.

## Sources and verification

- OADA Principles: https://openag.io/principles/
- OADA GitHub: https://github.com/OADA ; reference server: https://github.com/OADA/server
- Archived API specification: https://github.com/OADA/oada-api-spec
- OATS Center (maintainer): https://oatscenter.org/
- ADC FAQ (OADA distinction, Q16): https://agdatacoalition.org/faq
- WinField United 2015 collaboration release: https://www.winfieldunited.com/news-and-insights/winfield-helps-farmers-simplify-data-management-through-collaborations-with-open-ag-data-alliance-and-aggateway
- NAPDC NIFA project page: https://training-portal.nifa.usda.gov/web/crisprojectpages/1031239-odf-national-ag-producer-data-cooperative-strategic-development-of-a-national-framework.html
- AGAPECert (Palacios et al. 2022): https://arxiv.org/abs/2207.12482
- Verification pass: research/2026-08-oada-implementation-scan.md
- Last checked: 2026-08-03

Not legal advice.
