# Traceability — first-pass scan

Date: 2026-08-26
Purpose: A first-pass sweep across where food traceability programs exist, what
they do, what they leave out, and what an open source grocery operation would have
to work with if it wanted to tap into existing traceability where available and link
to where food comes from. This is a surface scan, not a verification pass. Claims
are flagged for follow-up, not settled.

This file is part of the grocery concept research tree (see `research-mapping.md`).
It is read on its own terms: the question is not "how do we build a traceability
system," but "what already exists, by what shape, toward what end, and with what
gaps" — so the concept can design a sourcing-and-information layer that makes
traceability legible to an active eater without assuming the existing programs
already do that job.

## How this scan was done

Five parallel web searches: (1) food traceability programs and initiatives broadly
(blockchain, supply chain, farm-to-consumer); (2) open traceability standards,
interoperability, provenance, shared data; (3) farm-to-consumer consumer-facing
traceability platforms and origin stories; (4) where-food-comes-from consumer
attitudes and the meaning of traceability; (5) the failures, problems, and limits
of current traceability systems. A core set of outcome-bearing pages was then
extracted: the OECD/PEER comparative review of digital traceability across OECD
member states (Charlebois et al. 2024); the FDA Food Traceability Rule landing
page (FSMA 204); the Food Safety Magazine "Global Food Chain Traceability" piece
(Keogh, Manning, Simske 2023); the EU food traceability page; the general-audience
FoodUnfolded "Where does your food come from" primer; and the consumer willingness-
to-pay for blockchain-based QR-code traceability paper (PMC). The result is a
shape document: what exists, what layers it comes in, what the consumer-facing
side actually delivers, what it leaves out, and what questions the scan raises for
a second pass.

## 1. What "traceability" means — track, trace, granularity, and the fork gap

Traceability is the ability to track a product or its components forward and backward
through a supply chain. The Food Safety Magazine framing (Keogh, Manning, Simske 2023)
is the cleanest available: traceability determines how materials, packaging, products,
processing aids, etc. have moved through the supply chain; it is often broken into two
aspects — track and trace. _Tracing_ is following a product backward from the retail
shelf to the manufacturer, the ingredient supplier, and their suppliers. _Tracking_ is
following material from suppliers forward through to the spice mix and then all the
finished products and their destinations. The granularity is essential: production for
one week, one day, one shift, the product produced between the last two QC checks, and
the distance element over which traceability operates — from "one step forward, one step
back" through to entire "field to fork" traceability. Traceability underpins information
sharing in supply chains; the article's discussion of it covers visibility, transparency,
and trust as a related but distinct set of concepts.

A useful construct from that article: the "three Ps" of traceability — product
identification, party (who), and premises (where). At the retail shelf, if you only have
the product identification, traceability stops there; you need the party and premises on
the consumer side to get the "fork" end of field-to-fork traceability. That is why a
consumer scan of a barcode is not the same degree of traceback a food company performs in
a product recall — and why the scan often delivers only "static marketing information
about the brand or farm on a website, but little to no data on the route to market" (Keogh
et al. 2023, on the consumer-facing scan).

This is the conceptual starting point for the concept: an open source grocery operation
wants the eater to be able to follow the food back toward its origin (backward trace) and,
for some items, forward (who handled it, where it went). But the existing programs are
mostly built for a different purpose — safety, recall, regulatory compliance, and supply-
chain business intelligence — and the consumer-facing side is the thin part of the
landscape.

## 2. The regulatory layer — mandatory traceability that exists today, and what it is
for

Mandatory traceability regimes exist in most industrial jurisdictions. They are not
consumer-facing; they are organized around food safety and recall. For the concept, they
are the floor: an operation in any given jurisdiction is already required to keep trace
records. The question is whether those records can be surfaced to the eater, in what form,
with what meaningfulness.

### United States — FSMA 204, the Food Traceability Rule

The FDA Food Traceability Final Rule (FSMA Section 204) establishes traceability
recordkeeping requirements beyond existing regulations for persons who manufacture, process,
pack, or hold foods on the Food Traceability List (FTL). The rule is a key component of the
FDA's New Era of Smarter Food Safety Blueprint. At its core: persons subject to the rule who
manufacture, process, pack, or hold FTL foods must maintain records containing Key Data
Elements (KDEs) associated with specific Critical Tracking Events (CTEs), and provide
information to the FDA within 24 hours (or a reasonable agreed time).

The CTEs in the final rule: harvesting; cooling (before initial packing); initial packing of
a raw agricultural commodity other than food from a fishing vessel; first land-based
receiving of a food from a fishing vessel; shipping; receiving; and transformation (manufac-
turing/processing or changing a food by commingling, repacking, or relabeling, when the
output is an FTL food).

