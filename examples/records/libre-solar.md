# Libre Solar

- Status: `curated`
- Region / reach: Germany-origin (Libre Solar Technologies GmbH, Hamburg); supported by the EnAccess Foundation for off-grid rural electrification and solar DC microgrids in the Global South and internationally
- Project: https://libre.solar/ · https://github.com/LibreSolar
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cell 3); cross-links to G-OSA-13 (OSHWA-certified CERN-OHL-W-2.0 hardware) and G-OSA-15 (Global South open hardware); verified 2026-10-14

## Problem addressed

Off-grid farm solar installations, solar water pumps, cold-storage battery banks, and rural DC microgrids depend on maximum power point tracking (MPPT) solar charge controllers and lithium-iron-phosphate (LFP) battery management systems (BMS). Commercial controllers are either unrepairable black boxes with proprietary communication protocols or locked to pay-as-you-go (PAYG) vendor cloud lockouts in the Global South. Libre Solar provides a modular, repairable, open-hardware DC energy stack with open Zephyr RTOS firmware and an open communication protocol (`ThingSet`).

## Open layer

OSHWA-certified open hardware (`CERN-OHL-W-2.0` / `CC-BY-SA-4.0`), permissive open-source embedded firmware (`Apache-2.0`), and open engineering documentation (`CC-BY-SA-4.0`).

## What is actually open

Verified across the `LibreSolar` GitHub organization via GitHub API and the OSHWA Certification Directory (2026-10-14):

- **OSHWA UID `DE000153` — Libre Solar BMS C1** (16S 100A Battery Management System for LFP/Li-ion packs, certified 2025-05-15): Hardware **CERN-OHL-W-2.0** (weakly reciprocal); Software **Apache-2.0**; Documentation **CC-BY-SA-4.0**; KiCad hardware repository (`https://github.com/LibreSolar/bms-c1`, 175 stars, 58 forks, pushed 2025-11-18).
- **Embedded firmware (`bms-firmware` & `charge-controller-firmware`)**:
  - `LibreSolar/bms-firmware` (Zephyr RTOS firmware for Libre Solar BMS boards): **Apache-2.0** (verified via GitHub API, 267 stars, 134 forks, pushed 2025-11-18).
  - `LibreSolar/charge-controller-firmware` (Zephyr RTOS firmware for MPPT/PWM charge controllers): **Apache-2.0** (verified via GitHub API, 190 stars, 129 forks, pushed 2026-07-07).
- **MPPT charge controller hardware (`mppt-2420-hc`, `mppt-1210-hus`, `mppt-2420-rc`)**: KiCad schematics, PCB layouts, and BOMs published on GitHub under `CC-BY-SA-4.0` (e.g., `mppt-2420-hc`, 125 stars, 61 forks; `mppt-1210-hus`, 212 stars, 108 forks).
- **Educational & engineering handbook (`learn.libre.solar`)**: **CC-BY-SA-4.0** (verified on `LibreSolar/learn.libre.solar`, 243 stars, pushed 2026-06-17), documenting DC microgrid sizing, buck/boost converter topologies, and BMS design from first principles.

## Governance and control

Founded by Martin Jäger and maintained by **Libre Solar Technologies GmbH** (Germany) with grant support from the **EnAccess Foundation** (which funds open-source hardware and software for energy access in underserved regions). The permissive/weak-copyleft licensing pair (`CERN-OHL-W-2.0` + `Apache-2.0`) is deliberately chosen so local manufacturers in Africa, Asia, or elsewhere can manufacture, adapt, and service controllers locally without firmware royalty or cloud lock-in.

## Evidence of use

Strong community and engineering uptake (hundreds of forks across hardware and firmware repos; active Zephyr RTOS upstream contributions; OSHWA certification `DE000153` in 2025), used as a reference architecture by off-grid solar developers in the EnAccess ecosystem and by independent off-grid builders. Field-level farm deployment counts are not centrally tracked (as expected for un-tethered open hardware).

## Maintenance and funding

Funded through a hybrid of **philanthropic open-energy grants** (EnAccess Foundation) and **engineering/prototyping consultancy** (Libre Solar Technologies GmbH). Actively maintained through 2026 (`charge-controller-firmware` pushed July 2026; `learn.libre.solar` pushed June 2026).

## Why it belongs

1. **It is the DC hardware counterpart to OpenEMS (`openems.md`) and OpenEnergyMonitor (`openenergymonitor.md`)**: where OpenEMS governs AC/hybrid site dispatch and OpenEnergyMonitor handles sub-metering, Libre Solar opens the power-electronics board inside the MPPT charge controller and LFP battery management system.
2. **It provides the structural counter-model to PAYG solar/biogas lock-in in the Global South**: while commercial smallholder energy companies (including Sistema.bio in biogas and PAYG solar vendors) pair subsidized hardware with proprietary IoT lockouts and carbon-credit capture, EnAccess and Libre Solar fund open, locally manufacturable power electronics.

## What it does not demonstrate

- Turnkey retail availability for non-technical farmers (Libre Solar publishes reference designs and engineering prototypes for local manufacturers and skilled builders, not boxed consumer retail units like Victron).
- Agriculture-specific load appliances (it is general-purpose DC solar/battery infrastructure).

## Sources and verification

- Libre Solar official site: https://libre.solar/
- OSHWA Certification `DE000153` (Libre Solar BMS C1, certified 2025-05-15): https://certification.oshwa.org/de000153.html
- `LibreSolar` GitHub organization: https://github.com/LibreSolar
- `LibreSolar/bms-c1` hardware repository (`CERN-OHL-W-2.0`): https://github.com/LibreSolar/bms-c1
- `LibreSolar/bms-firmware` (`Apache-2.0`): https://github.com/LibreSolar/bms-firmware
- `LibreSolar/charge-controller-firmware` (`Apache-2.0`): https://github.com/LibreSolar/charge-controller-firmware
- EnAccess Foundation open-source catalogue: https://enaccess.org/
- Last checked: 2026-10-14

Not legal advice.
