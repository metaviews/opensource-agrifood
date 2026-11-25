# Grocery concept — Finnish co-op ecosystem survey

Date: 2026-11-25
Scope: A first scan of the Finnish cooperative agrifood movement and its
infrastructure — filling a geography gap (the research tree covers US, Canada,
UK, Spain, Germany, France; Finland and the Nordics appear nowhere). The
corpus question: what does the Finnish co-op agrifood ecosystem look like,
and where is there an open/open-source layer or an instructive absence of one?

This pass was delegated as one bounded discovery unit (four named cells,
~20-query budget) and the load-bearing claims were then re-verified by the
program against the primary sources. Verification labels: **(V)** = quote
confirmed in the downloaded primary document; **(S)** = resting on the
delegate's text-layer search, not re-verified. Finnish quotes are verbatim,
untranslated.

## Method

A single delegated discovery pass (2026-11-25) across four cells — S-ryhmä/SOK,
Valio and the processing co-ops, REKO and the local-food movement, Pellervo
and the co-op infrastructure layer — with a strict per-finding contract
(claim + source URL + verbatim quote + licence-or-terms + status). The
program then downloaded eight primary sources and confirmed each load-bearing
quote in the source text: s-ryhma.fi (about + investors pages), valio.com
(owners and governance), Interreg Europe REKO entry, pellervo.fi, the
Dairy Reporter Maitosuomi piece, and the Hagolani-Albov & Ehrnström-Fuentes
REKO paper (Helda, University of Helsinki). This is a survey pass, not an
exhaustive enumeration; absence claims are stated with their search evidence,
not as verified absences.

## The shape of the Finnish sector

Finland has three co-op populations that barely touch each other:

1. **Mass consumer co-op retail** — S-ryhmä, a customer-owned federation at
   ~49% of Finnish grocery retail. Co-op grocery is not an alternative
   channel in Finland; it IS the mainstream channel, at a market share no
   community co-op movement anywhere in the research tree approaches.
2. **Farmer-owned processing co-ops** — Valio (dairy) and the meat sector's
   co-op-held listed companies, owning processors as limited companies.
3. **The informal local-food layer** — REKO rings and ruokapiirit: commons
   that scaled internationally on closed social infrastructure, with the
   legal osuuskunta form available but mostly bypassed.

Plus one infrastructure layer over all three: Pellervo, the national co-op
confederation.

## Population 1: S-ryhmä — co-op ownership at mass-market scale

- Structure: "S Group consists of 19 independent regional cooperatives and
  SOK, which is owned by the cooperatives" (s-ryhma.fi/en/about-us) — **(V)**.
  Customer-owners of the regional osuuskaupat own the central company.
- Market position, self-reported (citing Nielsen Grocery Shop Directory):
  grocery market share 47% (2022) → 48.8% (2024) → 49 (2025)
  (s-ryhma.fi/en/investors/about-s-group, table confirmed in page text) —
  **(V)**. Flagged: self-reported, single-source; Nielsen not accessed directly.
- Scale of membership: ~2.5 million members, ~78% of Finnish households,
  one of Finland's largest companies (The American Prospect, 2023) — **(S)**.
  Figures conflict by definition: s-ryhma.fi's own 2025 figure is 2.7M
  customer-owners; the S-Etukortti card count is ~4M (kuluttaja.fi) —
  members, card holders, and household share are different denominators and
  were not reconciled in this pass.
- Consolidation is how scale was reached: "the cooperative structure was
  consolidated and simplified, from 202 regional co-ops in the early 1980s
  to just 19 today" (Prospect) — **(S)**. Co-op form maintained *through*
  concentration, not despite it.
