# Grocery concept — research mapping

Date: 2026-08-26
Purpose: A single map of what the grocery concept research covers, where each
document sits, and how the pieces relate. Updated as the research grows.

This is a live index. It is not a synthesis. It points to the files; the
files hold the ground.

## Structure of the research tree

`grocery/research/` is organized by topic, not by pass number. Each file is
a topic-grounded piece that can be read on its own and updated independently.
Cross-cutting findings that apply across several topics live in
`research-mapping.md` and in the in-file "finding for the concept" blocks.

Current files:

- `research-scan-1.md` — first-pass environmental scan across the six
  research areas plus emergent food data interoperability. Surface shape
  only; not verification. This is the overview document.

- `co-op-sector.md` — food co-op sector: US (NCG figures, how co-op
  ownership and governance work, the participation gap, viability and
  competitive landscape) and Canada (ISED-ISDE, Food Secure Canada 2024,
  CRS, Canadian Worker Co-op Federation, ResearchGate Canadian governance
  piece). Grounded in NCG 2024/2025 public summaries, UCLA Anderson Review
  of Korpeoglu et al. (2020), and the participation-gap sources (Hale 2018,
  Columinate, Healy 2005, FCI, Cooperatives First).

- `ofn-and-dfc.md` — Open Food Network and the Data Food Consortium as the
  closest existing test of the concept's federation/interoperability layer.
  OFN identity, open-source/Commons model, global-but-locally-led structure,
  scale snapshot (1,039 producers / 363 shops / 7,693 shoppers / 115,728
  orders — flagged as a snapshot), GitHub repo, concentration-disruption
  intent; OFN governance (sociocracy/holacracy blend, deliberation, lazy
  consent, community pledge v2.0, three-level subsidiarity, decision process
  from the 2021 Discourse thread, meritocratic/benevolent-dictatorship
  tension); OFN structural transparency at the consumer level (who grew the
  food, how, and the economics of the chain); DFC as an open data standard
  for short food supply chains (origin 2016-2018, problem statement, vision,
  v2.0.0 major release Feb 2026, ontology/taxonomy/prototype/connector tool,
  three named UK Food Data Collaboration pilots, FDC Commons governance with
  the Commons-Rules enforcement mechanism and the value-alignment
  requirement); OFN Canada's three-category open (Open Source, Open
  Standards, Data Sovereignty) and the access-vs-control distinction; and
  what OFN/DFC are not (not a grocery operation, not a full grocery-scale
  federation, not sourcing-as-structural, not a continuous participation
  environment, not a culture layer).

- `meaning-and-culture.md` — meaning/culture as a structural layer, grounded
  in Indigenous food sovereignty. NAFSA six pillars (Food Security, Food
  Access, Food Justice, Food Policy and Governance, Food Sovereignty, Land
  Access/Justice/Sovereignty); the Food Access point that access means
  relationship to foods that hold cultural and historical meaning and that
  those foods are often not available in stores or permitted under
  regulation; the Food Justice seed rematriation point (Indigenous-origin
  seeds in federal germplasm repositories, university seed banks, private
  collections, with bureaucratic/legal barriers; rematriation as restoration
  of nutrition, biodiversity, and seed stewardship knowledge); the Food
  Policy point (seed laws may restrict sharing, food assistance programs may
  define nutrition in ways that ignore cultural diets, funding structures
  prioritize large-scale non-Native models); the Food Sovereignty framing
  (grounded in relationships, responsibilities, place-based cultural
  knowledge; interconnected with language, ceremony, land, kinship,
  community governance; protection of ancestral knowledge, revitalization of
  traditional foods, restoration of Indigenous decision-making, integration
  of cultural protocols into food systems; rematriation of seeds, decolonization
  of food systems, return of inherent governance over land, water, and food);
  the Land pillar (land is not a commodity — it is a relative; Sogorea Te'
  Land Trust, Ekvn-Yefolecv, NEFOC Land Trust, First Light; Karuk Tribe
  eco-cultural restoration, Alaska Native marine mammal co-management, All
  Pueblo Grows seed lending library); the Mercille (Université de Montréal)
  Canadian scoping review, which names grocery stores as a food environment
  that Indigenous food sovereignty engages with (often problematic, sometimes
  a site of intervention) and which includes the principles of participation,
  food-as-sacred, and autonomy; and the 2024 ScienceDirect systematic review
  of successful IFS interventions (knowledge transmission through workshops,
  cultural connectedness through cultivation, preparation and consumption of
  traditional foods through community programs, community-based partnerships
  and collaborations). Flagged: the strongest existing evidence base for
  food-as-cultural-substance work is in community programs and partnerships,
  not in grocery operations.

