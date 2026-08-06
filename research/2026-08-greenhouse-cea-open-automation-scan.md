# Scan: Open layer in greenhouse / controlled-environment (CEA) automation — G-OSA-22

Research date: 2026-08-06
Method: bounded one-pass discovery; 9 targeted query sets; GitHub API licence/activity verification on all candidate repos; 3 primary sources read in full (OpenAg Wikipedia + citations, WUR AGC 4th-edition dataset page, Bhutan ARDC Mycodo deployment paper). No live site 504s; all primary sources retrieved.

## Why this cell

G-OSA-22 asked which layers of the greenhouse/CEA automation stack have open implementations, and who controls the closed ones. The field guide's protected-cultivation layer (Haven Greens, ioCrops, Sollum, Hoogendoorn, Tencent×WUR, Vineland) is closed-commercial or research-stage; this corpus had zero CEA records. The control stack — climate computers, fertigation, lighting, data — is where vendor lock-in is sharpest, making it the strongest test of the openness thesis.

## Headline finding

**The open CEA layer exists as three distinct, partial shapes — not as a commercial-scale open system. Open *data* (WUR Autonomous Greenhouse Challenge datasets, DOI-published across four editions) and open *standards* (Common Greenhouse Ontology, Apache-2.0) are real but thin on adoption; open *control software* exists only at the small/maker scale (Mycodo, GPL-3.0, active). The one flagship "everything open" claim (MIT OpenAg Food Computer) is archived, licence-unresolved on hardware, and publicly discredited. No open layer touches Priva/Hoogendoorn-scale commercial greenhouse control, and no open greenhouse *data standard* has verified vendor adoption. The openness thesis holds for data and hobby-scale control; it fails at commercial deployment and data-format interoperability.**

## Currents

### 1. Open control software — small/maker scale only (Mycodo)
- **Stance:** GPL-3.0 environmental regulation system on Raspberry Pi; the corpus's strongest open greenhouse/CEA control layer.
- **Anchors:** `kizniche/Mycodo` — 3,267 stars, latest release v8.17.0 (2026-08-03), actively maintained; commodity hardware, local data. Peer-reviewed deployment: Penjor et al. 2022, Bhutan ARDC-Wengkhar, 8+ months in real hydroponics structures (NFT/DWC/vertical tower).
- **Tension:** powerful and truly open, but not commercial-scale; documented deployments are hobby/research/small-farm; not a data-interoperability standard.

### 2. Open data — WUR Autonomous Greenhouse Challenge (real, verified)
- **Stance:** the field guide's "research-stage" WUR/Tencent Autonomous Greenhouse Challenge *does* release its data openly, across four editions (2018, 2019, 2021, 2024) under persistent DOIs.
- **Anchors:** 4th edition "Dwarf Tomato Timeseries and Images" (DOI 10.4121/fa102772-…, 2025-06-23; WUR; creators include Silke Hemming). Fills the field guide's gap of unnamed WUR researchers.
- **Tension:** open *data*, not open *software/hardware*; the autonomous algorithms and greenhouse hardware stay with teams/vendors. Open evidence about CEA AI, not an open CEA AI system.

### 3. Open standard — Common Greenhouse Ontology (real, unadopted)
- **Stance:** an Apache-2.0 ontology for greenhouse components/properties/measurements, TNO-led, intended as the semantic-interoperability standard for greenhouse robotics.
- **Anchors:** `vekadvies/common-greenhouse-ontology` (Apache-2.0, 0 stars, last push 2022-12-06); extended by Eichhorn et al. FOIS 2024.
- **Tension:** the constructive answer to the closed-data-format lock-in problem — but zero commercial adoption documented; no Priva/Hoogendoorn implementation; open standard candidate, not deployed standard.

### 4. The failed flagship — MIT OpenAg Food Computer (cautionary)
- **Stance:** the most ambitious "everything open" CEA claim ended archived, licence-unresolved, and discredited.
- **Anchors:** `OpenAgricultureFoundation/openag_brain` (GPL-3.0, archived 2018); `gro-hardware` (no licence, archived 2019); project closed April 2020. Gizmodo "Theranos for plants"; IEEE Spectrum on refugee-touting of non-functional units; NYT 2019.
- **Tension:** aspiration ≠ open layer; demonstrates why "would have been open source" is not evidence of openness.

### 5. Source-available / non-commercial traps (OpenGrowBox)
- **Stance:** "free open-source" framing masks a restrictive licence.
- **Anchors:** `OpenGrow-Box/OpenGrowBox` — "OpenGrowBox Community License v2.0: Source Available, Non-Commercial Only" (NOASSERTION/non-commercial). One of several hobby CEA repos (in-house-greenhouse MIT 134★ archived 2023; growmax BSD-3-Clause 27★; grova-cube-firmware GPL-3.0 16★ 2026).
- **Tension:** the hobby GitHub space is noisy and licence-ambiguous; "open-source" marketing frequently means source-available/non-commercial, not OSI/open.

## Working matrix (greenhouse/CEA automation layers × openness)

| Layer | Open implementation? | Who controls the closed alternative | Evidence |
|---|---|---|---|
| Control software (climate/fertigation logic) | Partial — small/maker scale (Mycodo GPL-3.0) | Priva, Hoogendoorn (proprietary climate computers) | Mycodo active; commercial CEA control closed |
| Hardware (sensors/actuators/species enclosures) | Commodity, not CEA-specific; no open commercial greenhouse hardware | Climate-computer vendors | OpenAg gro-hardware licence-unstated, archived |
| Data (cultivation/climate datasets) | Yes — WUR AGC, DOI-published ×4 editions | Vendor platforms (LetsGrow.com etc.) | 4th ed. DOI 10.4121/fa102772-… |
| Data standard (interop ontology) | Yes — CGO Apache-2.0 | Proprietary climate-computer formats | 0-star repo, no vendor adoption |
| Lighting / sun-as-a-service | No open layer found | Sollum (subscription), Signify/Philips | field-guide units; no open analogue located |

