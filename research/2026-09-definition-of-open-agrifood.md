# What "open" means in agrifood: the kinds of openness and how they relate

- Research date: 2026-09-07
- Status: definition document (C1). This is the deliverable requested in `research/transfer-reset-and-next-steps.md` ("make the differences between kinds of openness legible — a core deliverable"). It states what open-source agrifood is, what it is not, and how the kinds of openness relate to each other and to control, maintenance, and benefit.
- Corpus backing: 109 verified records, 30+ scan documents, landscape synthesis v3 (`research/2026-08-landscape-synthesis-v3.md`), contested-claims ledger C-OSA-01..06, the grocery transfer layer (`research/grocery-feedback-2026-08.md`), and the seed-commons criteria of Sievers-Glotzbach et al. (2020).
- Claim discipline: the project's verification labels (`research/sources/README.md`) apply throughout. Framework material here re-verifies every two years.

---

## 1. The question the document answers

"Open source" is a licence on code. "Open agrifood" is not a licence on anything — it is a claim about who controls the systems that feed people, and who benefits. The two are routinely confused, and the confusion does real work for incumbents: a subscription-gated API gets marketed as an "open platform" (Current 7), a dataset gets called a commons while the governance around it stays closed, an open-weights model gets called open source while its training corpus and its deployment governance remain proprietary.

So the definition this document offers is functional, not taxonomic-first:

> **Open agrifood is the set of practices by which the material and informational systems of food — tools, machinery, data, standards, models, seeds, infrastructure, and the operations that run them — are held in forms that people affected by them can inspect, run, modify, and govern, so that control and benefit stay with farmers, workers, eaters, and communities rather than migrating to intermediaries.**

The discriminating question is never "is it open?" but the project's standing frame, sharpened:

> **What does openness make possible here, and under what conditions does it produce farmer, community, public, or ecological benefit rather than simply redistribute control to new intermediaries?**

Openness is a means with conditions of success. The definition document exists because the conditions differ by kind of openness, and the kinds are not interchangeable.

## 2. The eight kinds of openness in agrifood

The transfer reset listed eight kinds and asked that the differences be made legible. The corpus now supports stating each one: what it is, what it uniquely enables, where it fails on its own, and its anchor case.

### 2.1 Open-source code

Licence-guaranteed rights to use, study, modify, and redistribute software (OSI-approved licences). What it uniquely enables: exit rights and fork rights on the systems that record, plan, and coordinate farm and food work. Where it fails alone: code nobody maintains is code you cannot depend on — the corpus's maintenance taxonomy exists because this failure mode is the most common one (11 of the maintenance records are volunteer-fragile). Anchor: farmOS (open-core + hosting services, durable); cautionary: OADA has a reference server and zero third-party commercial adoption — an open API specification is not open-source code in deployment (C-OSA-01).

### 2.2 Open hardware

Published designs, schematics, and bill of materials under open hardware licences (CERN-OHL and kin). What it uniquely enables: local manufacture and repair where vendors do not ship, service, or price for you — the de-escalation strategy. Where it fails alone: hardware carries capital, liability, and regulation that code does not; the enclosure wall is hardest exactly where those concentrate. Anchors: OpenSprinkler (a decade-plus, hardware sales funding open development), OpenFlexure (sub-$400 microscope at peer-reviewed accuracy, locally manufactured in Tanzania and Panama). Boundary: where high-voltage broad-acre control or animal-welfare liability concentrates, open hardware is absent or dormant — Nofence/Merck hold virtual fencing as a subscription monopoly (synthesis v3, headline finding).

### 2.3 Open datasets

Data published under open licences or into the public domain. What it uniquely enables: independent verification and public-interest analysis — nobody has to trust a vendor's self-report about soil, yield, or emissions. Where it fails alone: a dataset without governance over its collection, consent, and use is an extraction surface; open-in, closed-out is the standard enclosure move. Anchors: FAO's satellite analytics stack (SEPAL/Open Foris, 180+ countries). Boundary: farmer-level benefit from open data remains undetermined — aggregation platforms built on farmer data (FBN, JoinData) have not shown verifiable farmer dividends (C-OSA-02).

### 2.4 Open standards

Published, implementable specifications that make systems interoperable. What it uniquely enables: switchability — the practical exit right. Data standards (DFC, WAGRI's profile, ScotEID's traceability language) and measurement standards (CSA K100:26 for food loss and waste) are what let a farmer or a co-op leave a vendor without losing their records. Where it fails alone: adoption. The corpus's sharpest evidenced negative is that standards do not self-execute: OADA's specification exists, the enclosure persists (C-OSA-01). A standard with no adopters is a wish.

### 2.5 Open models and weights

