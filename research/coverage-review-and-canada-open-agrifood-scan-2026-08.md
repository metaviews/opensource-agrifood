# Coverage review and Canada open-agrifood scan

Research date: 2026-08-01

Status: coverage review plus Canada-focused discovery scan. Canadian leads are not automatically curated examples.

## Scope decision

This pass does two things:

1. reviews what the current 12-example collection now covers and where it remains thin;
2. searches Canada broadly for people, projects, institutions, platforms, research infrastructure, and communities connected to open source or open agrifood practice.

The next search direction is therefore Canada-focused. The earlier suggestion to search separately for generic farmer-led, Asian, or Indigenous gaps is not the current work programme, although those themes remain valid filters inside the Canadian search.

The key distinction remains:

- `open source` may refer to licensed software or hardware;
- `open data` may refer to public datasets or APIs;
- `open standards` may refer to interoperable formats;
- `commons` may refer to social, biological, or institutional governance;
- an open claim does not establish adoption, farmer control, or public benefit.

## Current collection coverage

Current records: 12 total.

- Curated: 11
- Candidate: 1 — CGIAR / AgriLLM
- Non-AI or primarily non-AI cases: 11
- Agricultural AI case: 1 candidate

### Coverage matrix

Activity scale is provisional:

- `●●` strong: direct project or institutional evidence and a substantial record
- `●` moderate: credible evidence, but use, governance, or maintenance is incomplete
- `○` emerging: promising lead or narrow evidence
- `—` not currently represented; this is a search gap, not proof of absence

| Open layer / function | Global / multilateral | Europe | North America | Latin America | Africa | Asia | Indigenous / community governance |
|---|---:|---:|---:|---:|---:|---:|---:|
| Interoperability and open standards | ●● OADA | ○ adjacent leads | ○ JoinData context | — | — | — | ○ JoinData governance context |
| Farmer data governance | ● GODAN context | ● JoinData | — Canada-specific case absent | — | — | — | ○ community governance not yet grounded |
| Farm management software | ○ ODK adjacent | ○ | ● farmOS | — | — | — | — |
| Public data infrastructure | ●● GODAN | — | ● Ag Data Commons | — | — | — | — |
| Biological commons / seeds | ●● OSSI | — | — | ●● Bioleft | — | — | ○ Indigenous seed governance requires Canada-focused evidence |
| Open hardware / robotics | — | ● ROMI | — | — | — | — | — |
| Open geospatial workflows | — | — | — | — | ● Digital Earth Africa | — | — |
| Agricultural research models | ● CGIAR / AgriLLM | — | — | — | — | — | — |
| Multilingual / upstream infrastructure | ● Common Voice | — | — | — | — | — | — |
| Local food commerce / short supply chains | — | — | — | — | — | — | — |
| Agricultural climate / emissions modelling | — | — | — | — | — | — | — |
| Canadian public agricultural data and research infrastructure | — | — | ○ AAFC / Agri-food Data Canada leads | — | — | — | — |

### What the collection now does well

- It is deliberately non-AI-heavy.
- It spans software, data, interoperability, biological materials, robotics, public infrastructure, and geospatial workflows.
- It includes Latin American and African cases rather than treating Europe and North America as the default.
- It distinguishes a seed pledge from a participatory seed-and-data commons through OSSI and Bioleft.
- It makes maintenance and project afterlife visible through ROMI and Digital Earth Africa.
- It includes both farmer-facing software and upstream infrastructure through farmOS, ODK, OADA, and Ag Data Commons.

### Remaining coverage gaps

1. Canada is absent as a grounded regional cluster. LiteFarm has a Canadian institutional connection, but no Canadian record currently examines the Canadian ecosystem itself.
2. Canadian public agricultural modelling, research data, and open government infrastructure are not represented.
3. Canadian local-food and short-supply-chain software is absent.
4. Farmer-controlled Canadian data governance is discussed in the research landscape but not yet represented by a verified project record.
5. Indigenous and community food sovereignty work in Canada is not represented as a specific open or commons-oriented case.
6. Climate and emissions modelling is absent, despite the relevance of agriculture and climate transition.
7. The collection has no Canadian open-source hardware or sensing example.
8. Asia remains thin, but it is not the target of this pass.

