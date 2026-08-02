# Vinduino

- Status: `curated`
- Region / reach: Southern California, US (single-vineyard origin; open for reuse)
- Project: https://hackaday.io/project/6444-vinduino-a-wine-growers-water-saving-project
- Repository: https://github.com/ReiniervdL/Vinduino
- Field-guide context: new discovery from the open-hardware/robotics/sensing cycle, 2026-08-02

## Problem addressed

Irrigation management in drought-affected agriculture: determining when to irrigate and how much water is needed, using soil-moisture sensors at multiple depths so irrigation does not exceed the active root zone. The project was started by Reinier van der Lee, a Southern California vineyard grower, out of his own irrigation management need.

## Open layer

Open-source sensing and irrigation-control hardware designs and software, intended to be affordable and easy to build.

## What is actually open

- Code and build files: GPL-3.0, verified via GitHub API 2026-08-02 ("Vinduino is an open license project for agricultural irrigation management").
- Components documented publicly: DIY calibrated gypsum soil-moisture sensors (Watermark SS200 also supported), handheld sensor reader (soil moisture, salinity, water pressure), solar-powered remote sensor platform (Vinduino R3), WiFi (ESP8266) or LoRa (GlobalSat LM-210, reported ~6 mile range) connectivity, irrigation valve control, gateway to connect LoRa nodes to the internet.
- A stated minimum configuration for developing countries, including salinity measurement, was reported at US$60.

## Governance and control

The project is led by a single grower-developer, with open publication of designs. There is no cooperative or community governance structure documented; control is effectively individual, with reuse enabled by the open licence.

## Evidence of use

- In 2015 the grower reported saving 25% of irrigation water — 430,000 gallons — with water-and-labour cost savings of US$1,925 against a cost of US$635 to achieve them.
- Monthly figures shared in the Hackaday comment thread: June 2015 usage 178 HCF vs 397 HCF in June 2014 (55% reduction); July 2015 295 HCF vs 441 HCF (33%).
- The method is contested in the same thread: commenters argue frequent shallow irrigation can encourage shallow rooting and evaporation losses; the grower responds with recorded data and notes that Australian farmers are major users of sensor-controlled irrigation.
- External coverage: Hackaday (2015), OSHPark blog (2016), GlobalSat case study of the LoRa deployment at Van der Lee Vineyard.
- All savings figures are self-reported, single-farm, and tied to one growing season.

## Maintenance and funding

Project logs and coverage date mostly from 2015-2017. Current maintenance status of the repository, the sensor designs, and the grower's continued involvement was not verified for this record; continued activity should not be assumed.

## What this case demonstrates

Vinduino is an individual grower-led open sensing project: a farmer-developer turning an on-farm water problem into a documented, low-cost, openly licensed sensor and irrigation-control system — the sensing analogue of Brian Tischler and AgOpenGPS in precision guidance. It shows that open agrifood hardware can originate from a single farm and still aim for global reuse, including low-cost configurations for water-stressed regions.

## What it does not demonstrate

- The 25% (and monthly) savings figures are self-reported, single-farm, and season-specific; they are not independent measurements.
- The irrigation method itself is contested in the project's own community thread.
- Current maintenance and continued activity are unverified (evidence suggests activity concentrated in 2015-2017).
- Reuse outside the origin vineyard is not documented.

## Sources and verification

- Hackaday.io project page: https://hackaday.io/project/6444-vinduino-a-wine-growers-water-saving-project
- Hackaday: https://hackaday.com/2015/06/27/hackaday-prize-entry-saving-water-with-the-vinduino/
- Repository (GPL-3.0, verified via GitHub API): https://github.com/ReiniervdL/Vinduino
- OSHPark blog: https://blog.oshpark.com/2016/03/14/vinduino-wine-grower-saves-water/
- GlobalSat case study: https://www.globalsat.com.tw/en/news-16461/
- Last checked: 2026-08-02

## Freshness

- Licence: `fact` — re-verify annually.
- Savings claims: `claim` — self-reported; treat as claims, re-verify only if reused in an argument.
- Maintenance status: `claim` — re-verify annually; current activity unverified.

Not legal advice.
