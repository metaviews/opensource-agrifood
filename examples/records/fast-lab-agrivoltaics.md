# Western University FAST Lab / WIRED open-source agrivoltaics hardware

- Status: `curated`
- Region / reach: London, Ontario, Canada (Western University); design commons published globally via Appropedia and Open Science Framework (OSF)
- Project: https://www.appropedia.org/Western_Innovation_for_Renewable_Energy_Deployment_(WIRED)
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cell 2); directly updates G-OSA-13 (first OSHWA-certified agricultural hardware in Canada located) and G-OSA-14 (certified open design vs unbuilt/unreplicated field status); verified 2026-10-14

## Problem addressed

Commercial solar photovoltaic (PV) racking is engineered for utility-scale steel ground mounts rather than active farm operations, and proprietary agrivoltaic tracking/mounting systems carry high capital premiums that raise levelized cost of electricity (LCOE) for farmers. Western University's Free Appropriate Sustainability Technology (FAST) Research Group (led by Dr. Joshua M. Pearce) designs parametric, wood-based, and cold-frame agrivoltaic racking and thermal energy storage modules engineered to Canadian wind and snow loads that farmers can build with domestic lumber and hand tools.

## Open layer

Formally licensed and OSHWA-certified open hardware, parametric CAD (FreeCAD/OpenSCAD), BOMs, structural calculations, and peer-reviewed build documentation. This is the single densest concentration of formally certified open-source hardware in Canadian agriculture, resolving the G-OSA-13 finding that no located agrifood hardware held OSHWA certification or used the CERN Open Hardware Licence.

## What is actually open

Verified per asset on the OSHWA Certification Directory, OSF repositories, and Appropedia (2026-10-14):

- **OSHWA UID `CA000008` — Parametric Open-Source Cold-Frame Agrivoltaic Systems (POSCAS)** (certified 2021-11-12): Hardware **CERN-OHL-P-2.0** (permissive); Documentation **CC BY 4.0**; OSF repository (`https://osf.io/k6xwv/`); peer-reviewed in *Inventions* 6(4), 2021. Integrates an elevated solar array with a cold-frame greenhouse structure to extend cold-climate growing seasons while generating power.
- **OSHWA UID `CA000025` — Open-Source Vertical Swinging Wood-Based Solar Photovoltaic Racking Systems** (Vandewetering, Hayibo & Pearce, certified 2023-03-03): Hardware **CERN-OHL-S-2.0** (strongly reciprocal); Software **CERN-OHL-S-2.0**; Documentation **CERN-OHL-S-2.0** (Appropedia page `CC-BY-SA-4.0`); OSF repository (`https://osf.io/qd4ca/`); peer-reviewed in *Designs* 7(2), 34, 2023. Uses locally sourced pressure-treated wood and a swinging hinge mechanism to relieve high wind loads under the National Building Code of Canada; capital cost modelled at 22% below commercial metal vertical racking and LCOE at 77% of conventional racking.
- **OSHWA UID `CA000071` — Open-Source Customizable Thermal Energy Storage Module** (certified 2026-01-15): Hardware, Software, and Documentation **GPL-3.0-only**; OSF repository (`https://osf.io/rucqy/`).
- **Adjacent WIRED racking & sensing designs**: wood-based fixed-tilt, variable-tilt, trellis, cable/stilt, and fence-mounted agrivoltaic designs on Appropedia (`CC-BY-SA-4.0`), plus open-source multi-channel spectral/PAR sensors (`uwo-fast` on GitHub; *HardwareX* 2026).

## Governance and control

Academic research group governance (Thompson Chair in Information Technology and Innovation at Western University). Because designs are released under `CERN-OHL-S-2.0` / `CERN-OHL-P-2.0` and hosted on OSF and Appropedia with full parametric CAD files, any farmer, cooperative, or fabricator can inspect, modify, and build the structures without vendor permission or royalty.

## Evidence of use

Here the G-OSA-14 distinction between *published/certified design* and *independent farm replication* is sharp and explicitly documented by the project itself:

- On Appropedia's project metadata table for `CA000025` (vertical swinging wood-based rack), the status is recorded verbatim as **`Status: Designed, Modelled | Verified by: FAST | Made: No | Replicated: No`** (verified 2026-10-14).
- On Appropedia's table for `CA000008` (POSCAS cold-frame agrivoltaic system), the status is recorded as **`Status: Prototype | Made: Yes | Replicated: No`**.
- Physical outdoor deployment is consolidating at Western University's 1-hectare **Western Innovation for Renewable Energy Deployment (WIRED)** field station outside London, Ontario (testing elevated arrays over strawberries, apples, grains, tubers, and vegetables alongside bifacial modules), rather than across independent commercial farms.

## Maintenance and funding

Publicly and academically funded through the Thompson Endowment at Western University, NSERC, and SSHRC. Documentation is actively maintained on Appropedia (WIRED page updated through 2026) and archived permanently on OSF.

## Why it belongs

FAST Lab / WIRED is the anchor hardware record for the C4 energy cell and a major update to G-OSA-13 and G-OSA-14:

1. **It proves OSHWA certification and CERN-OHL-S-2.0 work for agricultural structural hardware** — using domestic wood and parametric CAD to bypass proprietary steel racking.
2. **It exposes the regulatory and grid bottleneck behind G-OSA-14**: Canada's leading open-source agrivoltaics hardware group sits in Ontario, where the provincial government's August 2024 direction for the IESO Long-Term 2 (LT2) procurement **banned non-rooftop solar in prime agricultural areas and all projects in specialty crop areas** without a dual-use agrivoltaics carve-out. The open hardware exists before the provincial land-use and grid-interconnection rules allow farmers to deploy it at commercial scale.

## What it does not demonstrate

- Independent farmer replication in commercial production (`CA000025` is modelled/unbuilt; `CA000008` is a university prototype with no documented external replication).
- That open structural racking solves utility interconnection, transformer capacity limits, or provincial prime-agricultural-land solar prohibitions.

## Sources and verification

- OSHWA Certification `CA000008` (POSCAS, certified 2021-11-12): https://certification.oshwa.org/ca000008.html
- OSHWA Certification `CA000025` (Vertical Swinging Wood-Based PV Racking, certified 2023-03-03): https://certification.oshwa.org/ca000025.html
- OSHWA Certification `CA000071` (Customizable Thermal Energy Storage Module, certified 2026-01-15): https://certification.oshwa.org/ca000071.html
- Appropedia — Open-Source Vertical Swinging Wood-Based Solar PV Racking Systems: https://www.appropedia.org/Open-Source_Vertical_Swinging_Wood-Based_Solar_Photovoltaic_Racking_Systems
- Appropedia — Parametric Open Source Cold-Frame Agrivoltaic Systems: https://www.appropedia.org/Parametric_Open_Source_Cold-Frame_Agrivoltaic_Systems
- Appropedia — WIRED outdoor testing facility: https://www.appropedia.org/Western_Innovation_for_Renewable_Energy_Deployment_(WIRED)
- OSF repository (`CA000025` CAD & engineering sheets): https://osf.io/qd4ca/
- Last checked: 2026-10-14

Not legal advice.