## Canada-focused discovery approach

The search covered multiple Canadian entry points rather than treating “open source agriculture Canada” as a single query:

- Canadian open farm and local-food software;
- open agricultural data and research repositories;
- Agriculture and Agri-Food Canada open-source repositories and models;
- Canadian university and college agricultural tools;
- agricultural data governance and cooperative models;
- Canadian open agricultural technology networks;
- data commons, standards, and autonomous-agriculture platforms;
- Indigenous food sovereignty and seed-commons connections;
- named people and institutions connected to these projects.

Search results were treated as leads. Direct institutional, repository, academic, and project pages were used where available.

## Canadian leads

### 1. Open Food Network Canada

- URL: https://about.openfoodnetwork.ca/
- Open agricultural technology page: https://about.openfoodnetwork.ca/project/open-agricultural-technology/
- Region: Canada, with links into the global Open Food Network community
- Possible role: open-source local-food marketplace and food-system infrastructure
- Open layer: software commons, local-food commerce tools, open standards, data governance advocacy, cooperative/community infrastructure
- Evidence found: Open Food Network Canada is an incorporated not-for-profit supporting farms, artisans, and community organizations. It describes online marketplace software for farmers, producers, and community hubs, and says communities around the world contribute to the software commons. Its open-agricultural-technology page explicitly connects open source, open standards, and data sovereignty, and identifies OpenTEAM, D:Food/Web, GOAT, and the Data Food Consortium Open Standard as related initiatives.
- Why it matters: this is the clearest Canadian lead for local food commerce, software commons, and farmer-oriented data sovereignty. It could extend the collection beyond production and research into the distribution and coordination layer of agrifood systems.
- Needs checking: software licence and repository; Canadian deployments and users; governance relationship between OFN Canada and the global network; actual farmer control of data; platform hosting and maintenance; whether the Canadian organisation is best recorded as a project, national chapter, or ecosystem actor.
- Provisional status: `candidate`

### 2. LiteFarm and the University of British Columbia

- Project: https://www.litefarm.org/
- Community page: https://www.litefarm.org/join-the-community
- Repository linked by project: https://github.com/LiteFarmOrg/LiteFarm
- Region: British Columbia / international
- Possible role: open farm management with Canadian university and farmer/researcher roots
- Open layer: open-source farm-management software, API, co-design, and farmer data model
- Evidence found: LiteFarm identifies a development team at the University of British Columbia and outside contributors. The Canadian Organic Science Network describes LiteFarm’s open-source design and farmer-controlled data model. Open Food Network Canada lists LiteFarm among its partners/funders context.
- Why it matters: LiteFarm may be the strongest bridge between an existing international record and a Canadian regional case. It offers a route into Canadian people, institutions, farmer co-design, and data sovereignty without artificially treating the project as only Canadian.
- Needs checking: exact repository and licence; UBC institutional role; Canadian farms and farmer organisations involved; hosted data practices; governance after research funding; relationship with OFN Canada and other Canadian partners.
- Provisional status: `candidate`

### 3. Holos — Agriculture and Agri-Food Canada

- Repository: https://github.com/holos-aafc/holos
- Region: Canada; federal public research and extension infrastructure
- Possible role: whole-farm greenhouse-gas emissions model and decision-support software
- Open layer: GPLv3-licensed source code, algorithms, documentation, bilingual release artefacts
- Evidence found: the public repository describes Holos as the open-source version of core algorithms used by the Holos model. It identifies Crown Copyright and distribution under GPLv3 unless otherwise noted. The repository includes English and French contribution materials, tests, installers, algorithm documentation, and ongoing public development; the latest visible commit was 2026-07-31.
- Why it matters: Holos is a strong Canadian public-sector open-source case that adds agricultural climate modelling and shows how federal research software can be released, documented, and maintained in both official languages.
- Needs checking: current end-user application versus open core distinction; farmer and advisor use; data and model parameter licensing; AAFC governance and maintenance; validation and impact; how open contributions work within Crown copyright.
- Provisional status: `candidate`

