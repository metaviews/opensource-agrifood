# OpenFence

- Status: `candidate`
- Region / reach: Australia / Global (designed for rotational and holistic cell grazing rangelands)
- Project: https://github.com/plyalex/OpenFence
- Live docs: https://hackaday.io/project/10725-openfence-digital-livestock-fencing
- Field-guide context: addresses the livestock management and virtual fencing layer — an open-source hardware/firmware attempt at GPS-guided boundary enforcement for pasture cell grazing
- Last checked: 2026-08-14

## Problem addressed

Rotational and adaptive multi-paddock (AMP) grazing require frequent fence movement, demanding high physical labor and materials costs. Commercial virtual fencing systems (Nofence, Vence/Merck, Gallagher eShepherd) enclose herds within dynamic GPS boundaries using auditory cues and mild electrical pulses from smart collars. However, commercial systems carry steep hardware costs ($200–$400/collar) and recurring per-head subscription fees, keeping the technology out of reach for smaller or community-managed herds.

## Open layer

Full software source code and hardware design concepts published under GPL-3.0. OpenFence was developed as an open-source GPS collar and web dashboard for defining paddock polygons and emitting stimulus commands.

## What is actually open

- Code: GPL-3.0, repository `plyalex/OpenFence`, 26 stars (checked 2026-08-14). Contains Arduino firmware for collar microcontrollers, GPS parsing, RF/GSM communication modules, and web mapping interface.
- Hardware concepts: Schematics and component BOMs published on Hackaday.io project log.

## Governance and control

Individual open-hardware/maker project by Alex Paly (Australia). Maintainer-led; no institutional foundation or cooperative governance.

## Evidence of use

- Prototyped and tested in bench and field trials for GPS boundary containment and auditory warning sequences.
- Documented open reference design cited in academic rangeland management and open-hardware livestock reviews.

## Maintenance and funding

Dormant / Archive state. The GitHub repository has not received new commits since November 2016. The project represents a prototype proof-of-concept rather than an actively maintained commercial or community product.

## Why it belongs

OpenFence is included as a critical benchmark for the structural absence of an actively maintained, open-source virtual fencing platform. It demonstrates that while the technical principles (GPS + geofence polygons + acoustic cue + pulse stimulation) are well-understood in open maker communities, the physical durability, animal-welfare compliance, and battery longevity required for multi-year commercial deployment remain virtually monopolized by venture-backed, proprietary subscription vendors.

## What it does not demonstrate

OpenFence is not a production-ready, off-the-shelf alternative to commercial virtual fencing systems. It does not possess animal-welfare certification or mass-manufacturing distribution.

## Sources and verification

- Repository & licence: https://github.com/plyalex/OpenFence (GPL-3.0; verified 2026-08-14)
- Hackaday Project Log: https://hackaday.io/project/10725-openfence-digital-livestock-fencing
- Verification pass: research/2026-08-livestock-pasture-virtual-fencing-scan.md
- Last checked: 2026-08-14

Not legal advice.
