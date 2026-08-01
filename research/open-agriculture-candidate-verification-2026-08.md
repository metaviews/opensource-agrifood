# Open Agriculture Candidate Verification Pass

Research date: 2026-08-01

Status: first targeted verification pass against the candidate batch selected in `open-agriculture-candidate-batch-review-2026-08.md`.

This pass does not promote every selected candidate into the curated catalogue. It records what direct sources currently establish, what remains uncertain, and which candidates are ready for a normalized example record.

## Summary decision

The first pass changes the candidate picture in three ways:

1. Bioleft is now a particularly strong candidate for promotion. Its current materials document an active Latin American seed and data commons, a named open multiplication licence, a publicly downloadable dataset, a participatory protocol, and multi-year community activity.
2. farmOS and ROMI have strong direct evidence for open technical artefacts and current or documented project activity, but their records should distinguish open code/designs from adoption, farmer control, and long-term maintenance.
3. Digital Earth Africa crop-type mapping remains a valuable African case, but its repository is old even though the institutional page describes later scaling. This is a useful example of the difference between an active institutional programme and a stale public workflow repository.

LiteFarm, AgStack, AgroAPI, and Ag Data Commons remain strong candidates, but require additional claim-level work before catalogue promotion. In particular, LiteFarm’s official site links to a repository that requires further resolution, and AgroAPI’s public access model should not be confused with open-source licensing.

## Candidate findings

### LiteFarm — retain as selected, licence and repository follow-up required

Direct sources establish:

- LiteFarm is developed with researchers and software developers at the University of British Columbia and outside contributors.
- The project links to a GitHub repository, technical guidance, product guidance, and an API.
- The public site describes a free and open-source farm-management tool, farmer co-design, multilingual support, and international use claims.
- The site reports a 2026 Pan-African co-design workshop in Kenya.

What remains unresolved:

- The repository link needs to be resolved and inspected directly; the initially guessed repository path returned a 404, while the official site links to `https://github.com/LiteFarmOrg/LiteFarm`.
- The exact code and data licences need confirmation.
- The public user, farm, and country counters need interpretation and independent support.
- Hosted versus self-managed data control is not yet established.

Current disposition: `selected`, not yet `curated`.

Sources:

- https://www.litefarm.org/
- https://www.litefarm.org/join-the-community
- https://github.com/LiteFarmOrg/LiteFarm

### farmOS — ready for normalized record, with adoption claims constrained

Direct sources establish:

- farmOS is a web-based farm-management and record-keeping application.
- Its code is publicly available through the farmOS GitHub organisation.
- The principal repository identifies a GPL-2.0 licence and active 4.x development.
- The repository reported a 4.0.4 release on 2026-07-16, 9,357 commits, and public contribution/support pathways.
- farmOS can be self-hosted; subscription hosting is also available through Farmier, whose subscriptions support continued development.

Analytical significance:

farmOS is a strong operational open-software case. It adds farm records, planning, hosting, migration, and maintenance economics to a collection that already contains ODK’s field-data role and OADA’s interoperability role.

What remains unresolved:

- current deployment geography and user numbers;
- data portability in actual deployments;
- governance beyond maintainers and hosting providers;
- the licence status of community modules and integrations;
- evidence of farmer benefit and non-North American deployment.

Current disposition: promote to `curated` after creating the normalized record; do not use public repository activity as evidence of broad adoption.

Sources:

- https://farmos.org/
- https://farmos.org/hosting
- https://github.com/farmOS/farmOS

### ROMI — ready for normalized record, with project-afterlife caveat

Direct sources establish:

- ROMI developed an open-source, affordable, multipurpose platform for organic, polyculture, human-scale market gardens.
- The project documents a Plant Imager, Farmer’s Dashboard/Cablebot, Rover, PlantDB, viewers, algorithms, and related software repositories.
- The project describes field testing with professional farmers at sites near Paris and Barcelona across four seasons.
- The Rover design repository is publicly available under a Creative Commons Attribution-ShareAlike 4.0 licence.
- The GitHub repositories contain public technical artefacts, but several organisation repositories show their most recent activity in 2022–2023.

Analytical significance:

ROMI is a good open-hardware and farmer-testing case. It supports analysis of repairability, manufacturing, labour, affordability, and the relationship between open designs and practical farm autonomy.