- The data layer, what is publicly knowable, is privacy journalism: a 2013
  Yle Kuningaskuluttaja register-access investigation found Kesko's K-Plussa
  carried more profiled customer data ("Keskolla on kanta-asiakkaistaan
  enemmän tietoa kuin S-ryhmässä" — Yle) and that S-Etukortti purchases
  "tallentuvat tietokantoihin, mutta niissä ei ole tunnistetietoja" — **(S)**;
  the current app-era practices were not examined.
- **Instructive absence (S, with search evidence)**: no open data, open
  datasets, or public APIs found from S-ryhmä/SOK — the transaction data of
  ~2.7 million member-owners surfaces publicly only as loyalty-card privacy
  journalism, never as open infrastructure.
- Significance for the concept: the extreme case of co-op scale. The
  Canadian survey's caution cases (FCL losing Calgary; conventional-retail
  operation under co-op ownership) find their strongest counterweight here:
  S-ryhmä *won* the grocery market as a co-op federation. But the five-layer
  open is as unrealized as anywhere — ownership is the only open layer, and
  the information environment behind it is among the most closed in the
  tree, known to the public only through regulators and journalists.

## Population 2: Valio and the processing co-ops

- Ownership: "Valio is a limited liability company owned by 12 cooperatives.
  Valio has a procurement agreement with four of these cooperatives, i.e. a
  total of 3,000 dairy farms" (valio.com owners-and-governance) — **(V)**;
  and "Legally, Valio shares are owned by the cooperatives, and in practice
  the owners are members of the cooperatives, i.e. milk producers" — **(V)**.
  Flagged from the delegate's own uncertainties: secondary sources say 13
  co-ops / ~3,200 farms / five procurement co-ops — valio.com is treated as
  current but is single-source; the page has evidently been updated over time.
- The co-op layer holds the processor's equity directly: Osuuskunta
  Maitosuomi (2019 merger of ItäMaito and Maitosuomi co-ops) "holds 42.7%
  of Valio's shares, making it Valio's biggest shareholder" (Dairy
  Reporter, 2019) — **(V)**.
- Technology layer, proprietary: route optimization of ~3,000 farm pickups,
  IoT metering on the truck fleet — "We use advanced technology and data to
  optimize the routes of our milk and delivery trucks" (valio.com
  logistics) — **(S)**. **Instructive absence (S)**: no open data or APIs
  found from Valio; the digital layer is closed end to end.
- Atria is a listed company (Oyj), not a co-op, but majority-held by
  meat-sector cooperatives (Itikka osuuskunta and Lihakunta, ~98% of the
  controlling KII share series, guaranteed Supervisory Board representation)
  — **(S)**. Pellervo's own statistics rank HKScan Oyj and Atria Oyj as the
  8th and 10th largest "co-operative businesses" by revenue — the national
  statistics blur the co-op/non-co-op boundary (Pellervo survey PDF) — **(S)**.
- The feed-supply co-op layer was de-cooperativized: Keskusosuusliike
  Hankkija (founded 1905) sold to SOK's Hankkija-Maatalous in 1988, and SOK
  sold Hankkija-Maatalous to Danish Agro over 2012–2016 (hankkija.fi
  history page) — **(S)**. Finland's largest feed producer is now
  foreign-owned and private.
- Significance for the concept: the Finnish processing model routes *all
  operating profit to the member farms* through a co-op→Oy shareholding
  chain — a different ownership answer than the consumer-co-op retailer —
  but the data/technology answer is identical to S-ryhmä's: co-op ownership
  nowhere implies data openness.

## Population 3: REKO and the informal local-food layer

- Origin: "The REKO model was initially conceived by Thomas Snellman, an
  organic farmer, who was distressed at the livelihood prospects for
  small-scale, organic farmers in Finland" (Hagolani-Albov &
  Ehrnström-Fuentes, Helda, CC BY-NC) — **(V)**. Launched 2013 in
  Swedish-speaking Ostrobothnia (Pietarsaari), inspired by the French AMAP,
  under the EkoNu development project.
- Mechanism: closed Facebook groups as the ordering platform; producers
  post offers, consumers comment to pre-order, payment direct, pickup at a
  shared point weekly or biweekly — "REKO is a situated example of how
  digital interaction can radically alter the producer/consumer interactions
  in a local food community without having to invest heavily in
  infrastructures" — **(V)**.
- Scale (single-source snapshots, all flagged): first ring 2013 with 7
  farmers and 39 consumers; "In 2021 there are 600 rings in Scandinavia and
  beyond in a total of 2 million members in 14 countries!" (COCOREADO
  roadmap) — **(S)**; "There are over 160 REKO rings in Finland at the
  moment" (Interreg Europe good-practice entry, undated) — **(V)**. No
  central registry exists; the counts are irreconcilable without
  enumerating Facebook groups.
