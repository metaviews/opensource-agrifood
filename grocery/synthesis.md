# Synthesis — what the open source grocery concept claims as novel

Date: 2026-08-28
Status: synthesis of the research tree as it stands (12 research files plus
the concept documents). This is the first attempt to state, across the whole
tree, what the concept actually claims and where that claim holds. It is a
working document: it will be revised as research continues, and it is meant
to be tested, not admired.

## The one-sentence claim

The concept claims that a grocery operation can be structured — not merely
labelled — as open across five levels at once (sourcing, information,
culture, participation, structure), and that this combination does not
currently exist in any operating form.

## What the research actually supports

The research tree converges, from a dozen independent passes, on one
structural fact: **food has been opened at the data level and almost never
at the operation, participation, or culture level.**

- Open Food Facts proves a crowdsourced open food data commons works at
  scale — bounded by the package (open-in-food.md).
- The DFC standard proves open interoperability data plumbing for short food
  supply chains is buildable and real at v2.0.0 (ofn-and-dfc.md).
- Mandatory traceability (FSMA 204, EU, SFCR) plus GS1 standards prove a
  record floor exists — while what reaches the eater behind the QR code
  stays thin, marketing-shaped, and unverifiable (traceability.md).
- The FLW Standard, ReFED, and the EPA map prove waste measurement and
  reporting infrastructure exists — while grocery waste itself remains
  four-levels opaque (food-waste.md).
- OFN proves an open-source platform with real governance and structural
  transparency can exist — as a platform, not a grocery operation, without a
  continuous participatory information environment or a culture layer
  (ofn-and-dfc.md).
- Consumer feedback is measurably influential and structurally available —
  and under-attached to portable, product-linked food data, with integrity
  problems that no existing venue designs for honestly
  (consumer-feedback.md).
