# Nepal platform verification follow-up: CSB Nepal / Hamro Biu and DESIS 2.0

- Date: 2026-08-19
- Method: Bounded verification follow-up to G-OSA-32; 6 targeted query sets; 7 pages/PDF records extracted or checked; current platform pages, institutional records, app metadata, and repository searches reviewed.
- Scope: CSB Nepal’s Hamro Biu / Our Seed platform and Nepal’s DESIS 2.0 seed-information platform. This is a follow-up to `research/2026-08-nepal-open-agrifood-infrastructure-scan.md`, not a new country-wide discovery cycle.

## Headline finding

**The follow-up strengthens the community-seed-bank finding but does not upgrade either Nepal platform to open-source infrastructure. Hamro Biu has been transformed from an Android app into a CSB Nepal website/seed library, with public local-variety information and seed-bank contact pathways but no located source code or reuse licence. DESIS 2.0 is a live government seed-management service with public catalogue/certification interfaces, but its source, licence, API terms, and farmer data rights remain undisclosed in the public material reviewed.**

The two systems therefore occupy different positions:

- **Hamro Biu / CSB Nepal**: community-governed biological knowledge and seed-access infrastructure, with a public web catalogue but closed/undocumented software terms.
- **DESIS 2.0**: public-sector digital infrastructure, with institutional control and public-facing service interfaces but no verified open-source layer.

This is a sharper version of the original Nepal scan’s distinction between farmer/community commons and institutionally controlled digital infrastructure.

## 1. Hamro Biu / Our Seed: from app to website

CSB Nepal’s current “Seed App ‘Our Seed’” page identifies the former Android application as **Hamro Biu** and states that it was hosted by CSB Nepal. The app listed member community seed banks, local crops and varieties, photographs, and short descriptions, and allowed interested users to request seeds or planting material through bilateral communication.

The page reports that, at the end of February 2020, the app contained information and photographs for **704 local varieties from 12 community seed banks**. A third-party APK index identifies the package as `com.fube.seedapp`, version 1.0.8, with a reported 50+ installs; this is a weak historical distribution signal, not evidence of adoption or current operation.

The more important current-state change is documented in the 2024 Sustainability paper on community seed-bank sustainability: the app was transformed into the CSB Nepal website (`www.csbnepal.org`). The current site has a public seed library organized by province, with Nepali and English varietal descriptions, locations of member seed banks, photographs, and links to detailed seed-bank profiles. It also provides institutional contact details and links to a shop/marketplace.

### Openness assessment

What is public:
- descriptions and photographs of selected local varieties;
- locations and contact pathways for affiliated community seed banks;
- seed-bank and variety knowledge, including Nepali-language material;
- public documentation of the app’s purpose and historical contents;
- a current web seed library that appears to have replaced or absorbed the app’s catalogue function.

What was not located:
- the Hamro Biu source repository;
- a software licence;
- an explicit licence for the catalogue database, photographs, or traditional knowledge;
- an API or bulk data export;
- a privacy or data-governance statement for requests and user contact;
- evidence that communities control reuse of their variety descriptions or images.

The correct status remains **community biological commons with public information infrastructure**, not open-source software or open data.

## 2. DESIS 2.0: live public service, unresolved openness

The current DESIS 2.0 site is live under Nepal’s Seed Quality Control Center and identifies the Government of Nepal and Ministry of Agriculture, Forests and Environment. The public page exposes or describes:

- seed catalogue functions;
- seed balance-sheet functions;
- certification and tracking;
- inspector and registration workflows;
- public contact details;
- English and Nepali interfaces;
- login and registration pathways.

The current page also displays a “Developers Credit” element, but the extracted public material does not identify a source repository, open-source licence, API documentation, or public developer documentation. The page’s visible counters for crop/variety or seed-weight records cannot be treated as live adoption or production statistics without additional verification.

The 2020 CIMMYT account is the key historical openness claim: it says DESIS was based on open-source software and intended to be available through a mobile website and Android app. The 2025 CIMMYT account describes DESIS 2.0 as a locally developed, nationally institutionalized platform with integrations across Nepal’s public seed system, but it does not identify the current software licence or source release.

### Openness assessment

Verified:
- live public institutional service;
- public-facing catalogue and system descriptions;
- institutional adoption claim across federal, provincial, and local levels;
- seed certification, inspection, tracking, and demand/supply functions described by the operator and CIMMYT.

Not verified:
- current source code;
- current open-source licence;
- public API or interoperability terms;
- farmer rights to export, correct, delete, or reuse records;
- data-sharing terms for seed businesses, cooperatives, or public agencies;
- current active-user or transaction volumes;
- current developer/vendor ownership and maintenance contract.

