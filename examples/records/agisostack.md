# AgIsoStack++ (Open-Agriculture)

- Status: `curated`
- Region / reach: global; community-maintained open GitHub organisation
- Project: https://github.com/Open-Agriculture/AgIsoStack-plus-plus
- Organisation: https://github.com/Open-Agriculture
- Field-guide context: new discovery from the machine-data-access/telematics cycle, 2026-08-02

## Problem addressed

ISOBUS (ISO 11783) is the international standard for how agricultural machinery communicates on a CAN bus network. The standard is published openly, but usable implementations have historically been vendor- or certification-bound. AgIsoStack++ is a "completely free open-source C++ ISOBUS library" that lets anyone build ISOBUS-compatible equipment, implements, or tools without depending on a vendor stack.

## Open layer

Open-source implementation of an open international standard: the software layer between a machine's CAN bus and whoever wants to read or control it.

## What is actually open

- AgIsoStack++: MIT licence, 381 stars, last push 2026-07-21 (verified via GitHub API 2026-08-02).
- A sibling ecosystem under the Open-Agriculture organisation: AgIsoVirtualTerminal (GPL-3.0, 65 stars, pushed 2026-08-01), AgIsoStack-rs (MIT, Rust port), AgIsoStack-Arduino (MIT), AgIsoTerminalDesigner (GPL-3.0), AgIsoDDOPGenerator (MIT), and development tools.
- All verified via GitHub API on 2026-08-02; the organisation is active as of the research date.

## Governance and control

The project lives under an open GitHub organisation with no identified company or institution behind it; governance, funding, and steering arrangements were not documented in this pass. Contribution is community-based. It is not farmer-governed, but it is vendor-independent — which is the relevant control property for the machine-data question.

## Evidence of use

- 381 stars and active multi-repository development indicate a live developer community.
- The Rust and Arduino ports show cross-platform uptake by integrators.
- Adoption in commercial products, by equipment manufacturers, or on farms was not verified in this pass; star counts are community signal, not deployment evidence.

## Maintenance and funding

Active as of 2026-08-02 (multiple repos pushed within weeks of the research date). The funding model is undocumented — no company, foundation, or grant was identified — which is the open question: what sustains an active open standard implementation with no identified backer.

## What this case demonstrates

AgIsoStack++ makes the distinction between an open standard and an open implementation legible: ISOBUS is published openly, yet a fully open stack exists as a distinct community effort precisely because the surrounding ecosystem is not automatically open. It is the strongest located example of open code implementing the machine-data layer.

## What it does not demonstrate

- It does not establish manufacturer or farm adoption; community activity is not deployment.
- AEF ecosystem compliance or certification status is not documented.
- Governance and funding are undocumented.
- It does not, by itself, open machine data to farmers — the stack is an implementation tool, not a farmer-facing service.

## Sources and verification

- AgIsoStack++ repository (MIT, verified via GitHub API): https://github.com/Open-Agriculture/AgIsoStack-plus-plus
- Organisation (licences and activity verified via GitHub API): https://github.com/Open-Agriculture
- ISOBUS/ISO 11783 context: https://www.csselectronics.com/pages/isobus-introduction-tutorial-iso-11783
- Last checked: 2026-08-02

## Freshness

- Licences and activity: `fact` — re-verify annually.
- Adoption claims: `claim` — treat as unverified; seek deployment evidence before use.
- Governance and funding: `claim` — re-verify annually; undocumented as of research date.

Not legal advice.
