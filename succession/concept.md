# Open Source Agriculture and the Canadian Farm Succession Crisis

A standing research program asking whether and how open source agriculture can address the
transfer of Canadian farms between generations — not as a single case study, but as an
ongoing investigation inside the Open Source Agrifood project.

| | |
|---|---|
| **Status** | Opened 2026-11-18. Frame refreshed 2026-11-18 after cycles C1, C3 and C6 (see §3 and §4): L1 and L3 resolve onto one shared build object — an open-licensed Canadian adaptation commons covering succession knowledge and farm-tenure legal documents; L6 establishes the open-analysis method (Saskatchewan) and names the family-shaped tax gap. Design document in the docs/policy/ genre identified as next. Outside the November 2026 event's scope by user direction; intended as input to future events and work. |
| **Frame** | An ongoing research program, not a single case study and not a scan (no G-ID). It consumes G-OSA-35 (the land sectoral scan) as its principal evidence base and exists to turn that scan's succession findings into a research agenda. |
| **Written** | 2026-11-18. Every figure in this document comes from the existing corpus, cited by file path; no new sources were gathered for this opening document. |
| **Method constraint** | Online open sources only. Correspondence, interviews, site visits and conversations with retiring farmers, entrants, and successor organizations go into a deferred "who to ask" list rather than being worked now. |

## 0. The premise

Canadian agriculture faces a transfer problem that arrives as arithmetic. At the 2021
Census the average farm operator was 56.0 years old, 60.5% were 55 or older, only 8.6%
were under 35, and just 12.0% of farms had a written succession plan (all verified, per
`research/2026-09-land-sectoral-scan.md`, from Statistics Canada). Meanwhile the asset
that must change hands compounds away from any new entrant: cultivated farmland value
rose 9.3% in both 2024 and 2025 and has averaged 8.6% annually over ten years (FCC,
verified as reported in the land scan). The land scan's own sharpest sentence is this
program's founding observation:

> The succession crisis is the cell's engine, and its evidence is open while its
> mechanisms are closed. … Canada's farmland transition will be the largest private
> wealth transfer in its agricultural history, and the public cannot see it.
> — `research/2026-09-land-sectoral-scan.md`, cross-cell synthesis 5

The research question: **how could open source agriculture address and facilitate that
transition — as knowledge, as infrastructure, as tenure design, as technology, and as
public visibility — rather than merely document it?**

The question belongs to this corpus because every one of its signature findings bears on
it. The land scan established that the transfer's evidence is open while its mechanisms
(matching, ownership, pricing, planning tools) are closed. The labour scan (G-OSA-36)
established that open agrifood has been built around the farm as an enterprise, not
around the farm as a workplace or a life — and succession is precisely a question about
the life. The commons finding — that the world's strongest farmland commons, Terre de
Liens, produces closed stewardship — warns that an open answer to succession will not
emerge from the existing commons tradition automatically; it would have to be built
deliberately. And the project's own case studies (dairy, CEA, upcycling) are, from the
succession side, evidence about **entry cost**: what it now takes to become a farmer, and
how much of that cost the open stack can actually remove.

## 1. What the corpus already holds

Prior evidence this program builds on, cited by path:

- `succession/research/2026-11-c3-open-legal-assets-pass.md` and
  `succession/research/2026-11-c1-succession-knowledge-pass.md` — this program's own
  first two cycles (run 2026-11-18): the licensing-gap finding on the documents side
  and the curation-and-adaptation finding on the knowledge side. Eleven records added
  to `examples/` (collection 152), including Land For Good's CC BY-SA 4.0 succession
  workbook (the only open-licensed succession asset found anywhere), SELC (the only
  open-licensed farm-adjacent legal publisher), and the FCC/FMC lender-authored
  closed toolset.
- `research/2026-09-land-sectoral-scan.md` (G-OSA-35) — the principal ancestor. Holds the
  succession numbers (12.0% plan coverage, up from 8.4% in 2016; 56.0 average age; 60.5%
 aged 55+), the transfer projections (FCC: >$50B in farm assets changing hands over a
 decade; CBA: $53B in land and 88% of farms with no written succession plan; an industry
 estimate of ~75% of the $785B farmland base changing hands within a decade — estimate,
 methodology not open), and two verified absences that become this program's two most
 concrete targets: **no open farm-link platform exists anywhere** (Canada has none at
 all), and **no open-source farm-succession tooling exists; the data is open, the tools
 are consultants' proprietary software.**
- `research/2026-09-labour-layer-scan.md` (G-OSA-36) — the farm-as-enterprise bias, and
  the shapes of agricultural labour that any entrant-support layer must reckon with.
- `research/2026-09-definition-of-open-agrifood.md` (C1) — the eight kinds of openness
  and the control/funding/value-capture test this program should apply to any succession
  mechanism it examines.
- `dairy/open-milking-robot-case-study.md`, `cea/synthesis.md`,
  `upcycling/economics.md` — cost spines for what entering and operating now costs, and
  where open substitutes change the arithmetic.
