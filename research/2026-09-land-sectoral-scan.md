# Land sectoral scan: the open layer in land access, tenure, transfer, and ownership transparency (G-OSA-35)

Research date: 2026-09-04
Method: broad sectoral discovery cycle, run as five parallel sub-cells — (1) open land tenure and ownership data, (2) land trusts and community land tenure, (3) open-source land-administration software and field/soil data, (4) Indigenous land governance and title, (5) the Canadian farmland frame (concentration, succession, farmland loss). Each sub-cell ran multiple query sets with primary-source verification; licences and data terms recorded from primary documents; honest absences documented per sub-cell. This scan opens G-OSA-35 (candidate workstream A2); the follow-up pass cycles candidates into `examples/` records.

Register context: G-OSA-35. Prior corpus coverage was ~10 incidental farmland mentions with no treatment. The roadmap judged A2 the largest conceptual hole in a project asking "who controls": land is the first input, the most concentrated asset, and the layer with the strongest commons-governance history (land trusts, Terre de Liens, community land trusts) — and, uniquely among the corpus's cells, its deepest governance form in Canada is Indigenous title, which is law before it is data.

## The structural question this cell asks

Every prior cell tested where openness survives inside an economic layer (farm, plant, retail, boat, pen). Land inverts the frame: the asset itself is a legal construct whose control is constituted by registries, trusts, treaties, and title — so the "open layer" question splits in three. (1) *Registry openness*: who can see who owns land, at what price, in what form — the transparency layer where states are the gatekeepers. (2) *Commons tenure*: can the strongest collective-ownership tradition (trusts, CLTs) produce open assets, or only closed stewardship — the grocery/CSF question transposed to the oldest commons. (3) *Indigenous title*: in Canada the most consequential land-governance development is the legal re-emergence of Aboriginal title and jurisdiction, which governs through community-defined law — the corpus's refusals pattern at its most material. The scan asks where openness appears in each, and what the three together say about the control of farmland specifically.

---

## Sub-cell 1: Open land tenure and ownership data

### Candidates

| Candidate | What it is | Open layer | Licence/terms | Status |
|---|---|---|---|---|
| Cadasta Foundation | Nonprofit open-source cloud+mobile platform for communities to document/map land and resource rights; ~50 countries, >115,800 sq mi mapped, >7M people (Esri profile) | Software (open source, per-repo licence unverified this scan) + community-owned data | Data licence varies per deployment — unverified | include; post-major-donor institutional status unverified |
| Land Matrix | Independent open database of transnational/domestic large-scale land deals (agriculture, forestry, mining, energy) with CSV/API and deal narratives | Open data + multi-stakeholder coalition governance (ILC, CDE Bern, GIGA) | CSV downloads; exact licence statement unverified from a primary terms page — flagged | include |
| OpenLandContracts.org (CCSI) | First searchable repository of publicly available contracts for large-scale land/agriculture/forestry deals, with plain-language and machine-readable annotations | Contract transparency + annotations | Contracts as published; site/annotation reuse terms not stated — unverified | include |
| BC Land Owner Transparency Registry (LOTR) | **World-first public registry of beneficial ownership of land held through corporations, trusts, partnerships** (Nov 2020/2021); searchable by parcel/owner/intermediary | Public registry — individual search access, not bulk open data | Public search free since April 2024 (fee was $5.25); no bulk/open-data download | include — directly Canadian; the global first |
| Canada beneficial-ownership regime (federal + provincial) | Corporations Canada searchable database (FINTRAC consultation duty since Oct 2025); provincial regimes; publicly accessible federal registry targeted end-2025 — delivery unverified | Emerging transparency layer, access-restricted | Mixed; bulk open data not available | include — farmland-via-corporations remains opaque in most provinces |
| BLM PLSS | US federal cadastral grid (townships, sections, corners) as open geodata | Open data | US public domain (17 USC §105) | include — structural contrast to Canada's fragmented closed provincial title systems |
| First Nation Land Register (Framework Agreement) | Statutory public register of interests in reserve lands of signatory First Nations operating under land codes (~200+ signatories) | Statutory public registry | Public under statute; openness of data access/bulk unverified | include — flag for follow-up with NRCan/LAB |

### Honest absences (tenure/ownership data)