### 4. Agri-food Data Canada — University of Guelph

- URL: https://agrifooddatacanada.ca/
- Region: Ontario / Canadian research-data ecosystem
- Possible role: FAIR agricultural research-data infrastructure, semantic tooling, and research-centre data portals
- Open layer: data standards, metadata, reusable schemas, portals, RED-X data explorer, Semantic Engine tooling
- Evidence found: the University of Guelph-hosted initiative works with participants in the research-data ecosystem to increase the value of research data. It explicitly uses FAIR principles and describes research-centre data portals, a reusable data explorer (RED-X), and Semantic Engine tools for machine-actionable schemas. Its public news includes JSON Schema packages for the Semantic Engine.
- Why it matters: it is a Canadian research-data infrastructure case distinct from Ag Data Commons. It may show how data stewardship, semantics, and research-centre access are assembled before they become a broad public commons.
- Needs checking: source repositories and licences; what is openly reusable versus institutionally hosted; data access terms; users and participating centres; governance; relationship to Canadian federal and provincial open-data systems.
- Provisional status: `candidate`

### 5. Agriculture and Agri-Food Canada open data and scientific publications

- URL: https://agriculture.canada.ca/en/science/scientific-collaboration/open-data
- Region: Canada / federal government
- Possible role: public agricultural datasets, applications, publications, and research infrastructure
- Open layer: government open data, applications, publications, and public science repositories
- Evidence found: AAFC states that its data, applications, and publications are public and available through the Government of Canada Open Government Portal, Canadian Agriculture Library, departmental publications, and the Federal Open Science Repository. It also links to agriculture datasets from multiple federal institutions.
- Why it matters: this is an important Canadian institutional substrate even if it is not one single open-source project. It provides the public-data layer against which Holos and Agri-food Data Canada can be compared.
- Needs checking: dataset licences and formats; API availability; applications with actual agricultural use; reuse evidence; relationship between open data and farmer control; whether a specific AAFC dataset or application deserves a record instead of the umbrella institution.
- Provisional status: `lead` / institutional substrate

### 6. Standard Data Platform for Autonomous Agriculture

- URL: https://digitalsupercluster.ca/projects/standard-data-platform-for-autonomous-agriculture/
- Region: Canada; project partners in British Columbia, Alberta, Saskatchewan, and elsewhere
- Possible role: farm data commons, digital twin, field planning, autonomous agriculture
- Open layer: proposed data commons framework, data integration, field and farm models; project-level open-source status unresolved
- Evidence found: the Digital Technology Supercluster describes a project led by Verge Ag with Terramera, i-Open Group, Simon Fraser University, and Quantotech. It combines a data commons framework, digital twin, and operational planning platform. The project was validated with growers in Alberta, Saskatchewan, and British Columbia. The page reports use of Agrilyze with blueberry farmers in Pitt Meadows, British Columbia, and a later Ukrainian deployment.
- Why it matters: it is a major Canadian case for examining the boundary between open-data language, data commons, publicly funded technology development, and a commercial product. It may be more important as a contested case than as an open-source example.
- Needs checking: source code and licences; who controls data; which components remain open; commercialisation and funding terms; actual farmer participation; what “data commons” means operationally.
- Provisional status: `lead`, possibly `contested case`

### 7. Open Agricultural Technology / GOAT / OpenTEAM connections in Canada

