# C2 pass: Farm-link platforms — anatomy of the closed layer

Cycle 2 of the succession research program (`../research/research-mapping.md`).

| | |
|---|---|
| **Status** | Run 2026-11-18: one bounded discovery pass (three cells), delegated to a research subagent; load-bearing claims re-verified against primary sources (BCLMP page, FarmLINK.net ToS, L'ARTERRE Répertoire, FCC pages, the Food System Journal evaluation PDF). Two records curated (`young-agrarians-bclmp.md`, `arterre-repertoire.md`; collection 164). |
| **Frame** | The program's founding verified absence (G-OSA-35: no open farm-link platform anywhere; Canada has none at all) — tested against current state, and against the honest alternative hypothesis: matching may be a trust-and-volume problem openness cannot improve. |

## 0. The question

Design-document P7 proposes that farm-link services taking public funding publish their
matching criteria and outcome data. Before that proposal hardens, the layer needs an
anatomy: who runs these platforms, who owns the data, what they report — and whether
criteria opacity is actually a failure mode.

## 1. Cell 1 — platform anatomy (all verified against primary pages unless noted)

| Platform | Runner | Data model | Outcome reporting |
|---|---|---|---|
| Young Agrarians B.C. Land Matching Program (since 2016) | Young Agrarians nonprofit; publicly funded (Sustainable Canadian Agricultural Partnership + regional funders); "There is no cost to participate" | Registration-gated digital inventory (U-MAP) | **Public aggregate outcomes: "437 matches on more than 13,210 acres to date"** (verified) + per-match stories — the best outcome reporting found in any operator |
| FarmLINK.net (Ontario) | FarmStart — "FarmStart owns, operates and maintains the FarmLINK" (verified from ToS, last updated 2017) | Account-gated listings under proprietary terms | None found |
| L'ARTERRE (Quebec, since 2018) | CRAAQ, deployed via MRCs that hire local matching agents | Registration + locked intranet; **but a publicly browsable Répertoire des offres, login-free, filterable by region/MRC/production** (verified live) | Not found in aggregate form |
| California FarmLink | Nonprofit lender/CDFI | Closed | Publishes annual/impact reports and Form 990s — but bundles "56 Land deals assisted — Includes land links, land tenure agreements, and land loans": match-rate reporting is not cleanly separated from lending |
| Minnesota FarmLink | State Department of Agriculture | Free listing app; identities private until contact exchange | None found |
| PA Farm Link | 501(c)(3) since 1993 | "This database is confidential and provides farmers privacy" — confidentiality as a feature | None found |
| New England Farmland Finder | Land For Good / New England Farm Link Collaborative | Free public property postings; seeker databases login-gated | ~5,000 subscribed seekers, 1,440+ properties posted since 2017 (verified as reported) |

## 2. Cell 2 — the Canadian absence, re-confirmed

The verified absence holds as of this search: GitHub code search surfaces **no
open-source land-matching platform anywhere** — the nearest hits are a Google intern
food-rescue logistics app (FarmLink), a market-matching prototype, and a European
resource-directory repo. Canada's three named operators all keep participant data in
closed registered systems; L'ARTERRE's Répertoire is the closest thing to an open
layer in Canada — a curated public listing output, not open-licensed data.

## 3. Cell 3 — the trust-vs-information judgment (the pass's load-bearing finding)

The evaluation literature answers P7's premise question, and the answer is a
correction:

- The strongest academic evaluation (12 US farm link programs, contribution analysis,
  *Journal of Agriculture, Food Systems, and Community Development* — verified from
  the PDF) attributes weak performance to **relational and structural factors, not
  information asymmetry**, and names the self-serve database model itself as part of
  the problem: "the lack of professional support systems, a heavy reliance on a
  self-serve Internet database, and the presence of various external conditions
  prevent most FLPs from facilitating substantial numbers of farm transfers."
- **Trust is named as the factor programs can barely manage:** "it is nearly
  impossible for FLPs to account for, and thereby mitigate, the 'social factors' that
  influence farm transfers, such as lack of trust between retiring and new farmers"
  (verified, via Ingram & Kirwan 2011).
- Program leaders rank **finding each other** — a network/volume function — as the
  number one obstacle (verified as reported). The field's own guide cites "a dearth of
  information about the effectiveness of linking services," and program staff treat
  match counts as a contested, ill-defined metric ("number of matches made by a
  program is not always the best or only metric of their success" — verified).
- Conversion is a follow-through problem: Pennsylvania Farm Link reported 3 completed
  matches against 158 potential matches in one year (verified as reported — media
  account), with tracking hampered by survey non-response.
- The BCLMP evaluation frames *preventing bad matches* as success — failure lives in
  "mismatches in values, skills, business plan preparation, local markets"
  (verified as reported).

**The judgment: no examined operator publishes matching criteria, and no evaluation
study identifies criteria opacity as a failure mode. The documented failure modes are
trust, readiness, external conditions, and follow-through.** P7 is therefore
corrected in place: published criteria and outcome data should be framed as
**accountability infrastructure** — making a publicly funded service inspectable and
its match-count claims comparable — not as a mechanism to raise match rates. The
evidence does not show criteria opacity to be binding; claiming so would repeat the
corpus's own rule against asserting mechanisms the record doesn't support.

## 4. What this pass does not do

- GitHub absence is search-engine-mediated (no exhaustive GitLab/Codeberg sweep);
  match counts are self-reported under self-defined, non-comparable definitions (the
  field says so itself); the Pennsylvania conversion figure is a media account; no
  natural experiment exists to test P7's openness claim.

## 5. Sources and verification

All retrieved 2026-11-18. (V) = verified by the program from the primary source;
(S) = subagent pass.

- Young Agrarians BCLMP pages (V — "437 matches on more than 13,210 acres" verified):
  https://youngagrarians.org/tools/land/bc-land-matching-program/ and https://youngagrarians.org/programs/bc-land-matching-program/
- FarmLINK.net Terms of Service (V — FarmStart ownership verified): https://farmlink.net/terms-of-service/
- L'ARTERRE (S + V — Répertoire live, login-free; CRAAQ/MRC model from the MAPAQ
  document): https://arterre.ca/RepertoireDesOffres ; https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/agriculture-pecheries-alimentation/consultation-publique/ME_19_L_ARTERRE.pdf
- Hersey & Adams, farm-link program evaluation (V — self-serve-database and
  social-factors quotes verified): https://www.foodsystemsjournal.org/index.php/fsj/article/download/524/492/1080
- Valliant et al., farm-link services assessment (S): https://projects.sare.org/media/pdf/1/9/V/19-Valliant-Assessment-of-Farm-Link-Services-Land-Use-Policy.pdf
- Land For Good farm-link guide (S — "dearth of information" and metric-contestation
  quotes): https://landforgood.org/wp-content/uploads/LFG-Farm-Link-Guide-Developing-and-Strengthening-Farm-Link-Programs_print-version.pdf
- LandLink Programs Assessment (S): https://farmlandinfo.org/wp-content/uploads/sites/2/2019/09/LandLink_Programs_Assessment.pdf
- BCLMP evaluation (S): https://lfs-ubcfarm-clone-2018.sites.olt.ubc.ca/files/2022/01/BCLMP-Report-Jan-27-2022-ds-APPROVED.pdf
- PA Farm Link conversion figure (S, media account): https://www.wkbn.com/news/new-farmers-struggle-with-land-access/
- Minnesota FarmLink, California FarmLink, NEFF, PA Farm Link, IFTN pages (S; URLs in
  the pass transcript).
- Corpus priors: `../concept.md` (L2); `research/2026-09-land-sectoral-scan.md`
  (G-OSA-35 absence); `docs/policy/succession-visibility-design.md` (P7).

Source-quality note: match counts across programs are self-reported under
non-comparable definitions — the field's own guides flag this; cross-program
comparisons in this document are directional, not commensurable.

## 6. Document status and conventions

Machine-facing notes; humans can stop at the sources above.

- Status: pass complete 2026-11-18; cycle C2 marked `run` in `research-mapping.md`;
  two records curated (`young-agrarians-bclmp.md`, `arterre-repertoire.md`);
  collection 164. Design-document P7 corrected in place (accountability framing).
- Next steps: (1) update P7's wording in `docs/policy/succession-visibility-design.md`
  to the accountability framing; (2) who-to-ask: BCLMP on match definitions and
  drop-off; PA Farm Link on survey-based tracking; (3) C4, C5, C11 remain unrun.
