# SAMA (Solar Alone Multi-objective Advisor) — FAST open microgrid sizing tool

- Status: `curated`
- Region / reach: London, Ontario, Canada (Western University FAST Research Group); developed for global use
- Project: https://github.com/Sas1997/SAMA (canonical upstream) · https://github.com/uwo-fast/SAMA (organisation mirror)
- Field-guide context: opened 2026-10-14 at the user's direction, from a survey of the `uwo-fast` organisation. An enabling-infrastructure record for C4 (farm microgrids, G-OSA-40) and for the CEA case study's pivotal unknown — the cost of energy per kilogram of northern greenhouse produce (`cea/synthesis.md`). Not a scan (no G-ID). Verified 2026-10-14.

## Problem addressed

Designing a farm- or community-scale hybrid renewable microgrid (PV, battery, generator, grid-tie) requires techno-economic sizing — choosing component capacities that minimise lifetime cost under a site's load profile, weather, degradation and utility billing structure. The two tools that do this optimally, HOMER Pro and HOMER Grid, are closed and licence-restricted; a smallholder, a remote community, or a co-operative cannot read, adapt, or embed them.

## Open layer

Free, open-source Python software for hybrid microgrid design, sizing and operation optimisation, peer-reviewed and published to PyPI. It is the corpus's open *design/sizing* counterpart to its open *operational* energy-management layer (OpenEMS, OpenEnergyMonitor).

## What is actually open

Verified from the upstream repository, its Appropedia record and the peer-reviewed paper (2026-10-14):

- **`Sas1997/SAMA`** (canonical upstream; the FAST-affiliated author's repository, mirrored as `uwo-fast/SAMA`): a Python platform that optimises hybrid renewable-energy microgrid size and operation using metaheuristic algorithms, minimising **Net Present Cost over a 25-year project lifetime** across five design variables, with site-dependent load profiles, meteorological data, component degradation models and utility billing structures. 11 GitHub stars; last pushed 2026-10-07; distributed on PyPI as `SAMAbyRenXera`.
- **Peer-reviewed anchor:** Sadat, S. A., Takahashi, J., & Pearce, J. M. (2023), "A Free and open-source microgrid optimization tool: SAMA the solar alone Multi-Objective Advisor," *Energy Conversion and Management* 298:117686, https://doi.org/10.1016/j.enconman.2023.117686. The paper reports cross-validation of SAMA's results against HOMER Pro across two US climate zones (marine west coast and humid continental).
- **Stated unique features:** multi-objective optimiser, levelised-emission optimisation, pre-defined utility billing structures, and a top-down pricing methodology.
- **Licence — recorded as a discrepancy to resolve:** GitHub reports the upstream repository's licence as **AGPL-3.0**; the README badge says **"GPL v3"**; the repository root carries a file named `GNU General Public License (GPL) 3.0.txt` and a `License` directory. The exact licence text was not read, so the corpus records *AGPL-3.0 (per GitHub) vs GPL-3.0 (per badge/filename)* as unresolved — the difference matters (AGPL's network clause binds hosted derivatives; GPL's does not).

## Governance and control

Academic research-group governance (FAST / Western University); the software is developed under the FAST-affiliated author's own GitHub account and mirrored in the organisation. Under either GPL-3.0 or AGPL-3.0 the code is strongly reciprocal — a derivative that is distributed (and, if AGPL, one offered over a network) must publish its source — so the tool cannot be enclosed, but it also cannot be folded into a proprietary product.

## Evidence of use

Methodological traction rather than farm deployment. SAMA is peer-reviewed and cited across the independent microgrid-optimisation literature; it is distributed as a Python package with a Windows build in alpha. **No agrifood-specific deployment was located** — no farm, greenhouse, or northern community shown using SAMA in production. Its value to the corpus is as the open sizing engine a farm-energy or CEA design study could adopt in place of HOMER.

## Maintenance and funding

Academic research group (Thompson Endowment, NSERC, SSHRC as for the wider FAST programme). Active as of 2026-10 (pushed 2026-10-07) with a small contributor base; the PyPI package name (`SAMAbyRenXera`) suggests a commercial-adjacent distribution channel worth noting but not verified.

## Why it belongs

1. **It completes the corpus's C4 energy layer.** G-OSA-40 found the open energy stack concentrated on the operational side (OpenEMS EMS, OpenEnergyMonitor sub-metering, Libre Solar hardware). SAMA is the missing **open design and sizing** layer — the tool that decides *how much* PV, battery and generator a site needs — and the direct open alternative to the closed incumbent (HOMER).
2. **It is exactly the instrument the CEA case study lacks.** The northern greenhouse case's pivotal unknown is the cost of energy per kilogram of greens; an open, HOMER-validated microgrid sizer is the tool a northern community or researcher would use to price that, without a licence fee.

## What it does not demonstrate

- Any agrifood-specific deployment or validation; it is a general microgrid tool whose agrifood relevance is enabling-infrastructure, not direct.
- Operational control (it sizes and models; it does not run a microgrid) — that layer is OpenEMS/OpenEnergyMonitor, not SAMA.
- That open sizing closes a farm's energy-cost gap; the tool removes a licence barrier to the *analysis*, not the capital or interconnection barrier to the *build* (the C4 transformer/prime-farmland constraints stand).
- Its exact licence terms (GPL-3.0 vs AGPL-3.0) — an open item.

## Sources and verification

- `Sas1997/SAMA` upstream repository (README read in full; GitHub API licence: AGPL-3.0; 11 stars; pushed 2026-10-07): https://github.com/Sas1997/SAMA
- `uwo-fast/SAMA` organisation mirror: https://github.com/uwo-fast/SAMA
- Sadat, Takahashi & Pearce (2023), *Energy Conversion and Management* 298:117686: https://doi.org/10.1016/j.enconman.2023.117686
- Appropedia SAMA project page: https://www.appropedia.org/Solar_Alone_Multi-objective_Advisor_(SAMA)
- PyPI package: https://pypi.org/project/SAMAbyRenXera/
- Last checked: 2026-10-14

Not legal advice.