- Primary Canadian entry point: https://about.openfoodnetwork.ca/project/open-agricultural-technology/
- Related projects: https://openteam.community/ ; https://goatech.org/ ; https://www.datafoodconsortium.org/
- Region: Canada-connected, international network
- Possible role: movement and network connecting farmers, developers, standards, data governance, and open tools
- Open layer: open-source software, open standards, data-use agreements, cooperative/data-governance frameworks
- Evidence found: OFN Canada identifies OpenTEAM as a collaborative network for open, interoperable tools and farmer data control; GOAT as a network advancing open agricultural technology; and the Data Food Consortium Open Standard as a shared language for short food supply chains.
- Why it matters: this may surface Canadian people and organisations that are not captured by a single project record. It is relevant to the user’s request to look for anyone connected to agrifood, not only repositories.
- Needs checking: Canadian individuals and organisations; concrete projects and deployments; governance and legal status; licences and standards; relationship between advocacy, network coordination, and maintained infrastructure.
- Provisional status: `lead`

### 8. Canadian agricultural data-governance and cooperative research network

- Canadian Centre for the Study of Co-operatives: https://usaskstudies.coop/research/current-projects/big-ag-data-symposium.php
- Related research: https://policyoptions.irpp.org/2025/01/ag-data/
- Region: Canada
- Possible role: research, policy, and cooperative governance around agricultural data
- Evidence found: the University of Saskatchewan’s Canadian Centre for the Study of Co-operatives and Johnson Shoyama Graduate School of Public Policy convened an 80-person symposium in 2022 involving producers, researchers, technologists, and co-operators. The symposium addressed ownership, benefit, collection, sharing, privacy, data cooperatives, and equitable governance. Named participants include Murray Fulton, Marc-André Pigeon, Yang Yang, Bill Oemichen, Dan Lussier of EMILI Canada, and Darcy Herauf of Farm Credit Canada’s AgExpert division.
- Why it matters: this is not yet an open-source project, but it identifies a Canadian ecosystem of people and institutions connected to the open/data-governance question. It may produce candidate projects, standards, or governance models that are currently missing from the catalogue.
- Needs checking: which named actors operate open or commons-oriented infrastructure; concrete outputs and projects; connections to OFN Canada, LiteFarm, Agri-food Data Canada, or EMILI; whether a cooperative model moved beyond research and symposium activity.
- Provisional status: `lead` / actor map

### 9. Indigenous seed sovereignty and food-system work connected to Canadian universities

- University of British Columbia Seed Hub discussion: https://online.ucpress.edu/elementa/article/9/1/00089/116505/Can-public-universities-play-a-role-in-fostering
- Related food sovereignty archive: https://indigenousclimatehub.ca/tag/food-sovereignty/
- Region: Canada, especially British Columbia and Indigenous community contexts
- Possible role: seed sovereignty, community-university relationships, food sovereignty, and biological commons
- Evidence found: the open-access Elementa article identifies a Seed Hub at the University of British Columbia and discusses public-university roles in fostering seed sovereignty. The wider literature links seed sovereignty in Canada and the United States to Indigenous communities working to revitalize and conserve culturally important seeds.
- Why it matters: this is a crucial Canadian governance and biological-commons lead, but it must not be collapsed into a generic “open seed” story. Indigenous sovereignty, consent, cultural protocols, and community control are not interchangeable with open licensing.
- Needs checking: specific Canadian community-led projects; whether materials or data are openly shared; consent and governance protocols; named Indigenous organisations and knowledge holders; whether UBC is an appropriate anchor or merely one institutional site.
- Provisional status: `lead`, high sensitivity

### 10. Canadian open satellite and precision-agriculture work at Mohawk College

- URL: https://www.mohawkcollege.ca/ideaworks-case-study-precision-agriculture
- Region: Ontario / Canada
- Possible role: applied research using public-domain satellite imagery for crop-health monitoring
- Open layer: public satellite imagery, open geospatial tools, reproducible analytical methods
- Evidence found: Mohawk College’s IDEAWORKS case study describes research into Sentinel-2 imagery for weekly farm-level crop-health monitoring. The project used public-domain satellite imagery, a web GIS explorer, vegetation indices, and weather correlation, and found the approach promising but limited by cloud cover.
- Why it matters: it is a concrete Canadian applied-research connection to open geospatial infrastructure, distinct from an open software project. It may become a record if the underlying tools, code, datasets, and farm testing can be traced.
- Needs checking: project dates and current status; code or workflow repository; participating farms; licences and reproducibility; actual farmer use; relationship to AAFC crop metrics.
- Provisional status: `lead`

