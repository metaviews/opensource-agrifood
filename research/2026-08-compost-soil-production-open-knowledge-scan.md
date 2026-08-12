# Scan: Open source compost, biochar, and soil-production knowledge — G-OSA-23

Research date: 2026-08-12
Method: bounded discovery pass (first cycle on this cell); 8 targeted query sets (community-scale compost hardware, vermicomposting open designs, biochar kiln designs, compost monitoring sensors, open compost/soil curricula, L'Atelier Paysan compost implements, GitHub open-source compost projects, permies/OSEC compost threads); 4 primary sources read in full (Compost for Good design guide + operating manual landing page, Open Source Ecology Kon-Tiki wiki, IBI Open Source Biochar Technologies page, Biochar Journal Kon-Tiki democratization article); 2 GitHub repos inspected (zappityzap/compost-sensor, danielneil/Smart-Worm-Habitat). Purpose: establish what open-licensed compost/soil-production designs, hardware, and knowledge exist in the public record.

## Headline finding

**A genuine open layer exists in compost/soil production — but it is thin, fragmented across three sub-domains, and pulls in opposite directions on the open-source definition.** The strongest hardware case is the Compost for Good rotating drum composter (free open-source design guide + operating manual, ~$15K build vs $40-150K commercial, 35,000 lb/yr community scale, NY/Adirondack/ANCA). On biochar, the Kon-Tiki flame-curtain kiln is the standout — designed in Switzerland 2014, published open source, PLOS ONE Emissions and Char Quality paper (2015), spreading to farmers via open technology transfer, Ithaka Institut as the anchor, IBI hosts an open-source biochar technologies page with multiple kiln designs and an open-source pyrolysis plant guidelines doc. On worm/compost monitoring, two small GitHub projects exist: zappityzap/compost-sensor (Arduino+LoRa, MIT license, 2 stars, active 2024) and danielneil/Smart-Worm-Habitat (GPL-3.0, continuous-flow worm bin with sensors, 3 stars, last commit May 2022). On knowledge/soil-health curriculum, Earth Matter's Open Source Curriculum (NYC compost learning center) and a handful of extension publications round out the layer — knowledge, not hardware.

The open layer **does not reach farm-scale soil production as a coherent open system.** No open-licensed design for a full on-farm compost operation (receiving → mixing → composting → curing → screening → application) was located. No open-source vermicomposting design rises above hobby/small-scale except the Smart-Worm-Habitat concept (unbuilt, dormant). No GitHub project for open compost process control (turning schedules, C:N calculators, temperature tracking at scale) was located beyond hobby sensors. L'Atelier Paysan's tool designs include some compost-adjacent implements (pitchforks, windrow tools) but no dedicated compost-production system. The cell resolves into four shapes: (1) open community-scale compost hardware (Compost for Good — the one robust case), (2) open biochar production hardware (Kon-Tiki + IBI ecosystem — robust but separate from compost), (3) open compost/vermi monitoring and smart-bin projects (thin, hobby-scale, GitHub metrics low), (4) open compost/soil knowledge and curriculum (real but not hardware — Earth Matter, extension services, IBI guidelines).

## Why this cell matters

Compost and soil production is a domain where open-source hardware + knowledge could plausibly be dense — it is small-scale, biological-process-adjacent, knowledge-intensive, often farmer/community-led, and the closed alternative (commercial compost turners, biochar kilns, proprietary soil amendments) is expensive. If the openness thesis holds anywhere outside software, it should be here. It also connects to G-OSA-13 (hardware licensing), G-OSA-14 (replication evidence), G-OSA-15 (Global South — the Kon-Tiki spread to Nepal and the biochar open-source transfer model are directly relevant), and G-OSA-21 (biological commons — compost/soil microbial communities are a different commons shape than seeds).

## Currents

### Current 1 — Community-scale open compost hardware is real but singular

Compost for Good is the one designed, documented, free, open-source commercial-scale composter in the record. The design guide (PDF, 2022) and operating manual (PDF, 2021) are real downloadable primary sources, hosted by AdkAction/ANCA, with a stated goal of enabling others to build their own. Material cost ~$15K vs $40-150K commercial. Sizing: 35,000 lb unsorted food waste/year, ~250-person community. The design is a rotating drum (high-flow in-vessel), not a windrow or static-pile system. Whether any other community has built one from the guide is unverified — the guide's own language ("further modifications can be made to reduce material and labor costs") acknowledges an expectation of iteration, not replication tracking. The project has since moved under ANCA (2024), with a Human Urine Research and Demonstration facility (HURD) added 2024 — urine-compost integration is a new open-knowledge frontier, not yet a design.

### Current 2 — Biochar has the most coherent open hardware story, but it is a separate sub-domain

The Kon-Tiki flame-curtain kiln is the anchor: designed 2014 in Switzerland by Hans-Peter Schmidt and Paul Taylor (Ithaka Institut), published open source in the Biochar Journal, with a PLOS ONE peer-reviewed paper (Trials 2015: "Emissions and Char Quality of Flame-Curtain Kon Tiki Kilns for Farmer-Scale Charcoal/Biochar Production") documenting 35% CO reduction and 36% methane reduction vs open burning, spreading to farmers via open technology transfer (Nepal Terra Preta project was the original driver). The OSE wiki hosts the Kon-Tiki page as part of its machine design commons. IBI hosts an "Open Source Biochar Technologies" page with multiple kiln designs (Wilson biochars, TLUDs, Jolly Roger Ovens, Starseed biochar oven, Liberty biofuel processor), an open-source pyrolysis plant guidelines doc (32 pages, Pan/Ding/Joseph/Li/Christo), and a small-scale biochar production paper (Domermuth, Appalachian State). Kelpie Wilson's backyard methods and Dr. Hugh McLaughlin's TLUD/JRO designs are the granular DIY layer. This is the most mature open-hardware sub-domain in the cell — but it is biochar production, not compost, and the two only meet at the soil-amendment application layer.

### Current 3 — Open compost/vermi monitoring and "smart" bins exist at hobby scale

Two GitHub projects: zappityzap/compost-sensor (Arduino+LoRa, MIT, 2 stars, 47 commits, last Nov 2024 — active hobby project, soil+air temp, LoRa to Home Assistant via MQTT) and danielneil/Smart-Worm-Habitat (GPL-3.0, continuous-flow worm bin with moisture/pH/temp sensors, 3 stars, 543 commits, last May 2022 — concept/design phase, no evidence of built units). Neither has OSHWA certification. Neither has documented replication. Both are hobby/small-scale. The "smart compost" idea — sensor-driven turning, temperature tracking, C:N estimation — is nascent in the open record. A Hacker News "Show HN: we open-sourced our compost monitoring tech" surfaced (2024) but is a product announcement, not a located open repository. The gap between hobby sensors and a process-control system that actually manages a compost operation at scale is unbridged in the open record.

### Current 4 — Open compost/soil knowledge and curriculum exist, but are knowledge, not builds

Earth Matter (NYC) publishes an "Open Source Curriculum" of curated DIY compost activities at its Compost Learning Center — knowledge, not hardware design. Extension services (OSU EM-9034 "Composting with Worms," various USDA/NIFA extension publications) provide open-access how-to knowledge but are not "open source" in the licence sense — they are public-domain or CC educational material. The Biochar Journal and IBI's open-source technologies page are the knowledge+hardware hybrid: peer-reviewed open article + downloadable designs + open technology transfer. L'Atelier Paysan's cooperative tool designs include compost-adjacent hand tools (pitchforks, compost Turner implements) but no dedicated compost system — their open layer is machinery-design-sharing, not soil-production-process knowledge. The broader agroecology/permaculture knowledge commons (permies.com compost forum threads, OSSEC build wikis) carries informal open knowledge but is not licenced-design documentation.

## Working matrix

Rows: sub-domains. Columns: open layer type.

| Sub-domain | Open hardware design | Open licence verified | Open knowledge/curriculum | Evidence of builds/replication | Farmer/community scale | Monitoring/sensing open |
|---|---|---|---|---|---|---|
| Community-scale compost (drum, in-vessel) | Compost for Good rotating drum — design guide + manual (PDF, free) | Not formally OSHWA; "free, open-source design" stated | Operating manual, education, town halls | Unverified — no located build report | 250-person community, 35K lb/yr | None located |
| Biochar production (flame-curtain kiln) | Kon-Tiki conical kiln — published open source, PLOS ONE paper, OSE wiki | Open source by publication; IBI hosts multiple designs | Biochar Journal article, IBI guidelines, Ithaka transfer model | Spread to Nepal, Australia, Tasmania, parts of Africa/Asia via open transfer — documented but not systematically tracked | Farmer-scale: 700L char in 4-5 hrs; small farm/community | None located (char quality lab methods, not on-kiln sensing) |
| Biochar production (backyard/DIY TLUDs, retorts) | Wilson TFOD, McLaughlin TLUD/JRO, Starseed oven, Liberty processor — all downloadable designs | Individual designers; CC/public-domain/by-download implied | IBI "Open Source Biochar Technologies" page as aggregator | Anecdotal backyard builds; no systematic replication record | Backyard to small farm | None located |
| Vermicomposting (worm bins) | Smart-Worm-Habitat CFT worm bin concept (GPL-3.0) — unbuilt | GPL-3.0 (code); hardware design files in repo | Engineering doc in repo; concept-stage | No located built units (dormant repo) | Small/home scale | Built-in: moisture, pH, temp sensors |
| Compost monitoring (sensors) | zappityzap/compost-sensor (Arduino+LoRa, MIT) — built hobby project | MIT | README build doc | Single-build hobby; 2 stars, 0 forks | Small compost pile monitoring | Core function: soil+air temp, LoRa to HA |
| Compost/soil knowledge & curriculum | None (knowledge only) | CC/public-domain/extension | Earth Matter Open Source Curriculum; extension pubs; IBI guidelines; permies forum | N/A (knowledge dissemination) | Any | None |

Blank cells named as gaps: no open-licensed farm-scale compost operation design (receiving→screening→application as a system); no open compost process-control software (turning schedules, C:N, temperature tracking at scale); no OSHWA-certified compost or vermi hardware; no documented independent builds of Compost for Good drum outside the original; no open-source soil-production knowledge base that is a designed, licenced, maintained commons rather than scattered extension/forums.

## Cases added (records)

- records/compost-for-good.md — curated (community-scale rotating drum composter; free open-source design guide + operating manual; AdkAction/ANCA; NY Adirondack; ~$15K build vs $40-150K commercial; 35K lb/yr, 250-person community; unverified replication)
- records/kon-tiki-kiln.md — curated (flame-curtain conical biochar kiln; designed 2014 Switzerland, Schmidt/Taylor, Ithaka Institut; PLOS ONE 2015 paper; open-source technology transfer to Nepal + others; OSE wiki; IBI ecosystem; farmer-scale 700L/4-5hr; 25-30% yield DM; lower CO/Methane vs open burn)
- records/ibi-open-source-biochar.md — curated (IBI "Open Source Biochar Technologies" page; aggregator of multiple kiln designs: Wilson TFOD, McLaughlin TLUD/JRO, Starseed oven, Liberty processor; 32-page pyrolysis plant guidelines (Pan/Ding/Joseph/Li/Christo); Domermuth small-scale paper; CC/public-domain/by-download licensing mix; not a single licenced commons)
- records/compost-sensor.md — candidate (zappityzap/compost-sensor; Arduino+LoRa, MIT license; soil+air temp, LoRa RSSI, battery; Home Assistant via MQTT; 2 stars, 0 forks, active 2024; hobby single-build; no OSHWA; no replication)
- records/smart-worm-habitat.md — candidate (danielneil/Smart-Worm-Habitat; GPL-3.0; continuous-flow worm bin concept with moisture/pH/temp sensors; 3 stars, 543 commits, last May 2022; unbuilt, dormant; no OSHWA; no replication)

## Contested claims

### "Compost for Good is an open-source hardware project."

- Asserter: Compost for Good itself ("free, open-source community-scale composter design," design guide + operating manual free to download).
- Contester: no OSHWA certification located; no specific open-source hardware licence (CERN OHL, Solderpad, etc.) located — the "open source" is stated in project language, not licenced in a hardware-recognised form; the design guide is a PDF, the operating manual is a PDF — open access, open use, but licence-formalism is unverified.
- Status: open-access design, licence-formality unverified — the cell's honesty requires naming this; it is "open source" in the project's declared sense, not in a verified OSHWA/licence sense. Matches the corpus openness-discipline phrase "openly published ≠ open-licensed" but is more charitably "openly published, licence-formality absent."

### "Kon-Tiki is open-source biochar hardware."

- Asserter: Biochar Journal article "published open source"; OSE wiki hosts it as part of machine design commons; IBI "Open Source Biochar Technologies"; Ithaka open technology transfer model.
- Contester: the primary open artefact is the published article + design descriptions + the kiln's demonstrated buildability; formal hardware licence on the kiln design itself is not located on the OSE wiki page or the Biochar Journal page; the open-source character is real but lives in publication + transferability, not in a downloaded licence file. The PLOS ONE paper is open-access research, not a hardware licence.
- Status: open-source by publication and practice, licence-formality thin — stronger than Compost for Good in that multiple independent builds are documented (Nepal, Australia, Tasmania), but the licence-formalism gap is parallel.

### "Biochar open-source technologies form a coherent open commons."

- Asserter: IBI page collects multiple designs under an "open source" banner; CC licensing is mentioned as an alternative to patents.
- Contester: the page itself is an aggregator; individual designs carry different provenance and licensing (by-download, CC, public domain, designer-specific); there is no single licenced commons here — it is a curated collection of open-access designs, not a single licenced hardware project. Matches the "openly published ≠ open-licensed" and "collection ≠ commons" discipline.
- Status: open-access aggregation, not a single licenced commons — honest framing.

## Gaps

### G-OSA-23 itself (the cell)

- Why it matters: compost/soil production is a domain where open-source hardware + knowledge could be dense; testing the openness thesis here is a distinct thin cell from machinery (G-OSA-13/14), Global South hardware (G-OSA-15), and biological commons (G-OSA-21).
- Evidence available: this scan. 5 records, 3 shapes + honesty about the absent farm-scale system.
- Next verification: replication verification for Compost for Good drum (org contact / build reports); OSHWA licence-formality check on Kon-Tiki (Ithaka/OSE contact); Global South vermi/compost open designs (Spanish/Portuguese/French local-language pass).
- Status: partially resolved (2026-08-12; shapes established, replication and licence-formality outstanding).

### Residual sub-gaps

- G-OSA-23a: Compost for Good replication — did anyone build the drum from the guide? (organisation-level verification)
- G-OSA-23b: Kon-Tiki licence-formality — does Ithaka/OSE carry a licenced hardware file? (primary contact)
- G-OSA-23c: Global South open compost/vermi knowledge — does the Global South have an open-knowledge layer here that the Global North doesn't (or vice versa)? (local-language pass)
- G-OSA-23d: open compost process-control software — turning schedules, C:N, temperature tracking at scale. (GitHub/code search, none located)

## Actors

- Compost for Good / AdkAction / ANCA (Jay Smart, design lead; now under ANCA) — non-profit community-compost advocacy, NY Adirondack. Bias: advocacy organisation with a project to promote; the design guide is a real primary source but the "open source" framing is the project's own.
- Ithaka Institut / Hans-Peter Schmidt / Paul Taylor (Kon-Tiki designers) — Swiss research/non-profit; biochar advocacy + research. Bias: originators of the design, published it openly; the Biochar Journal article is their authored advocacy+technical piece; PLOS ONE paper is independent peer review.
- International Biochar Initiative (IBI) — industry/standards body hosting the open-source technologies page. Bias: aggregator, not a licenced commons; the page collects designs with mixed provenance.
- Open Source Ecology (OSE) — machine design commons wiki. Bias: hosts Kon-Tiki as part of its commons; the wiki page is community-edited, not a primary design licence.
- zappityzap (compost-sensor) — individual hobbyist developer, MIT license. Bias: hobby project, single-build, low metrics; the MIT licence is real and verified.
- danielneil (Smart-Worm-Habitat) — individual developer, GPL-3.0, concept stage. Bias: concept/unbuilt; GPL-3.0 on code is real; hardware design files are in the repo but the system was not built.
- Earth Matter (NYC) — compost education non-profit, open-source curriculum. Bias: education organisation; curriculum is knowledge, not hardware.

## Freshness model

- Compost for Good design guide/manual: `document` — re-verify annually; project moved to ANCA 2024, HURD facility added 2024; design guide is 2022, manual is 2021.
- Kon-Tiki: `framework` — re-verify every 2 years; PLOS ONE paper 2015, Biochar Journal article 2020; ongoing transfer to new regions is the moving part.
- IBI open-source technologies page: `document` — re-verify annually; page last substantively updated 2024 (IBI PDFs dated 2024).
- compost-sensor: `example` — confirm annually; last commit Nov 2024; hobby project, metrics low.
- Smart-Worm-Habitat: `example` — confirm annually; last commit May 2022; dormant.
- Earth Matter curriculum: `document` — re-verify annually.
- This scan doc: `framework` — re-verify when a cycle adds a record or resolves a residual.

## What this scan doesn't do

1. It does not verify Compost for Good drum replication — no located build report outside the original project; this is the single most important residual and requires org contact or structured build-report search.
2. It does not resolve Kon-Tiki licence-formality — the open-source character is real and well-documented in publication/practice, but a formal hardware licence file on the design itself was not located on the OSE wiki or Biochar Journal page; Ithaka/OSE contact would be needed.
3. It does not cover windrow/compost-turner open designs — the search surface was rotating-drum in-vessel, biochar kilns, worm bins, and monitoring; commercial compost turners and windrow systems were not systematically searched for open designs.
4. It does not assess the quality of the compost or biochar produced by these open designs relative to commercial equivalents — the Compost for Good manual promises high-quality soil amendments; the Kon-Tiki paper documents char quality; independent comparative quality evidence is not in this pass.
5. It does not resolve the Global South layer — the Kon-Tiki transfer to Nepal is located (a Global South instance of open technology transfer), but no systematic Global South vermi/compost open-design search was done; this is the natural next cycle if the cell is revisited.
6. It does not claim that open compost/soil-production knowledge is dense or mature — the honest finding is the opposite: a genuine but thin and fragmented open layer, with the farm-scale system absent.

## Sources

- Compost for Good, "Free Open-Source Composter Design Guide" (PDF, 2022) and "Composter Operating Manual" (PDF, 2021), AdkAction/ANCA: https://www.adkaction.org/project/compost-for-good/ (checked 2026-08-12)
- Compost for Good design guide PDF: https://www.adkaction.org/wp-content/uploads/2022/02/design_guide_2021.pdf
- Compost for Good operating manual PDF: https://www.adkaction.org/wp-content/uploads/2021/07/manual_2021_web.pdf
- Open Source Ecology wiki, "Kon-Tiki Kiln": https://wiki.opensourceecology.org/wiki/Kon-Tiki_Kiln (checked 2026-08-12)
- Ithaka Institut / Schmidt & Taylor, "Kon-Tiki — the democratization of biochar production," Biochar Journal (2020): https://www.biochar-journal.org/en/ct/39 (checked 2026-08-12)
- Trials et al., "Emissions and Char Quality of Flame-Curtain Kon Tiki Kilns for Farmer-Scale Charcoal/Biochar Production," PLOS ONE (2015): https://pmc.ncbi.nlm.nih.gov/articles/PMC4871524/
- International Biochar Initiative, "Open Source Biochar Technologies": https://biochar-international.org/about-biochar/how-to-make-biochar/open-source-biochar-technologies/ (checked 2026-08-12)
- zappityzap/compost-sensor (GitHub, MIT license, 2 stars, 47 commits, last Nov 2024): https://github.com/zappityzap/compost-sensor (checked 2026-08-12)
- danielneil/Smart-Worm-Habitat (GitHub, GPL-3.0, 3 stars, 543 commits, last May 2022): https://github.com/danielneil/Smart-Worm-Habitat (checked 2026-08-12)
- Earth Matter, "Open Source Curriculum," Compost Learning Center: https://earthmatter.org/compost-learning-center/open-source-curriculum/ (checked 2026-08-12)
- OSU Extension, EM-9034 "Composting with Worms": https://extension.oregonstate.edu/catalog/em-9034-composting-worms (checked 2026-08-12)
- permies.com, "Open-source community-scale rotating drum composter for 250 person community" (Jay Smart post, 2023): https://permies.com/t/192547/composting/Open-source-community-scale-rotating (checked 2026-08-12)

Not legal advice.