- The Canadian survey confirms the pattern at home: mass co-op grocery
  (FCL) that operates as conventional retail, community co-ops that are
  participatory in governance but pre-internet in information environment,
  and internet-native co-ops (OVFC, Fireweed's marketplace) whose internet
  layer is a purchasing pipeline, not an information environment
  (canadian-co-op-survey.md).

So the empirical claim is well-supported: every layer of the concept exists
somewhere in isolation, and the synthesis does not exist. The novel thing is
the joint realization.

## Why the joint realization matters (and is not just a checklist sum)

If the layers were independent, the concept would be a feature list. The
research says they are not independent — each layer is weak alone:

- Open sourcing without open information is a transparency label on a closed
  chain — exactly the IBM Food Trust / Provenance shape
  (traceability.md, research-scan-1.md).
- Open information without open sourcing has nothing real to work with — the
  nutrition-app and trend-language landscape the concept would enter
  (open-in-food.md §7c).
- Open participation without open information is a review system — and the
  research shows what those become: platform-reputation layers with fake
  reviews, selection bias, and incentives, not community knowledge
  (consumer-feedback.md §4).
- Open participation without open structure is intermittent formal
  governance — the co-op participation gap, documented in the US (Hale 2018,
  co-op-sector.md) and lived in Canada (Karma's own "closed system" history,
  canadian-co-op-survey.md).
- Open structure without the other layers is co-op ownership of a
  conventional operation — the FCL model, Calgary Co-op supplying from
  Pattison (canadian-co-op-survey.md).

The claim, then, is not "five features" but a reinforcement claim: sourcing
gives information something true to carry; information gives participation
something worth contributing to; participation gives structure a
constituency; structure protects the whole from being absorbed back into
the concentrated system the record documents (five chains, 80% retail,
farmers at ~11% of the food dollar).

## The claim's edge cases — what would falsify or blunt it

A synthesis claim is only as good as its strongest counter-cases. The tree
names them; the synthesis should hold them in view:

1. **OFN is the closest thing and it is not nothing.** If OFN (or a
   successor) added a continuous participatory information environment and
   a culture layer to its platform, the concept's novelty would shrink from
   "the synthesis does not exist" to "the synthesis does not exist as a
   grocery operation." The concept should decide whether that distinction
   (platform vs. operation) is load-bearing. Current position: yes, because
   the operation owns the sourcing relationship and the physical
   information surface (the shelf, the QR, the receipt) that a platform
   does not. That position is argued, not yet tested.
2. **The dilution problem weakens the word, not the structure.** "Open" has
   been stretched thin (open-in-culture.md); an operation can be
   structurally open while the word attracts openwashing associations. The
   concept's response — name its own meaning precisely, and let the
   structure, not the label, carry the claim — is right but must be
   maintained in every public artifact.
3. **Participation has hard-won limits.** The participation gap is the most
   consistently evidenced negative finding in the tree (US deep dive,
   Karma's history, the Québec SCP tensions). The concept's novelty claim
   survives, but its participation layer is the layer most likely to fail
   in practice, and the concept should carry that as an explicit design
   constraint rather than an aspiration.
4. **Viability is unresolved.** The tree documents the counter-concentration
   ambition and the structural forces (concentration, food-dollar
   distribution, Calgary Co-op's defection) but has not yet grounded the
   viability economics (Korpeoglu et al., the Yale paper — both unread).
   Until then, the concept claims novelty, not feasibility.

## What the concept is NOT claiming

- Not that open source software is the mechanism. The openness is
  structural and informational; software licenses are one tool among
  several (the DFC's standards licensing, CC-style licensing for content,
  open data publication).
- Not that every product can carry full sourcing depth. The traceability
  pass is explicit: promise depth where supply chains are short enough to
  make it real, name the lot-level/commingling hard case
  (traceability.md §6c, §6d).
- Not that all food knowledge is openable. The sacred/not-for-sale boundary
  from Indigenous food sovereignty (meaning-and-culture.md) and the CARE/
  FAIR tension (open-in-culture.md, open-in-food.md) mean the concept's
  information and participation layers must include refusals — categories
  of knowledge and food that the operation holds rather than exposes.
- Not that the concept is a design or a plan. This document states a claim;
  scenarios, operations, and platforms are downstream decisions not yet
  taken.

## Where the research has earned the claim, and where it has not

Earned (multi-source, convergent):
- The data-open/operation-closed shape of the whole landscape.
- The participation gap and its consequences.
- The existence and maturity of the data layers (DFC, FLW, GS1, Open Food
  Facts) the concept could build on.
- The non-existence of the joint realization across US, European, and
  Canadian precedents.

Earned but thin (single-source or snapshot):
- Canadian co-op specifics (FCAQ structure, FCNQ details, Karma's current
  membership figures) — flagged in canadian-co-op-survey.md.
- The consumer-facing traceability reality (named deployments, not yet read
  product-by-product).

Not yet earned:
- Viability economics (the academic grounding is identified, unread).
- Whether the culture layer can be structural rather than decorative — the
  strongest material (Indigenous food sovereignty, foodways) is grounded as
  frames, but no existing operation demonstrates culture-as-structure at
  retail; the concept is claiming this almost without precedent.
- The feedback-integrity design (community-governed feedback is named as a
  design space, not developed).

## The claim, restated with its conditions

An open source grocery operation is possible as a novelty claim: every
ingredient exists, the synthesis does not, and the layers reinforce each
other in ways that make the synthesis more than the sum of features. The
claim is conditional on three things the research has not yet secured:
participation that avoids the documented gap, economics that survive the
concentrated system it counters, and a culture layer that is structural
without appropriating. The next research should serve those three
conditions — not more landscape mapping, which has done its work.

## What this is for

This is the concept's first consolidated statement of what it claims and
what would test it. It is meant to be the reference point for deciding
whether further research passes serve the claim (and which of the 29
suggested targets actually do), and for keeping the concept honest about
the difference between "no one has built this" and "this can be built."
