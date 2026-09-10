# CORE-POS

- Status: `curated`
- Region / reach: global; community-maintained point-of-sale for food co-ops and small grocery
- Project: CORE-POS (Cooperative Operational Retail Environment), successor/rewrite of the original IS4C (Integrated Systems for All Co-ops) project
- Field-guide context: opened via the A5 northern/remote food systems scan (G-OSA-39) as the retail-layer open artifact adjacent to Arctic Co-operatives; verified 2026-09-09
- Record type: software record — the open retail stack that community-owned grocery could run on

## Problem addressed

Grocery point-of-sale is dominated by proprietary vendors (ECRS, LOC, and the big retail suites) whose per-lane licensing prices and closed data models fit poorly with cooperative ownership: the co-op's transaction data sits in a vendor's schema, on a vendor's terms, behind a recurring licence.

## Open layer

**GPL-2.0, verified via GitHub API 2026-09-09** (repo CORE-POS/IS4C; active — last push 2026-03-09; ~70 stars; self-hosted, PHP/MySQL stack covering lanes, back-office, member management, ordering). The full POS lifecycle — checkout, pricing, member equity/patronage, vendor ordering — runs on community-maintained open code. Development is genuinely grassroots: maintained by working co-op technologists, not a vendor.

## Why it belongs

1. **It is the missing retail-layer artifact in the corpus's food-coop software picture.** The grocery concept's software stack (Foodsoft, FoodCoopShop, OFN) covers ordering, hubs, and webshops; CORE-POS is the open layer *inside the store* — the lane, the scale, the member number. With it, the five-layer open grocery has a complete open path from field to checkout.
2. **The northern connection is the question, not the finding**: Arctic Co-operatives' 32+ member stores run conventional proprietary retail systems (no open deployment located). CORE-POS is the existing artifact a community-owned northern store could run — offline-capable, self-hosted, no per-lane fees — making it the concrete answer to "what would the systems layer of the governance-open north look like."
3. **Maintenance profile**: it fits the corpus's volunteer/co-op-technologist maintenance archetype — GPL, no foundation, no vendor — with the durability questions that profile always carries.

## What it does not demonstrate

- Any northern or Arctic deployment (none located as of verification).
- Enterprise-grade support: it is a community project; a 32-store federation migrating to it would be a first.
- Modern e-commerce integration depth comparable to commercial suites (its strength is the store floor, not the web storefront — that's OFN/Foodsoft territory).

## Sources and verification

- GitHub (licence verified 2026-09-09): https://github.com/CORE-POS/IS4C
- Project wiki/documentation: https://github.com/CORE-POS/IS4C/wiki
- Community discussion of its role in food co-ops: https://community.coops.tech/t/core-pos-the-cooperative-point-of-sale-system/866
- Last checked: 2026-09-09

Not legal advice.
