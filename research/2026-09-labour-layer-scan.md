# The labour layer: who does the work in an open agrifood system (G-OSA-36, candidate C2)

- Research date: 2026-09-07
- Method: broad sectoral scan (candidate workstream C2 from the ROADMAP candidate table). The corpus carried labour as context in 66+ files and as subject in exactly one record (CoopCycle). This scan asks the question directly: **who does the work in an open system, and does openness change the worker's position?**
- Corpus backing: 109 records; landscape synthesis v3; maintenance-funding profiles (G-OSA-08 taxonomy + seventh archetype); grocery feedback §4 (the software-mirrors-layers method) and §7 (participation viability); coopcycle.md (curated).
- Sources: search and primary-page verification 2026-09-07. All external claims below carry `field-guide-lead`-grade status (located, not yet primary-verified) except where noted.

---

## Why labour is a distinct analytical cell

The project's standing question is who controls the systems and who benefits. Labour is the part of the answer that the open-source frame systematically misses, for a structural reason: **open-source licenses govern artifacts (code, data, designs), not workplaces.** A farm can run entirely on open software and open hardware while its workers have no more control over their conditions, their data, or their bosses than before. The five-layer operational lens makes the same point: none of its layers is a labour layer. Open participation asks who shapes the operation's information; it does not ask who is doing the physically demanding, low-paid, often unfree work inside it.

Two corpus findings point at the cell. The grocery §4 method — inventory the software commons along an operation's informational layers, and the empty layers locate the frontier — was posed in grocery research as an open question: *is there free software for on-farm labour governance?* And the maintenance taxonomy (G-OSA-08) is itself a labour question in disguise: someone maintains every record in this corpus, and the fragility of volunteer maintenance is the fragility of unvalued labour.

## Five sub-cells

### 1. Open software for labour governance — the predicted empty layer, confirmed

The commercial layer is dense and employer-side: PickApp (workforce hours, piece-rate output, QR attendance, live dashboards), FieldClock (real-time labour tracking), Croptracker (piece-rate payroll). The shape is uniform — labour data collected by the employer, for the employer, often feeding algorithmic management of piece-rate work. This is the surveillance layer of farm work.

The worker-side open layer is nearly absent:

- **WeClock** (UNI Global Union, weclock.it): a self-tracking app for workers to record their own hours, breaks, and conditions — explicitly worker-held ("no other app provides workers and their unions with data that is not owned, controlled, seen or taken by any third party"). Free and open source, code at gitlab.com/weclock. Built for unions generally, not agrifood; **no agricultural deployment located.** Candidate record.
- Wage-theft and abuse-reporting apps for day labourers (Cornell ILR Worker Institute coverage of a worker-reporting app) — general-purpose, not farm-specific.
- farmOS (curated) carries labour records — but as employer-side management data within the farm business, not as a worker-governed surface. The distinction matters: open licence, management-side function.

**Honest absence (headline for this cell): no free-software implementation for on-farm labour governance exists anywhere — no worker-side scheduling, pay verification, grievance, or conditions layer.** The grocery method predicted this empty layer; the scan confirms it. Empty layers locate the frontier, and the labour layer is the frontier the open agrifood movement has not built for.

### 2. Migrant and seasonal programmes: opacity with one public surface (Canadian frame)

Canada's farm workforce is substantially unfree to exit: StatCan counts 74,000+ temporary foreign agricultural workers annually (up almost 40% in under a decade); the SAWP (1966-) binds workers to a single employer and employer-provided housing; ~30,000 agricultural migrant workers arrive per year (IRPP). The data shape of this system is employer- and state-held: LMIA applications, EMP5598 housing inspection reports, employer compliance records. Public surfaces are minimal — IRCC's published list of employers found non-compliant is essentially the only open accountability artifact. BC reporting found ~70% of migrant-worker housing inspections are announced to the employer in advance (Western Investor, verified lead only).

Advocacy infrastructure (not open infrastructure): Migrant Workers Alliance for Change (member-led, Status-for-All campaign), UFCW's Agriculture Workers Alliance (10 support centres, 13,000+ members), Migrant Worker Community Program (Leamington). Housing-and-health research (Caxaj et al.; PMC 10804689) documents the conditions the closed data hides.

**Shape: the most vulnerable workforce in Canadian agrifood is also the least covered by any open layer — its data flows to employers and the state, its enforcement surface is one thin public list, and worker-held records (the WeClock pattern) are the missing instrument.** A data-governance project that opens farm-business data while leaving workforce data employer-held has answered the wrong question for the people with the least power.

### 3. Worker-owned production: farmworker cooperatives

The ownership answer exists but is small and under-documented: Digger's Mirth (Burlington VT — worker-owned collective farm, equal hourly wage across roles), Real Pickles (worker-owned processing cooperative, Greenfield MA), and the farmworker-cooperative model generally (farmbilllaw.org 2022: jointly owned, democratically controlled by farmworkers, distinct from producer co-ops; California's AB2849 study weighed worker co-op vs employee-ownership-trust transitions). Coverage in the corpus's home jurisdiction (Canada): effectively none located — Canadian farmworker co-ops did not surface in this pass.

**Shape: worker ownership is real, structurally distinct from the producer co-ops that dominate the corpus's Current 4, and nearly invisible in both the corpus and the open-technology layer — no farmworker cooperative in this scan runs on, or has built, open tooling for its own governance.**

### 4. Platform cooperativism: the one corpus answer, extended

