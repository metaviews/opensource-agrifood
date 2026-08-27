# Food waste — first-pass scan

Date: 2026-08-27
Purpose: A first-pass sweep across the food-waste sub-sector in grocery operations —
the scale and opacity of retail food waste, the emerging diversion programs that connect
waste to food banks, farmers, and composting operations, the opportunity for an open
source grocery operation to make waste and diversion legible and participatory, and the
emerging standards and data aspects. This is a surface scan, not a verification pass.
Claims are flagged for follow-up, not settled.

This file is part of the grocery concept research tree (see `research-mapping.md`). The
question is not "how do we eliminate food waste" or "how do we build a donation app," but
"What already exists, by what shape, with what gaps and what data, and what could an open
grocery operation do with the waste-and-diversion layer that most of the sector keeps
opaque and hidden."

## How this scan was done

Five parallel web searches: (1) the scale and reality of grocery retail food waste and
what happens to unsold food; (2) emerging diversion programs and destinations (food banks,
farmers, composting, anaerobic digestion, animal feed); (3) emerging food-waste measurement
standards and data/traceability; (4) the opacity, hiddenness, and data-gap problem; and
(5) the open-source opportunity and the emerging coordination/digital layer. A core set of
outcome-bearing pages was then read in depth: the Pacific Coast Food Waste Commitment four-
year retail analysis; ReFED's problem page and solutions page; the EPA Excess Food
Opportunities Map; the FLW Standard pages (WRI, WBCSD, UNEP launch press release, BioCycle);
the Food Dive launch report; the NYC Food Policy tech-solutions piece; and the consumers/
retailers PMC review of food-waste impact (Todd 2024). The result is a shape document: the
sub-sector as it exists, the diversion landscape, the data-and-standards layer, the opacity
problem, the open-source opportunity, and the questions the scan raises.

## 1. The grocery food-waste sub-sector — what it is and how big it is

Food waste is a core grocery-operations element, and it has its own measurable size,
destinations, and friction. The figures below are the best-available public signals; they
are not reconciled against each other and are flagged as needing follow-up rather than
treated as settled.

- The Pacific Coast Food Waste Commitment (PCFWC) four-year retail analysis (2019-2022,
  latest available year) is described as the "best-in-class dataset for tracking retail food
  waste." Over the four-year period, grocery retailers in the regional operations decreased
  the number of tons of unsold food by 25% — nearly 190,000 tons of food valued at $311
  million — representing a decrease in the amount of food at risk of going to waste. The
  analysis also identified positive destination trends: a 20% increase in the rate of unsold
  food being donated, and a 28% increase in the rate of unsold food getting composted. Most
  unsold food typically ends up going to waste destinations like landfill, where it
  decomposes and generates methane (a potent greenhouse gas).
- The PCFWC framing of the scale: across the U.S., the grocery retail sector generates nearly
  six million tons of unsold food annually — including all food that went unsold in each
  grocery store food department, both edible food and inedible scraps (pits, peels, etc.).
  In the United States, 38% of food goes unsold or uneaten throughout the food system, with
  the majority of this becoming food waste.
- The operational tactics the PCFWC retailers cite for reaching the goal: working with Afresh
  on AI-based technology to help order the right produce in the right quantities; partnering
  with Uber to address local donation pickup challenges through sponsored delivery at select
  stores; and for food that can't be sold or donated, diverting to animal feed, anaerobic
  digestion, or composting.
- The department-level retail value of unsold food: Prepared Foods accounted for 22.4% and
  Breads & Bakery for 15.8% of the total retail value of unsold food — i.e., the highest-
  value waste is concentrated in a few departments, which is a design-relevant concentration
  fact.
- ReFED's retailer destination figures: donations — 857K tons (21.5% of what ReFED tracks
  for retailers).
- Older-but-still-cited figures: about 30% of food in American grocery stores is thrown away;
  U.S. retail stores generate about 16 billion pounds of food waste every year (RTS, 2026
  article). USDA/FDA framing: in the U.S., food waste is estimated at between 30-40 percent
  of the food supply.