- Governance: an informal commons, not a legal entity — "because there is
  no formal cooperation between Facebook and REKO, there is always the
  possibility that Facebook will alter the features or set-up without
  warning" — **(V)**. The model's openness sits entirely on closed,
  proprietary infrastructure.
- **The instructive absence, documented (V)**: "the founder of REKO, Thomas
  Snellman, was contacted frequently by both large and small IT firms who
  wanted to design and develop a platform that would work according to REKO
  needs" — and declined. No open-source (or any shared) tooling was adopted;
  attempted alternatives (REKOrder, Sweden's Local Food Nodes) stayed
  marginal or non-open — **(S)**.
- Spread was pure social replication: REKO crossed to Sweden in 2016 when
  local food enthusiasts in Grästorp "copied the Finnish model" (LiU thesis)
  — **(S)**. No licensing, no franchise, no organization — a copyable
  commons that scales without software.
- The successor contrast (same paper): the Helsinki-region "Food Hub" is
  producer-cooperative-driven and "relied on an influx of capital (project
  funding) to get up and running" — where the commons lacks structure, the
  co-op form enters with money — **(V)**.
- Ruokapiirit (community food circles): households ordering local/organic
  food directly from farmers, documented by the agriculture ministry —
  "Ruokapiirit ovat jäsentensä näköisiä kotitalouksien muodostamia ryhmiä,
  jotka hankkivat lähi- ja luomuruokaa suoraan viljelijöiltä" (mmm.fi
  guide) — **(S)**; some constitute themselves as osuuskunta or yhdistys:
  "Jos ruokapiiri on julkisyhteisö eli osuuskunta tai yhdistys, sopimukset
  tehdään yhteisön nimissä" — **(S)**.
- Herttoniemen ruokaosuuskunta (Helsinki) pioneered CSA-style
  kumppanuusmaatalous as an osuuskunta in 2011 and "toimi inspiraationa
  lukuisille muille ruokaosuuskunnille Suomessa" (lab.fi teaching PDF) —
  **(S)**; current operating status unverified in this pass.
- Uudenmaan Ruoka — a joint producer–consumer osuuskunta whose "Päätehtävänä
  toteuttaa Uudellemaalle foodhub" (lab.fi PDF) — plan-stage, **(S)**.

## Population 4: Pellervo and the co-op infrastructure layer

- Pellervo (founded 1899): "Pellervo is a service and a lobbying
  organisation for all Finnish co-operatives and mutuals and a forum for
  co-operative activities" (pellervo.fi/en) — **(V)**.
- Sector statistics, self-reported by the federation: "Over 3 000
  cooperatives and mutuals / Over 7 million memberships" (pellervo.fi) —
  **(V)** — in a population of ~5.5 million. Definitions conflict: PRH
  counted 4,045 registered cooperatives (2020), Statistics Finland 3,568
  operating enterprises (coops4dev report) — **(S)**; registered vs
  operating vs mutual-inclusive are different counts, recorded not averaged.
- Membership depth (Pellervo's own survey, hosted on pellervo.fi): "90% of
  Finnish adults have at least one membership, 56% have at least two and 26%
  have at least three" — effectively single-source federation statistics —
  **(S)**. Finland is plausibly the densest co-op society in the corpus by
  membership share, but the figure is federation-reported.
- Open-source co-op software in Finland: one documented adoption found —
  Lappeenrannan Ruokapiiri commissioned an ordering system "built on popular
  open source CMS WordPress and desired e-commerce functionality was added
  with popular e-commerce platform WooCommerce" (LUT thesis) — **(S)**; the
  licence of the custom code was not examined.
- **Instructive absences (S, with search evidence)**: no Open Food Network
  Finland instance and no Finnish Foodsoft deployment found (searches
  returned only global OFN/Foodsoft pages); no open-source tooling around
  REKO (it runs on closed Facebook groups by documented founder choice).

## What the survey says for the concept

- **Finland replicates the cross-cutting finding at both extremes.** The
  world's strongest consumer-co-op retail position (49% share, ~78% of
  households as members) and the most successful informal food commons in
  the tree (REKO, ~14 countries) both run completely closed data and
  technology layers. Co-op ownership produces open *governance* of retail
  nowhere and open *information* nowhere — the five-layer open is unrealized
  at Finnish mass-market scale even more starkly than in Canada.