The Traceability Lot Code (TLC) is the anchor: a descriptor (often alphanumeric) used to
uniquely identify a traceability lot within the records of the firm that assigned it. You
must assign a TLC when you initially pack a raw agricultural commodity (other than food from
a fishing vessel), perform the first land-based receiving of a food from a fishing vessel, or
transform a food. Once assigned, the records at each CTE must include that TLC, and all KDEs
must be linked to the relevant traceability lot.

The traceability plan required of covered entities includes: procedures for maintaining
records (format and location); how you identify FTL foods; how you assign traceability lot
codes; a point of contact; and, for farms growing or raising FTL foods (other than eggs), a
farm map showing the location and name of each field (or growing area), including geographic
coordinates; for aquaculture, the location and name of each container (pond, pool, tank, cage)
with geographic coordinates.

A critical, under-emphasized point: _the rule does not require consumer-facing traceability._
It requires internal and supply-chain-partner records. The compliance date (originally
January 20, 2026) was extended by Congress to July 20, 2028, and the FDA confirmed it will
not enforce before that date. In June 2026 the FDA held a public meeting on remaining concerns
specific to lot-level tracking and flexibilities for compliance, and released a discussion
paper on "Identifying Additional Flexibilities for Satisfying the Food Traceability Rule's
Lot-Level Tracking Requirement" plus a report on FDA Traceability Readiness Tabletop Exercises.
The lot-level problem is live and contested: supply chains do not operate in neat, one-to-one
lot systems; products are often mixed or commingled in warehouses and breaking bulk, which is
exactly the hard case the concept would face for bulk and mixed items.

The FTL is a specific list of foods (16 food types posing elevated risk): cheeses (soft/semi-
soft raw milk, fresh, and soft-ripened), leafy greens (e.g., romaine lettuce, spinach),
shell eggs, fish (finfish), crustaceans, mollusks, fresh-cut fruits and vegetables, herb
ceutical plants, nut butters, cucumbers, peppers, sprouts, tomatoes, and some prepared foods.
In other words, the rule covers a meaningful slice of what a grocery would carry (fresh produce,
cheese, eggs, seafood, some prepared foods) but is not universal — and a good deal of what a
grocery carries (grains, dry goods, oils, flours, sugar, many processed foods, non-FTL items)
falls outside the mandatory-traceability perimeter.

### European Union

Traceability has been mandatory across the EU since the 2002 General Food Law (Regulation EC
178/2002): all food and feed businesses — including farmers, processors, transporters, and
supermarkets — must keep track of where products come from and where they go next. The EU
also operates TRACES (Trade Control and Expert System), the digital system national
authorities, border inspectors, and food safety agencies use to track food and animal movements
(import/export included), flag health risks, and enable contaminated or mislabeled products to
be traced and removed. The EU page frames traceability as central to food safety, high
quality, and transparency across the single market.

The EU regulatory layer is broader than the U.S. layer in one respect (it covers all food and
feed, not a list), and it is backed by a visible, named operational system (TRACES). But it is
still a regulator-facing and supply-chain-facing system; the consumer-facing side is the label
and the origin information that flows from it (country of origin, PDO/PGI, organic, Fairtrade,
MSC, egg codes), not a live "follow this food back" environment.

### Canada — SFCR and CFIA

Canada's Safe Food for Canadians Regulations (SFCR), administered by the CFIA, require certain
food businesses to track the movement of their food in the supply chain — forward to the next
operator and backward to the previous operator. The traceability requirements apply to food
businesses at retail as well as persons who send or convey food from one province or territory
to another. The CFIA frames traceability as about supply chain records, not consumer-facing
origin links. The earlier industry-led Can-Trace effort (GS1 Canada) aimed to develop national
traceability standards adaptable across food and agriculture sectors — an interoperability
effort, now historical.

Canada is directly relevant to the concept's corpus (Canada-centred). The Canadian layer gives
the concept a mandatory floor (SFCR) and a named regulator (CFIA), but the consumer-facing
traceability question is open in the same way it is in the U.S. and EU: the regulation requires
records, not links.

### The upshot of the regulatory layer