- Global framing (UN): nearly 13.2% of food is lost between harvest and retail, and another
  19% is wasted at the household, food service, and retail stages.
- The Biological Diversity report card on U.S. supermarkets' path to zero food waste: Kroger,
  Walmart, and Ahold Delhaize USA are the only three grocery chains to publicly commit to
  zero food waste by 2025 and prioritized tracking food waste. That is the opacity indicator
  in a sentence: three chains publicly committed and tracking; the rest largely opaque.

The sub-sector is real, measurable, concentrated in a few high-value departments, and
concentrated in a few destinations (landfill, donation, compost, anaerobic digestion, animal
feed). The scale figures are rough and overlapping (6M tons unsold per year; 16B pounds retail
waste; 38% of food unsold or uneaten system-wide; 30-40% of the food supply), and the scan
treats them as approximate indicators rather than reconciled facts.

## 2. What happens to unsold food — destinations and the diversion ecosystem

The destinations for unsold food form a diversion hierarchy, and several of them are emerging
programs with real infrastructure and friction.

### The Food Recovery Hierarchy (EPA) — the governing frame

EPA created the Excess Food Opportunities Mapping tool to help move food and food residuals up
the Food Recovery Hierarchy. The hierarchy is the governing frame for where waste should go,
in preference order: source reduction; feed hungry people (donation); feed animals; industrial
uses (e.g., anaerobic digestion, rendering); compost; landfill/incineration. The concept's waste
design should be organized around this hierarchy rather than around "divert" as a single goal.

### Donation to people — food banks, pantries, soup kitchens, community fridges

- The EPA Excess Food Opportunities Map is the public infrastructure for this layer: a food
  rescue locator, plus composting and anaerobic digestion facilities, plus food banks, food
  pantries, and soup kitchens; the map helps learn about potential sources of excess food in a
  region and potential non-landfill recipients; shown feedstocks include those suitable for
  compost, anaerobic digestion, or animal feed.
- Donation-matching software and apps (NYC Food Policy): MEANS — food banks and pantries post
  the food items they need and specify how far they will travel; as of mid-2019, 820M+ pounds
  recovered, 2M+ pickups, 5100+ nonprofits; designed in partnership with Google.org; monitors
  pickup activity and generates donation receipts. Waste No Food (California, founded 2011, ~
  1M meals delivered). Copia (SF Bay area) — businesses request a pickup of surplus food through
  Copia's platform, a Copia driver picks up and delivers to people in need; emphasizes donation
  and tax write-offs. Food Cowboy — a comprehensive model giving companies several ways to
  donate, whether food is in a warehouse or in transport; a truck driver can report a rejected
  food delivery and find donation recipients conveniently located along the truck route. Chow
  Match, Mezzo.
- Food sharing: Foodsharing.de — an open source German website founded in 2012 by Valentin
  Thurn, a dumpster-diving filmmaker who saw great potential in sharing information about
  leftovers and free food via the internet; operating as a nonprofit, the website enables
  individuals, supermarkets, restaurants, bakeries, and food stalls to post information about
  leftover food and trade surpluses, or to arrange pickups; almost 200,000 members; helped
  prevent more than 50 million pounds of food from being thrown away. OLIO — an app connecting
  neighbors with one another and with local shops to share surplus food rather than discard it;
  as of mid-2019, 1M+ users shared over 1.5M portions of food. Solidarity Fridges (Swapping
  Leftovers via Public Refrigerators) — a network of 100 food-sharing sites in Berlin and other
  cities, with public refrigerators and shelves to make pickups and drop-offs easier.
- Discount/retrieval retail models: Flashfood — a Canadian startup that connects surplus or
  ready-to-discard-but-still-safe food from grocery stores at discounts of up to 50%; the
  platform syncs grocery inventory systems with a mobile app to offer discounts on products with
  approaching sell-by dates. Spoiler Alert — an online marketplace where farmers and food
  businesses donate excess food to nonprofits or sell it at a discounted price. CropMobster —
  another platform helping farmers and food entrepreneurs offload surplus product at discounted
  prices.
