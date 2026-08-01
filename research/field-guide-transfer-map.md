# Agrifood AI Field Guide -> Open Source Agrifood

## Purpose

This document assesses how the Agrifood AI Field Guide (https://agrifood.metaviews.ca/) can inform the broader `opensource-agrifood/` research project. It distinguishes material that can be transferred directly from material that should be used as research input, and proposes a low-duplication boundary between the two repositories.

Research date: 2026-08-01

## Executive assessment

The field guide is already a substantial upstream research base for Open Source Agrifood. It contains an explicit open-source agrifood thread, not merely incidental references:

- a cross-cutting framework unit on open source in agrifood;
- a global open-source cycle and a fresh open-source AI substrate scan;
- an agrifood quantitative-panel scan that separates sector-specific evidence from global AI figures;
- an Africa open-source agrifood scan and follow-on units;
- a complete talk archetype for open source + smallholder + multilateral systems;
- supporting units on open data, interoperability, data cooperatives, Indigenous data governance, multilingual voice data, open-source seeds, CGIAR, AGRA, and related actors.

The strongest relationship is therefore:

- `agrifood-ai-field-guide/` = the maintained, broad agrifood-AI knowledge base and research substrate;
- `opensource-agrifood/` = an independent project focused on open-source agrifood knowledge, environmental scans, analytical frameworks, research leads, and related practice. An event may benefit from this work, but it is not the current organizing purpose.

The Open Source Agrifood project should not copy the whole field guide. It should build an independently sourced knowledge base, using the field guide as a signpost to relevant material and as one comparative body of work. Where research feeds both projects, each project should retain its own analytical purpose and cite original sources rather than treating the other repository as the evidentiary endpoint.

## What is already available in the field guide

The field guide currently reports, in its README and registries:

- 219 content units;
- 35 scan files;
- 42 quotes in the project description (47 tracked quote files at the latest repository check);
- eight talk archetypes;
- a current v5 taxonomy;
- a gap registry and a lead registry;
- CC BY 4.0 content licensing and MIT licensing for code.

The open-source-specific material is concentrated enough to support foundational research without beginning from a blank page.

## Useful upstream material

These are the best candidates for research leads, comparative reading, and selectively adapted notes in `opensource-agrifood/`. They are not automatically authoritative merely because they appear in the field guide. Each imported claim should be checked against the original source, with the field-guide path retained as contextual provenance where useful.

### Tier 1: foundation anchors

1. `units/open-source-in-agrifood-framework.md`
   - The best framing document.
   - Connects software open source, agricultural commons, open data, cooperatives, Indigenous data governance, FAO/Digital Public Goods, and the field guide's existing actors.
   - Useful for terminology and an initial map of the field.

2. `talks/archetypes/07-open-source-smallholder-multilateral.md`
   - A useful example of how a knowledge base can assemble research into a public-facing analytical argument.
   - It is secondary methodology material for the current phase, not a programme specification or event assumption.

3. `scans/2026-07-open-source-cycle.md`
   - The core synthesis of open-source threads already present in the field guide.
   - Useful for identifying the open-source threads already present in the broader corpus.

4. `scans/2026-07-open-source-ai-substrate-v2.md`
   - The structural context: funding flows, national strategies, open-weight versus genuinely open-source definitions, agent/harness infrastructure, public investment, and regulatory substrate.
   - Particularly useful for research questions that go beyond "which tools exist?"

5. `scans/2026-07-open-source-ai-agrifood-quantitative-panel.md`
   - Important evidence hygiene asset.
   - Separates global open-source AI figures from agrifood-specific evidence and explicitly marks where no comparable agrifood panel exists.
   - Should inform public claims and prevent global Mozilla figures from being presented as agrifood-specific.

### Tier 2: concrete project and ecosystem anchors

- `units/oada-open-ag-data-alliance.md` — open interoperability standards and farmer data control.
- `units/joindata-netherlands.md` — a deployed farmer-controlled data cooperative with concrete membership and operating figures.
- `units/napdc-national-ag-producer-data-cooperative.md` — framework-development cooperative model.
- `units/data-commons-architecture.md` — three-layer architecture: operational sharing, framework/policy, and technical standards.
- `units/open-data-ecosystem.md` — GODAN, CGIAR FAIR, public data infrastructure, and related open-data assets.
- `units/indigenous-data-sovereignty.md` — CARE, IEEE 2890, Indigenous data governance, and sovereignty boundaries.
- `units/cgiar-agrillm-ai-global-south.md` — multilateral, smallholder-centred, multilingual, low-bandwidth, voice-first deployment pattern.
- `units/agra-alliance-green-revolution-africa.md` — African-led multilateral and smallholder institutional anchor.
- `units/mozilla-state-of-open-source-ai-2026.md` — global quantitative and strategic anchor, with explicit caveats.
- `units/mozilla-common-voice-african-languages.md` — open voice-data and local-language infrastructure.
- `units/open-data-kit-africa-agritech.md` — open data-collection tooling in African agrifood contexts.
- `units/ushahidi-civic-tech-agrifood-ai.md` — African-origin open civic technology, with the important caveat that it is not primarily an agrifood AI platform.
- `units/open-source-seed-initiative-africa.md` — open-source seed and seed-sovereignty connection.
- `units/godan-2-0-africa-open-data.md` — open-data coordination and policy layer.
- `units/alliance-bioversity-ciat-banana-disease-dashboard.md` — open data / disease-observation infrastructure.
- `units/strathmore-university-ai-tools.md` — African academic open-source AI tooling.

These are not all equivalent examples of "open source." They occupy different layers: software, models, data, standards, governance, biological materials, and institutional practice. That distinction should be preserved in the project's taxonomy and writing.

## Material to use as input, not copy wholesale

### The full field-guide taxonomy

The v5 taxonomy is designed for the whole agrifood-AI corpus. Open Source Agrifood should borrow selected dimensions rather than reproduce all 15 cross-cutting tags.

Possible Open Source Agrifood facets:

- open layer: code / model or weights / data / standards / governance / biological commons / institutional practice;
- openness status: genuinely open / open-weight / open-source-adjacent / open data / commons or cooperative / unclear;
- agrifood location: input / farm / processing / distribution / consumption / waste and recovery;
- operating model: vendor / cooperative / public or multilateral / civil society / academic / farmer-led / mixed;
- deployment maturity: framework / research / pilot / deployed / discontinued or inactive;
- sovereignty posture: farmer-controlled / community-controlled / Indigenous-sovereign / public-good / vendor-controlled / mixed;
- participation mode: omit from the core taxonomy for now; this is initiative-specific rather than a research classification.

This is a provisional project vocabulary, not a replacement for the field guide taxonomy. It should be tested against an initial environmental scan before being formalized.

### The field guide's gap registry

The gap registry is valuable as a research backlog, but its 338-item corpus-wide scale is too large to import wholesale. The relevant open-source subset should be extracted into a local, smaller register and independently checked.

High-value carryovers include:

- agrifood-specific open-source AI deployment evidence remains thinner than global open-source AI evidence;
- independent deployment and adoption scale for Ushahidi, ODK, OSSI, GODAN, Common Voice, Strathmore, CGIAR FAIR implementation, Digital Green, and Viamo remains incomplete;
- open-source value capture and maintenance economics are underdeveloped;
- integration across voice, local-language data, farm-management systems, model layers, and extension feedback loops is an open infrastructure problem;
- OADA implementation and vendor-adoption scale remain unclear;
- international replication of JoinData-like models remains unresolved.

These gaps can become research questions, scan tracks, or calls for evidence. They should not be presented as settled negative findings.

### The field guide's lead registry

The lead registry contains useful named targets, but Open Source Agrifood should only import leads that fit its independent research scope. The most relevant already-realized leads are the open-source, open-data, cooperative, seed, and multilateral units listed above. Open leads around EU regulation, funders, AI factories, and institutional programmes can be revisited when an environmental scan demonstrates that they belong in the project's scope.

## Key analytical contributions to carry into the project

### 1. Open source is a layered agrifood system, not a single tool category

The field guide supports a stack model:

1. training and source data;
2. models or weights;
3. agent and application infrastructure;
4. interoperability standards;
5. farm, extension, processing, or supply-chain interfaces;
6. governance, consent, rights, and accountability;
7. maintenance and funding institutions.

A project that only inventories repositories or models will miss the layers that determine whether open systems remain usable and accountable.

### 2. The central question is control, not only technical capability

The Mozilla material argues that the contest has moved beyond model capability toward infrastructure, tooling, governance, and the ability to shape, audit, and improve systems. In agrifood, this connects directly to farmer data ownership, cooperative infrastructure, Indigenous data sovereignty, interoperability, and exit rights.

### 3. Open source has multiple currents

The fresh substrate scan distinguishes at least four currents:

- open weights and downstream self-hosting;
- open infrastructure and standards;
- state-funded or sovereignty-oriented openness;
- FAO / Digital Public Goods / Global South public-good openness.

The project should not collapse these into one political or technical position.

### 4. The Global South material supplies operational evidence, but not a complete quantitative panel

CGIAR, AGRA, Digital Green, Common Voice, ODK, OSSI, and related actors provide named deployment and infrastructure evidence. However, the field guide explicitly warns that Mozilla's global figures are not agrifood-specific and that the agrifood quantitative panel remains partial. This is a strength for research credibility: the project can make a substantive case without overstating the evidence.

### 5. Maintenance and value capture are first-class questions

The field guide carries the tension between open-source use and economic sustainability:

- open systems may have real use without corresponding revenue capture;
- projects can lose momentum when maintenance funding and contributor communities are weak;
- agricultural cooperative and commons models offer relevant institutional analogies;
- the research should ask who pays for maintenance, who governs the roadmap, and who benefits from derived value.

## Recommended transfer architecture

Do not copy the entire field guide. Create a small, explicit bridge in `opensource-agrifood/`:

```
research/
  field-guide-transfer-map.md          # this assessment
  field-guide-open-source-dossier.md   # curated research index, with original sources
  field-guide-gap-and-question-register.md
  sources/
    README.md                          # provenance and source practices
```

The dossier should be an index and synthesis, not a duplicate copy of every unit. Each entry should contain:

- field-guide source path;
- title and actor;
- open layer(s);
- agrifood relevance;
- strongest evidence;
- caveat or verification status;
- likely research use;
- last verified date;
- CC BY attribution line.

If full unit copies become necessary for analysis, place them in a clearly marked `adapted/` directory and preserve the original path, title, project attribution, source links, and licence notice. Avoid silently editing a copied unit into a new claim. Prefer a new research note that cites the original source over copying a full unit.

## Provisional analytical spine for the research project

Until the project's initial scan establishes a stronger frame, a defensible provisional spine is:

**From open tools to open agrifood infrastructure: who controls the data, interfaces, maintenance, and benefits?**

This is preferable to a generic inventory because it can hold together:

- practical tools and demonstrations;
- farmer and cooperative data control;
- open data and local-language infrastructure;
- public and multilateral investment;
- maintenance and sustainability;
- the difference between open source, open weights, open data, and commons governance.

A provisional research sequence could be:

1. Define the different meanings of openness.
2. Map existing projects and infrastructures across layers.
3. Examine control of data, standards, interfaces, and rights.
4. Examine usability: language, bandwidth, literacy, training, and support.
5. Examine maintenance, funding, governance, and value capture.
6. Record gaps, contested claims, and areas requiring deeper scans.

This should remain a working hypothesis until tested against original sources and an initial environmental scan.

## Transfer versus fresh research

### Can be carried forward as research input

- conceptual framing;
- named actors and projects;
- source links and quotations, with attribution;
- evidence caveats and contested claims;
- the open-source talk architecture as an example of downstream synthesis;
- the field guide's research methods for future scans;
- the open-source gap and lead subset.

### Should be freshly researched for this project

- current status, dates, availability, licences, and repository activity of every showcased project;
- current institutional affiliations and project status;
- current geographic and linguistic scope of deployments;
- current funding, maintenance, governance, and contributor information;
- any claim that turns a general AI statistic into an agrifood-specific statistic;
- current legal or licensing interpretation for models, datasets, code, seed materials, and derived works.

## Licensing and provenance note

The field guide states that its content is CC BY 4.0 and its code is MIT. The Open Source Agrifood repository currently has no visible project-level licence file. Before importing substantial text or adapting content for publication:

1. decide and document the licence for new Open Source Agrifood material;
2. retain CC BY 4.0 attribution for copied or adapted field-guide content;
3. distinguish original Open Source Agrifood analysis from field-guide-derived material;
4. retain source URLs and verification dates;
5. do not assume that an open-source software licence applies to research prose, datasets, images, recordings, speaker materials, or model weights.

## Immediate research next steps

1. Create the curated open-source research dossier from the foundation anchors and selected original sources.
2. Create a short research question register from the relevant gaps and contested claims.
3. Draft the first environmental scan, using original institutional, project, academic, standards, and policy sources.
4. Test the provisional vocabulary against that scan before creating a formal taxonomy.
5. Re-verify all dated claims before public publication.
6. Keep the field guide as an adjacent corpus and comparative signpost; do not use it as a substitute for original-source research.

## Bottom line

The field guide can supply substantial intellectual context for Open Source Agrifood. The main transfer is not a pile of copied project descriptions; it is a way of seeing open agrifood as a layered infrastructure and governance question, together with named leads for original-source research. Open Source Agrifood should add independently sourced scans, analysis, and knowledge that the field guide does not yet contain. Research can feed back into both repositories when appropriate, while each remains distinct and traceable.

## Source repositories

- `/home/farmer/agrifood-ai-field-guide/`
- `/home/farmer/opensource-agrifood/`

Primary field-guide sources consulted are named inline above; the central anchors are `units/open-source-in-agrifood-framework.md`, `scans/2026-07-open-source-cycle.md`, `scans/2026-07-open-source-ai-substrate-v2.md`, `scans/2026-07-open-source-ai-agrifood-quantitative-panel.md`, `scans/2026-07-africa-open-source-agrifood.md`, and `talks/archetypes/07-open-source-smallholder-multilateral.md`.

This assessment is derived from CC BY 4.0 field-guide content and should retain that attribution if redistributed or adapted.

Attribution: Agrifood AI Field Guide, `/home/farmer/agrifood-ai-field-guide/`, CC BY 4.0, accessed 2026-08-01.

License: https://creativecommons.org/licenses/by/4.0/

Not legal advice.