Mandatory traceability is real, widespread, and focused on safety/recall/compliance. It creates
a floor of records that exist (and in some cases are being digitized, as in FSMA 204's push
toward electronic sortable spreadsheets and the FDA's Traceability Readiness tabletop exercises).
But it does not, by itself, produce consumer-facing origin links. The concept cannot assume that
"mandatory traceability exists, so the eater can follow the food back"; the mandatory layer is
mostly behind the scenes.

## 3. The standards / interoperability / data layer — the plumbing that exists

If the concept wants to tap into existing traceability, it needs to understand the data
standards and interoperability layer — the plumbing that makes a supply-chain traceability
record machine-readable and, in principle, portable.

### GS1 Global Traceability Standard

GS1 maintains a Global Traceability Standard that "defines the minimum elements that are needed
to achieve interoperable traceability systems, and describes how additional elements can be added
to address..." specific needs. GS1 is the standards body behind barcodes (GTIN), and its
traceability work is the most widely applied interoperability framework in food supply chains.
GS1 also publishes implementation guidance for beef, fish, poultry, pork, fresh fruit and
vegetables, eggs, wine, and more, and details the fast-evolving need for Critical Tracking Events
(CTEs) and Key Data Elements (KDEs). The Food Safety Magazine authors explicitly call the GS1
Traceability Standard "an invaluable resource for organizations," and note that implementation
guidance documents are available for specific segments.

For the concept, GS1 is the most important existing interoperability standard to know about: it
is the lingua franca of product identification and a real, existing frame for interoperable
traceability. If the concept wants to tap into existing traceability, GS1 is the grammar it would
most likely have to speak, at least partially.

### The CTE/KDE model is now the dominant conceptual framework

The CTE/KDE model (critical tracking events / key data elements) is now the dominant way
traceability is being specified — from FDA FSMA 204 to GS1 implementation guidance to industry
tools. IFT's Global Food Traceability Center launched a "Traceability Driver" tool that "automates
the conversion of traceability data into compliant formats and comes with a fully functional,
pre-built API." OriginTrail, an open-source, purpose-built blockchain data protocol, is cited by
John G. Keogh as enabling GS1-standards-based interoperability between multiple blockchains and
legacy systems — relevant because it is one of the few named open/standards-based approaches in a
landscape that is otherwise dominated by proprietary platforms.

### Food Data Collaboration / DFC — the short-supply-chain data interoperability effort

The Open Food Network's Data Food Collaboration (DFC) effort is covered in `ofn-and-dfc.md`
in the grocery research, but it is worth re-mentioning here because it is the closest existing
thing to a traceability-adjacent open data standard for short food supply chains — exactly the
kind of supply the concept is most interested in. The concept should treat the DFC as an existing
interoperability effort it could potentially tap into or extend, rather than invent its own data
model from scratch, for sourcing and provenance in short supply chains. The concept's sourcing
layer and the DFC's scope are overlapping questions; the scan here notes the overlap and defers
the detailed intersection to a later pass.

### The food ontology layer

FoodOn (the harmonized food ontology, Dooley et al. 2018, covered in `open-in-food.md`) is the
food-data vocabulary layer. It is not a traceability system, but it is the kind of shared,
machine-readable vocabulary the concept would need if traceability information from multiple
sources is to be integrated and surfaced coherently. The concept should remember the ontology
layer as a dependency of any multi-source traceability picture.

### The W3C Verifiable Credentials angle — an emerging credentialing approach

The W3C Verifiable Credentials Data Model (v1.1, v1.0) is a general-purpose framework for
digital credentials: digitally signed, cryptographically secured, verifiable without contacting
the issuer, with privacy and selective disclosure. Keogh et al. recommend that certification
scheme holders in the food industry who provide credence verification investigate using the W3C
Verifiable Credentials Data Model to facilitate digital verification of credence claims (organic,
etc.). This is an emerging, not-yet-dominant, approach to making "this product is organic"
(or "this was grown by this farmer," or "this meets this standard") a verifiable, portable claim
rather than a static label. For an open source grocery, verifiable credentials are an interesting
bridge between traceability (where did it come from) and credence claims (what are its
attributes), and worth watching.

### The blockchain layer — the one that gets all the attention and does not, by itself,
solve the consumer-facing problem

Blockchain-based traceability is the most visible part of the traceability conversation, and it
is worth understanding what it is and is not.

The systematic review of blockchain-based food traceability frameworks (PMC) catalogs a very
large body of proposals — a table of studies with checkboxes for blockchain, IoT, RFID, QR, cc,
AI, big data analytics, GPS, NFC across olive oil, dairy, halal chicken, beef, shrimp, grain/oil,
rice, Indian dairy, fishery, etc. The well-known names: Walmart + IBM Food Trust (2016,
Hyperledger Fabric, tracking produce and pork), Carrefour + IBM Food Trust (free-range chickens,
consumers can access details about the life of the chickens they purchase via QR), Farmer Connect
+ IBM Blockchain (coffee traceability platform), Antonello Produce (IBM Food Trust for produce,
consumers can scan a QR code on packaging and see all data in Food Trust), Ucrop.it (digital
platform, free and confidential, where producers record and verify agronomic events to trace the
history of their crops — "Crop Story"), Scantrust + SAP (farm-to-consumer traceability via
secured QR codes). Alibaba's blockchain initiative against counterfeit food sales, partnering with
international producers such as Australia's Blackmores. The FoodTraze example (onion supply chain,
blockchain, QR code, farm-to-consumer story).

