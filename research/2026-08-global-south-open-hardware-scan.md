# Global South open agrifood hardware: discovery scan

Research date: 2026-08-02
Method: third bounded pass in the hardware cell family (after the open-hardware/robotics/sensing scan and the machine-data-access/telematics scan of the same date). Scope: open farm hardware, robotics, sensing, and drone ecosystems originating in or deployed across Africa, Asia, and Latin America. This pass targets gap G-OSA-15. Six query sets plus follow-up verification; key sources read in full (Think Oggún history page, Flying Labs/WeRobotics network page, AfricaOSH, REGOSH Open Agroecology Lab, Livelihoods PAIS Kit page, Arancio 2023 abstract); GitHub presence checked via API.

## Headline finding

Global South open agrifood hardware exists, but not where the first scan's gap framing assumed. It is concentrated at two levels:

1. **Network and community infrastructure** — continental and regional layers where open hardware and open drone/data capacity are built (AfricaOSH, GOSH movement, Flying Labs Network).
2. **Manufacturing-transfer models** — open-manufacturing business models aimed at in-country production, where "open" functions as a trust and licensing mechanism rather than a free design commons (Think Oggún).

Farm-level open hardware projects with public design files — the direct equivalent of L'Atelier Paysan or Vinduino in the global South — remain the actual gap. The strongest Latin American open-hardware activity sits in the open-science-hardware movement adjacent to agriculture (REGOSH's open agroecology stack; GOSH Latin America projects documented by Arancio 2023).

## Currents

### Current 1 — Continental community infrastructure
Pan-African and global open-science-hardware networks that provide the substrate for local projects. Anchors: AfricaOSH (Africa), GOSH (global, with Latin American and African chapters). These are communities of practice and events, not hardware commons themselves.

### Current 2 — Localized drone, data and AI capacity
Networks that build local capability in the global South using open drone/data/AI tooling. Anchor: Flying Labs Network (WeRobotics) — close to 40 countries across Africa, Latin America, the Caribbean, and Asia-Pacific, with agriculture among its named sectors (CGIAR + Tanzania Flying Labs "Drones for Agriculture"; Nepal Flying Labs crop monitoring). The localization model is structural (independent, self-financed local hubs), which is not the same as farmer ownership.

### Current 3 — Manufacturing-transfer "open system" models
Business models that transfer manufacturing capability in-country under an "open system" frame. Anchor: Think Oggún (CleBer LLC) — a low-cost, off-the-shelf, field-repairable tractor designed with Cuba in mind, with distributors reported in four countries. The openness is a paid licensing and transfer mechanism (5-year technology licence fee after 100% local manufacture), not OSHWA-style free redistribution. This is the clearest "open-washing" boundary case found in the entire hardware cell family.

### Current 4 — Open agroecology research stacks
Open-source farm-data and sensing infrastructure built with rural organizations. Anchor: Open Agroecology Lab (REGOSH, Argentina) — farmOS, SurveyStack, farmOS-Aggregator, and open sensing hardware collaborations (Our-Sci reflectometer, CO2 soil respiration device with OpenTEAM), with co-designed data governance. The farmOS ecosystem's global South reach.

## Contrast case (negative finding)

**PAIS Kit (Brazil)** — an agroecology equipment kit (concentric-circle market gardening, solar drip irrigation, henhouse) designed by Sebrae and distributed through the Livelihoods Fund for Family Farming with Bonafont (Danone) and Sebrae financing; ~20,000 BRL (~€6,000) per kit including 30 months of training. It is affordable and agroecological, but it is institutional/commercial distribution, not an open commons: no public designs, no licence, farmers assemble but do not own the design. It marks the boundary between "affordable tech for the global South" and "open agrifood hardware".

## Working matrix

Level x region x open layer. `●●` = well documented; `●` = single strong actor; `○` = emerging/thin; `—` = gap.

| Level | Africa | Latin America | Asia-Pacific |
|---|---|---|---|
| Continental community infrastructure | AfricaOSH `●`; GOSH `●` | GOSH LatAm projects `●` (Arancio 2023) | — |
| Drone/data/AI capacity networks | Flying Labs (Tanzania, Kenya, etc.) `●●` | Flying Labs (Peru, etc.) `●` | Flying Labs (Nepal, Philippines, etc.) `●●` |
| Manufacturing-transfer models | — | Oggún (Cuba-facing, made in US) `●` | — |
| Farm-level open hardware w/ public designs | — | REGOSH open agroecology stack `●` | — |

Named gaps: Asia-Pacific has no located continental open-hardware community for agrifood; Africa has no located farm-level open hardware project with public designs; Latin America's farm-level layer is research-stack rather than machine-level.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| Think Oggún | US-designed / Cuba-facing, 4-country distributors | open-manufacturing transfer model (licence-fee) | private LLC | curated |
| Flying Labs Network | ~40 countries, Global South | localized drone/data/AI capacity network | WeRobotics nonprofit + independent local hubs | curated |
| AfricaOSH | Africa | open-science-hardware community infrastructure | community / GOSH-affiliated | candidate |
| Open Agroecology Lab (REGOSH) | Argentina | open farm-data stack + open sensing collaborations | assemblage of rural orgs, researchers, activists | curated |

## Contested claims

