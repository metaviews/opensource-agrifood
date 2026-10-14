# OpenAgriS3D — FAST small-farm parametric 3-D-printed tool designs

- Status: `curated`
- Region / reach: London, Ontario, Canada (Western University FAST Research Group); parametric design source published globally on GitHub
- Project: https://github.com/uwo-fast/OpenAgriS3D
- Field-guide context: opened 2026-10-14 at the user's direction, from a survey of the Western University FAST Research Group's GitHub organisation (`uwo-fast`). It extends the C4 hardware line (G-OSA-40, `fast-lab-agrivoltaics.md`) from agrivoltaic racking into small-farm tools and processing equipment, and bears on G-OSA-13/14 (certified open hardware and the design-versus-replication distinction) and G-OSA-15 (the farm-level Global South design commons). Not a scan (no G-ID). Verified 2026-10-14.

## Problem addressed

Small-scale and organic farms need low-cost, repairable tools — processing, animal handling, crop and water management — that commercial suppliers do not make at an appropriate scale or price. Distributed manufacturing (printing a tool where it is needed, from published parametric source) is the substitution strategy: the open design replaces a purchased part rather than being sold as one.

## Open layer

Parametric OpenSCAD design source under a permissive licence (MIT), with per-design documentation, released by an academic research group. It is a design commons, not a product: the artefact is the source file a farm or maker prints and adapts.

## What is actually open

Verified from the repository and its `LICENSE` (2026-10-14):

- **`uwo-fast/OpenAgriS3D`**: **MIT License** (`Copyright (c) 2025 FAST Research Group`, verified from the repository `LICENSE` file). Public repository created 2025-01-08, last pushed 2026-07-04; 1 GitHub star.
- **14 documented designs across six categories** (from `docs/README.md`): animal management (chicken feed holder, ant trap, field-dressing tool), food processing (cassava press, corn sheller), hand tools (custom shovel handle, hand shovel, pulleys), hydroponics (hydroponic halo ring, hydroponic plant pot), plant management (plant pot), and water management (garden hose splitter, gasket, irrigation stake).
- The repository states it is inspired by and a continuation of Pearce (2015), "Applications of Open Source 3-D Printing on Small Farms," *Organic Farming* 1(1):19–35.
- **Licence note:** MIT is **permissive**, a deliberate departure from the FAST organisation's default two-track policy (software `GPL-3.0-or-later`; hardware design files `CERN-OHL-S-2.0`). The permissive licence grants reuse and commercial redistribution without the share-alike reciprocity the group's other hardware carries.

## Governance and control

Academic research-group governance (FAST / Western University, led by Prof. Joshua Pearce). Because the design source is MIT-licensed, any farmer, maker, or manufacturer may print, modify, and commercialise the designs without royalty or permission — but, unlike `CERN-OHL-S-2.0`, derivatives carry no obligation to stay open.

## Evidence of use

A design commons only. The repository publishes 14 documented designs; **no independent farm replication, build report, or commercial deployment was located** — the same design-versus-usage gap the corpus records for open hardware generally (G-OSA-14). No OSHWA certification was located for this project (contrast the group's agrivoltaic hardware, which holds OSHWA `CA000008` / `CA000025` / `CA000071`).

## Maintenance and funding

Academic research group (Thompson Chair in Information Technology and Innovation, Western University; the wider FAST programme is funded through the Thompson Endowment, NSERC and SSHRC). Repository activity is low (last push 2026-07-04; 1 star), consistent with a small student-led design library rather than a maintained product line.

## Why it belongs

1. **It is the corpus's first record of a 3-D-printable small-farm tool library as such** — the "print the farm tool" layer, distinct from the group's agrivoltaic racking record (`fast-lab-agrivoltaics.md`). It puts concrete, named designs (cassava press, corn sheller, chicken feed holder, irrigation stake) behind the abstract phrase "distributed manufacturing for small farms."
2. **It gives the definition document's open-hardware kind (§2.2) a second Canadian academic anchor, with a permissive licence.** The corpus's other open-hardware anchors (OpenSprinkler, OpenFlexure) run reciprocal or mixed licences; OpenAgriS3D is a clean example of permissive hardware-source release, and of the trade-off that comes with it (reuse without reciprocity).

## What it does not demonstrate

- Any independent replication, build, or farm use of the designs; the record is a design commons, not deployment evidence.
- That permissive licensing preserves openness in derivatives — MIT allows a printed derivative to be resold or enclosed without a share-alike obligation.
- Breadth or maturity: the library holds roughly one to three designs per category, and its cassava-press and corn-sheller designs target Global South staples the Ontario-based group does not itself farm.

## Sources and verification

- `uwo-fast/OpenAgriS3D` repository (MIT License; README and `docs/README.md` design index read in full): https://github.com/uwo-fast/OpenAgriS3D
- Repository `LICENSE` (MIT, © 2025 FAST Research Group): https://raw.githubusercontent.com/uwo-fast/OpenAgriS3D/main/LICENSE
- Pearce, J. M. (2015), "Applications of Open Source 3-D Printing on Small Farms," *Organic Farming* 1(1):19–35: https://doi.org/10.12924/of2015.01010019
- GitHub repository metadata (created 2025-01-08; pushed 2026-07-04; 1 star) via GitHub API, 2026-10-14
- Last checked: 2026-10-14

Not legal advice.
