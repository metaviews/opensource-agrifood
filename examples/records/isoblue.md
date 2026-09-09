# ISOBlue 2.0

- Status: `curated`
- Region / reach: United States (Purdue University origin; AFIN — Agricultural Informatics Lab; open hardware + software, replicated internationally)
- Project: open telematics data-capture platform for agricultural machinery (ISOBUS/CAN data)
- Field-guide context: opened via the A4 cybersecurity/resilience scan (G-OSA-38, `research/2026-09-cybersecurity-resilience-scan.md`); previously known to the corpus through the machine-data literature; verified 2026-09-09
- Record type: positive case — local operability as a security property

## Problem addressed

Farm-machine data (as-applied, harvest, diagnostics) flows through OEM telematics to vendor clouds on vendor terms. Farmers cannot capture, hold, or reuse the full ISOBUS data stream their own machines generate; and any cloud-dependent capture chain fails when connectivity — or the vendor — does.

## Open layer

- **Hardware**: ISOBlue 2.0 is an open designed device (Raspberry Pi Compute Module + CAN interfaces, 500GB local SSD, 4G/LTE) — schematic/design repos in the ISOBlue GitHub org; the project's first-generation hardware and enclosures are published.
- **Software**: device software and Yocto-based image build repos published under **MIT** (verified via GitHub API across the ISOBlue org, 2026-09-09: isoblue2, meta-isoblue, meta-isoblue-demos, isoblue-android, libsocket-can-java — all MIT; resin-toradex Apache-2.0; early 2013–14 repos unlicensed). Peer-reviewed: *ISOBlue HD: An Open-Source Platform for Collecting Context-Rich Agricultural Machinery Datasets* (Sensors, 2020, PMC7600794).
- **Data**: the design's purpose is farmer/researcher-side capture — the data lands on the device's own 500GB SSD first.

## What is actually open

MIT-licensed software stack and published hardware designs for an ISOBUS data-capture device; peer-reviewed dataset methodology. Not open: the ISOBUS standard's paywalled spec itself (ISO 11783), and OEM clouds remain closed — ISOBlue works *around* them, not through them.

## The resilience property (why it anchors G-OSA-38's shape 3)

The device is engineered so that **the cloud is an optimization, not a dependency**: a full season of machine data is stored locally; unsent data queues and streams opportunistically whenever 4G returns ("even when the cellular coverage is intermittent in rural areas"). Wake-on-CAN means it records whenever the machine runs. Translated to the A4 scan's terms: if the vendor cloud is encrypted, unreachable, or simply gone, the farmer's data capture continues on the farmer's disk. This is the positive-case counterpoint to JBS/Sobeys/NEW Cooperative records — the same design philosophy as OpenSprinkler's offline operation and self-hosted farmOS, proven on a tractor.

## Governance and history

Academic origin: Purdue University's AFIN (Agricultural & Biological Engineering); first-generation ISOBlue papers date to 2013–2014 (Layton et al.), ISOBlue 2.0 hardware circa 2018–2020. Development activity peaked ~2020 (last MIT repo push 2020-09-21); the project site documents the 2.0 device as the current generation. Honest status: active as published, maintained designs; not a product with ongoing release engineering — replication requires competence (cf. the maintenance-funding profile this corpus applies to such artefacts).

## What it does not demonstrate

- That OEMs' own clouds can be replaced — ISOBlue captures data; it does not provide the fleet-management services Deere's Operations Center does.
- Security hardening at production grade — the MIT stack is research-grade; no security audit located. Local storage shifts the attack surface onto the device; an unpatched open device on a farm network is the scan's sub-cell 3 warning made concrete.
- Commercial replication at scale — adoption beyond research deployments is not documented.

## Sources and verification

- Project documentation (design rationale, local storage, opportunistic sync): https://isoblue.org/docs/
- Peer-reviewed: ISOBlue HD, *Sensors* 2020 (open access): https://pmc.ncbi.nlm.nih.gov/articles/PMC7600794/
- GitHub org (MIT licences verified via API 2026-09-09): https://github.com/ISOBlue
- Original paper: Layton, Balmos, Sabo, et al., "ISOBlue: An Open Source Project to Bring Agricultural Machinery Data Cloud," 2014.
- Last checked: 2026-09-09

Not legal advice.