Blank/empty cells named as gaps: no open commercial-scale greenhouse control system; no open greenhouse data standard with vendor adoption; no open lighting layer.

## Cases added

| Record | Status | Open layer | Key verification |
|---|---|---|---|
| mycodo.md | curated | GPL-3.0 control software, active | 3,267★, v8.17.0 2026-08-03; Bhutan ARDC peer-reviewed deploy |
| openag-food-computer.md | candidate (contested) | claimed all-open; reality archived | openag_brain GPL-3.0 archived 2018; gro-hardware no licence; closed 2020, discredited |
| common-greenhouse-ontology.md | candidate | Apache-2.0 ontology/standard | 0★ repo, TNO-led, no vendor adoption |
| wageningen-agc-datasets.md | candidate (open data) | DOI-published datasets ×4 | 4th ed. DOI 10.4121/fa102772-…, WUR, Hemming et al. |

## Contested claims

- **"OpenAg was an open-source CEA platform."** Asserter: OpenAg's own framing (all hardware/software/data open). Contester: NYT/Business Insider/IEEE Spectrum/ProPublica (2019-2020) — exaggerated/fabricated results, closed amid scandal. Status: contested, not resolved in OpenAg's favor; hardware licence unresolved; assets archived.
- **"Priva has an open system architecture."** Asserter: Priva marketing ("open system architecture supports diverse hardware"). Contester: no open licence, API, or standard published; this is integration-friendly closed, not open source. Status: contested; flagged as the commercial-control-layer counterpoint, not verified open. (Field-guide lead; not a corpus record yet.)
- **"OpenGrowBox is free open-source."** Asserter: project description. Contester: OGBCL v2.0 "Source Available, Non-Commercial Only." Status: contested; source-available, not open.

## Gaps

- **G-OSA-22 partial resolution:** open data (WUR AGC) and open small-scale control (Mycodo) verified; open commercial control and adopted data standard not found. Plausibility of "no open commercial CEA control" is high but not exhaustively proven — a dedicated vendor-source pass (Priva/Hoogendoorn/Signify open programmes) could change it.
- **Intersection gaps:** no open greenhouse *data standard* with vendor adoption (CGO is unadopted); no open *lighting* layer; no Global South open CEA hardware (the G-OSA-15 farmer-led-licensed absence holds here too).
- **Sources searched:** open-source greenhouse climate control; open grow computer; OpenAg Food Computer; open fertigation; WUR AGC open data; DPGA registry (agriculture — no CEA entry); greenhouse data-exchange standard; Common Greenhouse Ontology; GitHub repo searches (food computer, greenhouse automation, openag, IPECM). Date: 2026-08-06.

## Actors (critical lens, biased to non-vendor voices)

- WUR Greenhouse Horticulture / Silke Hemming — open *data* anchor (constructive).
- TNO — open *standard* anchor (CGO; constructive but unadopted).
- Kyle Gabriel (Mycodo) — open *control* anchor (constructive, maintainer-led).
- Caleb Harper / MIT Media Lab (OpenAg) — the failed-aspiration anchor (critical).
- Priva / Hoogendoorn — the closed commercial-control incumbents (contrast, not corpus records).

## Freshness model

- Mycodo: fact/example — re-verify release activity + Bhutan-style deployments annually.
- WUR AGC datasets: fact — DOIs stable; re-check for a 5th edition annually.
- CGO: gap/example — re-check repo activity + any vendor adoption annually.
- OpenAg: gap (negative) — no further verification expected; record closed.

## What this doesn't do (honest omissions — names next cycle)

1. Does not verify Priva/Hoogendoorn/Signify *open programmes* at source — the commercial-control-layer counter-claim (Priva "open architecture") is flagged but not closed.
2. Does not cover open *vertical-farm* or *mushroom* CEA separately (4AG Robotics, Lufa, GoodLeaf are field-guide units, not open-layer verified here).
3. Does not establish whether any open greenhouse *data standard* is implemented in production — CGO's adoption gap is recorded but not proven across vendors.
4. Does not resolve whether Mycodo scales beyond small/maker — no commercial CEA deployment evidence was located.

## Sources

- GitHub API (licence/activity, 2026-08-06): kizniche/Mycodo; OpenAgricultureFoundation/openag_brain, gro-hardware; vekadvies/common-greenhouse-ontology; OpenGrow-Box/OpenGrowBox; search: food computer, greenhouse automation, openag, IPECM, growmax, grova-cube-firmware.
- Penjor, T. et al. (2022), "Automation of Hydroponics System using Open-source Hardware and Software…", Bhutan Journal of Agriculture, DOI 10.55925/btagr.22.5108.
- WUR Research Portal, 4th Autonomous Greenhouse Challenge dataset, DOI 10.4121/fa102772-32db-4b30-bace-12f2016722ce.
- Wikipedia, "Open Agriculture Initiative" + NYT/IEEE Spectrum/ProPublica citations (2019-2020).
- TNO, "System integration for robots in greenhouses" (CGO project page).
- Eichhorn et al. (2024), "Extending the Common Greenhouse Ontology…", FOIS 2024.

Not legal advice.
