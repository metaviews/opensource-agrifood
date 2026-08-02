# WAGRI (Agricultural Data Collaboration Platform)

- Status: `curated`
- Region / reach: Japan (national)
- Project: https://wagri.naro.go.jp/ ; MAFF overview: https://www.maff.go.jp/e/policies/tech_res/smaagri/attach/pdf/WAGRI.pdf
- Field-guide context: new discovery from the DPI-for-agriculture cycle, 2026-08-02

## Problem addressed

Japan's WAGRI is a state-built agricultural data platform that links data and services through APIs so that farmers, machinery makers, ICT vendors, and service companies can collaborate on data-driven agriculture. It addresses the fragmentation of agricultural data (weather, soil, farmland, market conditions, growth models) across public and private sources.

## Open layer

Open API platform for agricultural data collaboration: a data linkage, sharing, and provision layer operated by a public research body, on top of which private companies build farmer services. WAGRI is a coined word combining "WA" (circle) and "WA" (harmony) with AGRI.

## What is actually open

- Started operation April 2019 with NARO (National Agriculture and Food Research Organization) as the operating body; constructed by MAFF.
- ~60 APIs as of July 2019, in five groups: master data, maps/soil maps, farmland, weather, and others; APIs cover fertilizer registration (MAFF), agricultural chemicals (~7,400 registered, FAMIC), map and aerial imagery (NTT InfraNet), digital soil maps (NARO), farmland parcel polygons and pin data (MAFF, National Chamber of Agriculture), weather forecasts (Halex, Life & Business Weather, Japan Meteorological Agency), market conditions (MAFF), livestock slaughter statistics and livestock cloud data (MAFF, National Livestock Cloud Data Promotion Council), and growth-prediction and cultivation-support programs (Vision Tech, NARO, Kindai University, Fukuoka Agricultural Research Center, Keyware Solutions).
- The openness is at the interface layer: APIs are open to registered members (membership-based API portal), and public data "may be charged". Private companies provide services to farmers through the platform.

## Governance and control

State-constructed (MAFF) and publicly operated (NARO), with private-sector service provision. Farmers are users and selectors of services; the platform is not farmer-governed, and farmer data ownership terms were not documented in this pass.

## Evidence of use

- MAFF documentation details the platform structure, data categories, API providers, and private-enterprise use cases (e.g., Keyware Solutions e-learning service built on WAGRI APIs).
- Academic documentation: Kawamura et al. (2022, cited 16 times) describe WAGRI as a membership-based API portal for distributing and selling agriculture-related data and services; a 2020 paper documents full operations.
- The FFTC article reports ~60 APIs as of July 2019.
- Current adoption scale (active members, API call volumes, farmer-facing service uptake) was not verified in this pass.

## Maintenance and funding

State-funded (MAFF construction, NARO operation); charged data and services provide some cost recovery. The platform is embedded in Japan's "smart food chain" / Society 5.0 framing for agriculture.

## What this case demonstrates

WAGRI is the clearest located example of a national government-built agricultural data platform with open interfaces: the state as platform operator, openness at the API layer rather than the data or governance layer, and private companies as the service layer. It is the state-DPI counterpart to India's AgriStack and the EU's data-space approach.

## What it does not demonstrate

- It does not establish that data or services are freely open; membership and charges apply.
- Current adoption scale and maintenance status are unverified (documentation concentrates on 2019-2022).
- Farmer data ownership and consent terms are not documented in the sources read.
- It is not farmer-governed; farmers are service users.

## Sources and verification

- MAFF WAGRI overview (read in full): https://www.maff.go.jp/e/policies/tech_res/smaagri/attach/pdf/WAGRI.pdf
- FFTC article (~60 APIs): https://ap.fftc.org.tw/article/1634
- Kawamura et al. 2022: https://www.sciencedirect.com/org/science/article/pii/S1947319222000016
- MAFF smart agriculture page: https://www.maff.go.jp/e/policies/tech_res/smaagri/robot.html
- Last checked: 2026-08-02

## Freshness

- Platform structure and data categories: `fact` — re-verify every 2 years.
- API count and service catalogue: `claim` — re-verify annually.
- Adoption scale: `claim` — unverified; seek evidence before use in an argument.

Not legal advice.
