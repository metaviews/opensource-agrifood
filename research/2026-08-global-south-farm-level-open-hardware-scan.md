# Global South farm-level open hardware: targeted gap scan

Research date: 2026-08-02
Method: targeted follow-up to the Global South open-hardware scan of the same date, aiming directly at G-GS-01 (the residual of G-OSA-15): farm-level open agrifood hardware in the Global South with public design files. Six query sets across appropriate-technology literature, irrigation, solar drying, processing, and Latin American agroecology; key sources read in full (Appropedia OSAT and agricultural-tools pages, Farm Africa/NECPA solar dryer design document, OSAT literature).

## Headline finding

G-GS-01 is now evidenced rather than assumed. Farm-level open agrifood hardware in the Global South exists in three shapes, none of which is the direct equivalent of L'Atelier Paysan or Vinduino:

1. **Open design commons platforms** — Appropedia/OSAT: a CC BY-SA wiki hosting appropriate-technology designs (agricultural tools, pumps, dryers), with a substantial academic current (Pearce 2012 cited 308; Pearce 2010 cited 393). Designs circulate; builds are not tracked.
2. **NGO-published open designs** — openly published, field-oriented design documents without explicit open licences or maintained repositories. Archetype: the Farm Africa/NECPA low-cost solar dryer (Uganda, 2024) — locally buildable, deliberately distributed through trained artisans, but licence unstated.
3. **Affordable-but-closed commercial hardware** — MoneyMaker pumps (KickStart), SunCulture solar irrigation, Berin Mini-Pivot (Zimbabwe): low-cost, widely used, and not open. The same boundary the PAIS Kit (Brazil) marked in the first Global South pass.

The absent shape: **farmer-led, explicitly licensed, maintained open-hardware projects with public design files** — the L'Atelier Paysan/Vinduino equivalent. That absence is the finding.

## Currents

### Current 1 — Open design commons platforms
Appropedia and the OSAT movement: free and open appropriate technology for the developing world. Designs for agricultural tools, water pumps, solar dryers, and processing equipment, share-alike licensed, community-maintained. The claims of the current are large (end to IP lock-in, localization, gratis-and-libre access); the replication evidence is thin.

### Current 2 — NGO-published open designs
Development NGOs publishing field-oriented tool designs openly: Farm Africa/NECPA solar dryer (Uganda), WorldVeg solar dryer documentation, Practical Action technical briefs (lead). Open publication without explicit open licensing — the licence-clarity gap.

### Current 3 — Affordable-but-closed commercial hardware
The market answer to the same problem: MoneyMaker pumps, SunCulture solar irrigation, Berin Mini-Pivot. Low cost and smallholder-targeted, but closed — no designs, no licence, vendor distribution.

### Current 4 — Academic design literature
University design papers for smallholder equipment: the Ghana solar-electric maize dryer (Arduino, PCB/Gerber files, Fusion 360), solar dryer reviews for Asia and Africa (Udomkun et al. 2020, cited 384). Designs published in papers; no maintained repositories or licences.

## Working matrix

Shape x what is open x licence clarity x maintenance. `●●` = well documented; `●` = single strong source; `—` = gap.

| Shape | What is open | Licence clarity | Maintenance | Evidence |
|---|---|---|---|---|
| Appropedia / OSAT (global) | designs, how-tos, literature | CC BY-SA (wiki); per-page varies | community/bot | `●●` |
| Farm Africa/NECPA solar dryer (Uganda) | design document | unstated | project-bound | `●` |
| MoneyMaker / SunCulture / Berin (Africa) | nothing | closed | vendor | `●` |
| Academic design papers (Ghana, Asia/Africa) | paper-published designs | unstated | none | `●` |

Blank cells: no located Global South farm-level project with an explicit open-hardware licence (OSHWA/CERN OHL absent, consistent with G-OSA-13); no located project with a maintained design repository.

## Cases added by this pass

| Case | Region | Open layer | Governance | Status |
|---|---|---|---|---|
| Appropedia / OSAT | global (developing-world oriented) | CC BY-SA design commons | community wiki + academic current | curated |
| Farm Africa / NECPA solar dryer | Uganda | openly published design document (licence unstated) | NGO + producer association | candidate |

## Contested claims