What remains unresolved:

- licences across all hardware, software, data, and documentation components;
- whether the tools remain maintained or deployed after the funded project;
- manufacturing and repair costs;
- current farmer/community uptake;
- control of crop-monitoring and phenotyping data.

Current disposition: promote to `curated` with an explicit “project afterlife and maintenance” limitation.

Sources:

- https://romi-project.eu/
- https://docs.romi-project.eu/
- https://github.com/romi/romi-rover-design
- https://romi-project.eu/downloads/

### AgStack — retain as selected, verify governance and repository scope before promotion

Direct sources establish:

- AgStack presents itself as open digital infrastructure for agriculture and food.
- Its stated focus is reusable software, models, data access, frameworks, vocabularies, and infrastructure rather than end-user applications.
- The GitHub organisation lists a multi-repository ecosystem including geospatial identity, traceability, field data, irrigation, and other services.
- The organisation describes itself as a Linux Foundation project and reports that most projects use Apache 2.0 or EUPL 1.2, while individual repositories require checking.
- A public governance repository exists, with the search result showing activity through 2024-10-30.

Analytical significance:

AgStack is a strong infrastructure-scale case, but should probably be treated as an ecosystem record or umbrella record rather than a single application. It can test the relationship between open repositories, member-supported governance, and public agricultural infrastructure.

What remains unresolved:

- which repositories are in production or active use;
- whether the project’s public claims of active repositories translate into use by farmers or public institutions;
- governance and member influence;
- data licensing and interoperability across projects;
- relationship to OADA and OpenAgri.

Current disposition: `selected`; defer catalogue promotion until a focused ecosystem record is assembled.

Sources:

- https://agstack.org/
- https://agstack.org/projects/
- https://github.com/agstack
- https://github.com/agstack/governance

### AgroAPI / Embrapa — retain as selected, classify as public API infrastructure rather than automatically open source

Direct sources establish:

- AgroAPI is an Embrapa platform exposing agricultural information, models, and services through APIs.
- The 2023 peer-reviewed paper describes services for productivity, planting dates, soil classification, weather, bio-inputs, and satellite vegetation indices.
- The current public portal lists APIs including Agritec, ClimAPI, SATVeg, Agrofit, AgroTermos, Bioinsumos, Responde Agro, SmartSolos, and PlantAnnot.
- The current portal advertises free access for one month up to 1,000 API requests per API, which indicates an access model but does not establish open-source code or unrestricted data reuse.

Analytical significance:

AgroAPI adds a Brazilian public agricultural research infrastructure case and can illuminate how public institutions expose data and models to developers, companies, farmers, researchers, and the public.

What remains unresolved:

- code licences and source availability;
- licences and reuse terms for individual datasets and models;
- current usage and applications;
- ongoing maintenance and access restrictions;
- whether the platform’s openness is primarily API access, open data, or open software.

Current disposition: `selected`; retain the distinction between open access/API availability and open-source licensing.

Sources:

- https://www.embrapa.br/agroapi
- https://www.portal.agroapi.cnptia.embrapa.br/
- https://www.sciencedirect.com/science/article/pii/S2772375523000771

### Bioleft — strongest promotion candidate from this pass

Direct sources establish:

- Bioleft describes itself as a Latin American open-source seed exchange and breeding community.
- Its platform provides procedures for uploading seeds, using the Open Multiplication Licence, and requesting/offering seeds.
- The project released a 2022–2026 collaborative evaluation dataset through Zenodo in July 2026.
- The dataset contains more than 10,000 agronomic and tasting observations covering more than 50 creole tomato varieties and work across sites in Argentina.
- The project states that the dataset is released under a Creative Commons licence and preserves participant privacy and anonymity.
- A participatory evaluation protocol is also publicly linked.

Analytical significance:

Bioleft is not merely another seed-pledge case. It combines seed circulation, participatory breeding, community-generated data, open protocols, and Latin American agroecological practice. It should be compared with OSSI to show that biological commons can use different legal, social, and data infrastructures.

What remains unresolved:

- exact terms and scope of the Open Multiplication Licence;
- relationship between the seed platform, datasets, and participant governance;
- long-term maintenance and institutional support;
- geographic reach beyond Argentina;
- farmer and breeder outcomes.

