# OADA implementation and adoption: verification scan (G-OSA-01)

Research date: 2026-08-03
Method: bounded verification pass targeting G-OSA-01 / Q-OSA-04 ("OADA implementation and adoption beyond repository activity"). Nine query sets; sources read in full: openag.io home and principles pages, OATS Center home, NAPDC NIFA project page (both accessions 1031239 and 1029391), ADC FAQ, WinField United 2015 release, HORIZON-OpenAgri open-source catalogue entry, AGAPECert arXiv abstract, OpenAg arXiv abstract. Verification tools: GitHub API (OADA org profile, 30 repos, server repo details, recent commits, top contributors, top forks, oats-center org repos), HTTP liveness checks (openag.io, agdatacoop.org). This pass verifies an existing curated record; no new records were added.

## Why this cell

The register named OADA implementation and adoption as the hinge for contested claim C-OSA-01 ("open standards solve vendor lock-in"): open standards only reduce lock-in if vendors and services implement them. The prior evidence was OADA Principles, the public GitHub organisation, and an archived API-spec repository. This pass answers: who maintains OADA now, what is actually open, which implementations exist, and whether any farmer-facing deployment is verifiable.

## Headline finding

**OADA is two projects with one name: an active standards-and-reference-implementation core, and an absent adoption layer.** The core is real and current — a modern Apache-2.0 reference server (Kafka/Redpanda + ArangoDB micro-services, docker-compose deployment), maintained by Purdue's OATS Center with commits as recent as 2026-08-01. The adoption layer is verifiably empty: no OADA-compliant third-party implementation, no farmer-facing deployment, and no market certification were located in this pass. The closest candidates all stop short: WinField United's 2015 collaboration announced intent to build proprietary tools "to perform in this environment" with no located conformance outcome; all 43 server forks are 2017-2020 student-exercise copies; and the family's own farmer-centric repository — the Ag Data Coalition / NAPDC — explicitly disclaims OADA in its own FAQ ("OADA is not a data storage entity but serves to facilitate data movement in real time"). The verification suite promised in the founding principles was archived in 2016, and the compliance-levels guidelines are still "being developed" on the project's own home page.

## Currents

### Current 1 — The active standards core (Purdue OATS)

OADA's current layer: the `server` repository ("Reference implementation of an OADA-conformant API server", Apache-2.0, created 2017, pushed 2026-08-01, 15 stars, 43 forks, 29 open issues) plus supporting repos (`formats` pushed 2026-05-20, `jobs`, `client`, `cli`, `oada-error-js`, `oadaify`, `list-lib`, all Apache-2.0/MIT, non-archived). Top contributors are Purdue OATS personnel (Alex Layton 905 commits, S.A. Noel 117, A.C. Ault 54, A. Balmos 32). The OATS Center hosts OADA as a named project; OATS sponsors include USDA, Purdue, CNH Industrial, WinField United (Land O'Lakes), Infosys, AgGateway, FFAR, ADM, Microsoft, Solinftec, Arva Intelligence, and Climate (Bayer). Recent commit content (opencode config, OpenAI permissions) shows the maintainers' current engineering practice. This current answers "who maintains it": Purdue OATS, institutionally anchored.

### Current 2 — The archived legacy (2014-2024)

The founding-era layer: `oada-api-spec` (RAML-era spec), `oada-ref-server`, `oada-ref-impl-java`, `oada-api-server`, `oada-formats`, `oada-conformance` — all owner-archived (spec repos May 2024; conformance suite last pushed 2016). The principles page's promises — a not-for-profit foundation for OADA financial contributions, a verification suite defining compliance, and "community guidelines... used to define levels of OADA compliance" — are unfulfilled as stated: no foundation was located, the conformance suite is archived, and the home page still describes the guidelines as "being developed". Specification continuity has moved from the archived spec to the active reference server, which is the de facto specification.

### Current 3 — The adoption vacuum

No OADA-compliant implementation by a third party was located. Evidence reviewed: (a) WinField United, 7 January 2015 — announced increased participation in OADA (with AgGateway), quoting OADA project lead Aaron Ault on open frameworks and farmer data ownership; the release's own final sentence: "WinField is also developing its own proprietary data management solution to perform in this environment" — no public conformance claim or implementation was located; (b) server forks — the top-10 by stars are all `oada-srvc-docker` copies from 2017-2020 by individual student accounts, zero stars, no adoption signal; (c) the market's actual interoperability answers are elsewhere: the commercial API aggregator layer (Leaf Agriculture, production users incl. Pivot Bio, Farmers Edge, Hutchinsons) and AgGateway's open-source ADAPT standard family — neither implements OADA. The "verification suite" compliance path from the principles exists in archived form only.

