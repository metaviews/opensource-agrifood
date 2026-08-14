# Environmental Scan: Open-Science Field Spectroscopy, Soil Diagnostics, and Quality Testing (G-OSA-30)

- Date: 2026-08-14
- Method: Bounded pass across open-source scientific hardware, optical spectrometers, soil carbon estimation tools, and open digital microscopes. Evaluated peer-reviewed field validation studies, repository licensing on GitLab/GitHub (GPL-3.0, CERN-OHL), and open calibration datasets.
- Focus: G-OSA-30 (Open-Science Field Spectroscopy & Biological Soil Diagnostics layer).

## Why this cell matters

Nutrient density verification, soil organic carbon (SOC) monitoring, and biological soil health assessment (fungal/bacterial balance, nematode counting, foliar pathogen screening) are the scientific foundation of agroecology and regenerative agriculture. However, agricultural diagnostics have been severely gatekept by expensive commercial benchtop spectrometers ($10k–$50k) and closed corporate diagnostic platforms that lock predictive calibration algorithms behind proprietary SaaS paywalls.

## Headline Finding

**Open-science hardware has successfully engineered sub-$400, field-grade alternatives to proprietary diagnostic instruments. The open diagnostic layer is anchored by: (1) calibrated multi-wavelength handheld optical reflectometers (`Our Sci Reflectometer / Bionutrient Meter`: GPL-3.0, peer-reviewed ±0.3% SOC field accuracy in grazing lands) and (2) 3D-printed robotic digital microscopes (`OpenFlexure Microscope`: CERN-OHL-S-2.0, sub-micron precision for soil biology and plant pathology, manufactured locally across Africa and Latin America).**

## Working Matrix: Open Agrifood Diagnostics & Measurement

| Layer | Open Implementations | Status & License | Key Performance / Accuracy | Commercial Closed Benchmarks |
|---|---|---|---|---|
| **Field Optical Spectroscopy** | Our Sci Reflectometer / PhotosynQ | Curated (GPL-3.0 / AGPL-3.0) | 10-wavelength discrete LED reflectance; ±0.3% SOC estimation; open calibration data | ASD FieldSpec ($30k+), SCiO ($500+ cloud-locked SaaS) |
| **Biological Microscopy** | OpenFlexure Microscope | Curated (CERN-OHL-S-2.0 / GPL-3.0) | Sub-micron translation stage; 100x oil immersion; Raspberry Pi HQ camera | Olympus/Zeiss lab microscopes ($3k–$10k) |
| **Soil Gas Respiration** | Open manual respiration chambers | Candidate / Academic (Open Hardware) | Low-cost CO2 flux measurement for soil biological activity | LI-COR LI-8100A soil gas analyzer ($25k+) |
| **Survey & Calibration Data** | SurveyStack / Bionutrient Institute Data | Curated (GPL-3.0 / Open Access) | Transparent crowd-sourced calibration datasets for crop phytochemicals | Closed proprietary calibration algorithms |

## Cases Added

| Record | Status | Open Layer | Key Finding |
|---|---|---|---|
| `our-sci-reflectometer.md` | `curated` | Hardware & Software (GPL-3.0) | Handheld open-hardware reflectometer providing peer-reviewed soil organic carbon and crop nutrient density estimation. |
| `openflexure-microscope.md` | `curated` | Hardware (CERN-OHL) & Software (GPL-3.0) | 3D-printed robotic microscope providing decentralized biological soil health and pathogen diagnostics under $250. |

## Contested Claims & Key Takeaways

1. **The Open Calibration Commons**: Proprietary field spectroscopy tools fail in diverse agroecosystems because their closed calibration models cannot be inspected or locally tuned. Our Sci proves that opening both the hardware schematics and the underlying machine learning training datasets (`our-sci/bionutrient-institute/dataset`) creates a participatory calibration commons.
2. **Distributed Local Manufacturing in the Global South**: OpenFlexure demonstrates that open hardware licensed under CERN-OHL enables sustainable local manufacturing enterprises (e.g. Bongo Tech in Tanzania, REGOSH in Latin America), eliminating import tariffs and supply chain lock-in for critical agricultural diagnostics.

## Honest Omissions & Gaps

1. Open-source field DNA sequencers / on-farm PCR molecular diagnostics remain early-stage and cost-prohibitive compared to optical and microscopic methods.
2. Direct integration between open handheld spectrometers and open farm management software (`farmOS`) field polygons requires further automated ingestion pipelines.

## Sources and Verification

- Our Sci GitLab: `https://gitlab.com/our-sci` (GPL-3.0; verified 2026-08-14)
- OpenFlexure Project: `https://openflexure.org` / `https://gitlab.com/openflexure/openflexure-microscope` (CERN-OHL-S-2.0; verified 2026-08-14)
- Goodwin et al. (2022), *Soil Systems*, DOI: 10.3390/soilsystems6020038
- Sharkey et al. (2020), *Biomedical Optics Express*, DOI: 10.1364/BOE.395723

Not legal advice.