- `research/2026-08-maintenance-funding-profiles.md` — how open projects survive; a
  succession infrastructure layer would need a durability profile of its own.
- `DIRECTORY.md` / `directory-data.json` — the `land-tenure` category already curates the
  relevant actors (Terre de Liens, Ontario Farmland Trust, Agrarian Trust, Cadasta,
  FarmLINK-adjacent platforms); this program inherits that curation instead of rebuilding it.

## 2. The problem, decomposed

"Succession" fails as a single problem. The program treats it as five stacked stresses,
each with a different relationship to openness:

1. **Demographic cliff.** The operator population is old and the pipeline is thin
   (8.6% under 35, verified). Many farms will not transfer to anyone; they will close,
   consolidate, or be absorbed. Open source cannot make successors exist — but it can
   change how many people can plausibly enter.
2. **The capital wall.** Land compounding at ~9%/yr against entrants who must finance
   from scratch; incumbents whose pension is the farm; an investor class (Bonnefield
   >$1.4B AUM across ~134,000–140,000 acres, verified as reported) bidding on the other
   side. Open source does not lower land prices. It can lower *everything else* a new
   entrant must buy, and it can change *who has to raise the capital* through tenure
   models that don't require one family to purchase a whole farm.
3. **The mechanism enclosure.** The actionable layer is proprietary: succession planning
   is consultants' software and professional fees; land matching is closed nonprofit
   databases; tenure innovation is paid legal templates; ownership itself is invisible
   outside BC. This is the layer where the corpus's open-source method applies most
   directly.
4. **The knowledge-and-relationship transfer.** Agronomic skill, community standing,
   buyer relationships, and tacit local knowledge leave with the retiring farmer. No
   corpus work has examined whether an open layer (farm records, FarmOS-style
   continuity, open agronomy) can carry any of this across a transfer.
5. **Rural viability decline.** The user-framed premise that diminishing rural
   communities compound the crisis: fewer services, fewer peers, thinner labour pools.
   *The corpus holds no direct evidence on this* — it is recorded here as a stated
   premise and a research target, not as a sourced finding.

Note what the decomposition implies: the crisis is usually discussed as (1) + (2) —
demographics and money — which are exactly the two stresses openness touches least. The
program's working thesis is that the tractable open-source surface is (3), (4) and the
entry-cost half of (2): the mechanisms, the knowledge, and the non-land cost of entering.
Whether that surface is large enough to matter is the program's central open question.

## 3. Where open source plausibly bites — six candidate layers

Each layer is a bounded research cycle candidate (see
`research/research-mapping.md`). Ordered roughly from most to least directly open-source.

