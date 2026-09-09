# Cybersecurity and Resilience of the Food System: the Open Layer (A4)

**Register:** G-OSA-38 · **Workstream:** A4 (cybersecurity and resilience — application, short) · **Date:** 2026-09-09

Method: targeted sectoral scan, five sub-cells — (1) incident record (what has actually been hit and how), (2) the resilience argument for openness (auditability, no single vendor of failure, forkability, local operability), (3) the cost side (open attack surface, supply-chain compromise, under-maintained commons), (4) open positive designs that already exist in the corpus and adjacent, (5) Canadian frame (CSA Group standard, Cyber Centre, sector profile). Sources read inline 2026-09-09; incident figures cross-checked against primary reports where reachable. This scan is deliberately short: it exists so that Session 3's fiction (a cyberattack on Canadian agrifood, then a rogue-AI reveal) stands on research rather than on vibes.

---

## Sub-cell 1: The incident record

| Incident | Sector / system | What failed | Relevance to the openness question |
|---|---|---|---|
| JBS ransomware (REvil), 2021-05-30 | World's largest meat processor; beef/pork plants in US, **Canada** (Brooks AB), Australia | All US beef plants temporarily inoperative; ~7,000 Australian workers stood down; **$11M ransom paid** in bitcoin | Concentration converts a single IT breach into a national meat-supply event — the A1 finding (2 firms ≈ 85%+ of Canadian beef capacity) is also a single-point-of-failure finding (Wikipedia/Reuters/WSJ) |
| NEW Cooperative (BlackMatter), 2021-09 | Iowa farm-supply & grain co-op, 36 locations; feeding-schedule software for millions of animals | $5.9M demand (doubled on delay), threatened to leak **source code of its soil-mapping technology**; systems taken offline; farmers reverted to **paper tickets** | Co-ops are attacked too — ownership structure is not a security layer; and the workaround that held was a low-tech manual fallback, not an alternative vendor (industrialcyber.co, thenews.coop) |
| Crystal Valley Co-op, 2021-09 | Minnesota grain/input co-op, ~8 elevators, 25M bu storage | Daily operations interrupted | Grain logistics is time-sensitive; ransomware timed to harvest or planting maximizes leverage (DTN, Cybersecurity Dive) |
| AGCO, 2022-05 | Major farm-equipment OEM (tractors, during planting season) | Production facilities disrupted, dealers/sales hit | The equipment vendor itself is a single point of failure in machinery software (industrialcyber.co, Michigan Farm News) |
| Sobeys/Empire, 2022-11 | Canadian grocery & pharmacy (Black Basta suspected) | **Pharmacies down 4 days**; self-checkout, gift cards, loyalty down ~1 week; staff couldn't place orders or process inventory; **$25M cost after insurance** | Canada's grocery duopoly: one attack idled pharmacy counters nationwide and left shelves thinning — customers had nowhere to switch because the alternative is also one of two firms (CBC, Financial Post) |
| Maple Leaf Foods, 2022-11 | Canadian meat processor, 14,000 employees (Black Basta) | Refused ransom; disruption cost **≥ CA$23M** | Canada's flagship processor absorbed the hit rather than pay — resilience was purchased, not structural (company statement, foodbusinessnews, securityweek) |
| AGCO/Deere context + XZ Utils backdoor (2024), CrowdStrike outage (2024-07) | Software supply chain, single-vendor update pipelines | One flawed proprietary update grounded flights and hospitals worldwide — the purest demonstration that "nobody hacks us, we break ourselves" is a top food-relevant failure mode | Centralized vendor dependence is itself the vulnerability; this is the strongest bridge to what openness does differently (Wikipedia, CISA, congress.gov CRS) |
| UNFI, 2025 | Largest US organic/wholesale grocery distributor | Cyberattack disrupted deliveries; empty shelves at dependent grocers | Distribution software outages propagate to retail faster than food spoils (trade reporting) |

