# FoodCoopShop

- Status: `curated`
- Region / reach: DACH-centred (Austria, Germany, Switzerland, Italy), international software
- Project: https://www.foodcoopshop.com/
- Repository: https://github.com/foodcoopshop/foodcoopshop
- Field-guide context: new discovery via the grocery concept project (`research/grocery-feedback-2026-08.md` §2; provenance `grocery/research/open-source-software-stack.md`); verified 2026-09-02

## Problem addressed

Producer-direct ordering software for food co-ops and farm shops: producer login areas, configurable delivery rhythms, cashless member credit/balance system, automated invoicing and order lists. It serves co-ops that buy directly from producers rather than operating a member-work store.

## Open layer

Open-source software (AGPL-3.0, confirmed in the repository's LICENSE file), self-hostable; the project also offers a hosted deployment map of co-ops.

## What is actually open

The full ordering/management platform code is publicly available under AGPL-3.0. Latest release v4.2.0 (2026-03-04); development active through August 2026 (last push 2026-08-31), with interim feature commits Apr-Jun 2026, CI, and Docker support.

## Governance and control

Effectively a single-maintainer project: Mario Rothauer (Austria) authored ~9,900 of ~10,050 commits (~98.5%), with 22 total contributors. The open core is paired with paid installation, maintenance, and support sold via foodcoopshop.com, and many listed deployments are hosted by the maintainer's services — a textbook open-core/service model (maintenance archetype 3) at retail scale.

## Evidence of use

A self-reported users list and map show deployments across the DACH region with entries dated 2025-2026 (e.g., Dorfladen-style village shops, food co-ops). The map is self-reported, not an independently verified deployment registry.

## Maintenance and funding

Paid installation/maintenance/support services from the sole maintainer fund continued development. The bus-factor risk is extreme: one developer carries essentially the entire codebase, making this the retail-side contrast to Foodsoft's community/co-funding model.

## Why it belongs

FoodCoopShop documents the second governance shape of the retail open stack: where Foodsoft is community-governed and thin, FoodCoopShop is single-maintainer open-core and very active. The pair bracket the maintenance question (G-OSA-08) for consumer-co-op software.

## What it does not demonstrate

A single maintainer is not community resilience; the project's durability is the maintainer's continued capacity and service revenue. The deployment map is self-reported. It does not own sourcing relationships or eater-facing participation either — it is producer-direct ordering software.

## Sources and verification

- Project: https://www.foodcoopshop.com/
- Repository: https://github.com/foodcoopshop/foodcoopshop
- Users list/map: https://foodcoopshop.github.io/en/users.html
- Last checked: 2026-09-02

Not legal advice.