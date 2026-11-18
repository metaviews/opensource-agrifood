# Directory of people and organizations in the corpus

Research date: 2026-11-15 (built, cleaned and verified, categories axis added, and further axes added — all the same day)

This directory lists every individual and organization the corpus treats as an actor — operators, founders, maintainers, partners, funders, governments, networks, deployment counterparties and contrast cases — across the curated records (`examples/records/`), the scans (`research/`), the case studies (`dairy/`, `cea/`), the topic workstreams (`grocery/`, `upcycling/`), the concept and event documents (`docs/`), and the repo root documents. It is a finding aid for the corpus with several axes: **geography** (primary organization), **categories** (curated thematic groupings), **openness layer**, **governance & control**, **lifecycle status**, and a **verification tier**; stated relationships are mapped in *Links between entries*.

Not a scan (no G-ID). This is corpus infrastructure in the lineage of `examples/catalog.md`, not a research document; it introduces no new claims and re-verifies nothing beyond what its verification pass records below.

## How to read

- **Geography is recorded exactly as the corpus states it** — city, region, or reach text carried verbatim from the source document (for record-backed entries, from the record's curated `Region / reach` line). Where the corpus never states a geography, the entry sits in the final section, *Geography not stated in the corpus*. No geography is inferred.
- **Types**: People · Organizations · Networks · Projects & platforms · Governments & public bodies · Funders.
- **Categories** (second axis): each entry may carry one or more thematic category tags (`⌗` on the entry line; membership curated, stored as `categories` in `directory-data.json`). An entry with no category is not unimportant — most entries are not yet assigned; categories grow by curation. See *Categories*.
- **Openness / governance / lifecycle** (third, fourth and fifth axes): curated per entry where the corpus states it, stored as `openness`, `governance` and `lifecycle` in `directory-data.json` and browsable in *Additional axes*. The verification tier of every entry is explicit in *Verification tier*. All grow by curation; absence of an assignment means *not stated*, not a negative finding.
- **`[record]`** links to the entity's curated record in `examples/records/`; all 141 collection records are cross-referenced here, each attached to exactly one entry of the right kind. Record-backed entries carry the record's verified region and framing; entries sourced only from scans and working documents carry what those documents state and have **not** been independently re-verified — treat them as recorded, not asserted.
- **Sources** list (up to three) the corpus files where the entity appears; `+n` means further files, all listed in `directory-data.json`.
- **Roles** are one-line descriptions taken from the corpus's own framing of the entity. For contrast cases (closed platforms, failed deployments, incident records), the role preserves that framing.
- **`→` links** on an entry point to other directory entries the corpus explicitly connects it to (see *Links between entries*). A `◉` marker flags a stated non-active lifecycle (dormant, archived, liquidated, defunct, proposal-stage).

## Verification and cleaning pass (2026-11-15)

- **Name-in-source check**: every entry's name was checked against its cited source files (1,106 pre-merge entries). Four flagged: three confirmed present under short acronyms the checker initially missed (UBC, CGF, C3) and one genuine error fixed (WWF's cited source did not mention it; re-sourced to `grocery/research/food-waste-canada.md` and `examples/records/smart-conservation.md`).
- **Duplicates merged**: 86 duplicate/variant entries merged away across two passes, taking the directory from 1,106 pre-merge entries to 1,020 (e.g. `Arctic Co-operatives Ltd` / `Arctic Co-operatives` / `Arctic Co-operatives Limited`; `AAFC` / `Agriculture and Agri-Food Canada (AAFC)`; surname-only `Tischler` / `Reimer` into the full person records; `OpenSourceSeeds` ×3; `Thermalize` / `Everflow` ×3). Merge provenance is kept per entry (`merged_from`) in `directory-data.json`. The second pass ran while curating category membership, which surfaces same-subject entries under different names faster than name matching alone.
- **Record holders repaired**: 23 person entries had been carrying the curated record of their related *project* (e.g. Vandana Shiva carrying `navdanya.md`); records were moved back to the project/organization entry, and seven records that had lost their holder in a merge were re-attached (foodsharing, SIKU, CSBAN, Real Seeds, Open Foris/SEPAL, sdmTMB, FAST Lab agrivoltaics — the last as a new project entry). Every one of the 141 records now sits on exactly one entry of the right kind.
- **Deliberately kept separate** (look like duplicates, are not): GS1 vs GS1 Canada (global body vs national member); USDA vs USDA NAL / FAS / ERS (department vs sub-agencies); Government of Ontario vs its ministries and agencies; EPCIS (the GS1 standard) vs OpenEPCIS (an open implementation); Western University vs its FAST Lab; the Open Food Network family (foundation, international project, national instances); La Cagette (food co-op) vs Cagette.net (software platform); The Recipes Project vs Collecting Recipes (two distinct projects); HomeBiogas Ltd. (proprietary vendor) vs Solar Biogas / HomeBiogas (open digester designs).
- Remaining known limits: a few same-organization entries may persist under differently worded names; scan-derived roles are one extraction pass, not independently re-verified against primary sources; surname-only people (`Killorn`, `MacTavish`, Future Herd guests) carry only what the corpus states.

## Coverage

| Geography | People | Orgs | Networks | Projects | Gov | Funders | All |
|---|---|---|---|---|---|---|---|
| Global / cross-border reach | 3 | 2 | 2 | 16 | 0 | 0 | 23 |
| Canada | 8 | 108 | 1 | 38 | 57 | 3 | 215 |
| United States | 15 | 54 | 2 | 25 | 12 | 0 | 108 |
| Europe | 10 | 51 | 7 | 27 | 8 | 1 | 104 |
| East Asia (China, Japan) | 0 | 10 | 0 | 11 | 6 | 0 | 27 |
| South Asia (India, Nepal, Bhutan) | 1 | 7 | 0 | 8 | 11 | 0 | 27 |
| Southeast Asia | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Africa | 1 | 4 | 1 | 7 | 0 | 0 | 13 |
| Middle East & North Africa | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Latin America & Caribbean | 0 | 3 | 1 | 4 | 0 | 0 | 8 |
| Oceania & Pacific | 1 | 4 | 0 | 3 | 1 | 0 | 9 |
| Indigenous nations and territories (as stated) | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
| Geography not stated in the corpus | 46 | 296 | 6 | 104 | 10 | 21 | 483 |
| **Total** | **85** | **542** | **20** | **243** | **105** | **25** | **1020** |

## Links between entries (stated relationships)

Every link below is stated in the corpus — in the entry's role text or in its curated record. Machine-extracted co-mentions were used to *find* candidates only; each published link was checked against the source text. This is the seed of the deferred relationship mapping; `directory-data.json` carries the same links per entry (`links_out`).

### People → projects and organizations (46)

| Person | Relationship | Entry |
|---|---|---|
| Alex Paly | individual maker | OpenFence |
| Amol Deshpande | co-founder | Farmers Business Network (FBN) |
| Andrew Thaler | project lead | OpenCTD |
| Arthur Potts Dawson | co-founder | The People's Supermarket (TPS) |
| Bill Braun | farmer who initiated the design | Grain Bikes (bicycle-powered grain processing machines) |
| Billy Tiller | founder | Grower Information Services Cooperative (GISC / GiSC) |
| Brian Tischler | originator | AgOpenGPS |
| Caleb Harper | founded 2015 | MIT OpenAg (Open Agriculture Initiative) |
| Chris Hildreth | founder | AgriKit |
| Chris Hildreth | founder | TOPSOIL |
| Dan Lussier | named as EMILI's lead in the corpus | EMILI Canada |
| David Barrie | co-founder | The People's Supermarket (TPS) |
| Dirk Prins | strategic business manager (open platform/API) | Priva |
| Dr. Joshua M. Pearce | leads | FAST Research Group (uwo-fast) |
| Emily Vogler | produced the plans | Grain Bikes (bicycle-powered grain processing machines) |
| Eric Eldred | co-founder | Creative Commons |
| Gauthier, Ndiaye, Guissé | researchers behind the corpus initiative | Kallaama |
| Glyn Hudson | co-founder | OpenEnergyMonitor |
| Greg Austic | leads Our Sci | Our Sci (our-sci) |
| Hal Abelson | co-founder | Creative Commons |
| Hans Peters | named Priva representative | Priva |
| Hans-Peter Schmidt | Kon-Tiki co-designer | Ithaka Institut |
| Horace Clemmons | co-founder | CleBer LLC |
| Hugh McLaughlin | originator of TLUD/JRO designs | IBI open-source biochar technologies (aggregator) |
| Jake (surname unknown) | community contributor | AgOpenGPS |
| Jan Yoder | designed and built | Grain Bikes (bicycle-powered grain processing machines) |
| Jay Smart | design lead | Compost for Good |
| Jesse Hirsh | of Metaviews | Metaviews |
| Kate Bull | co-founder | The People's Supermarket (TPS) |
| Kelpie Wilson | originator of Wilson TFOD kiln designs | IBI open-source biochar technologies (aggregator) |
| Kyle Gabriel | maintainer | Mycodo |
| Lawrence Lessig | co-founder | Creative Commons |
| Luke Silinski | created | Ag Tech STEAM |
| Marcin Jakubowski | founder | Open Source Ecology (OSE) |
| Mario Rothauer | lead developer (sole maintainer) | FoodCoopShop |
| Martin Jäger | founder | Libre Solar |
| Mike Paterson | co-founder | AgriKit |
| Paul Taylor | Kon-Tiki co-author | Ithaka Institut |
| Ray Wang (Dr. Ray Wang, Rayshobby LLC) | founder | OpenSprinkler |
| Saul Berenthal | co-founder | CleBer LLC |
| Schmidt & Taylor | documented the design (Biochar Journal) | Kon-Tiki kiln |
| Stéphan Gigandet | launched 2012 | Open Food Facts |
| Tim Foster | leads maintenance | AquaCrop-OSPy |
| Trystan Lea | co-founder | OpenEnergyMonitor |
| Vandana Shiva | founder | Navdanya |
| Wilson, McLaughlin, Domermuth, Joseph/Taylor, Cahoj, Wilson/Nakka | originators hosted on IBI's open-source collection | International Biochar Initiative (IBI) |

### Organizations and projects → other organizations (47)

| Entry | Relationship | Entry |
|---|---|---|
| AdkAction | host (now under ANCA) | Compost for Good |
| Agriculture and Agri-Food Canada (AAFC) | publisher/maintainer | Holos — Agriculture and Agri-Food Canada |
| AGRIS Solar Co-operative | spun out by | AGRIS Co-operative |
| Alibaba | developed by Alibaba Cloud | Alibaba ET Agricultural Brain |
| CGF (Consumer Goods Forum) | partner | FLW Standard (Food Loss and Waste Accounting and Reporting Standard) |
| CleBer LLC | maker | Think Oggún (Oggún tractor) |
| Coop Carbone | partner / developer | Coop Agri-Énergie Warwick |
| Digital Green | operator | FarmerChat |
| Digital Green | owner | FarmStack |
| FAO (UN Food and Agriculture Organization) | lists in its Agroecology Knowledge Hub | Farm Hack |
| FAO (UN Food and Agriculture Organization) | operates the platform | Open Foris (incl. SEPAL, Collect, Arena) |
| FUSIONS (EU FUSIONS) | partner | FLW Standard (Food Loss and Waste Accounting and Reporting Standard) |
| Grower Information Services Cooperative (GISC / GiSC) | merger lineage: GISC → GADC → NAPDC | NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative) |
| GS1 Canada | national member of the standards body | GS1 |
| International Biochar Initiative (IBI) | hosts the collection | IBI open-source biochar technologies (aggregator) |
| Ithaka Institut | anchoring organisation | Kon-Tiki kiln |
| Mozilla Foundation | host | Mozilla Common Voice |
| OFN Canada | participant / federated-data portal work | Data Food Consortium (Open Standard) |
| OFN Canada | national instance | Open Food Network (OFN) |
| OFN USA | national instance | Open Food Network (OFN) |
| Ontario | provincial agency | IESO (Ontario) |
| Ontario | provincial ministry | OMAFRA (Ontario Ministry of Agriculture, Food and Agribusiness) |
| Ontario | provincial agency | Ontario Energy Board (OEB) |
| Open Food Foundation | supports the codebase (set up 2012) | Open Food Network (OFN) |
| Open Food France | host | Data Food Consortium (DFC Standard) |
| Open Food France | national instance; origin of the Data Food Consortium | Open Food Network (OFN) |
| Pacific Coast Collaborative | partnership | Pacific Coast Food Waste Commitment (PCFWC) |
| Pattison Food Group | owner | Save-On-Foods |
| Purdue OATS Center (OATS) | maintainer | Open Ag Data Alliance (OADA) |
| ReFED | secretariat of the partnership | FLW Standard (Food Loss and Waste Accounting and Reporting Standard) |
| ReFED | co-founder (with WWF) | U.S. Food Waste Pact |
| Ronnie Baugh Tractors | manufacturer | Think Oggún (Oggún tractor) |
| SAOS (Scottish Agricultural Organisation Society) | federation-owned subsidiary | ScotEID |
| Standard Data Platform for Autonomous Agriculture | led by (partner) | Simon Fraser University |
| Standard Data Platform for Autonomous Agriculture | led by (partner) | Terramera |
| Standard Data Platform for Autonomous Agriculture | led by | University of Liège (DEAL / TERRA) |
| Standard Data Platform for Autonomous Agriculture | led by (partner) | Verge Ag |
| TNO | developer | Common Greenhouse Ontology (CGO) |
| U.S. Food Waste Pact | national successor | Pacific Coast Food Waste Commitment (PCFWC) |
| USDA / USDA ERS | sub-agency | USDA |
| USDA FAS | sub-agency | USDA |
| USDA NAL | sub-agency; operates Ag Data Commons | USDA |
| Wageningen University & Research (WUR) | publisher | Autonomous Greenhouse Challenge |
| Western University FAST Lab / WIRED (uwo-fast) | research group behind the project | Western University FAST Lab / WIRED open-source agrivoltaics hardware |
| Western University FAST Lab / WIRED (uwo-fast) | research group behind the project | Western University FAST Lab open scientific instrumentation (OSSEI) |
| WWF | co-maintainer (with WCS, ZSL, FZS, NC Zoo, Panthera, Re:wild) | SMART (Spatial Monitoring and Reporting Tool) |
| WWF | co-founder (with ReFED) | U.S. Food Waste Pact |

## Categories (second axis)

Thematic groupings over the whole directory. Membership is **curated**: each category was seeded by a keyword pass over entry names and roles, then reviewed entry by entry, with false positives removed and misses added; contrast cases (closed platforms, failed deployments, incident records) are kept where the corpus treats them as actors in that domain. Categories **overlap by design** — an entry can belong to several. 484 of 1020 entries carry at least one category; the rest are not yet assigned, and categories grow by curation rather than by default. Membership lives on each entry (`categories` in `directory-data.json`), so the axis is revisable: adjust a category's membership and this document regenerates from it.

### Co-operative & community grocery — `co-op grocery` (85)

*Food co-ops, community grocery platforms, hub and co-op retail infrastructure — plus the conventional chains the corpus uses as concentration contrast cases.*

- **AGRIS Co-operative** — Farmer-owned grain/input co-op that spun out AGRIS Solar · *geo: "Ontario (Canada)"*
- **AGRIS Solar Co-op** — Named as part of the cooperative aggregation examples in the energy scan
- **AGRIS Solar Co-operative** — Farmer solar co-op (1,000+ farmers, 20 Solar Gardens) spun out of AGRIS Co-operative, managed with GECO by Red Jar Energy Partners · *geo: "Chatham-Kent / Southwestern Ontario (Canada)"*
- **Ahold Delhaize USA** — One of only three grocery chains publicly committed to zero food waste by 2025 · *geo: "US"*
- **Alter Coop** — Park Slope-wave member-work supermarket named in the nearest-neighbour inventory · *geo: "Luxembourg"*
- **Apple Street Market** — Hybrid consumer/worker co-op; participatory-grocery example · *geo: "Cincinnati"*
- **Arctic Co-operatives Limited** — Supports 30+ independent member-owned co-ops owned by Inuit, Dene and Métis members; retail food stores central in most communities · [record](examples/records/arctic-cooperatives.md) · *geo: "northern Canada — 30+ independent member-owned multi-purpose co-ops across Nunavut, Northwest Territories, and Yukon"*
- **Bees Coop** — Member-work supermarket with a triple commitment (owner + worker + customer) · *geo: "Brussels"*
- **Bella Coola Co-op** — Small-town co-op grocery, primarily conventional foods · *geo: "Bella Coola, BC"*
- **Biobulkbende Rotterdam** — Food co-op running Co-op Cloud ('a server in one member's closet'); maintenance-thin case · *geo: "Rotterdam (Netherlands)"*
- **Biolíbere** — Smallest CSN member supermarket (~180 members) · *geo: "Spain (CSN network)"*
- **Bizz Coop** — Local food co-op (2020) formed via reprise collective · *geo: "Québec"*
- **Breizhicoop** — French member-work co-op named in the VertigO study; non-Canadian example · *geo: "France"*
- **Cagette.net** — Early participant in the Data Food Consortium
- **Calgary Co-op** — Co-op ownership of a conventional operation; supplies from Pattison after defection · *geo: "Calgary"*
- **Co-op Atlantic** — Defunct federation that once affiliated many Atlantic food co-ops; failure unexamined, a caution case · *geo: "Atlantic provinces (Canada)"*
- **Co-op Cloud** — Shared configuration commons for collectively-run self-hosting (standardized deployment recipes); Foodsoft has a recipe; includes the Co-op Cloud Federation
- **Co-operative Retailing System (CRS)** — Large Canadian consumer co-op system with standard board-governance structure · *geo: "Canada"*
- **Community Food Co-op (Bozeman)** — Named food co-op in the scan · *geo: "Bozeman"*
- **CORE-POS** — GPL-2.0 community-run POS for co-op groceries; the existing open artifact that could carry a northern co-op retail layer · [record](examples/records/core-pos.md) · *geo: "global; community-maintained point-of-sale for food co-ops and small grocery"*
- **CSN (Spanish cooperative supermarket network)** — Network of ~11 agroecological cooperative supermarkets in Spain; fixed-margin structural transparency and member work shifts · *geo: "Spain (Madrid context)"*
- **Daily Bread Co-operative** — UK food co-op named in the inventory · *geo: "Northampton and Cambridge, UK"*
- **Data Food Consortium (DFC Standard)** — Open data interoperability standard for short food supply chains; ontology, taxonomies, prototype, connector tool; v2.0.0 released Feb 2026 · *geo: "France (original project; implementations in Australia, Canada, France, UK)"*
- **Data Food Consortium (Open Standard)** — Shared data language/standard for short food supply chains
- **Democratic Tech Fund** — Fund whose case study found 50-60 food co-ops willing to co-fund maintained Foodsoft; proposes the Funding Circle model
- **Detroit People's Food Co-op** — Black-led, community-owned grocery cooperative; community-governed retail example · *geo: "Detroit"*
- **Dorchester Community Food Co-op** — Community food co-op in development; participatory-grocery example
- **Dublin Food Co-op** — European food co-op named in the inventory · *geo: "Dublin, Ireland"*
- **East End Food Co-op** — Community-focused store with local and fairly traded products · *geo: "Vancouver, BC"*
- **Essential Trading Co-op** — UK food co-op named in the inventory · *geo: "Bristol, UK"*
- **Federated Co-operatives Limited (FCL)** — Mass co-op grocery operating as conventional retail in the Canadian survey · *geo: "Western Canada (headquartered Saskatoon)"*
- **Federation of Southern Cooperatives** — Recipient of NCG food co-op solidarity funding
- **Fireweed Food Co-op** — Non-profit multi-stakeholder co-op (producer + supporter members); runs a Food Hub, the South Osborne Farmer's Market and an online storefront · *geo: "Winnipeg, Manitoba"*
- **Food Co-op Initiative** — Support organization providing free resources and consulting for starting retail food co-ops · *geo: "US"*
- **FoodCoopShop** — AGPL-3.0 producer-direct ordering platform for food co-ops/farm shops; single-developer open-core (maintainer sells installation/support) · [record](examples/records/foodcoopshop.md) · *geo: "DACH-centred (Austria, Germany, Switzerland, Italy), international software"*
- **FoodHub** — European food co-op named in the inventory · *geo: "Munich, Germany"*
- **Foodsharing.de / foodsharing e.V.** — Grocery-surfaced candidate record, verified and curated into examples · [record](examples/records/foodsharing.md) · *geo: "Germany (also active in Austria, Switzerland and other European countries)"*
- **Foodsoft** — Open-source web software for food co-operatives (ordering, accounting, member work-shift scheduling) · [record](examples/records/foodsoft.md) · *geo: "international (DACH, Netherlands, and beyond; dozens of co-ops)"*
- **Grocy** — Open-source household grocery management software (adjacent, home scale)
- **Harvest Food Hub (Harvest Algoma)** — Northern food logistics platform; licence unverified — verification lead · [record](examples/records/harvest-food-hub.md) · *geo: "Northern Ontario (Sault Ste. Marie / Algoma District origin); expanding toward food banks across Canada (CTV, 2025-11)"*
- **Infinity Foods Workers Co-operative** — UK worker co-op named in the inventory · *geo: "Brighton, UK"*
- **Karma Co-op** — Canada's oldest food co-ops (founded 1972); working-member model with a documented 'closed system' membership struggle · *geo: "Toronto, Ontario (Annex)"*
- **Kootenay Co-op** — Member-owned natural foods co-op; one of the larger successful Canadian community co-ops · *geo: "Nelson, BC"*
- **köllektiv eG** — European food co-op named in the inventory · *geo: "Cologne, Germany"*
- **La Cagette** — European food co-op named in the inventory · *geo: "Montpellier, France"*
- **La Fédération des coopératives d'alimentation du Québec (FCAQ)** — Federation of 65–70 food co-operatives under the Manger coop banner and Réseau COOP; largest organized community-grocery co-op network in Canada · *geo: "Québec and New Brunswick"*
- **La Louve** — Paris member-work supermarket (2017, ~5,000 members) stating transparency in purchasing, sales, management and administration · *geo: "Paris"*
- **La Osa** — CSN cooperative supermarket; three years to break even; source of the 150€/member/month viability threshold · *geo: "Madrid (opened Dec 2020)"*
- **Loblaw** — Grocery chain hosting Flashfood in 900+ stores; reports 21M+ pounds diverted (self-reported) · *geo: "Canada"*
- **Mandela Foods** — Worker-owned cooperative; participatory-grocery example · *geo: "Oakland"*
- **Mariposa Food Cooperative** — Food-justice-focused food co-op; participatory-grocery example · *geo: "Philadelphia"*
- **Metro (grocery chain)** — Chain in food-bank retail recovery partnerships
- **MILA** — Member-work supermarket describing La Louve's role-model function · *geo: "Vienna"*
- **Muskoka North Good Food Co-op** — Member-owned store with 1,700+ member-owners (single-sourced, unverified) · *geo: "Huntsville, ON"*
- **National Farm to School Network** — Recipient of NCG food co-op solidarity funding
- **NCG (National Co-operative Grocers / National Co+op Grocers)** — US food co-op federation (~169 member co-ops, 240+ stores, $2.8B sales) whose impact report frames the US sector and the participation gap · *geo: "US"*
- **Neighborhood Co-op** — Named food co-op in the scan
- **OCGC (One Community Grocery Co-op)** — Community-led grocery project named in the participatory-grocery scan
- **OFN Canada Québec federated-data portal project** — Collaborative project building a shared open-source web portal for food hubs and producers to federate data (OFN Canada partner) · *geo: "Québec"*
- **Open Food France** — Host of the Data Food Consortium's origin; used the D/D+8/D+16 decision model · *geo: "France"*
- **Open Food Network (OFN)** — International not-for-profit whose open-source platform for community food enterprises is the closest existing test of the grocery concept's federation layer · *geo: "20+ countries"*
- **Open Food Network Canada** — Incorporated not-for-profit running the open-source local-food marketplace; open-agricultural-technology page links OpenTEAM, D:Food/Web, GOAT and the Data Food Consortium Open Standard · [record](examples/records/open-food-network-canada.md) · *geo: "Canada; connected to the global Open Food Network community"*
- **OpenCourier** — Delivery platform cooperativism protocol (2026)
- **Ottawa Valley Food Co-operative (OVFC)** — Internet-native co-op (incorporated 2007 under Ontario's Co-operative Corporations Act) whose ordering system is a purchasing pipeline, not an information environment · *geo: "Ontario"*
- **Padlei Co-op** — Arctic Co-op member store that sold its retail store in 2022 after 50+ years · *geo: "Arviat"*
- **Panier Local** — Early participant in the Data Food Consortium
- **Park Slope Food Coop** — Member-work grocery co-op that inspired the Québec SCP model
- **Pattison Food Group** — Consolidated private supplier (owner of Save-On-Foods) that Calgary Co-op switched to in 2020
- **PCC Community Markets** — Food co-op whose 'grocery story' piece documents distribution co-ops · *geo: "Seattle"*
- **Platform Cooperative Development Kit** — Open toolkit on GitHub for building platform cooperatives
- **Platform Cooperativism Consortium** — Hub of the platform cooperativism movement (platform.coop); principles of broad ownership, democratic governance, co-design
- **Quadra Island Pantry** — Startup-stage food co-op in the Grocery Story development pipeline · *geo: "Quadra Island, BC"*
- **Réseau COOP** — Network banner under which FCAQ operates
- **Saskatoon Co-op** — Large urban member co-operative of the FCL system · *geo: "Saskatoon"*
- **SCP** — Québec 'supermarchés coopératifs et participatifs' — Park Slope/La Louve-inspired member-work grocery co-ops with documented participation tensions · *geo: "Québec"*
- **Sobeys / Empire** — Canadian grocery/pharmacy hit by 2022 ransomware (Black Basta suspected); pharmacies down 4 days · [record](examples/records/sobeys-ransomware-2022.md) · *geo: "Canada (national; ~1,500 stores — Sobeys, Safeway, IGA, Foodland, Farm Boy, Lawtons, Needs)"*
- **SuperCoop** — European member-work food co-op named in the inventory · *geo: "Berlin, Madrid, Bordeaux"*
- **SuperQuinquin** — European member-work food co-op named in the inventory · *geo: "Lille, France"*
- **The Food Assembly** — Early participant in the Data Food Consortium
- **The People's Supermarket (TPS)** — Community-interest-company supermarket (founded 2009) documented as the caution case: volunteering decayed under commercial pressure and social aims drifted · *geo: "London (Lamb's Conduit St)"*
- **The Urban Co-op** — European food co-op named in the inventory · *geo: "Limerick, Ireland"*
- **UBC Farm Seed** — Regional seed project with UBC anchor; coop governance unverified · [record](examples/records/ubc-farm-seed-catalogue.md) · *geo: "British Columbia, Canada"*
- **Unicorn Grocery** — Manchester workers' co-operative (76 members, flat management, equal pay) with public price-comparison boards against the big five and the 'Grow a Grocery' guide · *geo: "Manchester, UK"*
- **University of Alaska Fairbanks Cooperative Extension (UAF)** — Publisher of the acidified-foods compliance checklist with itemised costs · *geo: "Alaska, US"*
- **Village Market** — Community-governed grocery named in the scan · *geo: "Portland"*

### Seed & breeding commons — `seed commons` (29)

*Seed banks, open-source seed licensing, participatory breeding, gene banks and agrobiodiversity commons (closed vendors and treaty contrast cases included).*

- **African Centre for Biodiversity (ACB)** — African seed-sovereignty advocacy lead ('Seed Is Life' documentary 2025); its site timed out so it is carried as a lead only · *geo: "South Africa/Zimbabwe"*
- **Agrecol** — NGO behind OpenSourceSeeds' contractual seed licence (the enforceable-commons experiment) · *geo: "Germany"*
- **Agroecology Commons** — Non-profit (2020-) doing knowledge-sharing, farmer-to-farmer skillshares, and seed and tool libraries; named org but small-scale · *geo: "Bay Area"*
- **All Pueblo Grows** — Seed lending library (via Pueblo Extension) named in the seed-access discussion
- **Alliance of Bioversity International and CIAT** — Published the Nepali community seed bank account; R&D intermediary
- **Bioleft** — Participatory open-source seed commons that adds open data to the seed commons; deliberate bridge between open source and agroecology · [record](examples/records/bioleft.md) · *geo: "Argentina / Latin America"*
- **CCDABC** — National public institution anchoring Nepal's seed infrastructure · *geo: "Nepal"*
- **CIP** — Gene bank that repatriated 410 potato cultivars to the Potato Park
- **Clipper** — Closed industrial seed-cleaning vendor (counterpart)
- **Community Seed Banks Association of Nepal (CSBAN)** — Links Nepal's community seed banks; developed online catalogue and 'Our Seed' mobile app · [record](examples/records/community-seed-banks-nepal.md) · *geo: "Nepal"*
- **Crop Trust** — Partner in the Potato Park's in-situ genetic reserve (2017)
- **DESIS 2.0 — Digitally Enabled Seed Information System (Nepal)** — National digital seed information system; began as CIMMYT/USAID-supported, now under Nepal's Seed Quality Control Center · [record](examples/records/desis-nepal.md) · *geo: "Nepal; national seed-sector infrastructure across federal, provincial, and local institutions"*
- **LI-BIRD** — Research intermediary on community seed banks and farmers' rights · *geo: "Nepal"*
- **National Gene Bank (Nepal)** — National public institution for genetic resources · *geo: "Nepal"*
- **Navdanya** — Founder-led seed-sovereignty movement with community seed banks, Seed Satyagraha and biopiracy documentation; CSB counts contested (111/150+ claimed vs 54 per Wikipedia) · [record](examples/records/navdanya.md) · *geo: "India (network across 22 states) and Bhutan"*
- **Nepal Seed Quality Control Center** — Hosts DESIS 2.0 national seed catalogue/certification platform · *geo: "Nepal"*
- **Open Source Seed Initiative (OSSI)** — Seed pledge (550+ varieties) marrying an open-source idiom to seed sovereignty; uptake without enforcement · [record](examples/records/open-source-seed-initiative.md) · *geo: "global; seed breeders, farmers, and seed companies"*
- **OpenSourceSeeds / Open Source Seed Licence (OSSL)** — Contractual open seed licence extending obligations to derivatives and compatible with seed law; the enforceable counterpart to OSSI's pledge, with no enforcement case located · [record](examples/records/opensourceseeds-ossl.md) · *geo: "Germany / Europe (licence usable internationally)"*
- **Potato Park** — Indigenous-governed biocultural commons of ~600 native potato varieties under a collective community council, with CIP repatriation and a Crop Trust in-situ genetic reserve · [record](examples/records/potato-park.md) · *geo: "Cusco, Peru (altitude 3,400-4,600m); five Quechua communities"*
- **Real Seeds (DIY Air-Column Seed Cleaner)** — Open seed-cleaning design (public design commons) adopted in seed libraries and ecological breeding · [record](examples/records/real-seeds-cleaner.md)
- **SEARICE** — Farmer-led regional seed-systems NGO (CONSERVE with 1,100+ rice varieties, participatory plant breeding, farmer field schools, anti-UPOV advocacy) · [record](examples/records/searice.md) · *geo: "Southeast Asia (Philippines-based; regional programmes)"*
- **Seeds for Resilience** — Project behind community-seed-bank standard-setting documentation (with LI-BIRD)
- **Shiloh Maples** — Anishinaabe seedkeeper quoted on seeds as relatives
- **Shivagunj CSB** — Community seed bank doing seed production, local-variety conservation and income generation · *geo: "Nepal"*
- **Sovereign Seeds** — Project whose caution against translating Indigenous customary seed governance into open-licensing terms is cited in the corpus · [record](examples/records/sovereign-seeds.md) · *geo: "Canada; national Indigenous-led initiative"*
- **UBC Farm Seed** — Regional seed project with UBC anchor; coop governance unverified · [record](examples/records/ubc-farm-seed-catalogue.md) · *geo: "British Columbia, Canada"*
- **UBC Seed Hub** — University seed hub identified in seed-sovereignty research; high-sensitivity governance lead · *geo: "British Columbia (Canada)"*
- **UPOV** — PVP regime named as the counterweight the seed-commons mechanisms (SEARICE's sui generis advocacy, community seed banks) respond to
- **Vandana Shiva** — founder of Navdanya (from 1991) · *geo: "India (network across 22 states) and Bhutan"*

### Agricultural data governance & infrastructure — `ag-data` (41)

*Data intermediation, consent architectures, data co-ops, farm-data platforms and data-space programmes (proprietary platforms kept as contrast cases).*

- **Aaron Ault** — OADA project lead (Purdue); founding voice on farmer data ownership
- **Ag Data Commons** — USDA NAL public ag data curation platform · [record](examples/records/ag-data-commons.md) · *geo: "United States; USDA-funded or USDA-co-funded research, with public reuse potential"*
- **Agdatahub** — Ag data consent intermediation company (DGA-registered intermediary); API-Agro standard · [record](examples/records/agdatahub.md) · *geo: "France / European Union"*
- **AgriStack / Digital Agriculture Mission** — India's ag DPI: farmer registries, geo-referenced village maps, crop sown registry, consent-manager architecture (₹2,817 crore budget) · [record](examples/records/agristack.md) · *geo: "India (national)"*
- **API-Agro standard** — Ag data standard associated with Agdatahub
- **Australian Farm Data Code** — Voluntary farm data code (farmer-org instrument) · *geo: "Australia"*
- **Bill Oemichen** — Named participant in the ag-data governance symposium
- **CEADS / AgriDataSpace / FSDN** — EU data-space standards and federated governance for ag data · [record](examples/records/ceads.md) · *geo: "European Union (supranational)"*
- **Digital Green** — Nonprofit operating FarmStack
- **EMILI Canada** — Named in Canadian ag-data governance discussions; needs direct verification
- **EU DGA** — EU data governance act framework under which Agdatahub is a registered intermediary · *geo: "EU"*
- **Farmers Business Network (FBN)** — Venture-backed data platform marketed as farmer empowerment; 'farmer-owned' framing contested · [record](examples/records/fbn.md) · *geo: "United States (national; expanding internationally)"*
- **FarmStack** — Apache-2.0 data-exchange Digital Public Good run by Digital Green · [record](examples/records/farmstack.md) · *geo: "global (origin US nonprofit; deployments including Kenya and Ethiopia)"*
- **FieldView** — Closed farm data platform (counterpart)
- **Government of India** — State operator of AgriStack; asserts consent-based design · *geo: "India"*
- **Grower Information Services Cooperative (GISC / GiSC)** — Data cooperative lead for follow-up pass (per Policy Review glossary) · [record](examples/records/gisc.md)
- **HORIZON-OpenAgri** — EU open-source catalogue listing Purdue's OpenATK Field Work App (OADA-adjacent demo) · *geo: "EU"*
- **i-Open Group** — Consortium partner in the autonomous-agriculture data platform
- **ICAR Animal Data Exchange (ADE) standard** — Animal Data Exchange (ADE) JSON standard for livestock/milk-recording data (Apache-2.0, ADE Working Group) · [record](examples/records/icar-ade.md) · *geo: "international (10+ countries implementing; Canadian governance participation)"*
- **JoinData** — Ag-data organization with a Development Gateway/USAID case study in the initial source set · [record](examples/records/joindata.md) · *geo: "Netherlands"*
- **LetsGrow.com** — Vendor greenhouse data platform (closed data counterpart)
- **MAFF** — Japan's agriculture ministry operating WAGRI · *geo: "Japan"*
- **NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative)** — US farmers' data is stored, shared, and monetised through vendor platforms that often claim perpetual rights. · [record](examples/records/napdc-ag-data-coalition.md) · *geo: "United States (national)"*
- **NARO** — Japanese ag research agency operating WAGRI with MAFF · *geo: "Japan"*
- **National Agricultural Scientific Data Infrastructure (China)** — China operates a national system of scientific data centers to share research data as public infrastructure. · [record](examples/records/china-ag-data-infrastructure.md) · *geo: "China (national)"*
- **National Farmers' Federation (NFF)** — Farmer federation running the Australian Farm Data Code · *geo: "Australia"*
- **Open Ag Data Alliance (OADA)** — Open interoperability/farmer data access standards alliance; active reference-server core maintained by Purdue OATS Center, adoption layer absent · [record](examples/records/oada.md) · *geo: "international; precision agriculture and agricultural data exchange"*
- **Open Agroecology Lab (REGOSH)** — Open-source digital infrastructure for agroecology (farmOS + SurveyStack + open sensing) with co-designed data governance; Shuttleworth-funded; activity documented 2018-2023, post-2023 unverified · [record](examples/records/regosh-open-agroecology-lab.md) · *geo: "Argentina (Mendoza, Buenos Aires, Córdoba and other provinces); networked with GOSH and OpenTEAM internationally"*
- **Open Food Facts** — Crowdsourced open food data commons proving data-level openness works at scale, bounded by the package · *geo: "Founded in France; global database (products from 150 countries)"*
- **OpenATK Field Work App** — Purdue OADA-adjacent integration demo listed in the EU catalogue
- **Purdue OATS Center (OATS)** — Purdue center maintaining OADA reference server and hosting ISOBlue
- **Quantotech** — Consortium partner in the autonomous-agriculture data platform
- **Rethink Aadhaar** — Critical counterweight on AgriStack consent (2022 legal review)
- **SAOS (Scottish Agricultural Organisation Society)** — Farm data is siloed, locked into vendor platforms, and its value accrues outside farming. · [record](examples/records/saos.md) · *geo: "Scotland / UK; cooperative federation of ~56 primary agricultural co-ops (est. 1905; ~600 primary co-op directors; group turnover >£4.5M, 31 staff, McMahon 2022)"*
- **Simon Fraser University** — Consortium partner in the autonomous-agriculture data platform
- **Standard Data Platform for Autonomous Agriculture** — Farm data commons / digital twin project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, Quantotech; open-source status unresolved · [record](examples/records/standard-data-platform-autonomous-agriculture.md) · *geo: "Canada; partners and grower validation in British Columbia, Alberta, and Saskatchewan"*
- **Terramera** — Consortium partner in the autonomous-agriculture data platform
- **USDA NAL** — US National Agricultural Library operating Ag Data Commons
- **Verge Ag** — Lead of the Standard Data Platform for Autonomous Agriculture consortium
- **WAGRI (Agricultural Data Collaboration Platform)** — Japan's WAGRI is a state-built agricultural data platform that links data and services through APIs so that farmers, machinery makers, ICT vendors, and service companies can collaborate on data-driven agriculture. · [record](examples/records/wagri.md) · *geo: "Japan (national)"*
- **WinField United** — 2015 OADA collaboration announcement with no located conformance outcome; built own proprietary solution

### Standards & interoperability — `standards` (46)

*Open standards, ontologies, protocols, APIs and certification standards across the food system (GS1/EPCIS, ISOBUS, DFC, FLW, GDST and their implementations).*

- **AEF / ISOBUS** — Vendor-coordinated standards body for the ISOBUS ecosystem
- **Agdatahub** — Ag data consent intermediation company (DGA-registered intermediary); API-Agro standard · [record](examples/records/agdatahub.md) · *geo: "France / European Union"*
- **AgGateway** — Ag interoperability standards body; grain Traceability API (candidate record, licence NOASSERTION) · [record](examples/records/aggateway-traceability-api.md) · *geo: "United States / international standards ecosystem"*
- **AgIsoStack++** — Open ISOBUS standard implementation; active community, deployment unverified, no identified backer · [record](examples/records/agisostack.md) · *geo: "global; community-maintained open GitHub organisation"*
- **AgriStack / Digital Agriculture Mission** — India's ag DPI: farmer registries, geo-referenced village maps, crop sown registry, consent-manager architecture (₹2,817 crore budget) · [record](examples/records/agristack.md) · *geo: "India (national)"*
- **AgroAPI** — Latin American public ag data API (paper-published lead)
- **API-Agro standard** — Ag data standard associated with Agdatahub
- **Beckn protocol** — Open interoperability protocol compared with the DFC Standard
- **Can-Trace** — Historical industry-led (GS1 Canada) effort to develop national traceability standards · *geo: "Canada"*
- **CEADS / AgriDataSpace / FSDN** — EU data-space standards and federated governance for ag data · [record](examples/records/ceads.md) · *geo: "European Union (supranational)"*
- **CGF (Consumer Goods Forum)** — FLW Standard partner; its members committed to 50% food-waste reduction by 2025
- **Co-Develop** — Partner in the DPI-for-agriculture report
- **Co-op Cloud** — Shared configuration commons for collectively-run self-hosting (standardized deployment recipes); Foodsoft has a recipe; includes the Co-op Cloud Federation
- **Common Greenhouse Ontology (CGO)** — Apache-2.0 open data standard for greenhouses with zero vendor adoption; no waste-heat/energy-interface extension exists · [record](examples/records/common-greenhouse-ontology.md) · *geo: "Netherlands / EU (TNO-led); research and standards community"*
- **CSA Group** — Standards body that published CSA K100:26, the first national food loss and waste terminology/measurement standard (April 2026) · *geo: "Canada"*
- **CSA K100:26** — First-of-its-kind national food loss and waste terminology and measurement standard, published April 2026; aligns with and Canada-localizes the FLW Protocol · [record](examples/records/csa-k100-26.md) · *geo: "Canada (National Standard of Canada — Domestic)"*
- **CSA T201 — Cybersecurity Guidance for the Food Value Chain** — Canada's food system is undergoing rapid digitalization (precision ag, cloud-connected machinery, automated processing, online retail) while CSA Group's research programme with the Community Safety Knowledge Alliance (CSKA) found the food value chain **largely not implementing cybersecurity standards** — a critical-infrastructure sector with consumer-scale cyber maturity. · [record](examples/records/csa-t201-food-cybersecurity.md) · *geo: "Canada — National Standard of Canada (domestic); scoped to the whole agri-food value chain"*
- **Data Food Consortium (DFC Standard)** — Open data interoperability standard for short food supply chains; ontology, taxonomies, prototype, connector tool; v2.0.0 released Feb 2026 · *geo: "France (original project; implementations in Australia, Canada, France, UK)"*
- **Data Food Consortium (Open Standard)** — Shared data language/standard for short food supply chains
- **EPCIS** — GS1 royalty-free traceability event standard named in the open-records layer
- **FLW Standard (Food Loss and Waste Accounting and Reporting Standard)** — Waste measurement and reporting standard proving waste infrastructure exists
- **FoodOn** — Harmonized food ontology for global food interoperability; the shared machine-readable vocabulary layer
- **FUSIONS (EU FUSIONS)** — FLW Standard partner; its Food Waste Framework is synchronized with the standard · *geo: "EU"*
- **Gates Foundation** — Financed Haki des Femmes; co-funded DPI-for-agriculture and Farmer-Centric Data Governance reports
- **GDST** — Seafood traceability standard named in the traceability plumbing
- **GS1** — Standards body behind barcodes and the Global Traceability Standard — the dominant interoperability grammar for food traceability
- **GS1 Canada** — Industry body behind the Can-Trace standards effort · *geo: "Canada"*
- **ICAR Animal Data Exchange (ADE) standard** — Animal Data Exchange (ADE) JSON standard for livestock/milk-recording data (Apache-2.0, ADE Working Group) · [record](examples/records/icar-ade.md) · *geo: "international (10+ countries implementing; Canadian governance participation)"*
- **Leaf Agriculture** — Commercial API aggregator that captured the farm-data interoperability need
- **OCAP / FNIGC** — First Nations Information Governance Centre; OCAP (Ownership, Control, Access, Possession) data-sovereignty standard, not an open licence
- **OFN Canada** — Canadian instance of the Open Food Network; source of the Open Source / Open Standards / Data Sovereignty framing and the access-vs-control distinction · *geo: "Canada (launched 2017, most active in Ontario)"*
- **ONDC / Beckn** — Open commerce protocol and specifications, non-profit network operator · [record](examples/records/ondc.md) · *geo: "India (national); protocol usable elsewhere"*
- **Open Ag Data Alliance (OADA)** — Open interoperability/farmer data access standards alliance; active reference-server core maintained by Purdue OATS Center, adoption layer absent · [record](examples/records/oada.md) · *geo: "international; precision agriculture and agricultural data exchange"*
- **Open Food Network Canada** — Incorporated not-for-profit running the open-source local-food marketplace; open-agricultural-technology page links OpenTEAM, D:Food/Web, GOAT and the Data Food Consortium Open Standard · [record](examples/records/open-food-network-canada.md) · *geo: "Canada; connected to the global Open Food Network community"*
- **OpenEPCIS (epcis-repository-ce)** — Event-based supply-chain traceability at processing scale: FSMA 204 KDE/CTE records, meat and cattle traceability frameworks, and the coming EU digital product passport all need an EPCIS event repository. · [record](examples/records/openepcis.md) · *geo: "international (maintainer in Germany; food & beverage a target industry)"*
- **OriginTrail** — Open-source blockchain data protocol enabling GS1-standards-based interoperability between blockchains and legacy systems
- **OS Farm** — State-funded (France 2030 consortium) '100% open source' farm interoperability standard with commercial franchise/subscription deployment · [record](examples/records/osfarm.md) · *geo: "France / EU; national interoperability consortium (France 2030)"*
- **rfisheries / openfisheries.org** — Global landings API + R client (MIT client)
- **SCC (Standards Council of Canada)** — Notice of intent on the K100:26 food-loss-and-waste standard · *geo: "Canada"*
- **Sistema.bio** — B Corp with >50,000 digesters; proprietary IoT smart meters (with Inclusive Energy), PAYG lockout, Gold Standard credits · *geo: "Mexico-founded (deployments Kenya, India, Latin America)"*
- **Standard Data Platform for Autonomous Agriculture** — Farm data commons / digital twin project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, Quantotech; open-source status unresolved · [record](examples/records/standard-data-platform-autonomous-agriculture.md) · *geo: "Canada; partners and grower validation in British Columbia, Alberta, and Saskatchewan"*
- **UN/CEFACT** — UN standards body for animal traceability standards
- **UNEP** — Co-launcher of the FLW Standard (2016)
- **Upcycled Food Association** — Created the Upcycled Certified Standard, now administered by Where Food Comes From · [record](examples/records/upcycled-certified.md) · *geo: "US-origin, global programme; WFCF is a NASDAQ-listed verification company"*
- **WBCSD** — Co-launcher of the FLW Standard
- **WRI** — Secretariat of the FLW Standard; hosts the Food Waste Atlas

### Open hardware & sensing — `open-hardware` (53)

*Open-source hardware designs, instruments, sensors and OS hardware communities (OSHWA, GOSH, FAST instrumentation, maker hardware).*

- **ADO tank-aquaculture platform** — End-to-end open IoT stack for tank aquaculture (HardwareX 2022); lead
- **AfricaOSH** — African open-science-hardware community infrastructure (summits, GitHub org) · [record](examples/records/africaosh.md) · *geo: "Africa (pan-African community); GOSH-affiliated"*
- **AgOpenGPS** — Open RTK autosteer project whose ~€1,660-2,190 build vs $10,000+ commercial is the corpus's ~78% open-hardware cost-cut precedent; tree-row integration named as a gap · *geo: "Canada"*
- **AquaPi** — ESP32/ESPHome aquarium monitoring with Atlas Scientific probes (Apache-2.0)
- **ArduSimple** — Commercial GNSS hardware inside an open ecosystem
- **Babai smart irrigation pilot** — IWMI pilot: sensors, dashboards, water-user associations, real-time flow/soil data · *geo: "Nepal"*
- **Berin (Mini-Pivot)** — Berin Mini-Pivot irrigation vendor; closed hardware · *geo: "Zimbabwe"*
- **CS&S** — Funder of REGOSH (alongside Shuttleworth)
- **Decagon / METER Group** — Closed soil hydrology telemetry vendor (counterpart)
- **Dr. Joshua M. Pearce** — Leads the FAST Research Group and WIRED field station; open sustainability hardware research
- **FAST DRAM Distributed Manufacturing** — FAST Research Group open-hardware record
- **FAST Research Group (uwo-fast)** — Western University open-hardware research group; org-level licensing policy (LICENSING.md) and multiple records · *geo: "Canada"*
- **Global Village Construction Set (GVCS)** — Open Source Ecology's machine design set (LifeTrac tractor, hammer mill etc.)
- **Gold Standard** — Carbon-credit standard paired with Sistema.bio meters as the new enclosure of biological byproducts
- **GOSH** — Open science hardware movement (openhardware.science); Latin America projects documented (Arancio 2023) · *geo: "Global"*
- **Greg Austic** — Our Sci LLC, originators of PhotosynQ / MultispeQ; co-developer of the reflectometer · *geo: "United States (Ann Arbor, MI / Bionutrient Institute) / international agroecology, soil health, and regenerative crop research networks"*
- **Inclusive Energy** — Co-developer of Sistema.bio's proprietary smart biogas meters
- **KickStart (MoneyMaker)** — Vendor of MoneyMaker low-cost irrigation pumps; closed hardware
- **Kon-Tiki kiln** — Flame-curtain conical biochar kiln published open source; the most mature open-hardware case in the compost/soil cell, spread via open technology transfer · [record](examples/records/kon-tiki-kiln.md) · *geo: "Switzerland (designed 2014)"*
- **Libre Solar** — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0 · [record](examples/records/libre-solar.md) · *geo: "Germany-origin (Libre Solar Technologies GmbH, Hamburg); supported by the EnAccess Foundation for off-grid rural electrification and solar DC microgrids in the Global South and internationally"*
- **Matt Reimer** — grain farmer; built and documented an autonomous grain-cart system using open hardware and code · [record](examples/records/matt-reimer.md) · *geo: "Manitoba, Canada / open hardware and agricultural robotics communities"*
- **Megni LLP** — Bootstrapped open-hardware business behind OpenEnergyMonitor (Glyn Hudson & Trystan Lea); kit-sales funded · *geo: "Wales, UK"*
- **MIT OpenAg (Open Agriculture Initiative)** — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited · [record](examples/records/openag-food-computer.md)
- **Moocall** — Proprietary livestock sensor vendor (closed counterpart)
- **New American Stone Mills** — De facto standard craft stone-mill builder in North America; proprietary closed hardware (counter-example) · *geo: "Vermont (US)"*
- **Nick Weinstock / BOTL Farm** — Farm operator publishing open-source farm projects (Arduino chicken-coop controller, portable shelter designs, farm SOPs, farmOS use); international lead · *geo: "Canada not established"*
- **Open Agroecology Lab (REGOSH)** — Open-source digital infrastructure for agroecology (farmOS + SurveyStack + open sensing) with co-designed data governance; Shuttleworth-funded; activity documented 2018-2023, post-2023 unverified · [record](examples/records/regosh-open-agroecology-lab.md) · *geo: "Argentina (Mendoza, Buenos Aires, Córdoba and other provinces); networked with GOSH and OpenTEAM internationally"*
- **Open Bio Economy Lab / BIO-SPEC / Innocell / BioSamplr** — Academic open bioreactor hardware ecosystem, lab scale, per-paper licences
- **Open Source Ball Mill (FAST)** — AC/PV-powered ball mill, complete CAD, HardwareX-published, CC-BY-SA-4.0 (non-food-grade) · *geo: "Canada"*
- **Open Source Ecology (OSE)** — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific · [record](examples/records/open-source-ecology.md) · *geo: "United States (Factor e Farm, Maysville, Missouri); independent OSE Germany chapter"*
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed
- **Open-Source Customizable Thermal Energy Storage Module** — OSHWA CA000071, GPL-3.0-only
- **Open-Source Vertical Swinging Wood-Based Solar PV Racking Systems** — OSHWA CA000025, CERN-OHL-S-2.0 (Vandewetering, Hayibo & Pearce)
- **OpenAgriS3D** — FAST Research Group open-hardware record · [record](examples/records/openagris3d.md) · *geo: "London, Ontario, Canada (Western University FAST Research Group); parametric design source published globally on GitHub"*
- **OpenCTD** — Open oceanography CTD (hardware + firmware + build manual, MIT); 40+ units built via workshops · [record](examples/records/openctd.md) · *geo: "international (community workshops US + BVI; design usable anywhere)"*
- **OpenEMS (Open Source Energy Management System)** — Farm microgrids and rural energy installations increasingly combine solar PV inverters, battery energy storage systems (BESS), combined heat and power (CHP) biogas gensets, heat pumps, cold-storage compressors, and EV/machinery chargers. · [record](examples/records/openems.md) · *geo: "Germany-origin (OpenEMS Association e.V., Deggendorf); deployed internationally across commercial, industrial, agricultural, and residential microgrids"*
- **OpenEnergyMonitor** — Open energy-monitoring hardware/software ecosystem (emonPi3, emonTx, emonTH); flagship repo has no SPDX licence — active project, incomplete licence formality · [record](examples/records/openenergymonitor.md) · *geo: "Wales, UK (Megni LLP, Brynrefail, Gwynedd); global deployment across residential, off-grid, research, and agricultural/CEA energy and heat-pump monitoring"*
- **OpenFlexure Microscope (Agrifood Soil & Pathology)** — Assessing biological soil health (nematodes, mycorrhizae, fungal-to-bacterial ratios) and screening for plant pathogens (spores, foliar blights, waterborne contaminants) requires laboratory-grade microscopy with precision sample positioning. · [record](examples/records/openflexure-microscope.md) · *geo: "International (UK, Tanzania, Panama, Latin America / Gathering for Open Science Hardware - GOSH & REGOSH network)"*
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run. · [record](examples/records/openreactor-bioreactor.md) · *geo: "London, Ontario, Canada (Western University FAST Research Group); software published openly, hardware design source on GitHub"*
- **OpenSprinkler** — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud · [record](examples/records/opensprinkler.md) · *geo: "United States (Amherst, MA) / global maker, urban agriculture, landscaping, greenhouse, and smallholder irrigation community"*
- **OSHWA** — Open-source hardware certification body; none of the compost/vermi/biochar hardware in the cell carries its certification
- **Our Sci (our-sci)** — Open-hardware science group; GitLab hosts the reflectometer
- **Our-Sci Reflectometer** — Handheld open-hardware reflectometer (GPL-3.0) for soil organic carbon and crop nutrient density · [record](examples/records/our-sci-reflectometer.md) · *geo: "United States (Ann Arbor, MI / Bionutrient Institute) / international agroecology, soil health, and regenerative crop research networks"*
- **Pioreactor** — Open-source Raspberry Pi bioreactor platform (MIT software, published hardware); only Canadian open fermentation artifact · [record](examples/records/pioreactor.md) · *geo: "Toronto, Ontario, Canada; international community (forum, third-party research builds); lab/bench scale"*
- **POSCAS (Parametric Open-Source Cold-Frame Agrivoltaic Systems)** — OSHWA CA000008, CERN-OHL-P-2.0 hardware + CC BY 4.0 docs
- **Smart-Worm-Habitat (danielneil)** — Continuous-flow worm bin design with sensors (GPL-3.0); concept-stage, no built units · [record](examples/records/smart-worm-habitat.md) · *geo: "Hobby / home-scale vermicomposting; individual developer (danielneil); global via GitHub"*
- **SunCulture** — Solar irrigation vendor; closed hardware
- **Think Oggún (Oggún tractor)** — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware · [record](examples/records/oggun.md) · *geo: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"*
- **Western University FAST Lab / WIRED (uwo-fast)** — University lab whose OSHWA-certified open agrivoltaic/thermal hardware and tool library records were curated (five records)
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting systems carry high capital premiums that raise levelized cost of electricity (LCOE) for farmers. · [record](examples/records/fast-lab-agrivoltaics.md) · *geo: "London, Ontario, Canada (Western University); design commons published globally via Appropedia and Open Science Framework (OSF)"*
- **Western University FAST Lab open scientific instrumentation (OSSEI)** — Scientific instruments — analytical balances, turbidity meters, magnetic stirrer hotplates, gas/environmental monitors — are priced for funded laboratories, not for under-resourced research, teaching, field water-quality work, or small operations. · [record](examples/records/fast-ossei-instrumentation.md) · *geo: "London, Ontario, Canada (Western University FAST Research Group); designs published globally, some with independent use"*
- **zappityzap (GitHub handle)** — individual developer of the compost sensor · *geo: "Hobby / home-scale compost monitoring; individual developer (zappityzap); global via GitHub"*
- **zappityzap/compost-sensor** — Hobby Arduino+LoRa compost monitoring sensor (MIT, active 2024) · [record](examples/records/compost-sensor.md) · *geo: "Hobby / home-scale compost monitoring; individual developer (zappityzap); global via GitHub"*

### Robotics, drones & farm machinery — `robotics-machines` (29)

*Farm robotics, autonomous vehicles, drones, milking machines, open machinery designs and telematics (manufacturer contrast cases included).*

- **AEF / ISOBUS** — Vendor-coordinated standards body for the ISOBUS ecosystem
- **AgIsoStack++** — Open ISOBUS standard implementation; active community, deployment unverified, no identified backer · [record](examples/records/agisostack.md) · *geo: "global; community-maintained open GitHub organisation"*
- **AgOpenGPS** — Open RTK autosteer project whose ~€1,660-2,190 build vs $10,000+ commercial is the corpus's ~78% open-hardware cost-cut precedent; tree-row integration named as a gap · *geo: "Canada"*
- **ArduPilot** — Open autopilot firmware (GPL-3.0); largest community case, not farmer-governed · [record](examples/records/ardupilot.md) · *geo: "global; community-developed open autopilot"*
- **BouMatic** — Fourth milking-robot vendor in the Ontario robot market
- **Brian Tischler** — grain farmer; originator of AgOpenGPS (open precision agriculture) · [record](examples/records/brian-tischler.md) · *geo: "Alberta, Canada / international open agricultural technology community"*
- **CleBer LLC** — Private maker of the Oggún tractor
- **DeLaval** — Milking-robot vendor (VMS, DelPro software); Peterborough training centre; its no-licence data-analysis repo is the corpus's not-open counter-example · *geo: "Sweden"*
- **FarmBot** — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume · [record](examples/records/farmbot.md) · *geo: "global; company based in San Luis Obispo, California, US"*
- **Flying Labs Network** — Localized drone/data/AI capacity network (WeRobotics nonprofit + independent local hubs); agriculture a named sector · [record](examples/records/flying-labs.md) · *geo: "close to 40 countries across Africa, Latin America, the Caribbean, and Asia-Pacific"*
- **GEA** — Milking-robot vendor (FarmLogic software); nine dealerships in Ontario · *geo: "Germany"*
- **Global Village Construction Set (GVCS)** — Open Source Ecology's machine design set (LifeTrac tractor, hammer mill etc.)
- **ISOBlue 2.0** — Open design pattern (data and control on the farmer's device by design) proven in tractors and transplanted to greenhouses · [record](examples/records/isoblue.md) · *geo: "United States (Purdue University origin; AFIN — Agricultural Informatics Lab; open hardware + software, replicated internationally)"*
- **Jake (surname unknown)** — AgOpenGPS contributor: farmer and machinist who learned PCB design and built an all-in-one auto-steering controller
- **L'Atelier Paysan** — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026 · [record](examples/records/latelier-paysan.md) · *geo: "France; originated in Rhône-Alpes, later Brittany; national reach through training tours and local "essaims" (local chapters)"*
- **Leijtenss/Milking-Robot** — Milking-robot repo with no licence (therefore not open), dormant since 2019
- **Lely** — Milking-robot vendor (Astronaut line) selling, servicing and holding the data layer; six Lely Centres in Ontario; certified pre-owned programme (used A4+ from $80,000 USD) · *geo: "Netherlands"*
- **LifeTrac** — OSE open tractor design
- **Matt Reimer** — grain farmer; built and documented an autonomous grain-cart system using open hardware and code · [record](examples/records/matt-reimer.md) · *geo: "Manitoba, Canada / open hardware and agricultural robotics communities"*
- **MikesMachines/MilkIt** — GPL-2.0 DIY milker/receiver documentation repo (last pushed 2024); a DIY milker, not a robot
- **Open Source Ecology (OSE)** — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific · [record](examples/records/open-source-ecology.md) · *geo: "United States (Factor e Farm, Maysville, Missouri); independent OSE Germany chapter"*
- **Open Source Ecology Germany** — Runs the 'Milker/AMOR' development-stage open milking-robot wiki project (lead, unverified) · *geo: "Germany"*
- **Open Source Range (OSR) GPS Collar** — Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization. · [record](examples/records/osr-gps-collar.md) · *geo: "United States / Global (rangeland ecology and extensive livestock pasture research)"*
- **ROMI — Robotics for Microfarms** — ROMI develops robotic tools to assist organic, diversified, human-scale vegetable farms with physically demanding or repetitive work such as weeding, crop monitoring, and plant phenotyping. · [record](examples/records/romi.md) · *geo: "Europe; field sites near Paris and Barcelona"*
- **Ronnie Baugh Tractors** — manufacturer of the Oggún tractor · *geo: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"*
- **Think Oggún (Oggún tractor)** — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware · [record](examples/records/oggun.md) · *geo: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"*
- **Verge Ag** — Lead of the Standard Data Platform for Autonomous Agriculture consortium
- **Wageningen University & Research (WUR)** — University publishing the Autonomous Greenhouse Challenge datasets (four DOI-published editions); Silke Hemming's greenhouse-horticulture group named as contact · *geo: "Netherlands (Wageningen in name; datasets described as Dutch)"*
- **WeRobotics** — Nonprofit operating the Flying Labs Network (38 labs end 2025, self-reported)

### Controlled-environment agriculture — `cea` (27)

*Greenhouses, vertical/indoor farming, grow-light and climate-control technology, and the northern community-greenhouse examples.*

- **Arviat Wellness Centre greenhouse** — Community greenhouse operating since 2013 (grow boxes then greenhouse) · *geo: "Arviat (Nunavut, Canada)"*
- **Autonomous Greenhouse Challenge** — WUR greenhouse competition whose DOI-published grow-and-climate timeseries datasets are the open research-data precedent · [record](examples/records/wageningen-agc-datasets.md) · *geo: "Netherlands (Wageningen University & Research, Greenhouse Horticulture Business Unit, Bleiswijk) + international competition teams"*
- **Common Greenhouse Ontology (CGO)** — Apache-2.0 open data standard for greenhouses with zero vendor adoption; no waste-heat/energy-interface extension exists · [record](examples/records/common-greenhouse-ontology.md) · *geo: "Netherlands / EU (TNO-led); research and standards community"*
- **Foothill Greenhouse** — Greenhouse with 3.2 MW on-site CHP plus an approved 1.2 MW CHP (2023) serving as a grid asset
- **Greenport Aalsmeer** — Horticulture-cluster organization party to the Uithoorn heat-network agreement · *geo: "Netherlands (Aalsmeer in name)"*
- **Growing North** — Community organization behind the 42-ft geodesic 'Green Igloo' dome ($164K in 2015; >$250K raised by 2016): solar-thermal design holding 30°C above outside, hydroponic towers (~2,000 plants), seven months on solar gain · *geo: "Naujaat (Nunavut, Canada)"*
- **Helsinki Hybrid** — Published design concept: a 30-60 MW immersion-cooled data center wrapped in a vertical farm and greenhouse, up to 63 MW recovered · *geo: "Helsinki (in name)"*
- **Inuvik Community Greenhouse** — 1999 hockey-arena-conversion community greenhouse running cost-recovery since 1999 (174 plots at $50/year plus a commercial second floor whose sales offset costs) · *geo: "Inuvik (NWT, Canada)"*
- **Iqaluit Community Greenhouse** — 1,000 ft² community greenhouse (opened 2007) with $6,000/yr operating costs covered by donations; switched to communal operation in 2014 · *geo: "Iqaluit (Nunavut, Canada)"*
- **Kuujjuaq cooperative greenhouse** — Community greenhouse operating 20+ years on Kativik Regional Government funding; instrumented its own building and built a rock-bed thermal store raising the night floor ~7°C · *geo: "Kuujjuaq (Nunavik, Canada)"*
- **LetsGrow.com** — Vendor greenhouse data platform (closed data counterpart)
- **Luleå greenhouse** — Operating data-center waste-heat greenhouse installation · *geo: "Luleå (stated)"*
- **Luleå University of Technology** — University heating greenhouses from data-center waste heat · *geo: "Sweden"*
- **MIT OpenAg (Open Agriculture Initiative)** — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited · [record](examples/records/openag-food-computer.md)
- **Mycodo** — GPL-3.0 open greenhouse/climate control software at maker scale (3,286 stars, actively maintained); peer-reviewed deployment in Bhutan; volunteer-maintained (fragility finding) · [record](examples/records/mycodo.md) · *geo: "United States (developer in Tennessee) / international maker, hobby, research, and small-commercial horticulture community"*
- **Q-Scale** — Company announcing a data center with adjacent residual-heat greenhouses (claims 2,800 t small fruit and 80,000 t tomatoes/yr, unverified) · *geo: "Lévis (Québec, Canada)"*
- **Resource Innovation Institute (RII)** — Institute behind the June 2025 Virginia data-center/greenhouse feasibility report (the case's strongest evidence) and the North Dakota Legendary Harvest study
- **Signify / Philips** — Horticultural lighting vendor (closed counterpart)
- **Silke Hemming** — Leads WUR greenhouse horticulture; named in the who-to-ask list
- **Siqiniq** — Heat re-uptake and storage greenhouse project (1999 onward): 300 ft² solar-heated gardens producing into the fall; peer-reviewed thermal-storage paper behind an Elsevier paywall · *geo: "Nunavik"*
- **Sollum** — Lighting-as-a-service vendor in the closed commercial CEA stack
- **SPUR Innovation** — Company announcing (June 2026) an 'ecological AI data centre' with a vertical farm stacked over the server farm; plan-stage, site changed from 25 to 14 acres · *geo: "Fergus / Woolwich, Ontario (Canada)"*
- **Tencent (Tianjin)** — Operating data-center waste-heat installation cited in the CEA energy case · *geo: "Tianjin (stated)"*
- **Toundra Greenhouse** — Greenhouse at the Resolute pulp mill using heat + CO₂ (8.5 ha of a planned 34 ha agrothermic industrial park) · *geo: "Canada"*
- **University of Guelph** — University hosting the Ontario Dairy Research Centre; also source of an unread Nunavut community-greenhouse thesis · *geo: "Ontario (Canada)"*
- **University of Notre Dame** — University heating greenhouses from data-center waste heat · *geo: "United States"*
- **Wageningen University & Research (WUR)** — University publishing the Autonomous Greenhouse Challenge datasets (four DOI-published editions); Silke Hemming's greenhouse-horticulture group named as contact · *geo: "Netherlands (Wageningen in name; datasets described as Dutch)"*

### Fisheries & aquaculture — `fisheries` (41)

*Fisheries and aquaculture data, models, traceability, community-supported fisheries and harvest governance.*

- **ADO tank-aquaculture platform** — End-to-end open IoT stack for tank aquaculture (HardwareX 2022); lead
- **AKVA** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **Andrew Thaler** — marine ecologist; community project lead, 'Oceanography for Everyone' · *geo: "international (community workshops US + BVI; design usable anywhere)"*
- **Arvo-Tec** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **Atlantic Integrated Commercial Fisheries Initiative** — Indigenous community fishery tenure program; Canada's most durable community-held fishery tenure · *geo: "Canada"*
- **DFO (Fisheries and Oceans Canada)** — Publishes AIS vessel-density rasters, licence statistics, fish-health datasets on the federal Open Government portal (OGL-Canada) · *geo: "Canada"*
- **DFO aquaculture and sea-lice open reporting (BC datasets)** — Open-net pen salmon farming is Canada's most contested food-production controversy, and its environmental performance (sea lice, fish health, transfers, antimicrobial use, mortality) is the evidence base of that debate. · [record](examples/records/dfo-aquaculture-reporting.md) · *geo: "Canada (federal; BC site-level, national aggregate)"*
- **DSG** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **EMODnet Human Activities** — EU portal of ship-density rasters and fishing/aquaculture layers (WMS/WFS); methodological template for DFO · *geo: "EU"*
- **EU Regulation 2023/2842** — Revised Fisheries Control System: mandatory electronic recording for all EU vessels (2024-2026) · *geo: "EU"*
- **FAO FishStat / SOFIA** — FAO global capture and aquaculture production databases (CC-BY-4.0)
- **FIMS (NOAA Fisheries Integrated Modeling System)** — NOAA's next-generation fisheries modeling system (with WHAM) · *geo: "US"*
- **FISH SAFE** — Vessel safety organization; could not be substantiated as harvester co-op (misattributed lead) · *geo: "BC (Canada)"*
- **FisheryProgress / FIP-DB** — FIP registry/progress tracking plus academic historical dataset (partially open)
- **FishSource** — Public fishery-status database (no open licence found)
- **GDST** — Seafood traceability standard named in the traceability plumbing
- **Global Fishing Watch** — Sector's flagship fishery-transparency initiative; flagship datasets CC-BY-NC-4.0 (the open-watchers paradox) · [record](examples/records/global-fishing-watch.md) · *geo: "global (independent US 501(c)(3) nonprofit; ~125+ employees)"*
- **GreenWave** — 3D ocean kelp/shellfish farming model distributed via open manuals and Farm Design Tool; no explicit open licence
- **Harmonized 2001-2023 sea-lice dataset** — 23-year curated dataset harmonizing DFO open data, operator sites and Salmon Coast Field Station's database (CC-BY)
- **Karuk Tribe** — Tribe practising eco-cultural restoration: salmon fisheries, ecological calendars, cultural burning, river stewardship
- **Local Catch Network** — North America-wide CSF network (2011, UMaine/NAMA, ~500 members); public core-values charter and Seafood Finder · *geo: "North America"*
- **Monitorfish (France)** — Fisheries monitoring and control: the state's Fisheries Monitoring Center must fuse VMS positions, declarative fishing activity (ERS/FLUX), regulated-area rules, fleet-segment risk, prior notifications, and inspection records into a real-time operational picture for enforcement. · [record](examples/records/monitorfish.md) · *geo: "France (national production system); open source internationally"*
- **NAMA (North American Marine Alliance)** — Co-founder of the Local Catch Network
- **NH Community Seafood** — US CSF movement exemplar
- **NOAA Fisheries** — US fisheries science agency; Stock Synthesis, OpenEM origin, EM automation white paper, Integrated Toolbox · *geo: "US"*
- **NOAA Fisheries Integrated Toolbox** — Curated catalogue/r-universe of open fisheries-science tools · *geo: "US"*
- **Ocean Disclosure Project** — Voluntary corporate seafood sourcing disclosure
- **Oceana / Oceana Canada** — NGO DNA-testing seafood-fraud reports (2018 Canadian dataset; 2024 meta-analysis)
- **Off the Hook CSF** — Atlantic Canada's first community-supported fishery (2010); fisher-owned cooperative selling shares direct · *geo: "Digby County, NS (Canada)"*
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed
- **OpenCTD** — Open oceanography CTD (hardware + firmware + build manual, MIT); 40+ units built via workshops · [record](examples/records/openctd.md) · *geo: "international (community workshops US + BVI; design usable anywhere)"*
- **OpenEM** — Open video analytics for fisheries electronic monitoring (MIT); grew from NOAA/DrivenData competition; dormant
- **Owner-Operator / Fleet Separation / PIIFCAF policy** — Federal structural fisheries policy barring processor licence ownership · *geo: "Canada"*
- **rfisheries / openfisheries.org** — Global landings API + R client (MIT client)
- **Salmon Coast Field Station** — Maintains a GitHub sea-lice database contributing to the harmonized dataset · *geo: "BC (Canada)"*
- **sdmTMB / pbs-assess** — Flagship Canadian open fisheries software (GPL-3); spatiotemporal index standardization built at DFO's Pacific Biological Station; active · [record](examples/records/sdmtmb.md) · *geo: "Canada"*
- **Stock Synthesis 3 (SS3)** — NOAA's flagship age-structured stock-assessment engine (CC0, very active) · [record](examples/records/ss3.md) · *geo: "international (NOAA origin; adopted by DFO Pacific in 2021)"*
- **ThisFish Tally** — Proprietary AI seafood traceability SaaS; de-facto Canadian commercial traceability stack (counter-example) · *geo: "Vancouver BC (Canada)"*
- **Tignish Fisheries Co-operative / Royal Star Foods** — Canada's first fishermen's co-op (incorporated 1925, co-op 1959); lobster purchasing/processing; model for the Antigonish Movement · *geo: "PEI (Canada)"*
- **United Fishermen of Alberta** — Lead that could not be substantiated as harvester co-op (misattribution)
- **WHAM** — Fisheries stock assessment model; licence unverified (GitHub NOASSERTION)

### Energy & biological byproducts — `energy-byproducts` (97)

*Biochar, biogas, digesters, solar drying and agrivoltaics, data-center heat reuse, composting systems and energy regulators/programmes.*

- **AdkAction** — Non-profit host of the Compost for Good design guide and operating manual · *geo: "NY Adirondack"*
- **AGRIS Co-operative** — Farmer-owned grain/input co-op that spun out AGRIS Solar · *geo: "Ontario (Canada)"*
- **AGRIS Solar Co-op** — Named as part of the cooperative aggregation examples in the energy scan
- **AGRIS Solar Co-operative** — Farmer solar co-op (1,000+ farmers, 20 Solar Gardens) spun out of AGRIS Co-operative, managed with GECO by Red Jar Energy Partners · *geo: "Chatham-Kent / Southwestern Ontario (Canada)"*
- **Agrivoltaics Canada** — Sector voice contesting Ontario's agrivoltaics ban
- **Ajahma** — Funder of the Farm Africa/NECPA solar dryer work
- **Alberta Utilities Commission (AUC)** — Rule 007 interim agrivoltaic information requirements (2024-2025) · *geo: "Alberta (Canada)"*
- **ANCA** — Regional organization that took Compost for Good under its wing in 2024 · *geo: "NY Adirondack"*
- **Bahnhof** — Data-center operator feeding heat into municipal district-heating networks · *geo: "Stockholm (Sweden)"*
- **bifacial_radiance** — BSD-3-Clause bifacial PV ray-tracing simulation · [record](examples/records/nrel-inspire-bifacial-radiance.md) · *geo: "United States (National Laboratory of the Rockies, formerly NREL / US DOE) and Belgium (University of Liège); used internationally"*
- **Big Ox Energy** — Bought the Linkenmeyer digester and switched feedstock to industrial waste (developer capture)
- **Canada Energy Regulator** — Regulator corroborating the uniform Nunavut residential electricity rate (62 ¢/kWh, Nov 2022) · *geo: "Canada"*
- **Canadian Biogas Association** — Industry association whose NRCan-funded 2026 report purged shut-down digesters (43 counted) · *geo: "Canada"*
- **Compost for Good** — Community-scale rotating drum composter with a free open design guide and operating manual (~$15K build vs $40-150K commercial; 35,000 lb/yr); moved under ANCA in 2024 with a HURD urine-compost facility added · [record](examples/records/compost-for-good.md) · *geo: "United States (New York, Adirondack region); community-scale, local reach"*
- **Coop Carbone** — Named as a partner alongside Coop Agri-Énergie Warwick in cooperative digester aggregation · *geo: "Montreal, QC (Canada)"*
- **Dr. Culhane** — Solar CITIES lead (T.H. Culhane)
- **Earth Matter** — Compost-education non-profit publishing an Open Source Curriculum of DIY compost activities at its Compost Learning Center · *geo: "NYC"*
- **EnAccess Foundation** — Philanthropic funder of Libre Solar for local manufacturing/repair
- **Ericsson** — Company feeding heat into Nordic municipal heat networks
- **Farm Africa / NECPA** — NGO publishing low-cost solar dryer open design document (licence unstated), distributed via trained artisans · [record](examples/records/farm-africa-necpa-solar-dryer.md) · *geo: "Lira, northern Uganda (North East Chilli Producers Association, NECPA); design intended for replication by local artisans"*
- **Fitec** — Vendor of the Self-Cleaning digester at ZooShare
- **Glyn Hudson** — OpenEnergyMonitor / Megni co-founder · *geo: "Wales, UK"*
- **goscommons/Biogas** — GPL-3.0 small-farm mesophilic biodigester documentation (hobby scale)
- **Green Mountain** — Data center whose effluent heat warms a land-based trout farm (operating installation) · *geo: "Norway"*
- **Greenport Aalsmeer** — Horticulture-cluster organization party to the Uithoorn heat-network agreement · *geo: "Netherlands (Aalsmeer in name)"*
- **Growing North** — Community organization behind the 42-ft geodesic 'Green Igloo' dome ($164K in 2015; >$250K raised by 2016): solar-thermal design holding 30°C above outside, hydroponic towers (~2,000 plants), seven months on solar gain · *geo: "Naujaat (Nunavut, Canada)"*
- **Hans-Peter Schmidt** — Kon-Tiki flame-curtain kiln co-designer (Ithaka Institut) · *geo: "Switzerland"*
- **HeatpumpMonitor.org** — Open heat-pump COP data feeds on Emoncms
- **HomeBiogas Ltd.** — Proprietary domestic/smallholder digester vendor (TASE: HMGS); patents to 2037 · *geo: "Israel"*
- **Huailai demonstration** — Data-center waste-heat demonstration with unverified one-year break-even · *geo: "Huailai (stated)"*
- **Hugh McLaughlin** — Designer of the TLUD/JRO open biochar stove designs in the IBI collection
- **IBI open-source biochar technologies (aggregator)** · [record](examples/records/ibi-open-source-biochar.md) · *geo: "Global aggregator; hosted by International Biochar Initiative; individual designs span US, Australia, and other regions"*
- **IESO (Ontario)** — Ontario grid operator whose LT2 prime-farmland solar ban is recorded in the energy scan · *geo: "Ontario"*
- **Inclusive Energy** — Co-developer of Sistema.bio's proprietary smart biogas meters
- **InSPIRE** — Agrivoltaics research program; CC0 InSPIRE Map with 367+ sites · *geo: "US"*
- **International Biochar Initiative (IBI)** — Industry/standards body hosting the 'Open Source Biochar Technologies' aggregator page (multiple kiln designs, 32-page pyrolysis plant guidelines); an open-access collection, not a single licenced commons
- **Ithaka Institut** — Swiss biochar research/non-profit; originator of the Kon-Tiki kiln and its open technology-transfer model; publishes the Biochar Journal · *geo: "Switzerland"*
- **Jay Smart** — Design lead of Compost for Good; posted the project's open design on permies.com
- **Kelpie Wilson** — Biochar designer of the Wilson TFOD and backyard open methods in the IBI collection
- **Kon-Tiki kiln** — Flame-curtain conical biochar kiln published open source; the most mature open-hardware case in the compost/soil cell, spread via open technology transfer · [record](examples/records/kon-tiki-kiln.md) · *geo: "Switzerland (designed 2014)"*
- **Liander** — Grid operator in the Uithoorn heat-network agreement
- **Libre Solar** — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0 · [record](examples/records/libre-solar.md) · *geo: "Germany-origin (Libre Solar Technologies GmbH, Hamburg); supported by the EnAccess Foundation for off-grid rural electrification and solar DC microgrids in the Global South and internationally"*
- **Luleå greenhouse** — Operating data-center waste-heat greenhouse installation · *geo: "Luleå (stated)"*
- **Luleå University of Technology** — University heating greenhouses from data-center waste heat · *geo: "Sweden"*
- **Makivvik / Kativik Environmental Advisory Committee** — Indigenous organization whose 2020 article documents the Siqiniq heat-storage greenhouse work · *geo: "Nunavik"*
- **Martin Jäger** — Libre Solar founder · *geo: "Germany"*
- **Megni LLP** — Bootstrapped open-hardware business behind OpenEnergyMonitor (Glyn Hudson & Trystan Lea); kit-sales funded · *geo: "Wales, UK"*
- **Municipality of Uithoorn** — Municipality party to the multi-party agreement for a data-center-fed district heat network serving De Kwakel–Kudelstaart greenhouse growers · *geo: "Netherlands"*
- **NLR (formerly NREL) / National Laboratory of the Rockies** — US DOE lab; InSPIRE agrivoltaics program and bifacial_radiance (BSD-3) · *geo: "US"*
- **NYSERDA** — State energy agency whose Greenhouse Energy Best Practices Guidebook supplies the kWh-per-unit benchmarking method the commons lacks · *geo: "New York (in name), US"*
- **Ontario Energy Board (OEB)** — Denied Enbridge Gas's Low-Carbon Voluntary Program ratepayer cost recovery (May 2025) · *geo: "Ontario (Canada)"*
- **Open Source Ball Mill (FAST)** — AC/PV-powered ball mill, complete CAD, HardwareX-published, CC-BY-SA-4.0 (non-food-grade) · *geo: "Canada"*
- **Open-Source Customizable Thermal Energy Storage Module** — OSHWA CA000071, GPL-3.0-only
- **Open-Source Vertical Swinging Wood-Based Solar PV Racking Systems** — OSHWA CA000025, CERN-OHL-S-2.0 (Vandewetering, Hayibo & Pearce)
- **OpenEMS (Open Source Energy Management System)** — Farm microgrids and rural energy installations increasingly combine solar PV inverters, battery energy storage systems (BESS), combined heat and power (CHP) biogas gensets, heat pumps, cold-storage compressors, and EV/machinery chargers. · [record](examples/records/openems.md) · *geo: "Germany-origin (OpenEMS Association e.V., Deggendorf); deployed internationally across commercial, industrial, agricultural, and residential microgrids"*
- **OpenEnergyMonitor** — Open energy-monitoring hardware/software ecosystem (emonPi3, emonTx, emonTH); flagship repo has no SPDX licence — active project, incomplete licence formality · [record](examples/records/openenergymonitor.md) · *geo: "Wales, UK (Megni LLP, Brynrefail, Gwynedd); global deployment across residential, off-grid, research, and agricultural/CEA energy and heat-pump monitoring"*
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run. · [record](examples/records/openreactor-bioreactor.md) · *geo: "London, Ontario, Canada (Western University FAST Research Group); software published openly, hardware design source on GitHub"*
- **PASE (Python Agrivoltaic Simulation Environment)** — MIT-licensed agrivoltaic 3D ray-tracing + crop growth simulation
- **Paul Taylor** — Kon-Tiki flame-curtain kiln co-designer (Ithaka Institut) · *geo: "Switzerland"*
- **POSCAS (Parametric Open-Source Cold-Frame Agrivoltaic Systems)** — OSHWA CA000008, CERN-OHL-P-2.0 hardware + CC BY 4.0 docs
- **Puro.earth** — Voluntary biochar carbon removal registry (capture pressure)
- **pvlib-python** — BSD-3-Clause solar modeling library underlying bifacial_radiance
- **PyADM1ODE** — MIT component-based agricultural biogas plant simulator from TH Köln
- **Q-Scale** — Company announcing a data center with adjacent residual-heat greenhouses (claims 2,800 t small fruit and 80,000 t tomatoes/yr, unverified) · *geo: "Lévis (Québec, Canada)"*
- **Qulliq Energy Corporation (QEC)** — Territorial utility whose posted rates (62.08 ¢/kWh commercial, 74.94 ¢/kWh residential, Oct 2023) are the case's price-verified energy anchor · *geo: "Nunavut"*
- **Red Jar Energy Partners** — Manages AGRIS Solar with GECO
- **RISE** — Research institute whose completed DC-Farming study (2020) examined year-round vegetable production beside data-center waste heat in a sub-Arctic climate · *geo: "Sweden (Luleå)"*
- **SAMA (Solar Alone Multi-objective Advisor) — FAST open microgrid sizing tool** — Designing a farm- or community-scale hybrid renewable microgrid (PV, battery, generator, grid-tie) requires techno-economic sizing — choosing component capacities that minimise lifetime cost under a site's load profile, weather, degradation and utility billing structure. · [record](examples/records/sama.md) · *geo: "London, Ontario, Canada (Western University FAST Research Group); developed for global use"*
- **Schmidt & Taylor** — Biochar Journal authors documenting the Kon-Tiki kiln design · *geo: "Designed in Switzerland (2014); open technology transfer to Nepal and other regions; global farmer reach"*
- **SDE++** — Grant scheme funding the Uithoorn data-center heat network · *geo: "Netherlands (context of the Uithoorn network)"*
- **Seacliff Energy** — Anaerobic-digester operator integrated with a 300,000 ft² organic greenhouse · *geo: "Leamington, Ontario (Canada)"*
- **Siqiniq** — Heat re-uptake and storage greenhouse project (1999 onward): 300 ft² solar-heated gardens producing into the fall; peer-reviewed thermal-storage paper behind an Elsevier paywall · *geo: "Nunavik"*
- **Sistema.bio** — B Corp with >50,000 digesters; proprietary IoT smart meters (with Inclusive Energy), PAYG lockout, Gold Standard credits · *geo: "Mexico-founded (deployments Kenya, India, Latin America)"*
- **Solar Biogas / HomeBiogas** — Open digester designs named as energy-workstream entry point
- **Solar CITIES** — Appropriate-technology practitioner network for DIY IBC biodigesters (open by practice, unlicensed) · *geo: "US / Global"*
- **SolarFood** — Women-led cooperative solar-dryer development aiming at local manufacturing; open artefact not yet public · [record](examples/records/solarfood-nepal.md) · *geo: "Nepal and Bhutan; Kathmandu University and local women-led cooperatives in the project ecosystem"*
- **Sturgeon Lake Agrivoltaics** — 13 MWac sheep-grazing agrivoltaic project on non-prime land · *geo: "Kawartha Lakes, Ontario (Canada)"*
- **SunCulture** — Solar irrigation vendor; closed hardware
- **Sustainable Rural Ecology for Green Growth (Nepal)** — Nordic Development Fund-documented project: biochar field trials in 15 villages, farmer-to-farmer dissemination · *geo: "Nepal"*
- **Switch Datacenters** — Data-center operator in the Uithoorn heat-network agreement
- **Telia** — Company feeding heat into Nordic municipal heat networks
- **Tencent (Tianjin)** — Operating data-center waste-heat installation cited in the CEA energy case · *geo: "Tianjin (stated)"*
- **Thermalize** — Pre-pilot illustration pairing data centers with community food (self-labelled, not an actual facility)
- **Toronto Zoo** — Manure supplier to ZooShare's digester · *geo: "Toronto (Canada)"*
- **Toundra Greenhouse** — Greenhouse at the Resolute pulp mill using heat + CO₂ (8.5 ha of a planned 34 ha agrothermic industrial park) · *geo: "Canada"*
- **Trystan Lea** — OpenEnergyMonitor / Megni co-founder · *geo: "Wales, UK"*
- **Tsinghua University** — University partner in the Huailai waste-heat demonstration · *geo: "China"*
- **Uithoorn/Greenport Aalsmeer/Switch/Liander grower heat network** — Multi-party grower heat network cited as an operating data-center-heat installation · *geo: "Uithoorn/Greenport Aalsmeer (stated)"*
- **University of Liège (DEAL / TERRA)** — Academic agrivoltaics/agroforestry modelling group; PASE team (Bruhwyler, Lebeau et al.) · *geo: "Belgium"*
- **University of Notre Dame** — University heating greenhouses from data-center waste heat · *geo: "United States"*
- **US EPA AgSTAR** — Named failed farm digesters in the AgSTAR Shutdown sheet (vendor bankruptcy, corrosion, poor buyback, knowledge lock-in, developer capture) · [record](examples/records/epa-agstar-digester-database.md) · *geo: "United States (US EPA AgSTAR, national facility census) and international (IWA ADM1 Python open-science simulation ecosystem); contrasted directly with Canada's closed industry survey record"*
- **Western University FAST Lab / WIRED (uwo-fast)** — University lab whose OSHWA-certified open agrivoltaic/thermal hardware and tool library records were curated (five records)
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting systems carry high capital premiums that raise levelized cost of electricity (LCOE) for farmers. · [record](examples/records/fast-lab-agrivoltaics.md) · *geo: "London, Ontario, Canada (Western University); design commons published globally via Appropedia and Open Science Framework (OSF)"*
- **Wilson, McLaughlin, Domermuth, Joseph/Taylor, Cahoj, Wilson/Nakka** — originators of the individual kiln designs in the IBI open-source collection · *geo: "Global aggregator; hosted by International Biochar Initiative; individual designs span US, Australia, and other regions"*
- **WorldVeg** — Published solar dryer documentation
- **Yandex** — Company feeding heat into Nordic municipal heat networks
- **ZooShare Biogas Co-operative Inc.** — Canada's first community-bond-financed biogas co-op (800+ members, >$5M bonds); Toronto Zoo manure + GTA food waste; 500 kW · *geo: "Toronto, ON (Canada)"*

### Food waste, recovery & upcycling — `food-waste` (39)

*Food-waste measurement and reduction, surplus rescue and redistribution platforms, upcycled food certification and operators.*

- **Ahold Delhaize USA** — One of only three grocery chains publicly committed to zero food waste by 2025 · *geo: "US"*
- **CGF (Consumer Goods Forum)** — FLW Standard partner; its members committed to 50% food-waste reduction by 2025
- **Compost for Good** — Community-scale rotating drum composter with a free open design guide and operating manual (~$15K build vs $40-150K commercial; 35,000 lb/yr); moved under ANCA in 2024 with a HURD urine-compost facility added · [record](examples/records/compost-for-good.md) · *geo: "United States (New York, Adirondack region); community-scale, local reach"*
- **Copia** — Surplus-food pickup-and-delivery platform emphasizing donation and tax write-offs · *geo: "SF Bay area"*
- **CropMobster** — Platform helping farmers and food entrepreneurs offload surplus at discounted prices
- **Divert Inc.** — Retail waste-visibility service provider; its framing shows opacity as a saleable problem
- **Earth Matter** — Compost-education non-profit publishing an Open Source Curriculum of DIY compost activities at its Compost Learning Center · *geo: "NYC"*
- **ECCC** — Author of 'Taking stock: Reducing food loss and waste in Canada' (2019), the reference federal document · *geo: "Canada"*
- **Flashfood** — Discount app connecting surplus grocery food to shoppers; the largest retailer-integrated discount-diversion operation in Canada; proprietary data · *geo: "Canada (Canadian-founded; live in 900+ Loblaw stores)"*
- **FLW Standard (Food Loss and Waste Accounting and Reporting Standard)** — Waste measurement and reporting standard proving waste infrastructure exists
- **Food Waste Atlas** — WRI's global food-waste data tool
- **Food Waste Reduction Challenge** — Canadian federal challenge program (LOOP an alumnus) · *geo: "Canada"*
- **Foodsharing.de / foodsharing e.V.** — Grocery-surfaced candidate record, verified and curated into examples · [record](examples/records/foodsharing.md) · *geo: "Germany (also active in Austria, Switzerland and other European countries)"*
- **FUSIONS (EU FUSIONS)** — FLW Standard partner; its Food Waste Framework is synchronized with the standard · *geo: "EU"*
- **Goodly Foods** — GVFB social enterprise making soups/stews/sauces from surplus — upcycling example
- **Kroger** — Conventional retail giant used as scale contrast; one of only three chains publicly committed to zero food waste by 2025 · *geo: "US (stated context)"*
- **LOOP Mission** — Closed incumbent upcycling operator whose buyer-reject stream the concept would compete with; example record · [record](examples/records/loop-mission.md) · *geo: "Montreal, Quebec; national retail distribution; US expansion"*
- **Loop Resource** — Canadian farmer-facing diversion program moving grocery surplus to farms as livestock feed (1.66M kg/yr self-reported); contests the buyer-reject stream · *geo: "Canada"*
- **National Zero Waste Council** — Aggregator of the Guidelines for Food Donations across the regulatory landscape · *geo: "Canada"*
- **Pacific Coast Food Waste Commitment (PCFWC)** — Public-private partnership (from the Pacific Coast Collaborative, 2016) producing the 'best-in-class' retail food-waste dataset with anonymized, gated reporting · *geo: "West Coast US"*
- **Pennsylvania Agricultural Surplus System** — Named as the model farm-to-food-bank programme · *geo: "Pennsylvania, US"*
- **ReFED** — Waste measurement and reporting infrastructure named in the food-waste pass
- **Regional District of Nanaimo** — Requires grocery stores and institutional cafeterias to run food-waste diversion systems · *geo: "British Columbia"*
- **ReGrained** — Upcycled spent-grain flour company; trade-secret process
- **RescueLens** — Food rescue research tooling (AAAI-40 / arXiv); watch for spin-out
- **Second Harvest** — Canadian food charity selling licences of its rescue app (closed-and-monetized counter-example; 226M meals self-reported) · [record](examples/records/second-harvest-app.md) · *geo: "Toronto, Ontario, Canada; national operations; licensing offered internationally"*
- **Sharing Excess** — Food redistribution organization claiming 'fully open source'; no licence file on either public repo · [record](examples/records/sharing-excess.md) · *geo: "Philadelphia, PA; national US operations (Philadelphia, New York, Washington DC, Chicago, Detroit, Los Angeles)"*
- **Statistics Canada** — Partner in the federal food-waste measurement framework · *geo: "Canada"*
- **Tesco** — Named as already measuring and publicly reporting food waste against the FLW Standard
- **U.S. Food Waste Pact** — National successor/sibling to PCFWC (ReFED + WWF) extending the Target-Measure-Act model · *geo: "US"*
- **Upcycled Certified** — Paid certification running on application, per-review, per-product licensing and audit fees — value capture in the upcycling category
- **Upcycled Food Association** — Created the Upcycled Certified Standard, now administered by Where Food Comes From · [record](examples/records/upcycled-certified.md) · *geo: "US-origin, global programme; WFCF is a NASDAQ-listed verification company"*
- **Upcycled Foods (company)** — Upcycled ingredients company; trade-secret process
- **Vesta** — Operator of the Waste Not 2.0 waste-tracking system managing donation logistics
- **Walmart** — Retail giant: 2016 IBM Food Trust/Hyperledger produce-and-pork tracking pilot; one of three chains committed to zero food waste by 2025
- **Waste No Food** — Donation platform founded 2011; ~1M meals delivered · *geo: "California"*
- **WRI** — Secretariat of the FLW Standard; hosts the Food Waste Atlas
- **WWF** — Conservation NGO; partner in the ReFED + WWF U.S. Food Waste Pact and co-maintainer of the SMART spatial-monitoring partnership
- **Zhongnong Meiya** — Company partner in the Huailai AI-data-center waste-heat demonstration · *geo: "China"*

### Land & tenure — `land-tenure` (27)

*Farmland access and trusts, Indigenous land governance, land registries and land-tenure data.*

- **American Farmland Trust** — National nonprofit; Farms Under Threat analyses (300M+ acres) published freely without open-data licence · *geo: "US"*
- **BC Farmland Trust proposal** — White paper (Apr 2025) proposing a Terre de Liens-style citizen-shareholding vehicle · *geo: "BC (Canada)"*
- **Bonnefield** — Institutional farmland owner (~140,000 acres in Canada)
- **Cadasta** — Open tenure records platform named as land-workstream entry point
- **CDE Bern** — University of Bern Centre for Development and Environment; Land Matrix governance partner
- **Ekvn-Yefolecv** — Ecovillage practising traditional lifeways, language immersion and collective land governance · *geo: "Maskoke ancestral territory, Alabama"*
- **Farm Land Security Board (Saskatchewan)** — Approves farmland ownership exemptions (141/158 approved 2018-2022) · *geo: "SK (Canada)"*
- **Farmland Access Legal Toolkit** — CLT model documentation source (with Lincoln Institute)
- **FarmLINK** — Farmland-access programme named as land-workstream entry point
- **First Light** — Land rematriation example named in the land pillar · *geo: "Wabanaki territory, Maine"*
- **First Nation Land Register (Framework Agreement)** — Statutory public register of interests in reserve lands under land codes (~200+ signatories) · *geo: "Canada"*
- **FNLMA land codes / Framework Agreement (1996)** — Framework for First Nations control of reserve lands · *geo: "Canada"*
- **Framework Agreement on First Nation Land Management (land-code regime)** — Indian Act land administration — 44 land-related sections administered by the federal Crown — leaves First Nations governing their own reserve lands under someone else's law. · [record](examples/records/framework-agreement-land-codes.md) · *geo: "Canada (224 signatory First Nations; growing)"*
- **Genesis Land Conservancy** — Cited as Canada's strongest agricultural land trust model with most direct farmer governance · *geo: "SK (Canada)"*
- **GIGA** — Land Matrix governance partner
- **HM Land Registry** — Publishes open source data and Price Paid Data; the reference model a land registry can open · [record](examples/records/hm-land-registry.md) · *geo: "England & Wales (reference model cited internationally)"*
- **ILC (International Land Coalition)** — Multi-stakeholder coalition governing Land Matrix
- **Indian Land Registry System** — Reserve-lands registry not openly published at parcel level · *geo: "Canada"*
- **Land Matrix** — Independent open database of large-scale land deals (ILC, CDE Bern, GIGA governance) · [record](examples/records/land-matrix.md) · *geo: "global (low- and middle-income-country focus; ~100 countries covered)"*
- **Lopez Community Land Trust** — Partner in the IGFC mobile slaughter unit · *geo: "WA (US)"*
- **NEFOC Land Trust** — BIPOC-led land trust named in the land pillar · *geo: "Northeast US"*
- **Nisga'a Nation** — Modern treaty nation (2000) operating its own fee-simple land title office and register
- **Ontario Farmland Trust** — Easement-based farmland trust; 821 acres secured in 2024 · *geo: "Ontario (Canada)"*
- **Sogorea Te' Land Trust** — Urban land rematriation example (Shuumi Land Tax) in the land pillar · *geo: "Lisjan Ohlone territory"*
- **Terre de Liens** — Citizen-shareholding farmland foncière (solidarity investment company + foundation + 19 regional associations); 37 new farms in 2025; model for a BC farmland trust proposal · [record](examples/records/terre-de-liens.md) · *geo: "France (19 regional associations; the reference model cited in Canadian land-access proposals)"*
- **Tsilhqot'in Nation** — Judicially recognized Aboriginal title (2014) in the Canadian tenure spectrum
- **Young Agrarians** — Farmland-access programme named as land-workstream entry point

### Language, voice & agricultural AI — `language-ai` (27)

*Agricultural AI models, voice/language infrastructure, speech corpora and AI advisory deployments.*

- **Afresh** — AI-based ordering technology used by PCFWC retailers to order produce in the right quantities
- **Agrifood AI Field Guide** — Adjacent research base and discovery aid (agrifood.metaviews.ca) used as comparative synthesis and lead register, never as sole evidentiary endpoint
- **AgriGPT-Omni** — Zhejiang University ag speech model; largest agricultural speech dataset (492K synthetic samples), release promised
- **AgriMa (后稷)** — Open-weight agricultural LLM/multimodal model from Shanxi Agricultural University · *geo: "China"*
- **Alibaba ET Agricultural Brain** — Alibaba Cloud's ET Agricultural Brain (launched at The Computing Conference 2018, Shanghai) applies company-developed AI — visual recognition, voice recognition, real-time environmental monitoring — to agriculture, initially pig farming and fruit/vegetable production. · [record](examples/records/et-agricultural-brain.md) · *geo: "China (commercial, national reach)"*
- **Ama KrushAI** — Deployed farmer chatbot (with Samagra, Odisha DAFE) · *geo: "Odisha"*
- **Bhashini** — India's language DPI (MeitY); PM-KISAN voice chatbot running 11 regional languages · [record](examples/records/bhashini.md) · *geo: "India / national; 11+ regional languages in agrifood use (22 scheduled languages overall)"*
- **CGIAR / AgriLLM** — AgriLLM aims to provide agricultural AI tools grounded in scientific and local agricultural knowledge for smallholders, extension agents, researchers, and policymakers. · [record](examples/records/cgiar-agrillm.md) · *geo: "Global South orientation; multilateral agricultural research system"*
- **CGIAR Digital Innovation Initiative** — CGIAR program under which the voice-message research was done
- **Deonar-AI (Ubada12)** — Open-source real-time livestock detection/counting (YOLOv11 + ByteTrack, Apache-2.0) for an operating abattoir · *geo: "India (Deonar abattoir, Mumbai)"*
- **Ekvn-Yefolecv** — Ecovillage practising traditional lifeways, language immersion and collective land governance · *geo: "Maskoke ancestral territory, Alabama"*
- **FAIR Forward** — GIZ programme advancing ag voice AI (FarmerChat, Haki des Femmes, Common Voice expansion)
- **Farm Radio International** — Farmer voice-message extension organization analyzed in the Common Voice research chain (Swahili, Hausa)
- **FarmerChat** — Farmer chatbot under FAIR Forward; GitHub/Hugging Face evidence checked · [record](examples/records/farmerchat.md) · *geo: "India, Kenya, Nigeria, Ethiopia, Brazil (5 countries); languages incl. English, Hindi, Telugu, Amharic, Kiswahili, Hausa, Portuguese, Spanish"*
- **Gauthier, Ndiaye, Guissé** — researchers behind the Kallaama national-language corpus initiative · *geo: "Senegal / West Africa; Wolof, Pulaar, Sereer (~10M native speakers)"*
- **Haki des Femmes** — Voice-enabled Android app answering women's land-ownership queries in Kiswahili; built by Core23Lab · *geo: "DRC (Katanga and Lualaba provinces)"*
- **Kallaama** — Named ag speech model/dataset in the open-language-data layer · [record](examples/records/kallaama.md) · *geo: "Senegal / West Africa; Wolof, Pulaar, Sereer (~10M native speakers)"*
- **MeitY** — Ministry behind Bhashini language DPI · *geo: "India"*
- **Mohamad Yaghi** — Future Herd guest (Episodes 21, 31) whose frame treats AI as decision-support, not automation
- **Mohsen Yoosefzadeh** — Originator of the dark-data concept: unused archived research data as latent substrate for agricultural AI
- **Mozilla Common Voice** — Mozilla open speech dataset; no verified farmer-facing deployment located · [record](examples/records/common-voice.md) · *geo: "global; multilingual and community-led"*
- **Mozilla Foundation** — Runs Common Voice and its Kiswahili program; catalyzed Haki des Femmes
- **Nanjing Agricultural University** — Developer of Sinong, China's first agriculture-specific open-weight LLM · *geo: "China"*
- **One Million Voices of Agroecology Initiative** — Citizen-science initiative and platform for agroecology knowledge
- **PaddyMitra** — IRRI ag chatbot deployment
- **PM-KISAN** — Government scheme served by Bhashini's 11-language voice chatbot · *geo: "India"*
- **Sinong (神农, Shennong) — Agricultural Foundation Model** — Sinong is described as China's first open-source, agriculture-specific large language model: a vertical "agricultural brain" trained on agricultural knowledge to support farmers, agronomists, breeders, veterinarians, and agricultural economists with domain-accurate reasoning rather than generic chatbot responses. · [record](examples/records/sinong.md) · *geo: "China (Nanjing Agricultural University); open weights distributed globally via ModelScope and GitHub"*

### Cyber incidents & food-system resilience — `resilience` (12)

*Ransomware incidents and food-system cyber-resilience guidance, institutions and threat actors.*

- **AGCO** — Ag equipment maker named for its cybersecurity incident
- **Black Basta** — Ransomware group suspected in the Sobeys/Empire incident
- **BlackMatter** — Ransomware group that attacked NEW Cooperative (2021)
- **Canadian Centre for Cyber Centre** — National cyber centre; National Cyber Threat Assessment 2023-2024 flags ransomware against critical infrastructure · *geo: "Canada"*
- **CISA** — Source of the food-sector cybersecurity profile named in the A4 workstream
- **Community Safety Knowledge Alliance (CSKA)** — Research partner in the CSA food value chain cybersecurity work · *geo: "Canada"*
- **Crystal Valley Co-op** — Grain/input co-op disrupted by September 2021 ransomware · *geo: "Minnesota (US)"*
- **CSA T201 — Cybersecurity Guidance for the Food Value Chain** — Canada's food system is undergoing rapid digitalization (precision ag, cloud-connected machinery, automated processing, online retail) while CSA Group's research programme with the Community Safety Knowledge Alliance (CSKA) found the food value chain **largely not implementing cybersecurity standards** — a critical-infrastructure sector with consumer-scale cyber maturity. · [record](examples/records/csa-t201-food-cybersecurity.md) · *geo: "Canada — National Standard of Canada (domestic); scoped to the whole agri-food value chain"*
- **JBS ransomware attack (2021)** — **None.** Kill-floor scheduling, carcass tracking, payroll, and logistics are proprietary and centralized at corporate servers — the attack vector was exactly that centralization. · [record](examples/records/jbs-ransomware-2021.md) · *geo: "multinational — US, **Canada (Brooks, AB)**, Australia; world's largest meat processor (~one-fifth of global meat supply)"*
- **Maple Leaf Foods ransomware attack (2022)** — **None.** ERP, plant scheduling, payroll, and supply-chain systems are proprietary and centralized. · [record](examples/records/maple-leaf-ransomware-2022.md) · *geo: "Canada (Mississauga, ON HQ; ~14,000 employees; Canada, US, Asia)"*
- **NEW Cooperative** — Farm-supply & grain co-op hit by 2021 BlackMatter ransomware; paper-ticket workaround · [record](examples/records/new-cooperative-ransomware-2021.md) · *geo: "United States (Fort Dodge, Iowa; 36 locations, western/central Iowa; grain marketing/storage, feed, agronomy; feeding-schedule software used for millions of farm animals)"*
- **Sobeys / Empire** — Canadian grocery/pharmacy hit by 2022 ransomware (Black Basta suspected); pharmacies down 4 days · [record](examples/records/sobeys-ransomware-2022.md) · *geo: "Canada (national; ~1,500 stores — Sobeys, Safeway, IGA, Foodland, Farm Boy, Lawtons, Needs)"*

## Additional axes

Four further axes over the same entries, each curated where the corpus states it and stored per entry in `directory-data.json` (`openness`, `governance`, `lifecycle`, `verification`). Seeded by scoped extraction over the record sections that carry the relevant statements (*Open layer*, *What is actually open*, *Governance and control*) and the entry roles, with caveat sentences filtered and then reviewed entry by entry; false positives from caveat text ("does not establish farmer control") were the main failure mode and were removed. Absence of an assignment means *not stated* — entries grow onto these axes by curation, and a blank is not a negative finding.

### Verification tier (mechanical)

Every entry carries an explicit tier: **record-backed** (141 entries — one of the 141 curated records is attached, inheriting its verification status) or **scan-derived, recorded-not-asserted** (879 entries — sourced from scans and working documents only, never independently re-verified). Record statuses among the record-backed: curated 101, candidate 35, lead 3, archived 2.

### Openness layer (183 entries assigned)

What the corpus says is actually open about each entry: code, hardware/design files, data, seed or biological material, knowledge/documentation — or nothing (the closed and contrast cases). Multiple values allowed (a project can open both code and hardware).

**Code (64)**

- **AgIsoStack++** [record](examples/records/agisostack.md) — Open ISOBUS standard implementation; active community, deployment unverified, no identified backer
- **AgriMa (后稷)** — Open-weight agricultural LLM/multimodal model from Shanxi Agricultural University
- **AquaCrop-OSPy** [record](examples/records/aquacrop-ospy.md) — Apache-2.0 Python implementation of UN FAO AquaCrop crop-water model
- **AquaPi** — ESP32/ESPHome aquarium monitoring with Atlas Scientific probes (Apache-2.0)
- **ArduPilot** [record](examples/records/ardupilot.md) — Open autopilot firmware (GPL-3.0); largest community case, not farmer-governed
- **bifacial_radiance** [record](examples/records/nrel-inspire-bifacial-radiance.md) — BSD-3-Clause bifacial PV ray-tracing simulation
- **Co-op Cloud** — Shared configuration commons for collectively-run self-hosting (standardized deployment recipes); Foodsoft has a recipe; includes the Co-op Cloud Federation
- **Common Greenhouse Ontology (CGO)** [record](examples/records/common-greenhouse-ontology.md) — Apache-2.0 open data standard for greenhouses with zero vendor adoption; no waste-heat/energy-interface extension exists
- **CoopCycle** [record](examples/records/coopcycle.md) — Federation of bike-delivery co-operatives that built and collectively govern their own platform under a protective licence restricted to co-operatives
- **CORE-POS** [record](examples/records/core-pos.md) — GPL-2.0 community-run POS for co-op groceries; the existing open artifact that could carry a northern co-op retail layer
- **Deonar-AI (Ubada12)** — Open-source real-time livestock detection/counting (YOLOv11 + ByteTrack, Apache-2.0) for an operating abattoir
- **Digital Earth Africa** [record](examples/records/digital-earth-africa-crop-type.md) — Geospatial workflows org; crop-type work under Enabling Crop Analytics initiative
- **Eclipse SCADA** — Open SCADA/HMI platform lineage (EPL/GPLv2 mix), generic only
- **Ekylibre** [record](examples/records/ekylibre.md) — Early participant in the Data Food Consortium
- **FarmBot** [record](examples/records/farmbot.md) — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume
- **FarmerChat** [record](examples/records/farmerchat.md) — Farmer chatbot under FAIR Forward; GitHub/Hugging Face evidence checked
- **farmOS** [record](examples/records/farmos.md) — Producer-owned open farm-management information system used in agroecological digital infrastructure (e.g. by REGOSH)
- **FarmStack** [record](examples/records/farmstack.md) — Apache-2.0 data-exchange Digital Public Good run by Digital Green
- **FoodCoopShop** [record](examples/records/foodcoopshop.md) — AGPL-3.0 producer-direct ordering platform for food co-ops/farm shops; single-developer open-core (maintainer sells installation/support)
- **Foodsharing.de / foodsharing e.V.** [record](examples/records/foodsharing.md) — Grocery-surfaced candidate record, verified and curated into examples
- **Foodsoft** [record](examples/records/foodsoft.md) — Open-source web software for food co-operatives (ordering, accounting, member work-shift scheduling)
- **goscommons/Biogas** — GPL-3.0 small-farm mesophilic biodigester documentation (hobby scale)
- **Grocy** — Open-source household grocery management software (adjacent, home scale)
- **Holos — Agriculture and Agri-Food Canada** [record](examples/records/holos.md) — Holos is a whole-farm greenhouse-gas emissions model and decision-support software project associated with Agriculture and Agri-Food Canada.
- **HUIZHI-nongyeOS-cloud (农业岛)** [record](examples/records/nongyedao-huizhi.md) — Chinese open-source smart-agriculture IoT platform (MIT, Gitee/GitHub); enterprise SI pattern for high-standard farmland tenders
- **ICAR Animal Data Exchange (ADE) standard** [record](examples/records/icar-ade.md) — Animal Data Exchange (ADE) JSON standard for livestock/milk-recording data (Apache-2.0, ADE Working Group)
- **ISOBlue 2.0** [record](examples/records/isoblue.md) — Open design pattern (data and control on the farmer's device by design) proven in tractors and transplanted to greenhouses
- **Libre Solar** [record](examples/records/libre-solar.md) — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0
- **LiteFarm** [record](examples/records/litefarm.md) — Open farm-management software with farmer/researcher co-design, agroecology focus and multilingual support; candidate record
- **MikesMachines/MilkIt** — GPL-2.0 DIY milker/receiver documentation repo (last pushed 2024); a DIY milker, not a robot
- **MIT OpenAg (Open Agriculture Initiative)** [record](examples/records/openag-food-computer.md) — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited
- **Monitorfish (France)** [record](examples/records/monitorfish.md) — Fisheries monitoring and control: the state's Fisheries Monitoring Center must fuse VMS positions, declarative fishing activity (ERS/FLUX), regulated-area rules, fleet-segment risk
- **Mycodo** [record](examples/records/mycodo.md) — GPL-3.0 open greenhouse/climate control software at maker scale (3,286 stars, actively maintained); peer-reviewed deployment in Bhutan; volunteer-maintained (fragility finding)
- **Open Ag Data Alliance (OADA)** [record](examples/records/oada.md) — Open interoperability/farmer data access standards alliance; active reference-server core maintained by Purdue OATS Center, adoption layer absent
- **Open Data Kit (ODK)** [record](examples/records/open-data-kit.md) — Open data-collection software; hybrid open-core + commercial hosted service
- **Open Food Network (OFN)** — International not-for-profit whose open-source platform for community food enterprises is the closest existing test of the grocery concept's federation layer
- **Open Food Network Canada** [record](examples/records/open-food-network-canada.md) — Incorporated not-for-profit running the open-source local-food marketplace; open-agricultural-technology page links OpenTEAM, D:Food/Web, GOAT and the Data Food Consortium Open Sta
- **Open Foris (incl. SEPAL, Collect, Arena)** [record](examples/records/open-foris-sepal.md) — UN FAO open geospatial suite for satellite canopy monitoring, REDD+ reporting and EUDR compliance; MIT licensed
- **Open Source Ecology (OSE)** [record](examples/records/open-source-ecology.md) — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific
- **Open-Source Customizable Thermal Energy Storage Module** — OSHWA CA000071, GPL-3.0-only
- **OpenAgriS3D** [record](examples/records/openagris3d.md) — FAST Research Group open-hardware record
- **OpenCTD** [record](examples/records/openctd.md) — Open oceanography CTD (hardware + firmware + build manual, MIT); 40+ units built via workshops
- **OpenEMS (Open Source Energy Management System)** [record](examples/records/openems.md) — Farm microgrids and rural energy installations increasingly combine solar PV inverters, battery energy storage systems (BESS), combined heat and power (CHP) biogas gensets, heat pu
- **OpenEMS Association e.V.** — Non-profit association governing OpenEMS industrial microgrid control (EPL-2.0/AGPL-3.0)
- **OpenEnergyMonitor** [record](examples/records/openenergymonitor.md) — Open energy-monitoring hardware/software ecosystem (emonPi3, emonTx, emonTH); flagship repo has no SPDX licence — active project, incomplete licence formality
- **OpenEPCIS (epcis-repository-ce)** [record](examples/records/openepcis.md) — Event-based supply-chain traceability at processing scale: FSMA 204 KDE/CTE records, meat and cattle traceability frameworks, and the coming EU digital product passport all need an
- **OpenFence** [record](examples/records/openfence.md) — Open virtual fencing design (GPL-3.0, dormant candidate)
- **OpenFlexure Microscope (Agrifood Soil & Pathology)** [record](examples/records/openflexure-microscope.md) — Assessing biological soil health (nematodes, mycorrhizae, fungal-to-bacterial ratios) and screening for plant pathogens (spores, foliar blights, waterborne contaminants) requires l
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** [record](examples/records/openreactor-bioreactor.md) — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run.
- **OpenSprinkler** [record](examples/records/opensprinkler.md) — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud
- **Our-Sci Reflectometer** [record](examples/records/our-sci-reflectometer.md) — Handheld open-hardware reflectometer (GPL-3.0) for soil organic carbon and crop nutrient density
- **Platform Cooperative Development Kit** — Open toolkit on GitHub for building platform cooperatives
- **SAMA (Solar Alone Multi-objective Advisor) — FAST open microgrid sizing tool** [record](examples/records/sama.md) — Designing a farm- or community-scale hybrid renewable microgrid (PV, battery, generator, grid-tie) requires techno-economic sizing — choosing component capacities that minimise lif
- **ScadaBR** — Open SCADA/HMI platform (GPLv2), generic only
- **sdmTMB / pbs-assess** [record](examples/records/sdmtmb.md) — Flagship Canadian open fisheries software (GPL-3); spatiotemporal index standardization built at DFO's Pacific Biological Station; active
- **Sinong (神农, Shennong) — Agricultural Foundation Model** [record](examples/records/sinong.md) — Sinong is described as China's first open-source, agriculture-specific large language model: a vertical "agricultural brain" trained on agricultural knowledge to support farmers, a
- **Smart-Worm-Habitat (danielneil)** [record](examples/records/smart-worm-habitat.md) — Continuous-flow worm bin design with sensors (GPL-3.0); concept-stage, no built units
- **Stock Synthesis 3 (SS3)** [record](examples/records/ss3.md) — NOAA's flagship age-structured stock-assessment engine (CC0, very active)
- **Tania** — Open farm record software (Apache-2.0) with pasture management
- **US EPA AgSTAR** [record](examples/records/epa-agstar-digester-database.md) — Named failed farm digesters in the AgSTAR Shutdown sheet (vendor bankruptcy, corrosion, poor buyback, knowledge lock-in, developer capture)
- **Vinduino** [record](examples/records/vinduino.md) — Individual grower's open sensing + irrigation control (GPL-3.0)
- **WeClock** [record](examples/records/weclock.md) — UNI Global Union worker self-tracking app for hours, breaks, conditions; explicitly worker-held data
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** [record](examples/records/fast-lab-agrivoltaics.md) — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting sys
- **Western University FAST Lab open scientific instrumentation (OSSEI)** [record](examples/records/fast-ossei-instrumentation.md) — Scientific instruments — analytical balances, turbidity meters, magnetic stirrer hotplates, gas/environmental monitors — are priced for funded laboratories, not for under-resourced

**Hardware & design files (29)**

- **Appropedia / Open Source Appropriate Technology (OSAT)** [record](examples/records/appropedia-osat.md) — Appropedia is a sustainability wiki and the de facto open-design commons for appropriate technology (AT): technologies designed with explicit attention to the environmental, ethica
- **Compost for Good** [record](examples/records/compost-for-good.md) — Community-scale rotating drum composter with a free open design guide and operating manual (~$15K build vs $40-150K commercial; 35,000 lb/yr); moved under ANCA in 2024 with a HURD 
- **FarmBot** [record](examples/records/farmbot.md) — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume
- **Grain Bikes (bicycle-powered grain processing machines)** [record](examples/records/grain-bikes.md) — Small farms and micro-mills need threshing, winnowing, dehulling, and coarse milling without grid power or four-figure equipment.
- **ISOBlue 2.0** [record](examples/records/isoblue.md) — Open design pattern (data and control on the farmer's device by design) proven in tractors and transplanted to greenhouses
- **L'Atelier Paysan** [record](examples/records/latelier-paysan.md) — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026
- **Libre Solar** [record](examples/records/libre-solar.md) — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0
- **MIT OpenAg (Open Agriculture Initiative)** [record](examples/records/openag-food-computer.md) — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited
- **Open Source Ball Mill (FAST)** — AC/PV-powered ball mill, complete CAD, HardwareX-published, CC-BY-SA-4.0 (non-food-grade)
- **Open Source Ecology (OSE)** [record](examples/records/open-source-ecology.md) — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific
- **Open Source Range (OSR) GPS Collar** [record](examples/records/osr-gps-collar.md) — Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization.
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed
- **Open-Source Vertical Swinging Wood-Based Solar PV Racking Systems** — OSHWA CA000025, CERN-OHL-S-2.0 (Vandewetering, Hayibo & Pearce)
- **OpenAgriS3D** [record](examples/records/openagris3d.md) — FAST Research Group open-hardware record
- **OpenEnergyMonitor** [record](examples/records/openenergymonitor.md) — Open energy-monitoring hardware/software ecosystem (emonPi3, emonTx, emonTH); flagship repo has no SPDX licence — active project, incomplete licence formality
- **OpenFence** [record](examples/records/openfence.md) — Open virtual fencing design (GPL-3.0, dormant candidate)
- **OpenFlexure Microscope (Agrifood Soil & Pathology)** [record](examples/records/openflexure-microscope.md) — Assessing biological soil health (nematodes, mycorrhizae, fungal-to-bacterial ratios) and screening for plant pathogens (spores, foliar blights, waterborne contaminants) requires l
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** [record](examples/records/openreactor-bioreactor.md) — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run.
- **OpenSprinkler** [record](examples/records/opensprinkler.md) — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud
- **OSHWA** — Open-source hardware certification body; none of the compost/vermi/biochar hardware in the cell carries its certification
- **Our-Sci Reflectometer** [record](examples/records/our-sci-reflectometer.md) — Handheld open-hardware reflectometer (GPL-3.0) for soil organic carbon and crop nutrient density
- **Pioreactor** [record](examples/records/pioreactor.md) — Open-source Raspberry Pi bioreactor platform (MIT software, published hardware); only Canadian open fermentation artifact
- **POSCAS (Parametric Open-Source Cold-Frame Agrivoltaic Systems)** — OSHWA CA000008, CERN-OHL-P-2.0 hardware + CC BY 4.0 docs
- **Real Seeds (DIY Air-Column Seed Cleaner)** [record](examples/records/real-seeds-cleaner.md) — Open seed-cleaning design (public design commons) adopted in seed libraries and ecological breeding
- **ROMI — Robotics for Microfarms** [record](examples/records/romi.md) — ROMI develops robotic tools to assist organic, diversified, human-scale vegetable farms with physically demanding or repetitive work such as weeding, crop monitoring, and plant phe
- **Think Oggún (Oggún tractor)** [record](examples/records/oggun.md) — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware
- **Vinduino** [record](examples/records/vinduino.md) — Individual grower's open sensing + irrigation control (GPL-3.0)
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** [record](examples/records/fast-lab-agrivoltaics.md) — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting sys
- **Western University FAST Lab open scientific instrumentation (OSSEI)** [record](examples/records/fast-ossei-instrumentation.md) — Scientific instruments — analytical balances, turbidity meters, magnetic stirrer hotplates, gas/environmental monitors — are priced for funded laboratories, not for under-resourced

**Data & datasets (46)**

- **Ag Data Commons** [record](examples/records/ag-data-commons.md) — USDA NAL public ag data curation platform
- **Agri-food Data Canada** [record](examples/records/agrifood-data-canada.md) — Canadian data initiative named as candidate event invitee
- **Appropedia / Open Source Appropriate Technology (OSAT)** [record](examples/records/appropedia-osat.md) — Appropedia is a sustainability wiki and the de facto open-design commons for appropriate technology (AT): technologies designed with explicit attention to the environmental, ethica
- **Autonomous Greenhouse Challenge** [record](examples/records/wageningen-agc-datasets.md) — WUR greenhouse competition whose DOI-published grow-and-climate timeseries datasets are the open research-data precedent
- **BC Land Owner Transparency Registry (LOTR)** [record](examples/records/bc-lotr.md) — World-first public registry of beneficial ownership of land held through corporations/trusts/partnerships
- **Bhashini** [record](examples/records/bhashini.md) — India's language DPI (MeitY); PM-KISAN voice chatbot running 11 regional languages
- **bifacial_radiance** [record](examples/records/nrel-inspire-bifacial-radiance.md) — BSD-3-Clause bifacial PV ray-tracing simulation
- **Bioleft** [record](examples/records/bioleft.md) — Participatory open-source seed commons that adds open data to the seed commons; deliberate bridge between open source and agroecology
- **Bionutrient Institute** — Open crowd-sourced calibration datasets for crop phytochemicals
- **CanSIS / National Soil Database** [record](examples/records/cansis.md) — Fully open Canadian soil data (OGL-Canada), pairing with SSURGO
- **Data Food Consortium (DFC Standard)** — Open data interoperability standard for short food supply chains; ontology, taxonomies, prototype, connector tool; v2.0.0 released Feb 2026
- **DFO (Fisheries and Oceans Canada)** — Publishes AIS vessel-density rasters, licence statistics, fish-health datasets on the federal Open Government portal (OGL-Canada)
- **DFO aquaculture and sea-lice open reporting (BC datasets)** [record](examples/records/dfo-aquaculture-reporting.md) — Open-net pen salmon farming is Canada's most contested food-production controversy, and its environmental performance (sea lice, fish health, transfers, antimicrobial use, mortalit
- **Digital Earth Africa** [record](examples/records/digital-earth-africa-crop-type.md) — Geospatial workflows org; crop-type work under Enabling Crop Analytics initiative
- **FAO (UN Food and Agriculture Organization)** — UN body whose 2020 scaling paper names 'open source data and technology' and whose 10-element agroecology framework (with HLPE) does not center open source; also operates the Open 
- **FarmerChat** [record](examples/records/farmerchat.md) — Farmer chatbot under FAIR Forward; GitHub/Hugging Face evidence checked
- **FarmStack** [record](examples/records/farmstack.md) — Apache-2.0 data-exchange Digital Public Good run by Digital Green
- **fiboa and EuroCrops** [record](examples/records/fiboa-eurocrops.md) — Agricultural field boundaries — the geometry beneath every farm program, subsidy, and remote-sensing analysis — are state-held administrative data that neither North American gover
- **FisheryProgress / FIP-DB** — FIP registry/progress tracking plus academic historical dataset (partially open)
- **FoodMesh / Mesh Exchange** [record](examples/records/foodmesh.md) — B Corp running a proprietary Salesforce-based marketplace; Metro Vancouver contract for regional food recovery
- **Global Fishing Watch** [record](examples/records/global-fishing-watch.md) — Sector's flagship fishery-transparency initiative; flagship datasets CC-BY-NC-4.0 (the open-watchers paradox)
- **Global Open Data for Agriculture and Nutrition (GODAN)** [record](examples/records/godan.md) — GODAN addresses fragmented agricultural and nutrition data, weak coordination, and the need to make relevant data more accessible and usable.
- **Harmonized 2001-2023 sea-lice dataset** — 23-year curated dataset harmonizing DFO open data, operator sites and Salmon Coast Field Station's database (CC-BY)
- **HM Land Registry** [record](examples/records/hm-land-registry.md) — Publishes open source data and Price Paid Data; the reference model a land registry can open
- **ICAR Animal Data Exchange (ADE) standard** [record](examples/records/icar-ade.md) — Animal Data Exchange (ADE) JSON standard for livestock/milk-recording data (Apache-2.0, ADE Working Group)
- **Kallaama** [record](examples/records/kallaama.md) — Named ag speech model/dataset in the open-language-data layer
- **Land Matrix** [record](examples/records/land-matrix.md) — Independent open database of large-scale land deals (ILC, CDE Bern, GIGA governance)
- **Mozilla Common Voice** [record](examples/records/common-voice.md) — Mozilla open speech dataset; no verified farmer-facing deployment located
- **National Agricultural Scientific Data Infrastructure (China)** [record](examples/records/china-ag-data-infrastructure.md) — China operates a national system of scientific data centers to share research data as public infrastructure.
- **National Basic Science Data Center** — Cross-domain national scientific data center (2.7PB, 23 national standards, open-data portals)
- **Oceana / Oceana Canada** — NGO DNA-testing seafood-fraud reports (2018 Canadian dataset; 2024 meta-analysis)
- **Open Data Kit (ODK)** [record](examples/records/open-data-kit.md) — Open data-collection software; hybrid open-core + commercial hosted service
- **Open Food Facts** — Crowdsourced open food data commons proving data-level openness works at scale, bounded by the package
- **Open Foris (incl. SEPAL, Collect, Arena)** [record](examples/records/open-foris-sepal.md) — UN FAO open geospatial suite for satellite canopy monitoring, REDD+ reporting and EUDR compliance; MIT licensed
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed
- **Pacific Coast Food Waste Commitment (PCFWC)** — Public-private partnership (from the Pacific Coast Collaborative, 2016) producing the 'best-in-class' retail food-waste dataset with anonymized, gated reporting
- **Salmon Coast Field Station** — Maintains a GitHub sea-lice database contributing to the harmonized dataset
- **SAOS (Scottish Agricultural Organisation Society)** [record](examples/records/saos.md) — Farm data is siloed, locked into vendor platforms, and its value accrues outside farming.
- **SSURGO** — USDA open soil dataset paired with CanSIS
- **Standard Data Platform for Autonomous Agriculture** [record](examples/records/standard-data-platform-autonomous-agriculture.md) — Farm data commons / digital twin project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, Quantotech; open-source status unresolved
- **US EPA AgSTAR** [record](examples/records/epa-agstar-digester-database.md) — Named failed farm digesters in the AgSTAR Shutdown sheet (vendor bankruptcy, corrosion, poor buyback, knowledge lock-in, developer capture)
- **USDA NAL** — US National Agricultural Library operating Ag Data Commons
- **Wageningen University & Research (WUR)** — University publishing the Autonomous Greenhouse Challenge datasets (four DOI-published editions); Silke Hemming's greenhouse-horticulture group named as contact
- **WAGRI (Agricultural Data Collaboration Platform)** [record](examples/records/wagri.md) — Japan's WAGRI is a state-built agricultural data platform that links data and services through APIs so that farmers, machinery makers, ICT vendors, and service companies can collab
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** [record](examples/records/fast-lab-agrivoltaics.md) — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting sys
- **Wiki Agri Tech** [record](examples/records/wiki-agri-tech.md) — Open catalogue of agricultural digital tools; curated as a candidate record (ODbL data, CC BY-NC-SA editorial)

**Seed & biological material (10)**

- **AgroFIMS** — Open breeding/field data management system (paper lead)
- **Bioleft** [record](examples/records/bioleft.md) — Participatory open-source seed commons that adds open data to the seed commons; deliberate bridge between open source and agroecology
- **Community Seed Banks Association of Nepal (CSBAN)** [record](examples/records/community-seed-banks-nepal.md) — Links Nepal's community seed banks; developed online catalogue and 'Our Seed' mobile app
- **Navdanya** [record](examples/records/navdanya.md) — Founder-led seed-sovereignty movement with community seed banks, Seed Satyagraha and biopiracy documentation; CSB counts contested (111/150+ claimed vs 54 per Wikipedia)
- **Open Source Seed Initiative (OSSI)** [record](examples/records/open-source-seed-initiative.md) — Seed pledge (550+ varieties) marrying an open-source idiom to seed sovereignty; uptake without enforcement
- **OpenSourceSeeds / Open Source Seed Licence (OSSL)** [record](examples/records/opensourceseeds-ossl.md) — Contractual open seed licence extending obligations to derivatives and compatible with seed law; the enforceable counterpart to OSSI's pledge, with no enforcement case located
- **Potato Park** [record](examples/records/potato-park.md) — Indigenous-governed biocultural commons of ~600 native potato varieties under a collective community council, with CIP repatriation and a Crop Trust in-situ genetic reserve
- **SEARICE** [record](examples/records/searice.md) — Farmer-led regional seed-systems NGO (CONSERVE with 1,100+ rice varieties, participatory plant breeding, farmer field schools, anti-UPOV advocacy)
- **Sovereign Seeds** [record](examples/records/sovereign-seeds.md) — Project whose caution against translating Indigenous customary seed governance into open-licensing terms is cited in the corpus
- **UBC Farm Seed** [record](examples/records/ubc-farm-seed-catalogue.md) — Regional seed project with UBC anchor; coop governance unverified

**Knowledge & documentation (12)**

- **Compost for Good** [record](examples/records/compost-for-good.md) — Community-scale rotating drum composter with a free open design guide and operating manual (~$15K build vs $40-150K commercial; 35,000 lb/yr); moved under ANCA in 2024 with a HURD 
- **Farm Africa / NECPA** [record](examples/records/farm-africa-necpa-solar-dryer.md) — NGO publishing low-cost solar dryer open design document (licence unstated), distributed via trained artisans
- **Farm Hack** [record](examples/records/farm-hack.md) — Decentralized peer design-sharing network for farm tools; FAO agroecology hub record; candidate corpus record
- **International Biochar Initiative (IBI)** — Industry/standards body hosting the 'Open Source Biochar Technologies' aggregator page (multiple kiln designs, 32-page pyrolysis plant guidelines); an open-access collection, not a
- **Kon-Tiki kiln** [record](examples/records/kon-tiki-kiln.md) — Flame-curtain conical biochar kiln published open source; the most mature open-hardware case in the compost/soil cell, spread via open technology transfer
- **L'Atelier Paysan** [record](examples/records/latelier-paysan.md) — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026
- **Open Source Range (OSR) GPS Collar** [record](examples/records/osr-gps-collar.md) — Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization.
- **Sovereign Seeds** [record](examples/records/sovereign-seeds.md) — Project whose caution against translating Indigenous customary seed governance into open-licensing terms is cited in the corpus
- **The Recipes Project** — Open academic blog treating recipes as living records and vessels of memory/identity — the most substantial food-knowledge commons in the scan
- **UK Grain Lab** — Farmer-miller-baker-maltster knowledge commons
- **Wikipedia** — Largest open peer-produced knowledge commons; case study in participation gaps, systemic bias and AI-era extraction
- **Yorkshire Grain Alliance** — Alternative grain network (knowledge commons)

**Nothing open (contrast cases) (55)**

- **AgriWebb** — Proprietary grazing management vendor (closed counterpart)
- **AKVA** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **Alibaba ET Agricultural Brain** [record](examples/records/et-agricultural-brain.md) — Alibaba Cloud's ET Agricultural Brain (launched at The Computing Conference 2018, Shanghai) applies company-developed AI — visual recognition, voice recognition, real-time environm
- **All Farmers Code (全农码)** [record](examples/records/quannongma-all-farmers-code.md) — National ag DPI identity mini-program; proprietary/state-private PPP, closed source
- **Allflex (Merck)** — Proprietary livestock biometrics vendor (closed counterpart)
- **Arvo-Tec** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **BouMatic** — Fourth milking-robot vendor in the Ontario robot market
- **Brodflour** — Proprietary countertop flour mill manufacturer; closed incumbent counter-example
- **Canadian Grain Commission open grading data** [record](examples/records/cgc-grading-data.md) — Grain commerce needs a common grading language: what "1 CWRS" means, what tolerances apply, what moisture/protein/falling-number data says about a parcel.
- **Clipper** — Closed industrial seed-cleaning vendor (counterpart)
- **ColdSnap** [record](examples/records/coldsnap-coolbot.md) — Open cool-room refrigeration controller hack (MIT)
- **CoolBot** — Proprietary cool-room controller ($400) cited as closed counterpart
- **CowManager** — Proprietary livestock monitoring vendor (closed counterpart)
- **CSA K100:26** [record](examples/records/csa-k100-26.md) — First-of-its-kind national food loss and waste terminology and measurement standard, published April 2026; aligns with and Canada-localizes the FLW Protocol
- **Deere & Company (John Deere)** — Farm equipment OEM; July 2026 FTC settlement requiring dealer-equivalent repair resources for 10 years
- **DeLaval** — Milking-robot vendor (VMS, DelPro software); Peterborough training centre; its no-licence data-analysis repo is the corpus's not-open counter-example
- **DSG** — Proprietary commercial aquaculture feeding vendor (counterpart)
- **Flashfood** — Discount app connecting surplus grocery food to shoppers; the largest retailer-integrated discount-diversion operation in Canada; proprietary data
- **FoodMesh / Mesh Exchange** [record](examples/records/foodmesh.md) — B Corp running a proprietary Salesforce-based marketplace; Metro Vancouver contract for regional food recovery
- **Gallagher (eShepherd)** — Proprietary virtual fencing vendor (closed counterpart)
- **GEA** — Milking-robot vendor (FarmLogic software); nine dealerships in Ontario
- **Halter** — Proprietary virtual fencing vendor (closed counterpart)
- **HomeBiogas Ltd.** — Proprietary domestic/smallholder digester vendor (TASE: HMGS); patents to 2037
- **Hoogendoorn** — Proprietary climate computer vendor (closed control counterpart)
- **Inclusive Energy** — Co-developer of Sistema.bio's proprietary smart biogas meters
- **JBS ransomware attack (2021)** [record](examples/records/jbs-ransomware-2021.md) — **None.** Kill-floor scheduling, carcass tracking, payroll, and logistics are proprietary and centralized at corporate servers — the attack vector was exactly that centralization.
- **Land F/X** — Closed landscape CAD suite named as the proprietary alternative to open spatial design tools
- **Lely** — Milking-robot vendor (Astronaut line) selling, servicing and holding the data layer; six Lely Centres in Ontario; certified pre-owned programme (used A4+ from $80,000 USD)
- **LOOP Mission** [record](examples/records/loop-mission.md) — Closed incumbent upcycling operator whose buyer-reject stream the concept would compete with; example record
- **Lotek** — Proprietary wildlife/livestock telemetry vendor (closed counterpart)
- **MaiaGrazing** — Proprietary grazing management vendor (closed counterpart)
- **Maple Leaf Foods ransomware attack (2022)** [record](examples/records/maple-leaf-ransomware-2022.md) — **None.** ERP, plant scheduling, payroll, and supply-chain systems are proprietary and centralized.
- **Moocall** — Proprietary livestock sensor vendor (closed counterpart)
- **New American Stone Mills** — De facto standard craft stone-mill builder in North America; proprietary closed hardware (counter-example)
- **NEW Cooperative** [record](examples/records/new-cooperative-ransomware-2021.md) — Farm-supply & grain co-op hit by 2021 BlackMatter ransomware; paper-ticket workaround
- **Nofence** — Proprietary virtual fencing vendor (closed counterpart)
- **Odoo** — Proprietary ERP cited as closed counterpart in plant/software comparisons
- **OpenGrowBox** — Project whose non-commercial 'open' claim is one of the corpus's closed-but-honest counter-examples
- **OpenROV / Sofar Trident** — Underwater ROV: open-source project turned proprietary (Sofar) then discontinued — open-to-proprietary-to-dead counter-example
- **OS Farm** [record](examples/records/osfarm.md) — State-funded (France 2030 consortium) '100% open source' farm interoperability standard with commercial franchise/subscription deployment
- **Pachama** — Proprietary commercial MRV SaaS named as the closed alternative to Open Foris/SEPAL
- **PastureMap** — Proprietary grazing management vendor (closed counterpart)
- **Planet** — Proprietary satellite-analytics company named as a closed alternative
- **Second Harvest** [record](examples/records/second-harvest-app.md) — Canadian food charity selling licences of its rescue app (closed-and-monetized counter-example; 226M meals self-reported)
- **Sistema.bio** — B Corp with >50,000 digesters; proprietary IoT smart meters (with Inclusive Energy), PAYG lockout, Gold Standard credits
- **Skipper Otto** [record](examples/records/skipper-otto.md) — Largest Canadian CSF; B Corp (not a co-op) whose co-op-like feature is member prepayment
- **SMART (Spatial Monitoring and Reporting Tool)** [record](examples/records/smart-conservation.md) — Community monitors and enforcement patrols need standardized, analyzable records of what is seen, harvested, and threatened in the field — collected offline, synced intermittently,
- **smaXtec** — Proprietary cattle health monitoring vendor (closed counterpart)
- **Sobeys / Empire** [record](examples/records/sobeys-ransomware-2022.md) — Canadian grocery/pharmacy hit by 2022 ransomware (Black Basta suspected); pharmacies down 4 days
- **ThisFish Tally** — Proprietary AI seafood traceability SaaS; de-facto Canadian commercial traceability stack (counter-example)
- **Vectronic** — Proprietary telemetry vendor (closed counterpart)
- **Vence (Merck)** — Proprietary virtual fencing vendor (closed counterpart)
- **Verra** — Commercial carbon-registry/MRV actor named as a proprietary alternative
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** [record](examples/records/fast-lab-agrivoltaics.md) — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting sys
- **WinField United** — 2015 OADA collaboration announcement with no located conformance outcome; built own proprietary solution

### Governance & control (233 entries assigned)

Who holds structural control, as the corpus states it. Overlaps are expected (a farmer-governed entry can also be a cooperative; contested-claim marks entries whose control claim the corpus explicitly tracks as contested).

**Farmer-governed / farmer-led (17)**

- **AGRIS Co-operative** — Farmer-owned grain/input co-op that spun out AGRIS Solar
- **Community Agricultural Development Center** — Community-owned mobile slaughter / co-op abattoir network
- **Community Seed Banks Association of Nepal (CSBAN)** [record](examples/records/community-seed-banks-nepal.md) — Links Nepal's community seed banks; developed online catalogue and 'Our Seed' mobile app
- **Detroit People's Food Co-op** — Black-led, community-owned grocery cooperative; community-governed retail example
- **FarmStack** [record](examples/records/farmstack.md) — Apache-2.0 data-exchange Digital Public Good run by Digital Green
- **Grower Information Services Cooperative (GISC / GiSC)** [record](examples/records/gisc.md) — Data cooperative lead for follow-up pass (per Policy Review glossary)
- **Island Grown Farmers Cooperative (IGFC)** [record](examples/records/igfc-mobile-slaughter.md) — First USDA-FSIS-inspected mobile red-meat slaughter unit in the US (2002, with Lopez Community Land Trust)
- **LI-BIRD** — Research intermediary on community seed banks and farmers' rights
- **NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative)** [record](examples/records/napdc-ag-data-coalition.md) — US farmers' data is stored, shared, and monetised through vendor platforms that often claim perpetual rights.
- **Navdanya** [record](examples/records/navdanya.md) — Founder-led seed-sovereignty movement with community seed banks, Seed Satyagraha and biopiracy documentation; CSB counts contested (111/150+ claimed vs 54 per Wikipedia)
- **NWMB Community-Based Monitoring Network (CBMN)** [record](examples/records/nwmb-cbmn.md) — Community-owned harvester monitoring (MESAs, data clerks) feeding wildlife co-management; since 2012
- **OpenFence** [record](examples/records/openfence.md) — Open virtual fencing design (GPL-3.0, dormant candidate)
- **SAOS (Scottish Agricultural Organisation Society)** [record](examples/records/saos.md) — Farm data is siloed, locked into vendor platforms, and its value accrues outside farming.
- **SEARICE** [record](examples/records/searice.md) — Farmer-led regional seed-systems NGO (CONSERVE with 1,100+ rice varieties, participatory plant breeding, farmer field schools, anti-UPOV advocacy)
- **Shivagunj CSB** — Community seed bank doing seed production, local-variety conservation and income generation
- **Tillamook** — Farmer-owned creamery cooperative (1909); governance substrate
- **Torth y Tir** — Community-owned mill/bakery/grain project (community benefit society); ownership exemplar without licensed artefacts

**Indigenous nation / community governance (13)**

- **Arctic Co-operatives Limited** [record](examples/records/arctic-cooperatives.md) — Supports 30+ independent member-owned co-ops owned by Inuit, Dene and Métis members; retail food stores central in most communities
- **Ekvn-Yefolecv** — Ecovillage practising traditional lifeways, language immersion and collective land governance
- **First Nation Land Register (Framework Agreement)** — Statutory public register of interests in reserve lands under land codes (~200+ signatories)
- **FNLMA land codes / Framework Agreement (1996)** — Framework for First Nations control of reserve lands
- **Grand Council Treaty #3** — Anishinaabe government behind the Treaty #3 Regional Abattoir and Food Sovereignty Initiative
- **Haida Nation / BC 'Rising Tide' Title Lands Agreement** — 2024 agreement recognizing Haida Aboriginal title over Haida Gwaii
- **Karuk Tribe** — Tribe practising eco-cultural restoration: salmon fisheries, ecological calendars, cultural burning, river stewardship
- **Makivvik / Kativik Environmental Advisory Committee** — Indigenous organization whose 2020 article documents the Siqiniq heat-storage greenhouse work
- **Nisga'a Nation** — Modern treaty nation (2000) operating its own fee-simple land title office and register
- **North American Traditional Indigenous Food Systems (NĀTIFS)** — Recipient of over $139,000 in NCG food co-op donations
- **NWMB Community-Based Monitoring Network (CBMN)** [record](examples/records/nwmb-cbmn.md) — Community-owned harvester monitoring (MESAs, data clerks) feeding wildlife co-management; since 2012
- **Sogorea Te' Land Trust** — Urban land rematriation example (Shuumi Land Tax) in the land pillar
- **Tsilhqot'in Nation** — Judicially recognized Aboriginal title (2014) in the Canadian tenure spectrum

**Cooperative (55)**

- **AGRIS Solar Co-op** — Named as part of the cooperative aggregation examples in the energy scan
- **Agropur** — Dairy cooperative (~2,700 farmer-owners)
- **Alter Coop** — Park Slope-wave member-work supermarket named in the nearest-neighbour inventory
- **Arctic Co-operatives Limited** [record](examples/records/arctic-cooperatives.md) — Supports 30+ independent member-owned co-ops owned by Inuit, Dene and Métis members; retail food stores central in most communities
- **Bees Coop** — Member-work supermarket with a triple commitment (owner + worker + customer)
- **Bella Coola Co-op** — Small-town co-op grocery, primarily conventional foods
- **Bizz Coop** — Local food co-op (2020) formed via reprise collective
- **Breizhicoop** — French member-work co-op named in the VertigO study; non-Canadian example
- **Calgary Co-op** — Co-op ownership of a conventional operation; supplies from Pattison after defection
- **Canadian Worker Co-op Federation** — Federation noting management delegation in larger Canadian co-ops
- **Co-op Atlantic** — Defunct federation that once affiliated many Atlantic food co-ops; failure unexamined, a caution case
- **Co-op Cloud** — Shared configuration commons for collectively-run self-hosting (standardized deployment recipes); Foodsoft has a recipe; includes the Co-op Cloud Federation
- **Co-operatives and Mutuals Canada (CMC)** — Maintains the only comprehensive Canadian co-operative database powering the 'Co-operation across Canada' directory (~7,500 co-ops, DEI and procurement tagging)
- **Community Food Co-op (Bozeman)** — Named food co-op in the scan
- **Coop Agri-Énergie Warwick** [record](examples/records/coop-agri-energie-warwick.md) — Canada's first agricultural producer RNG cooperative (2021); 12 dairy farms + Coop Carbone; $12M plant, 50,000 t/yr
- **Coop Carbone** — Named as a partner alongside Coop Agri-Énergie Warwick in cooperative digester aggregation
- **Cornell Cooperative Extension** — US community-cannery tradition and guidance
- **Crystal Valley Co-op** — Grain/input co-op disrupted by September 2021 ransomware
- **CSN (Spanish cooperative supermarket network)** — Network of ~11 agroecological cooperative supermarkets in Spain; fixed-margin structural transparency and member work shifts
- **Detroit People's Food Co-op** — Black-led, community-owned grocery cooperative; community-governed retail example
- **DFA (Dairy Farmers of America)** — Dairy cooperative creamery (governance substrate)
- **Dorchester Community Food Co-op** — Community food co-op in development; participatory-grocery example
- **Dublin Food Co-op** — European food co-op named in the inventory
- **East End Food Co-op** — Community-focused store with local and fairly traded products
- **EQUS REA Ltd.** — Canada's largest member-owned Rural Electrification Association (26 municipal districts)
- **Essential Trading Co-op** — UK food co-op named in the inventory
- **Federated Co-operatives Limited (FCL)** — Mass co-op grocery operating as conventional retail in the Canadian survey
- **Federation of Alberta Gas Co-ops Ltd.** — World's largest rural gas co-op system (>100,000 km member-owned pipelines, >165,000 customers)
- **Federation of Southern Cooperatives** — Recipient of NCG food co-op solidarity funding
- **Fireweed Food Co-op** — Non-profit multi-stakeholder co-op (producer + supporter members); runs a Food Hub, the South Osborne Farmer's Market and an online storefront
- **Gay Lea** — Dairy cooperative (~1,200 members)
- **Grower Information Services Cooperative (GISC / GiSC)** [record](examples/records/gisc.md) — Data cooperative lead for follow-up pass (per Policy Review glossary)
- **Island Grown Farmers Cooperative (IGFC)** [record](examples/records/igfc-mobile-slaughter.md) — First USDA-FSIS-inspected mobile red-meat slaughter unit in the US (2002, with Lopez Community Land Trust)
- **Karma Co-op** — Canada's oldest food co-ops (founded 1972); working-member model with a documented 'closed system' membership struggle
- **Kootenay Co-op** — Member-owned natural foods co-op; one of the larger successful Canadian community co-ops
- **Kuujjuaq cooperative greenhouse** — Community greenhouse operating 20+ years on Kativik Regional Government funding; instrumented its own building and built a rock-bed thermal store raising the night floor ~7°C
- **L'Atelier Paysan** [record](examples/records/latelier-paysan.md) — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026
- **La Fédération des coopératives d'alimentation du Québec (FCAQ)** — Federation of 65–70 food co-operatives under the Manger coop banner and Réseau COOP; largest organized community-grocery co-op network in Canada
- **La Fédération des coopératives du Nouveau-Québec (FCNQ)** — Federation of co-operatives (founded 1967) whose member co-ops operate retail stores across Nunavik
- **Mariposa Food Cooperative** — Food-justice-focused food co-op; participatory-grocery example
- **Muskoka North Good Food Co-op** — Member-owned store with 1,700+ member-owners (single-sourced, unverified)
- **NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative)** [record](examples/records/napdc-ag-data-coalition.md) — US farmers' data is stored, shared, and monetised through vendor platforms that often claim perpetual rights.
- **Neighborhood Co-op** — Named food co-op in the scan
- **NEW Cooperative** [record](examples/records/new-cooperative-ransomware-2021.md) — Farm-supply & grain co-op hit by 2021 BlackMatter ransomware; paper-ticket workaround
- **OCGC (One Community Grocery Co-op)** — Community-led grocery project named in the participatory-grocery scan
- **Ontario Co-operative Association** — Maintains Ontario co-op directories
- **Padlei Co-op** — Arctic Co-op member store that sold its retail store in 2022 after 50+ years
- **Park Slope Food Coop** — Member-work grocery co-op that inspired the Québec SCP model
- **Réseau COOP** — Network banner under which FCAQ operates
- **Saskatoon Co-op** — Large urban member co-operative of the FCL system
- **SuperCoop** — European member-work food co-op named in the inventory
- **The Urban Co-op** — European food co-op named in the inventory
- **Tignish Credit Union** — Credit union spawned from the Tignish co-op (1937)
- **Tignish Fisheries Co-operative / Royal Star Foods** — Canada's first fishermen's co-op (incorporated 1925, co-op 1959); lobster purchasing/processing; model for the Antigonish Movement
- **Tillamook** — Farmer-owned creamery cooperative (1909); governance substrate

**Maintainer-led / individual (11)**

- **Alex Paly** — individual maker; OpenFence virtual-fencing project
- **ColdSnap** [record](examples/records/coldsnap-coolbot.md) — Open cool-room refrigeration controller hack (MIT)
- **danielneil (GitHub handle)** — individual developer of the Smart Worm Habitat concept
- **Kyle Gabriel** — single principal developer/maintainer of Mycodo
- **Mario Rothauer** — Single lead developer of FoodCoopShop (one-person open-core model with paid support)
- **Mycodo** [record](examples/records/mycodo.md) — GPL-3.0 open greenhouse/climate control software at maker scale (3,286 stars, actively maintained); peer-reviewed deployment in Bhutan; volunteer-maintained (fragility finding)
- **Open Source Range (OSR) GPS Collar** [record](examples/records/osr-gps-collar.md) — Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization.
- **OpenFence** [record](examples/records/openfence.md) — Open virtual fencing design (GPL-3.0, dormant candidate)
- **OpenSprinkler** [record](examples/records/opensprinkler.md) — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud
- **Vinduino** [record](examples/records/vinduino.md) — Individual grower's open sensing + irrigation control (GPL-3.0)
- **zappityzap (GitHub handle)** — individual developer of the compost sensor

**Nonprofit / NGO / foundation (34)**

- **AdkAction** — Non-profit host of the Compost for Good design guide and operating manual
- **Agrecol** — NGO behind OpenSourceSeeds' contractual seed licence (the enforceable-commons experiment)
- **AgriKit** — Canadian supplier of turnkey modular container processing and cold-storage facilities (CSA A277); grant-writing support for non-profits and Indigenous communities; no open-source c
- **Agroecology Commons** — Non-profit (2020-) doing knowledge-sharing, farmer-to-farmer skillshares, and seed and tool libraries; named org but small-scale
- **AgStack Foundation** — Linux Foundation project for open agricultural digital infrastructure (46 repos; Asset Registry, GeoIDs, INATrace, Pancake)
- **American Farmland Trust** — National nonprofit; Farms Under Threat analyses (300M+ acres) published freely without open-data licence
- **Arctic Research Foundation** — Foundation behind a Nunavut greenhouse project (located via media, less deeply verified)
- **Digital Green** — Nonprofit operating FarmStack
- **Earth Matter** — Compost-education non-profit publishing an Open Source Curriculum of DIY compost activities at its Compost Learning Center
- **FarmBot** [record](examples/records/farmbot.md) — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume
- **FarmStack** [record](examples/records/farmstack.md) — Apache-2.0 data-exchange Digital Public Good run by Digital Green
- **Flying Labs Network** [record](examples/records/flying-labs.md) — Localized drone/data/AI capacity network (WeRobotics nonprofit + independent local hubs); agriculture a named sector
- **Global Fishing Watch** [record](examples/records/global-fishing-watch.md) — Sector's flagship fishery-transparency initiative; flagship datasets CC-BY-NC-4.0 (the open-watchers paradox)
- **Ithaka Institut** — Swiss biochar research/non-profit; originator of the Kon-Tiki kiln and its open technology-transfer model; publishes the Biochar Journal
- **LiteFarm** [record](examples/records/litefarm.md) — Open farm-management software with farmer/researcher co-design, agroecology focus and multilingual support; candidate record
- **Mozilla Common Voice** [record](examples/records/common-voice.md) — Mozilla open speech dataset; no verified farmer-facing deployment located
- **NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative)** [record](examples/records/napdc-ag-data-coalition.md) — US farmers' data is stored, shared, and monetised through vendor platforms that often claim perpetual rights.
- **Oceana / Oceana Canada** — NGO DNA-testing seafood-fraud reports (2018 Canadian dataset; 2024 meta-analysis)
- **Open Agroecology Lab (REGOSH)** [record](examples/records/regosh-open-agroecology-lab.md) — Open-source digital infrastructure for agroecology (farmOS + SurveyStack + open sensing) with co-designed data governance; Shuttleworth-funded; activity documented 2018-2023, post-
- **Open Food Foundation** — Supports the OFN codebase ('Supported by the Open Food Foundation and a network of global affiliates'); set up 2012
- **Open Food Network (OFN)** — International not-for-profit whose open-source platform for community food enterprises is the closest existing test of the grocery concept's federation layer
- **Open Food Network Canada** [record](examples/records/open-food-network-canada.md) — Incorporated not-for-profit running the open-source local-food marketplace; open-agricultural-technology page links OpenTEAM, D:Food/Web, GOAT and the Data Food Consortium Open Sta
- **Open Source Ecology (OSE)** [record](examples/records/open-source-ecology.md) — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific
- **OpenEMS Association e.V.** — Non-profit association governing OpenEMS industrial microgrid control (EPL-2.0/AGPL-3.0)
- **OpenSourceSeeds / Open Source Seed Licence (OSSL)** [record](examples/records/opensourceseeds-ossl.md) — Contractual open seed licence extending obligations to derivatives and compatible with seed law; the enforceable counterpart to OSSI's pledge, with no enforcement case located
- **Pacific Coast Collaborative** — Public-private partnership of West Coast jurisdictions, food businesses and nonprofits from which PCFWC grew
- **Practical Action** — Appropriate-technology NGO; technical briefs lead
- **SEARICE** [record](examples/records/searice.md) — Farmer-led regional seed-systems NGO (CONSERVE with 1,100+ rice varieties, participatory plant breeding, farmer field schools, anti-UPOV advocacy)
- **Second Harvest** [record](examples/records/second-harvest-app.md) — Canadian food charity selling licences of its rescue app (closed-and-monetized counter-example; 226M meals self-reported)
- **Terre de Liens** [record](examples/records/terre-de-liens.md) — Citizen-shareholding farmland foncière (solidarity investment company + foundation + 19 regional associations); 37 new farms in 2025; model for a BC farmland trust proposal
- **WeClock** [record](examples/records/weclock.md) — UNI Global Union worker self-tracking app for hours, breaks, conditions; explicitly worker-held data
- **WeRobotics** — Nonprofit operating the Flying Labs Network (38 labs end 2025, self-reported)
- **Wikimedia Foundation** — Nonprofit steward of Wikipedia's infrastructure
- **WWF** — Conservation NGO; partner in the ReFED + WWF U.S. Food Waste Pact and co-maintainer of the SMART spatial-monitoring partnership

**State, public & intergovernmental (98)**

- **ACCC** — Regulator behind the Service Seeking fake-review penalty and guidance on spotting fake reviews
- **ACT Accelerator** — Federal programme through which up to $3.25M was delivered to CFIN for cleaner-technology companies
- **Agriculture and Agri-Food Canada (AAFC)** — Federal department whose figures (with the Canadian Dairy Information Centre) give the 9,048-farm dairy baseline; also source of a northern-greenhouse technologies tech report (unr
- **AgriStack / Digital Agriculture Mission** [record](examples/records/agristack.md) — India's ag DPI: farmer registries, geo-referenced village maps, crop sown registry, consent-manager architecture (₹2,817 crore budget)
- **Alaska DEC** — State environmental conservation department whose plan review ($400) and annual permit ($400) appear in the compliance checklist
- **Alberta Utilities Commission (AUC)** — Rule 007 interim agrivoltaic information requirements (2024-2025)
- **Atlantic Integrated Commercial Fisheries Initiative** — Indigenous community fishery tenure program; Canada's most durable community-held fishery tenure
- **BC Agricultural Land Commission** — Agrivoltaic pilot approvals opening a narrow regulatory lane
- **BC CDC** — Publisher of the Industry Food Donation Guidelines
- **BC Land Owner Transparency Registry (LOTR)** [record](examples/records/bc-lotr.md) — World-first public registry of beneficial ownership of land held through corporations/trusts/partnerships
- **BLM PLSS** — US federal cadastral grid published as open geodata (public domain)
- **British Columbia** — Regional/municipal organics bans; BC Ministry developed the Retail Food Waste Prevention Toolkit
- **Canada Energy Regulator** — Regulator corroborating the uniform Nunavut residential electricity rate (62 ¢/kWh, Nov 2022)
- **Canada's National School Food Program** — Federal programme (2024–) named in the institutional-procurement workstream
- **Canadian Centre for Cyber Centre** — National cyber centre; National Cyber Threat Assessment 2023-2024 flags ransomware against critical infrastructure
- **Canadian Dairy Information Centre** — Joint federal-provincial dairy statistics body (9,048 farms as of August 1, 2025)
- **Canadian Grain Commission (CGC)** — Publishes Official Grain Grading Guide and harvest/export quality data openly (as PDFs/spreadsheets)
- **Canadian Space Agency** — Satellite-data integration partner for SIKU (2025)
- **CCDABC** — National public institution anchoring Nepal's seed infrastructure
- **CFIA** — Canadian Food Inspection Agency: SFCR licensing fork (intra- vs interprovincial), PCP thresholds, safe-food guidance
- **CISA** — Source of the food-sector cybersecurity profile named in the A4 workstream
- **Corporations Canada** — Federal corporate database in the emerging beneficial-ownership regime
- **Department of Agriculture (Nepal)** — National public institution in Nepal's ag infrastructure
- **DFO (Fisheries and Oceans Canada)** — Publishes AIS vessel-density rasters, licence statistics, fish-health datasets on the federal Open Government portal (OGL-Canada)
- **ECCC** — Author of 'Taking stock: Reducing food loss and waste in Canada' (2019), the reference federal document
- **EU DGA** — EU data governance act framework under which Agdatahub is a registered intermediary
- **EU Regulation 2023/2842** — Revised Fisheries Control System: mandatory electronic recording for all EU vessels (2024-2026)
- **European Commission** — Source of the EU hygiene package flexibility provisions (Regulation EC 852/2004 Art. 13) cited as precedent for a community-processor tier
- **FAO (UN Food and Agriculture Organization)** — UN body whose 2020 scaling paper names 'open source data and technology' and whose 10-element agroecology framework (with HLPE) does not center open source; also operates the Open 
- **Farm Land Security Board (Saskatchewan)** — Approves farmland ownership exemptions (141/158 approved 2018-2022)
- **Farm to Food Bank Program (TEFAP)** — US programme authorized at $4M/year in the 2018 Farm Bill to cover harvest/transport costs of farm donations
- **FDA** — US regulator: FSMA 204 traceability rule and the 21 CFR 108/113/114 acidified/low-acid canned food registration and scheduled-process filing scheme
- **FINTRAC** — Federal agency with beneficial-ownership consultation duty (since Oct 2025)
- **Food Waste Reduction Challenge** — Canadian federal challenge program (LOOP an alumnus)
- **French Ministry of Agriculture** — Treats Aspexit's classification as the reference for nearly 2,000 digital tools on the French market
- **FTC** — US Federal Trade Commission; secured 2026 right-to-repair settlement with Deere and five states
- **Government of India** — State operator of AgriStack; asserts consent-based design
- **Halton Region Health Department** — Publisher of the food-premises construction/renovation guidance restating O. Reg. 493/17 requirements
- **HM Land Registry** [record](examples/records/hm-land-registry.md) — Publishes open source data and Price Paid Data; the reference model a land registry can open
- **House of Commons Agriculture Committee (Canada)** — Source of the 2-firms-≈85% Canadian beef concentration claim
- **IESO (Ontario)** — Ontario grid operator whose LT2 prime-farmland solar ban is recorded in the energy scan
- **Indian Land Registry System** — Reserve-lands registry not openly published at parcel level
- **ISED-ISDE Canada** — Federal body whose plain-language co-operative guidance documents one-member-one-vote governance
- **Kativik Regional Government** — Regional government that has funded the Kuujjuaq greenhouse project for 20+ years
- **MAFF** — Japan's agriculture ministry operating WAGRI
- **MAPAQ** — Source of best-practice guidance for donated food safety
- **MARA** — Ministry of Agriculture and Rural Affairs; national smart agriculture policy programme and MARA Cloud / Big Data Development Center
- **Measurement Canada** — Requires measuring devices used in trade to be inspected by an authorized service provider before use
- **MeitY** — Ministry behind Bhashini language DPI
- **Metro Vancouver** — Contracted FoodMesh to run the regional food recovery network
- **Middlesex-London Health Unit** — Publisher of 'Starting a Food Business' guidance for Ontario food premises
- **MIIT** — Ministry institution involved in national scientific data centers
- **Ministry of Agriculture (Nepal)** — Involved in the Nepal biochar field trials
- **MOE** — Ministry institution involved in national scientific data centers
- **MTES-MCT** — French ministry operating Monitorfish as open source
- **Municipality of Uithoorn** — Municipality party to the multi-party agreement for a data-center-fed district heat network serving De Kwakel–Kudelstaart greenhouse growers
- **NARC** — Nepal Agricultural Research Council; formal infrastructure and regulatory anchor
- **NARO** — Japanese ag research agency operating WAGRI with MAFF
- **National Food Security Strategy** — Federal strategy naming Controlled Environment Agriculture as a target sector
- **National Gene Bank (Nepal)** — National public institution for genetic resources
- **National Smart Agriculture Action Plan** — National smart agriculture policy action plan (reported via USDA FAS)
- **Nepal Seed Quality Control Center** — Hosts DESIS 2.0 national seed catalogue/certification platform
- **NOAA Fisheries** — US fisheries science agency; Stock Synthesis, OpenEM origin, EM automation white paper, Integrated Toolbox
- **Nova Scotia** — First Canadian province to ban landfill disposal of compostable organics (1998)
- **NRCan** — Natural Resources Canada; follow-up contact for the First Nation Land Register; funder of CBA market report and biofuel reports
- **Nutrition North Canada** — Federal programme; its northern community programs include culturally appropriate retail and nutrition education
- **NYSERDA** — State energy agency whose Greenhouse Energy Best Practices Guidebook supplies the kWh-per-unit benchmarking method the commons lacks
- **Odisha DAFE** — State ag department in the Ama KrushAI deployment
- **OMAFRA (Ontario Ministry of Agriculture, Food and Agribusiness)** — Ontario agriculture ministry; its inspection and guidance pages are named resources for small processors
- **Ontario** — Pilot jurisdiction; its Donation of Food Act 1994 and Food Safety Protocol 2019 are precedents in the regulatory-design document
- **Ontario Energy Board (OEB)** — Denied Enbridge Gas's Low-Carbon Voluntary Program ratepayer cost recovery (May 2025)
- **Ontario Meat Processor Capacity Improvement Initiative** — Ontario program ($7M, Nov 2021) responding to the meat-processing shortage
- **Oregon Metro** — Passed a business food-scrap separation requirement
- **Ottawa Public Health** — Notes Food Premise Business Licence not required for low-risk home-based foods
- **Owner-Operator / Fleet Separation / PIIFCAF policy** — Federal structural fisheries policy barring processor licence ownership
- **Pennsylvania Agricultural Surplus System** — Named as the model farm-to-food-bank programme
- **PM-KISAN** — Government scheme served by Bhashini's 11-language voice chatbot
- **Qulliq Energy Corporation (QEC)** — Territorial utility whose posted rates (62.08 ¢/kWh commercial, 74.94 ¢/kWh residential, Oct 2023) are the case's price-verified energy anchor
- **Québec** — Politique bioalimentaire 2018-2025 and Recyc-Québec action plans; repealed Fresh Fruit and Vegetable Regulations (2016)
- **Recyc-Québec** — Agency whose action plans target household and industry organics
- **Regional District of Nanaimo** — Requires grocery stores and institutional cafeterias to run food-waste diversion systems
- **SAWP / TFW programme** — Migrant farm labour programmes named as labour-layer research target
- **SCC (Standards Council of Canada)** — Notice of intent on the K100:26 food-loss-and-waste standard
- **SDE++** — Grant scheme funding the Uithoorn data-center heat network
- **Standing Committee on Agriculture and Agri-Food (Canada)** — Parliamentary committee whose 2021 'Room to Grow' report (chair Pat Finnigan; 57 witnesses, 18 recommendations, Rec 6 external regulatory review) anchors the regulatory-design docu
- **Statistics Canada** — Partner in the federal food-waste measurement framework
- **Timiskaming Health Unit** — States there is no fee for the Notice of Intent to Operate a Food Premises
- **Toronto Public Health** — Requires the food handler certificate for kitchen renters
- **TSSA** — Ontario agency that type-approves mobile food service equipment via field approval — precedent for type-approved modular facilities
- **UNEP** — Co-launcher of the FLW Standard (2016)
- **UNESCO** — Author of the 2021 Open Science Recommendation naming FAIR/CARE tensions
- **US EPA AgSTAR** [record](examples/records/epa-agstar-digester-database.md) — Named failed farm digesters in the AgSTAR Shutdown sheet (vendor bankruptcy, corrosion, poor buyback, knowledge lock-in, developer capture)
- **USDA** — Runs the organic certification verification website; tracks fraudulent certification claims
- **USDA / USDA ERS** — US department whose extension analysis (Tranel) and Charts of Note provide US robotic-milking economics used as contrast
- **USDA FAS** — US foreign ag service; source of report on China's National Smart Agriculture Action Plan
- **USDA NAL** — US National Agricultural Library operating Ag Data Commons
- **York Region Public Health** — Publisher of the Home-Based Food Business guidance whose low-risk list excludes preserves
- **Yukon territorial mobile abattoir** — Territorial-government mobile abattoir operating since 2006

**Corporate (10)**

- **Ekylibre** [record](examples/records/ekylibre.md) — Early participant in the Data Food Consortium
- **FarmBot** [record](examples/records/farmbot.md) — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume
- **Farmers Business Network (FBN)** [record](examples/records/fbn.md) — Venture-backed data platform marketed as farmer empowerment; 'farmer-owned' framing contested
- **Greg Austic** — Our Sci LLC, originators of PhotosynQ / MultispeQ; co-developer of the reflectometer
- **Invafresh** — Fresh retail platform selected by Federated Co-operatives Ltd.
- **OpenEPCIS (epcis-repository-ce)** [record](examples/records/openepcis.md) — Event-based supply-chain traceability at processing scale: FSMA 204 KDE/CTE records, meat and cattle traceability frameworks, and the coming EU digital product passport all need an
- **OpenSprinkler** [record](examples/records/opensprinkler.md) — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud
- **Our-Sci Reflectometer** [record](examples/records/our-sci-reflectometer.md) — Handheld open-hardware reflectometer (GPL-3.0) for soil organic carbon and crop nutrient density
- **Ray Wang (Dr. Ray Wang, Rayshobby LLC)** — founder of the OpenSprinkler commercial open-source business
- **Think Oggún (Oggún tractor)** [record](examples/records/oggun.md) — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware

**Contested claim (tracked) (13)**

- **AgriStack / Digital Agriculture Mission** [record](examples/records/agristack.md) — India's ag DPI: farmer registries, geo-referenced village maps, crop sown registry, consent-manager architecture (₹2,817 crore budget)
- **All Farmers Code (全农码)** [record](examples/records/quannongma-all-farmers-code.md) — National ag DPI identity mini-program; proprietary/state-private PPP, closed source
- **American Farm Bureau Federation** — 2023 MOU with Deere on dealer-equivalent repair documentation; contested by PIRG
- **CEADS / AgriDataSpace / FSDN** [record](examples/records/ceads.md) — EU data-space standards and federated governance for ag data
- **DFO aquaculture and sea-lice open reporting (BC datasets)** [record](examples/records/dfo-aquaculture-reporting.md) — Open-net pen salmon farming is Canada's most contested food-production controversy, and its environmental performance (sea lice, fish health, transfers, antimicrobial use, mortalit
- **Farmers Business Network (FBN)** [record](examples/records/fbn.md) — Venture-backed data platform marketed as farmer empowerment; 'farmer-owned' framing contested
- **MIT OpenAg (Open Agriculture Initiative)** [record](examples/records/openag-food-computer.md) — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited
- **Navdanya** [record](examples/records/navdanya.md) — Founder-led seed-sovereignty movement with community seed banks, Seed Satyagraha and biopiracy documentation; CSB counts contested (111/150+ claimed vs 54 per Wikipedia)
- **ONDC / Beckn** [record](examples/records/ondc.md) — Open commerce protocol and specifications, non-profit network operator
- **Sinong (神农, Shennong) — Agricultural Foundation Model** [record](examples/records/sinong.md) — Sinong is described as China's first open-source, agriculture-specific large language model: a vertical "agricultural brain" trained on agricultural knowledge to support farmers, a
- **Standard Data Platform for Autonomous Agriculture** [record](examples/records/standard-data-platform-autonomous-agriculture.md) — Farm data commons / digital twin project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, Quantotech; open-source status unresolved
- **Think Oggún (Oggún tractor)** [record](examples/records/oggun.md) — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware
- **Vinduino** [record](examples/records/vinduino.md) — Individual grower's open sensing + irrigation control (GPL-3.0)

### Lifecycle status (35 entries assigned)

Where the corpus explicitly states an operational status. Most entries carry no statement — a blank means *not stated*, not *active*; only entries whose record or role text says so appear here. This is the axis that decays: statuses were recorded as stated on 2026-11-15 and should be re-verified when the underlying records are re-checked.

**Active (explicitly stated) (13)**

- **AgIsoStack++** [record](examples/records/agisostack.md) — Open ISOBUS standard implementation; active community, deployment unverified, no identified backer
- **AquaCrop-OSPy** [record](examples/records/aquacrop-ospy.md) — Apache-2.0 Python implementation of UN FAO AquaCrop crop-water model
- **CoopCycle** [record](examples/records/coopcycle.md) — Federation of bike-delivery co-operatives that built and collectively govern their own platform under a protective licence restricted to co-operatives
- **Digger's Mirth** [record](examples/records/diggers-mirth.md) — Labour-layer record curated into the examples collection
- **FoodCoopShop** [record](examples/records/foodcoopshop.md) — AGPL-3.0 producer-direct ordering platform for food co-ops/farm shops; single-developer open-core (maintainer sells installation/support)
- **Foodsharing.de / foodsharing e.V.** [record](examples/records/foodsharing.md) — Grocery-surfaced candidate record, verified and curated into examples
- **Libre Solar** [record](examples/records/libre-solar.md) — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0
- **Mycodo** [record](examples/records/mycodo.md) — GPL-3.0 open greenhouse/climate control software at maker scale (3,286 stars, actively maintained); peer-reviewed deployment in Bhutan; volunteer-maintained (fragility finding)
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** [record](examples/records/openreactor-bioreactor.md) — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run.
- **OpenSprinkler** [record](examples/records/opensprinkler.md) — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud
- **Pioreactor** [record](examples/records/pioreactor.md) — Open-source Raspberry Pi bioreactor platform (MIT software, published hardware); only Canadian open fermentation artifact
- **Stock Synthesis 3 (SS3)** [record](examples/records/ss3.md) — NOAA's flagship age-structured stock-assessment engine (CC0, very active)
- **zappityzap/compost-sensor** [record](examples/records/compost-sensor.md) — Hobby Arduino+LoRa compost monitoring sensor (MIT, active 2024)

**Dormant (6)**

- **Leijtenss/Milking-Robot** — Milking-robot repo with no licence (therefore not open), dormant since 2019
- **Matt Reimer** [record](examples/records/matt-reimer.md) — grain farmer; built and documented an autonomous grain-cart system using open hardware and code
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed
- **OpenEM** — Open video analytics for fisheries electronic monitoring (MIT); grew from NOAA/DrivenData competition; dormant
- **OpenFence** [record](examples/records/openfence.md) — Open virtual fencing design (GPL-3.0, dormant candidate)
- **Smart-Worm-Habitat (danielneil)** [record](examples/records/smart-worm-habitat.md) — Continuous-flow worm bin design with sensors (GPL-3.0); concept-stage, no built units

**Proposal / plan-stage (5)**

- **Apoidea** — Open-source ERP proposal for worker co-ops; community post, not deployed
- **CGIAR / AgriLLM** [record](examples/records/cgiar-agrillm.md) — AgriLLM aims to provide agricultural AI tools grounded in scientific and local agricultural knowledge for smallholders, extension agents, researchers, and policymakers.
- **OS Farm** [record](examples/records/osfarm.md) — State-funded (France 2030 consortium) '100% open source' farm interoperability standard with commercial franchise/subscription deployment
- **SPUR Innovation** — Company announcing (June 2026) an 'ecological AI data centre' with a vertical farm stacked over the server farm; plan-stage, site changed from 25 to 14 acres
- **Thermalize** — Pre-pilot illustration pairing data centers with community food (self-labelled, not an actual facility)

**Defunct / archived (10)**

- **Butler Hospitality** — Ghost-kitchen company that dissolved
- **Co-op Atlantic** — Defunct federation that once affiliated many Atlantic food co-ops; failure unexamined, a caution case
- **Grower Information Services Cooperative (GISC / GiSC)** [record](examples/records/gisc.md) — Data cooperative lead for follow-up pass (per Policy Review glossary)
- **IBM Food Trust / OpenSC / Provenance** — Closed/defunct blockchain seafood pilots that did not yield a durable open stack
- **Kitchen United** — Ghost-kitchen pioneer that announced sale/closure of all locations and pivot to software (2023)
- **MIT OpenAg (Open Agriculture Initiative)** [record](examples/records/openag-food-computer.md) — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited
- **Open Ag Data Alliance (OADA)** [record](examples/records/oada.md) — Open interoperability/farmer data access standards alliance; active reference-server core maintained by Purdue OATS Center, adoption layer absent
- **OpenROV / Sofar Trident** — Underwater ROV: open-source project turned proprietary (Sofar) then discontinued — open-to-proprietary-to-dead counter-example
- **Sharing Excess** [record](examples/records/sharing-excess.md) — Food redistribution organization claiming 'fully open source'; no licence file on either public repo
- **Underground Meats** [record](examples/records/underground-meats-open-haccp.md) — Failed-infrastructure case: the only open HACCP document found (CC0), now dead-hosted

**Liquidated (1)**

- **L'Atelier Paysan** [record](examples/records/latelier-paysan.md) — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026

## Global / cross-border reach (23)

### People (3)

- **danielneil (GitHub handle)** — individual developer of the Smart Worm Habitat concept · *stated geography: "Hobby / home-scale vermicomposting; individual developer (danielneil); global via GitHub"* · [examples/records/smart-worm-habitat.md](examples/records/smart-worm-habitat.md)
- **Tim Foster** — leads AquaCrop-OSPy maintenance and FAO AquaCrop alignment · *stated geography: "International / academic, research, and agricultural water management institutions (developed at University of Manchester in collaboration with FAO, Water for Food Global Institute, and UN FAO)"* · → AquaCrop-OSPy · [examples/records/aquacrop-ospy.md](examples/records/aquacrop-ospy.md)
- **zappityzap (GitHub handle)** — individual developer of the compost sensor · *stated geography: "Hobby / home-scale compost monitoring; individual developer (zappityzap); global via GitHub"* · ⌗ open-hardware · [examples/records/compost-sensor.md](examples/records/compost-sensor.md)

### Organizations (2)

- **Open Ag Data Alliance (OADA)** — Open interoperability/farmer data access standards alliance; active reference-server core maintained by Purdue OATS Center, adoption layer absent · *stated geography: "international; precision agriculture and agricultural data exchange"* · [record](examples/records/oada.md) · ⌗ ag-data, standards · ◉ defunct/archived · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · +4 more
- **Open Source Seed Initiative (OSSI)** — Seed pledge (550+ varieties) marrying an open-source idiom to seed sovereignty; uptake without enforcement · *stated geography: "global; seed breeders, farmers, and seed companies"* · [record](examples/records/open-source-seed-initiative.md) · ⌗ seed commons · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · +3 more

### Networks (2)

- **GOSH** — Open science hardware movement (openhardware.science); Latin America projects documented (Arancio 2023) · *stated geography: "Global"* · ⌗ open-hardware · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Local Catch Network** — North America-wide CSF network (2011, UMaine/NAMA, ~500 members); public core-values charter and Seafood Finder · *stated geography: "North America"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)

### Projects & platforms (16)

- **AgIsoStack++** — Open ISOBUS standard implementation; active community, deployment unverified, no identified backer · *stated geography: "global; community-maintained open GitHub organisation"* · [record](examples/records/agisostack.md) · ⌗ standards, robotics-machines · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +1 more
- **Appropedia / Open Source Appropriate Technology (OSAT)** — Appropedia is a sustainability wiki and the de facto open-design commons for appropriate technology (AT): technologies designed with explicit attention to the environmental, ethical, cultural, social, political, and economic context of the communities they serve — including agricultural tools, water pumps, solar dryers, and processing equipment for smallholder farmers. · *stated geography: "global; designed for the developing world / Global South"* · [record](examples/records/appropedia-osat.md) · [examples/records/appropedia-osat.md](examples/records/appropedia-osat.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **AquaCrop-OSPy** — Apache-2.0 Python implementation of UN FAO AquaCrop crop-water model · *stated geography: "International / academic, research, and agricultural water management institutions (developed at University of Manchester in collaboration with FAO, Water for Food Global Institute, and UN FAO)"* · [record](examples/records/aquacrop-ospy.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **ArduPilot** — Open autopilot firmware (GPL-3.0); largest community case, not farmer-governed · *stated geography: "global; community-developed open autopilot"* · [record](examples/records/ardupilot.md) · ⌗ robotics-machines · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md) · [research/2026-08-programme-briefing.md](research/2026-08-programme-briefing.md)
- **CGIAR / AgriLLM** — AgriLLM aims to provide agricultural AI tools grounded in scientific and local agricultural knowledge for smallholders, extension agents, researchers, and policymakers. · *stated geography: "Global South orientation; multilateral agricultural research system"* · [record](examples/records/cgiar-agrillm.md) · ⌗ language-ai · ◉ proposal-stage · [examples/records/cgiar-agrillm.md](examples/records/cgiar-agrillm.md) · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · +4 more
- **ColdSnap** — Open cool-room refrigeration controller hack (MIT) · *stated geography: "Global / smallholder market garden, fruit/vegetable cold chain, and local food hub communities"* · [record](examples/records/coldsnap-coolbot.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **CORE-POS** — GPL-2.0 community-run POS for co-op groceries; the existing open artifact that could carry a northern co-op retail layer · *stated geography: "global; community-maintained point-of-sale for food co-ops and small grocery"* · [record](examples/records/core-pos.md) · ⌗ co-op grocery · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **farmOS** — Producer-owned open farm-management information system used in agroecological digital infrastructure (e.g. by REGOSH) · *stated geography: "international"* · [record](examples/records/farmos.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Land Matrix** — Independent open database of large-scale land deals (ILC, CDE Bern, GIGA governance) · *stated geography: "global (low- and middle-income-country focus; ~100 countries covered)"* · [record](examples/records/land-matrix.md) · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Mozilla Common Voice** — Mozilla open speech dataset; no verified farmer-facing deployment located · *stated geography: "global; multilingual and community-led"* · [record](examples/records/common-voice.md) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/field-guide-open-source-dossier.md](research/field-guide-open-source-dossier.md) · [research/sources/README.md](research/sources/README.md)
- **Open Food Network (OFN)** — International not-for-profit whose open-source platform for community food enterprises is the closest existing test of the grocery concept's federation layer · *stated geography: "20+ countries"* · ⌗ co-op grocery · [ROADMAP.md](ROADMAP.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md) · +4 more
- **Open Foris (incl. SEPAL, Collect, Arena)** — UN FAO open geospatial suite for satellite canopy monitoring, REDD+ reporting and EUDR compliance; MIT licensed · *stated geography: "Global (UN FAO platform; 180+ countries stated)"* · [record](examples/records/open-foris-sepal.md) · [examples/records/open-foris-sepal.md](examples/records/open-foris-sepal.md) · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **SMART (Spatial Monitoring and Reporting Tool)** — Community monitors and enforcement patrols need standardized, analyzable records of what is seen, harvested, and threatened in the field — collected offline, synced intermittently, and usable by non-specialists. · *stated geography: "global (60+ countries; built and maintained by a partnership of WWF, WCS, ZSL, Frankfurt Zoological Society, North Carolina Zoo, Panthera, Re:wild and others)"* · [record](examples/records/smart-conservation.md) · [examples/records/smart-conservation.md](examples/records/smart-conservation.md)
- **Smart-Worm-Habitat (danielneil)** — Continuous-flow worm bin design with sensors (GPL-3.0); concept-stage, no built units · *stated geography: "Hobby / home-scale vermicomposting; individual developer (danielneil); global via GitHub"* · [record](examples/records/smart-worm-habitat.md) · ⌗ open-hardware · ◉ dormant · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **WeClock** — UNI Global Union worker self-tracking app for hours, breaks, conditions; explicitly worker-held data · *stated geography: "International (UNI Global Union — global union federation of service workers, 150 countries); no agricultural deployment located"* · [record](examples/records/weclock.md) · [ROADMAP.md](ROADMAP.md) · [grocery/labour-layer.md](grocery/labour-layer.md) · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **zappityzap/compost-sensor** — Hobby Arduino+LoRa compost monitoring sensor (MIT, active 2024) · *stated geography: "Hobby / home-scale compost monitoring; individual developer (zappityzap); global via GitHub"* · [record](examples/records/compost-sensor.md) · ⌗ open-hardware · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)

## Canada (215)

### People (8)

- **Brian Tischler** — grain farmer; originator of AgOpenGPS (open precision agriculture) · *stated geography: "Alberta, Canada / international open agricultural technology community"* · [record](examples/records/brian-tischler.md) · → AgOpenGPS · ⌗ robotics-machines · [ROADMAP.md](ROADMAP.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · +2 more
- **Hunt family** — Beef-farmer owners/operators of Farmersville Community Abattoir · *stated geography: "Athens ON (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Luke Silinski** — Farm-connected youth who created Ag Tech STEAM coding education for rural youth; open-source participation unverified · *stated geography: "Alberta"* · → Ag Tech STEAM · [research/canadian-farmers-open-source-community-scan-2026-08.md](research/canadian-farmers-open-source-community-scan-2026-08.md)
- **Matt Reimer** — grain farmer; built and documented an autonomous grain-cart system using open hardware and code · *stated geography: "Manitoba, Canada / open hardware and agricultural robotics communities"* · [record](examples/records/matt-reimer.md) · ⌗ open-hardware, robotics-machines · ◉ dormant · [ROADMAP.md](ROADMAP.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · +3 more
- **Nick Weinstock / BOTL Farm** — Farm operator publishing open-source farm projects (Arduino chicken-coop controller, portable shelter designs, farm SOPs, farmOS use); international lead · *stated geography: "Canada not established"* · ⌗ open-hardware · [research/canadian-farmers-open-source-community-scan-2026-08.md](research/canadian-farmers-open-source-community-scan-2026-08.md)
- **O'Rourke** — MP who announced the up-to-$3.25M federal funding for CFIN · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Pat Finnigan** — Chair of the Standing Committee on Agriculture and Agri-Food for the Room to Grow report (April 2021) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md)
- **Roth family** — Farm family prototyping a Class E mobile abattoir · *stated geography: "BC (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)

### Organizations (108)

- **AgriKit** — Canadian supplier of turnkey modular container processing and cold-storage facilities (CSA A277); grant-writing support for non-profits and Indigenous communities; no open-source component · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **AGRIS Co-operative** — Farmer-owned grain/input co-op that spun out AGRIS Solar · *stated geography: "Ontario (Canada)"* · ⌗ co-op grocery, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **AGRIS Solar Co-operative** — Farmer solar co-op (1,000+ farmers, 20 Solar Gardens) spun out of AGRIS Co-operative, managed with GECO by Red Jar Energy Partners · *stated geography: "Chatham-Kent / Southwestern Ontario (Canada)"* · → AGRIS Co-operative · ⌗ co-op grocery, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Agropur** — Dairy cooperative (~2,700 farmer-owners) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Arctic Co-operatives Limited** — Supports 30+ independent member-owned co-ops owned by Inuit, Dene and Métis members; retail food stores central in most communities · *stated geography: "northern Canada — 30+ independent member-owned multi-purpose co-ops across Nunavut, Northwest Territories, and Yukon"* · [record](examples/records/arctic-cooperatives.md) · ⌗ co-op grocery · [ROADMAP.md](ROADMAP.md) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · +3 more
- **Arctic Research Foundation** — Foundation behind a Nunavut greenhouse project (located via media, less deeply verified) · *stated geography: "Nunavut (Canada)"* · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md)
- **Banques alimentaires Québec** — Runs retail recovery programs with the consolidated chains · *stated geography: "Québec"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Bella Coola Co-op** — Small-town co-op grocery, primarily conventional foods · *stated geography: "Bella Coola, BC"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Bizz Coop** — Local food co-op (2020) formed via reprise collective · *stated geography: "Québec"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Brodflour** — Proprietary countertop flour mill manufacturer; closed incumbent counter-example · *stated geography: "Toronto (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Calgary Co-op** — Co-op ownership of a conventional operation; supplies from Pattison after defection · *stated geography: "Calgary"* · ⌗ co-op grocery · [grocery/synthesis.md](grocery/synthesis.md)
- **Canadian Biogas Association** — Industry association whose NRCan-funded 2026 report purged shut-down digesters (43 counted) · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Canadian Centre for the Study of Co-operatives (University of Saskatchewan)** — Convened the 2022 80-person big ag-data symposium on cooperative data governance · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Canadian Worker Co-op Federation** — Federation noting management delegation in larger Canadian co-ops · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **CDRQ** — Body through whose 'reprise collective' mechanism Bizz Coop was formed · *stated geography: "Québec"* · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Cermaq Canada** — Norwegian-owned salmon farming multinational · *stated geography: "BC (Canada)"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **CloudKitchens** — Ghost-kitchen operator with documented layoffs, low occupancy and closures · *stated geography: "US (operates a Toronto location)"* · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Co-op Atlantic** — Defunct federation that once affiliated many Atlantic food co-ops; failure unexamined, a caution case · *stated geography: "Atlantic provinces (Canada)"* · ⌗ co-op grocery · ◉ defunct/archived · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Co-operative Retailing System (CRS)** — Large Canadian consumer co-op system with standard board-governance structure · ⌗ co-op grocery · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **Co-operatives and Mutuals Canada (CMC)** — Maintains the only comprehensive Canadian co-operative database powering the 'Co-operation across Canada' directory (~7,500 co-ops, DEI and procurement tagging) · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **Community Safety Knowledge Alliance (CSKA)** — Research partner in the CSA food value chain cybersecurity work · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Consolidated Bottle** — Canadian packaging distributor stocking food jars; quote required · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Coop Agri-Énergie Warwick** — Canada's first agricultural producer RNG cooperative (2021); 12 dairy farms + Coop Carbone; $12M plant, 50,000 t/yr · *stated geography: "Canada — Warwick, Centre-du-Québec (`Coop Agri-Énergie Warwick`); Toronto, Ontario (`ZooShare Biogas Co-operative`); Chatham-Kent / Southwestern Ontario (`AGRIS Solar Co-operative`)"* · [record](examples/records/coop-agri-energie-warwick.md) · [ROADMAP.md](ROADMAP.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Coop Carbone** — Named as a partner alongside Coop Agri-Énergie Warwick in cooperative digester aggregation · *stated geography: "Montreal, QC (Canada)"* · → Coop Agri-Énergie Warwick · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **CSA Group** — Standards body that published CSA K100:26, the first national food loss and waste terminology/measurement standard (April 2026) · ⌗ standards · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Dairy Farmers of Canada** — National producer organization with farm-size statistics (107-cow average, 2025) and the research check-off proposed as the open-platform funding vehicle · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **East End Food Co-op** — Community-focused store with local and fairly traded products · *stated geography: "Vancouver, BC"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **EQUS REA Ltd.** — Canada's largest member-owned Rural Electrification Association (26 municipal districts) · *stated geography: "Alberta (Canada)"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Farm Credit Canada / AgExpert** — Farm-record software and data-governance actor; not presumed open · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Farmersville Community Abattoir Ltd. (Leeds & Grenville)** — Provincially inspected abattoir owned and run by the Hunt family · *stated geography: "Athens ON (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **FAST Research Group (uwo-fast)** — Western University open-hardware research group; org-level licensing policy (LICENSING.md) and multiple records · ⌗ open-hardware · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **Federated Co-operatives Limited (FCL)** — Mass co-op grocery operating as conventional retail in the Canadian survey · *stated geography: "Western Canada (headquartered Saskatoon)"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **Federation of Alberta Gas Co-ops Ltd.** — World's largest rural gas co-op system (>100,000 km member-owned pipelines, >165,000 customers) · *stated geography: "Alberta (Canada)"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Fireweed Food Co-op** — Non-profit multi-stakeholder co-op (producer + supporter members); runs a Food Hub, the South Osborne Farmer's Market and an online storefront · *stated geography: "Winnipeg, Manitoba"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **FISH SAFE** — Vessel safety organization; could not be substantiated as harvester co-op (misattributed lead) · *stated geography: "BC (Canada)"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Flashfood** — Discount app connecting surplus grocery food to shoppers; the largest retailer-integrated discount-diversion operation in Canada; proprietary data · *stated geography: "Canada (Canadian-founded; live in 900+ Loblaw stores)"* · ⌗ food-waste · [grocery/labour-layer.md](grocery/labour-layer.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Food Banks Canada** — Runs retail recovery programs with the consolidated chains; frames work around culturally appropriate solutions · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Food Secure Canada** — Published the 2024 op-ed noting Arctic Co-op member economics were 'stable or declining' · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **FoodMesh / Mesh Exchange** — B Corp running a proprietary Salesforce-based marketplace; Metro Vancouver contract for regional food recovery · *stated geography: "Vancouver, British Columbia; western and central Canada; Metro Vancouver regional contract"* · [record](examples/records/foodmesh.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md) · [upcycling/economics.md](upcycling/economics.md) · +1 more
- **Fort Simpson Métis Development Corp** — Indigenous development corporation running bison processing · *stated geography: "NWT (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Gay Lea** — Dairy cooperative (~1,200 members) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Genesis Land Conservancy** — Cited as Canada's strongest agricultural land trust model with most direct farmer governance · *stated geography: "SK (Canada)"* · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Grain Discovery** — Canadian grain origination/traceability SaaS; closed, counter-example · *stated geography: "Guelph ON (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Grieg BC** — Norwegian-owned salmon farming multinational · *stated geography: "BC (Canada)"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Growing North** — Community organization behind the 42-ft geodesic 'Green Igloo' dome ($164K in 2015; >$250K raised by 2016): solar-thermal design holding 30°C above outside, hydroponic towers (~2,000 plants), seven months on solar gain · *stated geography: "Naujaat (Nunavut, Canada)"* · ⌗ cea, energy-byproducts · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md) · +1 more
- **GS1 Canada** — Industry body behind the Can-Trace standards effort · → GS1 · ⌗ standards · [grocery/research/traceability.md](grocery/research/traceability.md)
- **ICAR Animal Data Exchange (ADE) standard** — Animal Data Exchange (ADE) JSON standard for livestock/milk-recording data (Apache-2.0, ADE Working Group) · *stated geography: "international (10+ countries implementing; Canadian governance participation)"* · [record](examples/records/icar-ade.md) · ⌗ ag-data, standards · [ROADMAP.md](ROADMAP.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · [examples/records/icar-ade.md](examples/records/icar-ade.md) · +1 more
- **Island Grown Farmers Cooperative (IGFC)** — First USDA-FSIS-inspected mobile red-meat slaughter unit in the US (2002, with Lopez Community Land Trust) · *stated geography: "Washington State, US (San Juan Islands / Puget Sound / Skagit Valley); the reference model cited in Canadian mobile-abattoir work"* · [record](examples/records/igfc-mobile-slaughter.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Johnson Shoyama Graduate School of Public Policy** — Co-convened the ag-data symposium; Canadian ag data-policy research · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Karma Co-op** — Canada's oldest food co-ops (founded 1972); working-member model with a documented 'closed system' membership struggle · *stated geography: "Toronto, Ontario (Annex)"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/suggested-next-targets.md](grocery/research/suggested-next-targets.md) · +1 more
- **Kootenay Co-op** — Member-owned natural foods co-op; one of the larger successful Canadian community co-ops · *stated geography: "Nelson, BC"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **La Fédération des coopératives d'alimentation du Québec (FCAQ)** — Federation of 65–70 food co-operatives under the Manger coop banner and Réseau COOP; largest organized community-grocery co-op network in Canada · *stated geography: "Québec and New Brunswick"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **La Fédération des coopératives du Nouveau-Québec (FCNQ)** — Federation of co-operatives (founded 1967) whose member co-ops operate retail stores across Nunavik · *stated geography: "Nunavik (Northern Québec)"* · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **Loblaw** — Grocery chain hosting Flashfood in 900+ stores; reports 21M+ pounds diverted (self-reported) · ⌗ co-op grocery · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **LOOP Mission** — Closed incumbent upcycling operator whose buyer-reject stream the concept would compete with; example record · *stated geography: "Montreal, Quebec; national retail distribution; US expansion"* · [record](examples/records/loop-mission.md) · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md)
- **Loop Resource** — Canadian farmer-facing diversion program moving grocery surplus to farms as livestock feed (1.66M kg/yr self-reported); contests the buyer-reject stream · ⌗ food-waste · [upcycling/concept.md](upcycling/concept.md) · [upcycling/economics.md](upcycling/economics.md) · [upcycling/tensions.md](upcycling/tensions.md)
- **Makivvik / Kativik Environmental Advisory Committee** — Indigenous organization whose 2020 article documents the Siqiniq heat-storage greenhouse work · *stated geography: "Nunavik"* · ⌗ energy-byproducts · [cea/research/energy-design-commons-inventory.md](cea/research/energy-design-commons-inventory.md)
- **Manning Canning Kitchens (MCK Inc.)** — Toronto preserves company operating five individually rented certified kitchens ($22–38.50/hr) with a preserves-shaped equipment list; the closest Ontario precedent · *stated geography: "Leaside, Toronto, Ontario"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Migrant Worker Community Program** — Migrant worker advocacy organization · *stated geography: "Leamington"* · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **Mohawk College IDEAWORKS** — Applied research using Sentinel-2 public satellite imagery for weekly farm-level crop-health monitoring · *stated geography: "Ontario (Canada)"* · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Moisson Montréal** — Runs retail recovery programs with the consolidated chains · *stated geography: "Montréal, Québec"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Mowi Canada West** — Norwegian-owned salmon farming multinational dominating BC production · *stated geography: "BC (Canada)"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Muskoka North Good Food Co-op** — Member-owned store with 1,700+ member-owners (single-sourced, unverified) · *stated geography: "Huntsville, ON"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **National Zero Waste Council** — Aggregator of the Guidelines for Food Donations across the regulatory landscape · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **NWMB (Nunavut Wildlife Management Board)** — Runs the Community-Based Monitoring Network · *stated geography: "Nunavut"* · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **Off the Hook CSF** — Atlantic Canada's first community-supported fishery (2010); fisher-owned cooperative selling shares direct · *stated geography: "Digby County, NS (Canada)"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OFN Canada** — Canadian instance of the Open Food Network; source of the Open Source / Open Standards / Data Sovereignty framing and the access-vs-control distinction · *stated geography: "Canada (launched 2017, most active in Ontario)"* · → Open Food Network (OFN) · → Data Food Consortium (Open Standard) · ⌗ standards · [ROADMAP.md](ROADMAP.md) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Ontario Co-operative Association** — Maintains Ontario co-op directories · *stated geography: "Ontario"* · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **Ontario Dairy Research Centre** — University of Guelph AMS research fleet; named as the candidate pilot host in the who-to-ask list · *stated geography: "Ontario, Canada"* · [ROADMAP.md](ROADMAP.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Ontario Farmland Trust** — Easement-based farmland trust; 821 acres secured in 2024 · *stated geography: "Ontario (Canada)"* · ⌗ land-tenure · [ROADMAP.md](ROADMAP.md) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Ontario Federation of Agriculture (OFA)** — Supports dual-use agrivoltaics only when agricultural production remains primary · *stated geography: "Ontario (Canada)"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Open Food Network Canada** — Incorporated not-for-profit running the open-source local-food marketplace; open-agricultural-technology page links OpenTEAM, D:Food/Web, GOAT and the Data Food Consortium Open Standard · *stated geography: "Canada; connected to the global Open Food Network community"* · [record](examples/records/open-food-network-canada.md) · ⌗ co-op grocery, standards · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Oshawa Power** — ZooShare Limited Partnership partner · *stated geography: "Ontario (Canada)"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Ottawa Valley Food Co-operative (OVFC)** — Internet-native co-op (incorporated 2007 under Ontario's Co-operative Corporations Act) whose ordering system is a purchasing pipeline, not an information environment · *stated geography: "Ontario"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **Pacific Biological Station** — DFO research station where sdmTMB/pbs-assess were built · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Padlei Co-op** — Arctic Co-op member store that sold its retail store in 2022 after 50+ years · *stated geography: "Arviat"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Protein Industries Canada** — Partner in AI grain-QA pilot with Grain Discovery/DTN · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Q-Scale** — Company announcing a data center with adjacent residual-heat greenhouses (claims 2,800 t small fruit and 80,000 t tomatoes/yr, unverified) · *stated geography: "Lévis (Québec, Canada)"* · ⌗ cea, energy-byproducts · [ROADMAP.md](ROADMAP.md) · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Quadra Island Pantry** — Startup-stage food co-op in the Grocery Story development pipeline · *stated geography: "Quadra Island, BC"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Rainy River District Regional Abattoir** — Community-built abattoir (opened 2010) that neared closure in 2024 over volunteer-board burnout · *stated geography: "Emo ON (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Rainy River Meats** — Retail/processing outlet attached to the Rainy River abattoir · *stated geography: "Emo ON (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Resolute** — Pulp-mill operator hosting the Toundra Greenhouse industrial-symbiosis pairing · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Richards Packaging** — Canadian packaging distributor stocking food jars; catalogue-only, quote required · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Salbro** — Canadian packaging distributor stocking food jars; quote required · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Salmon Coast Field Station** — Maintains a GitHub sea-lice database contributing to the harmonized dataset · *stated geography: "BC (Canada)"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Saputo** — Leads the concentrated Canadian dairy processing market (per IBISWorld) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Saskatoon Co-op** — Large urban member co-operative of the FCL system · *stated geography: "Saskatoon"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **SCP** — Québec 'supermarchés coopératifs et participatifs' — Park Slope/La Louve-inspired member-work grocery co-ops with documented participation tensions · *stated geography: "Québec"* · ⌗ co-op grocery · [grocery/synthesis.md](grocery/synthesis.md)
- **Seacliff Energy** — Anaerobic-digester operator integrated with a 300,000 ft² organic greenhouse · *stated geography: "Leamington, Ontario (Canada)"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Second Harvest** — Canadian food charity selling licences of its rescue app (closed-and-monetized counter-example; 226M meals self-reported) · *stated geography: "Toronto, Ontario, Canada; national operations; licensing offered internationally"* · [record](examples/records/second-harvest-app.md) · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md)
- **Sik-E-Dakh** — Indigenous-led community abattoir response (governance only, no open assets) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Skipper Otto** — Largest Canadian CSF; B Corp (not a co-op) whose co-op-like feature is member prepayment · *stated geography: "Canada (Vancouver origin; members and pickups across BC, AB, ON, QC)"* · [record](examples/records/skipper-otto.md) · [ROADMAP.md](ROADMAP.md) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Sobeys / Empire** — Canadian grocery/pharmacy hit by 2022 ransomware (Black Basta suspected); pharmacies down 4 days · *stated geography: "Canada (national; ~1,500 stores — Sobeys, Safeway, IGA, Foodland, Farm Boy, Lawtons, Needs)"* · [record](examples/records/sobeys-ransomware-2022.md) · ⌗ co-op grocery, resilience · [ROADMAP.md](ROADMAP.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Sovereign Seeds** — Project whose caution against translating Indigenous customary seed governance into open-licensing terms is cited in the corpus · *stated geography: "Canada; national Indigenous-led initiative"* · [record](examples/records/sovereign-seeds.md) · ⌗ seed commons · [ROADMAP.md](ROADMAP.md) · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **SPUR Innovation** — Company announcing (June 2026) an 'ecological AI data centre' with a vertical farm stacked over the server farm; plan-stage, site changed from 25 to 14 acres · *stated geography: "Fergus / Woolwich, Ontario (Canada)"* · ⌗ cea · ◉ proposal-stage · [ROADMAP.md](ROADMAP.md) · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Syzl** — Shared-kitchen booking platform whose published GTA rates ($22/hr starting) are the Ontario benchmark · *stated geography: "Toronto, Ontario"* · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Teranet** — Commercial lock on Ontario parcel data · *stated geography: "Ontario (Canada)"* · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Terre de Liens** — Citizen-shareholding farmland foncière (solidarity investment company + foundation + 19 regional associations); 37 new farms in 2025; model for a BC farmland trust proposal · *stated geography: "France (19 regional associations; the reference model cited in Canadian land-access proposals)"* · [record](examples/records/terre-de-liens.md) · ⌗ land-tenure · [ROADMAP.md](ROADMAP.md) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **ThisFish Tally** — Proprietary AI seafood traceability SaaS; de-facto Canadian commercial traceability stack (counter-example) · *stated geography: "Vancouver BC (Canada)"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Tignish Credit Union** — Credit union spawned from the Tignish co-op (1937) · *stated geography: "PEI (Canada)"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Tignish Fisheries Co-operative / Royal Star Foods** — Canada's first fishermen's co-op (incorporated 1925, co-op 1959); lobster purchasing/processing; model for the Antigonish Movement · *stated geography: "PEI (Canada)"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Toronto Zoo** — Manure supplier to ZooShare's digester · *stated geography: "Toronto (Canada)"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Toundra Greenhouse** — Greenhouse at the Resolute pulp mill using heat + CO₂ (8.5 ha of a planned 34 ha agrothermic industrial park) · ⌗ cea, energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **TricorBraun Canada** — Packaging supplier whose published bottle list price ($0.74) is the Canadian benchmark · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **University of Guelph** — University hosting the Ontario Dairy Research Centre; also source of an unread Nunavut community-greenhouse thesis · *stated geography: "Ontario (Canada)"* · ⌗ cea · [ROADMAP.md](ROADMAP.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · +1 more
- **University of Waterloo** — School of Environment, Enterprise and Development produced the 2024 dairy-robotics case study used as the adoption, labour, retrofit and service-network evidence base · *stated geography: "Ontario, Canada (study context)"* · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Western University** — Home of the FAST Research Group and its Open Source Ball Mill · *stated geography: "London, Ontario, Canada (Western University FAST Research Group); designs published globally"* · [record](examples/records/fast-dram-distributed-manufacturing.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **ZooShare Biogas Co-operative Inc.** — Canada's first community-bond-financed biogas co-op (800+ members, >$5M bonds); Toronto Zoo manure + GTA food waste; 500 kW · *stated geography: "Toronto, ON (Canada)"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)

### Networks (1)

- **Canadian Food Innovation Network (CFIN)** — National member-based food-innovation organisation (est. 2021; 26.3K+ members/followers; $23.7M awarded across 130+ projects; five Regional Innovation Directors); resource and connection layer, not an evidence source · *stated geography: "Canada (national member network)"* · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)

### Projects & platforms (38)

- **Ag Tech STEAM** — Coding education program for rural youth founded by Luke Silinski · *stated geography: "Alberta"* · [research/canadian-farmers-open-source-community-scan-2026-08.md](research/canadian-farmers-open-source-community-scan-2026-08.md)
- **AgOpenGPS** — Open RTK autosteer project whose ~€1,660-2,190 build vs $10,000+ commercial is the corpus's ~78% open-hardware cost-cut precedent; tree-row integration named as a gap · ⌗ open-hardware, robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · +5 more
- **Agri-food Data Canada** — Canadian data initiative named as candidate event invitee · *stated geography: "Canada; University of Guelph and research-centre ecosystem"* · [record](examples/records/agrifood-data-canada.md) · [ROADMAP.md](ROADMAP.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **Arviat Wellness Centre greenhouse** — Community greenhouse operating since 2013 (grow boxes then greenhouse) · *stated geography: "Arviat (Nunavut, Canada)"* · ⌗ cea · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md)
- **BC Farmland Trust proposal** — White paper (Apr 2025) proposing a Terre de Liens-style citizen-shareholding vehicle · *stated geography: "BC (Canada)"* · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Can-Trace** — Historical industry-led (GS1 Canada) effort to develop national traceability standards · ⌗ standards · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Canadian Grain Commission open grading data** — Grain commerce needs a common grading language: what "1 CWRS" means, what tolerances apply, what moisture/protein/falling-number data says about a parcel. · *stated geography: "Canada (federal; internationally referenced grading authority)"* · [record](examples/records/cgc-grading-data.md) · [examples/records/cgc-grading-data.md](examples/records/cgc-grading-data.md)
- **CanSIS / National Soil Database** — Fully open Canadian soil data (OGL-Canada), pairing with SSURGO · *stated geography: "Canada (federal; research use international)"* · [record](examples/records/cansis.md) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **CSA K100:26** — First-of-its-kind national food loss and waste terminology and measurement standard, published April 2026; aligns with and Canada-localizes the FLW Protocol · *stated geography: "Canada (National Standard of Canada — Domestic)"* · [record](examples/records/csa-k100-26.md) · ⌗ standards · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · +2 more
- **CSA T201 — Cybersecurity Guidance for the Food Value Chain** — Canada's food system is undergoing rapid digitalization (precision ag, cloud-connected machinery, automated processing, online retail) while CSA Group's research programme with the Community Safety Knowledge Alliance (CSKA) found the food value chain **largely not implementing cybersecurity standards** — a critical-infrastructure sector with consumer-scale cyber maturity. · *stated geography: "Canada — National Standard of Canada (domestic); scoped to the whole agri-food value chain"* · [record](examples/records/csa-t201-food-cybersecurity.md) · ⌗ standards, resilience · [examples/records/csa-t201-food-cybersecurity.md](examples/records/csa-t201-food-cybersecurity.md)
- **Data Food Consortium (DFC Standard)** — Open data interoperability standard for short food supply chains; ontology, taxonomies, prototype, connector tool; v2.0.0 released Feb 2026 · *stated geography: "France (original project; implementations in Australia, Canada, France, UK)"* · ⌗ co-op grocery, standards · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **DFO aquaculture and sea-lice open reporting (BC datasets)** — Open-net pen salmon farming is Canada's most contested food-production controversy, and its environmental performance (sea lice, fish health, transfers, antimicrobial use, mortality) is the evidence base of that debate. · *stated geography: "Canada (federal; BC site-level, national aggregate)"* · [record](examples/records/dfo-aquaculture-reporting.md) · ⌗ fisheries · [examples/records/dfo-aquaculture-reporting.md](examples/records/dfo-aquaculture-reporting.md)
- **fiboa and EuroCrops** — Agricultural field boundaries — the geometry beneath every farm program, subsidy, and remote-sensing analysis — are state-held administrative data that neither North American government publishes. · *stated geography: "international (fiboa datasets span 30+ countries; EuroCrops 16 EU countries) — **Canada absent from both**"* · [record](examples/records/fiboa-eurocrops.md) · [examples/records/fiboa-eurocrops.md](examples/records/fiboa-eurocrops.md)
- **Framework Agreement on First Nation Land Management (land-code regime)** — Indian Act land administration — 44 land-related sections administered by the federal Crown — leaves First Nations governing their own reserve lands under someone else's law. · *stated geography: "Canada (224 signatory First Nations; growing)"* · [record](examples/records/framework-agreement-land-codes.md) · ⌗ land-tenure · [examples/records/framework-agreement-land-codes.md](examples/records/framework-agreement-land-codes.md)
- **Harvest Food Hub (Harvest Algoma)** — Northern food logistics platform; licence unverified — verification lead · *stated geography: "Northern Ontario (Sault Ste. Marie / Algoma District origin); expanding toward food banks across Canada (CTV, 2025-11)"* · [record](examples/records/harvest-food-hub.md) · ⌗ co-op grocery · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **Holos — Agriculture and Agri-Food Canada** — Holos is a whole-farm greenhouse-gas emissions model and decision-support software project associated with Agriculture and Agri-Food Canada. · *stated geography: "Canada; federal public research and extension infrastructure"* · [record](examples/records/holos.md) · [examples/records/holos.md](examples/records/holos.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **Inuvik Community Greenhouse** — 1999 hockey-arena-conversion community greenhouse running cost-recovery since 1999 (174 plots at $50/year plus a commercial second floor whose sales offset costs) · *stated geography: "Inuvik (NWT, Canada)"* · ⌗ cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md)
- **Iqaluit Community Greenhouse** — 1,000 ft² community greenhouse (opened 2007) with $6,000/yr operating costs covered by donations; switched to communal operation in 2014 · *stated geography: "Iqaluit (Nunavut, Canada)"* · ⌗ cea · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md)
- **JBS ransomware attack (2021)** — **None.** Kill-floor scheduling, carcass tracking, payroll, and logistics are proprietary and centralized at corporate servers — the attack vector was exactly that centralization. · *stated geography: "multinational — US, **Canada (Brooks, AB)**, Australia; world's largest meat processor (~one-fifth of global meat supply)"* · [record](examples/records/jbs-ransomware-2021.md) · ⌗ resilience · [examples/records/jbs-ransomware-2021.md](examples/records/jbs-ransomware-2021.md)
- **Kuujjuaq cooperative greenhouse** — Community greenhouse operating 20+ years on Kativik Regional Government funding; instrumented its own building and built a rock-bed thermal store raising the night floor ~7°C · *stated geography: "Kuujjuaq (Nunavik, Canada)"* · ⌗ cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md) · +1 more
- **LiteFarm** — Open farm-management software with farmer/researcher co-design, agroecology focus and multilingual support; candidate record · *stated geography: "Canada-connected / international"* · [record](examples/records/litefarm.md) · [ROADMAP.md](ROADMAP.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Maple Leaf Foods ransomware attack (2022)** — **None.** ERP, plant scheduling, payroll, and supply-chain systems are proprietary and centralized. · *stated geography: "Canada (Mississauga, ON HQ; ~14,000 employees; Canada, US, Asia)"* · [record](examples/records/maple-leaf-ransomware-2022.md) · ⌗ resilience · [examples/records/maple-leaf-ransomware-2022.md](examples/records/maple-leaf-ransomware-2022.md)
- **NWMB Community-Based Monitoring Network (CBMN)** — Community-owned harvester monitoring (MESAs, data clerks) feeding wildlife co-management; since 2012 · *stated geography: "Nunavut, Canada (started 2012 in Arviat, Cambridge Bay, Sanikiluaq; one community added per spring)"* · [record](examples/records/nwmb-cbmn.md) · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **OFN Canada Québec federated-data portal project** — Collaborative project building a shared open-source web portal for food hubs and producers to federate data (OFN Canada partner) · *stated geography: "Québec"* · ⌗ co-op grocery · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Open Source Ball Mill (FAST)** — AC/PV-powered ball mill, complete CAD, HardwareX-published, CC-BY-SA-4.0 (non-food-grade) · ⌗ open-hardware, energy-byproducts · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **OpenAgriS3D** — FAST Research Group open-hardware record · *stated geography: "London, Ontario, Canada (Western University FAST Research Group); parametric design source published globally on GitHub"* · [record](examples/records/openagris3d.md) · ⌗ open-hardware · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **openreactor & open-source-bioreactor — FAST open bioprocess instrumentation** — Small-scale fermentation, bioprocessing and thermal work (melting, curing) needs reproducible control of temperature, mixing, dosing and water chemistry, plus a record of each run. · *stated geography: "London, Ontario, Canada (Western University FAST Research Group); software published openly, hardware design source on GitHub"* · [record](examples/records/openreactor-bioreactor.md) · ⌗ open-hardware, energy-byproducts · [examples/records/openreactor-bioreactor.md](examples/records/openreactor-bioreactor.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **Pioreactor** — Open-source Raspberry Pi bioreactor platform (MIT software, published hardware); only Canadian open fermentation artifact · *stated geography: "Toronto, Ontario, Canada; international community (forum, third-party research builds); lab/bench scale"* · [record](examples/records/pioreactor.md) · ⌗ open-hardware · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md)
- **SAMA (Solar Alone Multi-objective Advisor) — FAST open microgrid sizing tool** — Designing a farm- or community-scale hybrid renewable microgrid (PV, battery, generator, grid-tie) requires techno-economic sizing — choosing component capacities that minimise lifetime cost under a site's load profile, weather, degradation and utility billing structure. · *stated geography: "London, Ontario, Canada (Western University FAST Research Group); developed for global use"* · [record](examples/records/sama.md) · ⌗ energy-byproducts · [examples/records/sama.md](examples/records/sama.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **Sauve ta bouffe** — Community fridge directory — the informal/participatory diversion end · *stated geography: "Québec"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **sdmTMB / pbs-assess** — Flagship Canadian open fisheries software (GPL-3); spatiotemporal index standardization built at DFO's Pacific Biological Station; active · [record](examples/records/sdmtmb.md) · ⌗ fisheries · [examples/records/sdmtmb.md](examples/records/sdmtmb.md) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Siqiniq** — Heat re-uptake and storage greenhouse project (1999 onward): 300 ft² solar-heated gardens producing into the fall; peer-reviewed thermal-storage paper behind an Elsevier paywall · *stated geography: "Nunavik"* · ⌗ cea, energy-byproducts · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/energy-design-commons-inventory.md](cea/research/energy-design-commons-inventory.md)
- **Standard Data Platform for Autonomous Agriculture** — Farm data commons / digital twin project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, Quantotech; open-source status unresolved · *stated geography: "Canada; partners and grower validation in British Columbia, Alberta, and Saskatchewan"* · [record](examples/records/standard-data-platform-autonomous-agriculture.md) · → University of Liège (DEAL / TERRA) · → Verge Ag · → Terramera · → Simon Fraser University · ⌗ ag-data, standards · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Sturgeon Lake Agrivoltaics** — 13 MWac sheep-grazing agrivoltaic project on non-prime land · *stated geography: "Kawartha Lakes, Ontario (Canada)"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **UBC Farm Seed** — Regional seed project with UBC anchor; coop governance unverified · *stated geography: "British Columbia, Canada"* · [record](examples/records/ubc-farm-seed-catalogue.md) · ⌗ co-op grocery, seed commons · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **UBC Seed Hub** — University seed hub identified in seed-sovereignty research; high-sensitivity governance lead · *stated geography: "British Columbia (Canada)"* · ⌗ seed commons · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Western University FAST Lab / WIRED open-source agrivoltaics hardware** — Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting systems carry high capital premiums that raise levelized cost of electricity (LCOE) for farmers. · *stated geography: "London, Ontario, Canada (Western University); design commons published globally via Appropedia and Open Science Framework (OSF)"* · [record](examples/records/fast-lab-agrivoltaics.md) · ⌗ open-hardware, energy-byproducts · [examples/records/fast-lab-agrivoltaics.md](examples/records/fast-lab-agrivoltaics.md)
- **Western University FAST Lab open scientific instrumentation (OSSEI)** — Scientific instruments — analytical balances, turbidity meters, magnetic stirrer hotplates, gas/environmental monitors — are priced for funded laboratories, not for under-resourced research, teaching, field water-quality work, or small operations. · *stated geography: "London, Ontario, Canada (Western University FAST Research Group); designs published globally, some with independent use"* · [record](examples/records/fast-ossei-instrumentation.md) · ⌗ open-hardware · [examples/records/fast-ossei-instrumentation.md](examples/records/fast-ossei-instrumentation.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)

### Governments & public bodies (57)

- **ACT Accelerator** — Federal programme through which up to $3.25M was delivered to CFIN for cleaner-technology companies · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Agriculture and Agri-Food Canada (AAFC)** — Federal department whose figures (with the Canadian Dairy Information Centre) give the 9,048-farm dairy baseline; also source of a northern-greenhouse technologies tech report (unread) · → Holos — Agriculture and Agri-Food Canada · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · +1 more
- **Alberta Utilities Commission (AUC)** — Rule 007 interim agrivoltaic information requirements (2024-2025) · *stated geography: "Alberta (Canada)"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Atlantic Integrated Commercial Fisheries Initiative** — Indigenous community fishery tenure program; Canada's most durable community-held fishery tenure · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **BC Agricultural Land Commission** — Agrivoltaic pilot approvals opening a narrow regulatory lane · *stated geography: "BC (Canada)"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **BC CDC** — Publisher of the Industry Food Donation Guidelines · *stated geography: "British Columbia"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **BC Land Owner Transparency Registry (LOTR)** — World-first public registry of beneficial ownership of land held through corporations/trusts/partnerships · *stated geography: "British Columbia, Canada (first and only registry of its kind in Canada)"* · [record](examples/records/bc-lotr.md) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **British Columbia** — Regional/municipal organics bans; BC Ministry developed the Retail Food Waste Prevention Toolkit · *stated geography: "British Columbia, Canada"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Canada Energy Regulator** — Regulator corroborating the uniform Nunavut residential electricity rate (62 ¢/kWh, Nov 2022) · ⌗ energy-byproducts · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md)
- **Canada's National School Food Program** — Federal programme (2024–) named in the institutional-procurement workstream · [ROADMAP.md](ROADMAP.md)
- **Canadian Centre for Cyber Centre** — National cyber centre; National Cyber Threat Assessment 2023-2024 flags ransomware against critical infrastructure · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Canadian Dairy Information Centre** — Joint federal-provincial dairy statistics body (9,048 farms as of August 1, 2025) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Canadian Grain Commission (CGC)** — Publishes Official Grain Grading Guide and harvest/export quality data openly (as PDFs/spreadsheets) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Canadian Space Agency** — Satellite-data integration partner for SIKU (2025) · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **CFIA** — Canadian Food Inspection Agency: SFCR licensing fork (intra- vs interprovincial), PCP thresholds, safe-food guidance · [grocery/research/traceability.md](grocery/research/traceability.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [upcycling/economics.md](upcycling/economics.md) · +1 more
- **Corporations Canada** — Federal corporate database in the emerging beneficial-ownership regime · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **DFO (Fisheries and Oceans Canada)** — Publishes AIS vessel-density rasters, licence statistics, fish-health datasets on the federal Open Government portal (OGL-Canada) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **ECCC** — Author of 'Taking stock: Reducing food loss and waste in Canada' (2019), the reference federal document · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Farm Land Security Board (Saskatchewan)** — Approves farmland ownership exemptions (141/158 approved 2018-2022) · *stated geography: "SK (Canada)"* · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **FINTRAC** — Federal agency with beneficial-ownership consultation duty (since Oct 2025) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **First Nation Land Register (Framework Agreement)** — Statutory public register of interests in reserve lands under land codes (~200+ signatories) · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **FNLMA land codes / Framework Agreement (1996)** — Framework for First Nations control of reserve lands · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Food Waste Reduction Challenge** — Canadian federal challenge program (LOOP an alumnus) · ⌗ food-waste · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Grand Council Treaty #3** — Anishinaabe government behind the Treaty #3 Regional Abattoir and Food Sovereignty Initiative · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Halton Region Health Department** — Publisher of the food-premises construction/renovation guidance restating O. Reg. 493/17 requirements · *stated geography: "Ontario"* · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **House of Commons Agriculture Committee (Canada)** — Source of the 2-firms-≈85% Canadian beef concentration claim · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **IESO (Ontario)** — Ontario grid operator whose LT2 prime-farmland solar ban is recorded in the energy scan · *stated geography: "Ontario"* · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Indian Land Registry System** — Reserve-lands registry not openly published at parcel level · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **ISED-ISDE Canada** — Federal body whose plain-language co-operative guidance documents one-member-one-vote governance · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **Kativik Regional Government** — Regional government that has funded the Kuujjuaq greenhouse project for 20+ years · *stated geography: "Nunavik (funds the Kuujjuaq greenhouse)"* · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/rung-b-cost-spine.md](cea/research/rung-b-cost-spine.md)
- **MAPAQ** — Source of best-practice guidance for donated food safety · *stated geography: "Québec"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Measurement Canada** — Requires measuring devices used in trade to be inspected by an authorized service provider before use · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Metro Vancouver** — Contracted FoodMesh to run the regional food recovery network · *stated geography: "Metro Vancouver (Canada)"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Middlesex-London Health Unit** — Publisher of 'Starting a Food Business' guidance for Ontario food premises · *stated geography: "Ontario"* · [upcycling/economics.md](upcycling/economics.md)
- **National Food Security Strategy** — Federal strategy naming Controlled Environment Agriculture as a target sector · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md)
- **Nova Scotia** — First Canadian province to ban landfill disposal of compostable organics (1998) · *stated geography: "Nova Scotia, Canada"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **NRCan** — Natural Resources Canada; follow-up contact for the First Nation Land Register; funder of CBA market report and biofuel reports · [ROADMAP.md](ROADMAP.md) · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Nutrition North Canada** — Federal programme; its northern community programs include culturally appropriate retail and nutrition education · [ROADMAP.md](ROADMAP.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **OMAFRA (Ontario Ministry of Agriculture, Food and Agribusiness)** — Ontario agriculture ministry; its inspection and guidance pages are named resources for small processors · *stated geography: "Ontario"* · [ROADMAP.md](ROADMAP.md) · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md) · [upcycling/research/research-mapping.md](upcycling/research/research-mapping.md)
- **Ontario** — Pilot jurisdiction; its Donation of Food Act 1994 and Food Safety Protocol 2019 are precedents in the regulatory-design document · *stated geography: "Ontario, Canada"* · → OMAFRA (Ontario Ministry of Agriculture, Food and Agribusiness) · → IESO (Ontario) · → Ontario Energy Board (OEB) · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · +2 more
- **Ontario Energy Board (OEB)** — Denied Enbridge Gas's Low-Carbon Voluntary Program ratepayer cost recovery (May 2025) · *stated geography: "Ontario (Canada)"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Ontario Meat Processor Capacity Improvement Initiative** — Ontario program ($7M, Nov 2021) responding to the meat-processing shortage · *stated geography: "Ontario (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Ottawa Public Health** — Notes Food Premise Business Licence not required for low-risk home-based foods · *stated geography: "Ottawa, Ontario"* · [upcycling/economics.md](upcycling/economics.md)
- **Owner-Operator / Fleet Separation / PIIFCAF policy** — Federal structural fisheries policy barring processor licence ownership · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Qulliq Energy Corporation (QEC)** — Territorial utility whose posted rates (62.08 ¢/kWh commercial, 74.94 ¢/kWh residential, Oct 2023) are the case's price-verified energy anchor · *stated geography: "Nunavut"* · ⌗ energy-byproducts · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md) · +1 more
- **Québec** — Politique bioalimentaire 2018-2025 and Recyc-Québec action plans; repealed Fresh Fruit and Vegetable Regulations (2016) · *stated geography: "Québec, Canada"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Recyc-Québec** — Agency whose action plans target household and industry organics · *stated geography: "Québec"* · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Regional District of Nanaimo** — Requires grocery stores and institutional cafeterias to run food-waste diversion systems · *stated geography: "British Columbia"* · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **SCC (Standards Council of Canada)** — Notice of intent on the K100:26 food-loss-and-waste standard · ⌗ standards · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Standing Committee on Agriculture and Agri-Food (Canada)** — Parliamentary committee whose 2021 'Room to Grow' report (chair Pat Finnigan; 57 witnesses, 18 recommendations, Rec 6 external regulatory review) anchors the regulatory-design document · [ROADMAP.md](ROADMAP.md)
- **Statistics Canada** — Partner in the federal food-waste measurement framework · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Timiskaming Health Unit** — States there is no fee for the Notice of Intent to Operate a Food Premises · *stated geography: "Ontario"* · [upcycling/research/ontario-regulatory-path.md](upcycling/research/ontario-regulatory-path.md)
- **Toronto Public Health** — Requires the food handler certificate for kitchen renters · *stated geography: "Toronto, Ontario"* · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **TSSA** — Ontario agency that type-approves mobile food service equipment via field approval — precedent for type-approved modular facilities · *stated geography: "Ontario"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **US EPA AgSTAR** — Named failed farm digesters in the AgSTAR Shutdown sheet (vendor bankruptcy, corrosion, poor buyback, knowledge lock-in, developer capture) · *stated geography: "United States (US EPA AgSTAR, national facility census) and international (IWA ADM1 Python open-science simulation ecosystem); contrasted directly with Canada's closed industry survey record"* · [record](examples/records/epa-agstar-digester-database.md) · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [grocery/synthesis.md](grocery/synthesis.md) · +1 more
- **York Region Public Health** — Publisher of the Home-Based Food Business guidance whose low-risk list excludes preserves · *stated geography: "York Region, Ontario"* · [upcycling/research/ontario-regulatory-path.md](upcycling/research/ontario-regulatory-path.md)
- **Yukon territorial mobile abattoir** — Territorial-government mobile abattoir operating since 2006 · *stated geography: "Yukon (Canada)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)

### Funders (3)

- **Food Innovation Challenge** — CFIN programme: themed collaborative consortia of $1M–$4M; out of scale for a micro or community plant · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Innovation Booster** — CFIN programme: $20K–$200K projects up to 50% (max $100K); post-farm-gate; primary production explicitly ineligible · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Local Food Infrastructure Fund** — Federal fund ($50M, Budget 2019) whose Small Scale Projects stream funds community kitchens and equipment but not compliance costs; Standing Committee Rec 4 asked to expand it · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)

## United States (108)

### People (15)

- **Amol Deshpande** — co-founder of Farmers Business Network (2014) · *stated geography: "United States (national; expanding internationally)"* · → Farmers Business Network (FBN) · [examples/records/fbn.md](examples/records/fbn.md)
- **Andrew Thaler** — marine ecologist; community project lead, 'Oceanography for Everyone' · *stated geography: "international (community workshops US + BVI; design usable anywhere)"* · → OpenCTD · ⌗ fisheries · [examples/records/openctd.md](examples/records/openctd.md)
- **Bill Braun** — farmer who requested the grain-bike design (initiated 2014) · *stated geography: "US Northeast (Massachusetts); plans freely buildable anywhere"* · → Grain Bikes (bicycle-powered grain processing machines) · [examples/records/grain-bikes.md](examples/records/grain-bikes.md)
- **Billy Tiller** — cotton farmer; founder of the Grower Information Services Cooperative · *stated geography: "United States (Texas-origin, national); claimed worldwide producer reach"* · → Grower Information Services Cooperative (GISC / GiSC) · [examples/records/gisc.md](examples/records/gisc.md)
- **Caleb Harper** — founded OpenAg (2015) · *stated geography: "United States (MIT Media Lab, Cambridge MA); global maker/education reach claimed"* · → MIT OpenAg (Open Agriculture Initiative) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Emily Vogler** — cooperator; produced the grain-bike plans · *stated geography: "US Northeast (Massachusetts); plans freely buildable anywhere"* · → Grain Bikes (bicycle-powered grain processing machines) · [examples/records/grain-bikes.md](examples/records/grain-bikes.md)
- **Greg Austic** — Our Sci LLC, originators of PhotosynQ / MultispeQ; co-developer of the reflectometer · *stated geography: "United States (Ann Arbor, MI / Bionutrient Institute) / international agroecology, soil health, and regenerative crop research networks"* · → Our Sci (our-sci) · ⌗ open-hardware · [examples/records/our-sci-reflectometer.md](examples/records/our-sci-reflectometer.md)
- **Horace Clemmons** — co-founder of CleBer LLC; software-industry standards pioneer · *stated geography: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"* · → CleBer LLC · [examples/records/oggun.md](examples/records/oggun.md)
- **Jan Yoder** — designed and built the grain bikes; SARE project leader; grant recipient Woodmetalcanvas · *stated geography: "US Northeast (Massachusetts); plans freely buildable anywhere"* · → Grain Bikes (bicycle-powered grain processing machines) · [examples/records/grain-bikes.md](examples/records/grain-bikes.md)
- **Kyle Gabriel** — single principal developer/maintainer of Mycodo · *stated geography: "United States (developer in Tennessee) / international maker, hobby, research, and small-commercial horticulture community"* · → Mycodo · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Marcin Jakubowski** — founder of Open Source Ecology (founded 2003), Factor e Farm · *stated geography: "United States (Factor e Farm, Maysville, Missouri); independent OSE Germany chapter"* · → Open Source Ecology (OSE) · [examples/records/open-source-ecology.md](examples/records/open-source-ecology.md)
- **Olaf Bertram-Nothnagel** — filmmaker covering the grain bikes · *stated geography: "US Northeast (Massachusetts); plans freely buildable anywhere"* · [examples/records/grain-bikes.md](examples/records/grain-bikes.md)
- **Ray Wang (Dr. Ray Wang, Rayshobby LLC)** — founder of the OpenSprinkler commercial open-source business · *stated geography: "United States (Amherst, MA) / global maker, urban agriculture, landscaping, greenhouse, and smallholder irrigation community"* · → OpenSprinkler · [examples/records/opensprinkler.md](examples/records/opensprinkler.md)
- **Saul Berenthal** — co-founder of CleBer LLC; software entrepreneur · *stated geography: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"* · → CleBer LLC · [examples/records/oggun.md](examples/records/oggun.md)
- **Wilson, McLaughlin, Domermuth, Joseph/Taylor, Cahoj, Wilson/Nakka** — originators of the individual kiln designs in the IBI open-source collection · *stated geography: "Global aggregator; hosted by International Biochar Initiative; individual designs span US, Australia, and other regions"* · → International Biochar Initiative (IBI) · ⌗ energy-byproducts · [examples/records/ibi-open-source-biochar.md](examples/records/ibi-open-source-biochar.md)

### Organizations (54)

- **AdkAction** — Non-profit host of the Compost for Good design guide and operating manual · *stated geography: "NY Adirondack"* · → Compost for Good · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **AgGateway** — Ag interoperability standards body; grain Traceability API (candidate record, licence NOASSERTION) · *stated geography: "United States / international standards ecosystem"* · [record](examples/records/aggateway-traceability-api.md) · ⌗ standards · [research/2026-08-grain-value-chain-open-infrastructure-scan.md](research/2026-08-grain-value-chain-open-infrastructure-scan.md)
- **Agrarian Trust / Agrarian Commons** — Land-holding commons (10 commons, 8 states, $6M+ raised over ~12 years) · *stated geography: "US"* · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Agroecology Commons** — Non-profit (2020-) doing knowledge-sharing, farmer-to-farmer skillshares, and seed and tool libraries; named org but small-scale · *stated geography: "Bay Area"* · ⌗ seed commons · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Ahold Delhaize USA** — One of only three grocery chains publicly committed to zero food waste by 2025 · *stated geography: "US"* · ⌗ co-op grocery, food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **American Farmland Trust** — National nonprofit; Farms Under Threat analyses (300M+ acres) published freely without open-data licence · *stated geography: "US"* · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **ANCA** — Regional organization that took Compost for Good under its wing in 2024 · *stated geography: "NY Adirondack"* · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Apple Street Market** — Hybrid consumer/worker co-op; participatory-grocery example · *stated geography: "Cincinnati"* · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Applied Digital** — Data-center operator providing site access, funding and operations input to the Legendary Harvest study · *stated geography: "North Dakota, US (Polaris Forge 2 campus)"* · [ROADMAP.md](ROADMAP.md) · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Community Agricultural Development Center** — Community-owned mobile slaughter / co-op abattoir network · *stated geography: "WA (US)"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Community Food Co-op (Bozeman)** — Named food co-op in the scan · *stated geography: "Bozeman"* · ⌗ co-op grocery · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Copia** — Surplus-food pickup-and-delivery platform emphasizing donation and tax write-offs · *stated geography: "SF Bay area"* · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Crystal Valley Co-op** — Grain/input co-op disrupted by September 2021 ransomware · *stated geography: "Minnesota (US)"* · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Detroit People's Food Co-op** — Black-led, community-owned grocery cooperative; community-governed retail example · *stated geography: "Detroit"* · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Digger's Mirth** — Labour-layer record curated into the examples collection · *stated geography: "Burlington, Vermont, USA (Intervale; local markets and wholesale)"* · [record](examples/records/diggers-mirth.md) · [ROADMAP.md](ROADMAP.md) · [grocery/labour-layer.md](grocery/labour-layer.md)
- **Earth Matter** — Compost-education non-profit publishing an Open Source Curriculum of DIY compost activities at its Compost Learning Center · *stated geography: "NYC"* · ⌗ energy-byproducts, food-waste · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Ekvn-Yefolecv** — Ecovillage practising traditional lifeways, language immersion and collective land governance · *stated geography: "Maskoke ancestral territory, Alabama"* · ⌗ land-tenure, language-ai · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **FarmBot** — Genuinely open (MIT) garden robot that costs more than closed equivalents — the corpus's 'open ≠ cheap' honesty check for complex machines at low volume · *stated geography: "global; company based in San Luis Obispo, California, US"* · [record](examples/records/farmbot.md) · ⌗ robotics-machines · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/synthesis.md](cea/synthesis.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · +5 more
- **Farmers Business Network (FBN)** — Venture-backed data platform marketed as farmer empowerment; 'farmer-owned' framing contested · *stated geography: "United States (national; expanding internationally)"* · [record](examples/records/fbn.md) · ⌗ ag-data · [ROADMAP.md](ROADMAP.md) · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **First Light** — Land rematriation example named in the land pillar · *stated geography: "Wabanaki territory, Maine"* · ⌗ land-tenure · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **Food Co-op Initiative** — Support organization providing free resources and consulting for starting retail food co-ops · *stated geography: "US"* · ⌗ co-op grocery · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md) · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Global Fishing Watch** — Sector's flagship fishery-transparency initiative; flagship datasets CC-BY-NC-4.0 (the open-watchers paradox) · *stated geography: "global (independent US 501(c)(3) nonprofit; ~125+ employees)"* · [record](examples/records/global-fishing-watch.md) · ⌗ fisheries · [ROADMAP.md](ROADMAP.md) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Kitchen United** — Ghost-kitchen pioneer that announced sale/closure of all locations and pivot to software (2023) · *stated geography: "US"* · ◉ defunct/archived · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Kroger** — Conventional retail giant used as scale contrast; one of only three chains publicly committed to zero food waste by 2025 · *stated geography: "US (stated context)"* · ⌗ food-waste · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Legendary Harvest** — Party in the Legendary Harvest/RII–NDSU–Applied Digital feasibility study · *stated geography: "North Dakota (stated)"* · [ROADMAP.md](ROADMAP.md)
- **Lopez Community Land Trust** — Partner in the IGFC mobile slaughter unit · *stated geography: "WA (US)"* · ⌗ land-tenure · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Mandela Foods** — Worker-owned cooperative; participatory-grocery example · *stated geography: "Oakland"* · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Mariposa Food Cooperative** — Food-justice-focused food co-op; participatory-grocery example · *stated geography: "Philadelphia"* · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Michigan State University Extension (MSU)** — Better Process Control School provider (acidified course $315) · *stated geography: "Michigan, US"* · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)
- **National Center for Home Food Preservation** — Publishes tested food-preservation processes at household scale — the precedent for a public process-validation commons · *stated geography: "US"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md)
- **NCG (National Co-operative Grocers / National Co+op Grocers)** — US food co-op federation (~169 member co-ops, 240+ stores, $2.8B sales) whose impact report frames the US sector and the participation gap · *stated geography: "US"* · ⌗ co-op grocery · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md) · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md) · +1 more
- **NEFOC Land Trust** — BIPOC-led land trust named in the land pillar · *stated geography: "Northeast US"* · ⌗ land-tenure · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **New American Stone Mills** — De facto standard craft stone-mill builder in North America; proprietary closed hardware (counter-example) · *stated geography: "Vermont (US)"* · ⌗ open-hardware · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **NEW Cooperative** — Farm-supply & grain co-op hit by 2021 BlackMatter ransomware; paper-ticket workaround · *stated geography: "United States (Fort Dodge, Iowa; 36 locations, western/central Iowa; grain marketing/storage, feed, agronomy; feeding-schedule software used for millions of farm animals)"* · [record](examples/records/new-cooperative-ransomware-2021.md) · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **NLR (formerly NREL) / National Laboratory of the Rockies** — US DOE lab; InSPIRE agrivoltaics program and bifacial_radiance (BSD-3) · *stated geography: "US"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **North Dakota State University (NDSU)** — University partner in the Legendary Harvest feasibility study · *stated geography: "North Dakota (in name), US"* · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **OFN USA** — US instance of the Open Food Network (pricing page cited) · *stated geography: "US"* · → Open Food Network (OFN) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Open Source Ecology (OSE)** — Open-hardware machine design commons (GPL/CC-BY-SA tractor and farm machinery set); hosts the Kon-Tiki kiln wiki page; not agroecology-specific · *stated geography: "United States (Factor e Farm, Maysville, Missouri); independent OSE Germany chapter"* · [record](examples/records/open-source-ecology.md) · ⌗ open-hardware, robotics-machines · [ROADMAP.md](ROADMAP.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **OpenSourceSeeds / Open Source Seed Licence (OSSL)** — Contractual open seed licence extending obligations to derivatives and compatible with seed law; the enforceable counterpart to OSSI's pledge, with no enforcement case located · *stated geography: "Germany / Europe (licence usable internationally)"* · [record](examples/records/opensourceseeds-ossl.md) · ⌗ seed commons · [examples/records/opensourceseeds-ossl.md](examples/records/opensourceseeds-ossl.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · +1 more
- **PCC Community Markets** — Food co-op whose 'grocery story' piece documents distribution co-ops · *stated geography: "Seattle"* · ⌗ co-op grocery · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Port Clyde Fresh Catch** — The cited first CSF (2007); US CSF movement reference point · *stated geography: "ME (US)"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Ronnie Baugh Tractors** — manufacturer of the Oggún tractor · *stated geography: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"* · → Think Oggún (Oggún tractor) · ⌗ robotics-machines · [examples/records/oggun.md](examples/records/oggun.md)
- **Sharing Excess** — Food redistribution organization claiming 'fully open source'; no licence file on either public repo · *stated geography: "Philadelphia, PA; national US operations (Philadelphia, New York, Washington DC, Chicago, Detroit, Los Angeles)"* · [record](examples/records/sharing-excess.md) · ⌗ food-waste · ◉ defunct/archived · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md)
- **Solar CITIES** — Appropriate-technology practitioner network for DIY IBC biodigesters (open by practice, unlicensed) · *stated geography: "US / Global"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Think Oggún (Oggún tractor)** — Machine-data/telematics venture marketing an 'open system' manufacturing model with a 5-year licence fee — the inverse of open hardware · *stated geography: "United States (designed in Alabama) / designed for Cuba; distributors reported in four countries"* · [record](examples/records/oggun.md) · ⌗ open-hardware, robotics-machines · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Uline** — Supplier whose published canning-jar list prices ($1.40–$1.50 each) anchor the packaging cost line · *stated geography: "US (list price)"* · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **Underground Meats** — Failed-infrastructure case: the only open HACCP document found (CC0), now dead-hosted · *stated geography: "United States (Madison, WI origin; claimed use by ~20 US processors)"* · [record](examples/records/underground-meats-open-haccp.md) · ◉ defunct/archived · [ROADMAP.md](ROADMAP.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md) · [upcycling/economics.md](upcycling/economics.md) · +1 more
- **University of Alaska Fairbanks Cooperative Extension (UAF)** — Publisher of the acidified-foods compliance checklist with itemised costs · *stated geography: "Alaska, US"* · ⌗ co-op grocery · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)
- **University of Georgia Process Authority Services (UGA)** — Public process-authority service ($195 classification, $40 revisions, quote-only validation studies) · *stated geography: "Georgia, US"* · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)
- **University of Notre Dame** — University heating greenhouses from data-center waste heat · ⌗ cea, energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **University of Wisconsin–Madison** — Extension whose budgeting tool assumes $8,000/robot/year maintenance (one of three conflicting maintenance figures) · *stated geography: "Wisconsin (in name), US"* · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Upcycled Food Association** — Created the Upcycled Certified Standard, now administered by Where Food Comes From · *stated geography: "US-origin, global programme; WFCF is a NASDAQ-listed verification company"* · [record](examples/records/upcycled-certified.md) · ⌗ standards, food-waste · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Village Market** — Community-governed grocery named in the scan · *stated geography: "Portland"* · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Washington State University Food Processing Extension (WSU)** — Public process-authority service ($75–$150 per product/recipe); withdrew discounted lab testing July 2025; excludes fermented products · *stated geography: "Washington State, US"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)

### Networks (2)

- **Farm Hack** — Decentralized peer design-sharing network for farm tools; FAO agroecology hub record; candidate corpus record · *stated geography: "United States (originated with The Greenhorns); taken up in the UK (Centre for Agroecology, Water and Resilience, Coventry)"* · [record](examples/records/farm-hack.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Pacific Coast Collaborative** — Public-private partnership of West Coast jurisdictions, food businesses and nonprofits from which PCFWC grew · *stated geography: "West Coast US"* · → Pacific Coast Food Waste Commitment (PCFWC) · [grocery/research/food-waste.md](grocery/research/food-waste.md)

### Projects & platforms (25)

- **Ag Data Commons** — USDA NAL public ag data curation platform · *stated geography: "United States; USDA-funded or USDA-co-funded research, with public reuse potential"* · [record](examples/records/ag-data-commons.md) · ⌗ ag-data · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **bifacial_radiance** — BSD-3-Clause bifacial PV ray-tracing simulation · *stated geography: "United States (National Laboratory of the Rockies, formerly NREL / US DOE) and Belgium (University of Liège); used internationally"* · [record](examples/records/nrel-inspire-bifacial-radiance.md) · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Compost for Good** — Community-scale rotating drum composter with a free open design guide and operating manual (~$15K build vs $40-150K commercial; 35,000 lb/yr); moved under ANCA in 2024 with a HURD urine-compost facility added · *stated geography: "United States (New York, Adirondack region); community-scale, local reach"* · [record](examples/records/compost-for-good.md) · ⌗ energy-byproducts, food-waste · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **FarmerChat** — Farmer chatbot under FAIR Forward; GitHub/Hugging Face evidence checked · *stated geography: "India, Kenya, Nigeria, Ethiopia, Brazil (5 countries); languages incl. English, Hindi, Telugu, Amharic, Kiswahili, Hausa, Portuguese, Spanish"* · [record](examples/records/farmerchat.md) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **FarmStack** — Apache-2.0 data-exchange Digital Public Good run by Digital Green · *stated geography: "global (origin US nonprofit; deployments including Kenya and Ethiopia)"* · [record](examples/records/farmstack.md) · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **FDA / Smithsonian DNA reference library** — US federal/public DNA reference sequences for species identification · *stated geography: "US"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **FIMS (NOAA Fisheries Integrated Modeling System)** — NOAA's next-generation fisheries modeling system (with WHAM) · *stated geography: "US"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Grain Bikes (bicycle-powered grain processing machines)** — Small farms and micro-mills need threshing, winnowing, dehulling, and coarse milling without grid power or four-figure equipment. · *stated geography: "US Northeast (Massachusetts); plans freely buildable anywhere"* · [record](examples/records/grain-bikes.md) · [examples/records/grain-bikes.md](examples/records/grain-bikes.md)
- **IBI open-source biochar technologies (aggregator)** · *stated geography: "Global aggregator; hosted by International Biochar Initiative; individual designs span US, Australia, and other regions"* · [record](examples/records/ibi-open-source-biochar.md) · ⌗ energy-byproducts · [examples/records/ibi-open-source-biochar.md](examples/records/ibi-open-source-biochar.md)
- **InSPIRE** — Agrivoltaics research program; CC0 InSPIRE Map with 367+ sites · *stated geography: "US"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **ISOBlue 2.0** — Open design pattern (data and control on the farmer's device by design) proven in tractors and transplanted to greenhouses · *stated geography: "United States (Purdue University origin; AFIN — Agricultural Informatics Lab; open hardware + software, replicated internationally)"* · [record](examples/records/isoblue.md) · ⌗ robotics-machines · [ROADMAP.md](ROADMAP.md) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [examples/records/isoblue.md](examples/records/isoblue.md) · +3 more
- **Mycodo** — GPL-3.0 open greenhouse/climate control software at maker scale (3,286 stars, actively maintained); peer-reviewed deployment in Bhutan; volunteer-maintained (fragility finding) · *stated geography: "United States (developer in Tennessee) / international maker, hobby, research, and small-commercial horticulture community"* · [record](examples/records/mycodo.md) · ⌗ cea · [ROADMAP.md](ROADMAP.md) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · +2 more
- **NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative)** — US farmers' data is stored, shared, and monetised through vendor platforms that often claim perpetual rights. · *stated geography: "United States (national)"* · [record](examples/records/napdc-ag-data-coalition.md) · ⌗ ag-data · [examples/records/napdc-ag-data-coalition.md](examples/records/napdc-ag-data-coalition.md) · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **NOAA Fisheries Integrated Toolbox** — Curated catalogue/r-universe of open fisheries-science tools · *stated geography: "US"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **ONDC / Beckn** — Open commerce protocol and specifications, non-profit network operator · *stated geography: "India (national); protocol usable elsewhere"* · [record](examples/records/ondc.md) · ⌗ standards · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md) · [research/2026-08-grain-value-chain-open-infrastructure-scan.md](research/2026-08-grain-value-chain-open-infrastructure-scan.md)
- **Open Source Range (OSR) GPS Collar** — Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization. · *stated geography: "United States / Global (rangeland ecology and extensive livestock pasture research)"* · [record](examples/records/osr-gps-collar.md) · ⌗ robotics-machines · [examples/records/osr-gps-collar.md](examples/records/osr-gps-collar.md) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **OpenCTD** — Open oceanography CTD (hardware + firmware + build manual, MIT); 40+ units built via workshops · *stated geography: "international (community workshops US + BVI; design usable anywhere)"* · [record](examples/records/openctd.md) · ⌗ open-hardware, fisheries · [ROADMAP.md](ROADMAP.md) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OpenET** — Open evapotranspiration data layer used by irrigation districts · *stated geography: "US (Western water basin)"* · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **OpenSprinkler** — Open irrigation controller (CERN-OHL-S-2.0 hardware, GPL-3.0 firmware); operates without internet/cloud · *stated geography: "United States (Amherst, MA) / global maker, urban agriculture, landscaping, greenhouse, and smallholder irrigation community"* · [record](examples/records/opensprinkler.md) · ⌗ open-hardware · [ROADMAP.md](ROADMAP.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md) · +1 more
- **Our-Sci Reflectometer** — Handheld open-hardware reflectometer (GPL-3.0) for soil organic carbon and crop nutrient density · *stated geography: "United States (Ann Arbor, MI / Bionutrient Institute) / international agroecology, soil health, and regenerative crop research networks"* · [record](examples/records/our-sci-reflectometer.md) · ⌗ open-hardware · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Pacific Coast Food Waste Commitment (PCFWC)** — Public-private partnership (from the Pacific Coast Collaborative, 2016) producing the 'best-in-class' retail food-waste dataset with anonymized, gated reporting · *stated geography: "West Coast US"* · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **SSURGO** — USDA open soil dataset paired with CanSIS · *stated geography: "US"* · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **U.S. Food Waste Pact** — National successor/sibling to PCFWC (ReFED + WWF) extending the Target-Measure-Act model · *stated geography: "US"* · → Pacific Coast Food Waste Commitment (PCFWC) · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Vinduino** — Individual grower's open sensing + irrigation control (GPL-3.0) · *stated geography: "Southern California, US (single-vineyard origin; open for reuse)"* · [record](examples/records/vinduino.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · +2 more
- **Waste No Food** — Donation platform founded 2011; ~1M meals delivered · *stated geography: "California"* · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)

### Governments & public bodies (12)

- **Alaska DEC** — State environmental conservation department whose plan review ($400) and annual permit ($400) appear in the compliance checklist · *stated geography: "Alaska, US"* · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)
- **BLM PLSS** — US federal cadastral grid published as open geodata (public domain) · *stated geography: "US"* · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Farm to Food Bank Program (TEFAP)** — US programme authorized at $4M/year in the 2018 Farm Bill to cover harvest/transport costs of farm donations · *stated geography: "US"* · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **FDA** — US regulator: FSMA 204 traceability rule and the 21 CFR 108/113/114 acidified/low-acid canned food registration and scheduled-process filing scheme · *stated geography: "US"* · [grocery/research/traceability.md](grocery/research/traceability.md) · [upcycling/research/process-validation-and-canning.md](upcycling/research/process-validation-and-canning.md)
- **FTC** — US Federal Trade Commission; secured 2026 right-to-repair settlement with Deere and five states · *stated geography: "US"* · [grocery/research/consumer-feedback.md](grocery/research/consumer-feedback.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · +1 more
- **NOAA Fisheries** — US fisheries science agency; Stock Synthesis, OpenEM origin, EM automation white paper, Integrated Toolbox · *stated geography: "US"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **NYSERDA** — State energy agency whose Greenhouse Energy Best Practices Guidebook supplies the kWh-per-unit benchmarking method the commons lacks · *stated geography: "New York (in name), US"* · ⌗ energy-byproducts · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · [cea/research/energy-design-commons-inventory.md](cea/research/energy-design-commons-inventory.md)
- **Oregon Metro** — Passed a business food-scrap separation requirement · *stated geography: "Oregon, US"* · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Pennsylvania Agricultural Surplus System** — Named as the model farm-to-food-bank programme · *stated geography: "Pennsylvania, US"* · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **USDA** — Runs the organic certification verification website; tracks fraudulent certification claims · *stated geography: "US"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md) · +1 more
- **USDA / USDA ERS** — US department whose extension analysis (Tranel) and Charts of Note provide US robotic-milking economics used as contrast · → USDA · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **USDA FAS** — US foreign ag service; source of report on China's National Smart Agriculture Action Plan · *stated geography: "US"* · → USDA · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)

## Europe (104)

### People (10)

- **David Cameron** — Prime Minister whose 'Big Society' agenda endorsed The People's Supermarket · *stated geography: "UK"* · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **Glyn Hudson** — OpenEnergyMonitor / Megni co-founder · *stated geography: "Wales, UK"* · → OpenEnergyMonitor · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Hans-Peter Schmidt** — Kon-Tiki flame-curtain kiln co-designer (Ithaka Institut) · *stated geography: "Switzerland"* · → Ithaka Institut · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Mario Rothauer** — Single lead developer of FoodCoopShop (one-person open-core model with paid support) · *stated geography: "Austria"* · → FoodCoopShop · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md)
- **Martin Jäger** — Libre Solar founder · *stated geography: "Germany"* · → Libre Solar · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Paul Taylor** — Kon-Tiki flame-curtain kiln co-designer (Ithaka Institut) · *stated geography: "Switzerland"* · → Ithaka Institut · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Schmidt & Taylor** — Biochar Journal authors documenting the Kon-Tiki kiln design · *stated geography: "Designed in Switzerland (2014); open technology transfer to Nepal and other regions; global farmer reach"* · → Kon-Tiki kiln · ⌗ energy-byproducts · [examples/records/kon-tiki-kiln.md](examples/records/kon-tiki-kiln.md)
- **Stéphan Gigandet** — Programmer who launched Open Food Facts on May 19, 2012 during Jamie Oliver's Food Revolution Day · *stated geography: "France (French programmer)"* · → Open Food Facts · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **Trystan Lea** — OpenEnergyMonitor / Megni co-founder · *stated geography: "Wales, UK"* · → OpenEnergyMonitor · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Valentin Thurn** — Filmmaker who founded Foodsharing.de in 2012 · *stated geography: "Germany (stated context)"* · [grocery/research/food-waste.md](grocery/research/food-waste.md)

### Organizations (51)

- **Agdatahub** — Ag data consent intermediation company (DGA-registered intermediary); API-Agro standard · *stated geography: "France / European Union"* · [record](examples/records/agdatahub.md) · ⌗ ag-data, standards · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **Agrecol** — NGO behind OpenSourceSeeds' contractual seed licence (the enforceable-commons experiment) · *stated geography: "Germany"* · ⌗ seed commons · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **Alter Coop** — Park Slope-wave member-work supermarket named in the nearest-neighbour inventory · *stated geography: "Luxembourg"* · ⌗ co-op grocery · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Bahnhof** — Data-center operator feeding heat into municipal district-heating networks · *stated geography: "Stockholm (Sweden)"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Bees Coop** — Member-work supermarket with a triple commitment (owner + worker + customer) · *stated geography: "Brussels"* · ⌗ co-op grocery · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Biobulkbende Rotterdam** — Food co-op running Co-op Cloud ('a server in one member's closet'); maintenance-thin case · *stated geography: "Rotterdam (Netherlands)"* · ⌗ co-op grocery · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · [research/grocery-feedback-2026-08.md](research/grocery-feedback-2026-08.md)
- **Biolíbere** — Smallest CSN member supermarket (~180 members) · *stated geography: "Spain (CSN network)"* · ⌗ co-op grocery · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Breizhicoop** — French member-work co-op named in the VertigO study; non-Canadian example · *stated geography: "France"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Campaign for Local Abattoirs** — Advocacy network documenting UK small-abattoir collapse (with Sustainable Food Trust) · *stated geography: "UK"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Communs Paysans / Soudons fermes !** — Movement continuing L'Atelier Paysan's work after its liquidation · *stated geography: "France"* · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md)
- **CSN (Spanish cooperative supermarket network)** — Network of ~11 agroecological cooperative supermarkets in Spain; fixed-margin structural transparency and member work shifts · *stated geography: "Spain (Madrid context)"* · ⌗ co-op grocery · [grocery/labour-layer.md](grocery/labour-layer.md) · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Daily Bread Co-operative** — UK food co-op named in the inventory · *stated geography: "Northampton and Cambridge, UK"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **DeLaval** — Milking-robot vendor (VMS, DelPro software); Peterborough training centre; its no-licence data-analysis repo is the corpus's not-open counter-example · *stated geography: "Sweden"* · ⌗ robotics-machines · [ROADMAP.md](ROADMAP.md) · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Dublin Food Co-op** — European food co-op named in the inventory · *stated geography: "Dublin, Ireland"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **EcoDataCenter** — Data center named in the Nordic district-heating record · *stated geography: "Falun (Sweden)"* · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Ekylibre** — Early participant in the Data Food Consortium · *stated geography: "France-origin / global; open-source farm management information system (FMIS)"* · [record](examples/records/ekylibre.md) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Essential Trading Co-op** — UK food co-op named in the inventory · *stated geography: "Bristol, UK"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **FoodHub** — European food co-op named in the inventory · *stated geography: "Munich, Germany"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **GEA** — Milking-robot vendor (FarmLogic software); nine dealerships in Ontario · *stated geography: "Germany"* · ⌗ robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Green Mountain** — Data center whose effluent heat warms a land-based trout farm (operating installation) · *stated geography: "Norway"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Greenport Aalsmeer** — Horticulture-cluster organization party to the Uithoorn heat-network agreement · *stated geography: "Netherlands (Aalsmeer in name)"* · ⌗ cea, energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Infinity Foods Workers Co-operative** — UK worker co-op named in the inventory · *stated geography: "Brighton, UK"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **Ithaka Institut** — Swiss biochar research/non-profit; originator of the Kon-Tiki kiln and its open technology-transfer model; publishes the Biochar Journal · *stated geography: "Switzerland"* · → Kon-Tiki kiln · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **JoinData** — Ag-data organization with a Development Gateway/USAID case study in the initial source set · *stated geography: "Netherlands"* · [record](examples/records/joindata.md) · ⌗ ag-data · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +3 more
- **köllektiv eG** — European food co-op named in the inventory · *stated geography: "Cologne, Germany"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **L'Atelier Paysan** — Farmer SCIC cooperative making open designs for agroecologically-appropriate machinery with self-build training; strongest located machinery case, judicially liquidated April 2026 · *stated geography: "France; originated in Rhône-Alpes, later Brittany; national reach through training tours and local "essaims" (local chapters)"* · [record](examples/records/latelier-paysan.md) · ⌗ robotics-machines · ◉ liquidated · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md) · +2 more
- **La Cagette** — European food co-op named in the inventory · *stated geography: "Montpellier, France"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **La Louve** — Paris member-work supermarket (2017, ~5,000 members) stating transparency in purchasing, sales, management and administration · *stated geography: "Paris"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md) · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **La Osa** — CSN cooperative supermarket; three years to break even; source of the 150€/member/month viability threshold · *stated geography: "Madrid (opened Dec 2020)"* · ⌗ co-op grocery · [grocery/labour-layer.md](grocery/labour-layer.md)
- **Landare** — CSN's largest member (founded 1991): 80/20 producer/management price split, 122 direct producer relationships, no external capital — the closest existing analogue to the concept · *stated geography: "Pamplona/Iruña, Navarra (Spain)"* · [grocery/labour-layer.md](grocery/labour-layer.md)
- **Lely** — Milking-robot vendor (Astronaut line) selling, servicing and holding the data layer; six Lely Centres in Ontario; certified pre-owned programme (used A4+ from $80,000 USD) · *stated geography: "Netherlands"* · ⌗ robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Libre Solar** — Open-hardware DC microgrid power electronics (MPPT controllers, BMS); OSHWA DE000153 CERN-OHL-W-2.0 · *stated geography: "Germany-origin (Libre Solar Technologies GmbH, Hamburg); supported by the EnAccess Foundation for off-grid rural electrification and solar DC microgrids in the Global South and internationally"* · [record](examples/records/libre-solar.md) · ⌗ open-hardware, energy-byproducts · [ROADMAP.md](ROADMAP.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Luleå University of Technology** — University heating greenhouses from data-center waste heat · *stated geography: "Sweden"* · ⌗ cea, energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Megni LLP** — Bootstrapped open-hardware business behind OpenEnergyMonitor (Glyn Hudson & Trystan Lea); kit-sales funded · *stated geography: "Wales, UK"* · ⌗ open-hardware, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **MILA** — Member-work supermarket describing La Louve's role-model function · *stated geography: "Vienna"* · ⌗ co-op grocery · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Open Food France** — Host of the Data Food Consortium's origin; used the D/D+8/D+16 decision model · *stated geography: "France"* · → Open Food Network (OFN) · → Data Food Consortium (DFC Standard) · ⌗ co-op grocery · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Open Source Ecology Germany** — Runs the 'Milker/AMOR' development-stage open milking-robot wiki project (lead, unverified) · *stated geography: "Germany"* · ⌗ robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **OpenEMS Association e.V.** — Non-profit association governing OpenEMS industrial microgrid control (EPL-2.0/AGPL-3.0) · *stated geography: "Germany"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Rijksmuseum** — Canonical early open-GLAM example; 600,000+ public-domain images and the Rijksstudio engagement model · *stated geography: "Amsterdam"* · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **RISE** — Research institute whose completed DC-Farming study (2020) examined year-round vegetable production beside data-center waste heat in a sub-Arctic climate · *stated geography: "Sweden (Luleå)"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **SAOS** — Named (with ScotEID) as the traceability precedent for the processing workstream · *stated geography: "Scotland"* · [ROADMAP.md](ROADMAP.md) · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **SuperCoop** — European member-work food co-op named in the inventory · *stated geography: "Berlin, Madrid, Bordeaux"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **SuperQuinquin** — European member-work food co-op named in the inventory · *stated geography: "Lille, France"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Sustainable Food Trust** — Partner in the Campaign for Local Abattoirs · *stated geography: "UK"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **TH Köln** — Developer of PyADM1ODE · *stated geography: "Germany"* · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **The People's Supermarket (TPS)** — Community-interest-company supermarket (founded 2009) documented as the caution case: volunteering decayed under commercial pressure and social aims drifted · *stated geography: "London (Lamb's Conduit St)"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md) · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **The Urban Co-op** — European food co-op named in the inventory · *stated geography: "Limerick, Ireland"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md)
- **Torth y Tir** — Community-owned mill/bakery/grain project (community benefit society); ownership exemplar without licensed artefacts · *stated geography: "Wales"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Unicorn Grocery** — Manchester workers' co-operative (76 members, flat management, equal pay) with public price-comparison boards against the big five and the 'Grow a Grocery' guide · *stated geography: "Manchester, UK"* · ⌗ co-op grocery · [grocery/research/canadian-co-op-inventory.md](grocery/research/canadian-co-op-inventory.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **University of Liège (DEAL / TERRA)** — Academic agrivoltaics/agroforestry modelling group; PASE team (Bruhwyler, Lebeau et al.) · *stated geography: "Belgium"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Wageningen University & Research (WUR)** — University publishing the Autonomous Greenhouse Challenge datasets (four DOI-published editions); Silke Hemming's greenhouse-horticulture group named as contact · *stated geography: "Netherlands (Wageningen in name; datasets described as Dutch)"* · → Autonomous Greenhouse Challenge · ⌗ robotics-machines, cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/energy-design-commons-inventory.md](cea/research/energy-design-commons-inventory.md)

### Networks (7)

- **AGROECOLOGY European Partnership** — European Partnership running Horizon Europe Cluster 6 co-funded calls (2024-2026) on agroecology living labs and research infrastructures; no open-source or commons framing located in its materials · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **REAS** — Network cited as support/opportunity for the CSN · *stated geography: "Spain (stated context)"* · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **Scottish Agriculture Data Partnership** — Governance-first data partnership; tracking item G-DC-04 · *stated geography: "Scotland"* · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-programme-briefing.md](research/2026-08-programme-briefing.md) · +1 more
- **Solidarity Fridges** — Network of ~100 food-sharing sites with public refrigerators and shelves · *stated geography: "Berlin and other cities"* · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Uithoorn/Greenport Aalsmeer/Switch/Liander grower heat network** — Multi-party grower heat network cited as an operating data-center-heat installation · *stated geography: "Uithoorn/Greenport Aalsmeer (stated)"* · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **UK Grain Lab** — Farmer-miller-baker-maltster knowledge commons · *stated geography: "UK"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Yorkshire Grain Alliance** — Alternative grain network (knowledge commons) · *stated geography: "UK"* · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)

### Projects & platforms (27)

- **Art is Open Source (AOS)** — Interdisciplinary research laboratory merging artistic and scientific practices · *stated geography: "Italy (founded 2004)"* · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Autonomous Greenhouse Challenge** — WUR greenhouse competition whose DOI-published grow-and-climate timeseries datasets are the open research-data precedent · *stated geography: "Netherlands (Wageningen University & Research, Greenhouse Horticulture Business Unit, Bleiswijk) + international competition teams"* · [record](examples/records/wageningen-agc-datasets.md) · ⌗ cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md)
- **CEADS / AgriDataSpace / FSDN** — EU data-space standards and federated governance for ag data · *stated geography: "European Union (supranational)"* · [record](examples/records/ceads.md) · ⌗ ag-data, standards · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Common Greenhouse Ontology (CGO)** — Apache-2.0 open data standard for greenhouses with zero vendor adoption; no waste-heat/energy-interface extension exists · *stated geography: "Netherlands / EU (TNO-led); research and standards community"* · [record](examples/records/common-greenhouse-ontology.md) · ⌗ standards, cea · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **CoopCycle** — Federation of bike-delivery co-operatives that built and collectively govern their own platform under a protective licence restricted to co-operatives · *stated geography: "European Union & International (France-origin / 70+ delivery co-ops across Europe and the Americas)"* · [record](examples/records/coopcycle.md) · [ROADMAP.md](ROADMAP.md) · [grocery/labour-layer.md](grocery/labour-layer.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md) · +2 more
- **EMODnet Human Activities** — EU portal of ship-density rasters and fishing/aquaculture layers (WMS/WFS); methodological template for DFO · *stated geography: "EU"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Food Data Collaboration (FDC)** — Funded multi-pilot DFC implementation project (Hodmedod's, Shopify producers, OFN hubs) with Commons governance rules · *stated geography: "UK"* · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **FoodCoopShop** — AGPL-3.0 producer-direct ordering platform for food co-ops/farm shops; single-developer open-core (maintainer sells installation/support) · *stated geography: "DACH-centred (Austria, Germany, Switzerland, Italy), international software"* · [record](examples/records/foodcoopshop.md) · ⌗ co-op grocery · [ROADMAP.md](ROADMAP.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md) · [research/grocery-feedback-2026-08.md](research/grocery-feedback-2026-08.md)
- **Foodsharing.de / foodsharing e.V.** — Grocery-surfaced candidate record, verified and curated into examples · *stated geography: "Germany (also active in Austria, Switzerland and other European countries)"* · [record](examples/records/foodsharing.md) · ⌗ co-op grocery, food-waste · [ROADMAP.md](ROADMAP.md) · [examples/records/foodsharing.md](examples/records/foodsharing.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · +2 more
- **Foodsoft** — Open-source web software for food co-operatives (ordering, accounting, member work-shift scheduling) · *stated geography: "international (DACH, Netherlands, and beyond; dozens of co-ops)"* · [record](examples/records/foodsoft.md) · ⌗ co-op grocery · [ROADMAP.md](ROADMAP.md) · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md) · [upcycling/research-direction.md](upcycling/research-direction.md)
- **FUSIONS (EU FUSIONS)** — FLW Standard partner; its Food Waste Framework is synchronized with the standard · *stated geography: "EU"* · → FLW Standard (Food Loss and Waste Accounting and Reporting Standard) · ⌗ standards, food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Helsinki Hybrid** — Published design concept: a 30-60 MW immersion-cooled data center wrapped in a vertical farm and greenhouse, up to 63 MW recovered · *stated geography: "Helsinki (in name)"* · ⌗ cea · [ROADMAP.md](ROADMAP.md) · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **HORIZON-OpenAgri** — EU open-source catalogue listing Purdue's OpenATK Field Work App (OADA-adjacent demo) · *stated geography: "EU"* · ⌗ ag-data · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Katuma** — Open-source direct farm commerce platform; candidate/lead · *stated geography: "Catalonia"* · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md) · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Kon-Tiki kiln** — Flame-curtain conical biochar kiln published open source; the most mature open-hardware case in the compost/soil cell, spread via open technology transfer · *stated geography: "Switzerland (designed 2014)"* · [record](examples/records/kon-tiki-kiln.md) · ⌗ open-hardware, energy-byproducts · [examples/records/kon-tiki-kiln.md](examples/records/kon-tiki-kiln.md) · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Luleå greenhouse** — Operating data-center waste-heat greenhouse installation · *stated geography: "Luleå (stated)"* · ⌗ cea, energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Monitorfish (France)** — Fisheries monitoring and control: the state's Fisheries Monitoring Center must fuse VMS positions, declarative fishing activity (ERS/FLUX), regulated-area rules, fleet-segment risk, prior notifications, and inspection records into a real-time operational picture for enforcement. · *stated geography: "France (national production system); open source internationally"* · [record](examples/records/monitorfish.md) · ⌗ fisheries · [examples/records/monitorfish.md](examples/records/monitorfish.md) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Open Food Facts** — Crowdsourced open food data commons proving data-level openness works at scale, bounded by the package · *stated geography: "Founded in France; global database (products from 150 countries)"* · ⌗ ag-data · [grocery/research/open-in-food.md](grocery/research/open-in-food.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **OpenEMS (Open Source Energy Management System)** — Farm microgrids and rural energy installations increasingly combine solar PV inverters, battery energy storage systems (BESS), combined heat and power (CHP) biogas gensets, heat pumps, cold-storage compressors, and EV/machinery chargers. · *stated geography: "Germany-origin (OpenEMS Association e.V., Deggendorf); deployed internationally across commercial, industrial, agricultural, and residential microgrids"* · [record](examples/records/openems.md) · ⌗ energy-byproducts, open-hardware · [ROADMAP.md](ROADMAP.md) · [examples/records/openems.md](examples/records/openems.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **OpenEnergyMonitor** — Open energy-monitoring hardware/software ecosystem (emonPi3, emonTx, emonTH); flagship repo has no SPDX licence — active project, incomplete licence formality · *stated geography: "Wales, UK (Megni LLP, Brynrefail, Gwynedd); global deployment across residential, off-grid, research, and agricultural/CEA energy and heat-pump monitoring"* · [record](examples/records/openenergymonitor.md) · ⌗ open-hardware, energy-byproducts · [ROADMAP.md](ROADMAP.md) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [cea/research/cold-climate-energy-readings.md](cea/research/cold-climate-energy-readings.md) · +3 more
- **OpenEPCIS (epcis-repository-ce)** — Event-based supply-chain traceability at processing scale: FSMA 204 KDE/CTE records, meat and cattle traceability frameworks, and the coming EU digital product passport all need an EPCIS event repository. · *stated geography: "international (maintainer in Germany; food & beverage a target industry)"* · [record](examples/records/openepcis.md) · ⌗ standards · [examples/records/openepcis.md](examples/records/openepcis.md)
- **OS Farm** — State-funded (France 2030 consortium) '100% open source' farm interoperability standard with commercial franchise/subscription deployment · *stated geography: "France / EU; national interoperability consortium (France 2030)"* · [record](examples/records/osfarm.md) · ⌗ standards · ◉ proposal-stage · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +1 more
- **ROMI — Robotics for Microfarms** — ROMI develops robotic tools to assist organic, diversified, human-scale vegetable farms with physically demanding or repetitive work such as weeding, crop monitoring, and plant phenotyping. · *stated geography: "Europe; field sites near Paris and Barcelona"* · [record](examples/records/romi.md) · ⌗ robotics-machines · [examples/records/romi.md](examples/records/romi.md) · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +2 more
- **SAOS (Scottish Agricultural Organisation Society)** — Farm data is siloed, locked into vendor platforms, and its value accrues outside farming. · *stated geography: "Scotland / UK; cooperative federation of ~56 primary agricultural co-ops (est. 1905; ~600 primary co-op directors; group turnover >£4.5M, 31 staff, McMahon 2022)"* · [record](examples/records/saos.md) · → ScotEID · ⌗ ag-data · [examples/records/saos.md](examples/records/saos.md)
- **ScotEID** — SAOS federation-owned livestock traceability infrastructure; farmer share-ownership deferred · *stated geography: "Scotland"* · [ROADMAP.md](ROADMAP.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · +1 more
- **TRACES (EU Trade Control and Expert System)** — EU digital system used by national authorities to track food and animal movements · *stated geography: "EU"* · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Wiki Agri Tech** — Open catalogue of agricultural digital tools; curated as a candidate record (ODbL data, CC BY-NC-SA editorial) · *stated geography: "France (Montpellier origin) / French-speaking market; entries are France- and Europe-weighted"* · [record](examples/records/wiki-agri-tech.md) · [ROADMAP.md](ROADMAP.md)

### Governments & public bodies (8)

- **EU DGA** — EU data governance act framework under which Agdatahub is a registered intermediary · *stated geography: "EU"* · ⌗ ag-data · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **EU Regulation 2023/2842** — Revised Fisheries Control System: mandatory electronic recording for all EU vessels (2024-2026) · *stated geography: "EU"* · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **European Commission** — Source of the EU hygiene package flexibility provisions (Regulation EC 852/2004 Art. 13) cited as precedent for a community-processor tier · *stated geography: "EU"* · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **French Ministry of Agriculture** — Treats Aspexit's classification as the reference for nearly 2,000 digital tools on the French market · *stated geography: "France"* · [ROADMAP.md](ROADMAP.md)
- **HM Land Registry** — Publishes open source data and Price Paid Data; the reference model a land registry can open · *stated geography: "England & Wales (reference model cited internationally)"* · [record](examples/records/hm-land-registry.md) · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **MTES-MCT** — French ministry operating Monitorfish as open source · *stated geography: "France"* · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Municipality of Uithoorn** — Municipality party to the multi-party agreement for a data-center-fed district heat network serving De Kwakel–Kudelstaart greenhouse growers · *stated geography: "Netherlands"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **SDE++** — Grant scheme funding the Uithoorn data-center heat network · *stated geography: "Netherlands (context of the Uithoorn network)"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)

### Funders (1)

- **Horizon Europe** — EU funding programme (Cluster 6) under which the AGROECOLOGY Partnership's co-funded calls run · *stated geography: "Europe (in name)"* · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)

## East Asia (China, Japan) (27)

### Organizations (10)

- **CAAS** — Co-developer of Sinong ag LLM · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **CAS** — Institution behind national scientific data centers and the Basic Science Data Center · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **chaojima** — Private operator behind All Farmers Code DPI · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **MARA Big Data Development Center** — State operator of national ag DPI (with private operator chaojima) · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **Nanjing Agricultural University** — Developer of Sinong, China's first agriculture-specific open-weight LLM · *stated geography: "China"* · ⌗ language-ai · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **National Basic Science Data Center** — Cross-domain national scientific data center (2.7PB, 23 national standards, open-data portals) · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **Shanxi Agricultural University** — Publishes AgriMa and AgriAgent open-weight agricultural models · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **Tencent (Tianjin)** — Operating data-center waste-heat installation cited in the CEA energy case · *stated geography: "Tianjin (stated)"* · ⌗ cea, energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Tsinghua University** — University partner in the Huailai waste-heat demonstration · *stated geography: "China"* · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Zhongnong Meiya** — Company partner in the Huailai AI-data-center waste-heat demonstration · *stated geography: "China"* · ⌗ food-waste · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)

### Projects & platforms (11)

- **AgriAgent (稷丰)** — Open-weight agricultural model from Shanxi Agricultural University · *stated geography: "China (Shanxi / national agricultural research universities)"* · [record](examples/records/agrima-shanxi.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **AgriMa (后稷)** — Open-weight agricultural LLM/multimodal model from Shanxi Agricultural University · *stated geography: "China"* · ⌗ language-ai · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **Alibaba ET Agricultural Brain** — Alibaba Cloud's ET Agricultural Brain (launched at The Computing Conference 2018, Shanghai) applies company-developed AI — visual recognition, voice recognition, real-time environmental monitoring — to agriculture, initially pig farming and fruit/vegetable production. · *stated geography: "China (commercial, national reach)"* · [record](examples/records/et-agricultural-brain.md) · ⌗ language-ai · [examples/records/et-agricultural-brain.md](examples/records/et-agricultural-brain.md)
- **All Farmers Code (全农码)** — National ag DPI identity mini-program; proprietary/state-private PPP, closed source · *stated geography: "China / national; agricultural digital identity platform"* · [record](examples/records/quannongma-all-farmers-code.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **Huailai demonstration** — Data-center waste-heat demonstration with unverified one-year break-even · *stated geography: "Huailai (stated)"* · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **HUIZHI-nongyeOS-cloud (农业岛)** — Chinese open-source smart-agriculture IoT platform (MIT, Gitee/GitHub); enterprise SI pattern for high-standard farmland tenders · *stated geography: "China (national / developer and SI contractor ecosystem on Gitee and GitHub)"* · [record](examples/records/nongyedao-huizhi.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **National Agricultural Scientific Data Infrastructure (China)** — China operates a national system of scientific data centers to share research data as public infrastructure. · *stated geography: "China (national)"* · [record](examples/records/china-ag-data-infrastructure.md) · ⌗ ag-data · [examples/records/china-ag-data-infrastructure.md](examples/records/china-ag-data-infrastructure.md)
- **Sinong (神农, Shennong) — Agricultural Foundation Model** — Sinong is described as China's first open-source, agriculture-specific large language model: a vertical "agricultural brain" trained on agricultural knowledge to support farmers, agronomists, breeders, veterinarians, and agricultural economists with domain-accurate reasoning rather than generic chatbot responses. · *stated geography: "China (Nanjing Agricultural University); open weights distributed globally via ModelScope and GitHub"* · [record](examples/records/sinong.md) · ⌗ language-ai · [examples/records/sinong.md](examples/records/sinong.md) · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **WAGRI (Agricultural Data Collaboration Platform)** — Japan's WAGRI is a state-built agricultural data platform that links data and services through APIs so that farmers, machinery makers, ICT vendors, and service companies can collaborate on data-driven agriculture. · *stated geography: "Japan (national)"* · [record](examples/records/wagri.md) · ⌗ ag-data · [ROADMAP.md](ROADMAP.md) · [examples/records/wagri.md](examples/records/wagri.md) · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Zhejiang Zhinongma** — Provincial ag DPI mini-program (WeChat, MARA Cloud) · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **青蛙智慧农业平台 (Frog Smart Ag)** — Open-source smart agriculture platform (Gitee/GitHub) · *stated geography: "China"* · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)

### Governments & public bodies (6)

- **MAFF** — Japan's agriculture ministry operating WAGRI · *stated geography: "Japan"* · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **MARA** — Ministry of Agriculture and Rural Affairs; national smart agriculture policy programme and MARA Cloud / Big Data Development Center · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md) · [research/2026-08-china-open-agrifood-ecosystem-scan.md](research/2026-08-china-open-agrifood-ecosystem-scan.md)
- **MIIT** — Ministry institution involved in national scientific data centers · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **MOE** — Ministry institution involved in national scientific data centers · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **NARO** — Japanese ag research agency operating WAGRI with MAFF · *stated geography: "Japan"* · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **National Smart Agriculture Action Plan** — National smart agriculture policy action plan (reported via USDA FAS) · *stated geography: "China"* · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)

## South Asia (India, Nepal, Bhutan) (27)

### People (1)

- **Vandana Shiva** — founder of Navdanya (from 1991) · *stated geography: "India (network across 22 states) and Bhutan"* · → Navdanya · ⌗ seed commons · [examples/records/navdanya.md](examples/records/navdanya.md)

### Organizations (7)

- **Bhutan ARDC-Wengkhar** — Agricultural research centre where Mycodo ran an 8+ month peer-reviewed hydroponic deployment · *stated geography: "Bhutan"* · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md)
- **Community Seed Banks Association of Nepal (CSBAN)** — Links Nepal's community seed banks; developed online catalogue and 'Our Seed' mobile app · *stated geography: "Nepal"* · [record](examples/records/community-seed-banks-nepal.md) · ⌗ seed commons · [examples/records/community-seed-banks-nepal.md](examples/records/community-seed-banks-nepal.md) · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Kathmandu University** — R&D intermediary in Nepal's open agrifood layer · *stated geography: "Nepal"* · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **LI-BIRD** — Research intermediary on community seed banks and farmers' rights · *stated geography: "Nepal"* · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Navdanya** — Founder-led seed-sovereignty movement with community seed banks, Seed Satyagraha and biopiracy documentation; CSB counts contested (111/150+ claimed vs 54 per Wikipedia) · *stated geography: "India (network across 22 states) and Bhutan"* · [record](examples/records/navdanya.md) · ⌗ seed commons · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **Nepal Agroforestry Foundation** — Researchers in the PLOS ONE Kon-Tiki Nepal field trials · *stated geography: "Nepal"* · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Shivagunj CSB** — Community seed bank doing seed production, local-variety conservation and income generation · *stated geography: "Nepal"* · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)

### Projects & platforms (8)

- **Ama KrushAI** — Deployed farmer chatbot (with Samagra, Odisha DAFE) · *stated geography: "Odisha"* · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Babai smart irrigation pilot** — IWMI pilot: sensors, dashboards, water-user associations, real-time flow/soil data · *stated geography: "Nepal"* · ⌗ open-hardware · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Bhashini** — India's language DPI (MeitY); PM-KISAN voice chatbot running 11 regional languages · *stated geography: "India / national; 11+ regional languages in agrifood use (22 scheduled languages overall)"* · [record](examples/records/bhashini.md) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · +1 more
- **Deonar-AI (Ubada12)** — Open-source real-time livestock detection/counting (YOLOv11 + ByteTrack, Apache-2.0) for an operating abattoir · *stated geography: "India (Deonar abattoir, Mumbai)"* · ⌗ language-ai · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **DESIS 2.0 — Digitally Enabled Seed Information System (Nepal)** — National digital seed information system; began as CIMMYT/USAID-supported, now under Nepal's Seed Quality Control Center · *stated geography: "Nepal; national seed-sector infrastructure across federal, provincial, and local institutions"* · [record](examples/records/desis-nepal.md) · ⌗ seed commons · [examples/records/desis-nepal.md](examples/records/desis-nepal.md) · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Nepal Terra Preta project** — Original driver of the Kon-Tiki's open technology transfer to farmers · *stated geography: "Nepal"* · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **SolarFood** — Women-led cooperative solar-dryer development aiming at local manufacturing; open artefact not yet public · *stated geography: "Nepal and Bhutan; Kathmandu University and local women-led cooperatives in the project ecosystem"* · [record](examples/records/solarfood-nepal.md) · ⌗ energy-byproducts · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Sustainable Rural Ecology for Green Growth (Nepal)** — Nordic Development Fund-documented project: biochar field trials in 15 villages, farmer-to-farmer dissemination · *stated geography: "Nepal"* · ⌗ energy-byproducts · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)

### Governments & public bodies (11)

- **AgriStack / Digital Agriculture Mission** — India's ag DPI: farmer registries, geo-referenced village maps, crop sown registry, consent-manager architecture (₹2,817 crore budget) · *stated geography: "India (national)"* · [record](examples/records/agristack.md) · ⌗ ag-data, standards · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **CCDABC** — National public institution anchoring Nepal's seed infrastructure · *stated geography: "Nepal"* · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Department of Agriculture (Nepal)** — National public institution in Nepal's ag infrastructure · *stated geography: "Nepal"* · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Government of India** — State operator of AgriStack; asserts consent-based design · *stated geography: "India"* · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **MeitY** — Ministry behind Bhashini language DPI · *stated geography: "India"* · ⌗ language-ai · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md)
- **Ministry of Agriculture (Nepal)** — Involved in the Nepal biochar field trials · *stated geography: "Nepal"* · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **NARC** — Nepal Agricultural Research Council; formal infrastructure and regulatory anchor · *stated geography: "Nepal"* · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **National Gene Bank (Nepal)** — National public institution for genetic resources · *stated geography: "Nepal"* · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Nepal Seed Quality Control Center** — Hosts DESIS 2.0 national seed catalogue/certification platform · *stated geography: "Nepal"* · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Odisha DAFE** — State ag department in the Ama KrushAI deployment · *stated geography: "Odisha"* · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **PM-KISAN** — Government scheme served by Bhashini's 11-language voice chatbot · *stated geography: "India"* · ⌗ language-ai · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-programme-briefing.md](research/2026-08-programme-briefing.md)

## Southeast Asia (1)

### Organizations (1)

- **SEARICE** — Farmer-led regional seed-systems NGO (CONSERVE with 1,100+ rice varieties, participatory plant breeding, farmer field schools, anti-UPOV advocacy) · *stated geography: "Southeast Asia (Philippines-based; regional programmes)"* · [record](examples/records/searice.md) · ⌗ seed commons · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)

## Africa (13)

### People (1)

- **Gauthier, Ndiaye, Guissé** — researchers behind the Kallaama national-language corpus initiative · *stated geography: "Senegal / West Africa; Wolof, Pulaar, Sereer (~10M native speakers)"* · → Kallaama · ⌗ language-ai · [examples/records/kallaama.md](examples/records/kallaama.md)

### Organizations (4)

- **African Centre for Biodiversity (ACB)** — African seed-sovereignty advocacy lead ('Seed Is Life' documentary 2025); its site timed out so it is carried as a lead only · *stated geography: "South Africa/Zimbabwe"* · ⌗ seed commons · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **Berin (Mini-Pivot)** — Berin Mini-Pivot irrigation vendor; closed hardware · *stated geography: "Zimbabwe"* · ⌗ open-hardware · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Digital Earth Africa** — Geospatial workflows org; crop-type work under Enabling Crop Analytics initiative · *stated geography: "Africa; Zambia, Namibia, and later scaling references to Niger, Rwanda, and Mozambique"* · [record](examples/records/digital-earth-africa-crop-type.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)
- **Farm Africa / NECPA** — NGO publishing low-cost solar dryer open design document (licence unstated), distributed via trained artisans · *stated geography: "Lira, northern Uganda (North East Chilli Producers Association, NECPA); design intended for replication by local artisans"* · [record](examples/records/farm-africa-necpa-solar-dryer.md) · ⌗ energy-byproducts · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)

### Networks (1)

- **AfricaOSH** — African open-science-hardware community infrastructure (summits, GitHub org) · *stated geography: "Africa (pan-African community); GOSH-affiliated"* · [record](examples/records/africaosh.md) · ⌗ open-hardware · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)

### Projects & platforms (7)

- **Agricultural Commodity Exchange for Africa (ACE)** — Smallholder grain producers often sell immediately after harvest because they lack storage, market information, finance, and bargaining power. · *stated geography: "Malawi / Southern and Eastern Africa links"* · [record](examples/records/ace-africa.md) · [examples/records/ace-africa.md](examples/records/ace-africa.md)
- **CyberTracker** — Expert trackers (the Kalahari San origins are the founding case) hold knowledge that paper forms and scientific protocols can't capture without stripping its structure. · *stated geography: "global (Cape Town, South Africa origin; used by Indigenous communities and community-science projects worldwide)"* · [record](examples/records/cybertracker.md) · [examples/records/cybertracker.md](examples/records/cybertracker.md)
- **Global Open Data for Agriculture and Nutrition (GODAN)** — GODAN addresses fragmented agricultural and nutrition data, weak coordination, and the need to make relevant data more accessible and usable. · *stated geography: "global; Africa-relevant agricultural and nutrition data coordination"* · [record](examples/records/godan.md) · [examples/records/godan.md](examples/records/godan.md)
- **Haki des Femmes** — Voice-enabled Android app answering women's land-ownership queries in Kiswahili; built by Core23Lab · *stated geography: "DRC (Katanga and Lualaba provinces)"* · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Kallaama** — Named ag speech model/dataset in the open-language-data layer · *stated geography: "Senegal / West Africa; Wolof, Pulaar, Sereer (~10M native speakers)"* · [record](examples/records/kallaama.md) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Open Data Kit (ODK)** — Open data-collection software; hybrid open-core + commercial hosted service · *stated geography: "global; documented use in resource-limited and African field research"* · [record](examples/records/open-data-kit.md) · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +3 more
- **SAGDA (Synthetic Agriculture Data for Africa)** — Open-source Python toolkit for synthetic climate, soil, yield and fertiliser data generation · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)

## Middle East & North Africa (1)

### Organizations (1)

- **HomeBiogas Ltd.** — Proprietary domestic/smallholder digester vendor (TASE: HMGS); patents to 2037 · *stated geography: "Israel"* · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)

## Latin America & Caribbean (8)

### Organizations (3)

- **PAIS Kit / Livelihoods / Sebrae** — Affordable-but-closed agroecology kit distribution (contrast case) · *stated geography: "Brazil"* · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Sistema.bio** — B Corp with >50,000 digesters; proprietary IoT smart meters (with Inclusive Energy), PAYG lockout, Gold Standard credits · *stated geography: "Mexico-founded (deployments Kenya, India, Latin America)"* · ⌗ standards, energy-byproducts · [ROADMAP.md](ROADMAP.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **UNSAM** — Universidad de San Martín; Bioleft's university home and funder; research-led Argentine open design · *stated geography: "Argentina"* · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)

### Networks (1)

- **Flying Labs Network** — Localized drone/data/AI capacity network (WeRobotics nonprofit + independent local hubs); agriculture a named sector · *stated geography: "close to 40 countries across Africa, Latin America, the Caribbean, and Asia-Pacific"* · [record](examples/records/flying-labs.md) · ⌗ robotics-machines · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)

### Projects & platforms (4)

- **Bioleft** — Participatory open-source seed commons that adds open data to the seed commons; deliberate bridge between open source and agroecology · *stated geography: "Argentina / Latin America"* · [record](examples/records/bioleft.md) · ⌗ seed commons · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **Open Agroecology Lab (REGOSH)** — Open-source digital infrastructure for agroecology (farmOS + SurveyStack + open sensing) with co-designed data governance; Shuttleworth-funded; activity documented 2018-2023, post-2023 unverified · *stated geography: "Argentina (Mendoza, Buenos Aires, Córdoba and other provinces); networked with GOSH and OpenTEAM internationally"* · [record](examples/records/regosh-open-agroecology-lab.md) · ⌗ ag-data, open-hardware · [examples/records/regosh-open-agroecology-lab.md](examples/records/regosh-open-agroecology-lab.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **OpenFlexure Microscope (Agrifood Soil & Pathology)** — Assessing biological soil health (nematodes, mycorrhizae, fungal-to-bacterial ratios) and screening for plant pathogens (spores, foliar blights, waterborne contaminants) requires laboratory-grade microscopy with precision sample positioning. · *stated geography: "International (UK, Tanzania, Panama, Latin America / Gathering for Open Science Hardware - GOSH & REGOSH network)"* · [record](examples/records/openflexure-microscope.md) · ⌗ open-hardware · [examples/records/openflexure-microscope.md](examples/records/openflexure-microscope.md) · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md)
- **Potato Park** — Indigenous-governed biocultural commons of ~600 native potato varieties under a collective community council, with CIP repatriation and a Crop Trust in-situ genetic reserve · *stated geography: "Cusco, Peru (altitude 3,400-4,600m); five Quechua communities"* · [record](examples/records/potato-park.md) · ⌗ seed commons · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)

## Oceania & Pacific (9)

### People (1)

- **Alex Paly** — individual maker; OpenFence virtual-fencing project · *stated geography: "Australia / Global (designed for rotational and holistic cell grazing rangelands)"* · → OpenFence · [examples/records/openfence.md](examples/records/openfence.md)

### Organizations (4)

- **Blackmores** — Producer partner in Alibaba's blockchain anti-counterfeit initiative · *stated geography: "Australia"* · [grocery/research/traceability.md](grocery/research/traceability.md)
- **National Farmers' Federation (NFF)** — Farmer federation running the Australian Farm Data Code · *stated geography: "Australia"* · ⌗ ag-data · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **National Library of New Zealand** — Institution adopting an open-access strategy · *stated geography: "New Zealand"* · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Service Seeking** — Platform fined $600,000 for letting businesses draft their own reviews and ratings · *stated geography: "Australia"* · [grocery/research/consumer-feedback.md](grocery/research/consumer-feedback.md)

### Projects & platforms (3)

- **Australian Farm Data Code** — Voluntary farm data code (farmer-org instrument) · *stated geography: "Australia"* · ⌗ ag-data · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **OpenFence** — Open virtual fencing design (GPL-3.0, dormant candidate) · *stated geography: "Australia / Global (designed for rotational and holistic cell grazing rangelands)"* · [record](examples/records/openfence.md) · ◉ dormant · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md) · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **Stock Synthesis 3 (SS3)** — NOAA's flagship age-structured stock-assessment engine (CC0, very active) · *stated geography: "international (NOAA origin; adopted by DFO Pacific in 2021)"* · [record](examples/records/ss3.md) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)

### Governments & public bodies (1)

- **ACCC** — Regulator behind the Service Seeking fake-review penalty and guidance on spotting fake reviews · *stated geography: "Australia"* · [grocery/research/consumer-feedback.md](grocery/research/consumer-feedback.md)

## Indigenous nations and territories (as stated) (1)

### Organizations (1)

- **Sogorea Te' Land Trust** — Urban land rematriation example (Shuumi Land Tax) in the land pillar · *stated geography: "Lisjan Ohlone territory"* · ⌗ land-tenure · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)

## Geography not stated in the corpus (483)

### People (46)

- **Aaron Ault** — OADA project lead (Purdue); founding voice on farmer data ownership · ⌗ ag-data · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Alyssa Overend** — Future Herd guest (Episode 24) on food choice as identity, class, memory and culture · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Arthur Potts Dawson** — Chef and co-founder of The People's Supermarket · → The People's Supermarket (TPS) · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **Bill Oemichen** — Named participant in the ag-data governance symposium · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Camden Lawrence** — Corpus guest (episodes 9/23) on imperfect produce and undersized poultry that 'could feed that community'; grounding for the farm-surplus input stream · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [upcycling/concept.md](upcycling/concept.md)
- **Charles Levkoe** — Future Herd guest (Episode 26) whose three-pillar food-sovereignty frame refuses to let any pillar stand alone · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Chris Hildreth** — AgriKit founder; previously founded TOPSOIL · → AgriKit · → TOPSOIL · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Dan Lussier** — Of EMILI Canada; named participant in the ag-data symposium · → EMILI Canada · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Darcy Herauf** — Of Farm Credit Canada's AgExpert division; named symposium participant · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **David Barrie** — Urban creative and co-founder of The People's Supermarket · → The People's Supermarket (TPS) · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **Dirk Prins** — Priva Strategic Business Manager (Open Platform/API quote) · → Priva · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **Dr. Culhane** — Solar CITIES lead (T.H. Culhane) · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Dr. Joshua M. Pearce** — Leads the FAST Research Group and WIRED field station; open sustainability hardware research · → FAST Research Group (uwo-fast) · ⌗ open-hardware · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Eric Eldred** — Co-founder of Creative Commons; namesake of the Eldred copyright challenge · → Creative Commons · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Garethe Hughes** — Author of the DFC Standard's v2.0.0 upgrade guide and the DFC/Beckn comparison posts · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Hal Abelson** — Co-founder of Creative Commons · → Creative Commons · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Hans Peters** — Priva CEO ('App Store of horticulture' quote) · → Priva · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **Hugh McLaughlin** — Designer of the TLUD/JRO open biochar stove designs in the IBI collection · → IBI open-source biochar technologies (aggregator) · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Irena Knezevic** — Academic who co-developed the SSFPA policy brief based on 80 interviews with 83 stakeholders · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md)
- **Jake (surname unknown)** — AgOpenGPS contributor: farmer and machinist who learned PCB design and built an all-in-one auto-steering controller · → AgOpenGPS · ⌗ robotics-machines · [research/canadian-farmers-open-source-community-scan-2026-08.md](research/canadian-farmers-open-source-community-scan-2026-08.md)
- **Jamie Oliver** — Chef whose Food Revolution Day was the launch moment for Open Food Facts · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **Jamie Reaume** — Future Herd guest (Episode 10) on institutional echo chambers and dissent as commitment · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Jay Smart** — Design lead of Compost for Good; posted the project's open design on permies.com · → Compost for Good · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Jesse Hirsh** — The project's user; of Metaviews (the repo's GitHub organisation); his testimonial appears on CFIN's Food 4.0 page · → Metaviews · [ROADMAP.md](ROADMAP.md) · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Kate Bull** — Ex-senior retail executive and co-founder of The People's Supermarket · → The People's Supermarket (TPS) · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md)
- **Keith Lee** — TikTok food influencer named as the marker of the 30-second influencer-review phenomenon · [grocery/research/consumer-feedback.md](grocery/research/consumer-feedback.md)
- **Kelpie Wilson** — Biochar designer of the Wilson TFOD and backyard open methods in the IBI collection · → IBI open-source biochar technologies (aggregator) · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Killorn** — Future Herd guest (Episode 31) on edge computing and dark data in Canadian farm strategy · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Lawrence Lessig** — Co-founder of Creative Commons; author of Free Culture (2004) · → Creative Commons · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Lori Nikkel** — CSA K100 technical committee vice chair quoted on why the national measurement standard was needed · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **MacTavish** — Future Herd guest (Episode 31) · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Marc-André Pigeon** — Named participant in the ag-data governance symposium · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Mike Paterson** — AgriKit co-founder/CFO (CPA) · → AgriKit · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Mohamad Yaghi** — Future Herd guest (Episodes 21, 31) whose frame treats AI as decision-support, not automation · ⌗ language-ai · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Mohsen Yoosefzadeh** — Originator of the dark-data concept: unused archived research data as latent substrate for agricultural AI · ⌗ language-ai · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Murray Fulton** — Named participant in the ag-data governance symposium · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Myriam Bouré (MyriamBoure)** — Author of the 2016 OFN community thread stating the DFC's problem statement and vision · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Rachel (OFN contributor)** — OFN community member who documented OFN's decision process and its friction points (Feb 2021 thread) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Rachel Arnould** — Of the DFC; explains the standard was built because no applicable standards existed · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Sarah Elton** — Future Herd guest (Episode 32) whose posthumanist frame extends the food system to the microbiome · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Shiloh Maples** — Anishinaabe seedkeeper quoted on seeds as relatives · ⌗ seed commons · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **Silke Hemming** — Leads WUR greenhouse horticulture; named in the who-to-ask list · ⌗ cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md)
- **Theresa Schumilas** — Documented OFN's three-level subsidiarity governance and structural transparency on the P2P Foundation wiki · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Tianna Brand** — Future Herd guest (Episode 33) on meeting people where their futures already are; agency vs. determinism · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Tyler McCann** — Future Herd guest (Episode 7) framing agri-food as a strategic sector, not a commodity engine · [docs/events/event-design-brainstorm.md](docs/events/event-design-brainstorm.md)
- **Yang Yang** — Named participant in the ag-data governance symposium · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)

### Organizations (296)

- **ACE Africa** — Commodity exchange with warehouse receipts, market information systems and electronic trading · [research/2026-08-grain-value-chain-open-infrastructure-scan.md](research/2026-08-grain-value-chain-open-infrastructure-scan.md)
- **AEF / ISOBUS** — Vendor-coordinated standards body for the ISOBUS ecosystem · ⌗ standards, robotics-machines · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md)
- **Afresh** — AI-based ordering technology used by PCFWC retailers to order produce in the right quantities · ⌗ language-ai · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **AGCO** — Ag equipment maker named for its cybersecurity incident · ⌗ resilience · [ROADMAP.md](ROADMAP.md)
- **AGRA** — Named deployment/infrastructure actor in the field guide's Global South material · [research/field-guide-transfer-map.md](research/field-guide-transfer-map.md)
- **Agricultural Justice Project** — Recipient of NCG food co-op solidarity funding · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **Agriculture Workers Alliance (UFCW)** — UFCW's agricultural worker support infrastructure (10 support centres, 13,000+ members) · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **AGRIS Solar Co-op** — Named as part of the cooperative aggregation examples in the energy scan · ⌗ co-op grocery, energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Agrivoltaics Canada** — Sector voice contesting Ontario's agrivoltaics ban · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **AgriWebb** — Proprietary grazing management vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **AgStack Foundation** — Linux Foundation project for open agricultural digital infrastructure (46 repos; Asset Registry, GeoIDs, INATrace, Pancake) · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)
- **AI71** — Publisher of the AgriLLM model card (Llama-agrillm-3.3-70B) · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/sources/README.md](research/sources/README.md)
- **AKVA** — Proprietary commercial aquaculture feeding vendor (counterpart) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Alianza Nacional de Campesinas** — Recipient of NCG food co-op solidarity funding · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **Alibaba** — Blockchain initiative against counterfeit food sales, partnering with producers such as Australia's Blackmores · → Alibaba ET Agricultural Brain · [grocery/research/traceability.md](grocery/research/traceability.md)
- **All Pueblo Grows** — Seed lending library (via Pueblo Extension) named in the seed-access discussion · ⌗ seed commons · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **Allflex (Merck)** — Proprietary livestock biometrics vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Alliance of Bioversity International and CIAT** — Published the Nepali community seed bank account; R&D intermediary · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Amber Agriculture** — Closed grain telemetry vendor (counterpart) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **American Farm Bureau Federation** — 2023 MOU with Deere on dealer-equivalent repair documentation; contested by PIRG · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Americold** — Cold-storage major cited in Canadian concentration context · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Antonello Produce** — Produce firm on IBM Food Trust with consumer-scannable QR codes · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Arctic Eider Society** — Runs SIKU; Canadian Space Agency satellite-data partnership (2025) · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **ArduSimple** — Commercial GNSS hardware inside an open ecosystem · ⌗ open-hardware · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md)
- **Arvo-Tec** — Proprietary commercial aquaculture feeding vendor (counterpart) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Asociación ANDES** — Named with the Potato Park communities as the strongest Indigenous territory-governance case in the corpus · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **Aspexit** — Origin of the Wiki Agri Tech catalogue; its tool classification treated as reference by the French Ministry of Agriculture · [ROADMAP.md](ROADMAP.md)
- **Athena Infonomics** — Co-author of the Farmer-Centric Data Governance report · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **Barn2Door** — Closed direct farm commerce counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Big Ox Energy** — Bought the Linkenmeyer digester and switched feedstock to industrial waste (developer capture) · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **BinMaster** — Closed grain silo telemetry vendor (counterpart) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **Bionutrient Institute** — Open crowd-sourced calibration datasets for crop phytochemicals · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md)
- **Black Basta** — Ransomware group suspected in the Sobeys/Empire incident · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **BlackMatter** — Ransomware group that attacked NEW Cooperative (2021) · ⌗ resilience · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Blue Radix** — Partner named on Priva Open Platform · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **Bonnefield** — Institutional farmland owner (~140,000 acres in Canada) · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **BouMatic** — Fourth milking-robot vendor in the Ontario robot market · ⌗ robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **British Library** — Institution adopting an open-access strategy · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Bunge** — Industrial biofuel refiner (no farm-scale/open layer) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Butler Hospitality** — Ghost-kitchen company that dissolved · ◉ defunct/archived · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **C3** — Ghost-kitchen company that closed at least one food hall · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **Cadasta** — Open tenure records platform named as land-workstream entry point · ⌗ land-tenure · [ROADMAP.md](ROADMAP.md)
- **Cagette.net** — Early participant in the Data Food Consortium · ⌗ co-op grocery · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Canadian Dairy XPO** — Dairy expo community named in the who-to-ask list for fleet-level technology strategy · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **CANZA** — Co-publisher (with Énergir) of the House of Commons FINA brief on agricultural RNG · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Cape Ann (CSF)** — US CSF movement exemplar · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Carrefour** — Retailer providing blockchain-based traceability via QR codes (free-range chickens, Europe) · [grocery/research/traceability.md](grocery/research/traceability.md)
- **CDE Bern** — University of Bern Centre for Development and Environment; Land Matrix governance partner · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **CGF (Consumer Goods Forum)** — FLW Standard partner; its members committed to 50% food-waste reduction by 2025 · → FLW Standard (Food Loss and Waste Accounting and Reporting Standard) · ⌗ standards, food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **CGIAR** — Global ag research network; Drones for Agriculture work with Tanzania Flying Labs; Digital Innovation Initiative parent · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md) · [research/sources/README.md](research/sources/README.md)
- **Chefs to End Hunger** — Programme embedding donations into the distribution system · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **CIMMYT** — Research org in the Jones-Garcia 2022 farmer voice-message study · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **CIP** — Gene bank that repatriated 410 potato cultivars to the Potato Park · ⌗ seed commons · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **CleBer LLC** — Private maker of the Oggún tractor · → Think Oggún (Oggún tractor) · ⌗ robotics-machines · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Clipper** — Closed industrial seed-cleaning vendor (counterpart) · ⌗ seed commons · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **CNH Industrial** — Leaf Agriculture production user; equipment OEM · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Co-Develop** — Partner in the DPI-for-agriculture report · ⌗ standards · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **CoolBot** — Proprietary cool-room controller ($400) cited as closed counterpart · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **CoopCircuits** — Platform named with Open Food France as user of the D/D+8/D+16 decision model · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Core23Lab** — Developer of Haki des Femmes · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Cornell Cooperative Extension** — US community-cannery tradition and guidance · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **CowManager** — Proprietary livestock monitoring vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Craft Maltsters Guild** — Guild organizing malting equipment knowledge as members-only (counter-example) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Creative Commons** — Licensing bridge that carried the open-source idea into culture; founded 2001; licenses on billions of works · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Crippen** — Closed industrial fanning-mill vendor (counterpart) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **Crop Trust** — Partner in the Potato Park's in-situ genetic reserve (2017) · ⌗ seed commons · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md)
- **CropMobster** — Platform helping farmers and food entrepreneurs offload surplus at discounted prices · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **CropX** — Closed crop-water DSS vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **D:Food/Web Initiative** — Emerging coalition advancing food and data sovereignty through decentralized, community-driven technologies (OFN Canada partner) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Davis** — Closed weather/soil telemetry vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **Decagon / METER Group** — Closed soil hydrology telemetry vendor (counterpart) · ⌗ open-hardware · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **Deere & Company (John Deere)** — Farm equipment OEM; July 2026 FTC settlement requiring dealer-equivalent repair resources for 10 years · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **Deliveroo** — Gig-economy delivery counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Development Gateway** — Organization that produced the JoinData agricultural-data case study · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md) · [research/sources/README.md](research/sources/README.md)
- **DFA (Dairy Farmers of America)** — Dairy cooperative creamery (governance substrate) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Digital Green** — Nonprofit operating FarmStack · → FarmStack · → FarmerChat · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Digital Technology Supercluster** — Supercluster describing the Standard Data Platform project (also built FoodMesh's marketplace via Traction on Demand) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md) · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Divert Inc.** — Retail waste-visibility service provider; its framing shows opacity as a saleable problem · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **DoorDash** — Gig-economy delivery counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Dorchester Community Food Co-op** — Community food co-op in development; participatory-grocery example · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **DSG** — Proprietary commercial aquaculture feeding vendor (counterpart) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **DTN** — Acquired Grain Discovery (announced July 2025); closed grain origination SaaS · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **ECHO** — Appropriate-technology resource organization; lead for next pass · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Ecology Action Centre** — Partner that helped launch Off the Hook CSF · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **EMILI Canada** — Named in Canadian ag-data governance discussions; needs direct verification · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Enbridge Gas** — Gas utility whose Low-Carbon Voluntary Program was denied cost recovery · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Ericsson** — Company feeding heat into Nordic municipal heat networks · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **FAO** — UN ag body; agroecology framework, Farm Hack hub record, AIMS open-science-hardware summit host · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md) · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · +1 more
- **Farm Radio International** — Farmer voice-message extension organization analyzed in the Common Voice research chain (Swahili, Hausa) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Farm to Cafeteria Canada** — Initiative named in the institutional-procurement workstream · [ROADMAP.md](ROADMAP.md)
- **Farmer Connect** — Coffee traceability platform on IBM Blockchain · [grocery/research/traceability.md](grocery/research/traceability.md)
- **FarmLINK** — Farmland-access programme named as land-workstream entry point · ⌗ land-tenure · [ROADMAP.md](ROADMAP.md)
- **Federation of Southern Cooperatives** — Recipient of NCG food co-op solidarity funding · ⌗ co-op grocery · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **FENECON** — Deploys OpenEMS across tens of thousands of European storage systems · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **FieldClock** — Employer-side labour software exemplifying surveilled work behind the counter · [grocery/labour-layer.md](grocery/labour-layer.md)
- **FieldView** — Closed farm data platform (counterpart) · ⌗ ag-data · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **First Nations Information Governance Centre** — OCAP governance body; OCAP named as appearing once in the corpus · [ROADMAP.md](ROADMAP.md)
- **Fitec** — Vendor of the Self-Cleaning digester at ZooShare · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Food and Culture Center** — Runs the Ethnic Grocery Store oral history project; search signal for the culture layer · [grocery/research/suggested-next-targets.md](grocery/research/suggested-next-targets.md)
- **Food Cowboy** — Donation routing platform for rejected deliveries along truck routes · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **FoodReady** — Commercial food-safety tool (closed counterpart) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Foothill Greenhouse** — Greenhouse with 3.2 MW on-site CHP plus an approved 1.2 MW CHP (2023) serving as a grid asset · ⌗ cea · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Free Software Foundation** — Purist critic of 'some rights reserved' CC licences · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Future Herd** — Hosts the 'Building the Open-Source Future of Canadian Agrifood' event (24 Nov 2026, Discord), its custom server and its 36-episode editorial record · [README.md](README.md) · [ROADMAP.md](ROADMAP.md) · [docs/events/event-agenda.md](docs/events/event-agenda.md) · +4 more
- **Gallagher (eShepherd)** — Proprietary virtual fencing vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **GIGA** — Land Matrix governance partner · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **GIZ** — Development agency running FAIR Forward · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **GODAN** — Global open-data-in-agriculture network (GODAN 2.0) in the initial source set · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/2026-08-landscape-synthesis.md](research/2026-08-landscape-synthesis.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · +2 more
- **Gold Standard** — Carbon-credit standard paired with Sistema.bio meters as the new enclosure of biological byproducts · ⌗ open-hardware · [ROADMAP.md](ROADMAP.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Goodly Foods** — GVFB social enterprise making soups/stews/sauces from surplus — upcycling example · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Goteo.org** — Cooperative crowdfunding platform (€25M over 15 years) named in the ecosystem · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md)
- **Greenfield Global** — Industrial ethanol refiner · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **GreenWave** — 3D ocean kelp/shellfish farming model distributed via open manuals and Farm Design Tool; no explicit open licence · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Grower Information Services Cooperative (GISC / GiSC)** — Data cooperative lead for follow-up pass (per Policy Review glossary) · [record](examples/records/gisc.md) · → NAPDC / Ag Data Coalition (Growers Agricultural Data Cooperative) · ⌗ ag-data · ◉ defunct/archived · [examples/records/gisc.md](examples/records/gisc.md) · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **GS1** — Standards body behind barcodes and the Global Traceability Standard — the dominant interoperability grammar for food traceability · ⌗ standards · [grocery/research/traceability.md](grocery/research/traceability.md) · [grocery/synthesis.md](grocery/synthesis.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Haisheng** — Enterprise adopter of ET Agricultural Brain · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **Halter** — Proprietary virtual fencing vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **HEAL Food Alliance** — Recipient of NCG food co-op solidarity funding · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **HLPE** — Body behind the 10-element agroecology framework (2019) in which open source is not a central element · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Hodmedod's** — Trade store participating in the Food Data Collaboration pilots · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Hoogendoorn** — Proprietary climate computer vendor (closed control counterpart) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Hunter Hydrawise** — Closed irrigation controller vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **i-Open Group** — Consortium partner in the autonomous-agriculture data platform · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **iAuditor** — Commercial inspection/food-safety tool (closed counterpart) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **IBM Food Trust / OpenSC / Provenance** — Closed/defunct blockchain seafood pilots that did not yield a durable open stack · ◉ defunct/archived · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **IEC** — Standards body behind IEC 62443, tailored by CSA T201 for agri-food · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **IFT Global Food Traceability Center** — Launched the Traceability Driver tool automating conversion of traceability data into compliant formats · [grocery/research/traceability.md](grocery/research/traceability.md)
- **ILC (International Land Coalition)** — Multi-stakeholder coalition governing Land Matrix · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Inclusive Energy** — Co-developer of Sistema.bio's proprietary smart biogas meters · ⌗ open-hardware, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Instacart** — Gig-economy delivery counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **International Biochar Initiative (IBI)** — Industry/standards body hosting the 'Open Source Biochar Technologies' aggregator page (multiple kiln designs, 32-page pyrolysis plant guidelines); an open-access collection, not a single licenced commons · → IBI open-source biochar technologies (aggregator) · ⌗ energy-byproducts · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Internet Freedom Foundation (IFF)** — Legal review and consultation comments critical of AgriStack · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Inuit Tapiriit Kanatami** — Its food-security strategy is the entry point for the northern food systems workstream · [ROADMAP.md](ROADMAP.md)
- **Invafresh** — Fresh retail platform selected by Federated Co-operatives Ltd. · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **IPES-Food** — Panel whose 'Head in the Cloud' (Feb 2026) paper critiques digital-agriculture enclosure and names commons, gift-economy and open-source frameworks as counter-currents · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **IRRI** — Runs PaddyMitra chatbot · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **IUNU** — Partner named on Priva Open Platform · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **IWA (International Water Association)** — ADM1 anaerobic digestion model (2002) ecosystem · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **IWMI** — Runs the Babai smart irrigation pilot in Nepal · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **JBS** — Major beef processor (JBS Brooks AB); concentration and 2021 ransom payment evidence · [ROADMAP.md](ROADMAP.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [research/2026-09-cybersecurity-resilience-scan.md](research/2026-09-cybersecurity-resilience-scan.md)
- **KickStart (MoneyMaker)** — Vendor of MoneyMaker low-cost irrigation pumps; closed hardware · ⌗ open-hardware · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Land F/X** — Closed landscape CAD suite named as the proprietary alternative to open spatial design tools · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **Leaf Agriculture** — Commercial API aggregator that captured the farm-data interoperability need · ⌗ standards · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Les Communs** — Provider of the Keycloak server used for Open ID Connect in the FDC pilots · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **LetsGrow.com** — Vendor greenhouse data platform (closed data counterpart) · ⌗ ag-data, cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **LI-COR** — Closed vendor of soil gas analyzers (cost contrast) · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md)
- **Liander** — Grid operator in the Uithoorn heat-network agreement · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Lincoln Institute** — CLT model documentation partner · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Lineage** — Cold-storage major cited in Canadian concentration context · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Local Line** — Closed food-hub wholesale counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **LocalFoodMarketplace** — Online storefront platform used by Fireweed and OVFC for ordering cycles · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md) · [grocery/research/consumer-feedback.md](grocery/research/consumer-feedback.md)
- **LocallyGrown** — Competing platform whose comparison piece frames OFN's open-source governance as optional and costly · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Longo's** — Chain in food-bank retail recovery partnerships · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Lotek** — Proprietary wildlife/livestock telemetry vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **MaiaGrazing** — Proprietary grazing management vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **MANAGE** — Extension institution whose Hindi material circulates the open-seed-licence concept · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md)
- **MarketMaker** — Closed food marketplace counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Meta** — Named as the vivid openwashing example ('Meta is co-opting that culture... using it as camouflage') · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Metaviews** — Jesse Hirsh's organization; the GitHub organisation hosting this repository; quoted/testimonial on CFIN's Food 4.0 page · [ROADMAP.md](ROADMAP.md) · [docs/events/stakeholder-briefing-2026-08-05.md](docs/events/stakeholder-briefing-2026-08-05.md) · [upcycling/research/cfin-and-support-programmes.md](upcycling/research/cfin-and-support-programmes.md)
- **Metro (grocery chain)** — Chain in food-bank retail recovery partnerships · ⌗ co-op grocery · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Migrant Workers Alliance for Change** — Member-led migrant worker advocacy (Status-for-All campaign) · [ROADMAP.md](ROADMAP.md) · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **MIT** — Origin of the small-farm parametric 3-D-printable tool library in the openagris3d record · [ROADMAP.md](ROADMAP.md)
- **Moocall** — Proprietary livestock sensor vendor (closed counterpart) · ⌗ open-hardware · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **MOST** — OSAT academic current named alongside Appropedia · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Mozilla Foundation** — Runs Common Voice and its Kiswahili program; catalyzed Haki des Femmes · → Mozilla Common Voice · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **NAFSA (Native American Food Sovereignty Alliance)** — Indigenous food sovereignty frame (NAFSA pillars) carried into waste-diversion design · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **NAMA (North American Marine Alliance)** — Co-founder of the Local Catch Network · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **National Black Food and Justice Alliance** — Recipient of NCG food co-op solidarity funding · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **National Farm to School Network** — Recipient of NCG food co-op solidarity funding · ⌗ co-op grocery · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **National Farmers Union (NFU)** — Source of the 'two firms ≈ 95%' Canadian beef claim · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Neighborhood Co-op** — Named food co-op in the scan · ⌗ co-op grocery · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Nestlé** — Provides blockchain-based traceability via QR codes in Europe; measures and reports against the FLW Standard · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Newsmast** — Named in the shared-infrastructure ecosystem · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md)
- **NH Community Seafood** — US CSF movement exemplar · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Nofence** — Proprietary virtual fencing vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **NORDIK Institute** — Institute behind the Northern Ontario co-op abattoir feasibility thesis · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **North American Traditional Indigenous Food Systems (NĀTIFS)** — Recipient of over $139,000 in NCG food co-op donations · [grocery/research/co-op-sector.md](grocery/research/co-op-sector.md)
- **Nourish** — Health-care food initiative named in the institutional-procurement workstream · [ROADMAP.md](ROADMAP.md)
- **OCAP / FNIGC** — First Nations Information Governance Centre; OCAP (Ownership, Control, Access, Possession) data-sovereignty standard, not an open licence · ⌗ standards · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md) · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md) · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Oceana / Oceana Canada** — NGO DNA-testing seafood-fraud reports (2018 Canadian dataset; 2024 meta-analysis) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OCGC (One Community Grocery Co-op)** — Community-led grocery project named in the participatory-grocery scan · ⌗ co-op grocery · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Odoo** — Proprietary ERP cited as closed counterpart in plant/software comparisons · [grocery/research/csn-tps-landare-deep-dives.md](grocery/research/csn-tps-landare-deep-dives.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md) · [upcycling/research-direction.md](upcycling/research-direction.md)
- **OPC Foundation** — Publishes OPC UA spec under paywalled terms; structural gap for open plant integration · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Open Contracting Partnership** — Entry point for the institutional-procurement candidate workstream · [ROADMAP.md](ROADMAP.md)
- **Open Food Foundation** — Supports the OFN codebase ('Supported by the Open Food Foundation and a network of global affiliates'); set up 2012 · → Open Food Network (OFN) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **OpenTEAM** — Collaborative network for climate-smart, farmer-controlled open tools; its Ag Data Use Agreements adopted by OFN Canada · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md) · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **OPI Blue** — Closed grain silo telemetry vendor (counterpart) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **OSHWA** — Open-source hardware certification body; none of the compost/vermi/biochar hardware in the cell carries its certification · ⌗ open-hardware · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **OSU Extension** — University extension publisher of open how-to composting knowledge (EM-9034 'Composting with Worms') · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Our Sci (our-sci)** — Open-hardware science group; GitLab hosts the reflectometer · ⌗ open-hardware · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md)
- **Oxford Human Rights Hub** — Informational privacy critique of AgriStack · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Pachama** — Proprietary commercial MRV SaaS named as the closed alternative to Open Foris/SEPAL · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **Panier Local** — Early participant in the Data Food Consortium · ⌗ co-op grocery · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Park Slope Food Coop** — Member-work grocery co-op that inspired the Québec SCP model · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **PastureMap** — Proprietary grazing management vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Pattison Food Group** — Consolidated private supplier (owner of Save-On-Foods) that Calgary Co-op switched to in 2020 · → Save-On-Foods · ⌗ co-op grocery · [grocery/synthesis.md](grocery/synthesis.md)
- **Pembina Institute** — Institute whose QEC submission puts the weighted-average diesel cost at ~$0.25/kWh across Nunavut communities · [cea/research/northern-energy-model.md](cea/research/northern-energy-model.md)
- **PickApp** — Employer-side labour software exemplifying an open operation running closed, surveilled work · [grocery/labour-layer.md](grocery/labour-layer.md)
- **PIRG** — Public-interest group contesting the Deere-Farm Bureau MOU · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md)
- **Planet** — Proprietary satellite-analytics company named as a closed alternative · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **Platform Cooperativism Consortium** — Hub of the platform cooperativism movement (platform.coop); principles of broad ownership, democratic governance, co-design · ⌗ co-op grocery · [grocery/research/research-mapping.md](grocery/research/research-mapping.md) · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md) · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **Practical Action** — Appropriate-technology NGO; technical briefs lead · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Princeton and Harvard art museums** — Institutions adopting open-access strategies · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Priva** — Commercial climate-computer vendor whose 'open architecture' claim is interface-open but licence-closed (C-OSA-06) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md) · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **Purdue OATS Center (OATS)** — Purdue center maintaining OADA reference server and hosting ISOBlue · → Open Ag Data Alliance (OADA) · ⌗ ag-data · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Purdue University** — Institutional host of OATS Center, OADA and ISOBlue · [research/2026-08-machine-data-access-telematics-scan.md](research/2026-08-machine-data-access-telematics-scan.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Puro.earth** — Voluntary biochar carbon removal registry (capture pressure) · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Quantotech** — Consortium partner in the autonomous-agriculture data platform · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Queens Applied Sustainability Group** — OSAT academic current · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Rachio** — Closed irrigation controller vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **Rain Bird** — Closed irrigation controller vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **Raven** — Leaf Agriculture production user · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Red Jar Energy Partners** — Manages AGRIS Solar with GECO · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **REEF Technology** — Ghost-kitchen operator that lost its Wendy's deal and closed hundreds of locations · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **ReFED** — Waste measurement and reporting infrastructure named in the food-waste pass · → U.S. Food Waste Pact · → FLW Standard (Food Loss and Waste Accounting and Reporting Standard) · ⌗ food-waste · [grocery/synthesis.md](grocery/synthesis.md)
- **ReGrained** — Upcycled spent-grain flour company; trade-secret process · ⌗ food-waste · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Resource Innovation Institute (RII)** — Institute behind the June 2025 Virginia data-center/greenhouse feasibility report (the case's strongest evidence) and the North Dakota Legendary Harvest study · ⌗ cea · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Restor** — Global ecological restoration monitoring platform (open access) in the restoration-data layer · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **Rethink Aadhaar** — Critical counterweight on AgriStack consent (2022 legal review) · ⌗ ag-data · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Ruralis** — Research institute; SolarFood needs assessment and 2025 project updates · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **Safefood 360°** — Commercial food-safety/QMS tool dominating where open alternatives are absent · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Samagra** — Organization named in Ama KrushAI coverage · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **SAP** — Enterprise platform hosting the Scantrust farm-to-consumer traceability app · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Save-On-Foods** — Competitor owned by the Pattison Food Group · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)
- **Scantrust** — Provider of secured QR-code farm-to-consumer traceability (with SAP) · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Sentek** — Closed soil telemetry vendor (counterpart) · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **Shopify** — Ecommerce storefront platform used by pilot producers in the Food Data Collaboration · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md) · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Signify / Philips** — Horticultural lighting vendor (closed counterpart) · ⌗ cea · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Simon Fraser University** — Consortium partner in the autonomous-agriculture data platform · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **SLO Food Bank** — Food bank making the institutional argument for culturally specific foods as cultural continuity and belonging · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **Small Scale Food Processor Association (SSFPA)** — Sector association whose 80-interview policy brief documents the regulatory patchwork; candidate circulation audience for the design document · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md)
- **smaXtec** — Proprietary cattle health monitoring vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Smithsonian** — Launched Smithsonian Open Access (millions of images and data) · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Sollum** — Lighting-as-a-service vendor in the closed commercial CEA stack · ⌗ cea · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Source.ag** — Partner named on Priva Open Platform · [research/2026-08-greenhouse-cea-vendor-open-programmes.md](research/2026-08-greenhouse-cea-vendor-open-programmes.md)
- **Spoiler Alert** — Online marketplace for farmers and food businesses to donate or discount excess food · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Square** — Closed commerce counterpart in farm commerce comparison · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Stanford HAI** — Critical analysis of China's ag data strategic layer · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **SunCulture** — Solar irrigation vendor; closed hardware · ⌗ open-hardware, energy-byproducts · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Switch Datacenters** — Data-center operator in the Uithoorn heat-network agreement · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Tanibox** — Initiator of the Tania open farm-management software · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)
- **Te-Food** — Vendor of serialized QR food traceability marketed as a marketing tool · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Telia** — Company feeding heat into Nordic municipal heat networks · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Tequ Group** — Enterprise adopter of ET Agricultural Brain · [research/2026-08-china-ag-digital-infrastructure-scan.md](research/2026-08-china-ag-digital-infrastructure-scan.md)
- **Terramera** — Consortium partner in the autonomous-agriculture data platform · ⌗ ag-data · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Tesco** — Named as already measuring and publicly reporting food waste against the FLW Standard · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **The Food Assembly** — Early participant in the Data Food Consortium · ⌗ co-op grocery · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **The Getty Museum** — Institution adopting an open-access strategy · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **The Kitchen Door** — Kitchen-rental directory whose Toronto listings carry the published rates and the $3,500/month ghost-kitchen benchmark · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md) · [upcycling/research/packaging-facility-and-equipment-costs.md](upcycling/research/packaging-facility-and-equipment-costs.md)
- **The North West Company** — Northern retail duopoly member; profits rose significantly 2019-2023 · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **Thermalize** — Pre-pilot illustration pairing data centers with community food (self-labelled, not an actual facility) · ⌗ energy-byproducts · ◉ proposal-stage · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Tillamook** — Farmer-owned creamery cooperative (1909); governance substrate · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **TNO** — Organization named for contact on CGO adoption · → Common Greenhouse Ontology (CGO) · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md)
- **Topcon** — Leaf Agriculture production user; equipment OEM · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **TOPSOIL** — 20,000 sq ft urban farm supplying 30+ restaurants, founded by Chris Hildreth · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **UBC Centre for Sustainable Food Systems** — LiteFarm and seed-sovereignty research connections · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **UBC Farm** — Canadian open-agrifood practitioner site named as candidate event invitee · [ROADMAP.md](ROADMAP.md)
- **Uber** — Partner for sponsored donation-pickup delivery at select PCFWC stores · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **UberEats** — Gig-economy delivery counterpart · [research/2026-08-food-hubs-shortchain-logistics-scan.md](research/2026-08-food-hubs-shortchain-logistics-scan.md)
- **Ucrop.it** — Digital platform where producers record and verify agronomic events ('Crop Story') · [grocery/research/traceability.md](grocery/research/traceability.md)
- **UIUC (QSD-Group)** — University of Illinois platform team behind QSDsan · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **UMaine (University of Maine)** — Co-founder of the Local Catch Network · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **UN/CEFACT** — UN standards body for animal traceability standards · ⌗ standards · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **UNI Global Union** — Global union federation behind WeClock · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **United Fishermen of Alberta** — Lead that could not be substantiated as harvester co-op (misattribution) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **University of British Columbia (UBC)** — Institutional anchor of LiteFarm and UBC Farm Seed · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **University of Nottingham** — Partner in the Jones-Garcia 2022 study · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **UNL** — University of Nebraska-Lincoln; institutional partner in Ag Data Coalition / NAPDC · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Upcycled Foods (company)** — Upcycled ingredients company; trade-secret process · ⌗ food-waste · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **UPOV** — PVP regime named as the counterweight the seed-commons mechanisms (SEARICE's sui generis advocacy, community seed banks) respond to · ⌗ seed commons · [research/2026-08-biological-commons-scan.md](research/2026-08-biological-commons-scan.md) · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **Vectronic** — Proprietary telemetry vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Vence (Merck)** — Proprietary virtual fencing vendor (closed counterpart) · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **Verge Ag** — Lead of the Standard Data Platform for Autonomous Agriculture consortium · ⌗ ag-data, robotics-machines · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Verra** — Commercial carbon-registry/MRV actor named as a proprietary alternative · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Vesta** — Operator of the Waste Not 2.0 waste-tracking system managing donation logistics · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Victoria and Albert Museum** — Institution adopting an open-access strategy · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Victron** — Venus Linux open layer in the farm microgrid stack · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Viterra** — Industrial biofuel refiner · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **W3C** — Publisher of the Verifiable Credentials Data Model recommended for food credence-claim verification · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Walmart** — Retail giant: 2016 IBM Food Trust/Hyperledger produce-and-pork tracking pilot; one of three chains committed to zero food waste by 2025 · ⌗ food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Walters Art Museum** — Institution adopting an open-access strategy · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **WBCSD** — Co-launcher of the FLW Standard · ⌗ standards · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **WeRobotics** — Nonprofit operating the Flying Labs Network (38 labs end 2025, self-reported) · ⌗ robotics-machines · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Western University FAST Lab / WIRED (uwo-fast)** — University lab whose OSHWA-certified open agrivoltaic/thermal hardware and tool library records were curated (five records) · → Western University FAST Lab / WIRED open-source agrivoltaics hardware · → Western University FAST Lab open scientific instrumentation (OSSEI) · ⌗ open-hardware, energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **Where Food Comes From (WFCF)** — Administers the paywalled Upcycled Certified certification regime · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Whole Foods Market** — Retailer whose Trends Council published the Top 8 food trends for 2026 · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **Wikimedia Foundation** — Nonprofit steward of Wikipedia's infrastructure · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **WinField United** — 2015 OADA collaboration announcement with no located conformance outcome; built own proprietary solution · ⌗ ag-data · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Wonder** — Company that abandoned its van-based ghost-kitchen model · [upcycling/research/kitchen-mvp-and-shared-infrastructure.md](upcycling/research/kitchen-mvp-and-shared-infrastructure.md)
- **WorldVeg** — Published solar dryer documentation · ⌗ energy-byproducts · [research/2026-08-global-south-farm-level-open-hardware-scan.md](research/2026-08-global-south-farm-level-open-hardware-scan.md)
- **WRI** — Secretariat of the FLW Standard; hosts the Food Waste Atlas · ⌗ standards, food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **WWF** — Conservation NGO; partner in the ReFED + WWF U.S. Food Waste Pact and co-maintainer of the SMART spatial-monitoring partnership · → U.S. Food Waste Pact · → SMART (Spatial Monitoring and Reporting Tool) · ⌗ food-waste · [examples/records/smart-conservation.md](examples/records/smart-conservation.md) · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md)
- **Yandex** — Company feeding heat into Nordic municipal heat networks · ⌗ energy-byproducts · [cea/data-center-heat-case-study.md](cea/data-center-heat-case-study.md)
- **Young Agrarians** — Farmland-access programme named as land-workstream entry point · ⌗ land-tenure · [ROADMAP.md](ROADMAP.md)
- **Zhejiang University** — Built AgriGPT-Omni · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **Énergir** — Gas utility; 20-year RNG offtake with Warwick; Low-Carbon Voluntary Program denied cost recovery · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)

### Networks (6)

- **Antigonish Movement** — Historical cooperative movement cited as model context · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Fibreshed movement** — Movement named as entry point for the fibre/non-food agriculture workstream · [ROADMAP.md](ROADMAP.md)
- **GOAT (Gathering for Open Agricultural Technology)** — Global network of developers, farmers and stakeholders advancing open-source agricultural tools (OFN Canada partner) · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Niche Meat Processors Network** — Freely readable knowledge-transfer network for small meat processors · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Open Heritage Coalition (formerly TAROCH)** — Coalition advancing equitable access to public-domain heritage; Creative Commons is a member · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Réseau COOP** — Network banner under which FCAQ operates · ⌗ co-op grocery · [grocery/research/canadian-co-op-survey.md](grocery/research/canadian-co-op-survey.md)

### Projects & platforms (104)

- **ADO tank-aquaculture platform** — End-to-end open IoT stack for tank aquaculture (HardwareX 2022); lead · ⌗ open-hardware, fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Ag Data Transparent** — Voluntary ag data transparency code · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **AGAPECert** — Certification effort under Ag Data Coalition; tracking item · [research/2026-08-landscape-synthesis-v2.md](research/2026-08-landscape-synthesis-v2.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md) · [research/2026-08-programme-briefing.md](research/2026-08-programme-briefing.md)
- **Agrifood AI Field Guide** — Adjacent research base and discovery aid (agrifood.metaviews.ca) used as comparative synthesis and lead register, never as sole evidentiary endpoint · ⌗ language-ai · [README.md](README.md) · [ROADMAP.md](ROADMAP.md) · [grocery/concept.md](grocery/concept.md) · +6 more
- **AgriGPT-Omni** — Zhejiang University ag speech model; largest agricultural speech dataset (492K synthetic samples), release promised · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **AgroAPI** — Latin American public ag data API (paper-published lead) · ⌗ standards · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)
- **AgroFIMS** — Open breeding/field data management system (paper lead) · [research/open-source-agriculture-discovery-scan-2026-08.md](research/open-source-agriculture-discovery-scan-2026-08.md)
- **API-Agro standard** — Ag data standard associated with Agdatahub · ⌗ ag-data, standards · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **Apoidea** — Open-source ERP proposal for worker co-ops; community post, not deployed · ◉ proposal-stage · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **AquaPi** — ESP32/ESPHome aquarium monitoring with Atlas Scientific probes (Apache-2.0) · ⌗ open-hardware · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Beckn protocol** — Open interoperability protocol compared with the DFC Standard · ⌗ standards · [grocery/research/ofn-and-dfc.md](grocery/research/ofn-and-dfc.md)
- **Brewtarget** — Open-source homebrew recipe/mash software (adjacent ecosystem, ~21 repos) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **CGIAR Digital Innovation Initiative** — CGIAR program under which the voice-message research was done · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/sources/README.md](research/sources/README.md)
- **Chow Match** — Donation-matching tool named in the fragmentation discussion · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Co-op Cloud** — Shared configuration commons for collectively-run self-hosting (standardized deployment recipes); Foodsoft has a recipe; includes the Co-op Cloud Federation · ⌗ co-op grocery, standards · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md) · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **Collecting Recipes** — Not-for-profit collaborative platform for manuscript cookery books · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **Craig.chat** — Interim recording tool for the event per the recording-bot decision · [ROADMAP.md](ROADMAP.md)
- **Data Food Consortium (Open Standard)** — Shared data language/standard for short food supply chains · ⌗ co-op grocery, standards · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **Eclipse SCADA** — Open SCADA/HMI platform lineage (EPL/GPLv2 mix), generic only · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **eNAM** — Electronic ag market named as bulk commodity exchange lead · [research/2026-08-grain-value-chain-open-infrastructure-scan.md](research/2026-08-grain-value-chain-open-infrastructure-scan.md)
- **EPCIS** — GS1 royalty-free traceability event standard named in the open-records layer · ⌗ standards · [upcycling/layers.md](upcycling/layers.md)
- **Event venue platforms scanned (Discord, Matrix/Element, Jitsi, BigBlueButton, Airmeet, Zoom, pretalx, pretix, Venueless, Webex, RingCentral, Whova, Circle, Zuddl)** — Online event venues/platforms compared for the project's first online event · [research/venue-platform-scan.md](research/venue-platform-scan.md)
- **FAIR Forward** — GIZ programme advancing ag voice AI (FarmerChat, Haki des Femmes, Common Voice expansion) · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **FAO FishStat / SOFIA** — FAO global capture and aquaculture production databases (CC-BY-4.0) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Farmland Access Legal Toolkit** — CLT model documentation source (with Lincoln Institute) · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **FAST DRAM Distributed Manufacturing** — FAST Research Group open-hardware record · ⌗ open-hardware · [research/2026-09-definition-of-open-agrifood.md](research/2026-09-definition-of-open-agrifood.md)
- **FishBase / SeaLifeBase** — Global species biology databases with the rfishbase R interface (CC0) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **FisheryProgress / FIP-DB** — FIP registry/progress tracking plus academic historical dataset (partially open) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **FishSource** — Public fishery-status database (no open licence found) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **FLW Standard (Food Loss and Waste Accounting and Reporting Standard)** — Waste measurement and reporting standard proving waste infrastructure exists · ⌗ standards, food-waste · [grocery/research/food-waste-canada.md](grocery/research/food-waste-canada.md) · [grocery/research/food-waste.md](grocery/research/food-waste.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **Food 4.0** — CFIN's proposed (not enacted) action plan; live reform channel whose industry-side statements the policy document cites · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md)
- **Food Waste Atlas** — WRI's global food-waste data tool · ⌗ food-waste · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **FoodOn** — Harmonized food ontology for global food interoperability; the shared machine-readable vocabulary layer · ⌗ standards · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **FoodTraze** — Blockchain onion-supply-chain example with QR farm-to-consumer story · [grocery/research/traceability.md](grocery/research/traceability.md)
- **GDST** — Seafood traceability standard named in the traceability plumbing · ⌗ standards, fisheries · [grocery/research/research-mapping.md](grocery/research/research-mapping.md)
- **Global Food Donation Policy Atlas** — Documents Canada's recommendation to amend the Income Tax Act for food-donation deductions · [upcycling/economics.md](upcycling/economics.md)
- **Global Village Construction Set (GVCS)** — Open Source Ecology's machine design set (LifeTrac tractor, hammer mill etc.) · ⌗ robotics-machines, open-hardware · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **GOAT** — Network advancing open agricultural technology · [research/coverage-review-and-canada-open-agrifood-scan-2026-08.md](research/coverage-review-and-canada-open-agrifood-scan-2026-08.md)
- **goscommons/Biogas** — GPL-3.0 small-farm mesophilic biodigester documentation (hobby scale) · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Grocy** — Open-source household grocery management software (adjacent, home scale) · ⌗ co-op grocery · [grocery/research/multi-layer-operations.md](grocery/research/multi-layer-operations.md)
- **Harmonized 2001-2023 sea-lice dataset** — 23-year curated dataset harmonizing DFO open data, operator sites and Salmon Coast Field Station's database (CC-BY) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **HeatpumpMonitor.org** — Open heat-pump COP data feeds on Emoncms · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Hi-sAFe** — Academic open farm-scale multi-strata crop-yield simulator; complex model with no farmer-friendly interface · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **IBM Food Trust** — Enterprise blockchain traceability platform (Walmart, Carrefour, Antonello Produce, Farmer Connect deployments); the transparency-label-on-closed-chain shape · [grocery/research/traceability.md](grocery/research/traceability.md) · [grocery/synthesis.md](grocery/synthesis.md)
- **KolliCloud** — Community cloud named in the maintenance ecosystem · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md)
- **Leijtenss/Milking-Robot** — Milking-robot repo with no licence (therefore not open), dormant since 2019 · ⌗ robotics-machines · ◉ dormant · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **Libre Objet** — Open-source furniture design licence named in the open design conversation · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **LifeTrac** — OSE open tractor design · ⌗ robotics-machines · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md)
- **MEANS** — Donation-matching platform where food banks post needs; 820M+ pounds recovered by mid-2019 · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Mezzo** — Donation-matching tool named in the fragmentation discussion · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **MikesMachines/MilkIt** — GPL-2.0 DIY milker/receiver documentation repo (last pushed 2024); a DIY milker, not a robot · ⌗ robotics-machines · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **MIT OpenAg (Open Agriculture Initiative)** — MIT Media Lab open CEA platform; archived, hardware licence unresolved, publicly discredited · [record](examples/records/openag-food-computer.md) · ⌗ open-hardware, cea · ◉ defunct/archived · [examples/records/openag-food-computer.md](examples/records/openag-food-computer.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Mozilla Data Collective** — Mozilla data-collective initiative in the initial source set · [research/2026-08-initial-open-agrifood-environmental-scan.md](research/2026-08-initial-open-agrifood-environmental-scan.md) · [research/sources/README.md](research/sources/README.md)
- **MyHerdStats** — Dairy herd-stats service returning derived data to keepers; industry-owned via co-ops, not openly licensed (verified precedent) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Ocean Disclosure Project** — Voluntary corporate seafood sourcing disclosure · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OLIO** — Neighbour food-sharing app; 1M+ users sharing 1.5M+ portions by mid-2019 · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **One Million Voices of Agroecology Initiative** — Citizen-science initiative and platform for agroecology knowledge · ⌗ language-ai · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Open Bio Economy Lab / BIO-SPEC / Innocell / BioSamplr** — Academic open bioreactor hardware ecosystem, lab scale, per-paper licences · ⌗ open-hardware · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **Open GLAM Survey** — Six-year survey of open cultural heritage practice, cited in a 2018 UK Parliament debate · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **Open Source Agrifood** — The research and knowledge-building project itself; corpus of scans, records and frameworks on open source in agrifood · [README.md](README.md) · [ROADMAP.md](ROADMAP.md)
- **Open Tree of Life** — Open-access ecological data resource in the restoration-data layer · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **open-pisciculture LoRaWAN data buoy** — Open battery buoy measuring temp/pH/DO in fish ponds (CERN-OHL-P v2 + MIT + CC BY 4.0); dormant, peer-reviewed · ⌗ open-hardware, fisheries · ◉ dormant · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Open-Source Customizable Thermal Energy Storage Module** — OSHWA CA000071, GPL-3.0-only · ⌗ open-hardware, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **Open-Source Vertical Swinging Wood-Based Solar PV Racking Systems** — OSHWA CA000025, CERN-OHL-S-2.0 (Vandewetering, Hayibo & Pearce) · ⌗ open-hardware, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **OpenATK Field Work App** — Purdue OADA-adjacent integration demo listed in the EU catalogue · ⌗ ag-data · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **OpenCourier** — Delivery platform cooperativism protocol (2026) · ⌗ co-op grocery · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **OpenEM** — Open video analytics for fisheries electronic monitoring (MIT); grew from NOAA/DrivenData competition; dormant · ⌗ fisheries · ◉ dormant · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OpenFarm** — Open farming knowledge resource (MIT) · [research/2026-08-open-hardware-robotics-sensing-scan.md](research/2026-08-open-hardware-robotics-sensing-scan.md)
- **OpenGrowBox** — Project whose non-commercial 'open' claim is one of the corpus's closed-but-honest counter-examples · [cea/open-climate-control-case-study.md](cea/open-climate-control-case-study.md) · [research/2026-08-greenhouse-cea-open-automation-scan.md](research/2026-08-greenhouse-cea-open-automation-scan.md)
- **Openknit** — Open-source 3D knitting printer named in the open design/fashion conversation · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **OpenLandContracts.org (CCSI)** — Searchable repository of large-scale land/agriculture contracts with annotations; CCSI is Columbia Center on Sustainable Investment · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **OpenROV / Sofar Trident** — Underwater ROV: open-source project turned proprietary (Sofar) then discontinued — open-to-proprietary-to-dead counter-example · ◉ defunct/archived · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **OriginTrail** — Open-source blockchain data protocol enabling GS1-standards-based interoperability between blockchains and legacy systems · ⌗ standards · [grocery/research/traceability.md](grocery/research/traceability.md)
- **PaddyMitra** — IRRI ag chatbot deployment · ⌗ language-ai · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **PASE (Python Agrivoltaic Simulation Environment)** — MIT-licensed agrivoltaic 3D ray-tracing + crop growth simulation · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **permies.com** — Permaculture forum carrying informal open compost/soil knowledge; host of Jay Smart's Compost for Good build post · [research/2026-08-compost-soil-production-open-knowledge-scan.md](research/2026-08-compost-soil-production-open-knowledge-scan.md)
- **Platform Cooperative Development Kit** — Open toolkit on GitHub for building platform cooperatives · ⌗ co-op grocery · [research/2026-09-labour-layer-scan.md](research/2026-09-labour-layer-scan.md)
- **POSCAS (Parametric Open-Source Cold-Frame Agrivoltaic Systems)** — OSHWA CA000008, CERN-OHL-P-2.0 hardware + CC BY 4.0 docs · ⌗ open-hardware, energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **pvlib-python** — BSD-3-Clause solar modeling library underlying bifacial_radiance · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **PyADM1** — MIT Python implementation of the ADM1 model (ring-tested) · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **PyADM1ODE** — MIT component-based agricultural biogas plant simulator from TH Köln · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **pyCropWat** — MIT-licensed crop-water modeling implementation · [research/2026-08-water-irrigation-automation-scan.md](research/2026-08-water-irrigation-automation-scan.md)
- **QGIS** — Open GIS platform underlying grassroots agroforestry spatial-design workflows · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **QSDsan** — NCSA-licensed UIUC platform coupling ADM1 with techno-economic and life-cycle assessment · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **RAM Legacy Stock Assessment Database** — ~1,300+ stock-assessment time series for global commercial stocks (CC-BY-4.0) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Real Seeds (DIY Air-Column Seed Cleaner)** — Open seed-cleaning design (public design commons) adopted in seed libraries and ecological breeding · [record](examples/records/real-seeds-cleaner.md) · ⌗ seed commons · [examples/records/real-seeds-cleaner.md](examples/records/real-seeds-cleaner.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md) · [research/2026-08-postharvest-processing-coldchain-scan.md](research/2026-08-postharvest-processing-coldchain-scan.md)
- **reef-pi** — Mature open-source aquarium/reef controller on Raspberry Pi (MIT, 4,048 commits) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **RescueLens** — Food rescue research tooling (AAAI-40 / arXiv); watch for spin-out · ⌗ food-waste · [research/2026-09-upcycling-subcell-scan.md](research/2026-09-upcycling-subcell-scan.md)
- **rfisheries / openfisheries.org** — Global landings API + R client (MIT client) · ⌗ standards, fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **ScadaBR** — Open SCADA/HMI platform (GPLv2), generic only · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Seeds for Resilience** — Project behind community-seed-bank standard-setting documentation (with LI-BIRD) · ⌗ seed commons · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **SIKU (Indigenous Knowledge Social Network)** — Free mobile/web platform by and for Indigenous communities and harvesters; community-controlled visibility · [record](examples/records/siku.md) · [examples/records/siku.md](examples/records/siku.md) · [research/2026-09-northern-remote-food-systems-scan.md](research/2026-09-northern-remote-food-systems-scan.md)
- **Solar Biogas / HomeBiogas** — Open digester designs named as energy-workstream entry point · ⌗ energy-byproducts · [ROADMAP.md](ROADMAP.md)
- **SurveyStack** — Open survey/data collection platform used in agroecology stack · [research/2026-08-field-spectroscopy-soil-diagnostics-scan.md](research/2026-08-field-spectroscopy-soil-diagnostics-scan.md) · [research/2026-08-global-south-open-hardware-scan.md](research/2026-08-global-south-open-hardware-scan.md)
- **Tania** — Open farm record software (Apache-2.0) with pasture management · [research/2026-08-livestock-pasture-virtual-fencing-scan.md](research/2026-08-livestock-pasture-virtual-fencing-scan.md)
- **The Recipes Project** — Open academic blog treating recipes as living records and vessels of memory/identity — the most substantial food-knowledge commons in the scan · [grocery/research/open-in-food.md](grocery/research/open-in-food.md)
- **TraceX / Tracextech** — Traceability technology named in the sourcing-transparency scan · [grocery/research/research-scan-1.md](grocery/research/research-scan-1.md)
- **Tree Belt Designer** — QGIS plugin for insolation simulation and windbreak/silvopasture spatial design · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md) · [research/2026-08-landscape-synthesis-v3.md](research/2026-08-landscape-synthesis-v3.md)
- **Ugunduzi** — Open-source app cited by IPES-Food as co-developed with grassroots organizations · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Upcycled Certified** — Paid certification running on application, per-review, per-product licensing and audit fees — value capture in the upcycling category · ⌗ food-waste · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/concept.md](upcycling/concept.md) · [upcycling/economics.md](upcycling/economics.md) · +1 more
- **WHAM** — Fisheries stock assessment model; licence unverified (GitHub NOASSERTION) · ⌗ fisheries · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)
- **Wikipedia** — Largest open peer-produced knowledge commons; case study in participation gaps, systemic bias and AI-era extraction · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **YODL** — CFIN's searchable directory platform of co-packers, suppliers, consultants and lab spaces · [ROADMAP.md](ROADMAP.md)
- **ZAF zebrafish feeder** — First open-source fully automated feeder for aquatic facilities (2022, lab scale) · [research/2026-09-fisheries-aquaculture-sectoral-scan.md](research/2026-09-fisheries-aquaculture-sectoral-scan.md)

### Governments & public bodies (10)

- **CISA** — Source of the food-sector cybersecurity profile named in the A4 workstream · ⌗ resilience · [ROADMAP.md](ROADMAP.md)
- **FAO (UN Food and Agriculture Organization)** — UN body whose 2020 scaling paper names 'open source data and technology' and whose 10-element agroecology framework (with HLPE) does not center open source; also operates the Open Foris/SEPAL open geospatial platform · → Open Foris (incl. SEPAL, Collect, Arena) · → Farm Hack · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md) · [research/2026-08-agroforestry-canopy-spatial-planning-scan.md](research/2026-08-agroforestry-canopy-spatial-planning-scan.md)
- **Haida Nation / BC 'Rising Tide' Title Lands Agreement** — 2024 agreement recognizing Haida Aboriginal title over Haida Gwaii · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **Karuk Tribe** — Tribe practising eco-cultural restoration: salmon fisheries, ecological calendars, cultural burning, river stewardship · ⌗ fisheries · [grocery/research/meaning-and-culture.md](grocery/research/meaning-and-culture.md)
- **Nisga'a Nation** — Modern treaty nation (2000) operating its own fee-simple land title office and register · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **SAWP / TFW programme** — Migrant farm labour programmes named as labour-layer research target · [ROADMAP.md](ROADMAP.md)
- **Tsilhqot'in Nation** — Judicially recognized Aboriginal title (2014) in the Canadian tenure spectrum · ⌗ land-tenure · [research/2026-09-land-sectoral-scan.md](research/2026-09-land-sectoral-scan.md)
- **UNEP** — Co-launcher of the FLW Standard (2016) · ⌗ standards · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **UNESCO** — Author of the 2021 Open Science Recommendation naming FAIR/CARE tensions · [grocery/research/open-in-culture.md](grocery/research/open-in-culture.md)
- **USDA NAL** — US National Agricultural Library operating Ag Data Commons · → USDA · ⌗ ag-data · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)

### Funders (21)

- **aBi** — Funder of the Farm Africa/NECPA solar dryer work · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **Ajahma** — Funder of the Farm Africa/NECPA solar dryer work · ⌗ energy-byproducts · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **ARIO** — Co-funder (with OMAFRA) of the University of Waterloo dairy-robotics case study · [dairy/open-milking-robot-case-study.md](dairy/open-milking-robot-case-study.md)
- **BMZ** — Financier of Haki des Femmes · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md)
- **CS&S** — Funder of REGOSH (alongside Shuttleworth) · ⌗ open-hardware · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **Democratic Tech Fund** — Fund whose case study found 50-60 food co-ops willing to co-fund maintained Foodsoft; proposes the Funding Circle model · ⌗ co-op grocery · [grocery/research/open-source-software-stack.md](grocery/research/open-source-software-stack.md)
- **Enabling Crop Analytics** — Initiative funding Digital Earth Africa crop-type work · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **EnAccess Foundation** — Philanthropic funder of Libre Solar for local manufacturing/repair · ⌗ energy-byproducts · [research/2026-10-energy-biological-byproducts-scan.md](research/2026-10-energy-biological-byproducts-scan.md)
- **FCC** — Farm Credit Canada: published QR-code traceability guidance for food and beverage processors; lender in the finance workstream · [ROADMAP.md](ROADMAP.md) · [grocery/research/traceability.md](grocery/research/traceability.md)
- **Foodtech Next** — CFIN programme funding technology demonstrations in operational environments — making a community pilot a plausible funded host site rather than applicant · [ROADMAP.md](ROADMAP.md) · [docs/policy/community-processing-regulatory-design.md](docs/policy/community-processing-regulatory-design.md) · [upcycling/research/research-mapping.md](upcycling/research/research-mapping.md)
- **Gates Foundation** — Financed Haki des Femmes; co-funded DPI-for-agriculture and Farmer-Centric Data Governance reports · ⌗ standards · [research/2026-08-common-voice-agrifood-applications.md](research/2026-08-common-voice-agrifood-applications.md) · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md) · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)
- **Google Ventures** — Venture investor in FBN · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **Google.org** — Partner in MEANS' design · [grocery/research/food-waste.md](grocery/research/food-waste.md)
- **Kickstarter** — Crowdfunding source for Open Source Ecology · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md)
- **NIFA** — USDA funder of NAPDC/ADC framework work · [research/2026-08-maintenance-funding-profiles.md](research/2026-08-maintenance-funding-profiles.md) · [research/2026-08-oada-implementation-scan.md](research/2026-08-oada-implementation-scan.md)
- **Nordic Development Fund (NDF)** — Documented Nepal green-growth biochar technology trials · [research/2026-08-nepal-open-agrifood-infrastructure-scan.md](research/2026-08-nepal-open-agrifood-infrastructure-scan.md)
- **SARE** — Funder of the open poultry-processing tool (grant ONE16-277) · [research/2026-08-processing-sectoral-scan.md](research/2026-08-processing-sectoral-scan.md)
- **Shuttleworth Foundation** — Funder of the REGOSH Open Agroecology Lab · [research/2026-08-agroecology-open-source-correlation-scan.md](research/2026-08-agroecology-open-source-correlation-scan.md)
- **Temasek** — Investor in FBN · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md)
- **USAID** — Funder associated with the Development Gateway JoinData case study · [research/2026-08-data-cooperatives-scan.md](research/2026-08-data-cooperatives-scan.md) · [research/sources/README.md](research/sources/README.md)
- **World Bank** — Co-publisher of the DPI-for-agriculture report · [research/2026-08-dpi-agriculture-scan.md](research/2026-08-dpi-agriculture-scan.md)

## Document status and conventions

Machine-facing notes; humans can stop at the coverage table.

- Built 2026-11-15 by full-corpus extraction; cleaned, verified, and given its category, openness, governance, lifecycle and verification axes the same day (see *Verification and cleaning pass* above). 1020 entries after deduplication; all 141 `examples/records/` files cross-referenced, each attached to exactly one entry of the right kind.
- Axes: geography (primary, verbatim stated geography), categories (curated, overlapping, `categories`), openness layer (`openness`), governance & control (`governance`), lifecycle (`lifecycle` — stated statuses only; decays, re-verify with records), verification tier (`verification` — record-backed vs scan-derived). All curated axes grow by curation; a blank means *not stated*. Stated relationships live in `links_out` and the *Links* section.
- Method constraint: extraction recorded what the corpus states; no geography, affiliation or role was inferred, and no scan-derived entry was re-verified against primary sources. Absence of a geography or an axis assignment means *not stated*, not none.
- Provenance convention: record-backed entries inherit the record's verification status; scan-derived entries are `unverified` in the corpus's vocabulary (recorded, not asserted). Links between entries are corpus-stated relationships, each checked against source text; they are not an independently verified network.
- Machine-readable companion: `directory-data.json` (full role text, all source paths, type, verbatim geography, geography bucket, curated `categories`, `openness`, `governance`, `lifecycle`, `verification`, curated `links_out`, merge provenance `merged_from`). It is the substrate for further curation and the relationship mapping.
- Maintenance: new records and scans should add their named actors here; the extraction pipeline is rerunnable; merge provenance keeps variant names findable; axis membership is revised by editing the entry fields and regenerating.
