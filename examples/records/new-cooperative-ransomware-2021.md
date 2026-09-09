# NEW Cooperative BlackMatter ransomware attack (2021)

- Status: `curated`
- Region / reach: United States (Fort Dodge, Iowa; 36 locations, western/central Iowa; grain marketing/storage, feed, agronomy; feeding-schedule software used for millions of farm animals)
- Incident: BlackMatter ransomware attack, 2021-09 (weekend of the 18th–19th)
- Field-guide context: opened via the A4 cybersecurity/resilience scan (G-OSA-38, `research/2026-09-cybersecurity-resilience-scan.md`); verified 2026-09-09
- Record type: incident counter-example — the co-op case; membership does not confer resilience

## What happened

BlackMatter (a REvil-successor ransomware operation) encrypted NEW Cooperative's networks over the weekend of 18–19 September 2021 and demanded **US$5.9M**, doubling to $11.8M if unpaid within five days. The gang threatened to publish stolen data — invoices, R&D documents, and **the source code of the co-op's proprietary soil-mapping technology**. NEW Cooperative took systems offline to contain the attack, notified law enforcement (FBI/CISA involvement followed), and developed a workaround; the demand was reportedly negotiated down (widely reported ~$500k+ payment was neither confirmed nor relevant to the structural finding).

## Impact (verified)

- Feeding-schedule software serving grain contracts and rations for millions of animals disrupted during a critical period.
- Systems taken offline as containment; **farmers reverted to paper tickets to log grain shipments** (thenews.coop; multiple wire reports).
- US Agriculture Secretary Tom Vilsack publicly urged the agri-co-op sector to improve cyber defences after this and the Crystal Valley (Minnesota) attack the same month.
- CISA/FBI alerts to grain cooperatives followed; between 15 September and 6 October 2021 six US grain cooperatives were hit by various ransomware strains.

## Open layer

**None in the way that mattered.** The co-op is member-owned — governance is cooperative — but its soil-mapping source code, feeding-schedule platform, and logistics systems were proprietary and centralized. The threatened leak of its own source code underlines the distinction the corpus keeps drawing: ownership structure and openness of assets are separate layers (the same finding as G-OSA-33's "open governance without open assets" shape — here, *governed* assets that were not open).

## Why it belongs

1. **Cooperative ownership is not a security layer.** The attack hit a member-owned co-op, not a multinational — the first datum in the corpus that the "community ownership" answer to concentration does not buy resilience by itself.
2. **The fallback was paper.** When the centralized closed system was taken down *voluntarily* for containment, the operating fallback was paper tickets — the same recovery mode as the Maple Leaf manual workarounds. Closed cloud systems have no degraded-mode but working alternative.
3. **The leak threat targeted the co-op's own IP** — the source code it had invested in — showing ransomware economics reaching into exactly the layer (software assets) that openness would have made recoverable from any fork.
4. **Policy consequence**: this event is what put agricultural cooperatives on the US ransomware-alert map, making the co-op sector's exposure a documented regulatory concern in both the US and (via CSA T201) Canada.

## What it does not demonstrate

- That co-ops are attacked more than investor-owned firms — attackers followed food-system criticality, not legal form; the review by Kulkarni et al. (2025, Journal of Agriculture and Food Research, open access) documents 30 FA-sector incidents 2011–2023 across all forms.
- Final ransom amount; reported negotiation outcomes are unconfirmed.
- That the soil-mapping source code was actually leaked (threat was made; publication not verified).

## Sources and verification

- Industrial Cyber (demand, timeline, Claroty CISO comment): https://industrialcyber.co/news/blackmatter-ransomware-group-strikes-new-cooperative-makes-demand-of-5-9-million/ (2021-09-21)
- Co-op News / thenews.coop (Vilsack, paper tickets, soil-mapping source threat): https://www.thenews.coop/us-farm-co-ops-urged-to-improve-security-after-cyber-attacks/
- Reuters via company statement (containment): https://www.reuters.com/technology/iowa-farm-services-company-reports-cybersecurity-incident-2021-09-20/
- CISA Food and Agriculture Sector (post-incident alerts): https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors/food-and-agriculture-sector
- Kulkarni et al. 2025, "A review of cybersecurity incidents in the food and agriculture sector," Journal of Agriculture and Food Research 23 (CC BY-NC-ND): https://doi.org/10.1016/j.jafr.2025.102245
- Last checked: 2026-09-09

Not legal advice.