## Preliminary Canada activity matrix

| Canadian current | Open layer evidence | Agrifood connection | Governance / control evidence | Maintenance / use evidence | Provisional strength |
|---|---|---|---|---|---:|
| Open local-food commerce | OFN software commons claim; open-tech framing | farmers, producers, hubs, local food networks | data sovereignty and community language explicit | Canadian not-for-profit and active projects | `●●` |
| Open farm management | LiteFarm source and Canadian institutional roots | farm management and farmer data | farmer-controlled data claim; needs detail | active international project; Canadian specifics unresolved | `●` |
| Public climate model | Holos GPLv3 repository | whole-farm GHG modelling | federal Crown copyright and public code | active repository and bilingual materials | `●●` |
| FAIR research-data infrastructure | ADC tools, portals, Semantic Engine | Canadian agri-food research centres | institutional stewardship; open terms unresolved | active public site and recent tool releases | `●` |
| Federal open agricultural data | AAFC public data and applications | agriculture and food research | public-sector access; farmer control unresolved | federal institutional anchor | `●●` |
| Autonomous-agriculture data commons | project describes data commons and digital twin | growers and farm operations | control and open-source status unclear | reported grower validation and commercial product | `●` / contested |
| Indigenous seed sovereignty | literature and Seed Hub evidence | culturally important seeds and food sovereignty | sovereignty and consent central; project specifics absent | evidence base is research and community archive | `○` |
| Cooperative ag-data governance | symposium, research, named actors | producers, co-ops, ag technology | equitable data ownership is explicit | symposium and reports; project afterlife unclear | `●` / actor lead |
| Open geospatial applied research | Sentinel-2 and public-domain imagery | crop-health monitoring | public imagery; farm data governance unclear | college case study; current use unresolved | `○` |

## Canadian actors and institutions to follow

These are not all projects, and listing them does not imply endorsement or open-source status.

- Open Food Network Canada — local-food software, community partnerships, and open-agricultural-technology framing.
- University of British Columbia Centre for Sustainable Food Systems — LiteFarm and seed-sovereignty research connections.
- LiteFarm contributors and Canadian institutional partners — farmer-facing open farm software and data control.
- Agriculture and Agri-Food Canada — Holos, open data, public research, and scientific applications.
- University of Guelph / Agri-food Data Canada — FAIR data, portals, Semantic Engine, and RED-X.
- University of Saskatchewan Canadian Centre for the Study of Co-operatives — cooperative and data-governance research.
- Johnson Shoyama Graduate School of Public Policy — Canadian agricultural data-policy and governance research.
- EMILI Canada — named in Canadian ag-data governance discussions; requires direct project verification.
- Farm Credit Canada / AgExpert — named actor in farm-record software and data-governance discussions; not presumed open.
- Digital Technology Supercluster, Verge Ag, i-Open Group, Simon Fraser University, Terramera, Quantotech — Canadian autonomous-agriculture data-platform consortium; open status contested.
- Mohawk College IDEAWORKS — applied open satellite-imagery agricultural monitoring lead.
- Indigenous food sovereignty organisations, seed keepers, Elders, and community-led initiatives — must be identified from community-controlled sources before any record is drafted.

## Coverage review conclusions

The current catalogue is now broad enough to support comparison across open software, public data, biological commons, robotics, geospatial workflows, and infrastructure. The main imbalance is no longer simply “too much AI.” It is that the collection has not yet represented a Canadian ecosystem where open-source claims intersect with:

