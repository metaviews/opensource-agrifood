# The website after the gathering: a redesign brainstorm

The first gathering happened on 24 November 2026. The website still behaves as though the day had not arrived: the home page promotes the event, the join path is an email that leads to one afternoon, and the research page describes an event rather than a project. The recording is in processing, and next steps will take time. The site does not have to wait for either.

This document records the agreed scope for the redesign: what the site becomes, what sections it gains, and what it deliberately does not do. The build follows these decisions; when the build and this document disagree, this document is the authority until amended here.

## The reframe

The site is no longer an event microsite. It is the public home of the Open Source Agrifood project, with an **event series** (a recurring structure: one gathering happened, a food hubs gathering is next), **continuing research** (the corpus, the syntheses, the policy design documents), an **ecosystem layer** (the directory of active nodes built from the corpus), and the **Future Herd Discord** as the organizing hub where gatherings happen, conversation continues, and people promote their own work.

The corpus grew past the site. The directory (1,020 entries, five curated axes, machine-readable), the policy design documents, and the concept and synthesis documents are all invisible on the current site, and the research page quotes a record count (79) that is less than half the collection on disk. The redesign mostly closes that gap rather than inventing new content.

## What the site becomes

1. **Home (`/`)**: the project, not the event. The standing question (who controls the systems that make open agrifood, and who benefits), a "what is happening now" strip (next event, latest research, recent additions), the Discord invite, and the two-project frame (Open Source Agrifood and the Agrifood AI Field Guide) explained where it belongs: on the project home.
2. **Events (`/events`)**: a series with a lifecycle. `/events` lists the next gathering (food hubs, date to be announced) and past ones. Each event has a permalinked page: upcoming state shows agenda and join path, past state shows recap, recording, and findings. The 24 November gathering moves to `/events/2026-open-source-future/` in "recap coming" status, which decouples the redesign from the recording entirely. Future events are content commits against the same structure, not bespoke builds.
3. **Research (`/research`)**: the living research front. The markdown renderer's globs extend to policy documents, the core research documents (programme briefing, landscape synthesis v3, the definition document), and the concept spaces, so the repo publishes itself as work lands, the way the succession program already does. The static three-card summary stays as a reading; the counts and links become honest and on-site.
4. **Nodes (`/nodes`)**: an ecosystem directory generated at build time from `directory-data.json`. Two tiers, exactly as the data states them: record-backed entries (curated, verified against primary sources) as the featured tier, scan-derived entries (recorded, not asserted) as the long tail. Browsable by category and geography, with the openness, governance, and lifecycle axes shown where the corpus states them. The page says plainly that promotion of one's own work happens in the Discord; the site keeps the curated research layer.
5. **Community**: a persistent Discord presence (header, home section, footer) replacing the single email gate. Email remains for sponsorship and human contact.

## The decisions

1. **Home identity**: "/" becomes the project home; the 24 November event moves to a permalinked page under `/events/`, the first entry of a series.
2. **Directory as a section**: `/nodes` builds from `directory-data.json`, record-backed tier plus scan-derived long tail, verification states surfaced.
3. **Publishing pattern**: extend the renderer globs (policy, research core, concepts) instead of hand-authoring pages.
4. **Discord**: primary join and community path site-wide; email kept for sponsorship and contact.
5. **Event template**: one light reusable structure (agenda, join, recap, recording) so the food hubs gathering slots in as content.
6. **Licensing**: the site's writing is CC BY-SA 4.0; `directory-data.json` is published at a stable URL (`/directory-data.json`) under the same licence, with the licence stated on the nodes page and in the footer.
7. **Food hubs event home**: the gathering's page lives on this site (it is an open-source-agrifood opportunities event), linking toward the food hubs research rather than duplicating it.
8. **v1 scope**: decisions 1 through 5 plus licensing. No dedicated public status page (that is a later pass), no blog or newsletter (the Metaviews digest and the Future Herd podcast carry cadence; the site links to them), no self-submission forms (the Discord covers promotion; revisit if demand appears), no client framework (the nodes page renders statically; a filter script is fine, React is not).

## Sequencing

Structure and home page first, independent of the recording. The recap and recording fill the existing slot when processing completes. The food hubs gathering fills the template when its date and agenda settle. The event facts (date, format) remain single-sourced per workstream rule: they change across the agenda doc, the event page, README, and ROADMAP together.

## What this redesign does not do

It does not publish the corpus wholesale (the repo remains the working surface; the site publishes the documents chosen above). It makes no claims beyond what the records and directories already state. It does not treat the directory's scan-derived entries as verified, and it shows that distinction on the page. And it does not wait on the recording.

---

**Machine-facing section**

- Status: decisions 1 through 8 agreed by Jesse (chat, 2026-11-25); this is the authoritative scope for the redesign build.
- Written: 2026-11-25, following the 24 November 2026 gathering.
- Related: `docs/events/event-design-brainstorm.md` (the event's design, the precedent for this document's genre), `DIRECTORY.md` and `directory-data.json` (the nodes substrate), `ROADMAP.md` (status surface), `web/` (the site).
- Provenance: the asset inventory and the stale count (79 vs 175) were checked against the filesystem and `ROADMAP.md` on 2026-11-25. Record field values, verification tiers, category counts, and geography buckets quoted for the nodes design come from `directory-data.json` as reconciled 2026-11-15/16.