- **S-ryhmä is the missing scale counterweight.** The research tree's co-op
  scale stories are all contraction or defection (FCL, Calgary, Co-op
  Atlantic). S-ryhmä reached near-total market dominance *as a co-op* — but
  through 40 years of consolidation (202→19 co-ops) and conventional retail
  operations. It is the case that shows co-op ownership is compatible with
  being the incumbent.
- **REKO is the tree's sharpest instructive absence.** It complements
  Foodsharing.de (the open-source exception): a commons that scaled
  internationally with *deliberately no* shared infrastructure, refusing
  bespoke platforms, and absorbing the platform risk (Facebook dependence)
  as the price. The research tree's software-stack finding (governance tools
  mature, data layer building, participation/culture layers unbuilt) gets a
  documented natural experiment: when the participants declined to build,
  the commons still scaled — on someone else's closed infrastructure.
- **The Finnish legal pathway is the informal→osuuskunta bridge**: ruokapiiri
  (informal) → ruokaosuuskunta (Herttoniemi 2011) → food-hub co-op with
  capital (Uudenmaan Ruoka). A cleaner gradient from commons to legal form
  than the tree's other geographies document.
- **The processing-co-op ownership pattern is a distinct fourth structure**
  the tree lacked: co-ops as shareholders of a limited company, all profit
  routed to farms (Valio), with the national statistics counting co-op-held
  listed companies (Atria, HKScan) as co-op businesses.

## What remains thin or unverified

- S-ryhmä's market share is self-reported citing Nielsen; membership figures
  (2.5M members / 2.7M customer-owners / ~4M card holders) conflict by
  definition and were not reconciled.
- The S-ryhmä data-infrastructure picture rests on 2013 journalism; current
  app-era practices (S-mobiili, S-Etukortti data handling today) unexamined.
- Valio's co-op/farm counts differ across sources (12 vs 13 co-ops; 3,000 vs
  ~3,200 farms); valio.com treated as current but single-source.
- REKO ring counts (160+ Finland undated; 600 rings/14 countries/2M members
  in 2021) are snapshots from different years and sources; no registry exists.
- Pellervo's 3,000+/7M/90% figures are federation self-reporting; the PRH
  (4,045 registered) and Statistics Finland (3,568 operating) counts use
  different definitions — recorded, not reconciled.
- Lappeenrannan Ruokapiiri's custom code licence unexamined; the LUT thesis
  licence not stated on the page as seen.
- Herttoniemen ruokaosuuskunta's and Uudenmaan Ruoka's current operating
  status unverified (single dated teaching PDF).
- Absence claims (no OFN/Foodsoft Finland, no S/Valio open data, no REKO
  tooling) are pass findings with stated search evidence, not exhaustive
  verification.

## Suggested next targets from this survey

- Curate the strongest entities as records (REKO; S-ryhmä; Valio +
  Maitosuomi; Pellervo; Lappeenrannan Ruokapiiri; Herttoniemi) — subject to
  the collection's open-layer inclusion test.
- A Nordic comparison extension: S-ryhmä's Swedish/Danish/Norwegian co-op
  counterparts (Coop Sverige/DK/Norge) — did the same consolidation happen,
  and does anyone publish open data?
- REKO outside Finland: whether any host country has built open tooling or
  formalized rings (Local Food Nodes Sweden as the nearest attempt).
- The Lappeenranta ordering system: find the code, if it is actually
  published, and licence-check it — the only Finnish open-stack lead.

## How this connects to the rest of the grocery research

- canadian-co-op-survey.md: this survey is its Finnish mirror — the same
  two-population shape (federated mass retail vs community/informal layer)
  with opposite outcomes at the top (S-ryhmä dominant; FCL contracting).