- **L1. Succession knowledge as a commons.** Family negotiation structures, tax
  rollover mechanics, phased retirement, partnership and share structures, farm
  business wind-down: today locked in consultant practice and proprietary tools
  (verified absence, land scan sub-cell 3). *Refined by cycle C1 (2026-11-18):* the
  knowledge exists and is rich — provincial guides, the FMC national toolkit, FCC's
  toolset, CRA's rollover explainers, Quebec-language material — but nowhere
  open-licensed in Canada, and the sector's real adaptation practice is one-off
  private permission (Alberta's Agdex 812-22 adapted Manitoba's guide "with
  permission"). The one open-licensed succession asset found anywhere is Land For
  Good's CC BY-SA 4.0 workbook (US; verified in-document) — a legal adaptation base
  for a Canadian fork. L1's build object: a Canadian adaptation of that workbook
  plus the two gaps nothing covers openly (family-negotiation frameworks, open
  financial models).
- **L2. Land linking as open infrastructure.** The verified absence of any open
  farm-link platform anywhere. What do the closed platforms (Young Agrarians, FarmLINK,
  US state farm-link programs) actually do, what does an open one change — published
  criteria, portable records, data that outlives any single nonprofit's funding — and
  is matching a problem openness can improve, or a trust-and-volume problem it cannot?
- **L3. Replicable tenure as open legal assets.** The commons-tenure tradition scales
  catastrophically below the need (Agrarian Trust: 400+ acres in ~12 years, verified)
  and publishes nothing under an open licence (verified across every entity the land
  scan examined). *Resolved by cycle C3 (2026-11-18):* this is a **licensing gap, not
  a drafting gap** — model documents exist free-to-read across the sector (Agrarian
  Commons bylaws and equitable lease, the Schumacher Center's CLT toolkit with its
  resale-price formula and death-continuation clause, UK CLT model rules, government
  lease templates), but the right to adapt and redistribute them exists at exactly one
  organization (SELC, site-wide CC BY-SA 4.0). The binding constraint on open legal
  infrastructure is governance and licence, not drafting.
- **L4. The entry-cost floor and the open stack.** What fraction of a new entrant's
  startup cost does open technology actually address — machinery access (shared
  ownership, right to repair), open hardware, FarmOS-class software, open agronomy?
  Synthesis cycle over the corpus's own cost spines (dairy, CEA, hardware records)
  plus new research on the beginning-farmer cost structure.
- **L5. Continuity of the farm's data and knowledge across transfer.** What happens to
  a farm's records, agronomic history, and data when it changes hands; can an open
  substrate (FarmOS, open standards, data-coop structures from G-OSA-27's territory)
  make the farm's institutional memory a transferable asset rather than an asset that
  dies with the operator or gets captured by a platform?
- **L6. Seeing the transition.** The land scan's "public cannot see it" finding, as a
  precondition rather than an intervention: beneficial-ownership transparency (BC's
  LOTR as the world-first, Canada-only), investor-ownership visibility, and the policy
  debate an open picture of the transfer wave would enable. This layer connects to the
  project's policy-design genre (`docs/policy/`). Cycle C6 targets it.

**The shared build object (named 2026-11-18 after C1 and C3).** L1 and L3 resolve onto
one thing: **an open-licensed Canadian adaptation commons** — a vehicle that takes the
free-to-read knowledge and legal documents that already exist (Canadian guides, Land
For Good's CC BY-SA workbook, the Schumacher and Agrarian Commons model documents),
adapts them to Canadian jurisdictions, and republishes under share-alike terms the
sector's own practice already implies (Alberta adapting Manitoba "with permission" is
the behaviour; the licence is its generalization). The design constraints carried into
any such vehicle: the C1 control/funding/value-capture test; lender independence
(the country's default succession tools are FCC-authored and forkless by terms); and
the Indigenous-land interface condition (§3's seventh layer). Whether the vehicle is a
document set, an organization, or a policy proposal is exactly what the remaining
cycles (C2, C4, C6) are for.

A seventh, cross-cutting layer the program must carry but not own: **Indigenous land
return and jurisdiction**. The land scan's finding stands — governance in that cell
operates through limits on exposure, and OCAP is the appropriate data frame, not open
publication. Any succession vehicle this program designs must interface with that
reality, not around it.

## 4. What this program does not assume

Written early, because the temptation with a crisis framing is to assume openness is
the answer:

- Open source does not lower land prices, change tax law, or create successors. Its
  levers are information, mechanisms, replication cost, and coordination — real, but
  bounded.
- The default tools are not neutral. The country's most-used succession-planning
  tools are authored or funded by Farm Credit Canada, a federal Crown-corporation
  lender, and closed to adaptation by its terms of use (verified, C1). Any open
  succession layer carries a lender-independence design constraint — it is also a
  proposition about who farmers get their transition knowledge from.
- The Terre de Liens lesson generalizes: participatory and commoning institutions do
  not spontaneously produce open assets. An "open succession" layer that is really a
  closed nonprofit with a website would repeat the pattern the land scan documented.
  Everything this program proposes gets the C1 control/funding/value-capture test.
- Most farms will not be saved by any intervention. Part of the honest answer is about
  graceful transition — wind-down, land repurposing, community-scale continuity — not
  only farm-to-farm succession.
- The program is Canada-centred by its question, but international models (Terre de
  Liens, HM Land Registry, US farm-link programs, Global South tenure tooling) are
  evidence, not decoration.

## 5. What lives here

- `concept.md` — this document: the frame.
- `research/research-mapping.md` — the research tree: candidate cycles, status, and what
  each is expected to change about the frame.
- Later: per-cycle scan and synthesis documents under `research/`, a "who to ask" list
  (deferred per method constraint), and — if the program earns one — a design document
  in the `docs/policy/` genre.

## 6. Sources and verification

This opening document introduces no new sources. Every figure is corpus-internal and
cited to `research/2026-09-land-sectoral-scan.md` (G-OSA-35), which verified them from
primary sources (Statistics Canada, FCC, CBA) on 2026-09-04. Labels used above:
**verified** for figures the land scan verified from primary sources; **verified as
reported** for FCC/CBA/industry projections, which are credible third parties reporting
estimates whose methodologies are not open — the land scan records exactly this
split, and this document preserves it rather than averaging it.

One known weakness inherited from the ancestor: the land scan's Sources section is
marked "[to be completed]". Any cycle that leans hard on a land-scan figure should
re-verify it at source rather than double-citing the scan.

## 7. Document status and conventions

Machine-facing notes; humans can stop at the sources above.

- Status: opened 2026-11-18; frame and research mapping only. Not a scan (no G-ID).
  Registered in `ROADMAP.md` as its own workstream row, kin to candidate workstream A2
  (land), which remains the authoritative scan for the land layer.
- Relation to siblings: consumes G-OSA-35 as evidence base; applies C1's definition and
  test; sits in the same genre family as `grocery/` and `upcycling/` (an ongoing
  concept-and-research directory) but with a sectoral transition rather than a single
  operation as its subject.
- Method constraint: online open sources only; correspondence and interviews deferred
  to a "who to ask" list.
- Provenance convention: every figure carries a label; the corpus's verified-as-reported
  splits (FCC/CBA/industry projections) are preserved, not averaged.
- Next step: first bounded research cycle from `research/research-mapping.md`, at the
  user's direction.
