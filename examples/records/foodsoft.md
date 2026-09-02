# Foodsoft

- Status: `curated`
- Region / reach: international (DACH, Netherlands, and beyond; dozens of co-ops)
- Project: https://foodcoops.net/
- Repository: https://github.com/foodcoops/foodsoft
- Field-guide context: new discovery via the grocery concept project (`research/grocery-feedback-2026-08.md` §2; provenance `grocery/research/open-source-software-stack.md`); verified 2026-09-02

## Problem addressed

Foodsoft is web-based operating software for member-work food co-operatives: shared product catalogue, member ordering, accounting, and job/membership duty scheduling. It supports the operational core of co-ops whose members both shop and run the store.

## Open layer

Open-source software (AGPL-3.0-or-later), self-hostable; a Co-op Cloud deployment recipe packages it for shared ops.

## What is actually open

The codebase is publicly available under the GNU Affero General Public License v3 or later (confirmed in the repository's LICENSE.md; configuration files are marked public domain, and some bundled third-party components carry other licences). Foodsoft can be self-hosted, modified, and extended. The foodcoops.net shared-hosting platform runs it for member co-ops, and a Co-op Cloud recipe exists (git.coopcloud.tech/coop-cloud/foodsoft).

## Governance and control

Co-ops control their own instance when self-hosting; the foodcoops.net shared platform lowers the barrier but concentrates hosting. Maintenance is thin relative to user base — the Democratic Tech Fund's Foodsoft circle reports 50-60 food co-ops willing to co-fund a dedicated maintenance team (the corpus's anchor case for the pooled co-funding circle maintenance archetype).

## Evidence of use

Dozens of co-ops use Foodsoft across Europe; the foodcoops.net platform and the co-funding circle's 50-60 interested organisations support this directionally, but no primary source enumerates deployed instances precisely. One minor release since March 2025 (v4.9.2, June 2026) with steady bug-fix commits through August 2026 — active but maintenance-thin. At Biobulkbende (Rotterdam) it reportedly runs on a server in one member's closet, illustrating the volunteer-ops fragility the funding circle is meant to answer.

## Maintenance and funding

Community-maintained with a Democratic Tech Fund co-funding circle (50-60 co-ops willing to co-fund maintenance) and Co-op Cloud recipe commons as complementary deployment infrastructure. This is the parent corpus's first retail-side instance of the pooled co-funding circle archetype (see `research/2026-08-maintenance-funding-profiles.md`).

## Why it belongs

Foodsoft is the structure-layer tool of the retail open stack: mature where it serves operations (ordering, accounting, scheduling), and the clearest live case of co-ops attempting to fund their own infrastructure commons. It extends G-OSA-28's short-chain layer from logistics (CoopCycle) and marketplace (OFN) to the co-op's internal operation.

## What it does not demonstrate

Willingness-to-fund is not yet verified paid maintenance at scale. Instance counts are not precisely quantified. It does not own the sourcing relationship or any eater-facing information surface — it is operation software, not an open operation.

## Sources and verification

- Project: https://foodcoops.net/
- Repository: https://github.com/foodcoops/foodsoft
- Co-op Cloud recipe: https://git.coopcloud.tech/coop-cloud/foodsoft
- Democratic Tech Fund Foodsoft circle (50-60 co-ops willing to co-fund)
- Last checked: 2026-09-02

Not legal advice.