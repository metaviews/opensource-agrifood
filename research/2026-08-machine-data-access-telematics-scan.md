# Open machine-data access and repair rights: discovery scan

Research date: 2026-08-02
Method: second bounded pass in the hardware cell family, following the open-hardware/robotics/sensing scan of the same date. Scope: connected farm machinery, telematics, ISOBUS/CAN bus access, machine-data control, and repair rights. Four query sets; key sources read in full (project site, FTC settlement release, Civil Eats); licences and repository activity verified via GitHub API.

## Why this cell

The first hardware cycle covered machinery, robotics, sensing, guidance, and autopilots. This cycle targets the layer underneath those machines: who can read, use, and repair the data and software inside a connected tractor. It is the hardware cell's bridge to the project's data-governance records (OADA, JoinData) and to the central question of who controls the system. It also surfaces a dated regulatory fact: the July 2026 FTC/Deere settlement.

## Currents

### Current 1 — Institution-backed open telematics
Open hardware/software that extracts machine data through the ISOBUS diagnostic port. Anchor: ISOBlue (Purdue University OATS center, since 2014). Strong academic documentation (ISOBlue HD 2020; ISOBlue Avena 2022), dormant repositories since ~2020. This current shows that machine-data openness can be institution-backed — and that institution backing does not guarantee maintenance.

### Current 2 — Open implementation of the machine standard
Open code that implements ISOBUS (ISO 11783) itself. Anchor: AgIsoStack++ and the Open-Agriculture organisation (MIT/GPL family; AgIsoStack++ 381 stars, pushed 2026-07-21; VirtualTerminal pushed 2026-08-01). The standard is published openly, yet a fully open stack exists as a distinct community effort — the clearest evidence that "open standard" and "open ecosystem" are not the same thing.

### Current 3 — Regulatory repair access
Repair rights as a regulatory layer, distinct from openness. Anchor: the FTC and five states' settlement with Deere & Company (stipulated order, July 8 2026), requiring Deere for 10 years to provide farmers and independent repair providers with repair resources equivalent to those given to authorised dealers — fault-code reading/clearing, reprogramming and part pairing, limp-mode restart, manuals and DTAC guidance, future resources once rolled out to 50% of dealers, dealer non-retaliation, and FTC oversight. This mandates access on "fair and reasonable terms"; it does not open Deere's software or data.

### Current 4 — Farmer community adaptation
Farmers wiring open software into proprietary machines: AgOpenGPS CAN-bus integration, DIY ISOBUS communication, autosteer builds (already recorded in this collection via Brian Tischler). This is the demand side that currents 1-3 respond to.

## Working matrix

Mechanism x what it opens x who retains control. `●●` = strong/multiple evidence; `●` = single strong actor; `○` = emerging; `—` = gap.

| Mechanism | What it opens | Farmer control | Current state |
|---|---|---|---|
| ISOBlue (open project, Purdue) | CAN + GPS data via ISOBUS port | data on farmer's device by design | `●` — documented academically, dormant repos |
| AgIsoStack++ (open implementation) | ISOBUS standard implementation | vendor-independent tooling | `●●` — active community, deployment unverified |
| FTC/Deere settlement (regulation) | repair resources, diagnostic capability | access on "fair and reasonable terms", 10 years | `●●` — dated fact July 2026, implementation unverified |
| Farm Bureau MOU 2023 (vendor policy) | dealer-equivalent documentation | access in exchange for no right-to-repair advocacy | `●` — contested by PIRG |
| ISOBUS / AEF ecosystem (standard body) | published standard | ecosystem remains vendor-coordinated | `●` — context layer |

Blank cells in the matrix: no located mechanism opens machine-data ownership itself (who owns and can port the datasets); no non-US repair-access mechanism was searched in this pass.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| ISOBlue | US / Purdue | telematics hardware + software (MIT family) | university OATS center | curated |
| AgIsoStack++ / Open-Agriculture | global | open ISOBUS implementation (MIT/GPL family) | open community org, backer unidentified | curated |

## Contested claims

