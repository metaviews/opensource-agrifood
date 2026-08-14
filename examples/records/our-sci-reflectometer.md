# Our Sci Reflectometer & Bionutrient Meter

- Status: `curated`
- Region / reach: United States (Ann Arbor, MI / Bionutrient Institute) / international agroecology, soil health, and regenerative crop research networks
- Project: https://our-sci.net / https://gitlab.com/our-sci
- Live docs: https://our-sci.gitlab.io/manufacturing/reflectometer-tutorials/ / https://www.bionutrientinstitute.org
- Field-guide context: addresses the open-science field spectroscopy, soil carbon estimation, and food nutrient density measurement layer — open-source handheld optical spectrometer
- Last checked: 2026-08-14

## Problem addressed

Measuring soil organic carbon (SOC), leaf chlorophyll, and antioxidant/phytochemical density in food crops traditionally requires expensive benchtop laboratory spectrometers ($10,000–$50,000) or destructive chemical assays. Commercial agricultural field sensors are often closed-source, proprietary SaaS black boxes that lock sensor calibrations and raw spectral data behind paywalls, preventing independent validation by farmers and researchers.

## Open layer

Comprehensive open-hardware and open-source software stack:
- Hardware: GPL-3.0 (10-wavelength LED calibrated reflectometer, 3D printed housing, photodiode optics).
- Firmware & Software: GPL-3.0 / AGPL-3.0 across GitLab repositories (`our-sci/manufacturing/reflectance-spec-firmware`, `our-sci/software`).
- Data & Calibration: Open-access datasets and calibration models hosted openly on GitLab (`our-sci/bionutrient-institute/dataset`).

## What is actually open

- Hardware: Schematics, KiCad PCB files, bill of materials (BOM), and 3D STL print files licensed under GPL-3.0 on GitLab.
- Firmware: Open C++/Arduino firmware for calibrated optical capture across discrete spectral bands (365nm to 940nm).
- Software & Analysis: Open-source survey and data collection tools (SurveyStack / Open-Source Community participation in USDA NIFA National Ag Producer Data Cooperative).
- Calibration Models: Open predictive machine learning models estimating soil carbon percentage and crop polyphenols/antioxidants.

## Governance and control

Developed collaboratively by Our Sci LLC (Greg Austic and team, originators of PhotosynQ / MultispeQ) and the Bionutrient Food Association / Bionutrient Institute. Governance is open-science and community-driven, prioritizing farmer and citizen-science data sovereignty.

## Evidence of use

- Peer-reviewed academic validation:
  - Goodwin et al. (2022), "Can Low-Cost, Handheld Spectroscopy Tools Coupled with Remote Sensing Accurately Estimate Soil Organic Carbon in Semi-Arid Grazing Lands," *Soil Systems*, DOI: 10.3390/soilsystems6020038 (Our Sci Reflectometer estimated SOC with ±0.3% precision in field grazing trials).
  - Bionutrient Institute validation studies (2024), "Validation of low-cost reflectometer to identify phytochemical accumulation in food crops," *Scientific Reports*.
- Deployed across hundreds of regenerative farms, research trials, and citizen-science soil health sampling campaigns across North America and Europe.

## Maintenance and funding

Funded via open-science hardware grants, USDA NIFA cooperative research agreements, philanthropic foundation funding, and hardware kit sales by Our Sci and Bionutrient Institute.

## Why it belongs

The Our Sci Reflectometer is the benchmark for open-source agricultural spectroscopy. It demonstrates that field-grade soil carbon and phytochemical measurement can be democratized down to sub-$400 open-hardware BOMs under GPL-3.0, backed by open calibration algorithms and peer-reviewed scientific literature.

## What it does not demonstrate

The handheld reflectometer provides *statistical estimation* based on discrete LED reflectance bands rather than full continuous-spectrum laboratory spectroscopy; extreme soil moisture or high-sand soils require regional recalibration.

## Sources and verification

- Our Sci GitLab Organization: https://gitlab.com/our-sci (GPL-3.0; verified 2026-08-14)
- Bionutrient Institute: https://www.bionutrientinstitute.org (verified 2026-08-14)
- Goodwin et al. (2022), *Soil Systems*, DOI: 10.3390/soilsystems6020038
- Verification pass: research/2026-08-field-spectroscopy-soil-diagnostics-scan.md
- Last checked: 2026-08-14

Not legal advice.
