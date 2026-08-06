# Common Greenhouse Ontology (CGO)

- Status: `candidate`
- Region / reach: Netherlands / EU (TNO-led); research and standards community
- Project: https://www.tno.nl/en/digital/artificial-intelligence/safe-autonomous-systems/system-integration-robots-greenhouses/
- Repository: https://github.com/vekadvies/common-greenhouse-ontology (Apache-2.0, 0 stars, last push 2022-12-06)
- Field-guide context: parallels the field guide's data-interoperability layer (OADA, CEADS) — CGO is the greenhouse-specific open data standard
- Last checked: 2026-08-06

## Problem addressed

Greenhouse automation data is fragmented across proprietary climate computers (Priva, Hoogendoorn) and vendor formats, blocking interoperability and autonomous-system integration. CGO is an ontology describing components, properties, and measurements inside the greenhouse — intended as a shared, machine-readable vocabulary so robots, sensors, and control systems can exchange greenhouse data semantically.

## Open layer

Standard / open data model. TNO describes CGO as the communication standard for semantic explanation and interoperability in greenhouse robotics integration.

## What is actually open

- Ontology published openly; reference repo `vekadvies/common-greenhouse-ontology` is **Apache-2.0** (checked 2026-08-06).
- Extended by research: "Extending the Common Greenhouse Ontology with Incident Reporting from Autonomous Systems" (Eichhorn et al., FOIS 2024; related repos `Extending-CGO-project/additional-files`, `SimonvRoozendaal/Extending-CGO-project`).
- Backed by an institutional anchor (TNO, Netherlands) with a public project page.

## Governance and control

TNO-led research standard; open licence (Apache-2.0) on the published ontology. No evidence of a formal governance body or standards-body adoption in sources located.

## Evidence of use

- TNO positions CGO as the communication standard for greenhouse robot integration (TNO project page, 2026-08-06 check).
- Academic extension (FOIS 2024) demonstrates research uptake.
- **Adoption signal weak:** the reference repository has 0 stars and was last pushed 2022-12-06; no commercial climate-computer vendor is documented as implementing CGO. This is an open standard without verified commercial deployment.

## Maintenance and funding

Research-funded (TNO). Maintenance status beyond the 2022 repo push is unverified.

## Why it belongs

CGO is the corpus's only **open data-standard** answer to G-OSA-22's closed-data-format problem: it targets exactly the proprietary-climate-computer lock-in the field guide documents (Priva/Hoogendoorn). It is the constructive counterpart to OpenAg's failure — an open standard that actually exists as published Apache-2.0, if not yet adopted.

## What it does not demonstrate

CGO does not demonstrate commercial adoption. Zero-star reference repo, no documented Priva/Hoogendoorn/other vendor implementation, no standards-body ratification. It is an open *standard candidate*, not a deployed open *system*.

## Sources and verification

- TNO project page (checked 2026-08-06): https://www.tno.nl/en/digital/artificial-intelligence/safe-autonomous-systems/system-integration-robots-greenhouses/
- GitHub: https://github.com/vekadvies/common-greenhouse-ontology (Apache-2.0, 0 stars, 2022-12-06)
- Eichhorn et al. (2024), "Extending the Common Greenhouse Ontology with Incident Reporting from Autonomous Systems," FOIS 2024
- Verification pass: research/2026-08-greenhouse-cea-open-automation-scan.md
- Last checked: 2026-08-06

Not legal advice.
