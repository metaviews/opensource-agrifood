# C5 pass: Farm-data continuity — what happens to the farm's records when the farm changes hands

Cycle 5 of the succession research program (`../research/research-mapping.md`).

| | |
|---|---|
| **Status** | Run 2026-11-19: one bounded discovery pass (three cells), delegated to a research subagent; load-bearing claims re-verified against primary sources (farmOS docs, LiteFarm data policy, Climate FieldView ToS, Trimble Offering Terms, the SEC-filed purchase agreement, the NALC ag-data-rights slides). Two records curated (`nebraska-lb525-ag-data-act.md`, `northland-fifield-purchase-agreement.md`; collection 170 — farmOS, LiteFarm, OADA, ISOBlue already held). |
| **Frame** | The program's most-novel layer, flagged in the land scan as "likely nobody, closed or open, handles it." The farm's agronomic history — years of yield maps, soil tests, application records, herd data — is a real asset at transfer. Does it leave with the farm? |

## 0. The headline

**The verified absence holds, and it now has a named legal shape: farm-data continuity
at transfer is nobody's documented process — not the open stack's, not the closed
stack's, and (until Nebraska, 2026) no statute's.** What exists is ownership language
and export mechanics. What does not exist anywhere is a *handover*: a documented
workflow, contract clause pattern, or default rule that moves a farm's records to its
next operator. The one executed contract examined expressly excluded records from
conveyance.

## 1. Cell 1 — the open stack: egress exists, handover does not (all verified)

- **farmOS** (GPL-2.0+, verified): CSV export of all asset and log records plus KML
  geometries — with the docs' own warning that "CSV exports do not include all data.
  The farmOS API is the best way to get access to all raw data in a farmOS instance"
  (verified). A JSON:API gives read/write over every record type: a farm's whole
  record set *can* leave the instance. But there is no succession workflow — the
  docs stop at generic export and instance migration.
- **LiteFarm** (GPL-3.0, UBC-hosted, Canadian; verified): a published data policy
  asserting farmer ownership and deletion on request ("You have the right to request
  that your data be deleted from our database at any time"). Ownership guarantee,
  no transfer-of-records process.
- The corpus's interoperability layer (OADA, ISOBlue/AgIsoStack) is about machine
  data movement, not succession.

**The open stack's irony:** it is the only stack where full egress is technically
possible, and it has the *least* reason to hide it — yet it too has no
transfer-to-successor feature. Portability is not continuity.

## 2. Cell 2 — the closed stack: ownership survives, access does not necessarily

- **Climate FieldView** (ToS verified): "You own all Customer Farm Data" with an
  export right — but only "in the same format as uploaded into Your FieldView
  account," which likely strands derived data (as-applied maps, model outputs), and
  says nothing about transfer at farm sale.
- **John Deere** (commitment page, not contract — verified as such): "your farm data
  belongs to you, you decide which third parties it's shared with" — ownership and
  sharing language; no at-sale handover process. (The deeper data-services contract
  page was not located; the original URL now 404s.)
- **Trimble** (Offering Terms verified — the sharpest formulation): "Customer owns
  all Customer Data" — and "Customer will not have access to Customer Data after
  termination or expiration of the Subscription Term, unless otherwise indicated..."
  **Ownership survives; access does not.** At the moment a farm changes hands —
  when the seller's subscriptions lapse — the data is owned by someone who can no
  longer reach it.

## 3. Cell 3 — the legal/structural layer: the contract layer was the only layer, and it defaults against continuity

- **Nebraska LB525 (2026)** — the first state statute making agricultural data the
  producer's statutorily protected property, sale requiring separate express written
  consent (verified from the NALC-hosted CLE slides; statute text not fetched —
  recorded as second-hand). Before it: "Until Nebraska enacted LB525, no state or
  federal law specifically addressed ownership of or rights in agricultural data."
  The statute's consent architecture follows the *producer*, not the land — an
  untested question is what that means when the producer dies or sells.
- **The one executed agreement examined** (Northland/Fifield cranberry marsh, 2005,
  SEC-filed, verified verbatim) expressly excluded "corporate books and records"
  from what conveys to the buyer. One deal proves only that records *can* be
  excluded — but in a purchase-agreement universe of bespoke drafting, the
  documented instance points the wrong way for continuity.
- **The institutional record re-anchors rather than transfers:** USDA FSA procedure
  requires "specific proof of ownership when land ownership is transferred" — the
  federal farm record is re-established for each owner. Government records know
  about farms; agronomic memory does not follow the same path.
- No documented precedent found for agricultural data-cooperative membership
  transferring with a farm at succession.

## 4. The finding

Farm-data continuity is an unowned gap with three matching absences (all recorded
with search evidence): no open handover workflow, no closed-stack at-sale process,
no statutory or contract default. This is the succession program's first layer where
**the open stack is plausibly the natural first mover** — the drafting cost is low
(a handover export profile + a records-conveyance clause pattern for purchase
agreements and leases), the open stack already has the egress plumbing, and the
closed stack has structural reasons not to volunteer. The adaptation commons gains a
new named element: **a data-continuity annex** — export specifications and a
model records-conveyance clause — joining the conflict annex (C7) and care-in-transfer
provisions (C9). Honest limits: Nebraska LB525 is second-hand until the statute text
is read; telematics-at-resale, soil-lab retention, and herd-registry transfer were
surfaced but not examined; the Ferrell Drake Journal article on farm data transfers
timed out and is a lead, not a finding.

## 5. Sources and verification

All retrieved 2026-11-19. (V) = verified by the program from the primary source;
(S) = subagent pass.

- farmOS export + API docs (V): https://farmos.org/guide/export/ ; https://farmos.org/development/api/
- LiteFarm data policy (V): https://www.litefarm.org/data-policy
- Climate FieldView ToS (V — both quoted clauses): https://climate.com/en-us/legal/terms-of-service.html
- Trimble Offering Terms (V — both quoted clauses): https://www.trimble.com/en/legal/offering-terms/terms/english
- John Deere data commitment (V as marketing page): https://www.deere.com/en-us/privacy-data/data-services/your-data
- Northland/Fifield purchase agreement, SEC EDGAR (V verbatim): https://www.sec.gov/Archives/edgar/data/818010/000089706905002245/dbk35a.htm
- NALC ag-data-rights CLE slides (V — both quotes; LB525 content second-hand):
  https://nationalaglawcenter.org/wp-content/uploads//assets/Webinars/Ag%20Data%20Rights%20NALC%2010.21.2026.pdf
- USDA FSA 3-CM (S): https://www.fsa.usda.gov/Internet/FSA_File/3-cm_r04_a22.pdf
- Corpus records: `examples/records/farmos.md`, `litefarm.md`, `oada.md`, `isoblue-2.0.md`.

Source-quality note: vendor terms are current-page text (they change); LB525 is
verified through law-firm analysis, not the statute; the Northland agreement is one
2005 deal, not a market-norm claim.

## 6. Document status and conventions

Machine-facing notes; humans can stop at the sources above.

- Status: pass complete 2026-11-19; cycle C5 marked `run` in `research-mapping.md`;
  two records curated (collection 170).
- Next steps: (1) the data-continuity annex joins the adaptation commons (export
  profile spec + model records-conveyance clause); (2) read the LB525 statute text
  directly; (3) who-to-ask: a farmOS/LiteFarm maintainer on a handover feature; a
  farm purchase-agreement drafter on records clauses; (4) the Ferrell article as a
  follow-up lead.