The correct status remains **public-interest digital infrastructure; historical open-source claim unresolved**.

## Comparison matrix

| Dimension | Hamro Biu / CSB Nepal | DESIS 2.0 |
|---|---|---|
| Primary owner/anchor | Community Seed Bank Nepal / CSBAN | Government of Nepal / Seed Quality Control Center |
| Core function | Local-variety knowledge and seed access | Seed catalogue, certification, tracking, demand/supply administration |
| Farmer/community agency | Structural in seed-bank membership and custody; digital control unclear | Access and participation claimed; institutional control structural |
| Current public form | Website/seed library; former Android app | Live government web platform |
| Code open? | Not located | Not located |
| Licence located? | No | No |
| Data licence/API? | No public terms/API located | No public terms/API located |
| Public evidence of use | Historical 704 varieties/12 CSBs; current provincial library | Institutional adoption and live service; current volumes unverified |
| Main openness shape | Biological commons plus public knowledge | Interface/public service without verified open software |

## Contested claims

### “Hamro Biu is an open agricultural app.”

Asserting: CSB Nepal publicly described the app as a tool for sharing local-variety information and requesting seed. Contesting: no source code, software licence, catalogue-data licence, API, or reuse terms were located; the app appears to have been transformed into a website. Status: **public community information infrastructure, not verified open source**.

### “A public seed catalogue is an open seed commons.”

Asserting: CSB Nepal’s seed library makes local-variety descriptions and seed-bank locations publicly visible and supports knowledge exchange. Contesting: public visibility does not establish rights to copy, modify, redistribute, or commercially reuse the data, images, or associated traditional knowledge. Status: **publicly accessible knowledge layer; reuse governance unresolved**.

### “DESIS 2.0 is open source because the original project used open-source software.”

Asserting: CIMMYT’s 2020 account described DESIS as based on open-source software. Contesting: the current DESIS 2.0 platform does not publicly identify a repository or licence in the material reviewed, and the 2025 institutional account does not resolve that gap. Status: **historical claim unresolved; current platform not classifiable as open source**.

## Gaps and next verification

1. Obtain the current Hamro Biu/CSB Nepal app or website’s privacy, content ownership, and reuse terms directly from CSB Nepal.
2. Ask CSB Nepal whether the former app source, catalogue database, and local-variety records are available to members or third parties.
3. Verify whether the website’s seed library is a current successor to the app and whether the app remains distributed or maintained.
4. Request DESIS 2.0’s source/licence and API documentation from the Seed Quality Control Center or named development partner.
5. Identify the “Developers Credit” entity on the live platform and verify its ownership, maintenance, and procurement relationship.
6. Establish whether farmers, cooperatives, and seed businesses can export, correct, or reuse their records.
7. Do not infer open licensing from either platform’s public accessibility or from the historical DESIS description.

## What this follow-up does not do

1. It does not establish that Hamro Biu is currently unavailable; it establishes that the public search located a current website successor but not source or licence material.
2. It does not measure app downloads, current website use, seed requests, or farmer outcomes.
3. It does not establish the legal status of traditional knowledge or community-held variety information in the public seed library.
4. It does not establish that DESIS 2.0 is closed-source; it establishes that its current source and licence were not publicly verified in this pass.
5. It does not replace direct correspondence with CSB Nepal or the Seed Quality Control Center.

## Sources and verification

- CSB Nepal, “Seed App ‘Our Seed’”: https://csbnepal.org/seed-app-our-seed/
- CSB Nepal, “Seed Library”: https://csbnepal.org/seed-library/
- Shrestha, Clancy & Vernooy (2020), “A level up: Community seed banks in Nepal join forces,” CGIAR CGSpace: https://cgspace.cgiar.org/items/197f4aaa-b4e3-4ec5-acc1-c6ae9b7da8db
- Vernooy et al. (2024), “Promising Strategies to Enhance the Sustainability of Community Seed Banks,” Sustainability 16(19), 8665: https://doi.org/10.3390/su16198665
- DESIS 2.0 / Seed Quality Control Center: https://seed.sqcc.gov.np/
- CIMMYT (2020), “Seed systems in Nepal are going digital”: https://www.cimmyt.org/news/seed-systems-in-nepal-are-going-digital/
- CIMMYT (2025), “Delivering seed from breeder to farmer”: https://www.cimmyt.org/news/delivering-seed-from-breeder-to-farmer-inclusive-digital-innovations-transforming-nepals-seed-systems/
- APKPure Hamro Biu metadata search result: https://apkpure.com/hamro-biu/com.fube.seedapp

Not legal advice.

## Status

G-OSA-32 follow-up completed. No new record added. The residual is now direct verification/correspondence rather than another broad public-source discovery pass.

Not legal advice.