- `traceability.md` — first-pass scan of food traceability: what traceability
  means (track/trace/granularity, the fork gap); the regulatory layer (FSMA
  204 CTE/KDE, EU General Food Law, SFCR/CFIA); the standards layer (GS1
  Global Traceability Standard, GDST, W3C Verifiable Credentials); what
  consumer-facing traceability actually delivers behind the QR code; the
  problems and failures. Key finding: mandatory traceability creates a real
  record floor, but the consumer-facing surface is the thin, contested,
  under-delivered part — precisely where the concept has design work. The
  concept should tap existing traceability at the record level, treat the QR
  code as surface technology, promise depth only where supply chains are
  short enough to make it real, and name the lot-level/commingling problem
  as the hard case.

- `consumer-feedback.md` — first-pass scan of consumer sentiment, comments,
  and feedback as product/producer data: the four layers (structured reviews,
  social commentary, community feedback, trust signals); how feedback
  attaches to food data today (retailer reviews, QR surface, venue-bound
  community feedback); social-proof effects; integrity problems (FTC fake-
  review rule, selection and performative bias, influencer incentives). Key
  finding: feedback is influential and structurally available but under-
  attached to portable product-linked food data — a real gap. The concept
  should treat feedback as a parallel layer to traceability (not a
  substitute), design explicitly for integrity problems, and has an open
  opportunity to make feedback a community-and-participation layer rather
  than a platform-reputation layer.

- `food-waste.md` — first-pass scan of the grocery food-waste sub-sector:
  scale (USDA/FDA 30-40%, ~6M tons unsold retail/year); the diversion
  ecosystem (donation-matching tools, Foodsharing.de as the open-source
  exception, Flashfood, compost/AD/animal feed); the opacity problem at four
  levels; the standards layer (FLW Standard, ReFED, EPA Excess Food
  Opportunities Map). Key finding: waste is core, measurable, and largely
  opaque — the concept's distinctive opportunity is to make the waste stream
  legible and participatory (publishing waste and diversion data FLW-aligned),
  with the fragmentation risk and donation friction as load-bearing design
  cautions.

- `open-in-culture.md` — first-pass scan of where open source has been applied
  to culture and what happened: the semantic migration of "open" from software
  to a general adjective; Creative Commons and the free culture movement as the
  licensing bridge; Wikipedia as the large case study in open cultural
  production; OpenGLAM; open journalism and open methods; openwashing and
  dilution as the negative case. Key finding: "open" has been stretched thin —
  a grocery operation saying "open source grocery" enters a diluted word, so
  the concept must name its own meaning of open precisely and expect the word
  to carry weakened associations from outside.

- `open-in-food.md` — first-pass scan of open source applied to food:
  Open Food Facts as the highest-profile case (proof that a crowdsourced open
  food data commons works at scale, bounded by the package); recipes as a
  knowledge commons (scattered, small, no large open recipe commons —
  itself a finding about the cultural shape of food knowledge); food
  ontologies and data infrastructure; the 2026 food-trends landscape; foodways
  and food as identity. Key finding: food has been opened at the data level,
  not at the operation, participation, or culture level — confirming the
  concept's five layers are not jointly realized in existing practice. The
  culture layer would enter a crowded, trend-language food-information
  landscape, and must hold the sacred/not-for-sale difference.

