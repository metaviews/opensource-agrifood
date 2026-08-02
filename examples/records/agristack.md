# India AgriStack / Digital Agriculture Mission

- Status: `curated`
- Region / reach: India (national)
- Project: https://agristack.gov.in/
- Field-guide context: new discovery from the DPI-for-agriculture cycle, 2026-08-02

## Problem addressed

India's Digital Agriculture Mission (budget reported at ₹2,817 crore) builds state digital infrastructure for agriculture: farmer registries, georeferenced village maps, and crop-sown registries, with a consent architecture for sharing farmer data with third parties. The stated purpose is to enable targeted services, credit, insurance, subsidies, and market linkages.

## Open layer

State-built digital public infrastructure with an explicit consent architecture: a Consent Manager is designed to enable "data-blind sharing" of personal data only with entities for whom the farmer (data principal) has provided consent. The openness in question is not code but the design of data-sharing governance at national scale.

## What is actually open

- The official site describes the consent architecture and the registry components (Farmer Registry, Geo-referenced Village Maps, Crop Sown Registry) and a Unified Farmer Service Interface (UFSI) acting as an API layer to registries (per the World Bank DPI-for-agriculture report).
- The official site could not be read in full this pass (HTTP 504 on 2026-08-02); the record relies on the site's consent-manager description from search results plus secondary legal and policy sources.
- Whether the underlying software is open source is not established; the contested question is the consent and data-governance design, not licence terms.

## Governance and control

State-run (Government of India, Ministry of Agriculture), with private-sector service provision. The consent architecture is the stated control mechanism. Civil-society and legal critiques contest whether the architecture produces farmer agency in practice.

## Evidence of use

- Official framing: consent-based collection and sharing, with a parliamentary answer asserting farmers' data is collected only with consent.
- Contested evidence: a legal review by Rethink Aadhaar and the Internet Freedom Foundation (2022) found farmers had little knowledge of the data flows and that the project's privacy notice was English-only; the Internet Freedom Foundation's comments on the consultation paper ("A Thoroughly Bad IDEA") criticise the lack of consultation with farmers and farmers' organisations; the Oxford Human Rights Hub argues AgriStack compromises informational privacy absent a stringent data protection regime; sectoral critics (e.g., Ramanjaneyulu, "Is India Solving the Right Problem?") argue the consent framing only holds if farmers can meaningfully withhold and verify.
- Deployment scale of the registries was not verified in this pass.

## Maintenance and funding

State-funded through the Digital Agriculture Mission. Long-term maintenance and the interaction with India's data-protection law were not assessed in this pass.

## What this case demonstrates

AgriStack is the largest located example of national digital public infrastructure for agriculture, and the clearest case of the project's core question at state scale: who controls the data, the interfaces, the maintenance, and the benefit when the state builds the stack. It is a contested-claims record: consent architecture (government framing) vs consent in practice (civil society and legal critiques).

## What it does not demonstrate

- It does not establish that consent produces farmer agency in practice; the critiques are the counter-evidence.
- The underlying software's openness (source code, licences) is unverified.
- Registry deployment scale and farmer opt-out experience are unverified.
- The interaction with India's Digital Personal Data Protection Act is not assessed.

## Sources and verification

- Agri Stack official site: https://agristack.gov.in/ (timeout on 2026-08-02; consent-manager description from search results)
- Lexology / "Surveilling the Soil" (Rethink Aadhaar, IFF 2022): https://www.lexology.com/library/detail.aspx?g=ee5d7956-66f2-4ae2-a947-ecea1dc430af
- Internet Freedom Foundation consultation comments: https://forum.internetfreedom.in/t/a-thoroughly-bad-idea-our-comments-on-the-agristack-consultation-paper/2090.html
- Oxford Human Rights Hub: https://ohrh.law.ox.ac.uk/the-digitisation-of-agriculture-in-india-how-agristack-infringes-informational-privacy/
- Parliamentary answer (government framing): https://sansad.in/getFile/annex/267/AS303_oMxy89.pdf?source=pqars
- World Bank / Co-Develop DPI-for-agriculture report: https://connect4impact.worldbank.org/system/files/2026-02/DPI-Approach-for-Agriculture-Sector_Final_.pdf
- Last checked: 2026-08-02

## Freshness

- Consent architecture description: `fact` — re-verify annually.
- Civil-society critiques: `claim` — re-verify annually.
- Deployment scale and DPDP Act interaction: `claim` — re-verify annually.
- Official site availability: `fact` — confirm at next verification.

Not legal advice.