- **Oggún is an "open source" tractor.** Asserting: project and press framing (Greenhorns: "open source"; Granma: "based on an Open Source" model). Contesting: the primary source describes a 5-year technology licence fee after in-country manufacture reaches 100%, and no public design files were located. "Open system" here is trust-transfer and paid licensing, not free redistribution. Last reviewed: 2026-08-02.
- **Flying Labs is "the largest" network (WeRobotics framing).** Asserting: WeRobotics network page (38 labs end of 2025; 669 locally led projects and trainings; "THE largest drone, data and AI for social good network"). Contesting: these are self-reported figures; ESRI reports 41 countries, the network page says close to 40. Comparable networks were not benchmarked. Last reviewed: 2026-08-02.
- **GOSH's "open science hardware ubiquitous by 2025" ambition.** Asserting: GOSH/AfricaOSH framing. Contesting: AfricaOSH's own site shows placeholder community counters and no ag-specific output; ubiquity is an ambition, not an achieved state. Last reviewed: 2026-08-02.
- **Local capacity = farmer control.** Asserting: localization framing of the networks. Contesting: Flying Labs hubs are self-financed service providers — farmers are typically clients; REGOSH is co-designing data governance but the ontology is still under construction. Tool openness does not automatically produce farmer ownership. Last reviewed: 2026-08-02.

## Gaps

- **G-GS-01 — Farm-level open agrifood hardware in the Global South with public design files.** The direct equivalent of L'Atelier Paysan or Vinduino was not found in Africa, Asia, or Latin America in this pass. Plausibility remains high (cost barriers, repair constraints, agroecology movements). This is the residual of G-OSA-15. Last searched: 2026-08-02.
- **G-GS-02 — Deployment evidence for the located networks.** Flying Labs agriculture impact, AfricaOSH project output, and REGOSH tool adoption are network- or self-reported; independent deployment evidence was not located. Last searched: 2026-08-02.
- **G-GS-03 — Ownership and licensing of manufacturing-transfer models.** Who owns Oggún-style designs after transfer, and what licence governs them, is unresolved and consequential for the "open" claim. Registered as G-OSA-17. Last searched: 2026-08-02.

## Actors (critical lens)

- **REGOSH / Open Agroecology Lab** — rural-organization-led; the closest to community-governed openness in the pass.
- **Flying Labs hubs** — locally owned capacity; service model with farmers as clients.
- **AfricaOSH** — the continental substrate; ag output still unproven.
- **Oggún / CleBer** — a private company whose "open" framing requires the most scrutiny.
- **Counterweights, named to position:** PAIS Kit/Sebrae/Livelihoods (affordable but closed distribution), GOSH (global movement with ambitious claims), WeRobotics (nonprofit network with self-reported metrics).

## Freshness model

- Oggún business model and licence terms: `fact` — re-verify every 2 years; from primary source.
- Flying Labs network scale: `claim` — re-verify annually; self-reported.
- REGOSH activity: `claim` — re-verify annually; documented window 2018-2023.
- AfricaOSH status: `claim` — verify before promotion from candidate.
- Arancio 2023 (LatAm open science hardware): `framework` — re-verify every 2 years.

## What this scan does not yet do

- **No Asia-Pacific open agrifood hardware pass.** India, China, and Southeast Asia were not searched beyond the general query; the Asia-Pacific row of the matrix is mostly blank.
- **No local-language searches.** Spanish, Portuguese, and French sources beyond what surfaced in English-language queries were not systematically searched; the Oggún case surfaced partly through English coverage of Cuba.
- **No farm-level project verification in situ.** Farmer-organization interviews or on-the-ground verification were not attempted.
- **No Cuban deployment verification.** The US embargo and logistics dynamics of the Oggún case were not investigated.
- **No open-hardware certification audit for the new records.** Licence and certification status (G-OSA-13) applies to these records as much as to the first-cycle ones.

## Sources

- Think Oggún history (primary): https://ronnietractors.com/history ; Granma: https://en.granma.cu/cuba/2016-04-11/cleber-tractors-engines-of-change-between-cuba-and-the-united-states ; Civil Eats: https://civileats.com/2022/04/27/right-to-repair-open-source-tractors-john-deere-oggun-farms-profitability-technology/
- Flying Labs Network: https://werobotics.org/our-work/networks-of-local-experts/the-flying-labs-network ; https://flyinglabs.org/ ; CGIAR + Tanzania: https://werobotics.org/blog/cgiar-and-tanzania-flying-labs-learn-how-to-fly-together
- AfricaOSH: https://africaosh.com/ ; GitHub: https://github.com/AfricaOSH ; 3rd summit (FAO AIMS): https://aims.fao.org/news/apply-3rd-africa-open-science-hardware-summit-13-15-april-2018
- Open Agroecology Lab (REGOSH): https://regosh.libres.cc/en/projects/open-agroecology-lab/ ; tools: https://regosh.libres.cc/en/projects/open-agroecology-tools/
- Arancio, J. (2023), "From inequalities to epistemic innovation: Insights from open science hardware projects in Latin America", Environmental Science & Policy 150: https://www.sciencedirect.com/science/article/pii/S1462901123002253
- PAIS Kit / Livelihoods (contrast case): https://livelihoods.eu/making-agroecology-accessible-to-smallholder-farmers-in-brazil/
- GOSH: https://openhardware.science/

Not legal advice.