- `canadian-co-op-survey.md` — Canadian grocery-co-op survey (2026-08-28,
  fills suggested-target #6). Two populations: federated retail systems
  (FCL/Co-op Western Canada, Calgary Co-op's defection to a private
  supplier, Arctic Co-operatives in the North, FCNQ in Nunavik, FCAQ's
  65-70 food co-ops in Québec/New Brunswick) and community food co-ops
  (Karma Toronto — working-member model with a "closed system" history and
  near-death in 2022; Kootenay; East End; Fireweed Winnipeg — multi-
  stakeholder producer+eater co-op with sliding-scale membership; Ottawa
  Valley Food Co-op — internet-native ordering but no open information
  environment; the Québec participatory-supermarket movement). Key
  findings: co-op ownership is common in Canada, open structure is not;
  the five-layer open is realized nowhere in the sector; the North is the
  distinctive Canadian site where Indigenous ownership and grocery
  infrastructure meet; the strongest home-jurisdiction deep-dive targets
  are Karma, FCAQ, and Arctic Co-operatives.

- `canadian-co-op-inventory.md` — Canadian co-op infrastructure and named
  food co-ops. CMC "Co-operation across Canada" directory and map (crm.
  canada.coop), ~7,500 co-ops in Canada (91% non-financial, 8% financial,
  1% mutual), CMC representing 40% of all co-ops, DEI search functions
  (Indigenous, ethnocultural, women, youth, LGBTQ2S) and procurement search
  functions (retail, food, accommodation, etc.), and CMC as the only
  comprehensive database of co-ops, credit unions, caisses populaires and
  mutuals in Canada; Ontario Co-op Association directories; Wikipedia "List
  of food cooperatives" Canada section naming Karma Co-op (Toronto, one of
  Canada's oldest), Kootenay Co-op (Nelson, BC), East End Food Co-op
  (Vancouver), Ottawa Valley Food Co-op (Ottawa region, online), Co-op
  Atlantic (Eastern Canada); broader European context from the same list
  (France: La Louve, Superquinquin, La Cagette; Germany: FoodHub Munich,
  SuperCoop Berlin, köllektiv eG Cologne; Ireland: Dublin Food Co-op, The
  Urban Co-op Limerick; UK: Daily Bread, Essential Trading, Infinity Foods
  Workers Co-op, The People's Supermarket, Unicorn Grocery). Flagged: the
  Wikipedia list is "not exhaustive" and "limited to notable food
  cooperatives"; a proper Canadian survey would use the CMC directory and
  Ontario Co-op Association directories.

## What the research covers so far

### Environmental scan (research-scan-1.md)

A surface sweep across:
- Cooperative grocery and food co-ops (mature North America sector; NCG
  federation; Food Co-op Initiative; co-op directories; community-owned
  retail with values framing)
- Platform and network models in food (Platform Cooperativism Consortium;
  Federated Co-operatives Ltd.; UCLA Anderson piece; USDA/RD paper on
  federated cooperative relationships)
- Sourcing transparency and traceability (IBM Food Trust, Provenance, Sourcemap,
  Silal Fresh, academic literature; mostly feature-of-a-closed-chain rather
  than structural redesign)
- Community-governed and participatory grocery (Detroit People's Food Co-op,
  Mariposa, Mandela Foods, Apple Street Market, Village Market, Dorchester
  Community Food Co-op; Zitcer 2019; cooperative principles)
- Open-source/commons approaches to food (OSSI, Open Source Seeds, academic
  literature; real in seeds, adjacent elsewhere)
- Counter-concentration and regional/local food systems (Clapp 2025, USDA ERS,
  SARE, FAO Data Food Consortium, federal register notice on competition in
  food retail, food hub definitions)
- Emergent: food data interoperability (OFN, DFC, OpenTEAM, OFN UK Food Data
  Collaboration, Québec federated-data portal — the closest existing thing to
  the concept's federation/interoperability layer)

### Deep dives (co-op-sector.md, ofn-and-dfc.md, meaning-and-culture.md,
canadian-co-op-inventory.md)

Two deep dives plus two beginnings, as specified from the scan's suggested
targets:

- Deep dive 1: food co-ops and the participation gap (co-op-sector.md)
- Deep dive 2: OFN and DFC (ofn-and-dfc.md)
- Beginning 3: OFN governance (in ofn-and-dfc.md, well-grounded)
- Beginning 4: DFC current state (in ofn-and-dfc.md, well-grounded and more
  substantial than the earlier pass suggested)
- Beginning 5: meaning/culture via Indigenous food sovereignty (meaning-and-
  culture.md; the strongest existing reference for the concept's culture layer,
  but only one frame)
- Beginning 6: Canadian co-op inventory (canadian-co-op-inventory.md;
  infrastructure grounded, named co-ops identified, proper survey not yet done)
- Canadian grocery co-op survey (canadian-co-op-survey.md, 2026-08-28) —
  fills the home-jurisdiction gap; two populations (federated retail,
  community co-ops), none realizing the five-layer open

### First-pass scans (traceability.md, consumer-feedback.md, food-waste.md,
open-in-culture.md, open-in-food.md)

Five surface scans, each a map rather than a verification:

- traceability.md: the regulatory floor (FSMA 204, EU, SFCR), the standards
  plumbing (GS1 GTS, CTE/KDE, GDST), and the consumer-facing QR reality —
  what reaches the eater is thin. The record layer exists; the eater-facing
  surface is where the concept has design work.
- consumer-feedback.md: how consumer sentiment attaches to food data today,
  its behavioral force, and its integrity problems. Feedback is influential
  and under-attached to portable product-linked data — a real gap the concept
  could fill as a community layer rather than a platform-reputation layer.
- food-waste.md: the scale and four-level opacity of grocery food waste, the
  diversion ecosystem, and the FLW/ReFED standards layer. The distinctive
  opportunity: make the waste stream legible and participatory.
- open-in-culture.md: where "open" went when it left software, and what
  happened — Creative Commons, Wikipedia, OpenGLAM, and the openwashing/
  dilution negative case. The word "open" is stretched thin; the concept must
  name its own meaning precisely.
- open-in-food.md: Open Food Facts and the open-food-data landscape, recipes
  as a failed open commons, food ontologies, foodways. Food has been opened
  at the data level, not at operation/participation/culture — the same shape
  the grocery passes find.

Cross-cutting finding across the scans: food has been opened at the data
level, almost never at the operation, participation, or culture level. The
data layers (DFC, FLW, Open Food Facts) are real; the consumer-facing,
participatory, and cultural layers are consistently the thin part.

### What the research does not yet cover

- A proper Canadian grocery-co-op survey against the CMC directory (done
  2026-08-28 as canadian-co-op-survey.md; CMC directory enumeration itself
  remains a manual follow-up)
- Second passes on the five scans, per each scan's own "does not yet cover"
  block (FSMA 204 CTE/KDE content, platform-by-platform consumer-review map,
  Canada-specific food-waste regs and programs, Foodsharing.de in detail,
  organic/certification verification infrastructure, producer-facing
  traceability and feedback burden, community-governed feedback design) —
  consolidated in suggested-next-targets.md
- Viability framing grounded in the Korpeoglu et al. MSOM paper and the Yale
  "Competitive Conduct of Consumer Cooperatives" paper (the UCLA Anderson
  Review summary is the current framing, not the paper itself)
- OFN handbook and community pledge in detail (governance is well-grounded
  from three sources, but the handbook may contain more current detail)
- DFC standard documentation in detail (ontology, taxonomy, API, connector
  tool described but not deeply read)
- Food platform cooperatives applied specifically to food in depth
  (platform.coop is the hub; concrete food platform co-ops not yet identified)
- Culture/meaning outside Indigenous food sovereignty (diaspora food
  traditions, regional food cultures, family and community food practices as
  structural layers of a grocery operation)
- A dedicated engagement pass on Indigenous food sovereignty as a design
  reference rather than a values add-on
- Any operation that combines several of the concept's layers in one (most
  precedents address one or two layers)

## What this is for

The research tree is meant to be a working body of material that the concept
can draw on as it develops. It is not a deliverable for its own sake. As the
concept sharpens, some of these files will be revised, some will be extended,
and some may become less relevant. The mapping document (this file) is the
place to keep the shape legible.

## Conventions

- Findings for the concept live in in-file "finding for the concept" blocks
  and in the cross-cutting "On ..." blocks at the end of each deep dive.
- Items that are thin or unverified are flagged explicitly in "what remains
  thin or unverified" blocks.
- Suggested next targets live in "suggested next targets" blocks at the end
  of each deep dive and in the separate suggested-next-targets.md file.
- Claims are grounded where a source supports them and flagged as thin where
  they are not. This is a research body, not a verification pass.
