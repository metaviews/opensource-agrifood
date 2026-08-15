# Environmental Scan: Open Grain Value-Chain Infrastructure

- Date: 2026-08-15
- Method: Bounded pass; 8 targeted query sets; 7 web pages/PDFs/repositories read or extracted in full; GitHub API and repository licence verification.
- Focus: G-OSA-31 (grain production, quality, storage, traceability, marketing, and farmer-controlled market access).

## Why this cell matters

Grain is not only a crop-production system. It is an infrastructure system: farm machinery and machine data feed into quality and traceability records; grain is commingled, stored, financed, transported, graded, contracted, and sold through elevators, exchanges, processors, and global traders. The relevant openness question is therefore not simply whether a grain farmer can run open software. It is who can inspect, move, verify, and benefit from the information and rules that govern grain after harvest.

## Headline Finding

**The open grain value-chain layer is asymmetric and stops at the interface. A grain-specific public traceability specification exists (AgGateway Traceability API), and farmer-access-oriented market infrastructure exists (ACE Africa's market-information and warehouse-receipt system), but neither demonstrates farmer-controlled open software or open market governance. The most durable open assets are upstream interoperability and public information; elevator automation, inventory systems, commodity contracts, price formation, and bulk logistics remain proprietary or institutionally controlled.**

This is not a failed search for grain technology. It is a boundary finding: openness is present as a standard, API, market-information channel, and warehouse-receipt concept, while the economic control layer remains enclosed.

## Currents

### 1. Farmer-led open production and retrofit

Existing records establish a real farmer-led open production layer: AgOpenGPS and the Brian Tischler record, open machine-data work such as ISOBlue, AgIsoStack++, and Matt Reimer's autonomous grain cart. These tools can reduce machinery lock-in and expose field-operation data, but they do not automatically carry farmer control through the elevator or buyer relationship.

### 2. Grain-specific interoperability and traceability

AgGateway's Traceability API is the clearest grain-specific open-adjacent artefact located in this pass. AgGateway explicitly describes a use case for commingled grain moving from combine to grain cart or semi-trailer and destination storage bin. The repository is public and active, but its custom AgGateway Digital Resource License is not an SPDX-recognised OSI licence (`NOASSERTION`), and no independent implementation or farmer-facing deployment was verified.

### 3. Market information and warehouse receipts as access infrastructure

ACE Africa combines market information, certified storage, warehouse receipts, finance, and electronic trading in Malawi. IFPRI's analysis covered 710 receipts for maize, pigeon peas, and soybeans between 2011 and 2018. This is a significant farmer-access and structured-trade model, but ACE's software and governance are institutional rather than open-source or farmer-governed. Its evidence also shows that storage does not guarantee profit: results vary with financing costs, policy interventions, storage duration, and price movements.

### 4. Open commerce protocols do not equal open grain markets

ONDC/Beckn is already in the collection as an agricultural-domain open commerce protocol, and Open Food Network as open marketplace software. They provide conceptual and technical adjacency, but this pass found no verified deployment connecting them to bulk grain elevators, commodity contracts, warehouse receipts, or international grain trade. A direct-to-consumer food marketplace is not a substitute for bulk commodity-market infrastructure.

### 5. The closed industrial middle

Search results surfaced numerous commercial grain-management, elevator-inventory, contract, traceability, and marketing systems. The open layer did not yield a verified production-ready alternative for elevator automation, grain-quality databases, inventory/position management, basis and contract management, or farmer-controlled bulk logistics. This absence is analytically important because these are the points where physical commingling and financial power meet.

## Working matrix

| Grain value-chain layer | Open / public candidates | Status | What is actually open | What remains closed or unverified |
|---|---|---|---|---|
| Field production and machine data | AgOpenGPS, ISOBlue, AgIsoStack++, Brian Tischler, Matt Reimer | Curated/candidate existing records | software, telemetry, machine interoperability, farmer-built automation | transfer of data rights into marketing and elevator systems |
| Harvest-to-storage traceability | AgGateway Traceability API | Candidate; open-adjacent | public API/specification, traceability concepts for commingled grain | SPDX/OSI licensing, independent implementations, farmer data control, adoption |
| Grain quality and grading | Real Seeds cleaner; field spectroscopy records; AgGateway quality fields | Partial | low-cost seed cleaning, open instrumentation, quantity/quality fields in specification | production optical sorting, elevator grading systems, accepted quality data commons |
| Storage and warehouse receipts | ACE Africa | Candidate; institutional public-interest infrastructure | public market information, certified warehouse/receipt model, electronic trading access | open software, farmer governance, current scale/outcomes, transparent fee/rule data |
| Price information and marketing | ACE MIS; existing ONDC/Beckn adjacency | Partial / adjacent | SMS, email, online market information; open-protocol concept | open price feeds, basis/contract tools, farmer-owned market platform |
| Bulk commodity exchange | ACE; eNAM/commodity-exchange leads | Institutional, not open | market access and exchange infrastructure | open source, open governance, verified farmer control |
| Logistics and processing | CoopCycle/OFN adjacency; post-harvest scan | Adjacent | open local-food logistics and small-scale processing | bulk rail/truck/barge routing, elevator automation, industrial processing |
| Contracts, finance, risk | Warehouse receipts and cooperative literature | Open knowledge only | research and public documentation | open contracts, hedging, insurance, finance-integrated farmer systems |

## Cases added

| Record | Status | Open layer | Key finding |
|---|---|---|---|
| `aggateway-traceability-api.md` | candidate | Public API/specification; custom digital-resource licence | Grain-specific interoperability is visible, but adoption and farmer control are not verified. |
| `ace-africa.md` | candidate | Market information, warehouse-receipt and electronic-trade infrastructure | Farmer-access infrastructure exists without being open-source or farmer-governed. |

## Contested claims

### “A public API makes grain traceability open.”

Asserting: AgGateway publishes a grain-specific Traceability API and repository. Contesting: the repository uses a custom AgGateway Digital Resource License (`NOASSERTION`), and no independent implementation, elevator deployment, or farmer-controlled data flow was located. Status: open-adjacent, not resolved as open source.

### “Digital grain markets improve farmer bargaining power.”

Asserting: ACE's market information, warehouse receipts, and electronic trading create access to prices, storage, finance, and buyers. Contesting: IFPRI reports heterogeneous profitability and exposure to financing costs, price shocks, and policy intervention; current farmer control and value capture are not established. Status: benefit plausible, control unresolved.

### “Open commerce infrastructure can substitute for commodity-market infrastructure.”

Asserting: ONDC/Beckn and Open Food Network demonstrate open-protocol or open-marketplace alternatives. Contesting: no verified connection to bulk grain storage, grading, contracts, elevators, or commodity exchanges was found. Status: adjacent infrastructure, not a grain-market solution.

## Honest omissions and gaps

1. No open-source grain elevator management or automation platform was identified at production readiness.
2. No verified farmer-controlled open system for basis pricing, grain contracts, pooled sales, or commodity hedging was identified.
3. No current, independently verified deployment study was located for AgGateway Traceability API implementations in elevators or farmer cooperatives.
4. ACE's current software architecture, licence terms, fee schedule, farmer governance, and 2026 operating scale remain unverified.
5. The pass did not resolve India’s eNAM, African commodity exchanges beyond ACE, or China/Latin America bulk-grain market infrastructure in depth.
6. Grain marketing is geographically and legally specific; this pass does not compare national grain grades, warehouse-receipt law, futures regulation, or cooperative structures across jurisdictions.

## Interpretation

The grain value chain strengthens the project's wider finding that openness is usually layered rather than total. At the farm, open tools can provide local control. At the boundary between physical grain and digital records, public standards can make the movement of quantity and quality legible. At the market, public information and warehouse receipts can improve access without transferring platform or rule-making control. The decisive missing layer is farmer-governed market infrastructure: systems that combine interoperable records with transparent pricing, contracts, storage, finance, and collective ownership.

The next residual is therefore not “find another grain app.” It is to verify whether any farmer cooperative, public exchange, or producer-owned platform has combined these layers in practice.

## Sources and verification

- AgGateway on-farm interoperability and commingled-grain Traceability API: https://aggateway.org/CurrentWork/On-Farm.aspx
- AgGateway Traceability API repository: https://github.com/aggateway/TraceabilityAPI
- AgGateway repository licence: https://github.com/aggateway/TraceabilityAPI/blob/main/LICENSE.MD
- GitHub API verification: repository active, 2 stars, 0 forks, latest API-reported push 2026-04-12; licence `NOASSERTION`.
- ACE Africa: https://www.aceafrica.org/
- IFPRI, “Analysis of ACE’s Warehouse Receipts and Market Information Systems”: https://www.ifpri.org/blog/analysis-aces-warehouse-receipts-and-market-information-systems-ifpri-ace-dissemination-event/
- Common Fund for Commodities, Malawi warehouse receipts: https://common-fund.org/warehouse-receipts-traded-commodity-exchange-improve-lives-malawi-farmers
- USDA, Cooperative Grain Marketing: https://www.rd.usda.gov/sites/default/files/rr123.pdf
- ONDC / Beckn record in this collection: `examples/records/ondc.md`
- Open Food Network: https://www.openfoodnetwork.org/
- Existing machinery, machine-data, and post-harvest records in this collection.

Not legal advice.
