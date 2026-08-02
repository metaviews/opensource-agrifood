# ISOBlue

- Status: `curated`
- Region / reach: United States (Purdue University, West Lafayette, Indiana); internationally applicable
- Project: https://isoblue.org/
- GitHub organisation: https://github.com/ISOBlue
- Field-guide context: new discovery from the machine-data-access/telematics cycle, 2026-08-02

## Problem addressed

Modern farm machinery produces rich operational data (CAN bus signals, GPS position), but that data is typically accessible only through vendor-controlled telematics systems. ISOBlue is an open-source telematics platform that connects to a machine's ISOBUS diagnostic port and collects CAN and GPS data under the farmer's control. The project's stated purpose, per Purdue and trade coverage, is to free farmers from vendor-controlled data.

## Open layer

Open hardware/software telematics platform built on free and open-source software. Plugging into the ISOBUS diagnostic port, an ISOBlue device collects CAN and GPS data, supports additional sensor peripherals, and streams or stores data.

## What is actually open

- Repositories under the ISOBlue GitHub organisation are MIT-licensed (isoblue2, meta-isoblue, isoblue-android, meta-toradex-nxp, and others verified via GitHub API 2026-08-02); some repos carry no detected SPDX licence and should be checked per asset before reuse.
- Design, software, and documentation are published openly; the project frames itself as "driven by community" and built on FOSS.
- Academic documentation is substantial: ISOBlue HD, an open-source platform for context-rich agricultural machinery datasets (Wang et al., 2020, cited 11 times); ISOBlue Avena, an agricultural edge-computing framework (IEEE Computer, 2022); and a Purdue dissertation describing ISOBlue 2.0 as a logger of both GPS and CAN data with wireless streaming.

## Governance and control

ISOBlue is institution-backed: developed at Purdue University, most recently under the Open Ag Technology and Systems Center (OATS), which describes participation in open telematics development since 2014. Control of the project rests with the university center and its contributors rather than with farmers; the data collected by a farmer's own device is under the farmer's control by design, but data governance terms for shared or published datasets were not documented in this pass.

## Evidence of use

- Peer-reviewed and IEEE coverage establish the platform's technical development (ISOBlue HD 2020; Avena 2022).
- Trade coverage (Precision Farming Dealer) frames the project's purpose as making precision-farming data more open.
- Deployment scale — the number of machines instrumented by farmers or researchers — was not verified in this pass.

## Maintenance and funding

Repository activity is largely dormant: most telematics repos saw their last pushes in 2014-2020 (isoblue2 last pushed September 2020; the project website in 2023). The academic pipeline continued to 2022 (Avena). This pattern — an institution-backed open-hardware project whose code activity stalls when research priorities move on — is itself a finding for the maintenance question. Current maintenance should not be assumed without checking.

## What this case demonstrates

ISOBlue is the hardware layer of the machine-data-sovereignty question: it shows that open telematics exists as an institution-backed alternative to vendor telematics, and it bridges this collection's hardware cell to its data-governance cell (OADA, JoinData). It also demonstrates the maintenance fragility of institution-dependent open hardware: strong academic documentation, dormant repositories.

## What it does not demonstrate

- It does not establish deployment scale or farmer uptake.
- It does not establish who owns or controls data once collected, or the governance of any shared datasets.
- It does not establish that the ISOBUS diagnostic port is available or open on all machine brands.
- Dormant repositories do not prove the project is dead; equally, the 2023 website does not prove it is active.

## Sources and verification

- ISOBlue project: https://isoblue.org/
- GitHub organisation (licences verified via GitHub API): https://github.com/ISOBlue
- ISOBlue HD paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC7600794/
- IEEE Computer, "ISOBlue Avena": https://www.computer.org/csdl/magazine/mi/2022/01/09705189/1AIInizMjPG
- Precision Farming Dealer: https://www.precisionfarmingdealer.com/articles/442-purdues-isoblue-project-aims-to-make-precision-farming-data-more-open
- Purdue OATS context: https://www.hoosieragtoday.com/2019/10/17/purdue-partnering-on-5g-research-to-improve-ag-automation/
- Last checked: 2026-08-02

## Freshness

- Licences: `fact` — re-verify annually.
- Repository activity: `fact` — re-verify annually; dormant as of research date.
- Deployment and uptake: `claim` — treat as unverified; seek evidence before use in an argument.
- Institution and governance status: `claim` — re-verify annually.

Not legal advice.