- No verified open-data licence for Land Matrix bulk downloads (CC-family citation unconfirmed).
- No farmland-ownership-transparency dataset published as open data for any Canadian province.
- No public beneficial-land-ownership registry outside BC in Canada (absence asserted from search, not an exhaustive registry audit).
- Cadasta's exact software licence and current funder status; FAO OpenTenure/SOLA licence and deployment status; OpenLandContracts site-content licence; First Nation Land Register data-access details — all flagged unverified.

### Key facts (tenure/ownership data)

- BC's LOTR is the first public beneficial-land-ownership registry globally; search became free in April 2024.
- The global open land-transparency stack (Land Matrix deals, OpenLandContracts contracts, Cadasta community documentation, OpenTenure tenure recording) is entirely donor/academically governed — no state operates it.
- US PLSS is public-domain federal data; Canadian provinces publish no equivalent open cadastral grid (ParcelMap BC's open subset is the partial exception).

## Sub-cell 2: Land trusts and community land tenure

### Candidates

| Candidate | Scale (dated) | Governance | Open layer | Status |
|---|---|---|---|---|
| Terre de Liens (France) | **449 farms, 14,200 ha, 63,524 members, 1,720 volunteers** (terredeliens.org, 2026-09-04); 37 new farms acquired by the foncière in 2025; earlier baseline 400 farms/~800 farmers/12,000 ha (BC white paper, Apr 2025) | Tripartite: solidarity investment company (citizen shareholders) + foundation + 19 regional associations; tenant farmers chosen by local juries; perpetual clauses block resale to speculators | **None** — farm registry/map published but no open-data licence; per-farm economics, lease terms, jury criteria closed; annual reports are PDFs | verified |
| Ontario Farmland Trust (est. 2004) | 31 farms, >3,200 acres cumulative; 821 acres in 2024 alone | Traditional charity; easement-based (land stays privately owned) | None — easement terms and monitoring private | verified |
| Genesis Land Conservancy (SK) | Cited (CCPA 2005) as Canada's strongest agricultural land trust model with most direct farmer governance; current scale not re-verified with dated primary source | Community/farmer-involved nonprofit, leases farmland | None | verified (dated evidence thin) |
| BC Farmland Trust proposal | White paper (Apr 2025) proposing a Terre de Liens-style citizen-shareholding vehicle for BC | Proposed foncière model | n/a — not yet operating | context |
| American Farmland Trust (US, est. 1980) | "More than 7.9M acres protected" (with partners); 300M+ acres analysed in Farms Under Threat | National nonprofit; easement partnerships | **Partial** — Farms Under Threat GIS analyses published freely; no open-data licence on underlying data | verified |
| Agrarian Trust / Agrarian Commons (US, est. 2013) | **400+ acres, 10 commons, 8 states; $6M+ raised** — after ~12 years | Each commons a 501(c)(2) land-holding entity with tripartite board (leasing farmers + community + trust) | None — bylaws, lease templates, financials not open-licensed | verified — the small scale is itself the datapoint |
| Farmland CLT model | Model documentation via Farmland Access Legal Toolkit, Lincoln Institute; no dominant operator at scale in US or Canada | Tripartite CLT boards, 99-year ground leases, resale caps | None — legal toolkits freely readable but not open-licensed; lease templates paid/professional | verified (model level) |
| Indigenous-led conservation trusts / land-back trusts | Fastest-growing trust mechanism in Canada (thin sourcing this scan) | Indigenous-governed; purpose is cultural continuity/land back, not production protection | None found — **appropriately**, given OCAP data-sovereignty norms | verified (thin) |

### Honest absences (land trusts)

- **No farmland trust anywhere publishes open-licensed operational data** (parcel boundaries, lease terms, per-farm financials, monitoring records) — confirmed across every entity scanned.
- No Canadian national-scale farmland-commons vehicle exists; protection is small easement charities against structural-scale loss.
- Agrarian Trust's 400+ acres in ~12 years is the negative datapoint for North American farmland-commons scaling.
- Terre de Liens's closed structure has drawn farmer grievances about the foncière's acquisitions (Reporterre, Apr 2025) that closed data makes hard to audit.

### Key facts (land trusts)

- The cell's core answer: **the world's strongest commons-tenure tradition — Terre de Liens at 63,524 members — produces closed stewardship, not open assets.** Participatory governance, narrative PDFs, zero open-licensed data.
- North American commons models are 2-3 orders of magnitude below the transfer wave they face (40% of US farmland changing hands in 15 years; FCC: >$50B in Canadian farm assets over the next decade).
- The 2025 BC Farmland Trust white paper explicitly names the missing Canadian institution — a Terre de Liens-style vehicle — as its proposal.

## Sub-cell 3: Open-source land-administration software and field/soil data

### Candidates

| Candidate | What it is | Open layer | Licence | Status |
|---|---|---|---|---|
| SOLA / Open Tenure (FAO) | Enterprise open-source cadastre/land-registration suite + mobile tenure-recording app for developing-country land offices | Software | FLOSS (LGPL-family per repo licences folder; per-component unverified) | **Dormant** — last commit 2019-01-13; no active production open-source cadastral suite exists at farm-scale relevance |
| QGIS + PostgreSQL/PostGIS | The de-facto open stack for cadastre/land-records workflows (verified academic and national deployments) | Full software stack | QGIS GPLv2+; PostGIS GPLv2; PostgreSQL permissive | active — the substrate any open land-records work builds on |
| OGC LandInfra / InfraGML | OGC standard for parcels, land division, easements, survey | Open specification | Royalty-free, non-discriminatory (verified) | approved standard; LandInfra 1.1 in pipeline |
| fiboa (Field Boundaries for Agriculture) | Community specification for ag field-boundary data (GeoJSON/GeoParquet) + tooling + open datasets (550k Lower Saxony boundaries, Vietnam/Cambodia, UK) | Spec + tools + datasets | Spec Apache-2.0; converters CC-BY-4.0; datasets CC-BY/CC0 | active (v0.3.0, 2025-08-27, folded into Vecorel); **no Canadian dataset in the catalogue** |
| EuroCrops | ~22M harmonized open EU parcel polygons with crop codes (Nature Sci Data 2023) | Open data | **CC0 1.0** (verified) | active; Canada contributes nothing comparable |
| USDA FSA CLU (counter-example) | US farm-program field boundaries | **None — explicitly not public domain**, public access withdrawn ~2008 | Restricted | counter-example — both North American farm-program parcel datasets are closed |
| OpenStreetMap farmland | Community-mapped farmland polygons — the only licence-clean global base layer | Geodata | ODbL 1.0 | patchy Canadian coverage; approximate boundaries |
| SSURGO / Web Soil Survey (USDA NRCS) | US national digital soil survey | Full spatial+tabular database | **US public domain** (verified) | the most open of the five land layers |
| CanSIS / National Soil Database (AAFC) | Canada's authoritative soil/land data: Soil Landscapes of Canada, detailed soil surveys, 100 m grids, spectral library | All datasets downloadable | **OGL-Canada** | open — the Canadian counterpart, fully licensed for reuse |
| USDA land values (NASS/ERS) | Annual state/county farm real-estate values and cash rents, queryable API | Data + API | US public domain (2025: $4,350/acre avg, +4.3%) | the open benchmark Canada lacks |
| FCC Farmland Values Report | Annual Canadian $/acre values by province/region (2025: +9.3%; 5-yr +9.5%) | Free to read; no open licence, no bulk download | Proprietary (FCC copyright) | the de-facto Canadian price dataset, not open — and FCC is a major farm lender (undisclosed conflict) |
| HM Land Registry (UK) | 289 open-source repos (MIT) + open Price Paid Data (OGL) | Software + transaction data | MIT / OGL | the most open national land registry on the Canada-relevant axis |
| ParcelMap BC (open subset) | BC's authoritative parcel fabric, open subset published | Partial open data | OGL-BC | the only provincial cadastral fabric with a meaningfully open subset |
| Ontario Parcel (counter-example) | 7.5M+ parcels (MPAC assessment + Teranet ownership + Crown) | **None** — commercially licensed, scraping prohibited | Commercial (Teranet/MPAC) | why open farm-parcel analysis in Ontario falls back on lot fabric or OSM |
| Farm-link platforms (PA Farm Link, MN FarmLink, California FarmLink etc.) | Landowner-seeker matchmaking services | None — closed databases, confidential records | Proprietary | no open farm-link platform anywhere; Canada has none at all |
| StatCan Census of Agriculture (succession) | 2021: avg operator age 56.0, 60.5% are 55+, only **12.0% of farms have a succession plan** (up from 8.4% in 2016) | Open data + microdata (Borealis) | Statistics Canada Open Licence | canonical open evidence base for the succession crisis |

### Honest absences (software/data layer)

- No open-source farmland/land-linking platform exists anywhere; Canada has no open farm-link platform at all.
- Both North American farm-program parcel datasets are closed (FSA CLU explicitly non-public-domain; Canada has no open field-boundary vectors — AAFC publishes raster only; Canada is absent from fiboa).
- Canadian cadastral data largely closed: Ontario Parcel commercial (Teranet paywall, scraping prohibited); no provincial registry publishes open price-paid/transaction data (HM Land Registry's Price Paid Data is the model; ParcelMap BC's open subset the partial exception).
- FCC farmland values: free to read, not open data; conflict of interest (FCC as lender) undisclosed in the reports.
- No open-source farm-succession tooling; the data is open, the tools are consultants' proprietary software.
- SOLA, the flagship open land-administration system, is unmaintained (2019).

### Key facts (software/data layer)

- The software/standards stack is fully open (QGIS/PostGIS GPLv2, LandInfra royalty-free, fiboa Apache-2.0, EuroCrops CC0) — while the underlying cadastral and parcel data in North America is overwhelmingly closed. Openness here is a *data governance* problem, not a tooling one.
- Soil is the most open of the five land layers on both sides of the border (SSURGO public domain; CanSIS OGL-Canada).
- The succession numbers that frame everything: 12.0% succession-plan coverage, 56-year average operator age, +9.3% annual farmland value growth.

## Sub-cell 4: Indigenous land governance and title

### The legal-governance arc (all verified, dated)

- **Tsilhqot'in Nation v BC, 2014 SCC 44** (2014-06-26): Canada's first declaration of Aboriginal title. Title held at group level; semi-nomadic occupation suffices; includes exclusive use/benefit and an inherent limit against destructive uses; Crown encroachment requires consent or justified public purpose meeting s.35 fiduciary standards. ~1,750 km² in the Chilcotin; the Tsilhqot'in National Government governs through its own land-use laws (2014 Nenqay Deni Yajelhtich plan).
- **Duty to consult** (Haida Nation v BC, 2004 SCC 73): Crown duty rooted in the honour of the Crown; proportionate to claim strength and impact; doesn't apply to legislation (Mikisew Cree 2018); doesn't bind private proponents independently; UNDRIP Act (2021) adds a separate statutory duty on legislative initiatives.
- **The tenure spectrum in Canada**: Indian Act reserve (Crown title, First Nation use/benefit, federal Indian Land Registry) → **FNLMA land codes** (Framework Agreement 1996; 224 signatory nations, **128 with operational land codes** as of 2026-08-06, 4 in full self-governance — these nations govern reserve lands under their own laws, outside the Indian Act and outside the federal register) → **modern treaty fee simple** (Nisga'a, effective 2000: ~2,000 km² in fee simple with the nation-operated Nisga'a Land Title Office running a fee simple register; James Bay 1975 as first) → **judicially recognized Aboriginal title** (Tsilhqot'in 2014; Haida Gwaii 2024/25).
- **Land Back, dated**: BC–Haida "Rising Tide" Title Lands Agreement (2024-04-15) recognizing Haida Aboriginal title over all provincial Crown land on Haida Gwaii; Canada's recognition of Haida title (2025-02-17); Gwaii Haanas co-management (1993); Thaidene Nëné (2019). Analytical reference: Yellowhead Institute Red Paper *Land Back* (2020).
- **IPCAs**: Indigenous governments hold primary conservation role through Indigenous laws (ICE definition, 2018). Federal funding: $340M (Aug 2021), ~$66M to 42 projects, $800M/7yr (Dec 2022); Budget 2025 added none (CPAWS). The IPCA Knowledge Basket is the community-led document repository (FAQ CC BY-NC-SA 4.0); **no authoritative open count dataset of established IPCAs exists** — counts vary by definition.
- **OCAP on land**: FNIGC's standard (1998) applied to land/territory data as principle and practice (IPCA basket governance, nation-controlled mapping) — **no standing OCAP-governed national land/territory registry was found**.
- **On-reserve agriculture**: reserve lands are systematically lower-quality for farming (Saskatchewan Treaty Land Entitlement analysis: 8.5-9.6% prime/high capability vs 11.7% regionally — Frontiers in Environmental Science, 2025). 2021 Census: 5,405 Indigenous farm operators (3,765 Métis, 1,315 First Nations) of 262,455 — **2.8% of the farm population is Indigenous**.

### Honest absences (Indigenous land governance)

- No open machine-readable registry of interests in reserve lands (the Indian Land Registry System is not openly published at parcel level).
- No operating OCAP-governed national land/territory data registry — OCAP's institutionalized registries are in health/survey data.
- No consolidated open dataset of Land Back transfers (area, dates, parties) — evidence is agreement texts, case by case.
- No authoritative IPCA count; FNLMA land codes posted "for knowledge sharing only" with reuse requiring direct contact.
- National scale of Indigenous-owned agricultural operations not published beyond census operator counts.

### Key fact (Indigenous land governance)

- **Governance in this cell operates overwhelmingly through limits on exposure** — title declarations, consent requirements, land codes, IPCA primary-role governance — not through open datasets. This is the corpus's refusals pattern at its most legally grounded: the strongest land-governance developments in Canada are exercises of jurisdiction that define what may be seen and by whom, not openness. Any farmland-commons design must interface with this, not around it.

## Sub-cell 5: The Canadian farmland frame

### Concentration and transfer facts (sourced, dated)

- 189,874 farms, 262,455 operators at the 2021 Census; farm count −1.9%, operators −3.5% since 2016 (StatCan, 2022-05-11).
- Average operator age 56.0; only 8.6% under 35; ~60% are 55+ (StatCan).
- Succession: FCC projects >$50B in farm assets changing hands over the next decade; CBA cites $53B in land and **88% of farms with no written succession plan**; an industry source estimates ~75% of Canada's $785B farmland asset base changes hands within a decade (estimate, methodology not open).
- **Institutional investors**: Bonnefield (Toronto, Canada's largest farmland investment manager) holds >$1.4B AUM, ~134,000-140,000 acres across seven provinces, leaseback model (self-reported figures; Ontario land registry shows Bonnefield as owner on 464 PIDs — CBC, 2024-06-03). CPP Investments entered SK farmland via the ~$128M Assiniboia acquisition (~115,000 acres, 2013), retreated from ~2017, completed a $520M US farmland exit.
- **Farmland values**: FCC — average cultivated farmland value +9.3% in both 2024 and 2025 (+11.5% in 2023); 10-year national average +8.6%/yr. 2025 provincial: AB +11.4%, MB +12.2%, SK +9.4%, ON +2.2%, QC +4.8%.
- **Farmland loss**: Ontario 319 acres/day (2016-2021 per census), 175 acres/day the two decades prior; BC ALR (~4.6M ha, 4.9% of province) prime-farmland loss ~1,200 acres/yr.
- **Provincial ownership rules** (NFU compilation): SK — non-Canadians capped at 10 acres, pension plans banned (2016); but the Farm Land Security Board approved 141/158 exemption applications 2018-2022 (~716,877 acres to non-resident owners). MB — 40-acre foreign cap. AB — 20 acres/two parcels with Cabinet discretion (JBS/XL 6,600-acre feedlot exemption). QC — 4 ha non-resident cap (CPTAQ), 1,000 ha/yr. **BC, ON, NB, NS — no ownership restrictions**; PEI most extensive.

### Honest absences (Canadian frame)

- **No public Canadian dataset identifies investor/institutional farmland ownership nationally** — the Census records tenure (owned/leased) but not who the landowner is; corporate ownership must be reconstructed parcel-by-parcel from provincial registries, each different, many fee-based.
- FCC values are aggregate averages, no transaction-level data, detailed datasets behind login, and FCC's conflict of interest (major farm lender) undisclosed.
- SK/MB exemption decisions mostly not itemized publicly; Alberta has no public exemption register.
- Total pension-fund farmland acreage not published anywhere; the $50B/$53B/"75% of $785B" transfer projections come from FCC/industry sources without open methodology.
- No national farm-link program or beginning-farmer dataset; BC Land Matching outcomes not systematically published.
- Farmland "loss" figures conflate urban conversion with reversion to natural uses; the census doesn't disaggregate by cause.

## Cross-cell synthesis

1. **Land is the corpus's first cell where the dominant enclosure is legal-institutional rather than technical.** Every other cell asked where openness thins as capital, regulation, or platform power concentrate. Land's enclosures are registries (closed or fee-walled), trusts (closed stewardship), licences and exemptions (opaque enforcement), and title itself. The open-software and open-standards stack is fully mature (QGIS/PostGIS, LandInfra, fiboa, EuroCrops CC0) — proving, more cleanly than any prior cell, that **the binding constraint on openness in land is data governance, not tooling**.

2. **The commons-tenure tradition produces closed stewardship — now confirmed at its strongest point.** Terre de Liens is the largest farmland commons in the world (63,524 members, 14,200 ha, 449 farms), participatory to the jury level, and publishes nothing under an open licence; its closed books have even drawn farmer grievances it cannot easily answer. This generalizes the corpus's governance-without-open-assets finding to its strongest case: openness is not a corollary of commoning. The corollary cuts the other way — the cells where open assets exist (science, watching) are those where states or funders made them open *by decision*.

3. **Ownership transparency in Canada is one provincial registry deep.** BC's Land Owner Transparency Registry is the world's first public beneficial-land-ownership registry, and also Canada's only one; the federal beneficial-ownership regime remains access-restricted; Ontario's parcel data is commercially locked (Teranet); no province publishes open price-paid data (HM Land Registry does); and no public dataset anywhere in Canada identifies institutional farmland ownership while Bonnefield holds ~140,000 acres and farmland values compound at ~9%/yr. "Who controls Canadian farmland" is, as a data question, unanswerable from public sources — the most concrete expression of the project's founding question going dark.

4. **Indigenous land governance is jurisdictional, and the corpus should not Grade it on openness.** The tenure spectrum (Indian Act → land codes → treaty fee simple → declared Aboriginal title) is a spectrum of jurisdictions, each with its own registry logic; FNLMA nations govern outside the federal register by design; the Haida agreement (2024/2025) and Tsilhqot'in declaration are exercises of collective title, not transparency failures. OCAP on land is principle, not yet operating registry — and the cell's honest reading is that this is continuity with the refusals pattern, not a gap awaiting an open-data fix. The one quantitative window (2021 Census: 2.8% of the farm population is Indigenous; on-reserve land systematically lower-capability) frames how far agricultural agency and land base remain from parity.

5. **The succession crisis is the cell's engine, and its evidence is open while its mechanisms are closed.** Everything measurable — operator age, succession-plan coverage (12%), values growth (+9.3%/yr), loss rates (319 acres/day in Ontario) — is open census data. Everything actionable — who owns what, at what price, exemption decisions, land-link matching, farm-link platforms — is closed. The cell's sharpest formulation: **Canada's farmland transition will be the largest private wealth transfer in its agricultural history, and the public cannot see it.**

G-OSA-35 resolves provisionally into four shapes: (1) open science/environmental layers — soil (SSURGO, CanSIS) and crop inventory — fully open on both sides of the border; (2) closed registries — beneficial ownership (BC-only, search-not-bulk), cadastral fabric (commercial or partial), institutional ownership (nowhere); (3) closed stewardship — the land-trust/commons tradition, participatory but unlicensed; (4) jurisdictional governance — Indigenous title, land codes, and IPCAs operating through community-defined law, with OCAP as the appropriate data-governance frame rather than open publication.

### Priority verification targets for `examples/` (follow-up pass)

1. **BC Land Owner Transparency Registry** — the world-first beneficial-land-ownership registry; the Canadian anchor record; verify search terms, fee history, disclosure scope.
2. **Terre de Liens** — the strongest farmland-commons case; verify scale figures and the honest absence of open assets; document the closed-stewardship finding.
3. **Land Matrix** — the open land-deal database; verify licence and data governance.
4. **fiboa + EuroCrops** — the open field-boundary standard and the CC0 dataset; verify and record Canada's absence.
5. **CanSIS / National Soil Database** — the fully-open Canadian land asset (OGL-Canada); pairs with SSURGO.
6. **HM Land Registry open-source + Price Paid Data** — the reference model for what a land registry can open; counter-weights Ontario Parcel's closure.
7. **Framework Agreement / FNLMA land codes** — as a governance record documenting the 224-nation jurisdictional layer (verify counts via labrc.com), framed as jurisdiction-not-dataset.

## What this scan does not do

- It does not cycle candidate records through full verification or curate them into `examples/` — that is the follow-up pass, per house practice.
- It does not treat trusts or collective ownership alone as an open layer; ownership models are recorded with their open layers (or the honest absence of one) separately.
- It treats Indigenous title and jurisdiction as legal-governance substance in a factual register; it does not evaluate or advocate on rights questions, and records where Indigenous data governance (OCAP) is claimed but not yet operating.

## Sources

[to be completed]

Not legal advice.