- Chefs to End Hunger + Vesta's Waste Not 2.0 tracking — embedding donations directly into the
  distribution system so recovery becomes part of everyday workflows; the Waste Not tracking
  system lets culinary teams clearly identify where surplus food is directed — landfill, compost,
  or donation — strengthening waste-stream management and enabling more intentional operational
  decisions; data is recorded in real time using the Waste Not 2.0 tablet; Vesta manages donation
  logistics, streamlining the process and making food recovery more efficient and reliable.

### Diversion to farmers, compost, and anaerobic digestion — the "can't be sold or donated" layer

- PCFWC retailers divert food that can't be sold or donated to animal feed, anaerobic digestion,
  or composting.
- ReFED's solutions list: "Seamless Systems Integration" — technologies that easily integrate with
  existing operations (POS, inventory management platforms, logistics software) to improve supply
  chain visibility, enable better tracking of product freshness, and streamline donation
  coordination to maximize food utilization. "Shared Platforms for Idle Assets, Surplus, & Byproducts"
  — digital platforms that facilitate sharing of underutilized assets (cold storage, transportation,
  surplus food, food byproducts) to improve efficiency, increase accessibility, and ensure food and
  resources are directed to where they are needed most.
- Composting and anaerobic digestion are the downstream destinations for food that cannot be donated
  or fed to people. The EPA Excess Food Opportunities Map lists composting facilities and anaerobic
  digestion facilities as recipient types alongside food banks/pantries/soup kitchens. Oregon Metro
  passed a business food scrap separation requirement to increase the amount of food waste converted
  to compost or energy and reduce what ends up in landfills. Many states have adopted rules for
  processing of food waste (composting or anaerobic digestion).
- The "farmers" angle is real but indirect in most of the existing layer: farm-to-food-bank programs
  (ReFED: expand farm-to-food-bank programs — governments set aside funds to cover harvesting,
  processing, packaging, and transportation costs of donating agricultural products to food banks;
  Congress authorized the Farm to Food Bank Program at $4M/year in the 2018 Farm Bill as part of
  TEFAP; the Pennsylvania Agricultural Surplus System is the model). The dairy/meat/fish donation
  friction (PMC review, Todd 2024): retailers have to donate what farmers and charities want, and
  dairy, meat, and fish items are typically not accepted; limited staff resources.

### The fragmentation problem — multiple platforms, food goes to waste because of the wrong match

The NYC Food Policy piece flags the fragmentation problem explicitly: "While having multiple
players solving the same problem has its advantages, it can also mean that food donated through one
platform goes to waste because of a lack of recipients, even though there are potential recipients
using another platform." This is a real design caution for any open coordination layer the concept
might build or tap into: a platform that is open and participatory can still fail to move food if the
recipients are on another platform. The open-source opportunity includes solving this fragmentation,
not just building another platform.

## 3. The opacity and data-gap problem — what's hidden and why

The food-waste sub-sector is largely opaque and hidden, and the reasons are both structural and
incentive-based.

- The Biological Diversity report card: Kroger, Walmart, and Ahold Delhaize USA are the only three
  grocery chains to publicly commit to zero food waste by 2025 and prioritized tracking food waste.
  That is the strongest public indicator of how much of the sector is not publicly reporting.
- Divert Inc. (retail customer solutions): "Unsold food can be difficult to quantify in a retail
  environment" — and offers "new visibility into your unsold food streams" as a service. The
  explicit framing is that visibility is a problem and a saleable improvement. Divert also says
  (obstacles to donating surplus food across the food supply chain): "Retailers are awash in store
  data, but they might not know what to do with it, or how to use it" — lack of visibility into
  donation opportunities. The data is there; the insight is not.
- The PMC review (Todd 2024, Impact of Food Waste on Society, Specifically at Retail and...): the
  operating friction of donation — retailers have to donate what farmers and charities want, dairy/
  meat/fish typically not accepted, limited staff resources.