The consumer-facing blockchain traceability model is coherent: assign a QR code to a batch,
consumer scans it, sees the farm it came from, the route to the store, and possibly certification
and recall status. Carrefour and Nestlé currently provide blockchain-based traceability info via
QR codes for food transparency in Europe.

What blockchain does not do, by itself: it does not create the data that is put on it. A blockchain
is only as good as the data entered at each step; the "garbage in, garbage out" problem is the
central practical vulnerability, and it is also the central political and economic one — the data
at the front end (the farm, the producer) is where the labor and the willingness live, and where
the incentive to fabricate lives too. Blockchain provides immutability of the record once entered,
not truth of the record at entry. The concept should not treat blockchain as a transparency solution;
it is a record-integrity tool that can support transparency if honest data is being entered, and
can create an illusion of transparency if it is not.

## 4. Consumer-facing traceability — what actually reaches the eater today, and in what
form

### The everyday traceability a consumer already encounters

The general-audience FoodUnfolded primer is a useful map of the traceability layer a shopper
already meets: egg stamps (e.g., "1-ES-4526" — how the hen was raised: 0 organic, 1 free-range,
2 barn, 3 caged; country; farm registration number); barcodes and QR codes on packaged foods
(coffee, chocolate, dairy especially), where scanning a QR code may show where the product was
grown, the route to the store, or whether it meets certain sustainability or quality standards —
though "not all QR codes offer this depth"; animal tags (ear tags on cows with unique codes
holding info about health, feed, where they've lived); GPS and sensors on farms collecting data
about where crops are grown and under what conditions; and the EU's TRACES system operating behind
the scenes. The everyday labels that are only possible because traceability can verify origin,
farming method, or supply chain: "EU Organic," PDO/DOP, Fairtrade, MSC-certified seafood.

The consumer-facing takeaway: the eater already sees fragments of traceability — egg codes, origin
labels, QR codes, certification marks — but most of these are static, label-based, or marketing-
site-based, and most do not constitute a live, coherent "follow this food from farm to shelf"
experience. The QR code is the most promising vector for consumer-facing traceability today, but
the content behind the QR code is the variable.

### The QR code as the consumer-facing vector — and what's behind it

There is a real industry conversation about QR codes for consumer-facing traceability:
FCC (FCC-fac.ca) on "How QR codes and traceability help tell your story" — the consumer
relationship created by scanning a QR code develops trust in the food and beverage processor and
the supply chain, "QR codes allow you to go [deeper into the story]"; Te-Food on "Food Traceability
as a Marketing Tool" — serialized QR codes on products, consumers scan and see origin and story;
Scantrust + SAP farm-to-consumer traceability app on the SAP App Center — communicating food
provenance via unique secured QR codes, with material traceability option for SAP Logistics
Business Network to collect and trace.

This is the vendor/marketing layer: QR codes as a consumer-facing trust-and-story mechanism.
It is real and it is growing, but it is largely a marketing-and-brand-mechanism, and the content
behind the code is whatever the brand chooses to put there — which can be a meaningful provenance
story or a thin landing page. The concept should treat the QR code as a viable consumer-facing
technology (it is the most practical way a shopper in a store accesses origin information in the
moment of choice), but should not treat "QR codes exist" as a solution to the deeper problem of
what data is behind the code and how trustworthy it is.

One relevant finding on the consumer value of QR-code traceability: a discrete-choice experiment
on consumer willingness-to-pay for blockchain-based QR-code traceability of leafy greens (PMC)
found that U.S. consumers' marginal willingness to pay for access to blockchain-based traceability
information via QR codes is real but modest and product-specific, and that domestically produced
leafy greens show no strong preference for knowing over not knowing the detailed sub-region where
the product was grown (confidence intervals spanning zero for California vs. Arizona). A 2025
systematic review on digital technologies for traceability and transparency (Cromwell et al.,
ScienceDirect) is the recent academic anchor on the consumer-facing technology question; flagged
for follow-up rather than relied on here.

### Where-food-comes-from as a consumer attitude

The regulatory and commercial layers are one thing; what about the eater's actual desire to know
where food comes from? The FoodUnfolded framing is the clearest general-audience statement: knowing
where your food comes from helps you become a more informed consumer; it lets you align shopping
choices with what matters to you — cutting emissions, supporting nearby farmers, avoiding overly
processed foods; even small bits of information like a farm code or origin label give you the power
to choose better; traceability lets you support local or regional producers, choose food with fewer
travel-related emissions, look for organic/free-range/sustainably produced options, feel more
confident about safety and quality. Easy habits: check labels for country of origin especially for
fresh produce; scan QR codes to learn more; buy seasonal foods more likely to come from nearby; ask
your local market vendor where their food is sourced from.

This is the eater-side voice the concept's information layer is speaking to: the desire to know is
real and growing, and it is not only a safety desire — it is an alignment desire (emissions,
proximity, who grew it, how it was produced). That alignment desire is exactly what the concept's
open sourcing-and-information layer is built around.

### The consumer-facing limit — static marketing information, not real traceback

The most important caution from the Food Safety Magazine analysis is that the consumer-facing
scan delivers "little to no data on the route to market (the actual F2F traceability)." A consumer
scan is not the same degree of traceback a food company performs in a recall. Applying the barcode
to a consumer product and linking to a farm or brand website is an oversimplification of the
intricacies of end-to-end food chain traceability; providing consumers with static data (brand
details, supplier location, farm location) on the food source lacks granularity. Even where a QR
code is present, the consumer often gets a marketing site — who grew it, a photo, a brand story —
rather than the route the food actually traveled, the inputs it carried, the intermediaries it
passed through, or the verifications behind the claims.

This is the live tension the concept has to design around: the consumer-facing traceability that
exists is mostly marketing-level, not granular, not verifiable-by-the-shopper, and not a coherent
route-to-market picture. An open source grocery's promise — "tap into traceability programs where
available to have links to where the food comes from" — is a real and achievable ambition, but it
is precisely the ambition the existing systems do not fully deliver, which is why the concept has to
do design work rather than just plug into an existing consumer-facing traceability surface.

## 5. The problems, limits, and failures — what traceability does not solve, and where it
breaks

### Information loss at every handoff

Information loss can occur at any point in a supply chain where there is a failure or incomplete
transfer of traceability data. Minimizing information loss generally drives better supply chain
performance, specifically food safety and the risk of product recalls. This is the basic fragility
of any traceability system: it is only as continuous as the weakest handoff. For an open source
grocery that wants to surface origin information, the handoff problem is the central operational
one — the data has to survive every transfer from farm to packing to distribution to the store to
the consumer's phone, and in practice it does not always.

### The "one step forward, one step back" default and the field-to-fork ideal

The classic default is "one step forward, one step back" (SFSB); the ideal is field to fork (F2F),
and F2F has been achieved in some supply chains through analog, paper-based systems. The gap
between the default and the ideal is the gap the concept wants to close. Closing it is hard
everywhere; it is hardest in long, complex, global supply chains and easiest in short, local ones.
This is a structural argument for why the concept's traceability ambition is more feasible in short
supply chains than in commodity supply chains — and it connects directly to the concept's sourcing
inclination.

### The lot-level commingling problem — the hard case for bulk and mixed items

Lot-level traceability is hard because supply chains do not operate in neat, one-to-one lot
systems; products are mixed or commingled in warehouses and breaking bulk, which breaks the
lot-to-item mapping. The FDA's June 2026 public meeting on lot-level tracking and the accompanying
discussion paper on additional flexibilities show this is a live, unresolved regulatory problem — not
just a technical one. For the concept, bulk bins, blended products, items that are repacked or
commingled, and seasonally mixed produce are the hard cases. A traceability promise that works for
a single-origin sealed package of coffee or a labeled vegetable does not trivially extend to a bulk
bin of mixed greens or a blended spice mixture; the concept should not promise traceability it
cannot deliver at the lot level.

### The audit-moment problem and the unobservable supply chain

The actions and behaviors required to get food sown, grown, harvested, processed, and distributed
are largely unobservable by the buyers unless they have a constant local presence or engage in
regular unannounced audits; companies face significant compliance challenges and increased
transaction costs. Audits have limitations because they only offer proof for a certain moment in
time. This is the deeper version of the garbage-in problem: even with a perfect digital record,
the record can reflect the moment of audit rather than the ongoing reality, and the supply chain
is largely unobservable to the buyer. An open source grocery's traceability links can show the
record — they cannot by themselves guarantee the reality on the ground. This is a genuine honesty
limit the concept should hold, not paper over.

### The fraud problem — credence claims and the organic case

Traceability supports credence claims (organic, fair trade, PDO, MSC, etc.), but the credence
claim infrastructure is itself vulnerable to fraud. The Food Safety Magazine piece reports that
USDA's organic website allows a consumer to verify whether a particular food company and product are
certified to the organic standard — a critically important move, since the organic logo is a proxy
for trust. But even that strong signal is vulnerable: USDA's website for fraudulent certification
claims listed 166 records in late January 2023 (U.S. 31, China 23, South Africa 17, Thailand 14,
Mexico 12, India 9); similar fraud in Europe (conventionally produced eggs sold as organic in the
UK and Germany; dilution of organic pistachios in Spain; the Italian "Puss-in-Boots" cereals fraud,
a sophisticated organized crime network spanning multiple countries). Managing a global certification
scheme and delivering effective market surveillance is a daunting task; regulators must encourage an
online presence where consumers can verify product claims.

The concept's implication: traceability links to origin are one thing; traceability links to a
credence claim (this is organic, this was fair-trade, this was grown sustainably) are only as good
as the verification behind the claim, and the verification itself is fragile. The concept should
not equate "we link to the farm" with "we can vouch for what was done on the farm."

### The consumer-side privacy problem and the missing "fork"

F2F traceability is frequently discussed and in some supply chains achieved through analog,
paper-based systems; transitioning to digital has been proposed, but there are challenges in
collating and openly sharing all information in supply chains (supply chain visibility). A key
point not often discussed in F2F traceability is privacy laws, which prevent consumer transactions
from being tracked without consent. If organizations or government agencies knew every food item
bought and consumed in a household, would people feel that was an invasion of privacy? Loyalty
cards (Opt-in, PII legally captured), e-commerce "your shopping list" features, and online
algorithms capture some purchase data but do not give a picture of the totality of food purchases,
food waste, and consumption for a given household. If PII is not captured, then only the product
identification is known, and the other two "Ps" — party (consumer name) and premises (home address)
— are unknown, and traceability stops at the retail shelf.

This is a structural limit on the consumer-facing side: the more complete the traceability picture
you want (even to the individual consumer's household), the more you need personal data, and the
more you run into privacy law and consumer consent. An open source grocery that wants to be
ethically open should be explicit about what data it collects and does not collect, and should not
equate traceability with surveillance.

### The commoditization and anticompetitive-use problem — traceability can be used against
small producers

Traceability is used for safety, recall, and compliance, but it is also used for supply-chain
control, auditing, and compliance costs that fall hardest on smaller operators. The German Supply
Chain Due Diligence Act (in force January 1, 2023, for companies with 3,000+ employees) is one
example of the direction of travel: mandatory human-rights and environmental due diligence across
global supply chains. The Food Safety Magazine authors frame sustainability planning as requiring
attention to secondary and tertiary suppliers (seed, feed, pest remediation, irrigation,
transportation, seasonal labor, logistics support) and to the distribution of net profits and
insurance-based protection from farmer through to consumers. The service-chain point is striking:
the wine value chain identified 70 services (33 more directly related to wine production, 23 to the
agriculture phase, 14 transversal), and the cherry value chain 88 services. How can the sustainability
and credence credentials of all those service providers be checked and verified? How do we know they
followed regulations in both the country of production and the countries to which they export?

For the concept, the cautionary point is that a traceability system designed only around compliance
and corporate control can become a burden or a barrier to small and short-supply-chain producers —
which is the very population the concept wants to surface. The concept should design traceability
as something that serves the small producer and the shopper, not something that becomes a
compliance burden that filters them out.

### The emerging-technology realism — blockchain is not the answer, and the answer is not yet
settled

The Food Safety Magazine piece is clear-eyed about the technology hype: blockchain provides some
non-equitable outcomes (mining the next valid chain is innately susceptible to resource/computing-
power asymmetry, letting much of the chain sequencing fall into the hands of those with the most
computing power; blockchain and bitcoin estimated to have the equivalent carbon emissions footprint
as the country of Sri Lanka, perhaps double if all cryptocurrencies are included). The recommendation
is to keep credentialing simple and sustainable: use multi-factor authentication (also helpful in
forensic analysis of cyberattacks), and use tried-and-true PKI for authentication, access control,
and non-repudiation tasks in the food supply chain. Certification scheme holders should investigate
using the W3C Verifiable Credentials Data Model for digital verification of credence claims.

The emerging-technologies framing is useful: the credible technical direction is a mix of standards-
based interoperability (GS1), the CTE/KDE model, digital signatures and PKI, and (optionally)
verifiable credentials — with blockchain as one possible but overhyped and non-equity-neutral
component, not the foundation. The open source grocery should not build its traceability on
blockchain enthusiasm; it should build on the interoperability and credentialing standards that
exist and are most likely to be compatible with the systems it taps into.

### The OECD comparative finding — traceability adoption is uneven and policy-shaped

The Charlebois et al. (2024) OECD comparative review frames digital traceability systems as pivotal
for operational efficiency, food safety, and transparency, and finds that regulatory frameworks play
a pivotal role in shaping adoption and implementation — they enable prompt intervention to rectify
food safety breaches and deter fraud, and optimize resource utilization, fostering sustainability and
cost efficiency. The key technological manifestations: blockchain, RFID, barcodes, and interoperable
electronic databases. The study's through-line is that traceability adoption is uneven across OECD
states and heavily shaped by national regulation, legal frameworks, and the commodities affected —
which means the concept's traceability surface will look different depending on the jurisdiction and
the commodity, and cannot be assumed uniform.

## 6. Findings for the concept — what traceability means for an open source grocery

### 6a. The concept should tap into existing traceability at the record level, not assume a
consumer-facing surface exists

Mandatory traceability regimes (FSMA 204, EU General Food Law, SFCR/CFIA) create a real floor of
records that exist and are being digitized. The GS1 Global Traceability Standard is the real
interoperability grammar. The CTE/KDE model is the dominant conceptual frame. The concept can and
should design its sourcing-and-information layer to be compatible with this existing record-and-
standards layer — i.e., to ingest and surface the kind of data (origin, lot, farm, route, certifi-
cation) that these systems already produce, where available. But the concept should not assume that
because mandatory traceability exists, the eater can automatically follow the food back; the
consumer-facing surface is the thin, contested, under-delivered part of the landscape, and it is
precisely where the concept has to do design work.

### 6b. The consumer-facing vector is the QR code, but the content behind the code is the
design question

The QR code is the practical, real, existing consumer-facing vector for in-store origin information,
and the vendor/marketing layer around it is real and growing. The concept should treat the QR code
as the surface technology (it is the most practical way a shopper accesses origin information in the
moment of choice), but the design question is what is behind the code: a marketing landing page, or a
coherent, verifiable, route-to-market picture that includes origin, farm, inputs, intermediaries,
certifications, and (where applicable) the verifications behind credence claims. The concept's
promise — "tap into traceability programs where available to have links to where the food comes from"
— is real, but it is the ambition the existing systems do not fully deliver, which is why the concept
has to decide what "where the food comes from" means and how deep it goes.

### 6c. Traceability is most feasible and most meaningful in short supply chains

The "one step forward, one step back" default vs. the field-to-fork ideal is a structural argument
for why the concept's traceability ambition is more feasible in short supply chains than in long
commodity chains. The concept's sourcing inclination (short supply chains, local and regional producers,
co-ops, short food supply chains) is exactly where traceability is easiest to make real and most
meaningful to the eater. The concept should not promise field-to-fork traceability for everything it
carries; it should promise it concretely where the supply chain is short enough to make it real, and
be honest about where it cannot.

### 6d. The lot-level and commingling problem is the hard case the concept must name

Bulk bins, blended products, commingled and repacked items, seasonally mixed produce are the hard
cases for traceability, and the lot-level problem is live and unresolved even at the regulatory level
(FDA June 2026 meeting, discussion paper on flexibilities). The concept should design its
traceability commitments around the items and supply chains where lot-level traceability is feasible,
and should be explicit about where it cannot deliver lot-level traceability. A traceability promise
that is honest about its limits is more trustworthy than one that implies universal granularity.

### 6e. Traceability links to origin are one thing; links to credence claims are only as good as
the verification behind them

Traceability supports credence claims (organic, fair trade, PDO, MSC, etc.), but the verification
infrastructure is itself fragile (USDA organic fraud records, European organic fraud examples, the
"Puss-in-Boots" organized crime case). The concept should not equate linking to the farm with being
able to vouch for what was done on the farm, and it should design its credibility to be honest about
which claims are verified by which body and which are not.

### 6f. The privacy limit on the consumer side is real and the concept should be explicit about
it

F2F traceability is constrained by privacy law and consumer consent on the consumer side; complete
traceability to the household requires personal data the concept may not want to collect. The concept
should be explicit about what data it collects and does not collect, and should not equate
traceability with surveillance. The ethically open grocery is one that is transparent about what it
knows and what it knows about you.

### 6g. The interoperability stack the concept should plan around

The concept's traceability design should plan around an existing interoperability stack rather than
inventing a new one: GS1 product identification as the grammar; the CTE/KDE model as the conceptual
frame; the food ontology (FoodOn) as the vocabulary for integrating multi-source food data;
potentially W3C Verifiable Credentials for verifiable credence claims; and (for short supply chains)
the DFC / OFN data interoperability layer as the closest existing open-data-for-short-supply-chains
effort. Blockchain is an option, not a foundation, and should not be the basis of the design.

### 6h. Traceability is also a power and burden question — design it to serve small producers and
shoppers, not corporate control

Traceability regimes are increasingly used for safety, compliance, and supply-chain control, and the
compliance burden falls hardest on smaller operators. The concept should design its traceability
surface to serve the small producer (make it usable, low-burden, beneficial to them) and the shopper
(real, meaningful, verifiable information), and should be wary of building a system that becomes a
compliance barrier that filters the small producers the concept wants to surface.

## 7. What this scan does not yet cover

- A detailed map of the existing consumer-facing traceability products and what they actually
  deliver behind the QR code (Carrefour, Nestlé, IBM Food Trust consumer-facing deployments, Ucrop.it,
  FoodTraze, Scantrust/SAP) — the scan surfaces the names and the model but not a systematic
  product-by-product read of what the consumer actually sees.
- The actual data content of FSMA 204 Key Data Elements and CTEs in detail (the FDA has a downloadable
  CTE/KDE document, supply-chain examples, traceability-plan examples, and additional supply-chain
  examples added August 6, 2025 — farm-packed produce, food hubs, peanut butter crackers, dual-
  jurisdiction facilities, shell eggs, frozen produce, fresh-cut produce, farm-packed produce — which
  would be worth reading in detail, especially the food-hub example given the concept's interest in
  food hubs).
- The EU TRACES system's actual structure and what data it holds that could, in principle, be surfaced.
- A detailed read of the Charlebois et al. OECD comparative review beyond the abstract (the full text
  is long; the scan used the abstract and framing; the country-by-country findings would sharpen the
  jurisdiction-dependence point).
- The organic and other certification body verification infrastructure in detail (USDA organic
  verification website, the organic fraud problem, PDO/PGI/MSC/Fairtrade verification) — relevant to
  which claims the concept could surface as verifiable.
- Producer-facing traceability tools and their usability and burden (the small-producer side of the
  burden question) — flagged as important for the concept's design because the concept wants to surface
  small producers, not burden them.
- The W3C Verifiable Credentials food use case in practice (the scan found the general VC framework and
  the Keogh recommendation, but not a developed food-specific VC deployment to cite).

## How this connects to the rest of the grocery research

- The concept's five open levels (sourcing, information, culture, participation, structure) are the
  design frame; traceability sits primarily at the intersection of the sourcing layer (where the food
  comes from, who grew it, how) and the information layer (what the eater can see and do with that
  information). It also touches the structure/interoperability layer (which standards and existing
  systems the concept taps into) and the culture layer (the "where does my food come from" desire and
  the meaning the eater attaches to origin).
- The existing open-in-food finding (Open Food Facts is a crowdsourced, open, product-and-label
  database; there is no large open recipe commons; food has been opened at the data level more than at
  the operation, participation, or culture level) is directly relevant: traceability is another place
  where the data layer is relatively well-developed and the consumer-facing, participatory, and cultural
  layers are thinner — the same overall shape.
- The OFN/DFC findings (data interoperability for short food supply chains; OFN Canada's three-
  category open + access-vs-control distinction) are the most relevant existing interoperability
  effort for the concept's traceability ambition in short supply chains.
- The Indigenous food sovereignty findings (NAFSA six pillars; the sacred/not-for-sale point; the
  colonial-erasure point) are directly relevant to traceability of culturally held food knowledge:
  traceability links to origin are one thing; traceability links to culturally held or sacred food
  knowledge raise the same "not culturally appropriate to sell" question, and the concept's
  traceability design should be able to hold the difference.

## What this is for

This scan is a surface pass across food traceability: the regulatory floor, the standards and
interoperability layer, the consumer-facing vector, what reaches the eater today and in what form,
and the problems, limits, and failures. It is meant to give the concept a realistic map of what
exists, what is thin, what is contested, and what the concept would have to design if it wants to
"tap into traceability programs where available to have links to where the food comes from." It is
not a synthesis and not a design document; it is a map. The map suggests a second pass that would dig
into: the actual content of FSMA 204 CTEs/KDEs (especially the food-hub example); a product-by-product
read of what consumer-facing traceability deployments actually deliver behind the QR code; the EU
TRACES structure; the certification/verification infrastructure for organic and other credence claims;
and the producer-facing usability and burden of traceability tools for small producers.
