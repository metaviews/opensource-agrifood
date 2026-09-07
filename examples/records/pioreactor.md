# Pioreactor

- Status: `curated`
- Region / reach: Toronto, Ontario, Canada; international community (forum, third-party research builds); lab/bench scale
- Project: https://pioreactor.com / https://github.com/Pioreactor
- Last checked: 2026-09-07

## Problem addressed

Bioreactors — the core instrument of fermentation, the dominant science of upcycled-food valorization — cost tens of thousands of dollars and run closed vendor software. Any small processor, community lab, or food researcher wanting to develop fermentation-based valorization of surplus streams (spent grain, whey, fruit pomace) faces the same capital and lockout wall the processing scan documented for plant equipment.

## Open layer

- **Software**: MIT, verified from the repository LICENSE (github.com/Pioreactor/pioreactor/blob/master/LICENSE, full text read 2026-09-07). Python + JS, ~6,000 commits, active (last push 2026-08-19), 148 stars, 18 forks.
- **Hardware**: CC BY-SA 4.0, verified from Pioreactor/hardware LICENSE ("Hardware © 2024 by Pioreactor Inc. is licensed under CC BY-SA 4.0", read 2026-09-07). Raspberry Pi–based; designs include the HAT and enclosures; the project publishes an index of open designs (forum post: "We've licensed the currently shared designs under CC BY-SA 4.0").
- Business model: hardware sold assembled; software and designs free. The open layer is the platform; revenue is the device.

## What is actually open

Control software, plugin API (open Python API), hardware designs (CC BY-SA 4.0), firmware integration, and an active user forum (forum.pioreactor.com) with documented community extensions — including food/fermentation builds such as the "FlavorReactor" larger-volume gastronomic-science adaptation and third-party peer-reviewed plugins (fluorescence-monitoring photobioreactor, PMC11940672).

## Evidence of use

Active development 2020–2026; peer-reviewed derivative systems (BIO-SPEC bench-top parallel bioreactor, 2025); academic adoption (fluorescence spectroscopy integration, 2025). No commercial food-plant deployment — this is a lab/bench instrument, two to three orders of magnitude below plant scale, exactly as Grain Bikes was below mill scale.

## Why it belongs

The upcycling sub-cell scan (research/2026-09-upcycling-subcell-scan.md, G-OSA-37) found fermentation-valorization science to be overwhelmingly open literature with closed implementation. Pioreactor is the only open, licensed, actively maintained instrument in that gap — and the only Canadian one. It extends the A1 pattern (open hardware exists below plant scale only: Grain Bikes, Compost for Good, now Pioreactor) into the valorization layer.

## What it does not demonstrate

Plant-scale or food-safety-validated operation; no HACCP-relevant deployment; no upcycled-food production line uses it. Its licence does not cover the validator dynamics the A1 scan identified as the real wall.

## Sources and verification

- Software licence: https://github.com/Pioreactor/pioreactor/blob/master/LICENSE (MIT, verified 2026-09-07)
- Hardware licence: https://github.com/Pioreactor/hardware/blob/master/LICENSE (CC BY-SA 4.0, verified 2026-09-07)
- Open-designs index: https://forum.pioreactor.com/t/a-list-of-our-open-source-designs/146
- Activity: GitHub repo metadata checked 2026-09-07

Not legal advice.