- The ReFED framing of where waste comes from: "Waste from consumer-facing businesses (such as
  grocery stores and restaurants) and homes accounts for more than 80 percent of total food waste."
- The PCFWC is an exception that proves the rule: a multi-year, multi-retailer regional commitment
  with a "best-in-class" dataset — i.e., the data that exists is the data that a cooperative regional
  commitment produced, not the data that the sector generates by default.
- The FLW Standard launch (UNEP 2016) made the point directly: "most do not know how much food is
  lost or wasted or where it occurs within their borders, operations or supply chains. Moreover, the
  definition of food loss and waste varies widely and without a consistent accounting and reporting
  framework it has been difficult to compare data and develop effective strategies."

The opacity is not just a reporting gap; it is a visibility gap inside the operation (Divert's
explicit framing), a definition-and-measurement gap (FLW Standard's point), a destination-tracking
gap (what goes where and in what quantities), and a public-accountability gap (most chains don't
publicly report). The concept's opportunity is to make this legible at all four levels: inside the
operation, around the destinations, around the definitions/measurement, and publicly.

## 4. Emerging standards and data aspects — the accounting and reporting layer

### The FLW Standard — the common language for food waste measurement

The Food Loss and Waste Accounting and Reporting Standard (FLW Standard), published June 2016 by
WRI as Secretariat of a global multistakeholder partnership (with WBCSD, UNEP, CGF, FUSIONS, and
others), is the first-ever set of global definitions and reporting requirements for companies,
countries, and others to consistently and credibly measure, report on, and manage food loss and
waste. It provides a common language and clear requirements; it is voluntary and designed for users
of all types and sizes, across all economic sectors; over 200 reviewers from around the world
provided input. The standard provides a set of requirements for accounting and reporting on an FLW
inventory in a consistent and transparent way; it allows flexibility in what to quantify and how,
while providing clear and firm definitions. Material types and possible destinations are part of the
standard's framework.

The launch statements are the most useful framing: UNEP's Achim Steiner — "Having this new standard
by which to measure food loss and waste will not only help us understand just how much food is not
making it to our mouths, but will help set a baseline for action." WRI's Andrew Steer — "For the
first time, armed with the standard, countries and companies will be able to quantify how much food is
lost and wasted, where it occurs, and report on it in a highly credible and consistent manner."
CGF's resolution: members to reduce food waste from their operations by 50% by 2025, with baselines
and progress measured using the FLW Standard. Nestlé and Tesco already measuring and publicly
reporting. EU FUSIONS' Food Waste Framework and Quantification Manual is fully synchronized with the
FLW Standard. The FLW Standard will also help reduce food loss and waste within the private sector.

The concept's relevance: the FLW Standard is the common language the concept could adopt or extend for
its own operations — to measure and report its food loss and waste in a credible, consistent way, and
to expose that data to the community in a standardized, legible form. The concept could be unusual in
publishing its FLW-aligned waste and diversion data as part of its transparency surface.

### ReFED — the U.S. data-and-solutions source

ReFED is a multi-stakeholder nonprofit that seeks to reduce food waste in the U.S.; it is the most
useful U.S.-oriented data and solutions source. Its solutions page organizes levers: Policy (expand
farm-to-food-bank programs), Innovation (decontamination and waste diversion technologies;
seamless systems integration; shared platforms for idle assets/surplus/byproducts). Its data page
covers causes and impacts (environmental, economic, food insecurity) and the data the solutions are
measured against. ReFED's analysis: donation-matching software has the potential to save 150,000 tons
of food or 250 million meals in the U.S. each year, representing an economic value of $432 million.

### FAO FLW Database and Food Waste Atlas — the global data collection

The FAO Technical Platform on the Measurement and Reduction of Food Loss and Waste hosts the FLW
Database — the largest online collection of data on both food loss and food waste and causes reported
in scientific journals. WRI's Food Waste Atlas is a related tool. These are the global data-collection
assets the concept could link into or cite.

### EPA Food Recovery Hierarchy and Excess Food Opportunities Map — the public-policy data
infrastructure

EPA's Food Recovery Hierarchy is the governing frame; the Excess Food Opportunities Map is the public
mapping tool that identifies potential sources of excess food and non-landfill recipients (food banks,
pantries, soup kitchens, composting and anaerobic digestion facilities). For the concept, these are
the public-data infrastructure that a waste-and-diversion layer could reference and build on — and the
concept could make a local version of this legible to its community (which food banks are nearby, which
compost/AD facilities are nearby, which farms can take food scraps).

### The emerging digital-solutions research

A 2025 open-access research article (ScienceDirect) on "Opportunities of digital solutions for
addressing food donation challenges" is the most recent academic anchor on the digital coordination
angle — flagged for follow-up rather than relied on here. The general direction (ReFED's seamless
systems integration + shared platforms for idle assets) is the design-relevant infrastructure point.

## 5. The open source opportunity — what an open grocery operation could do

The food-waste sub-sector is characterized by opacity, fragmentation, commercial/proprietary
coordination tools, undeveloped public data, and a governing hierarchy (food recovery) that most
operations do not make legible. An open source grocery operation has an unusual opportunity to make
the waste and diversion layer open, legible, participatory, and accountable — which is exactly the
concept's core premise applied to waste.

The opportunity breaks into several connected pieces:

### 5a. Visibility of the waste stream — inside the operation and to the community

Make the waste stream legible: what is being thrown away, what is being donated, what is being
composted, what is going to anaerobic digestion or animal feed, in what quantities, at what cost, and
where it goes. This is the Divert visibility problem turned into a transparency feature. An open
grocery operation could surface its waste and diversion data as part of its information surface — e.g.,
a weekly or real-time waste-and-diversion picture that the community can see, and that the operation
uses to make intentional operational decisions (the Waste Not 2.0 tracking model: "clearly identify
where surplus food is directed — whether to landfill, compost, or donation — improving visibility and
strengthening waste stream management").

### 5b. A community-governed, open coordination layer for surplus-to-donors/recipients

The existing donation-matching tools are real (MEANS, Copia, Food Cowboy, Chow Match, Waste No Food)
but commercial, proprietary, and fragmented — and fragmentation can itself cause food to go to waste
when recipients are on another platform. Foodsharing.de is the one open-source-in-spirit example and it
is German. An open grocery operation could build or tap into an open, community-governed coordination
layer for matching surplus to recipients (food banks, community fridges, farmers, compost/AD), with
open data about what is available, where it is, who is receiving it, and what happens to it — and with
the explicit goal of reducing the fragmentation problem rather than adding another silo.

### 5c. Data exposure in a standardized, legible form

Adopt or extend the FLW Standard for the operation's own measurement and reporting, and expose the
waste and diversion data in a FLW-aligned, legible way — so that the operation's numbers are
comparable to other FLW Standard users and can be understood in the common language the sector is
building. This is both a transparency signal and a participation feature: the community can see the
operation's waste and diversion in a standard form, and the operation can track progress over time
against a baseline (the FLW Standard case-study language: "metric tons of food waste per sales,
percentage of food waste recycled (i.e., diverted from landfill), and metric tons of food donated").

### 5d. Connection to the sourcing, information, and culture layers

Food waste is not an isolated operations problem; it connects to the rest of the concept. Sourcing: the
waste stream reflects upstream sourcing decisions (what is ordered, in what quantity, in what timing —
the Afresh AI ordering example is a sourcing-and-ordering lever). Information: the waste and diversion
data is information the eater can have, and can have alongside origin and traceability data. Culture:
waste is a cultural signal; a grocery that makes its waste legible is making a cultural statement, and
the community can participate in the waste-reduction and diversion story. Participation: the community
can be involved in diversion (e.g., community compost drop-off, community fridges, reporting waste
patterns, participating in the surplus-to-donation coordination).

### 5e. Accountability and the "hidden" problem

Most grocery waste is opaque and relatively hidden. An open grocery operation has the unusual
opportunity to be the operation that does not hide its waste — and that public legibility is itself a
form of accountability and a transparency signal. The concept should think of this as a feature, not a
burden: an operation that publishes its waste and diversion is making a credible, verifiable claim about
what it does with its unsold food, in a way that most grocery operations do not.

### 5f. The operating-friction design — waste is not just a data problem

The PMC review reminds us that donation has operating friction (what farmers and charities want; dairy/
meat/fish typically not accepted; limited staff). ReFED's seamless-systems-integration lever and the
Waste Not 2.0 example (embedding donations into existing workflows, real-time tracking) are the
design-relevant answers: waste reduction and diversion have to be embedded in the operation's workflows
and logistics, not bolted on as a data layer. The open-source opportunity includes the workflow and
logistics design, not just the data exposure.

## 6. Findings for the concept — through-lines

### 6a. Food waste is a core, measurable, largely opaque grocery-operations element — and the
opacity is at four levels

Scale and destinations are measurable (PCFWC best-in-class dataset; ReFED; USDA/FDA 30-40% figures;
~6M tons unsold retail per year; ~30% of grocery food thrown away; 38% of food unsold or uneaten
system-wide). But the sector is largely opaque: only three chains publicly committed to zero food waste
and tracking (Kroger, Walmart, Ahold Delhaize USA); visibility inside the operation is a problem
(Divert); definition-and-measurement is inconsistent (FLW Standard); destination tracking is a gap;
public reporting is rare. The concept has an unusual opportunity to be legible at all four levels.

### 6b. The diversion ecosystem is real, emerging, and fragmented — and fragmentation is a real risk

Donation-matching tools (MEANS, Copia, Food Cowboy, Chow Match, Waste No Food), food sharing (Food-
sharing.de as the open-source exception; OLIO; solidarity fridges), discount/retrieval retail (Flash-
food, Spoiler Alert, CropMobster), and the downstream diversion to compost/AD/animal feed all exist.
The EPA Excess Food Opportunities Map is the public infrastructure. ReFED's seamless-systems-
integration and shared-platforms-for-idle-assets levers are the design-relevant infrastructure. The
fragmentation problem (food donated through one platform goes to waste because recipients are on another)
is a real caution: an open coordination layer should aim to reduce fragmentation, not add another silo.

### 6c. The FLW Standard is the common language and reporting layer the concept could adopt or extend

The FLW Standard (WRI/WBCSD/UNEP/CGF/FUSIONS, June 2016) is the voluntary global standard for
quantifying and reporting food loss and waste in a common language and consistent way; it is flexible
in scope but firm on definitions; it is used by businesses and governments; CGF members committed to
50% reduction by 2025 measured with it; Nestlé and Tesco already publicly reporting. ReFED, FAO FLW
Database, Food Waste Atlas, EPA Food Recovery Hierarchy, and the Excess Food Opportunities Map are the
existing data assets. The concept could measure and report in FLW-aligned form and expose its waste and
diversion data publicly in that form — which would be unusual and credible.

### 6d. The waste stream connects to the rest of the concept's layers — it is not an isolated
operations problem

Sourcing (ordering quantity and timing; the Afresh AI example); information (waste and diversion data as
part of the operation's information surface, alongside origin and traceability); culture (waste as a
cultural signal; a grocery that makes waste legible makes a cultural statement); participation (community
involvement in diversion, visibility, reporting). The concept's five layers all touch waste, which makes
the waste-and-diversion layer a good place to test the concept's premises in a concrete, measurable,
operationally-real domain.

### 6e. Make the waste and diversion legible and participatory — that is the distinctive opportunity

The distinctive opportunity is not just "reduce waste" but "make the waste stream open and participatory
and make the diversion legible" — which is the concept's core premise applied to waste. An operation that
publishes its waste and diversion (what goes where, in what quantities, at what cost, to which food banks,
which compost/AD facilities, which farms) is making a credible, verifiable claim about its unsold food that
most grocery operations do not make.

### 6f. The donation friction and the operating design are load-bearing — waste diversion is not just
data exposure

Donation has real friction (dairy/meat/fish typically not accepted; limited staff; what farmers and
charities want); diversion has logistics (pickup, cold storage, transportation, timing). ReFED's seamless-
systems-integration lever and the Waste Not 2.0 example (embedding donations into workflows with real-time
tracking) are the design-relevant answers. The open-source opportunity includes the workflow and logistics
design, not just the data surface.

## 7. What this scan does not yet cover

- The PCFWC methodology in detail and what is in the "best-in-class" dataset (department-level, destina-
  tion-level, geographic scope, how the 25% reduction was measured) — relevant to what a comparable
  measurement and reporting layer would look like.
- The actual food-waste data practices and public commitments of specific grocery chains beyond the three
  (what is being reported, how, and how much is hidden).
- The food-waste regulations and programs in the Canada-centred corpus (provincial organic waste bans,
  CFIA's role, Canada's food-waste regulations and diversion programs) — Flashfood is the hint that the
  Canadian context has real, distinct infrastructure; this needs more.
- The Foodsharing.de open-source model in detail (whether the code is actually open, the governance, the
  scale mechanics, the German legal and cultural context) — the one open-source-in-spirit example in the
  coordination layer, worth a dedicated look.
- The 2025 digital-solutions research article in detail (ScienceDirect, "Opportunities of digital solutions
  for addressing food donation challenges") — the most recent academic anchor on the coordination angle.
- The food waste -> food bank / farmer / compost / anaerobic digestion / animal feed connection in a Canada-
  specific and community-specific form, including culturally appropriate food in food banks and the relation
  to the Indigenous food sovereignty material (CARE/FAIR tension; culturally appropriate food; the "feed
  hungry people" rung of the food recovery hierarchy in a culturally appropriate form).

## How this connects to the rest of the grocery research

- The traceability pass (legibility of origin; QR-code surface; what exists and what is thin) and the
  consumer-feedback pass (legibility of what people say about a product/producer) are adjacent: food waste
  is another place where the concept's legibility-and-participation premise can be applied in a concrete,
  measurable, operationally-real domain, and the data-and-standards layer (FLW Standard, ReFED, EPA map) is
  an existing assets the concept could adopt or extend.
- The co-op-sector and OFN/DFC passes are relevant to the governance/structure questions (community-governed
  diversion; short supply chain; food bank relationships; the three-category open + access-vs-control
  distinction applied to waste diversion).
- The Indigenous food sovereignty pass is relevant to the "feed hungry people" rung of the food recovery
  hierarchy and to the food bank destination: culturally appropriate food in food banks; the CARE/FAIR tension;
  the sacred/not-for-sale point applied to food that should not be commodified or wasted.
- The open-in-food and open-in-culture passes are the broader frame: food has been opened at the data level
  more than at the operation, participation, and culture levels; food waste is another place where the data
  layer (FLW, ReFED, EPA) is relatively well-developed and the operational, participatory, and cultural layers
  are thinner — and the concept could fill some of that gap.

## What this is for

This scan is a surface pass across the food-waste sub-sector in grocery operations: the scale and opacity,
the diversion destinations and emerging programs, the emerging standards and data layer (FLW Standard, ReFED,
EPA, FAO), the open-source opportunity (visibility, open coordination, data exposure, connection to the concept's
layers, accountability, operating-friction design), and the cautions (fragmentation, donation friction, the
operating design). It is meant to give the concept a realistic map of the sub-sector and of the opportunity to
make waste and diversion legible and participatory — not a synthesis and not a design document. The map suggests
a second pass that would dig into: the PCFWC methodology and dataset; specific grocery-chain reporting practices;
Canada-specific food-waste regulations and diversion programs; the Foodsharing.de open-source model in detail;
the 2025 digital-solutions research; and the Canada/community-specific food-bank-farmer-compost connection,
including culturally appropriate food and the Indigenous food sovereignty material.
