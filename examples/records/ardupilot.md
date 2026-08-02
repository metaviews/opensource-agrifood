# ArduPilot

- Status: `curated`
- Region / reach: global; community-developed open autopilot
- Project: https://ardupilot.org/
- Repository: https://github.com/ArduPilot/ardupilot
- Field-guide context: new discovery from the open-hardware/robotics/sensing cycle, 2026-08-02

## Problem addressed

ArduPilot is a general-purpose open-source autopilot system supporting many vehicle types — multi-copters, helicopters, fixed-wing aircraft, rovers, boats, and submarines. In agrifood it functions as enabling infrastructure: the flight-control and autonomy layer for agricultural drones (crop monitoring, mapping, spraying) and agricultural robots. It is not agricultural software per se; it becomes agricultural by application.

## Open layer

Open-source firmware and ground-control software, community-developed, with a documented agricultural application layer.

## What is actually open

- Firmware and vehicle support (ArduPlane, ArduCopter, ArduRover, ArduSub): GPL-3.0, verified via GitHub API 2026-08-02.
- Ground control station (Mission Planner) and documentation are published openly; a large developer community contributes, with public forums and monthly release/update notes.
- The project is one of the open autopilot ecosystems (alongside PX4) cited in curated lists of open UAV-in-agriculture infrastructure.

## Governance and control

ArduPilot is a community-developed project with open developer forums and public contribution processes (including Google Summer of Code participation). Formal governance structures were not independently documented for this record. It is not farmer-governed; agricultural users are one application community among many.

## Evidence of use

- The project's own use-case pages cite agricultural applications including automatic agricultural robot tractors and large-area aerial mapping.
- Agricultural use is documented across the open ecosystem: spray drones built on ArduPilot firmware (including DIY builds), crop-monitoring and soil-health drone applications, and use in the RTK guidance ecosystem (e.g., the AgOpenGPS precision-agriculture community uses GNSS receivers that pair with open guidance software).
- ArduPilot is reported to run on more than 30 flight-controller boards, from low-cost boards upward. These are ecosystem-reported figures, not independently audited deployment counts.

## Maintenance and funding

Sustained by a large developer community with institutional participation (GSoC) and open contribution infrastructure. The project itself flags that every country has different regulations governing remote-controlled and autonomous vehicles, and that operators are responsible for local compliance — a reminder that regulatory approval is a constraint layer outside the open project's control.

## What this case demonstrates

ArduPilot shows how generic open infrastructure becomes agricultural infrastructure through application, and that durable open autonomy software exists and is maintained at scale by a community. It is the robotics/drone analogue of Common Voice in the collection: upstream open infrastructure whose agrifood value depends on application layers built around it.

## What it does not demonstrate

- It does not establish agrifood deployment scale; no audited agricultural adoption figures were located in this pass.
- It does not establish farmer control of the project or of the drones built on it.
- Safety certification and regulatory approval are absent at the project level and vary by jurisdiction.
- Much of the value chain around the autopilot (airframes, sprayers, batteries, sensors) is commercial.

## Sources and verification

- ArduPilot: https://ardupilot.org/
- Repository (GPL-3.0, verified via GitHub API): https://github.com/ArduPilot/ardupilot
- Agricultural UAV ecosystem list: https://github.com/brandonhimpfen/awesome-uav-in-agriculture
- ArduPilot use cases: https://ardupilot.org/copter/docs/common-use-cases-and-applications.html
- Last checked: 2026-08-02

## Freshness

- Licence: `fact` — re-verify annually.
- Agricultural use cases: `claim` — re-verify annually.
- Ecosystem and board-support claims: `claim` — re-verify annually.
- Deployment-scale evidence: `gap` — no sector-specific numbers located.

Not legal advice.
