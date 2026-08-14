# Environmental Scan: Open Water, Irrigation Management, and Hydrological Modeling in Agrifood (G-OSA-25)

- Date: 2026-08-14
- Method: Bounded pass across open-source irrigation automation, firmware, open hardware schemas, and crop-water simulation models. Checked repositories via GitHub API for SPDX licensing, commit activity, and deployment references.
- Focus: G-OSA-25 (Water, Irrigation & Hydrological Modeling layer).

## Why this cell matters

Water scarcity, drought resilience, and precision irrigation are central to global food security and climate adaptation. Commercial smart irrigation and precision water management are increasingly gated behind closed proprietary controllers (Hunter, Rain Bird, Rachio) and subscription cloud telemetry. This scan investigates the status, licensing formality, and operational durability of open-source irrigation hardware, firmware, and scientific crop-water models.

## Headline Finding

**The open layer in agricultural water management splits cleanly into two high-durability anchors: (1) robust open-hardware/copyleft valve controllers (OpenSprinkler: CERN-OHL-S-2.0 / GPL-3.0) and (2) open scientific crop-water physiological simulation engines (AquaCrop-OSPy: Apache-2.0). However, the intermediate farm-scale LoRaWAN field telemetry and soil moisture probe market remains dominated by informal maker designs lacking formal OSHWA certification.**

## Working Matrix: Open Water & Irrigation Layers

| Layer | Open Implementations | Dominant License | Production Deployment Status | Commercial Counterparts |
|---|---|---|---|---|
| **Valve Actuation & Scheduling** | OpenSprinkler (Firmware + Hardware) | GPL-3.0 / CERN-OHL-S-2.0 | High (Global smallholder, horticulture, landscape) | Hunter Hydrawise, Rain Bird, Rachio |
| **Crop-Water Modeling** | AquaCrop-OSPy, pyCropWat | Apache-2.0 / MIT | High (Academic, FAO policy, research AI) | Closed DSS suites (CropX, FieldView) |
| **Soil & Hydrology Telemetry** | Open ESP32/LoRaWAN sensor nodes | Mixed (MIT / Informal / None) | Medium (Maker, research plots, DIY farms) | Sentek, Decagon/METER Group, Davis |
| **Evapotranspiration (ET) Data** | OpenET (Data access layer) | Open Access / CC-BY | High (US Western Water Basin, Irrigation districts) | Proprietary satellite imagery layers |

## Cases Added

| Record | Status | Open Layer | Key Finding |
|---|---|---|---|
| `opensprinkler.md` | `curated` | Hardware (CERN-OHL-S-2.0), Firmware (GPL-3.0) | Benchmark for sustainable commercial open-hardware irrigation; local control without cloud lock-in. |
| `aquacrop-ospy.md` | `curated` | Simulation Engine (Apache-2.0) | High-performance Python implementation of UN FAO AquaCrop; standard for open water-productivity modeling. |

## Contested Claims & Findings

1. **Local Autonomy vs. Cloud Dependency**: OpenSprinkler proves that sophisticated weather-adjusted irrigation automation does not require a mandatory cloud subscription or proprietary vendor servers; local REST and MQTT APIs ensure long-term durability.
2. **Scientific Transparency in Water Models**: AquaCrop-OSPy demonstrates that open-source scientific code accelerates reproducible agrifood research, allowing direct programmatic integration into data science and reinforcement-learning pipelines.

## Honest Omissions & Gaps

1. Broad-acre canal automation and center-pivot telemetry remain dominated by closed SCADA systems; no verified open-source large-scale pivot control stack was identified.
2. Field soil moisture capacitance/TDR probes often publish informal schematics but lack formal OSHWA open-hardware certification.

## Sources and Verification

- OpenSprinkler Firmware: `https://github.com/OpenSprinkler/OpenSprinkler-Firmware` (GPL-3.0; verified 2026-08-14)
- OpenSprinkler Hardware: `https://github.com/OpenSprinkler/OpenSprinkler-Hardware` (CERN-OHL-S-2.0; verified 2026-08-14)
- AquaCrop-OSPy: `https://github.com/aquacropos/aquacrop` (Apache-2.0; verified 2026-08-14)
- Foster et al. (2021), *Agricultural Water Management*, DOI: 10.1016/j.agwat.2021.107058

Not legal advice.