- open-source-software-stack.md: Finland adds the no-tooling-by-choice case
  (REKO) to the tree of adopted tools (Foodsoft, FoodCoopShop, OFN).
- multi-layer-operations.md: no Finnish operation combines the concept's
  layers; the nearest neighbours are structural (S-ryhmä's ownership open,
  information closed; REKO's structure open, infrastructure closed).
- co-op-sector.md: Pellervo's 90%-of-adults membership depth is the
  strongest known counterpoint to the participation-gap literature —
  membership is universal, but as ownership, not participation.

## Addendum (2026-11-25, second pass): Nordic counterparts, REKO abroad, and the Lappeenranta code hunt

Follow-up bounded pass (delegated, three cells; load-bearing claims re-verified
the same day) testing this survey's suggested next targets. Labels as above:
**(V)** re-verified at source, **(S)** resting on the delegate's search.

### The Nordic co-op picture: consolidation everywhere, openness nowhere

- **Sweden**: "Ica har på nationell nivå en marknadsandel om 50,6 procent,
  medan Axfood har 24,9 procent, Coop 16,7 procent och Lidl 6,3 procent"
  (Konkurrensverket report, 2026) — **(V)**; a secondary source puts Coop at
  14.2% — recorded unreconciled. KF's consolidation is deeper than Finland's:
  ~700 member societies in the 1950s → 246 (1969) → 132 (1990) → 26 today,
  ~3.9M members, 800+ Coop stores — **(S)** (Wikipedia-tier; kf.se's own
  history not read).
- **Denmark**: Coop Danmark is consumer-owned (Coop amba, with OK a.m.b.a.
  co-owner since 2024 after heavy losses), ~27% share, second behind Salling
  Group — down from FDB's historical 36-37% since ~2010. Erosion, not a
  merger wave; ownership had already centralized — **(S)** (Wikipedia/lex.dk).
- **Norway**: Coop Norge ~28.7% share at end-2025, 1,100 outlets, ~2.6M
  members across ~57 samvirkelag — verified as reported (secondary
  aggregator; annual report not read).
- **The open-data answer: none of the three co-ops publishes open data, a
  developer portal, or a public API** (search evidence stated in the pass).
  The one freely usable artifact found is Coop's sustainability-declaration
  methodology — "Den senaste versionen finns, fritt för alla att använda, på
  coop.se" — **(V)**, with no licence statement in the PDF text layer. Coop
  Norge's careers page describes an internal "API-first personalisation
  platform" for its 2.7M members — **(V)** — API maturity without public
  release. And the counter-model: **Salling Group**, the Danish private
  competitor, runs the region's only grocery developer portal with public
  APIs (stores, products, markdown/food-waste offers) — **(V)**, live page
  confirmed. Where Nordic grocery data opens at all, it opens corporately,
  not cooperatively.

### REKO abroad: informal everywhere; the tooling alternative died

- **Sweden**: "I januari 2021 fanns det runt 220 aktiva REKO-ringar med
  drygt 800 000 medlemmar i de olika Facebook-grupperna" (Hushållningssällskapet)
  — **(V)**, also carried in an SLU thesis; administration is volunteer
  self-organisation — "REKO-ringarna administreras och drivs av
  administratörer, vilka antingen är producenter eller konsumenter, som
  engagerar och organiserar sig lokalt" (SLU thesis) — **(V)**. Each ring
  sets its own rules; Hushållningssällskapet is a support/promotion body on
  behalf of Jordbruksverket, not a governing entity.
- **No host country has built a legal wrapper around REKO** — no
  association, co-op, or company found in any of the ~14 countries (search
  evidence stated in the pass).
- **The founder named the platform risk from the inside**: "At present, all
  REKO trades take place in closed Facebook groups, but how long can we
  count on Facebook retaining its popularity?" (Pedersöre REKO document) —
  **(V)**. Years later, no displacement has occurred.
- **Local Food Nodes** (Sweden, Röstånga ek Förening) was the structured
  open attempt: a donation-based economic association describing itself as a
  "fully financial transparent and not for sale, digital open source
  solution" for pre-order local farmers markets — **(S)** (the ITU WSIS page
  is JS-rendered; quote not verifiable); scale ~1,050 producers / 280 nodes
  / ~14 countries as of July 2023 — verified as reported (FAO AgTech
  Observatory page). **Now apparently defunct**: localfoodnodes.org serves a
  NameBright domain-parking page and the GitLab repository (once catalogued
  MIT in third-party lists) returns 404 — both checked 2026-11-25 — **(V)**;
  last good Wayback snapshot 2025-08-04 — **(S)**. The one platform-exit
  attempt with real scale died without an heir.