- local food distribution and community marketplaces;
- public agricultural modelling and climate tools;
- FAIR research-data infrastructure;
- federal open data;
- cooperative agricultural data governance;
- Indigenous seed and food sovereignty;
- commercial projects using the language of data commons.

Canada is therefore not just another geographic addition. It is a useful test case for the project’s central question because several different models coexist:

1. community-oriented software commons;
2. public federal code and data;
3. university research infrastructure;
4. cooperative and policy experiments;
5. commercial technology backed by public funding;
6. Indigenous sovereignty frameworks that may resist the assumptions of “open” itself.

## Recommended Canadian verification batch

The next verification pass should prioritise:

1. Holos — strongest direct Canadian open-source repository evidence.
2. Open Food Network Canada — strongest Canadian local-food and software-commons lead.
3. Agri-food Data Canada — strongest Canadian FAIR-data infrastructure lead.
4. LiteFarm’s Canadian institutional and partner network — bridge between existing record and Canadian ecosystem.
5. Indigenous seed sovereignty / UBC Seed Hub — high-value but requires community-sensitive sourcing.
6. Standard Data Platform for Autonomous Agriculture — contested public-funding and commercialisation case.

AAFC open data, the Canadian cooperative research network, and Mohawk College should remain as institutional and actor leads while named projects or repositories are identified.

## What this scan does not establish

- Canada does not appear to have been exhaustively searched.
- Search prominence is not evidence of national importance, farmer adoption, or public benefit.
- A Canadian institution’s participation does not make an international project Canadian.
- “Open,” “data commons,” “farmer-controlled,” and “open source” are not interchangeable claims.
- Indigenous seed and food-sovereignty work cannot be responsibly represented through open-licensing language alone.
- Several Canadian leads are institutional substrates or networks rather than standalone open-source projects.
- The named people and institutions have not yet been mapped through a full four-layer ecosystem analysis.
- The current scan has stronger English-language and institutional visibility than community-controlled evidence.

## Sources and freshness

Source freshness tags follow the project model:

- `example` — confirm that the project or repository remains live annually.
- `claim` — re-verify annually.
- `framework` — re-verify every two years.
- `statistic` — re-verify annually.

Primary sources used in this pass:

- Open Food Network Canada: https://about.openfoodnetwork.ca/ — `example`, checked 2026-08-01.
- Open Agricultural Technology: https://about.openfoodnetwork.ca/project/open-agricultural-technology/ — `claim`, checked 2026-08-01.
- LiteFarm community page: https://www.litefarm.org/join-the-community — `example`, checked 2026-08-01.
- Holos repository: https://github.com/holos-aafc/holos — `example`, `claim`, checked 2026-08-01.
- Agri-food Data Canada: https://agrifooddatacanada.ca/ — `example`, `claim`, checked 2026-08-01.
- AAFC open data: https://agriculture.canada.ca/en/science/scientific-collaboration/open-data — `framework`, `example`, checked 2026-08-01.
- Digital Technology Supercluster project: https://digitalsupercluster.ca/projects/standard-data-platform-for-autonomous-agriculture/ — `claim`, checked 2026-08-01.
- Canadian Centre for the Study of Co-operatives: https://usaskstudies.coop/research/current-projects/big-ag-data-symposium.php — `example`, `claim`, checked 2026-08-01.
- Mohawk College IDEAWORKS: https://www.mohawkcollege.ca/ideaworks-case-study-precision-agriculture — `example`, checked 2026-08-01.
- Lyon, Friedmann, and Wittman, “Can public universities play a role in fostering seed sovereignty?”: https://online.ucpress.edu/elementa/article/9/1/00089/116505/Can-public-universities-play-a-role-in-fostering — `framework`, checked 2026-08-01.
- Commonwealth digital agriculture chapter: https://thecommonwealth.org/digital-agriculture/chapter-4-caribbean-and-americas — `framework`, checked 2026-08-01.

Not legal advice.

Last reviewed: 2026-08-01.

