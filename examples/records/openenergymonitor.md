# OpenEnergyMonitor & Emoncms

- Status: `curated`
- Region / reach: Wales, UK (Megni LLP, Brynrefail, Gwynedd); global deployment across residential, off-grid, research, and agricultural/CEA energy and heat-pump monitoring
- Project: https://openenergymonitor.org/ · https://github.com/openenergymonitor · https://github.com/emoncms/emoncms
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cell 3); resolves the licence ambiguity flagged in the CEA case study (`cea/research/cold-climate-energy-readings.md`); verified 2026-10-14

## Problem addressed

Measuring electrical consumption, solar PV generation, battery state, and heat-pump coefficient of performance (COP) in farm buildings, cold rooms, and greenhouses typically requires either expensive industrial sub-meters or closed consumer cloud monitors that lock time-series data behind proprietary apps. OpenEnergyMonitor provides open-hardware current-transformer (CT), temperature, and pulse/heat-meter nodes paired with a self-hostable time-series logging and visualization web application (`Emoncms`).

## Open layer

Open-source web logging/visualization software (`AGPL-3.0`), Arduino/STM32 energy-monitoring firmware (`GPL-3.0` / `AGPL-3.0`), and open-hardware schematics and PCB layouts (`CC-BY-SA-4.0` on current-generation hardware), with an important generational licence distinction across repositories.

## What is actually open

Verified across the `openenergymonitor` and `emoncms` GitHub organizations via GitHub API (2026-10-14), resolving the earlier CEA research note that found `license: null` on the legacy `emonpi` repository:

- **`emoncms/emoncms` (web application & time-series engine)**: **AGPL-3.0** (verified via GitHub API, 1,322 stars, 531 forks, pushed 2026-10-11). Runs locally on a Raspberry Pi (`emonSD`) or on a remote server; logs, processes, and visualizes power, energy, temperature, and heat-pump performance data.
- **`openenergymonitor/EmonLib` (Arduino energy monitoring library)**: **AGPL-3.0** (verified via GitHub API, 629 stars, pushed 2026-06-21).
- **Current-generation STM32 hardware and firmware (`emon32` & `emonHP`)**:
  - `openenergymonitor/emon32` (emonPi3 & emonTx6 hardware schematics/CAD): **CC-BY-SA-4.0** (verified via GitHub API, pushed 2026-09-25).
  - `openenergymonitor/emon32-fw` (emonPi3 & emonTx6 STM32 firmware): **GPL-3.0** (verified via GitHub API, pushed 2026-10-14).
  - `openenergymonitor/emonHP` (Heat Pump Monitoring System V2): **CC-BY-SA-4.0** (verified via GitHub API, pushed 2026-03-31).
- **Legacy repositories with missing SPDX licence files**: `openenergymonitor/emonpi` (v1 hardware/docs, 279 stars) and `openenergymonitor/avrdb_firmware` (EmonTx4/EmonPi2/EmonTx5 AVR-DB firmware, 18 stars) return `license: null` on the GitHub API despite open-hardware claims in documentation — explaining why a single-repo check on `emonpi` appeared unlicensed.

## Governance and control

Founded in 2009 and operated by **Megni LLP** (Glyn Hudson and Trystan Lea, Wales, UK) as a bootstrapped open-hardware business selling pre-assembled monitoring kits (`emonPi3`, `emonTx6`, heat-pump monitoring bundles) and optional hosted logging (`emoncms.org`, £1/feed/year) while keeping local self-hosting free and fully supported. Users own and store all time-series data locally on SD/SSD storage when running `emonSD`.

## Evidence of use

Sustained 16-year maintenance trajectory (2009–2026), active community forum (`community.openenergymonitor.org`), 1,322 stars and 531 forks on `emoncms`, and wide adoption in UK/European heat-pump performance transparency (`HeatpumpMonitor.org` open dataset runs on Emoncms) as well as off-grid solar and agricultural building energy audits.

## Maintenance and funding

Self-sustaining **commercial open-hardware + optional hosted service** model (Megni LLP). Hardware sales and optional £1/feed/year cloud hosting fund continuous development of the open hardware, firmware, and self-hosted software stack without venture capital.

## Why it belongs

1. **It is the C4 counterpart to OpenSprinkler (`G-OSA-25`)**: a small, profitable, 15+-year open-hardware business whose local-first architecture (`emonSD` + local MQTT/HTTP) never traps the user in a cloud subscription.
2. **It directly informs the CEA case study (`cea/open-climate-control-case-study.md`)**: where the CEA energy-cost spine needs empirical kWh and heat-pump/thermal sub-metering per kilogram of greens in a northern community greenhouse, `emonPi3` / `emonHP` (`CC-BY-SA-4.0` + `GPL-3.0` + `AGPL-3.0`) is the verified open measurement instrument.

## What it does not demonstrate

- Active load control or grid dispatch (OpenEnergyMonitor is primarily a measurement, sub-metering, and diagnostic stack, though it integrates with OpenEMS, Home Assistant, and Node-RED for control).
- OSHWA certification (hardware uses `CC-BY-SA-4.0` rather than `CERN-OHL` and is not registered in the OSHWA certification directory).

## Sources and verification

- OpenEnergyMonitor project site: https://openenergymonitor.org/
- `emoncms/emoncms` repository (`AGPL-3.0`): https://github.com/emoncms/emoncms
- `openenergymonitor/emon32` hardware repository (`CC-BY-SA-4.0`): https://github.com/openenergymonitor/emon32
- `openenergymonitor/emon32-fw` firmware repository (`GPL-3.0`): https://github.com/openenergymonitor/emon32-fw
- `openenergymonitor/emonHP` heat-pump monitor repository (`CC-BY-SA-4.0`): https://github.com/openenergymonitor/emonHP
- `openenergymonitor/emonpi` legacy repository (`license: null` noted): https://github.com/openenergymonitor/emonpi
- Last checked: 2026-10-14

Not legal advice.