Current disposition: promote to `curated` with a record grounded in the current platform and Zenodo release.

Sources:

- https://www.bioleft.org/es/
- https://www.bioleft.org/es/plataforma/
- https://www.bioleft.org/es/2026/07/13/ya-esta-disponible-el-dataset-de-tomates-criollos-cuatro-anos-de-trabajo-en-red-abiertos-para-la-comunidad/
- https://zenodo.org/records/21383706

### Digital Earth Africa crop-type mapping — ready for normalized record, with stale-repository finding

Direct sources establish:

- Digital Earth Africa describes an open-source crop-type mapping framework developed with RCMRD and FrontierSI.
- The workflow covers field-data collection, model development, and map production using the Digital Earth Africa platform and analysis-ready satellite data.
- The institutional page describes development for Zambia and scaling partnerships involving Niger, Rwanda, and Mozambique.
- The linked `digitalearthafrica/crop-type` repository is Apache-2.0 licensed and documents a repeatable notebook workflow.
- The repository’s latest visible commit is from December 2022, while the institutional page was published in 2024 and describes later scaling.

Analytical significance:

This is a strong African open geospatial workflow and a useful negative/contested finding: an open repository can remain public and reusable while its visible maintenance is stale relative to institutional programme claims.

What remains unresolved:

- current status of country deployments;
- local institutional control over field labels and derived products;
- maintenance and training arrangements;
- farmer, agency, and researcher use;
- whether the repository remains the operational workflow.

Current disposition: promote to `curated` with an explicit stale-repository and programme-versus-maintenance caveat.

Sources:

- https://digitalearthafrica.org/en_za/creating-an-open-source-framework-for-crop-type-mapping-in-africa/
- https://github.com/digitalearthafrica/crop-type

### Ag Data Commons — ready for normalized record, but scope is US public research infrastructure

Direct sources establish:

- Ag Data Commons is a USDA National Agricultural Library catalogue and repository for publicly accessible data produced by USDA-funded or co-funded research.
- It supports Findable, Accessible, Interoperable, and Reusable data practices.
- Metadata librarians curate submissions before publication.
- Public users can view and download resources without accounts.
- Eligibility is tied to USDA affiliation or funding, public access, and accepted data/data-product/non-executable-software types; PII is excluded.

Analytical significance:

Ag Data Commons is distinct from GODAN. GODAN is primarily an international coordination and advocacy network; Ag Data Commons is a curated public research-data infrastructure with defined eligibility and curation rules. The comparison can clarify the difference between coordination, cataloguing, repository provision, and actual reuse.

What remains unresolved:

- scale and patterns of reuse;
- licence variation across records;
- distinction between data held directly and data merely catalogued;
- geographic and institutional limits of the USDA funding condition;
- whether communities outside US-funded research benefit materially.

Current disposition: promote to `curated` after creating the normalized record, with US scope and eligibility limitations explicit.

Sources:

- https://www.nal.usda.gov/services/agdatacommons
- https://agdatacommons.nal.usda.gov/

## Batch-level findings

The first verification pass supports a broader collection than the original seven examples, but it also reinforces the need to distinguish:

- active project from historical project;
- public repository from maintained infrastructure;
- API access from open-source licensing;
- open designs from usable and repairable hardware;
- public data catalogue from universal data commons;
- institutional scaling claims from documented local use;
- open seed circulation from open datasets and participatory governance.

The strongest immediate additions are:

1. Bioleft — biological commons, participatory data, Latin America.
2. farmOS — operational open farm management.
3. ROMI — open hardware and farmer-tested robotics.
4. Digital Earth Africa crop mapping — African geospatial workflow.
5. Ag Data Commons — curated public agricultural data infrastructure.

LiteFarm and AgroAPI remain high-value candidates but need one more focused verification step before promotion. AgStack should be treated as a separate ecosystem-scale investigation rather than forced into the same record shape as a single project.

## Next action

Create normalized catalogue records for Bioleft, farmOS, ROMI, Digital Earth Africa crop mapping, and Ag Data Commons. Keep LiteFarm, AgroAPI, and AgStack in the selected-candidate queue until their unresolved licence, access, governance, and ecosystem questions are answered.

Last reviewed: 2026-08-01.

Not legal advice.
