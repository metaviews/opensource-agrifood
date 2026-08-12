# Compost sensor (zappityzap/compost-sensor)

Status: candidate
Region/reach: Hobby / home-scale compost monitoring; individual developer (zappityzap); global via GitHub
Project links:
- GitHub repo: https://github.com/zappityzap/compost-sensor
- MIT license file in repo

Problem addressed: monitoring the temperature (soil + air) inside a compost pile using a DIY Arduino-based sensor, with LoRa wireless transmission to a base station and integration with Home Assistant for data tracking.

Open layer: open-source hardware + firmware project — Arduino-based compost temperature sensor with LoRa (RFM95 900MHz), MIT-licensed.

What is actually open (asset by asset, licences verified):
- Firmware: Arduino sketches for TX (sensor) and RX (base station), MIT license (verified in repo LICENSE file).
- Hardware BOM: Adafruit Feather M0 + RFM95 LoRa (TX), Adafruit Feather M0 WiFi + LoRa FeatherWing (RX), PT1000 RTD temperature sensor + MAX31865 amplifier, STEMMA soil moisture sensor (I2C capacitive, noted as unreliable in the README), LiPo batteries, stainless-steel tube for probe.
- Documentation: README with full build instructions, library dependencies, Home Assistant integration (MQTT), firmware update procedure, configuration (config.h).
- Software integration: MQTT to Home Assistant; base station discovers sensors automatically.
- OSHWA certification: NOT located.
- Replication: NOT located — appears to be a single-build hobby project (2 stars, 0 forks, last commit November 2024, 47 commits total).

Governance and control: individual hobbyist developer (zappityzap). No institutional home, no governance structure. The MIT license governs the code; hardware design is in the README/BOM but not licenced separately.

Evidence of use:
- The README includes a photo of a deployed sensor in a compost pile ("first-pile" image) — evidence of at least one build and deployment by the developer.
- 2 stars, 0 forks, 1 watcher — hobby-scale metrics; no evidence of community adoption or independent builds.
- Last commit November 2024 — project appears active as of that date; no evidence of ongoing maintenance beyond that.

Maintenance and funding: hobby project, no identified funding. MIT license — code is open for reuse; maintenance depends on the individual developer.

What this case demonstrates:
- An open-source (MIT-licensed) DIY compost monitoring sensor exists and has been built and deployed — the "smart compost" idea has a real if small open implementation at the hobby level.
- LoRa + Home Assistant integration is a real pattern for compost monitoring at small scale — the technical approach is documented and buildable.
- The open layer for compost monitoring is real but thin and hobby-scale — no evidence of scaled or commercial deployment.

What it does NOT demonstrate:
- That the sensor is reliable for compost process control — the README notes the STEMMA soil moisture sensor is unreliable and drains battery; the project is iterating on sensor choice (testing Chirp! sensors next) — the monitoring is temperature-focused and not a full process-control system.
- That the design has been replicated or adopted beyond the developer's own build — 2 stars, 0 forks, no build reports located.
- That the project covers composting at farm or community scale — the sensor is pile-scale, hobby/small-scale.
- That a full compost process-control system (turning schedules, C:N, temperature tracking at scale) exists in open source — this is a temperature sensor, not a process controller.

Sources and verification (last-checked 2026-08-12):
- GitHub repo (MIT license verified): https://github.com/zappityzap/compost-sensor

Freshness: example (confirm annually); last commit November 2024; hobby project, metrics low; re-verify on any activity update.

Not legal advice.
