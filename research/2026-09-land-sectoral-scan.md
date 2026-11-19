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

*Sources section completed 2026-11-19 — the scan's own "[to be completed]" placeholder.
Completion-pass scope: re-verify at source the census framing figures the succession
program leans on; locate the source statements for the three transfer projections; write
the ledger for all five sub-cells; record refinements as dated notes. The scan's body
prose is unchanged (dated-document discipline); where a follow-up record or this pass
refined a scan statement, the refinement is recorded here, not by rewriting the body.
Labels: **verified** = read at source in this pass or in the cited record/pass;
**verified as reported** = named third party reporting a figure whose methodology is not
fully open; **as cited in scan** = recorded 2026-09-04, not re-fetched in this pass;
**derived** = arithmetic shown.*

### 1. Census framing figures — verified at source 2026-11-19

Primary: Statistics Canada, The Daily, "Canada's 2021 Census of Agriculture: A story
about the transformation of the agriculture industry and adaptiveness of Canadian
farmers", released 2022-05-11.
<https://www150.statcan.gc.ca/n1/daily-quotidien/220511/dq220511a-eng.htm> (full text
read 2026-11-19). Statistics Canada Open Licence. Supports, verbatim:

- 189,874 census farms, −1.9% from 193,492 in 2016 (Table 32-10-0156-01).
- 262,455 farm operators, −3.5% from 271,935 in 2016.
- Average operator age 56.0, up 1.0 year (Table 32-10-0230-01); median 58.0.
- 60.5% of operators aged 55+, up from 54.5% in 2016.
- 8.6% of operators under 35, down from 9.1% in 2016 ("Canada's share of young
  operators was 8.6%, down slightly from 9.1% in 2016").
- Succession plan: 8.4% (2016) → 12.0% (2021), +6,673 farms; oilseed-and-grain farms
  44.5% of farms reporting a plan. Tables 32-10-0244-01 (2021) and 32-10-0448-01 (2016)
  (table IDs per the CBA essay's footnotes and NFU, *Canadian Ag by the Numbers 2024*).
- Comparability caution: the 2021 farm definition changed to the CRA tax-reporting
  unit; StatCan's own note applies to the −1.9%/−3.5% comparisons.

Indigenous operators — Statistics Canada, *Canadian Agriculture at a Glance*, "A story
about the diversity of Canada's farm operators" (96-325-x2021001article00017):
**5,405 Indigenous farm operators, 3,765 Métis, 1,315 First Nations** (verbatim;
retrieved 2026-11-19).
<https://www150.statcan.gc.ca/n1/pub/96-325-x/2021001/article/00017-eng.htm>

*Refinement (2026-11-19):* sub-cell 4 juxtaposes "5,405 … of 262,455 — 2.8% of the farm
population is Indigenous". Two different denominators: 5,405/262,455 = **2.1% of
operators** (derived); **2.8% is the Indigenous share of the farm population** (16,705
people, Agriculture–Population Linkage; StatCan article 96-325-x2021001article00020,
<https://www150.statcan.gc.ca/n1/pub/96-325-x/2021001/article/00020-eng.htm>). Both
figures are correct with their own denominators; the synthesis must not conflate them.
(3,765 + 1,315 = 5,080; the remainder are Inuit and multiple-identity operators.)

### 2. Transfer projections — sources located 2026-11-19 (all verified as reported)

- **FCC >$50B.** FCC, "The future of agriculture: Empowering the next generation of
  Canadian farmers", <https://www.fcc-fac.ca/en/knowledge/economics/future-of-agriculture>
  (retrieved 2026-11-19): "over $50 billion in farm assets set to change hands over the
  next decade"; composition ~$40B farmland (~5.4M acres) + $10B current assets by
  end-2035; assumes farm exit rates of 0.4%/yr (the 2016–2021 census trend); explicitly
  a **lower bound**. *Refinement:* the methodology is now partially stated on FCC's own
  page — refining the scan's blanket "methodology not open" for this figure. The
  lender-authored conflict stands (C1).
- **CBA $53B / 88%.** Jessica Izard, "Succession Planning for Family Farms", CBA Wills,
  Estates and Trusts Section (2023 essay-contest winner; published 2024-01-10),
  <https://cba.org/fr-ca/sections/wills-estates-and-trusts/resources/succession-planning-for-family-farms/>
  (full text read 2026-11-19). $53B footnoted to Eric Atkins, "As Farmers Age, Old
  Techniques Go Out to Pasture", *Globe & Mail*, 2015-11-12 (not re-fetched); 88%
  no-plan footnoted to StatCan Table 32-10-0244-01. *Refinement:* the CBA 88% is the
  **complement of the census 12.0%** (derived: 100 − 12.0), not an independent
  measurement. The essay's "40% of farmers retire by 2033" is footnoted to RBC Climate
  Action Institute, *Farmers Wanted: The Labour Renewal Canada Needs* (Yaghi et al.,
  2023) — the same source as C11's RBC 66%-no-plan figure: shared lineage, not
  independent corroboration. *Surfaced for the synthesis:* the essay reports **only 4%
  of farm succession plans contemplate non-family successors** (footnoted to Table
  32-10-0244-01; the table's successor dimension not independently confirmed in this
  pass) — the first named quantification of the non-family plan gap the design
  document's P5 addresses.
- **Industry ~75% of $785B.** Kent Willmore (Founder & CEO, Crescero Natural Capital),
  "Passing the torch: The opportunity arising from the generational wealth transfer of
  Canadian farm families", *AIMA Journal* edition 146, published 2026-06-22,
  <https://acc.aima.org/journal/aima-journal---edition-146/article/passing-the-torch-the-opportunity-arising-from-the-generational-wealth-transfer-of-canadian-farm-families.html>
  (retrieved 2026-11-19): "Nearly 75% of Canada's CAD785+ billion farmland asset base is
  expected to change hands within the next decade". $785B footnoted to StatCan, Balance
  sheet of the agricultural sector (Table 32-10-0056-01); the 75% to *Manitoba
  Co-operator*, "The dawn of a new generation" (not re-fetched). **Investor-authored** —
  the same conflict shape as FCC's (a farmland investment manager estimating the
  transfer that funds its own asset class); methodology not open. The article itself
  repeats the census 12% plan figure.

### 3. Concentration, values, loss — located or re-verified

- **Bonnefield.** Colin Butler, "Investors reshaped Canadian home real estate. Something
  similar is happening in agriculture", CBC News, 2024-06-03,
  <https://www.cbc.ca/news/canada/london/ontario-farmland-real-estate-investment-1.7218435>
  (retrieved 2026-11-19): >$1.4B AUM / 140,000 acres / seven provinces (self-reported
  via Bonnefield's website, as quoted by CBC); Ontario land registry shows Bonnefield on
  **464 PIDs**. CBC corrected the story the same day: 464 parcels = 114 farms — the
  scan's "464 PIDs" wording survives the correction. Verified as reported.
- **CPP Investments / Assiniboia.** Refined by C6 via the JSGS brief
  (`examples/records/jsgs-saskatchewan-farmland-brief.md`): CPPIB fully divested SK
  farmland by 2023 ($390M). The scan's ~$128M Assiniboia acquisition (~115,000 acres,
  2013) and ~2017 retreat stand as cited; the $520M US exit as cited in scan (not
  re-fetched).
- **FCC farmland values.** 2025 +9.3% (AB +11.4%, MB +12.2%, SK +9.4%) verified at
  source by C4 from FCC's 2025 release
  (<https://www.fcc-fac.ca/en/about-fcc/media-centre/news-releases/2026/canadas-2025-farmland-values-climbed>;
  see `succession/research/2026-11-c4-entry-cost-pass.md`). 2024 +9.3%, 2023 +11.5%,
  10-year average +8.6%/yr, ON +2.2% / QC +4.8% (2025): as cited in scan from FCC's
  annual Farmland Values Reports (free-to-read, proprietary, no bulk download; the
  lender conflict is undisclosed in the reports).
- **Ontario farmland loss 319 acres/day.** OFA, "Ontario farmland under intense
  pressure", 2022-06-10, <https://ofa.on.ca/newsroom/ontario-farmland-under-intense-pressure/>
  (retrieved 2026-11-19) — **derived, arithmetic published**: 12.4M acres (2016) −
  11.7M (2021) = 582,392 acres ÷ 5 yr ÷ 365 = 319.12/day; prior rate 175/day (2016
  census). OFA's Crispin Colvin (CBC,
  <https://www.cbc.ca/news/canada/london/the-rest-of-the-province-is-losing-farmland-but-london-s-is-growing-1.6511644>):
  aggregate loss to all other uses, not only urban conversion — the scan's conflation
  caveat stands, now sourced.
- **Provincial ownership rules.** NFU, "Provincial Farmland Legislation",
  <https://www.nfu.ca/learn/farmland/provincial-farmland-legislation/> (retrieved
  2026-11-19): SK 10-acre non-Canadian cap, pension-plan ban (2016), Farm Land Security
  Board **141/158 exemptions approved 2018–2022 (~716,877 acres** to non-resident
  owners) verbatim; MB 40-acre cap, decisions not itemized publicly. AB 20 acres/two
  parcels, QC 4 ha CPTAQ cap, BC/ON/NB/NS no restrictions, PEI most extensive: as cited
  in scan from the same NFU compilation (those sections not re-read in this pass); the
  NFU's *Losing Our Grip* 2015 update is the older underlying compilation.

### 4. Follow-up verification layer (2026-09-04) — the seven priority targets, curated as records

Each record carries its own Sources section with primary URLs and retrieval dates.
Corrections to scan statements, recorded in the records and summarized here:

- `examples/records/bc-lotr.md` — Act SBC 2019 c.23; filings 2020-11-30, public search
  2021-04-30, free 2024-04-01. *Refinement:* "world-first" is media characterization
  (official: first-of-its-kind in Canada); LTSA is a statutory corporation, not a Crown
  corp; scale 553,068 declarations / 137,068 reports as of 2023-12-21; zero known
  penalties; s.40 omission regime and Indigenous-land exclusion documented.
- `examples/records/terre-de-liens.md` — 449 farms / 14,200 ha / 63,524 members
  confirmed; *correction:* foncière created 2006, not 2007; shares €106 with 25% tax
  relief, no dividends; "ne revend pas ses fermes"; open-layer absence verified down to
  the mentions légales prohibiting reuse; Reporterre 2025 grievances documented.
- `examples/records/land-matrix.md` — licence **verified CC BY 4.0** from the primary
  data-policy page (resolves the scan's flagged absence); founded 2009, database 2012;
  4,398 deals; systematic collection limited to transnational ag/forestry.
- `examples/records/fiboa-eurocrops.md` — *corrections:* EuroCrops is **CC BY-SA 4.0**
  (Zenodo/GitHub), not the CC0 the scan cites (the paper's CC0 applied to one country's
  raw data only); fiboa CLI Apache-2.0 (not CC-BY); spec Apache-2.0 v0.3.0 confirmed;
  55 datasets, no Canada; EuroCrops 16 EU countries.
- `examples/records/cansis.md` — SLC v3.2 / DSS / 100 m grids OGL-Canada verified on
  open.canada.ca; caveats: SLC current only to 2011, 100 m grids preliminary, CLI under
  legacy notice, spectral library contact-only.
- `examples/records/hm-land-registry.md` — Price Paid Data OGL v3.0 verified; *correction:*
  first published 2014-07-24, not 2015; data from 1995, monthly; 289 repos verified
  exactly, 192 MIT; title registers fee-based (£7), address fields under third-party
  restriction.
- `examples/records/framework-agreement-land-codes.md` — 224 signatories / 128
  operational land codes / 4 full self-governance as of 2026-08-06 confirmed;
  *correction:* 44 Indian Act land sections replaced, not 33; FAFNLMA S.C. 2022 c.19 in
  force 2022-12-15; land codes knowledge-sharing-only, reuse via direct nation contact.

### 5. Succession-program re-verification layer (2026-11-18/19)

- Both founding absences re-confirmed: **no open farm-link platform anywhere** (C2,
  GitHub searched; `succession/research/2026-11-c2-farm-link-pass.md`); **no open
  succession tooling** refined into the asset-by-asset licensing-gap finding (C1/C3
  passes; `succession/research/2026-11-c1-succession-knowledge-pass.md`,
  `succession/research/2026-11-c3-open-legal-assets-pass.md`).
- Tax layer (C6): AAFC QP note AAFC-2025-QP-00152 (open.canada.ca) + OFA fact sheet +
  PMO release — LCGE $1.25M, inclusion-rate increase cancelled, family-shaped
  architecture (`succession/research/2026-11-c6-visibility-policy-pass.md`).
- Visibility current state (C6): federal public beneficial-ownership registry still
  absent (ISED consultation live); BC LOTR still Canada's only one; Québec's corporate
  registry flagged unverified.
- JSGS method precedent (C6, record): 84 large owners / 1.44M acres / +140% in five
  years; no evidence of non-Canadian ownership.

### 6. As cited in scan (2026-09-04), not re-fetched in this pass

- Sub-cell 1: Cadasta scale (Esri profile); OpenLandContracts (CCSI); BLM PLSS US
  public domain (17 USC §105); Corporations Canada / FINTRAC consultation duty since
  Oct 2025; federal registry end-2025 target (delivery unverified — C6 confirms still
  absent).
- Sub-cell 2: Ontario Farmland Trust 31 farms / >3,200 acres / 821 acres in 2024 (OFT);
  Genesis Land Conservancy (CCPA 2005 — dated evidence thin); BC Farmland Trust white
  paper (Apr 2025); AFT >7.9M acres protected / 300M+ acres Farms Under Threat;
  Agrarian Trust 400+ acres / 10 commons / 8 states / $6M+ (see also
  `examples/records/agrarian-commons-legal-guide.md`, C3); Farmland CLT model (Farmland
  Access Legal Toolkit / Lincoln Institute); "40% of US farmland changing hands in 15
  years" (source not named in the scan — flagged below).
- Sub-cell 3: SOLA last commit 2019-01-13 (dormancy); QGIS GPLv2+ / PostGIS GPLv2 /
  PostgreSQL permissive; OGC LandInfra royalty-free; OSM ODbL 1.0; SSURGO US public
  domain; USDA NASS 2025 $4,350/acre +4.3% (annual Land Values summary); ParcelMap BC
  OGL-BC open subset; Ontario Parcel Teranet/MPAC commercial, scraping prohibited; FSA
  CLU access withdrawn ~2008, explicitly not public domain.
- Sub-cell 4 (legal-governance arc; canonical citations, texts not re-fetched):
  Tsilhqot'in Nation v BC, 2014 SCC 44 (2014-06-26); Haida Nation v BC, 2004 SCC 73;
  Mikisew Cree 2018 SCC 40; UNDRIP Act 2021; FNLMA 1996 (see record); Nisga'a effective
  2000, ~2,000 km²; James Bay 1975; BC–Haida "Rising Tide" 2024-04-15; Canada
  recognition 2025-02-17; Gwaii Haanas 1993; Thaidene Nëné 2019; Yellowhead Institute
  Red Paper *Land Back* (2020); IPCA ICE definition 2018; federal IPCA funding $340M
  (Aug 2021) / ~$66M to 42 projects / $800M over 7 years (Dec 2022) / Budget 2025 added
  none (CPAWS); IPCA Knowledge Basket FAQ CC BY-NC-SA 4.0; OCAP (FNIGC 1998); SK Treaty
  Land Entitlement land-capability analysis 8.5–9.6% vs 11.7% regionally (Frontiers in
  Environmental Science, 2025).
- Sub-cell 5: BC ALR ~4.6M ha / 4.9% of province / ~1,200 acres/yr prime loss (source
  not named in the scan — flagged below).

### 7. Honest residuals (unverified, carried forward)

- Cadasta's per-repo software licence and post-major-donor institutional status.
- OpenLandContracts site/annotation reuse terms.
- FAO OpenTenure/SOLA per-component licences.
- Genesis Land Conservancy current scale (dated evidence thin).
- Québec's corporate beneficial-ownership registry (C6 flag).
- "40% of US farmland in 15 years" and the BC ALR loss figures: sources not named in
  the scan; not relocated in this pass.
- Transfer projections: FCC's methodology now partially stated; the CBA $53B traces to
  a 2015 media article; the 75%/$785B estimate is investor-authored with methodology
  not open. None is an open-methodology measurement.
- The CBA essay's 4% non-family-plan figure: footnoted to the census succession table;
  the table dimension not independently confirmed in this pass.


Not legal advice.