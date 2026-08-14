# Environmental Scan: Open Post-Harvest, Cold Storage, Grain Processing, and Seed Cleaning Systems (G-OSA-27)

- Date: 2026-08-14
- Method: Targeted discovery pass on open-source hardware, firmware, and processing designs for post-harvest loss prevention, cold chain management, grain/seed cleaning, and storage telemetry.
- Focus: G-OSA-27 (Post-Harvest, Cold Chain & Seed/Grain Processing layer).

## Why this cell matters

Post-harvest loss accounts for massive food waste and financial vulnerability for smallholders and regional growers worldwide. Cold-storage refrigeration compressors, industrial seed cleaners, and automated grain bin telemetry systems are traditionally high-capital, closed-commercial technologies. Investigating whether open-source hardware and DIY designs provide verified alternatives tests the post-field boundary of open agrifood.

## Headline Finding

**The open post-harvest layer succeeds emphatically in small-scale, decentralized processing and low-cost cold-chain retrofitting (Real Seeds DIY Seed Cleaner: universally replicated open air-column aspirator; ColdSnap/Mycodo CoolBot plugins: $25 open-firmware cold-room retrofits). However, broad-acre grain silo moisture-cable telemetry and commercial industrial fanning mills remain largely closed commercial hardware.**

## Working Matrix: Open Post-Harvest & Cold Chain

| Layer | Open Implementations | Status & License | Key Characteristics | Commercial Closed Systems |
|---|---|---|---|---|
| **Seed Cleaning & Winnowing** | Real Seeds Air-Column Cleaner | Curated (Public Design Commons) | Acrylic pipe + vacuum; universal adoption in seed libraries & ecological breeding | Industrial fanning mills, Crippen, Clipper |
| **Cool-Room Refrigeration** | ColdSnap, Mycodo CoolBot Plugin | Candidate / Curated (MIT / GPL-3.0) | Uses Arduino/ESP to hack standard A/C units for 34°F storage | CoolBot ($400 proprietary), commercial walk-in compressors ($5k+) |
| **Grain Silo Telemetry** | Open LoRaWAN temp/humidity nodes | Candidate (Informal / MIT) | Commodity ESP32 + 1-wire temp strings | OPI Blue, BinMaster, Amber Agriculture |
| **Solar Crop Drying** | Farm Africa / NECPA Dryer, Appropedia | Candidate / Curated (CC BY-SA) | Passive/active solar thermal drying blueprints | Commercial batch dryers, gas kilns |

## Cases Added

| Record | Status | Open Layer | Key Finding |
|---|---|---|---|
| `real-seeds-cleaner.md` | `curated` | Hardware Design & Manuals (Public Commons) | Verified open-hardware aspirator unlocking smallholder seed independence. |
| `coldsnap-coolbot.md` | `candidate` | Firmware & Schematics (MIT / GPL-3.0 via Mycodo) | Open electronic hack turning commodity air conditioners into sub-$1,000 walk-in coolers. |

## Contested Claims & Key Takeaways

1. **Capital De-escalation via Open Hacks**: The open cool-room controller demonstrates how simple open firmware can bypass thousands of dollars in commercial refrigeration equipment by re-purposing consumer appliances.
2. **Post-Harvest as the Physical Enabler of Biological Commons**: Open-source seed initiatives (OSSI, Bioleft) cannot function without affordable processing equipment like the Real Seeds cleaner; physical post-harvest tools are essential upstream infrastructure for biological commons.

## Honest Omissions & Gaps

1. No open-source automated optical grain sorting / machine-vision seed grading hardware was identified at production readiness.
2. Multi-stage industrial grain elevator automation remains fully proprietary.

## Sources and Verification

- Real Seeds DIY Seed Cleaner: `https://realseeds.co.uk/seedcleaner.html` (verified 2026-08-14)
- ColdSnap: `https://github.com/vgeorge/coldsnap` (MIT; verified 2026-08-14)
- Mycodo Custom Controllers: `https://github.com/kizniche/Mycodo-custom` (verified 2026-08-14)

Not legal advice.
