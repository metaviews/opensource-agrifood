# Open Agrifood Examples Catalogue

Research date: 2026-08-01

This catalogue is the browseable index for the curated examples collection. It is intentionally selective. The collection may grow beyond the current seven examples; there is no predetermined final count. Expansion should respond to analytical, regional, governance, or non-AI coverage gaps.

## Collection map

| Example | Region / reach | Open layer | Agrifood role | Status |
|---|---|---|---|---|
| [Open Ag Data Alliance](records/oada.md) | International / precision agriculture | code, API, interoperability | agricultural data exchange | curated |
| [JoinData](records/joindata.md) | Netherlands | data permissions, governance | farmer-controlled agricultural data | curated |
| [Mozilla Common Voice](records/common-voice.md) | Global / multilingual | community datasets | upstream language infrastructure | curated |
| [Open Source Seed Initiative](records/open-source-seed-initiative.md) | Global | seed pledge, biological commons | open breeding and seed sovereignty | curated |
| [GODAN](records/godan.md) | Global / Africa-relevant | open-data coordination | agricultural and nutrition data ecosystem | curated |
| [Open Data Kit](records/open-data-kit.md) | Global / African deployments | software and field infrastructure | agricultural research and data collection | curated |
| [CGIAR / AgriLLM](records/cgiar-agrillm.md) | Global South / multilateral | model artifact, public-interest AI | agricultural advisory and research AI | candidate |
| [Bioleft](records/bioleft.md) | Argentina / Latin America | seed commons, participatory data | open breeding and seed exchange | curated |
| [farmOS](records/farmos.md) | International | software, farm records | farm management and planning | curated |
| [ROMI](records/romi.md) | Europe / microfarms | hardware, software, robotics | weeding, monitoring, phenotyping | curated |
| [Digital Earth Africa crop-type mapping](records/digital-earth-africa-crop-type.md) | Africa | geospatial workflow, notebooks | crop mapping and analytics | curated |
| [Ag Data Commons](records/ag-data-commons.md) | United States / public research | data catalogue, repository, FAIR infrastructure | agricultural research-data access | curated |
| [Holos](records/holos.md) | Canada / federal public research | open model and software | whole-farm GHG modelling | candidate |
| [Open Food Network Canada](records/open-food-network-canada.md) | Canada / local food | software commons, marketplace | local food commerce and community hubs | curated |
| [Agri-food Data Canada](records/agrifood-data-canada.md) | Canada / research ecosystem | FAIR data, schemas, portals | agricultural research-data infrastructure | candidate |
| [Standard Data Platform for Autonomous Agriculture](records/standard-data-platform-autonomous-agriculture.md) | Canada / commercial-public consortium | claimed data commons, digital twin | autonomous farm planning | lead |
| [UBC Farm Seed Catalogue / Seed Hub](records/ubc-farm-seed-catalogue.md) | Canada / British Columbia | public-domain seed, seed research, cooperative infrastructure | regional seed production and sovereignty | candidate |
| [Sovereign Seeds](records/sovereign-seeds.md) | Canada / Indigenous-led | seed stewardship, cultural food sovereignty | Indigenous seed and agricultural food sovereignty | lead |
| [Brian Tischler](records/brian-tischler.md) | Canada / Alberta | open software, open hardware, farmer-led community | precision agriculture and autonomous machinery | curated |
| [Matt Reimer](records/matt-reimer.md) | Canada / Manitoba | open hardware, public source code, maker community | autonomous grain cart and farm robotics | candidate |
| [L'Atelier Paysan](records/latelier-paysan.md) | France / Europe | machinery designs, self-build training, cooperative governance | small-scale and agroecological farm equipment | curated |
| [FarmBot](records/farmbot.md) | US / global | CNC robot hardware, software (MIT), benefit-corporation openness | small-scale automated food production | curated |
| [Open Source Ecology](records/open-source-ecology.md) | US / global | machine design commons (GPL / CC-BY-SA) | open-source tractor and farm machinery set | curated |
| [ArduPilot](records/ardupilot.md) | Global | autopilot firmware (GPL-3.0), community infrastructure | agricultural drones and robotics enabler | curated |
| [Vinduino](records/vinduino.md) | US / California | sensing and irrigation hardware designs (GPL-3.0) | vineyard irrigation management | curated |
| [Farm Hack](records/farm-hack.md) | US / UK | design-sharing platform and events | farm tool commons infrastructure | candidate |
| [ISOBlue](records/isoblue.md) | US / Purdue | open telematics hardware and software (MIT family) | machine-data access and precision farming telematics | curated |
| [AgIsoStack++](records/agisostack.md) | Global | open ISOBUS standard implementation (MIT / GPL family) | farm machinery interoperability and data | curated |

## Coverage at a glance

| Layer | Current examples |
|---|---|
| Open software | OADA, ODK, farmOS |
| Open models / weights | CGIAR / AgriLLM |
| Open datasets / language infrastructure | Common Voice, GODAN |
| Open standards / interoperability | OADA |
| Farmer or community data governance | JoinData |
| Biological commons | OSSI |
| Multilateral public-interest infrastructure | GODAN, CGIAR / AgriLLM |
| Open hardware / robotics | ROMI, FarmBot, ArduPilot (enabler) |
| Open farm machinery / self-build | L'Atelier Paysan |
| Open sensing / irrigation | Vinduino, OpenSprinkler (adjacent) |
| Machine design commons | Open Source Ecology |
| Farmer tool design-sharing network | Farm Hack |
| Open machine-data telematics | ISOBlue |
| Open ISOBUS implementation | AgIsoStack++ / Open-Agriculture |
| Open farm management | farmOS |
| African geospatial infrastructure | Digital Earth Africa crop-type mapping |
| Public agricultural data repository | Ag Data Commons |
| Latin American biological commons | Bioleft |
| Canadian public agricultural model | Holos |
| Canadian local-food software commons | Open Food Network Canada |
| Canadian FAIR agricultural data infrastructure | Agri-food Data Canada |
| Canadian contested data-commons case | Standard Data Platform for Autonomous Agriculture |
| Canadian regional seed infrastructure | UBC Farm Seed Catalogue / Seed Hub |
| Canadian Indigenous seed-sovereignty lead | Sovereign Seeds |
| Canadian farmer-led open-source founder | Brian Tischler |
| Canadian farmer-maker and open robotics case | Matt Reimer |
| Clearly farmer-, Indigenous-, or community-governed | JoinData; OSSI is adjacent but not equivalent; Tischler and Reimer are farmer-led but not shown to govern their wider projects |
| Non-AI examples | OADA, JoinData, Common Voice, OSSI, GODAN, ODK, Bioleft, farmOS, ROMI, Digital Earth Africa, Ag Data Commons |

This table is a current map, not a claim that these layers are equally represented geographically or institutionally.

## Curation notes

The collection currently contains a deliberate majority of non-AI cases. That is a feature: the project’s AI emphasis should be tested against the wider ecology of open agrifood rather than allowed to define it in advance.

The open-hardware/robotics/sensing cell was expanded on 2026-08-02 from a single record (ROMI) to a full layer: farmer cooperative self-build (L'Atelier Paysan), company-backed open hardware (FarmBot), machine design commons (Open Source Ecology), open autopilot infrastructure (ArduPilot), grower-led sensing (Vinduino), and peer design-sharing (Farm Hack). A second pass the same day added the machine-data layer beneath the machines: open telematics (ISOBlue) and an open ISOBUS implementation (AgIsoStack++), alongside the July 2026 FTC/Deere right-to-repair settlement as the regulatory context. The remaining thin cells are geographic: Global South open hardware is a named gap (G-HW-01 in the hardware scan; G-OSA-15 in the register), and Asian open robotics was not searched.

The next additions should be selected through gap review. We may need more than two or three additional examples, particularly if the collection requires:

- stronger African, Asian, Latin American, or Indigenous coverage;
- more farmer-led and cooperative cases;
- more open agricultural software beyond data collection;
- more Global South open hardware, robotics, or sensing;
- more open data and biological-commons cases;
- cases that clarify what AI depends on upstream.

No additional quota is set at this stage.

Last reviewed: 2026-08-02.

Not legal advice.