Sub-cell verdict: the sector's big incidents are all **proprietary, centralized, cloud-dependent** systems failing in a concentrated market. That is not an accident — concentration was the A1 thesis, and cyberattack is the failure mode that concentration buys.

## Sub-cell 2: What openness buys for resilience

The corpus's own logic transfers here almost mechanically:

1. **Auditability.** Open source can be read, audited, and audited independently. The closed systems that failed at JBS, Sobeys, and Maple Leaf could not be independently examined even after the fact — breach forensics belong to the vendor and the insurer. (Contrast: XZ Utils was *caught*, precisely because the source was open and someone noticed the 500ms SSH latency. The catch is a property of openness; the exploit was too.)
2. **No single vendor of failure.** N farms running farmOS on their own hosts do not fail together because one cloud tenant was encrypted. The JBS/Sobeys/UNFI pattern — one company's downtime becomes a food-system event — has no analogue when software and data are federated.
3. **Forkability and local operability.** When systems are open, the fallback is *your* system running degraded on *your* hardware, not a phone line and a paper ticket. NEW Cooperative's paper-ticket workaround is what closed cloud-native systems fall back to.
4. **Transparency of the incident itself.** A sector running open software cannot hide a breach behind "cybersecurity incident" boilerplate; disclosure dynamics differ when the affected code is public.

## Sub-cell 3: What openness costs — the honest side

- **Open attack surface.** Openness removes security-by-obscurity; every bug is public. The empirical literature is contested, but the food-system case differs from consumer software: the deployment environment (offline-capable farms, seasonal windows, legacy machinery per NCC Group's 2026 agriculture cybersecurity white paper) means patches are *not* promptly applied even when available. Open code in an unpatched fleet is worse than closed code behind a vendor's forced updates.
- **Supply-chain compromise of commons.** XZ Utils (CVE-2024-3094) is the canonical case: a three-year social-engineering attack against a **under-resourced volunteer-maintained** open project, caught by luck. Agriculture's open layer is precisely the kind of small, trusted, load-bearing ecosystem (farmOS, OpenEPCIS, Pioreactor) that this threat model fits — and the maintenance-funding analysis already in the corpus (pooled funding circles, C2's unvalued maintenance labour) is also the security analysis. Under-paid maintenance is a security vulnerability.
- **Self-service is not self-defence.** Self-hosting farmOS on a farm office PC is a worse security posture than Sobeys' managed infrastructure for most realistic attackers. Openness without a shared, sector-appropriate hardening layer just relocates the breach.

Verdict: the resilience argument is real but conditional. Openness buys *systemic* resilience (no common-mode failure, forkability, auditability) while *per-instance* security depends on operational capacity the commons rarely has. The honest sentence for the event: openness distributes failure; whether it also dampens it depends entirely on the maintenance layer the project has already flagged as under-valued.

## Sub-cell 4: Open positive designs already in or adjacent to the corpus

| Artifact | Status | Why it matters for A4 |
|---|---|---|
| ISOBlue 2.0 (already known via A1-adjacent reading) | open hardware/software, CERN-OHL-class; stores a full season of machine data **locally on a 500GB SSD**, queues opportunistically when cellular returns | The design pattern: machine data that survives connectivity loss and vendor outage by default. Cloud is an optimization, not a dependency. |
| OpenSprinkler (corpus, G-OSA-25) | open firmware, explicitly operates **without internet**; local WiFi + native app with no cloud dependency | Local-operation design as the positive case: the controller keeps its promise when the internet is gone. |
| farmOS (corpus) | GPL-2.0+, self-hostable | The federated-farm-data pattern: an attack on one farm is not an attack on the fleet. |
| Underground Meats CC0 HACCP plan (corpus, G-OSA-33, archived case) | CC0, hosts dead, plan survives in Wayback | Knowledge commons survived its own infrastructure dying — the archive did what no proprietary wiki could. |
| CSA T201 (in progress, see sub-cell 5) | Canadian national standard, tailoring IEC 62443 to agri-food | The formal regulatory surface where "open" could be written in — currently silent on open source either way. |

