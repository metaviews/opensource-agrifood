# OpenFlexure Microscope (Agrifood Soil & Pathology)

- Status: `curated`
- Region / reach: International (UK, Tanzania, Panama, Latin America / Gathering for Open Science Hardware - GOSH & REGOSH network)
- Project: https://openflexure.org / https://gitlab.com/openflexure/openflexure-microscope
- Live docs: https://openflexure.org/docs/
- Field-guide context: addresses the open-source laboratory diagnostics, soil microbiology, plant pathology, and parasite screening layer — 3D-printed laboratory-grade robotic digital microscope
- Last checked: 2026-08-14

## Problem addressed

Assessing biological soil health (nematodes, mycorrhizae, fungal-to-bacterial ratios) and screening for plant pathogens (spores, foliar blights, waterborne contaminants) requires laboratory-grade microscopy with precision sample positioning. Commercial biological research microscopes cost $2,000–$10,000+, are fragile to transport into remote farm settings, and rely on proprietary imaging software that cannot be locally serviced in the Global South.

## Open layer

Fully certified open-source hardware under the CERN Open Hardware Licence (CERN-OHL) and open software under GPL-3.0:
- Hardware: 3D printed monolithic flexure stage providing sub-micron mechanical positioning without friction or backlash.
- Optics & Camera: Uses standard Raspberry Pi Camera Module v2 / HQ camera paired with inverted lens or finite conjugate microscope objectives.
- Control & Automation: Automated focus and slide scanning via Python API and Raspberry Pi SBC.

## What is actually open

- Hardware: CERN-OHL-S-2.0, repository `openflexure/openflexure-microscope` on GitLab. Complete OpenSCAD source code, STL 3D models, and mechanical assembly instructions.
- Software & Firmware: GPL-3.0, Web-based user interface, automated tiling algorithms, and Python camera control server.
- Documentation: Interactive step-by-step assembly guides, calibration protocols, and maintenance instructions.

## Governance and control

Developed by the OpenFlexure community, initiated at the University of Bath (Dr. Richard Bowman) and Cambridge University, in partnership with Bongo Tech & Research Labs (Tanzania) and the Gathering for Open Science Hardware (GOSH). Governed as an international open-hardware cooperative project.

## Evidence of use

- Distributed and manufactured locally across clinics, university labs, and agroecology field stations in the UK, Tanzania, Ghana, Argentina (Open Agroecology Lab / REGOSH), and Panama.
- Peer-reviewed deployment: Sharkey et al. (2020), "A one-piece 3D printed flexure translation stage for open-source microscopy," *Biomedical Optics Express*, DOI: 10.1364/BOE.395723; Arancio et al. (2023), "Insights from open science hardware projects in Latin America," *Environmental Science & Policy*.
- Deployed for soil nematode analysis, water quality coliform testing, and crop disease spore identification.

## Maintenance and funding

Funded by UKRI, Wellcome Trust, Royal Society, and international open science foundations. Distributed manufacturing kits produced by local social enterprises (e.g., STICLab / Bongo Tech in Tanzania, WaterScope).

## Why it belongs

OpenFlexure represents the pinnacle of open-hardware scientific instrumentation. It demonstrates that sub-micron biological imaging can be built for under $250 using local 3D printing and commodity electronics under CERN-OHL, providing grassroots agroecology researchers and smallholders with decentralized soil biology and plant pathology diagnostics.

## What it does not demonstrate

While capable of 100x oil-immersion biological microscopy, it requires local 3D printing access and basic mechanical assembly skills; it does not replace multi-thousand-dollar automated flow cytometers or DNA sequencing suites.

## Sources and verification

- OpenFlexure GitLab: https://gitlab.com/openflexure/openflexure-microscope (CERN-OHL-S-2.0 / GPL-3.0; verified 2026-08-14)
- Project Website: https://openflexure.org (verified 2026-08-14)
- Sharkey et al. (2020), *Biomedical Optics Express*, DOI: 10.1364/BOE.395723
- Verification pass: research/2026-08-field-spectroscopy-soil-diagnostics-scan.md
- Last checked: 2026-08-14

Not legal advice.
