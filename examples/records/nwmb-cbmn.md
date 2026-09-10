# NWMB Community-Based Monitoring Network (CBMN)

- Status: `curated`
- Region / reach: Nunavut, Canada (started 2012 in Arviat, Cambridge Bay, Sanikiluaq; one community added per spring)
- Project: harvester-run wildlife and harvest monitoring feeding Nunavut's co-management system; operated by the Nunavut Wildlife Management Board (NWMB)
- Field-guide context: opened via the A5 northern/remote food systems scan (G-OSA-39); verified 2026-09-09 against the NWMB FAQ, the Arctic Science program paper (Padilla & Kourantidou et al., 2020), and the SMART case study
- Record type: governance + data record — community-owned monitoring data with explicit ownership terms, running on open-source software

## Problem addressed

Wildlife co-management (total allowable harvests, Species at Risk listings, management zones) requires data from the land — but conventional science can't produce it at the required scale, and extractive research models alienate the knowledge holders. The country-food system's regulatory layer needs Inuit-governed data.

## What was built

Recognized harvesters record sightings, harvests, travel routes, and ecological observations on hand-held computers (MESAs, later a mobile app) while on the land; community data clerks sync to a collective database after each trip. Verified scale (Arctic Science, 2020): **7,225 harvest records and 2,623 observation records from 85 harvesters in seven communities over 5,594 on-the-land trips covering ~400,000 km².**

## The open layer — data governance, verified

- **Ownership terms are explicit** (NWMB FAQ + Arctic Science paper): *harvesters retain full ownership of their data* and grant the NWMB a **non-exclusive, royalty-free licence** to use it for wildlife management. The community database is the steward; no outside party acquires rights.
- The program's stated aim is to bring Inuit Qaujimajatuqangit (IQ) into a form that "can communicate with scientific modelling" — a bridge architecture, not an extraction pipeline.
- **Software layer**: the program runs on the open-source SMART (Spatial Monitoring and Reporting Tool) stack with CyberTracker field-data capture (SMART Community case study). The data architecture is store-and-forward, offline-first — the northern default.

## Why it belongs

1. It is the corpus's **first verified community-owned monitoring dataset with explicit ownership/licence terms** feeding a regulatory system — the OCAP-style pattern (harvester ownership + licensed use by the governing board) in written form.
2. It demonstrates the **south-to-north open-source transfer** shape: Nunavut's food-governance data infrastructure runs on free, open conservation software built for African and Asian park monitoring.
3. The 2020 paper's honest finding — the data is a "hybrid form" that matches neither scientific standards nor conventional IQ research — is itself the finding: community-governed data systems need their own validation pathways, not retro-fitting to either tradition.

## What it does not demonstrate

- That the database is openly licensed — it is not; access is governed. The record's claim is ownership and control, not openness of publication.
- Long-term software maintenance: hardware (MESAs) aging and app transition costs are documented challenges in the program literature.
- Direct food-security outcomes: CBMN feeds wildlife management, which conditions the country-food harvest; the chain to food security is real but mediated.

## Sources and verification

- NWMB CBMN pages (primary; ownership terms in FAQ): https://www.nwmb.com/en/cbmn/ and https://www.nwmb.com/en/cbmn/pilot-study-faq
- Arctic Science (2020), "The Nunavut Wildlife Management Board's Community-Based Monitoring Network: documenting Inuit harvesting experience using modern technology" (scale figures, ownership terms): https://cdnsciencepub.com/doi/10.1139/as-2020-0008
- SMART case study (software stack): https://smartconservationtools.org/en-us/SMART-Community/Your-stories/Case-Study?CaseStudyID=21
- Mongabay (2020) on the app transition: https://news.mongabay.com/2020/10/with-the-help-of-an-app-nunavut-hunters-document-the-changing-arctic/
- Last checked: 2026-09-09

Not legal advice.