Freely licensed model parameters for AI systems. What it uniquely enables: local deployment and auditability of advisory systems that farmers actually use. Where it fails alone: weights without corpus, data governance, or deployment accountability are a black box you can download. The corpus verdict is split (C-OSA-03): deployment succeeds on managed open foundations (FarmerChat reaching 1.6M farmers, Bhashini's language DPI), while the model layer itself remains open-weights/closed-corpus with no formal licensing clarity. "Open source AI" in agrifood is currently a managed-service achievement wearing an open-weights costume.

### 2.6 Digital public goods

Open-licensed software, data, models, and standards that are also governed for public interest and vetted for deployment in low-resource settings. What it uniquely enables: the multilateral layer — infrastructure that smallholders get at zero cost because it is deliberately de-commodified. Anchor: the FAO stack again, and India's AgriStack/Bhashini as state-scale DPI. Boundary: public goods still need maintenance funding and can still be captured by whoever runs the deployment.

### 2.7 Cooperative and commons governance

Not a licence at all: ownership and decision rules (cooperatives, multi-stakeholder co-ops, commons charters, and the legal innovations built on them — CoopCycle's Coopyleft, which licenses freely to worker co-ops and not to gig platforms; OSSL's contractually binding seed licence). What it uniquely enables: the only kind of openness that structurally answers "who captures the value" — governance answers the question licences cannot, because a permissive licence gives rights to enclosure actors too. Where it fails alone: participation is costly and viability is hard-won. The corpus's consumer-side numbers are bracing (La Osa's 22.5% break-even reach; The People's Supermarket's documented volunteering decay) — and its counterexample (Landare: 30+ years, 80/20 producer margin as stated policy) shows it can hold. Boundary: governance without maintenance funding decays; the pooled funding circle (50-60 food co-ops co-funding Foodsoft maintenance) is the emerging organizational answer.

### 2.8 Biological commons

Seeds, breeds, soil knowledge, and fermentation/ composting practices held against enclosure — with the crucial caveat that biological material does not self-replicate like code, and traditional knowledge adds governance obligations software never has. The seed case is the defined bridge: OSSI's pledge, OSSL's licence, Bioleft's participatory breeding, and the Sievers-Glotzbach seed-commons criteria (collective responsibility, protection from enclosure, polycentric management, knowledge sharing). Verdict C-OSA-04 stands: open seed licensing is not open software licensing, and treating the two as equivalent erases both the biology and the Indigenous governance at the centre of it.

### 2.9 Public-interest infrastructure (the residual kind)

Public and multilateral bodies operating systems as infrastructure with open interfaces and accountable governance — not everything open needs a licence; some of it needs a mandate. JoinData's consent infrastructure and the Scottish Agriculture Data Partnership are the governance-first instances. Boundary: mandate can reverse with governments; open interfaces on a closed core are Current 7's enclosure pattern in institutional dress.

## 3. The five operational layers — openness applied to a whole operation

The eight kinds describe *artifacts*. A second, newer lens describes *operations*: the grocery project's five layers of open (provenance `grocery/levels.md`, transferred in `research/grocery-feedback-2026-08.md` §10):

1. **Open sourcing** — where things came from, including the economics of what was paid.
2. **Open information** — an interactive information environment, not a broadcast channel.
3. **Open culture** — food as cultural substance; local by default, shared only where welcome.
4. **Open participation** — the people the operation serves shape what it does and knows.
5. **Open structure** — the operation's own rules, economics, and decisions are not a black box.

The lenses are complementary, not competing. The eight kinds classify an artifact ("this is an open standard, that is a biological commons"); the five layers diagnose an operation ("this retailer is open at the sourcing layer and closed at every other"). Two rules the grocery research established and the corpus should carry:

- **Layers reinforce or decouple.** A transparency label on a closed operation is open sourcing without open structure. A review widget on a conventional retailer is participation without information. Partial combinations are the normal failure shape.
- **The software commons mirrors the layers.** Structure-layer tools are mature (Foodsoft, FoodCoopShop), data plumbing is building (OFN/DFC), and the information, participation, and culture layers have no free-software implementations anywhere — because no operation has needed them. Empty layers locate the frontier. This inventory method transfers to any operation in any part of the chain.

The grocery transfer also established the downstream twin of the synthesis's headline finding: the retail operation is an enclosure wall of a different kind — an information-and-participation wall, not a capital wall. Openness is now to be won (or lost) eater-facing as much as farm-facing.

## 4. How the kinds relate: reinforcement, sequence, and refusal

### 4.1 The control questions are the test

The transfer reset's structural questions are the connective tissue between the kinds. For any open artifact or operation, ask:

- Who controls it, and who can enter, exit, or switch?
- Who maintains it, and who funds the maintenance after the launch grant ends?
- Who sets the rules, and who bears the risk?
- Who captures the value?
- Is local knowledge and community authority respected?

