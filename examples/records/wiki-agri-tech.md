# Wiki Agri Tech (Aspexit directory of digital tools for farmers)

- Status: `candidate`
- Region / reach: France (Montpellier origin) / French-speaking market; entries are France- and Europe-weighted
- Project: https://wiki-agri-tech.com/
- Predecessor: https://www.lesoutilsnumeriquesdesagriculteurs.com/ — launched summer 2021, the URL that ducksize cites now returns 404
- Operators: Aspexit (Corentin Leroux) and Binaree (Alexandre Touraine), per the platform's own team page
- Field-guide context: surfaced from ducksize.com's "Open-source catalog for agriculture" post (2022-04-17); checked 2026-10-08

## Problem addressed

Digital agriculture has no consolidated, non-vendor view of its own tool market. Farmers, technicians and advisers face hundreds of unsorted tools; the platform's stated answer is to "centralize what exists, share knowledge, spread information to as many people as we can" and to "become and remain a collaborative database of the Agri-Tech ecosystem". It indexes tools, companies, training programmes and communities, with filters by tool usage, agricultural sector, farming operation and farm objective, plus thematic articles, infographics and a white paper on tool classification.

## Open layer

Two open layers with different licences: the structured catalogue data (tool, company, training and taxonomy tables) published as open data under ODbL 1.0 and served through a free REST API; and the editorial content (articles, guides, tool and company descriptions, infographics) under CC BY-NC-SA 4.0. Reading the directories requires no account; calling the API does.

## What is actually open

- **API** — REST, seven endpoints (tools, companies, search, reference tables, stats), GET only, bearer token beginning `wat_` self-issued from a free account, rate-limited to 60 requests/minute and 10,000/day, served from a Supabase edge function. Documented at `wiki-agri-tech.com/api-docs` (read 2026-10-08).
- **Licence split** — ODbL 1.0 for structured data (tool catalogue, company directory, training catalogue, taxonomies); CC BY-NC-SA 4.0 for articles, guides, descriptions, infographics, documentation. Read at `wiki-agri-tech.com/licence-open-data` (2026-10-08).
- **Stated restrictions on top of the licences** — attribution mandatory, share-alike on derivatives, and "pas d'usage commercial payant": no reselling the data and no paid service built primarily on it. That restriction is narrower than ODbL's own terms, so downstream reuse should follow the site's stated conditions rather than the licence headline alone.
- **Not located** — any source repository, code licence, bulk dump or machine-readable mirror. Openness of the platform's software is unestablished in this pass.

## Governance and control

A two-founder consultancy structure. Corentin Leroux founded Aspexit, which sells data science, training, audits and paid technical dossiers; Alexandre Touraine founded Binaree Consulting. The directory is the free, public-facing asset in front of paid services. The platform states that no vendor pays for placement and that rankings are neutral — a self-reported independence claim, not an audited one. Its own "Our Story" says the platform was created "in 2023", which disagrees with Aspexit's own classification article, which dates the directory launch to summer 2021 by Leroux and Touraine; recorded, not reconciled.

## Evidence of use

- Platform counters disagree across its own pages, same day (2026-10-08): 2,731 tools / 1,354 companies / 59 trainings / 66 articles on `/en/a-propos` and `/en/outils`; 2,573 tools / 1,514 companies / 123 trainings on `/en/open-data` and the licence page; the homepage meta title reads "1916 Outils Numériques Agricoles"; aspexit.com advertises "+2500 outils référencés". Recorded as a disagreement; none of these figures is independently verified and none should be cited without its page and date.
- **Independent corroboration of standing:** the French Ministry of Agriculture's overview of digital agriculture states "Nearly 2,000 digital tools for farmers are listed on the French market in 2026", with its classification figure credited to Aspexit (`agriculture.gouv.fr/development-digital-agriculture-france`, read 2026-10-08). This is the strongest external signal that the catalogue is treated as a reference by a public authority.
- The API is live and documented but registration-gated; the number of API consumers, accounts, or farming users is not published and was not verified.

## Maintenance and funding

Directory updates are claimed weekly (self-reported). Funding source is not disclosed; the surrounding consultancies are the plausible funders — **assumed, not verified**. No institutional or public funding is named on the pages read.

## What this case demonstrates

- **A whole-market identification commons published by a commercial consultancy**: paid advisory work funding a free, licensed catalogue of an entire national tool market. For this collection's identification-and-verification purpose it is infrastructure rather than a case study — a place to check whether a tool, company or training programme exists and how it is classified.
- **The asset-by-asset test in miniature**: data open (ODbL), editorial share-alike and non-commercial (CC BY-NC-SA), software not located. "Free to read", "open data" and "open source" are three different claims; only the first two are documented here.

## What it does not demonstrate

- No source code, repository or hosting governance was located; the open-source framing of the 2021 launch is not verified for the current platform.
- "Open data" is registration-gated in practice: the API requires a self-issued token, and there is no bulk download on the pages read.
- Counts disagree across the platform's own pages (see Evidence of use); a single figure would be fabricated precision.
- Tool entries and user ratings are vendor- and community-supplied; no independent verification of tool claims was audited, and the platform's independence claim is self-reported.
- Coverage is France- and Europe-weighted; it does not describe markets outside that frame.
- No adoption evidence: no published figures for users, API consumers, or any effect on farm tool choice.
- Licence stacking risk: ODbL plus a stricter site-stated "no paid commercial use" rule means reuse terms are ambiguous for commercial actors.

## Sources and verification

All retrieved 2026-10-08 unless noted.

- https://wiki-agri-tech.com/en/a-propos — team (Leroux, Touraine), mission, counters, "Our Story" 2023 claim, open-data commitment — read directly.
- https://wiki-agri-tech.com/en/open-data — open-data initiative, API access, counters (2,573 / 1,514 / 123) — read directly.
- https://wiki-agri-tech.com/licence-open-data — ODbL 1.0 + CC BY-NC-SA 4.0 split, permitted and forbidden uses, share-alike and attribution rules — read directly.
- https://wiki-agri-tech.com/api-docs — REST API, seven endpoints, token auth, rate limits, base URL — read directly.
- https://wiki-agri-tech.com/en/outils — live directory listing, 2,731 counter, filter facets — read directly.
- https://aspexit.com/fr — claims "+2500 outils référencés"; lists Wiki AgriTech as a partner — read directly.
- https://aspexit.com/fr/blog/classification-outils-agritech-5-entrees — summary as rendered on the Aspexit blog index: directory launched summer 2021 by Corentin Leroux and Alexandre Touraine — read via the blog index page (the classification article itself was not opened).
- https://agriculture.gouv.fr/development-digital-agriculture-france — "Nearly 2,000 digital tools for farmers are listed (2026)"; Figure 1 source credited to Aspexit — read directly.
- https://www.ducksize.com/post/open-source-catalog-for-agriculture — the discovery pointer; its linked URL (lesoutilsnumeriquesdesagriculteurs.com/en/) now returns 404 — read directly.
- Not usable: the agromatin.com press piece on the July 2021 launch (reported 1,100+ tools at launch and quoted Leroux on the open-source, participative architecture) — the article body has been removed; only the search index retains its text. Treated as unverified.

Source-quality note: the platform's own pages are the primary source for licences and API terms (directly read, high confidence); all counts and independence claims are self-reported and internally inconsistent, so they are recorded as disagreement rather than adopted.

Not legal advice.
