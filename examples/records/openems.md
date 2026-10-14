# OpenEMS (Open Source Energy Management System)

- Status: `curated`
- Region / reach: Germany-origin (OpenEMS Association e.V., Deggendorf); deployed internationally across commercial, industrial, agricultural, and residential microgrids
- Project: https://openems.io/ · https://github.com/OpenEMS/openems
- Field-guide context: opened via the C4 energy and biological byproducts scan (G-OSA-40, `research/2026-10-energy-biological-byproducts-scan.md` sub-cell 3); cross-links to G-OSA-22 / CEA case study (`cea/open-climate-control-case-study.md`) and G-OSA-38 (local operability); verified 2026-10-14

## Problem addressed

Farm microgrids and rural energy installations increasingly combine solar PV inverters, battery energy storage systems (BESS), combined heat and power (CHP) biogas gensets, heat pumps, cold-storage compressors, and EV/machinery chargers. Vendor energy management systems lock owners into single-brand hardware ecosystems or cloud-dependent SaaS portals that fail when connectivity drops and prevent cross-vendor peak shaving or off-grid islanding.

## Open layer

Full-stack modular Java/OSGi edge controller (`OpenEMS Edge`), multi-site aggregation backend (`OpenEMS Backend`), and web/mobile interface (`OpenEMS UI`), released under OSI-approved copyleft licences (`EPL-2.0` and `AGPL-3.0`) and governed by a multi-stakeholder non-profit association.

## What is actually open

Verified directly from `https://github.com/OpenEMS/openems` (`README.md`, `LICENSE-EPL-2.0.txt`, and `LICENSE-AGPL-3.0.txt` checked 2026-10-14; 1,588 stars, 690 forks, active daily commits with last push 2026-10-13):

- **OpenEMS Edge and OpenEMS Backend**: **Eclipse Public License 2.0 (`EPL-2.0`)** with Secondary Licenses (`GPL-2.0-only` or later with Classpath exception). Runs locally on industrial edge hardware (Raspberry Pi, BeagleBone, IPCs) with deterministic local control loops that continue operating offline.
- **OpenEMS UI**: **GNU Affero General Public License v3.0 (`AGPL-3.0`)**, closing the SaaS/network-service loophole for hosted monitoring dashboards.
- **Hardware driver and controller bundles (in-tree, open source)**: over 200 modular bundles in `io.openems.edge.*`, including native Modbus/SunSpec/CAN integrations for **Victron Energy** (`io.openems.edge.victron`), SMA, Fronius, Kostal, KACO, GoodWe, Sungrow, Socomec, Janitza, **CHP gensets** (`io.openems.edge.controller.chp.soc`), heat pumps and heating elements (`io.openems.edge.heater.*`), dynamic time-of-use tariffs, peak shaving (`controller.symmetric.peakshaving`), and off-grid/island switching.

## Governance and control

Governed by the **OpenEMS Association e.V.** (founded 2019 in Germany out of FENECON GmbH), an independent registered association (`eingetragener Verein`) of companies, utilities, hardware manufacturers, and research universities (including Technische Hochschule Deggendorf and Austrian Institute of Technology). Unlike single-vendor open-core projects, the Association holds trademark and community governance while members ship commercial energy-storage systems (such as FENECON's residential, commercial, and industrial/farm storage units) running the upstream open codebase.

## Evidence of use

Production-proven at scale: OpenEMS is the operating software inside FENECON's commercial and residential energy storage systems (tens of thousands of deployed units in DACH/Europe, including agricultural PV + battery + biogas CHP farms) and is maintained by dozens of corporate and academic contributors (1,588 stars, 690 forks, bi-monthly numbered releases through October 2026).

## Maintenance and funding

Funded through corporate membership dues in the OpenEMS Association e.V., commercial deployments by member firms (FENECON, utility partners, system integrators), and German/EU public energy-transition research grants. In the corpus's maintenance taxonomy (`research/2026-08-maintenance-funding-profiles.md`), it represents a strong **industry consortium / foundation** model.

## Why it belongs

1. **It is the commercial-scale open controller that the greenhouse cell (G-OSA-22) lacked**: whereas greenhouse climate control has no open software between hobbyist Mycodo (`GPL-3.0`) and closed Priva/Hoogendoorn boxes, the farm energy/microgrid layer has a production-grade, consortium-backed open controller (`EPL-2.0`/`AGPL-3.0`) that talks natively to industrial inverters, batteries, CHP units, and heat pumps.
2. **It validates the A4 local-operability principle (`G-OSA-38`) at industrial scale**: `OpenEMS Edge` executes peak shaving, self-consumption optimization, and CHP/battery dispatch locally on the farm's edge device, using `OpenEMS Backend` only for optional remote telemetry.

## What it does not demonstrate

- Agriculture-specific biological control: OpenEMS manages electrical and thermal energy flows (kW, SoC, tariffs, CHP thresholds), not biological digester chemistry (pH, volatile fatty acids, H₂S) or greenhouse crop-transpiration recipes.
- Significant documented Canadian farm adoption (deployment base is overwhelmingly European/DACH, where feed-in tariffs, dynamic tariffs, and agricultural PV/biogas CHP are dense).

## Sources and verification

- OpenEMS official site & Association overview: https://openems.io/
- `OpenEMS/openems` GitHub repository (`EPL-2.0` + `AGPL-3.0` verified): https://github.com/OpenEMS/openems
- OpenEMS documentation & supported hardware components: https://openems.github.io/openems.io/openems/latest/introduction.html
- Last checked: 2026-10-14

Not legal advice.