- **OSAT can "end predatory IP lock-in" and drive sustainable development (Pearce/OSAT framing).** Asserting: the OSAT literature and Appropedia pages. Contesting: designs on a wiki are not built designs; no build-verification standard exists; the agricultural-tools page itself concedes that land concentration can make tool design secondary to land reform. The paradigm claim outruns the evidence. Last reviewed: 2026-08-02.
- **NGO-published designs are "open" (Farm Africa).** Asserting: open publication of the design document. Contesting: no explicit open licence, no repository, no stated reuse/derivation terms — open publication is not open licensing. Last reviewed: 2026-08-02.
- **Low-cost irrigation products (MoneyMaker, SunCulture) fill the smallholder hardware gap.** Asserting: product and donor framing (e.g., TAAT e-catalogs). Contesting: they are closed commercial products; affordability without openness reproduces vendor dependency. Last reviewed: 2026-08-02.
- **3D-printable OSAT designs are ready for developing-world deployment (Pearce 2010).** Asserting: the OSAT 3D-printing literature. Contesting: lab-tested printable tools are not field-verified smallholder tools; filament, power, and tooling dependencies are unaddressed in most designs. Last reviewed: 2026-08-02.

## Gaps

- **G-GS-05 — Farmer-led, explicitly licensed open hardware in the Global South: confirmed absent.** The residual of G-GS-01. No L'Atelier Paysan/Vinduino equivalent found in Africa, Asia, or Latin America across two passes. Plausibility remains high; this is the strongest candidate for a future targeted field-work or language-specific cycle.
- **G-GS-06 — Licence clarity for NGO-published ag tool designs.** Solar-dryer and post-harvest designs are published openly with unstated licences; reuse and derivation terms are unknown. Maps to G-OSA-13.
- **G-GS-07 — Build and deployment evidence for OSAT designs.** Appropedia hosts designs, not build logs; the number of Global South communities that built them is unmeasured. Maps to G-OSA-14.

## Actors (critical lens)

- **Appropedia / Queens Applied Sustainability Group / MOST** — the OSAT platform and academic current; the most substantial open-design resource located.
- **Farm Africa / NECPA** — NGO-published design with an artisan distribution model; the closest to a working distribution loop.
- **ECHO and Practical Action** — leads for appropriate-technology resource organizations (not fully read in this pass).
- **Counterweights, named to position:** KickStart (MoneyMaker), SunCulture, Berin — closed commercial hardware that occupies the affordability niche.

## Freshness model

- Appropedia licence and activity: `example` — confirm annually.
- Farm Africa design document: `example` — confirm annually.
- OSAT literature claims: `claim` — re-verify every 2 years.
- Build/deployment evidence: `gap` — actively sought in both passes, not found.

## What this scan does not yet do

- **No local-language search.** Spanish, Portuguese, French, Hindi, and Swahili sources were not searched; the "absent" finding is an English-language finding.
- **No China/Southeast Asia OSAT search.** The previous China cycle did not cover Chinese appropriate-technology platforms (e.g., Taobao-era maker designs); this pass is Africa/LatAm-weighted.
- **No field verification.** Whether NECPA dryers or Appropedia designs work at scale is unverified.
- **ECHO and Practical Action not fully read.** Both are strong leads for the next pass.
- **No explicit-licence census.** The number of Global South ag tool designs with an explicit OSHWA/CERN OHL licence remains unmeasured (G-OSA-13 scope).

## Sources

- Appropedia OSAT page: https://www.appropedia.org/Open_Source_Appropriate_Technology ; agricultural tools: https://www.appropedia.org/Agricultural_tools
- Pearce 2012: https://infohub.practicalaction.org/bitstream/11283/593056/1/Pearce_2012_case_for_OSAT.pdf ; Pearce 2010: https://hal.science/hal-02120493/file/3-D_Printing_of_Open_Source_Appropriate.pdf ; Buitenhuis et al. 2010: https://hal.science/hal-02120500v1/file/Open_Design-Based_Strategies_to_Enhance.pdf
- Farm Africa / NECPA solar dryer design: https://www.farmafrica.org/wp-content/uploads/2024/07/solar-dryer-design.pdf
- Solar dryer review (Asia/Africa): https://www.sciencedirect.com/science/article/pii/S0301479720306629
- Ghana solar-electric maize dryer: https://www.researchgate.net/publication/368343325_A_Solar-Electric_Maize_Dryer_for_Small-Holder_Farmers_in_Ghana
- MoneyMaker (TAAT e-catalog): https://e-catalogs.taat-africa.org/com/technologies/moneymaker-low-cost-irrigation-pumps ; SunCulture: https://energyalliance.org/sunculture-empowering-africas-farmers-through-solar-powered-irrigation/
- ECHO (lead): https://www.appropedia.org/Appropedia:List_of_appropriate_technology_organizations

Not legal advice.
