# AgGateway Traceability API

- Status: `candidate`
- Region / reach: United States / international standards ecosystem
- Project: https://github.com/aggateway/TraceabilityAPI
- Field-guide context: open-adjacent traceability infrastructure for commingled grain moving from combine through grain cart, transport, and storage
- Last checked: 2026-08-15

## Problem addressed

Commingled grain is difficult to trace because physical lots are combined across harvest, transport, and storage events. AgGateway's Traceability API models Traceable Resource Units, Critical Tracking Events, container state, item instances, and quantity/quality information so that grain movements can be represented across systems.

## Open layer

Public OpenAPI specifications, documentation, and a public GitHub repository. AgGateway's own on-farm description identifies commingled grain as a primary use case, including movement from combine to grain cart or semi-trailer and destination storage bin.

## What is actually open

- Public repository and OpenAPI specification: https://github.com/aggateway/TraceabilityAPI
- Public API concepts for traceable resource units and critical tracking events.
- Repository license file: an AgGateway Digital Resource License, not an SPDX-recognised standard open-source licence; GitHub reports `NOASSERTION`.
- GitHub verification: 2 stars, 0 forks, 95 commits, latest repository commit March 2026; repository not archived.

## Governance and control

The project is maintained within AgGateway, an industry membership organisation. The specification is industry-coordinated rather than farmer-governed. The open artefact can support interoperability, but participation, implementation, and data access remain controlled by adopting organisations.

## Evidence of use

AgGateway states that the API was designed for traceability of commingled grain and that its working group released a versioned RESTful API. This pass did not locate a verified farmer-facing deployment, independent implementation, or evidence of widespread elevator adoption.

## Maintenance and funding

Maintenance is provided through AgGateway's industry association structure. The repository shows recent activity, but the economic model for independent implementation and long-term public stewardship is not documented in the sources reviewed.

## What this case demonstrates

This is the strongest located open-adjacent grain-value-chain artefact: the grain-specific interoperability problem is named explicitly and represented in a public API specification. It shows that the open layer may appear first as a standard or interface rather than as farmer-owned marketing software.

## What it does not demonstrate

- It does not demonstrate open-source licensing in the strict OSI sense.
- It does not demonstrate that farmers control the traceability data or can export it freely.
- It does not demonstrate operational adoption by grain elevators, processors, or farmer cooperatives.
- Traceability is not the same as price discovery, contract transparency, or farmer bargaining power.

## Sources and verification

- AgGateway on-farm work and commingled-grain traceability: https://aggateway.org/CurrentWork/On-Farm.aspx
- Repository: https://github.com/aggateway/TraceabilityAPI
- Repository README: https://github.com/aggateway/TraceabilityAPI#readme
- Licence file: https://github.com/aggateway/TraceabilityAPI/blob/main/LICENSE.MD
- Last checked: 2026-08-15

Not legal advice.