Each kind of openness answers some of these and is silent on others. Code answers exit. Standards answer switchability. Governance answers value capture. Data governance answers consent. Seeds answer reproduction and inheritance. No single kind answers them all — which is the definition's practical content.

### 4.2 Reinforcement pairs the corpus has verified

- **Hardware + calibration data**: open instruments succeed when schematics are paired with crowd-sourced open datasets (Our Sci, OpenFlexure) — neither half reaches field accuracy alone.
- **Code + governance**: CoopCycle is open source *and* legally restricted to worker co-ops; the licence and the governance are one instrument.
- **Standards + operations**: ScotEID works because a real co-operative network (SAOS) operates the traceability layer; the standard without the operating body is OADA.
- **Seed licence + physical commons**: the biological commons relies on open hardware (Real Seeds cleaner, Kon-Tiki kiln) to process and propagate open biological material (Current 6).
- **Margin structure + fairness**: the strongest consumer co-ops make open economics a justice commitment (CSN's fixed margins, Landare's 80/20), not a disclosure feature.

### 4.3 The sequence that matters

Corpus-wide, durability follows a pattern: **governed funding + a real operating community first, licence second, scale last.** The durable anchors (OpenSprinkler, farmOS, OFN, SEPAL, Landare) all pair a licence with an economic engine that pays for the thing's continuation. The failures and dormancies (L'Atelier Paysan's liquidation, OADA's non-adoption, OpenFence, MIT OpenAg) all lacked one of: funding model, adopters, or governance fit. Openness is not the finish line; it is the beginning of a maintenance obligation.

### 4.4 Refusal is part of openness

A finding the corpus now carries as a design pattern: **the open layer's strongest anti-capture instruments are limits it sets on itself** (grocery feedback §5). Coopyleft restricts who may use the code. CARE-governed diversion data refuses to publish where surplus went when that information is culturally governed. Indigenous food sovereignty marks some foods and knowledge not-for-sale at every lifecycle stage. Landare refuses advertising and external capital. An honest definition of open agrifood includes the right to refuse openness as a governance act — "what is open, at which layer, and what is refused" is the discriminating question.

## 5. What open-source agrifood is not

- **Not a licence stack.** An OSI licence on one artifact does not make a system, an operation, or a value chain open.
- **Not "open API" or "open platform."** Current 7's verified pattern: interface-open, license-closed (Priva, Hoogendoorn). Open APIs do not equal open source, and an open API on a subscription-gated core is an enclosure strategy.
- **Not automatically farmer benefit.** Open data can extract as readily as close (C-OSA-02); benefit is a governance outcome, not a licence outcome.
- **Not equivalent across domains.** Code, seeds, data, and models differ in reproduction, liability, and governance obligations; the simple equivalences fail (C-OSA-04).
- **Not a claim that openness solves concentration.** Five chains hold 80% of retail and two firms hold 95% of beef processing. Openness is a strategy for building exits and alternatives at the margins where that is possible — it is not a lever that de-concentrates a sector by itself.
- **Not a directory.** The project's value is comparative and explanatory: which governance and infrastructure patterns matter, and what remains uncertain — not an inventory of everything named open.

## 6. The definition in short

For any artifact, system, or operation in agrifood, "open" is a meaningful claim only when five things are stated:

1. **Which kind** of openness (or kinds) — of the eight in §2.
2. **Which layer**, if it is an operation — of the five in §3.
3. **Who controls, maintains, funds, and captures value** — the §4.1 test.
4. **What is refused**, and by whose authority (§4.4).
5. **What remains unverified** — the project's claim discipline, applied to its own definitions.

An artifact or operation that answers all five is open agrifood in the sense this project uses the term. One that answers fewer is partially open, and the unanswered items name exactly where enclosure persists — which is the frontier this research exists to find.

---

## Sources and provenance

- `research/transfer-reset-and-next-steps.md` (2026-08-01) — the request this document fulfils; the eight-kind list and the structural questions.
- `research/2026-08-landscape-synthesis-v3.md` (2026-08-14) — currents 1-7, headline finding, contested-claims ledger C-OSA-01..06.
- `research/grocery-feedback-2026-08.md` (2026-08-28) — five-layer lens (§10), software-mirrors-layers method (§4), refusals pattern (§5), retail economics (§6), participation-viability numbers (§7).
- `grocery/levels.md` — authoritative text of the five operational layers.
- Sievers-Glotzbach S, Tschersich J, Gmeiner N, Kliem L, Ficiciyan A (2020), "Diverse Seeds – Shared Practices: Conceptualizing Seed Commons," International Journal of the Commons 14(1):418-438, CC BY 4.0: https://thecommonsjournal.org/articles/10.5334/ijc.1043 (checked 2026-08-12).
- Verification labels and freshness model: `research/sources/README.md`.

Not legal advice.
