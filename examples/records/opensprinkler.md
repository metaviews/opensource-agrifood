# OpenSprinkler

- Status: `curated`
- Region / reach: United States (Amherst, MA) / global maker, urban agriculture, landscaping, greenhouse, and smallholder irrigation community
- Project: https://opensprinkler.com / https://github.com/OpenSprinkler
- Live docs: https://openthings.freshdesk.com/ / https://github.com/OpenSprinkler/OpenSprinkler-Firmware
- Field-guide context: addresses the irrigation automation and precision water management layer — open hardware and firmware alternative to closed proprietary irrigation controllers (Hunter, Rain Bird, Rachio)
- Last checked: 2026-08-14

## Problem addressed

Irrigation scheduling, weather-adjusted water application, and remote multi-zone valve automation are critical for agricultural water conservation and crop health. Proprietary commercial smart irrigation controllers rely on closed cloud services, subscription lock-in, proprietary wireless protocols, and cloud-dependent APIs that break if the vendor discontinues service or changes terms.

## Open layer

Both software/firmware and hardware design files are fully open source under copyleft and reciprocal open-hardware licenses:
- Firmware: GPL-3.0
- Hardware: CERN-OHL-S-2.0 (CERN Open Hardware Licence Version 2 - Strongly Reciprocal)
- Local control: fully functional over local network (HTTP API, MQTT, Home Assistant integration) without mandatory cloud subscription.

## What is actually open

- Firmware: GPL-3.0, repository `OpenSprinkler/OpenSprinkler-Firmware`, 554 stars (checked 2026-08-14), actively maintained with commits through August 2026. Unified firmware for microcontroller (AVR/ESP8266/ESP32), Raspberry Pi (OSPi), and Linux SBCs.
- Hardware: CERN-OHL-S-2.0 strongly reciprocal license, repository `OpenSprinkler/OpenSprinkler-Hardware`, 79 stars (checked 2026-08-14). Schematics, board layouts, and BOMs for 24V AC, DC latching, and DIY expansion boards.
- Mobile/Web App: GPL-3.0, repository `OpenSprinkler/OpenSprinkler-App`, Cordova/Ionic cross-platform app.
- Data & APIs: Fully open local REST API and MQTT publishing. Data stays on the local device; weather forecasting integration uses open/configurable weather APIs.

## Governance and control

Commercial open-source business model founded by Dr. Ray Wang (Rayshobby LLC). Hardware design and core firmware are maintainer-led with active global community contributions and third-party integrations (e.g. Home Assistant core integration).

## Evidence of use

- Commercial hardware manufacturing and distribution since 2011, deployed across thousands of residential, commercial landscaping, greenhouse, and small farm installations worldwide.
- Widely integrated into open-source smart farm and home automation ecosystems (native Home Assistant integration, OpenHAB, Node-RED).
- Academic and municipal research deployments exploring open-source automated precision irrigation and municipal water conservation.

## Maintenance and funding

Commercial hardware sales (assembled units and DIY kits via OpenSprinkler shop) directly fund continuous engineering and software/hardware maintenance. High durability demonstrated across 15+ years of active development and hardware generations.

## Why it belongs

OpenSprinkler is the premier benchmark for open-source agricultural and horticultural irrigation automation. It features the gold-standard combination of GPL-3.0 firmware and CERN-OHL-S-2.0 reciprocal open hardware, complete local operability, active maintenance, and a self-sustaining commercial open-source business model.

## What it does not demonstrate

OpenSprinkler is primarily a valve-actuation and schedule-automation platform (24V AC/DC solenoids); it does not include an in-house crop-water physiological model (such as FAO AquaCrop) or broad-acre canal/pivot hydraulic telemetry out of the box, though it supports external sensor inputs (rain, soil moisture, flow meters).

## Sources and verification

- Firmware repository & licence: https://github.com/OpenSprinkler/OpenSprinkler-Firmware (GPL-3.0; verified 2026-08-14)
- Hardware repository & licence: https://github.com/OpenSprinkler/OpenSprinkler-Hardware (CERN-OHL-S-2.0; verified 2026-08-14)
- Project website & documentation: https://opensprinkler.com / https://rayshobby.net/wordpress/opensprinkler/
- Verification pass: research/2026-08-water-irrigation-automation-scan.md
- Last checked: 2026-08-14

Not legal advice.
