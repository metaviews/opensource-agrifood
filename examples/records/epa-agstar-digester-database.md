# US EPA AgSTAR Livestock Anaerobic Digester Database & PyADM1 simulation layer

- Status: `curated`
- Region / reach: United States (US EPA AgSTAR, national facility census) and international (IWA ADM1 Python open-science simulation ecosystem); contrasted directly with Canada's closed industry survey record
- Project: https://www.epa.gov/agstar/livestock-anaerobic-digester-database · https://github.com/CaptainFerMag/PyADM1 · https://github.com/dgaida/PyADM1ODE · https://github.com/QSD-Group/QSDsan
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cells 1 and 5); verified 2026-10-14

## Problem addressed

Farm-scale anaerobic digestion (AD) converts livestock manure and agricultural food waste into biogas (for CHP electricity/heat or pipeline renewable natural gas, RNG) and digestate fertilizer. Yet farm digesters are capital-intensive biological reactors prone to severe operational failures (H₂S engine corrosion, crusting/mixing failure, volatile fatty acid souring, vendor bankruptcy, and utility interconnection/buyback squeezes). Farmers and researchers need both (1) transparent, facility-level operating and failure records and (2) open-source biochemical simulation engines to model feedstock mixes without relying on vendor sales projections.

## Open layer

A **US federal public-domain facility-level database** (`.xlsx` download recording both active and shut-down farm digesters with itemised failure reasons) paired with an **open-source Python biochemical simulation stack (`MIT` / `NCSA`)** implementing the International Water Association's Anaerobic Digestion Model No. 1 (ADM1) — contrasted with **complete absence of open farm-scale digester hardware/control software** and **closed, failure-purged reporting in Canada**.

## What is actually open

Verified by downloading and inspecting `agstar-livestock-ad-database.xlsx` from `epa.gov` and checking GitHub API / `LICENSE` files (2026-10-14):

- **US EPA AgSTAR Livestock Anaerobic Digester Database** (`https://www.epa.gov/agstar/livestock-anaerobic-digester-database`, page updated 2026-07-10; data current through June 2024; US government public domain):
  - **Sheet 1 (`Operational and Construction`)**: **473 facility rows** (**400 Operational**, **73 Construction**), publishing project name, cluster, city, county, state, digester type, year operational, animal/feedstock type and head count, co-digestion feedstocks, biogas generation estimate, electricity generated (kWh/yr), biogas end use (CHP, CNG, pipeline RNG, boiler, flare), receiving utility, developer, owner, and emission reductions.
  - **Sheet 2 (`Shutdown`)**: **333 shut-down farm digester rows** (1972–2023), publishing operational years and a free-text `Additional Information` column that documents why each farm digester shut down (e.g., *Keewaydin Farm*, VT: "Faulty mixing design (prototype digester); lack of company support (company defunct)"; *Riverview Farm*, VT: "Engine corrosion from lack of H2S control. Lack of support from genset provider (2G Energy) and digester company"; *Double S Dairy*, WI: "The digester was too small and the utility interconnect fee too high (and rates too low) for project expansion"; *Swine USA / Bell Farms*, IA: "The current owners do not have the technical knowledge to run the digester"; *Linkenmeyer Family Feeders*, IA: "System bought by Big Ox Energy, feedstock switched to industrial waste").
- **Open-science ADM1 Python simulation ecosystem**:
  - `CaptainFerMag/PyADM1` (Sadrimajd et al., *BioRxiv* 2021): **MIT License** (verified via GitHub API, 55 stars, 27 forks), Python implementation of IWA ADM1 ring-tested against Benchmark Simulation Model No. 2 (BSM2) for agricultural manure/silage digestion.
  - `dgaida/PyADM1ODE` (TH Köln): **MIT License** (verified via GitHub API, 5 stars, pushed 2026-09-09), component-based Python simulator modelling full agricultural biogas plants (fermenters, substrate pumps, agitators, CHP gensets, heating, gas storage) in C#/Python.
  - `QSD-Group/QSDsan` (Quantitative Sustainable Design for Sanitation and Resource Recovery, UIUC): **University of Illinois/NCSA Open Source License** (verified from `LICENSE.txt`, 48 stars, 31 forks, pushed 2026-10-12), coupling ADM1 anaerobic digestion with techno-economic analysis (TEA) and life-cycle assessment (LCA).

## The Canadian contrast: closed survey data and purged failure records

Verified in the Canadian Biogas Association's NRCan-funded *2026 Canadian Biogas & RNG Market Report* (published 2026-04-30, covering the 2024 operational year):

- Canada has **292 total operational biogas/RNG facilities** (32.3 PJ/yr), of which **only 43 are operational agricultural AD facilities** (31 in ON, 3 in BC, 3 in QC, 3 in NS, 1 in AB, 1 in NB, 1 in NL; 0 in SK, MB, PE), processing >1,170,000 wet tonnes/yr — out of ~75,000 Canadian farms with livestock (CANZA/Énergir 2025 brief).
- Unlike EPA AgSTAR, Canada has **no public facility-level database of agricultural digesters** (Appendix A gives only provincial counts; Appendix B lists 30 dedicated RNG plants across all sectors).
- Crucially, **Footnote 8 of the 2026 CBA report states verbatim**: *"Based on 2024 operational data. The updated database removed smaller, pilot-scale facilities that are no longer operational."* Where the US public-domain database preserves 333 shut-down farm digesters and their failure causes as a public learning commons, Canada's industry-held database silently deletes failed small/pilot facilities.

## Why it belongs

1. **It provides the empirical mortality record of farm-scale biological byproduct infrastructure**: the 333 shut-down rows in EPA AgSTAR prove that vendor bankruptcy, unserviceable proprietary gensets/mixers, operator knowledge lock-in, and utility interconnection fees are the primary killers of farm digesters — the exact failure modes the open-hardware/right-to-repair movement diagnoses in field machinery (`G-OSA-16`).
2. **It extends the US-vs-Canada public-data asymmetry (`G-OSA-35`) into farm energy**: US federal public-domain facility + failure data (`AgSTAR`) vs Canadian industry-gated aggregate PDFs (`CBA`) with purged failure histories.
3. **It shows where the open software layer sits in biogas**: open in academic differential-equation simulators (`PyADM1`, `PyADM1ODE`, `QSDsan`), absent in deployed on-farm digester PLC/SCADA control.

## What it does not demonstrate

- That open-source digester hardware or open PLC control software exists at farm scale (it does not; the record pairs public operational/failure data with academic process simulators).
- Independent verification of every failure reason in AgSTAR's `Shutdown` tab (entries are self-reported by operators, state agencies, and AgSTAR staff).

## Sources and verification

- US EPA AgSTAR Livestock Anaerobic Digester Database (page updated 2026-07-10) & `.xlsx` download: https://www.epa.gov/agstar/livestock-anaerobic-digester-database · https://www.epa.gov/sites/default/files/2020-10/agstar-livestock-ad-database.xlsx
- Canadian Biogas Association, *2026 Canadian Biogas & RNG Market Report* (2026-04-30, NRCan-funded; Appendix A/B and Footnote 8): https://www.unisonsolutions.com/wp-content/uploads/2026/06/CBA_Market_Report_2026.pdf
- `CaptainFerMag/PyADM1` (`MIT`): https://github.com/CaptainFerMag/PyADM1
- `dgaida/PyADM1ODE` (`MIT`): https://github.com/dgaida/PyADM1ODE
- `QSD-Group/QSDsan` (`NCSA`): https://github.com/QSD-Group/QSDsan
- Last checked: 2026-10-14

Not legal advice.
