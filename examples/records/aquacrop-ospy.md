# AquaCrop-OSPy

- Status: `curated`
- Region / reach: International / academic, research, and agricultural water management institutions (developed at University of Manchester in collaboration with FAO, Water for Food Global Institute, and UN FAO)
- Project: https://github.com/aquacropos/aquacrop
- Live docs: https://aquacropos.github.io/aquacrop/
- Field-guide context: addresses the physiological crop-water modeling and irrigation optimization layer — open-source scientific engine for simulating crop response to water availability and irrigation schedules
- Last checked: 2026-08-14

## Problem addressed

Simulating crop growth, yield response, and soil-water balance under water-deficit conditions is essential for climate-resilient water planning, irrigation scheduling, and food security forecasting. Proprietary agricultural modeling suites and closed commercial decision-support tools hide algorithmic assumptions and cannot be integrated programmatically into modern Python data science pipelines or open farm management systems.

## Open layer

Full software source code is open source under the Apache-2.0 license. AquaCrop-OSPy implements the UN FAO AquaCrop multi-crop growth and soil-water model in native Python (vectorized with NumPy and Numba for high-performance batch and regional simulations).

## What is actually open

- Code: Apache-2.0, repository `aquacropos/aquacrop`, 164 stars (checked 2026-08-14), actively maintained by the Agriculture, Water and Climate research group at the University of Manchester.
- Documentation: Complete API documentation, quickstart guides, Jupyter notebook tutorials, and reference documentation hosted openly on GitHub Pages.
- Crop and Soil Parameter Databases: Standard crop parameter files (maize, wheat, rice, potato, etc.) and soil hydrodynamic properties published with the repository.

## Governance and control

Open academic/institutional governance led by Dr. Tim Foster and researchers at the University of Manchester, maintaining alignment with the UN Food and Agriculture Organization (FAO) AquaCrop core methodology. Distributed under permissive Apache-2.0, permitting broad commercial, NGO, and public integration.

## Evidence of use

- Published in peer-reviewed literature: Foster et al. (2021), "AquaCrop-OSPy: Bridging the gap between agricultural water management and data science," *Agricultural Water Management*, DOI: 10.1016/j.agwat.2021.107058.
- Used globally for climate impact assessments, irrigation benchmarking, farm-level water policy design, and integration with reinforcement learning/AI for dynamic irrigation optimization.
- Distributed standardly via PyPI (`pip install aquacrop`).

## Maintenance and funding

Funded via university research grants, UKRI / global research consortia, and institutional support in collaboration with FAO Land and Water Division and the Daugherty Water for Food Global Institute.

## Why it belongs

AquaCrop-OSPy represents the scientific intelligence layer of open-source agrifood water management. Where OpenSprinkler controls the physical valves, AquaCrop-OSPy provides the open crop-water physics, yield-response calculations, and irrigation optimization models under an Apache-2.0 license.

## What it does not demonstrate

AquaCrop-OSPy is a simulation and modeling engine; it does not directly actuate physical hardware or include edge device drivers for field solenoids (though its output can feed irrigation scheduling controllers like OpenSprinkler or farmOS).

## Sources and verification

- Repository & licence: https://github.com/aquacropos/aquacrop (Apache-2.0; verified 2026-08-14)
- Project website & documentation: https://aquacropos.github.io/aquacrop/
- Foster et al. (2021), *Agricultural Water Management*, DOI: 10.1016/j.agwat.2021.107058
- Verification pass: research/2026-08-water-irrigation-automation-scan.md
- Last checked: 2026-08-14

Not legal advice.
