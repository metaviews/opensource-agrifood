# Sharing Excess (open-claim-without-licence case)

- Status: `archived` (failed-open-claim case, per the Underground Meats precedent)
- Region / reach: Philadelphia, PA; national US operations (Philadelphia, New York, Washington DC, Chicago, Detroit, Los Angeles)
- Project: https://sharingexcess.com / https://github.com/sharingexcess / https://surplus.sharingexcess.com
- Last checked: 2026-09-07

## Problem addressed

Surplus redistribution at scale needs logistics software. Sharing Excess is one of the most credible claimants to open food-rescue infrastructure: a 501(c)(3) that has redistributed 150M+ lbs of food since 2018 through 1,500+ community partners, running its own platform ("Surplus") with published docs, and publicly stating — on Medium ("our organization, repos, and backlog are all fully open source and visible to the public"), on dev.to, and in ReFED's tech-enabled food rescue overview — that its software is open source.

## Open layer: the claim vs. the artefact

**The public claim does not hold as licence.** GitHub API org-repos endpoint (api.github.com/orgs/sharingexcess/repos, queried 2026-09-07) returns exactly two public repositories — `sharingexcess.com` (marketing site) and `.github` (org README) — and **both have `"license": null`**. No LICENSE file, no licence declaration, no platform source repository public at all. The Surplus platform (docs at surplus.sharingexcess.com, v11.2.5, role-based docs for drivers/admins/donors/recipients/developers) is a live hosted service whose source is not published. Public code without a licence is copyright-reserved by default: nobody may legally reuse, modify, or redistribute it.

This is the redistribution layer's counterpart to the Underground Meats case in A1: an open claim whose artefact did not survive contact with practice — except here the failure is upstream of maintenance (nothing was ever legally open), not downstream of it.

## Why it belongs

The sub-cell scan's first shape — open claims without open artefacts in the mission-driven rescue sector — is anchored by this record. The pattern matters more than the org's specifics: social-mission food rescue *performs* openness as identity while the actual logistics infrastructure remains closed, and the sector's press (ReFED included) repeats the claim without checking the licence. A newcomer shopping for an open rescue stack would find no forkable code here.

## What it does not demonstrate

That Sharing Excess is doing anything wrong operationally — the platform demonstrably works at scale, and the engineering writeups are candid about its architecture. The finding is about the gap between identity and licence, not about the rescue work.

## Sources and verification

- GitHub org: https://github.com/sharingexcess (two public repos, licence: null on both, checked via GitHub API 2026-09-07)
- Open-source claim: https://medium.com/sharing-excess/we-built-an-app-to-help-rescue-food-heres-why-5377e0155167 ("our organization, repos, and backlog are all fully open source")
- ReFED repetition of the claim: https://refed.org/articles/tech-enabled-food-rescue/ ("Sharing Excess app has been made available as open source for others to contribute and use")
- Platform docs (hosted, source unpublished): https://surplus.sharingexcess.com/docs

Not legal advice.
