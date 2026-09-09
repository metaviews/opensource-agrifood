# Sobeys / Empire ransomware attack (2022)

- Status: `curated`
- Region / reach: Canada (national; ~1,500 stores — Sobeys, Safeway, IGA, Foodland, Farm Boy, Lawtons, Needs)
- Incident: ransomware attack on Empire Company Limited, 2022-11-04
- Field-guide context: opened via the A4 cybersecurity/resilience scan (G-OSA-38, `research/2026-09-cybersecurity-resilience-scan.md`); verified 2026-09-09
- Record type: incident counter-example — the first incident record in the collection; it earns its place by what the *absence* of an open layer cost

## What happened

On 4 November 2022, Empire (TSX: EMP.A; parent of Sobeys, Canada's second-largest grocer) was hit by what it first called an "information technology systems issue" and later a "cyber security event." Employees told CBC the attack was ransomware; SecurityWeek reported the Black Basta gang was suspected. Empire never confirmed the vector, whether a ransom was demanded, or whether one was paid.

## Impact (verified against company disclosure and reporting)

- Pharmacy services chain-wide shut down for four days — staff could not access computers to fill prescriptions (CBC).
- Self-checkout, gift cards, and the Scene loyalty program down for about a week (CBC).
- Store staff unable to place orders or process inventory for days; some outlets ran short of items (CBC, "Inside the turmoil at Sobeys-owned stores").
- Empire's Q2 FY2023 disclosure: **approximately $25M impact on fiscal 2023 net earnings, net of insurance recoveries** (CBC, 2022-12-15; Financial Post).
- Investigation into whether customer personal data was exfiltrated; two years' credit monitoring was later offered in the parallel Maple Leaf case and here the company said it would notify regulators if data was taken.

## Open layer

**None.** The retail stack (ordering, inventory, pharmacy, checkout, loyalty) is proprietary, centralized, and cloud-dependent. That absence is the analytic point: the record is curated as the counter-example that anchors G-OSA-38's first shape — concentration is the vulnerability.

## Why it belongs

1. **Concentration converted one company's breach into a system-level event.** Sobeys/Empire is one of two firms controlling Canadian grocery. When its pharmacies went dark, customers of Canada's second-largest chain had prescriptions delayed with nowhere to switch — the alternative is the other firm of the same structure, equally closed. This is A1's concentration thesis (2 firms ≈ 85%+ of beef; grocery similarly concentrated) observed in its failure mode.
2. **The fallback was manual, not alternative infrastructure.** Staff reverted to paper and improvisation, as at NEW Cooperative in Iowa the year before. Closed cloud-native systems fall back to paper; the open-local pattern (ISOBlue, OpenSprinkler, self-hosted farmOS) would fall back to one's own degraded system.
3. **The cost was priced publicly**: $25M net of insurance — a rare disclosed figure that lets "resilience" be discussed in dollars at the event without hand-waving.

## What it does not demonstrate

- That proprietary systems fail more often per-instance than open ones — no comparative incident-rate data exists. The record shows how a single closed point of failure propagates in a concentrated market, not relative frequencies.
- That the attack succeeded *because* of closed source; causes of the initial intrusion were not disclosed. The open layer's absence bears on blast radius and recovery, not necessarily on entry.
- The ransomware attribution (Black Basta) is journalistic, not company-confirmed.

## Sources and verification

- CBC (impact details, $25M, timeline): https://www.cbc.ca/news/canada/nova-scotia/sobeys-cyber-attack-25-million-1.6686838 (2022-12-15)
- CBC (pharmacies non-functional): https://www.cbc.ca/news/canada/nova-scotia/empire-sobeys-lawtons-pharmacies-functional-again-after-computer-problems-1.6647489
- CBC (staff turmoil, ordering/inventory): https://www.cbc.ca/news/canada/nova-scotia/inside-turmoil-sobeys-ransomware-attack-1.6650636
- Financial Post (earnings impact): https://financialpost.com/news/sobeys-empire-earnings-estimate-miss-cyberattack
- SecurityWeek (Black Basta attribution, unconfirmed): https://www.securityweek.com/canadian-supermarket-chain-sobeys-hit-ransomware-attack/
- Last checked: 2026-09-09

Not legal advice.