## Sub-cell 5: Canadian frame

- **CSA Group / CSKA**: CSA Group research (2023–2026) with the Community Safety Knowledge Alliance found the food value chain **largely not implementing cybersecurity standards**; a National Standard of Canada (CSA T201, "Cybersecurity Guidance for the Food Value Chain") is in SDO comment as of 2026-08-18 (comment period closed 2026-09-09 — comment deadline fell today, 2026-09-09), tailoring IEC 62443 to agri-food subsectors and scaled to sector cyber maturity. Scope includes cooperatives and equipment/technology providers. This is the live Canadian policy surface for the session's subject.
- **Canadian Centre for Cyber Centre**: National Cyber Threat Assessment 2023-2024 flags ransomware against critical infrastructure as the top national threat; Canadian Centre for Cyber Centre has urged action on internet-accessible ICS. Food and agriculture is on Canada's critical-infrastructure list.
- **Sector concentration**: the incident record is Canadian twice over (JBS Brooks AB inside the 2021 event; Sobeys; Maple Leaf) — Canadian concentration and Canadian incidents are the same story as A1's.
- **Institutional events**: UBC's "Securing Canada's Ag-Food Systems: the nation's most vulnerable critical infrastructure" workshop (arc.ubc.ca) indicates academic policy interest already underway.

---

## Resolution

A4 resolves provisionally into **three shapes**:

1. **Concentration is the vulnerability.** Every major food-system cyber incident in the record ran on proprietary centralized systems inside a concentrated sector; Sobeys' customers "nowhere to switch" because the retail market is two firms is the same structure A1 documented. Openness's first contribution is *plural deployment*, not code.
2. **Openness buys auditability, federation, and forkability — conditionally.** The XZ case shows open source catching what closed source cannot; it also shows the maintenance fragility that the corpus has already identified as the open layer's core weakness (C2, maintenance-funding profiles). Under-funded maintenance is itself the attack vector of the 2020s.
3. **Local operability is the open design principle already proven.** ISOBlue, OpenSprinkler, self-hosted farmOS: keep the critical function running when the cloud can't. This is the concrete, non-hand-wavy answer to "what would open do here" — and it is also what Session 3's fiction is about.

**Headline:** *The food system's cyber fragility is not a technology gap, it is a concentration dividend — and the open layer's contribution is not "fewer bugs" but no single point of failure, at the price of a maintenance burden the commons has not yet learned to fund.*

## Candidate records for `examples/` (follow-up verification pass)

Priority order — these are the two that carry the argument, both Canadian:

1. **Sobeys/Empire ransomware (2022)** — counter-example: closed cloud retail stack, $25M, pharmacies down 4 days, no alternative retailer. Verify against CBC/Financial Post/Empire quarterly reports.
2. **Maple Leaf Foods (2022)** — counter-example: refused ransom, ≥CA$23M, Black Basta; primary sources are company statements.
3. **JBS 2021** — the largest; already partially documented in the processing scan's beef row (Canada angle: Brooks AB within the shutdown).
4. **NEW Cooperative / BlackMatter (2021)** — the co-op case, with the soil-mapping source-code leak threat as its analytic detail.
5. **ISOBlue 2.0** — positive case (already cited from the tractor-data literature; verify licence from repo).
6. **CSA T201** — the standards record (verify current status after comment period close).

Suggest NOT creating a record for XZ Utils (not agrifood); it belongs in the scan prose only.

## What this scan does not do

- It does not cycle candidates into `examples/` — that is the follow-up pass, per house practice.
- It does not claim open source is more secure in general; the scan argues the systemic-resilience case only, with the maintenance cost named.

Not legal advice.
