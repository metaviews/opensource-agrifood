# Foodsharing.de

- Status: `curated`
- Region / reach: Germany, Austria, Switzerland, plus international offshoots; 500K+ registered users (project statements)
- Project: https://www.foodsharing.de/
- Repository: https://gitlab.com/foodsharing-dev/foodsharing
- Field-guide context: new discovery via the grocery concept project (`research/grocery-feedback-2026-08.md` §2; provenance `grocery/research/open-source-software-stack.md` and `grocery/research/food-waste-canada.md` K22); verified 2026-09-02

## Problem addressed

A movement platform for peer-to-peer food sharing and business food rescue: public Fairteiler shelves, Essenskörbe (individual food baskets), and trained foodsavers collecting surplus from partner businesses (18,000+ per project statements) across the DACH region. It is the coordination layer of a food-rescue movement rather than a marketplace.

## Open layer

Open-source software powering a live mass-scale platform: the code that runs foodsharing.de/.at/.ch is public at gitlab.com/foodsharing-dev/foodsharing, and the live platform runs this code per the repository's own README. Open-sourced 2019-08-26 (project devblog).

## What is actually open

The platform code is licensed **GNU Affero General Public License v3 (AGPL-3.0)** — confirmed directly against the repository's LICENSE file. This corrects the grocery transfer doc, which recorded "MIT (per Wikipedia snapshot; verify against repo)"; the MIT attribution traces to a different, unrelated mobile-app project (github.com/raph-ael/foodsharing), not the foodsharing.de platform code.

## Governance and maintenance

Operated by the non-profit foodsharing e.V. (registered charitable association); funded almost entirely by donations (supporting members plus one-off contributions), with near-100% volunteer development coordinated via the yunity network; devdocs at devdocs.foodsharing.network. The 2019 open-sourcing explicitly aimed to unlock open-source funding and donated tooling licences (translations via Weblate, testing via donated BrowserStack). Unique in the corpus as an open-source *waste*-coordination layer: the software commons serves rescue logistics, not commerce.

## Evidence of use

Live, actively developed platform in daily use across three countries (commits within hours of verification; protected releases 2020-2026). Platform statistics page (2026-09-02): 496,141 registered Foodsharer, 200,145 active Foodsaver, 18,352 cooperating businesses, 335 million kg rescued, 1,505 Fairteiler — self-reported, not independently audited. Note: the platform launched 2012 but the code was only open-sourced in 2019 (AGPLv3); the "Caritas-run" framing sometimes attached to foodsharing could not be confirmed — governance sits with foodsharing e.V.

## Why it belongs

Foodsharing.de extends the short-chain layer (G-OSA-28) to the waste/rescue edge: it shows open software coordinating an operationally dense, volunteer-heavy, mass-scale food movement — the closest retail-side analogue to how farm-side open infrastructure coordinates production.

## What it does not demonstrate

Platform scale claims are self-reported. Open code does not resolve the governance questions of a movement platform (foodsaver training, business partnerships are organized off-code). It coordinates food rescue; it does not open the retail operation itself.

## Sources and verification

- Platform: https://www.foodsharing.de/
- Repository: https://gitlab.com/foodsharing-dev/foodsharing (LICENSE: AGPL-3.0, checked 2026-09-02)
- Project wiki / devdocs: https://wiki.foodsharing.network/
- Last checked: 2026-09-02

Not legal advice.