### Current 4 — The family boundary: ADC/NAPDC

The one farmer-centric repository in OADA's own institutional family explicitly separates itself. ADC (501(c)(3), founding members incl. AGCO, Topcon, Raven, CNH Industrial, American Farm Bureau Federation, Purdue, UNL) states in its FAQ: "ADC is a collaborative effort to create a neutral, independent farmer-centric repository for farmers to store data. OADA is an open-source effort with the goal to enable data security, privacy, and interoperability for the entire industry. OADA is not a data storage entity but serves to facilitate data movement in real time." NAPDC's NIFA project narrative goes further: the ADC team "will determine whether the OADA AGAPECert and Mask & Link tools enable farmers to generate certifications about their data without needing to disclose their data" — OADA's tools are candidates for evaluation, not ADC's stack. ADC's own API was built during the NAPDC project for its repository, not on OADA. Related but excluded: Purdue's D2S UAV data platform (gdslab/data-to-science) is a different lab's project, checked and excluded as an OADA deployment.

## Working matrix

Layer x state x evidence. `●●` = verified multiple sources; `●` = single strong source; `○` = thin/dated; `—` = gap.

| Layer | State | Evidence | Farmer agency |
|---|---|---|---|
| Standards (REST API, formats) | active (`formats` pushed 2026-05-20) | GitHub API `●●` | n/a |
| Reference implementation (`server`) | active (pushed 2026-08-01) | GitHub API `●●` | host-your-own `●` |
| Verification suite / compliance levels | archived (2016) / "being developed" | repo + home page `●` | n/a |
| Commercial implementations | not located | search + forks `●` (negative) | none documented |
| Farmer-facing deployments | not located | search `●` (negative) | none documented |
| Certification | split: Ag Data Transparent (market, 9 seals incl. Deere) vs AGAPECert (academic, under ADC evaluation) | ADT site + arXiv + NAPDC `●` | n/a |

Blank cells: no located OADA-compliant cloud used by a farm; no located vendor shipping OADA conformance; no located production instance of the reference server outside the maintainers.

## Cases added by this pass

None. This was a verification pass on the existing curated record (examples/records/oada.md), which was updated with the verified layer state and the adoption findings.

## Contested claims

- **"OADA enables farmers to freely choose cloud providers / reduces vendor lock-in" (founding framing).** Asserting: OADA principles page; Aaron Ault quote in the WinField release (2015). Contesting: this pass — an open standard and reference implementation with zero verified third-party implementations and zero farmer-facing deployments does not change practical lock-in; the possibility of portability exists, its practice is unverified. Strong form rejected; the C-OSA-01 verdict hardens. Last reviewed: 2026-08-03.
- **"OADA is dormant / dead" (secondary-source impression).** Asserting: archived legacy repos and the 2016-2020 activity trough. Contesting: the active reference server with 2026-08-01 commits and Purdue OATS institutional hosting. Reframed: activity and adoption are different claims; OADA is active and unadopted. Last reviewed: 2026-08-03.
- **"OADA is the farmer-centric data repository" (conflation with ADC).** Asserting: occasional conflation in secondary sources. Contesting: ADC FAQ Q16 — "OADA is not a data storage entity"; ADC is the repository, OADA the interoperability effort. Last reviewed: 2026-08-03.
- **"Anyone can host an OADA instance" (reference-server README).** Asserting: the README and docker-compose configuration. Contesting: deployability is not deployment; no production instances outside the maintainers were located. Last reviewed: 2026-08-03.

## Gaps

- **G-OADA-01 — OADA-compliant implementations outside the reference server.** None located in public sources. Plausibility: moderate — vendor outreach or private deployments could exist; the WinField 2015 intent is the strongest candidate thread. Searched: web (multiple query sets), server forks, org audit. Maps to the residual of G-OSA-01. Last searched: 2026-08-03.
- **G-OADA-02 — AGAPECert and Mask & Link adoption status.** NAPDC says the ADC team "will determine" whether these enable farmer-generated data certifications; AGAPECert is an open-source academic framework (Palacios et al., arXiv 2207.12482, 2022, cited 6). Current status under ADC is unverified. Maps to G-OSA-20 (NAPDC follow-up). Last searched: 2026-08-03.
- **G-OADA-03 — Production instances of the OADA server.** Who, if anyone, runs an OADA instance in production is unverified; docker-compose deployment makes private instances plausible and invisible to public search. Last searched: 2026-08-03.

