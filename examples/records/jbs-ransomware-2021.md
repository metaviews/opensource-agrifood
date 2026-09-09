# JBS ransomware attack (2021)

- Status: `curated`
- Region / reach: multinational — US, **Canada (Brooks, AB)**, Australia; world's largest meat processor (~one-fifth of global meat supply)
- Incident: REvil ransomware attack, 2021-05-30/31
- Field-guide context: already partially documented in the processing scan's beef row (G-OSA-33, `research/2026-08-processing-sectoral-scan.md`); opened as a full record via the A4 scan (G-OSA-38); verified 2026-09-09
- Record type: incident counter-example — the largest food-sector cyberattack on record, and the one whose Canadian detail is already load-bearing in the corpus

## What happened

On 30 May 2021 (Memorial Day weekend), REvil — a Russian-speaking ransomware gang per the FBI — hit servers supporting JBS operations in North America and Australia. All JBS USA beef plants were temporarily inoperative; ~7,000 Australian workers were stood down. On 9 June 2021, JBS USA CEO Andre Nogueira confirmed the company **paid the equivalent of US$11M (~CA$13M) in bitcoin**.

## Canadian detail (the corpus's own anchor)

The JBS Canada beef plant at Brooks, Alberta — one of only two plants (with Cargill High River) comprising ~85%+ of Canadian beef processing capacity per the House of Commons Agriculture Committee figure already recorded in G-OSA-33 — shut down and idled roughly 2,500–2,800 workers, resuming production about a week later (NYT; CBC; Global News). Within the corpus this is the same plant concentration documented in A1, now seen through its failure mode: when one of two plants goes dark, there is no national fallback.

## Open layer

**None.** Kill-floor scheduling, carcass tracking, payroll, and logistics are proprietary and centralized at corporate servers — the attack vector was exactly that centralization.

## Why it belongs

1. **Concentration is the vulnerability, demonstrated at global scale.** The attack disabled slaughter capacity for ~one-fifth of world meat supply through corporate IT servers — no plant-level breach needed. In Canada it idled half the national beef kill capacity with a single encryption event.
2. **The ransom became the recovery plan.** With no alternative infrastructure, paying was the only fast path back; the $11M figure is the price of single-point-of-failure architecture, not just of criminality.
3. **It put food on the critical-infrastructure cyber agenda**: White House engagement with the Russian government, FBI attribution, and the sequence of US agriculture-sector alerts (CISA noted six grain-cooperative ransomware attacks between 15 September and 6 October 2021 alone) trace to this event's prominence.

## What it does not demonstrate

- That JBS's security was worse than peers — it was the largest target, and the largest food-sector cyberattack on record per Recorded Future at the time.
- That the beef shortage consumers feared materialized nationally; disruption was days-scale with price effects concentrated regionally.
- Data-exfiltration scope was never fully disclosed; the payment was justified partly as exfiltration insurance.

## Sources and verification

- Wikipedia overview with sourced timeline: https://en.wikipedia.org/wiki/JBS_S.A._ransomware_attack
- CBC (ransom confirmed; Brooks plant context): https://www.cbc.ca/news/canada/calgary/jbs-canada-cyberattack-1.6060121 (2021-06-09)
- New York Times (2,500 Brooks workers idled): https://www.nytimes.com/2021/06/01/business/meat-plant-cyberattack-jbs.html
- Global News (Brooks resumes production): https://globalnews.ca/news/7915441/jbs-canada-brooks-beef-processing-plant-cyberattack/
- Reuters (payment confirmation): https://www.reuters.com/technology/jbs-paid-11-mln-response-ransomware-attack-2021-06-09/
- WSJ ($11M payment): https://www.wsj.com/tech/cybersecurity/jbs-paid-11-million-to-resolve-ransomware-attack-11623280781
- Last checked: 2026-09-09

Not legal advice.