- **REKO Hub** (USA) built non-Facebook ring software free for producers —
  **(S)** (trade press; openness not inspected); no evidence it migrated any
  Nordic ring.

### The Lappeenranta code hunt: a GPL ancestor, no published successor

- The Sipilä 2016 thesis is open-access in LUTPub, but its repository record
  carries **no licence/rights field at all** — **(V)** (full metadata page
  enumerated; a sibling LUT thesis record does state CC BY 4.0). Thesis
  licence: not stated; the PDF's internal copyright page was not line-read.
- **The lineage is deeper than the survey recorded**: the system the
  WordPress build replaced — named "Ruokapiiri" — "is an open source GPL
  licensed application" — **(V)** (thesis text) — and the thesis references
  its code at `ruokapiiri.googlecode.com/svn/trunk` (Soukka, "ruokapiiri -
  Revision 92") — **(V)** as citation. Google Code shut down in 2016; the
  archive object for the project is access-denied today. Whether that GPL
  code survives anywhere is unknown.
- **No public code for the WordPress/WooCommerce successor was found**
  (GitHub/GitLab searched; search evidence stated in the pass);
  `lappeenrannanruokapiiri.fi` and `ruokapiiri.fi` no longer resolve —
  **(V)** (DNS checks, 2026-11-25). A separate fee-based national ordering
  system at ruokapiiri.fi (ministry guide, 2016) is likewise gone — **(S)**.
- **Verdict for the survey's "only open-stack lead": not open.** A small
  association's ordering stack, built on open platforms, with the custom
  layer unpublished and now unreachable. The thesis's own recommendation —
  publish custom extensions to the developer community — is the maintenance
  lesson, and it was not followed.

### What the addendum changes for the concept

- The cross-cutting finding now spans the Nordic region: co-op retail
  consolidation is universal (Finland 202→19; Sweden ~700→26), co-op
  ownership remains mass-market everywhere, and the data layer stays closed
  at every federation — while the private Danish competitor is the only
  retailer in the region opening APIs.
- REKO's no-tooling choice now has its control experiment: the structured
  open alternative existed, scaled to 14 countries, and died. Defunct
  infrastructure is the price either path can pay — and a defunct open
  platform is indistinguishable from a closed one once the repo vanishes.
- The small-organization maintenance finding (compatibility churn killing
  custom code) lands beside the grocery software-stack finding:
  Foodsoft-style shared maintenance exists as the answer, and the Finnish
  case shows what happens without it.

Records from this pass: `local-food-nodes.md` (candidate) and
`salling-group-developer-portal.md` (candidate), curated through the
examples indexing chain.

### What remains thin in this addendum

- KF (Sweden) and Coop Danmark figures are Wikipedia/lex.dk-tier; primary
  federation sources not read.
- Coop Norge figures are secondary-aggregator (verified as reported).
- The ITU Local Food Nodes self-description quote is unverified (JS page);
  the FAO scale figure is FAO-hosted aggregation of LFN's own claims.
- The Local Food Nodes MIT licence rests on third-party catalogues only;
  the primary repo is 404.
- The Sipilä thesis PDF's internal copyright page was not line-read; the
  licence status rests on the repository metadata record.
- Salling Group's API terms sit behind sign-in and were not inspected;
  "public API" is access-level openness only.

## What this is for

This survey closes a geography gap in the research tree's co-op evidence:
Finland shows co-op ownership achieving both mass-market dominance (retail)
and international commons scaling (local food) while leaving every
information and technology layer closed. The concept's novelty claim holds
in Finland; the instructive absences here are more clearly documented — and
more clearly *chosen* — than anywhere else in the tree.
