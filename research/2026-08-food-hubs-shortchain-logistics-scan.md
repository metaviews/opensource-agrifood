# Environmental Scan: Open Food Hubs, Short-Chain Logistics, and Cooperative Distribution (G-OSA-28)

- Date: 2026-08-14
- Method: Bounded pass across open food marketplace software, cooperative delivery platforms, and short-chain distribution systems. Evaluated repository activity, licensing mechanisms (AGPL vs Coopyleft), and governance structures.
- Focus: G-OSA-28 (Food Hubs, Short-Chain Logistics & Cooperative Distribution layer).

## Why this cell matters

The economic capture of agricultural value occurs disproportionately at the point of intermediation, distribution, and last-mile logistics. Commercial gig-economy delivery apps (DoorDash, UberEats, Instacart) and proprietary marketplace platforms (Shopify, Amazon) extract 20–35% transaction tolls from producers. Open-source short-chain logistics software and platform cooperatives offer an alternative infrastructure for regional food sovereignty.

## Headline Finding

**The open short-chain logistics layer is mature, production-proven, and explicitly tied to cooperative governance. It exhibits two major structural shapes: (1) Open-source marketplace and food hub coordination (`Open Food Network` global core: AGPL-3.0, 1,260 stars, active across 20+ countries) and (2) Federated cooperative dispatch and last-mile delivery (`CoopCycle`: 600 stars, 70+ federated delivery co-ops, pioneering the "Coopyleft" license to protect worker governance).**

## Working Matrix: Open Food Distribution & Logistics

| Layer | Open Implementations | Status & License | Governance Form | Extractive Counterparts |
|---|---|---|---|---|
| **Regional Food Hubs & Wholesale** | Open Food Network (OFN) | Curated (AGPL-3.0) | Global non-profit foundation + regional affiliate co-ops | Local Line, MarketMaker, Shopify |
| **Last-Mile Cooperative Delivery** | CoopCycle | Curated (Coopyleft / Worker Co-op only) | European Cooperative Society (SCE federation) | UberEats, Deliveroo, DoorDash, Instacart |
| **Direct Farm Commerce** | Katuma, CSA web modules | Candidate / Lead (Open Source) | Community & maintainer led | Square, Shopify, Barn2Door |

## Cases Added / Updated

| Record | Status | Open Layer | Key Finding |
|---|---|---|---|
| `coopcycle.md` | `curated` | Web & Mobile Logistics (Coopyleft) | Innovative legal and technical platform enabling 70+ worker delivery cooperatives to run food distribution without gig-economy exploitation. |

## Contested Claims & Key Takeaways

1. **Licensing as Governance Defense ("Coopyleft")**: CoopCycle's decision to use a custom cooperative license rather than standard OSI-approved open source demonstrates an active debate in open agrifood: whether open code can be exploited by venture-backed platforms unless licensing restricts use to democratic worker/producer cooperatives.
2. **Federated vs Monolithic Scale**: Open short-chain logistics platforms achieve global scale not by centralizing corporate ownership, but by federating autonomous regional instances (OFN national instances, CoopCycle local co-ops).

## Honest Omissions & Gaps

1. Cross-hub inventory synchronization protocols (e.g. standard open schemas for interoperable B2B food hub catalogue exchange) remain informal and unstandardized.
2. Open cold-chain route optimization algorithms specifically tailored to perishable farm goods are largely integrated as generic vehicle routing plugins rather than domain-specific agrifood packages.

## Sources and Verification

- Open Food Network Repository: `https://github.com/openfoodfoundation/openfoodnetwork` (AGPL-3.0; verified 2026-08-14)
- CoopCycle Repository: `https://github.com/coopcycle/coopcycle-web` (Coopyleft; verified 2026-08-14)
- CoopCycle Federation: `https://coopcycle.org`

Not legal advice.