- **The Deere settlement means machines are open.** Asserting: settlement headlines ("advancing farmers' right to repair"). Contesting: the stipulated order mandates repair-resource access on "fair and reasonable terms" for 10 years under FTC supervision; Deere retains control of the software, the data, and the terms. Repair access is not open source, not open data, and not farmer control. Dated fact: July 8 2026; order filed in the U.S. District Court for the Northern District of Illinois; co-plaintiff states Illinois, Arizona, Michigan, Minnesota, Wisconsin. Last reviewed: 2026-08-02.
- **ISOBUS is open because the standard is published.** Asserting: standard-body framing ("open standard"). Contesting: the existence of AgIsoStack++ as a separate community effort, and the vendor-coordinated certification ecosystem, show that published standards and open implementations diverge. Last reviewed: 2026-08-02.
- **ISOBlue "frees farmers from vendor-controlled data"** (project framing). Asserting: Purdue/trade framing. Contesting: deployment scale is unverified and repositories are dormant since ~2020; the claim is a purpose statement, not an outcome. Last reviewed: 2026-08-02.
- **The 2023 Deere-Farm Bureau MOU advanced repair rights.** Asserting: Deere/Farm Bureau announcement. Contesting: PIRG — the Farm Bureau agreed not to advocate for right-to-repair legislation in exchange for access. Last reviewed: 2026-08-02 (via Civil Eats update note).

## Gaps

- **G-HW-05 — Machine-data ownership and portability.** No located mechanism opens ownership of the data a machine produces: who owns it, who can port it between systems, and whether open telematics changes that. This is the intersection of the hardware and data-governance cells, and the most load-bearing unresolved question in this cell. Registered as G-OSA-16.
- **G-HW-06 — Deployment evidence for open telematics and open ISOBUS stacks.** Repositories and stars are community signal; independent evidence of farms or manufacturers using ISOBlue or AgIsoStack++ was not located. Last searched: 2026-08-02.
- **G-HW-07 — Non-US machine-data and repair regulatory landscape.** The EU right-to-repair directive, Canadian repair rules, and other jurisdictions were not searched in this pass; the FTC/Deere order is US-specific.

## Actors (critical lens)

- **Purdue OATS / ISOBlue** — institution-backed open telematics; the strongest academic anchor, with a maintenance lesson.
- **Open-Agriculture community** — vendor-independent open ISOBUS implementation; active but backer-less.
- **PIRG and repair advocates** — the critical counterweight on the 2023 MOU and on settlement adequacy.
- **Farmers and DIY community (AgOpenGPS, ISOBUS hobbyists)** — the demand side; already represented in this collection via Brian Tischler.
- **Counterweights, named to position:** Deere (vendor control of repair resources and machine software), AEF/ISOBUS certification ecosystem (vendor-coordinated standard governance).

## Freshness model

- FTC/Deere settlement: `fact` — re-verify annually or when order terms change; dated July 8 2026.
- Licences and repository activity (ISOBlue, Open-Agriculture): `fact` — re-verify annually.
- Deployment and adoption claims: `claim` — treat as unverified; re-verify only if used in an argument.
- ISOBlue maintenance status: `claim` — re-verify annually; dormant as of research date.

## What this scan does not yet do

- **No machine-data ownership analysis.** G-HW-05 is named but unresolved; who owns and can port machine data remains open.
- **No implementation audit of the Deere settlement.** The order's terms are documented; whether dealers and farmers experience the promised access is unverified.
- **No non-US coverage.** EU and Canadian repair-rights regimes are out of scope for this pass.
- **No AEF membership/certification audit.** The cost and structure of the vendor ecosystem around ISOBUS were not investigated.
- **No dataset-governance analysis for open telematics.** What happens to ISOBlue-collected data when published or shared is unresolved.

## Sources

- ISOBlue: https://isoblue.org/ ; GitHub: https://github.com/ISOBlue ; ISOBlue HD paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC7600794/ ; IEEE Computer ISOBlue Avena: https://www.computer.org/csdl/magazine/mi/2022/01/09705189/1AIInizMjPG
- Open-Agriculture / AgIsoStack++: https://github.com/Open-Agriculture/AgIsoStack-plus-plus ; organisation: https://github.com/Open-Agriculture
- FTC press release, "FTC, States Secure Settlement with Deere & Company" (July 8 2026): https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-states-secure-settlement-deere-company-advancing-farmers-right-repair
- Civil Eats, "In the Battle Over the Right to Repair, Open-Source Tractors Offer an Alternative" (2022, with Jan 2023 MOU update): https://civileats.com/2022/04/27/right-to-repair-open-source-tractors-john-deere-oggun-farms-profitability-technology/
- PIRG timeline: https://pirg.org/resources/john-deere-and-right-to-repair-over-the-years/
- ISOBUS context: https://www.csselectronics.com/pages/isobus-introduction-tutorial-iso-11783
- AgOpenGPS (existing collection record): https://github.com/AgOpenGPS-Official/AgOpenGPS

Not legal advice.
