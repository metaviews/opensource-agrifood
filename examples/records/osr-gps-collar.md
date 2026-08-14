# Open Source Range (OSR) GPS Collar

- Status: `candidate`
- Region / reach: United States / Global (rangeland ecology and extensive livestock pasture research)
- Project: https://github.com/Open-Source-Range/OSR_GPS_Collar
- Live docs: https://github.com/Open-Source-Range/OSR_GPS_Collar
- Field-guide context: addresses the livestock telemetry and rangeland grazing monitoring layer — low-cost GPS telemetry collar for livestock tracking on open pasture
- Last checked: 2026-08-14

## Problem addressed

Tracking cattle, sheep, and goat movement across expansive rangelands is crucial for rangeland conservation, predator monitoring, and grazing optimization. Commercial wildlife/livestock GPS collars cost $1,000–$3,000+ per unit, creating prohibitive barriers for ranchers and independent ecology researchers monitoring herd-scale movement.

## Open layer

Hardware design files, microcontroller firmware, and 3D housing STLs openly published on GitHub. The project details a solar-augmented, low-power GPS logging collar built with commodity microcontrollers (Adafruit Feather / ESP32) and LoRa telemetry.

## What is actually open

- Hardware & Firmware: Repository `Open-Source-Range/OSR_GPS_Collar`, 16 stars (checked 2026-08-14). Contains Arduino code, PCB layouts, enclosure STLs, and assembly documentation.
- Note on Licensing Formality: Explicit SPDX license file is missing from repository root (`license: null`), representing a common open-science publication gap where designs are published publicly without formal legal boilerplate.

## Governance and control

Open academic research collaboration (university rangeland ecology researchers). Maintainer-led.

## Evidence of use

- Field tested on rangeland cattle for multi-month tracking runs, recording GPS fixes and logging pasture utilization heatmaps.
- Replicated by rangeland researchers seeking low-cost telemetry alternatives to proprietary Lotek or Vectronic collars.

## Maintenance and funding

Maintenance cadence is episodic (last code updates in 2023). Funded primarily through academic research grants and rangeland conservation project budgets.

## Why it belongs

The OSR GPS Collar demonstrates the viability of open-source livestock telemetry to dramatically lower tracking costs from thousands of dollars to sub-$100 bill-of-materials. It also serves as an example of open-science rangeland monitoring tools that bridge the gap between academic research and practitioner pasture management.

## What it does not demonstrate

The OSR collar is a passive tracking/telemetry device; it does not implement active virtual fencing stimuli (sound/shock), and its lack of an explicit SPDX license reflects the informal legal status common in academic open-hardware projects.

## Sources and verification

- Repository: https://github.com/Open-Source-Range/OSR_GPS_Collar (verified 2026-08-14)
- Verification pass: research/2026-08-livestock-pasture-virtual-fencing-scan.md
- Last checked: 2026-08-14

Not legal advice.
