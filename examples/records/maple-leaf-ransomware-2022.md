# Maple Leaf Foods ransomware attack (2022)

- Status: `curated`
- Region / reach: Canada (Mississauga, ON HQ; ~14,000 employees; Canada, US, Asia)
- Incident: ransomware attack on Maple Leaf Foods Inc. (TSX: MFI), disclosed 2022-11-06
- Field-guide context: opened via the A4 cybersecurity/resilience scan (G-OSA-38, `research/2026-09-cybersecurity-resilience-scan.md`); verified 2026-09-09
- Record type: incident counter-example — refusal-to-pay case, paired with sobeys-ransomware-2022.md

## What happened

Maple Leaf Foods — Canada's flagship packaged-protein company (Maple Leaf, Schneiders, Schneider's Country Naturals; ~14,000 employees) — confirmed on 6 November 2022 a system outage linked to a cybersecurity incident. In early December, the Black Basta ransomware group listed the company on its leak site; Maple Leaf publicly refused the ransom demand.

## Impact and response (verified)

- Company statement (2022-11-06): cybersecurity and recovery experts engaged; business-continuity plans executed; "full resolution of the outage will take time and result in some operational and service disruptions."
- **All plants continued operating throughout November** using manual workarounds (Food Business News) — production-level continuity was maintained even as corporate systems were down.
- Ransom refused: "our company will not pay ransom to criminals" (Food Business News, 2022-12-02). Contrast with JBS's $11M payment sixteen months earlier.
- Cost: **at least CA$23M** (WattAgNet / company reporting).
- Unauthorized access to some data acknowledged; two years of credit monitoring offered to employees.

## Open layer

**None.** ERP, plant scheduling, payroll, and supply-chain systems are proprietary and centralized. As with Sobeys, the record's value is as the disciplined counter-example.

## Why it belongs

1. **The Canadian refusal case.** Between Sobeys (disclosure opaque) and JBS (paid $11M), Maple Leaf is the third Canadian-incident datum of 2021–22 and the one that refused to pay — and paid more than Sobeys in disclosed cost anyway. Resilience was purchased (experts, continuity plans, manual workarounds), not structural: the company kept plants running on *people*, the way NEW Cooperative's farmers kept grain moving on paper tickets.
2. **It sharpens the scan's headline.** A firm can do nearly everything right — refuse ransom, keep plants running, disclose — and still absorb a CA$23M hit because its systems are one centralized, closed surface. The problem is not bad practice; it is architecture plus concentration.
3. **Workforce dimension**: the manual workarounds were human labour unplanned in any IT budget — a direct bridge to C2 (labour layer, G-OSA-36): the last-resort resilience of the closed system is worker improvisation.

## What it does not demonstrate

- That refusal-to-pay is costlier than paying in general (JBS paid $11M; Maple Leaf's ≥CA$23M includes restoration and hardening costs not directly comparable).
- That open systems would have kept corporate IT running — the claim the corpus makes is narrower: federation and local operability shrink blast radius, they do not prevent intrusion.
- Entry vector and full data-exfiltration scope were never publicly detailed.

## Sources and verification

- Company statement (primary): https://www.mapleleaffoods.com/news/system-outage-linked-to-cybersecurity-incident/ (2022-11-06)
- Food Business News (ransom refused): https://www.foodbusinessnews.net/articles/22752-maple-leaf-foods-rejects-ransom-demand-following-cyberattack (2022-12-02)
- Food Business News (manual workarounds): https://www.foodbusinessnews.net/articles/22595-maple-leaf-foods-employing-manual-workarounds-following-cyberattack
- SecurityWeek (Black Basta claims credit): https://www.securityweek.com/ransomware-gang-takes-credit-maple-leaf-foods-hack/
- WattAgNet (≥CA$23M cost): https://www.wattagnet.com/broilers-turkeys/article/15537594/cyberattack-cost-maple-leaf-foods-at-least-ca23-million
- Last checked: 2026-09-09

Not legal advice.