## Actors (critical lens)

- **Purdue OATS Center** — maintainer and institutional host; the difference between "OADA is active" and "OADA is adopted" is visible in this one institution's role.
- **Aaron Ault (OADA project lead, Purdue)** — the founding voice; the 2015 WinField quote is the canonical statement of the farmer-ownership principle.
- **ADC / NAPDC** — the boundary case: the farmer-centric repository that publicly disclaims being OADA, positioning OADA as "data movement" infrastructure.
- **WinField United (Land O'Lakes)** — the announced-but-unverified commercial collaborator; the test of whether industry participation produced conformance.
- **Counterweights, named to position:** AgGateway ADAPT (the adjacent open-standard family that did ship tooling), Leaf Agriculture (the commercial aggregator that captured the interoperability need), Ag Data Transparent (the market certification that filled the compliance-levels vacuum), HORIZON-OpenAgri (EU catalogue listing Purdue's OpenATK Field Work App — an OADA-adjacent integration demo, not an OADA deployment).

## Freshness model

- OADA org and server repo state (archived/active, pushed dates, licences): `fact` — re-verify annually.
- WinField 2015 collaboration: `fact` (dated) — re-verify only if used in an argument.
- ADC FAQ framing: `claim` (page undated) — re-verify annually.
- Adoption absence: `gap` — actively sought, not found; re-test only via vendor outreach.
- AGAPECert status: `claim` — re-verify annually (arXiv 2022; NAPDC evaluation status unknown).

## What this scan does not yet do

- **No vendor outreach.** Whether WinField, former OADA members, or others ever shipped OADA conformance requires organisation-level verification (residual G-OADA-01).
- **No AGAPECert / Mask & Link code audit.** Only the arXiv abstract was read; repository state and licence terms are unverified.
- **No ADC account-level verification.** Whether ADC's repository is OADA-conformant in operation would require an account or direct statement; its FAQ's framing was taken at face value.
- **No AgGateway ADAPT comparison audit.** ADAPT is positioned as the adjacent standard family, not analysed.
- **No non-US OADA coverage.** The HORIZON-OpenAgri catalogue lists OpenATK but not OADA; EU interest in OADA was not searched beyond that lead.

## Sources

- OADA home: https://openag.io/ ; Principles: https://openag.io/principles/
- OADA GitHub org: https://github.com/OADA ; server: https://github.com/OADA/server (API-verified 2026-08-03)
- OATS Center: https://oatscenter.org/ ; Purdue OATS listing OADA: https://engineering.purdue.edu/OATSCenter
- NAPDC NIFA project (1031239): https://training-portal.nifa.usda.gov/web/crisprojectpages/1031239-odf-national-ag-producer-data-cooperative-strategic-development-of-a-national-framework.html ; prior accession (1029391): https://training-portal.nifa.usda.gov/web/crisprojectpages/1029391-odf-national-agricultural-producers-data-cooperative-a-strategic-framework-for-innovation.html
- ADC FAQ (Q16, OADA distinction): https://agdatacoalition.org/faq
- WinField United release (2015-01-07): https://www.winfieldunited.com/news-and-insights/winfield-helps-farmers-simplify-data-management-through-collaborations-with-open-ag-data-alliance-and-aggateway
- AGAPECert (Palacios et al. 2022): https://arxiv.org/abs/2207.12482 ; Ag Data Transparent: https://www.agdatatransparent.com/
- OpenAg (2025, cites OADA walled-gardens framing): https://arxiv.org/abs/2506.04571
- HORIZON-OpenAgri OpenATK Field Work App entry: https://horizon-openagri.eu/open-source-catalogue/open-ag-component-openatk-field-work-app/
- Market context: Leaf Agriculture: https://withleaf.io/whats-new/agricultural-apis-for-software-developers-2026.html ; AgGateway ADAPT: https://aggateway.org/CurrentWork/On-Farm.aspx

Not legal advice.