CoopCycle remains the corpus's only direct answer to the labour question, and this scan verified the mechanism: the Coopyleft licence restricts commercial use to cooperatives, associations, and limited-profit organizations (verified on coopcycle.org/en/coopyleft) — open code that legally refuses the gig-platform buyer. The ecosystem around it is growing in delivery (OpenCourier protocol, Platform Cooperativism Consortium, 2026; Platform Cooperative Development Kit on GitHub) and thin everywhere else: Apoidea (an open-source ERP proposal for worker co-ops) exists as a community post, not a deployed system.

**Shape: the labour-owned open layer is legally innovative (Coopyleft, OpenCourier) but geographically and sectorally narrow — bike delivery has a commons; fields, greenhouses, and packing sheds do not.**

### 5. Automation, and maintenance as labour

Two angles close the cell. First, automation: recent research (Agricultural Systems, 2026 — worker-outcomes paper; extension commentary) argues the farmworker workforce has no pathway into the design and adoption of agricultural technology — the same participation failure the corpus documents for farmers (G-OSA-18), one layer down, with less power to refuse. Algorithmic-management research (piece-rate surveillance, automated scheduling) is arriving in agriculture through the commercial tools in sub-cell 1.

Second, maintenance: the corpus's own fragility findings are labour findings. L'Atelier Paysan — the SCIC cooperative that *was* the labour answer on the machinery side — was liquidated 21 April 2026 (Tribunal de Commerce de Grenoble, verified on latelierpaysan.org) and is reorganizing as a movement of two associations (Communs Paysans, Soudons les Fermes — vitisphere.com). The lesson cuts both ways: a worker-led open organization without a durable economic engine dies like any other; the designs survive as commons only if the succession actively protects them. The seventh maintenance archetype (pooled co-funding circle, Foodsoft/Democratic Tech Fund) is the labour-positive answer: workers' and members' organizations paying for the maintenance labour that volunteerism undervalues.

---

## Provisional resolution: four shapes

1. **Employer-side closed, worker-side absent.** Farm labour software is a closed, surveillance-shaped market (hours, piece rate, attendance, dashboards); the worker-side open equivalent (self-tracking, pay verification, grievance) exists only as general-purpose union tooling (WeClock) with no agricultural deployment.
2. **Ownership without tooling.** Farmworker cooperatives and platform cooperativism are the structural answers (equal wages, Coopyleft, OpenCourier), but they operate with no software commons beyond delivery, and farmworker co-ops have no open-tooling footprint at all.
3. **State-held workforce data with one public surface.** The migrant-labour system runs on employer/state-held records; the single open accountability artifact is the employer non-compliance list; worker-held data instruments do not exist in this sector.
4. **The open layer's own labour is its blind spot.** Maintenance fragility (L'Atelier liquidation, volunteer archetypes) is unvalued labour; the pooled funding circle is the observed fix. An open agrifood movement that cannot fund its own maintainers cannot credibly speak for farm workers.

**Headline formulation: open agrifood has been built around the farm as an enterprise, not around the farm as a workplace.** The corpus's openness instruments answer "who owns the farm's data and tools"; they do not yet answer "who owns the worker's data, time, and conditions." The grocery lens needed a sixth layer it does not have; labour is the layer.

## Relation to the corpus

- **Definition document (2026-09-07) §2.7**: governance is the kind of openness that answers value capture. Labour is the strongest test of that claim — and the cell shows governance answers are scarce exactly where power is lowest.
- **G-OSA-18 (farmer agency in practice)**: fieldwork-bound; this cell adds the worker side of the same question and the same fieldwork need.
- **Current 4 / G-OSA-28**: CoopCycle anchor confirmed; farmworker co-ops are a structurally distinct member class the currents do not yet name.
- **Maintenance taxonomy (G-OSA-08 + seventh archetype)**: re-read as labour evidence.

## Verification candidates for `examples/`

1. **weclock.md** (candidate) — UNI Global Union worker self-tracking app; free/open source (gitlab.com/weclock); verify licence and activity against the repository; the corpus's first worker-held-data record.
2. **diggers-mirth.md** (candidate) — worker-owned collective farm, equal hourly wage; verify against current primary sources; would anchor a farmworker-cooperative record class.
3. Leads (not records): OpenCourier protocol (platform.coop); Apoidea worker-co-op ERP (community post only); IRCC employer non-compliance list (structural surface, worth a record only if the Canadian labour cell is deepened); Agricultural Systems 2026 farmworker-technology-pathway paper (paywalled; abstract-level lead).

## What this scan does not do

- No interviews with farm workers, union staff, or cooperative members — every claim in sub-cells 2 and 3 is document-level.
- No Global South or local-language pass (the machine-data and Global South scans showed those passes routinely change the picture); Spanish/French/Arabic-language worker-side tooling is unsearched.
- Paywalled research (Agricultural Systems 2026; Muñoz et al. already registered via grocery feedback §7) is abstract-level only.
- Does not attempt a labour-economics synthesis (wage data, displacement modelling) — that is a different discipline and a different register.

## Suggested next steps

- Verification pass on the two candidates (repo-level licence check for WeClock; primary-source check for Digger's Mirth).
- Decision (yours): whether the labour cell stays a one-scan finding, or becomes the corpus's second grocery-style concept lens ("the sixth layer") — the definition document's §3 and the empty-layer method both point that way, but it is a framing commitment, not a scan outcome.
- Event tie-in: session 3's situation design touches who bears risk; the labour finding gives the room a concrete, Canada-centred question (74,000 workers, one public list) without requiring any new event work.

Not legal advice.
