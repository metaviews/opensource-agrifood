# ColdSnap / DIY CoolBot Controller

- Status: `candidate`
- Region / reach: Global / smallholder market garden, fruit/vegetable cold chain, and local food hub communities
- Project: https://github.com/vgeorge/coldsnap / https://github.com/bnorth12/CoolerController
- Live docs: https://github.com/vgeorge/coldsnap
- Field-guide context: addresses the on-farm cold chain, post-harvest cooling, and storage automation layer — open-source micro-controller firmware to override standard A/C units for walk-in refrigeration
- Last checked: 2026-08-14

## Problem addressed

Farm walk-in coolers are essential to remove field heat and preserve produce quality, but commercial refrigeration compressors cost $4,000–$10,000+ plus professional HVAC installation. StoreItCold’s proprietary "CoolBot" ($400) enables standard residential window air conditioners to cool down to 34°F (1°C) by digitally manipulating the A/C unit's frost sensor, but the commercial device remains closed-source hardware.

## Open layer

Full open-source firmware and hardware wiring schematics published under MIT license (and integrated into open environmental control systems like Mycodo). Microcontroller-based firmware (Arduino / ESP8266 / Raspberry Pi) measures cold room temperature and heats the A/C unit's thermistor probe with a small resistor to prevent coil icing while forcing the compressor below standard limits.

## What is actually open

- Firmware: MIT License, repositories `vgeorge/coldsnap` and `bnorth12/CoolerController` on GitHub; also available as an official custom controller plugin in the GPL-3.0 `Mycodo` ecosystem.
- Schematics: Simple low-cost bill of materials using a microcontroller, two DS18B20 temperature sensors, and a heating resistor/MOSFET (~$25 total build cost).

## Governance and control

Decentralized open-source maker and farmer-hacker projects; maintainer-led open repositories.

## Evidence of use

- Independent DIY builds across small-scale market gardens, mushroom fruiting chambers, meat curing rooms, and off-grid homesteads.
- Integrated into Mycodo's environmental control system for automated greenhouse and cold-storage operations.

## Maintenance and funding

Community-maintained by independent developers and hobbyist farmers; self-funded DIY builds without venture or institutional backing.

## Why it belongs

It represents the grassroots open-hardware response to proprietary post-harvest cooling devices. It proves that post-harvest cold storage can be achieved with $25 in open electronics paired with commodity retail A/C units, drastically reducing the capital threshold for on-farm cold chain establishment.

## What it does not demonstrate

Does not include commercial warranty or UL/CE appliance certification; requires operator familiarity with microcontrollers and basic electronics wiring.

## Sources and verification

- Repository `vgeorge/coldsnap`: https://github.com/vgeorge/coldsnap (MIT; verified 2026-08-14)
- Repository `bnorth12/CoolerController`: https://github.com/bnorth12/CoolerController (verified 2026-08-14)
- Mycodo Custom Controller Plugins: https://github.com/kizniche/Mycodo-custom (verified 2026-08-14)
- Verification pass: research/2026-08-postharvest-processing-coldchain-scan.md
- Last checked: 2026-08-14

Not legal advice.
