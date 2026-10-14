# Western University FAST Lab distributed recycling & additive manufacturing (DRAM)

- Status: `candidate`
- Region / reach: London, Ontario, Canada (Western University FAST Research Group); designs published globally
- Projects: https://github.com/uwo-fast/desktop-sheet-press · https://github.com/uwo-fast/feedstock-hopper · https://github.com/uwo-fast/Prusa-Firmware-GB3DPE · https://github.com/uwo-fast/pipe-fitting-SCAD · https://github.com/uwo-fast/hangprinter-v4
- Field-guide context: opened 2026-10-14 at the user's direction, from a survey of the `uwo-fast` organisation. It is the corpus's first record of the distributed-recycling-and-additive-manufacturing pattern as such — a peripheral-agrifood line (on-farm plastic waste, repair, small-part fabrication) whose agrifood relevance is indirect, which is why it is held at `candidate`. Not a scan (no G-ID). Verified 2026-10-14.

## Problem addressed

Farm repair and small-part fabrication depend on buying spares; plastic waste (baling wrap, containers, irrigation fittings) has no on-site use. Distributed recycling and additive manufacturing (DRAM) — grinding waste plastic, extruding or pressing it into feedstock, and printing or pressing parts locally — substitutes local manufacture for purchased parts, and turns a waste stream into feedstock. The FAST group builds the machine chain (recyclebot, pellet extruder, sheet press, hoppers, parametric part libraries) that makes this possible.

## Open layer

Open design and firmware for the DRAM toolchain: a plastic-waste sheet press, a parametric feedstock hopper for pellet/regrind extruders, pellet-extruder printer firmware, a parametric pipe-fitting generator, and a RepRap printer. Openness is **mixed** — some repositories are `GPL-3.0`, and two of the most agrifood-relevant (the sheet press and the printer) carry **no licence at all** as published.

## What is actually open

Verified from the repositories and GitHub API (2026-10-14):

- **`desktop-sheet-press`** — an open-source cold/hot scientific sheet press that converts plastic waste into flat recycled-plastic sheets, inspired by Precious Plastics; design assets for the *HardwareX* 2024 paper "Open-source cold and hot scientific sheet press for investigating polymer-based material properties" (https://doi.org/10.1016/j.ohx.2024.e00566). **No licence file detected** (GitHub API reports no licence) — unlicensed as published, despite the paper. Last pushed 2026-07-04.
- **`feedstock-hopper`** — **`GPL-3.0`** (verified via GitHub API). A parametric, printable bulk hopper for pellets and shredded regrind with quick-release couplings; the repository states it is **printed and in service in the lab**, feeding a GreenBoy3D pellet extruder on a Prusa MK3S. Geometry is regression-tested in CI.
- **`Prusa-Firmware-GB3DPE`** — **`GPL-3.0`**. A fork of `prusa3d/Prusa-Firmware` for the greenboy3d pellet-extruder variant (the machine that consumes the hopper's feedstock).
- **`pipe-fitting-SCAD`** — **`GPL-3.0`**. An OpenSCAD generator for parametric pipe fittings (gaskets, threaded nuts) following industry thread standards, built on the `threadlib` library; carries an explicit use-at-your-own-risk disclaimer and pressure-test documentation gaps.
- **`hangprinter-v4`** — an open-source RepRap 3-D printer (minimalist cable-driven design). **No licence file detected** — unlicensed as published.
- Adjacent shared resources: `most-scad-libraries` (`GPL-3.0`) carries the OpenSCAD libraries across the group's DRAM designs.

## Governance and control

Academic research-group governance (FAST / Western University); the DRAM programme (RepRap-derived printing, pellet extrusion, distributed recycling) is named as a core FAST area. Where licences exist they are reciprocal (`GPL-3.0`); where hardware design files are present the group's two-track policy would apply `CERN-OHL-S-2.0` — but the sheet press and the printer do not carry the policy through, leaving them unlicensed as published.

## Evidence of use

Mostly in-lab. The `feedstock-hopper` is stated as printed and in service in the lab; the sheet press is published with a peer-reviewed *HardwareX* paper; the others are design-stage or maintenance-light. **No farm-level adoption of any DRAM design was located**, and the agrifood connection (on-farm plastic recycling, repair fabrication) is a plausible use the corpus has not evidenced — the reason the record is `candidate`, not `curated`.

## Maintenance and funding

Academic research group (Thompson Endowment, NSERC, SSHRC as for the wider FAST programme). Activity uneven: `feedstock-hopper` pushed 2026-09-25, most others 2026-07-04; two repositories unlicensed.

## Why it belongs

1. **It is the corpus's first instance of the distributed-manufacturing openness pattern** — the toolchain that turns local plastic waste into local parts — which sits behind the farm-repair and packaging questions (adjacent to the upcycling concept's packaging research and to appinated-technology design commons). Held at `candidate` because that agrifood relevance is prospective, not evidenced.
2. **It shows openness unrecorded.** A peer-reviewed sheet-press design and a printer released with no licence file are a concrete case of the corpus's rule that openness must be recorded per asset: the paper being open does not make the design files open.

## What it does not demonstrate

- Any farm, field, or agrifood deployment of the DRAM toolchain; the evidence is laboratory-scale.
- That the sheet press or the printer can be lawfully reused or built — as published they carry no grant of rights; the peer-reviewed paper does not license the design files.
- That distributed plastic recycling is economically or practically viable on a farm; the corpus records no cost or throughput comparison for this at farm scale.

## Sources and verification

- `uwo-fast/desktop-sheet-press` (no licence detected; README read in full): https://github.com/uwo-fast/desktop-sheet-press
- *HardwareX* 2024 sheet-press paper: https://doi.org/10.1016/j.ohx.2024.e00566
- `uwo-fast/feedstock-hopper` (`GPL-3.0`; README read in full): https://github.com/uwo-fast/feedstock-hopper
- `uwo-fast/Prusa-Firmware-GB3DPE` (`GPL-3.0`, fork of prusa3d/Prusa-Firmware): https://github.com/uwo-fast/Prusa-Firmware-GB3DPE
- `uwo-fast/pipe-fitting-SCAD` (`GPL-3.0`; README read in full): https://github.com/uwo-fast/pipe-fitting-SCAD
- `uwo-fast/hangprinter-v4` (no licence detected): https://github.com/uwo-fast/hangprinter-v4
- GitHub repository metadata (licences and push dates) via GitHub API, 2026-10-14
- Last checked: 2026-10-14

Not legal advice.
