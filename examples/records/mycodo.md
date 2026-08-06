# Mycodo

- Status: `curated`
- Region / reach: United States (developer in Tennessee) / international maker, hobby, research, and small-commercial horticulture community
- Project: https://github.com/kizniche/Mycodo
- Live docs: https://kizniche.github.io/Mycodo/
- Field-guide context: aligns with `units/haven-greens.md` and the protected-cultivation layer generally — Mycodo is the open control counterpart to the closed commercial climate computers the field guide documents
- Last checked: 2026-08-06

## Problem addressed

Environmental monitoring and regulation for enclosed cultivation: greenhouse, hydroponic, aquaponic, mushroom, and other controlled-environment systems need precise control of temperature, humidity, CO2, pH, EC, water temperature, and lighting. Commercial climate computers (Priva, Hoogendoorn) do this for large operations behind proprietary software and locked data formats; small and mid-scale growers are left with expensive, closed options or nothing.

## Open layer

Software is fully open source (GPL-3.0). Mycodo is an environmental regulation and monitoring system: it reads sensors, runs PID/conditional automation, logs data, and actuates relays/controllers on a Raspberry Pi (and other SBCs). It is the closest thing to a general-purpose open "grow computer" in this corpus.

## What is actually open

- Code: GPL-3.0, repository `kizniche/Mycodo`, 3,267 stars (checked 2026-08-03), latest release v8.17.0 published 2026-08-03 — actively maintained.
- Hardware: runs on commodity single-board computers and off-the-shelf sensors (DHT22, DS18B20, etc.); no proprietary Mycodo hardware, so the stack is not hardware-locked.
- Data: local SQLite + export options; data stays on the operator's device by default (no cloud requirement).
- Documentation: full manual published openly.

## Governance and control

Single principal developer (Kyle Gabriel, "kizniche") with community contributors; GPL-3.0 guarantees fork and modification rights. Not a cooperative or foundation — governance is maintainer-led.

## Evidence of use

- Documented hydroponic and ground-based plant-cultivation builds (kylegabriel.com project pages, linked from the README).
- Peer-reviewed deployment: Penjor et al. (2022), "Automation of Hydroponics System using Open-source Hardware and Software with Remote Monitoring and Control," Bhutan Journal of Agriculture, DOI 10.55925/btagr.22.5108 — ARDC-Wengkhar (Bhutan Department of Agriculture) built a Mycodo-based automation prototype on Raspberry Pi 3 and ran it in real hydroponics structures (NFT, DWC, vertical tower) for 8+ months; found efficient, reliable, useful, affordable, expandable.
- Used for mushroom cultivation, aquaponics, and incubation per the project's own use list.

## Maintenance and funding

Active (release cadence through 2026-08). Funding model: maintainer-led project, no institutional home identified in sources; sustainability rests on a single developer plus contributors.

## Why it belongs

Mycodo is the corpus's strongest open greenhouse/CEA **control** layer: GPL-3.0 code, active maintenance, commodity hardware, local data, and a peer-reviewed institutional deployment (Bhutan ARDC). It directly answers G-OSA-22's core question — which layers of the protected-cultivation automation stack have open implementations — at the small/mid scale.

## What it does not demonstrate

Mycodo is not a commercial-scale greenhouse control system. It does not displace Priva/Hoogendoorn at acre-scale; its documented deployments are hobby, research, education, and small-farm. It is also not a data-interoperability standard (no open climate-data schema), so it does not address the closed-data-format lock-in problem by itself.

## Sources and verification

- Repository + licence + activity: https://api.github.com/repos/kizniche/Mycodo (GPL-3.0; 3,267 stars; v8.17.0 2026-08-03)
- Project docs: https://kizniche.github.io/Mycodo/
- Penjor, T. et al. (2022), Bhutan Journal of Agriculture, DOI 10.55925/btagr.22.5108 — Mycodo-based hydroponics automation, ARDC-Wengkhar
- Verification pass: research/2026-08-greenhouse-cea-open-automation-scan.md
- Last checked: 2026-08-06

Not legal advice.
