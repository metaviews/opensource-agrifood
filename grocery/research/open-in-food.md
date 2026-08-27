# Open source in food — first-pass scan

Date: 2026-08-26
Purpose: A first-pass sweep across where the principles, ethics, language, or
modalities of open source have been applied specifically to food — cooking,
recipes, food knowledge, food data, and the culture of what people eat — and
what that has accomplished, complicated, or failed at. This is a surface scan,
not a verification pass. Claims are flagged for follow-up, not settled.

This is a supplement to the grocery concept research and to `open-in-culture.md`.
The question is narrower here: where has open source gone when it entered food,
and what happened.

## How this scan was done

Parallel web searches across five related domains: open/collaborative practices
in food and cooking; recipe and food-knowledge platforms; food data ontologies
and open food data; 2026 food trends and what people are eating; and food as
cultural identity (foodways). This is followed by extraction of the most
outcome-bearing pages. The result is a shape document: what exists, what the
categories look like, what tensions appear repeatedly, and what questions the
scan raises for a second pass.

## 1. The open-in-food landscape — what exists and what doesn't

The most conspicuous finding from the search is an asymmetry: there is a real,
large, working open food *data* project (Open Food Facts), a real food
*ontology* effort (FoodOn), and a small but real open-recipe and community-
cookbook conversation — but there is no large, successful, open-source food
*operation* in the sense the concept is after. Food has been opened at the data
and recipe level more than at the sourcing, operation, or culture level. The
concept's multi-layered "open" maps onto a landscape that is thin in most of
those layers and dense in one (food data).

What surfaces, by scale and coherence:

- **Open Food Facts** is the largest and most coherent open food project in the
  search. It is a free, crowdsourced, open database of food products from around
  the world — product name, quantity, packaging, brand, category, production/
  processing locations, countries and retailers where sold, ingredient lists,
  allergens, additives, nutritional information, Nutri-Score. Launched May 19,
  2012 by French programmer Stéphan Gigandet during Jamie Oliver's Food
  Revolution Day; won the 2013 Dataconnexions Award (Etalab) and the 2015 OKFN
  Award (Open Knowledge). As of the search: 20,000+ contributors, almost 3
  million products from 150 countries. The database is published as open data
  under the Open Database License; artwork under CC BY-SA. It is described in
  contemporary press as "le wikipédia des aliments" — the Wikipedia of food.
  The project's stated rationale: "Data about food is of public interest and has
  to be open." (openfoodfacts.org, Wikipedia)

- **FoodOn** is a real, citable, collaborative food ontology effort (Dooley et
  al., 2018, PMC, cited 477+ times). It promotes "a core food description
  vocabulary that research, consumer and industrial applications can reuse."
  This is the data-infrastructure layer: a shared, machine-readable way to talk
  about food across research, industry, and consumer applications. It is not a
  consumer-facing food knowledge environment in the concept's sense; it is an
  interoperability vocabulary.

- **Food composition tables and databases** are an older and more institutional
  category: national and international databases of the nutrient composition of
  foods. A 2025 open-science-framework paper (de la Revilla et al., ScienceDirect)
  proposes open tools to create them. This is the institutional open-data layer
  — real, but oriented to nutrient composition, not to sourcing, provenance,
  culture, or cooking practice.

- Open food data more broadly: a Medium piece ("The Open Data Revolution in Food")
  frames open food data as underpinning public health research by providing
  high-volume, granular, real-world nutrition information that would otherwise be
  unavailable. This is the public-health framing of open food data, which is
  adjacent to the concept's information layer but oriented to population health
  rather than to a participatory eater environment.

- **Open recipes and community cookbooks** are a small but real conversation. The
  search surfaces: opensource.com's "Crowd-sourcing the cookbook" (2009,
  foundational though dated — "Anyone who cooks, knows what they like to make, and
  what other people like to eat"); a Lifehacker piece on an open-source cookbook
  (online and PDF, submit and get recipes); the OEGlobal Convo "Open Recipes (like
  real food)" (share recipes with a "seasoned" open license, show making in video,
  photos, or list ingredients/steps/techniques); a Reddit r/selfhosted thread on
  open-source tools for cooking (small, tooling-oriented); the "Collaborative
  Recipe Books" idea (collect recipes from coworkers/friends/family into a PDF or
  hardcover); and the "Living community cookbook" research (Sánchez et al., Ecology
  and Society, 2024, cited 9 times — transdisciplinary collaboration for constructing
  recipes with biocultural value, promoting dialogue about Indigenous preparations
  and exchanging knowledge about local foods adapted over time).

- The **Recipes Project** (hypotheses.org) is the most substantial non-technical
  food-knowledge commons in the search. It is an open academic blog on "Food, Magic,
  Art, Science, and Medicine" that treats recipes as "living records whose meanings
  are continually negotiated through use, adaptation, and exchange" and as "vessels
  of memory, identity, and belonging." It runs conversation threads (e.g. "Recipes
  Project Summer 2026") on recipes and migration, translating recipes across
  languages or cultural contexts, ingredient substitution and adaptation, food and
  community, and how tastes emerge in particular communities. The project's framing
  — "recipes are never static documents" — is itself a useful contrast to the
  open-source-software metaphor of a fixed, forkable source artifact. (recipes.
  hypotheses.org)

- **Collecting Recipes** (hcommons.org) is a not-for-profit, collaborative platform
  for manuscript cookery books that "belongs to the community of practice." This is
  a small, specific, archival/community-knowledge case: making historical and family
  manuscript cookbooks accessible and collaboratively maintainable. It is an open
  approach to a particular kind of food knowledge — manuscript, inherited, community-
  held — rather than to the broad cooking-public knowledge base.

What does *not* surface as a large, successful open food operation:

- No open-source cookbook platform at the scale of Wikipedia or Open Food Facts.
  The open-recipe conversation is scattered, mostly small, and mostly either old
  (the 2009 opensource.com piece), niche (tooling), or research-oriented (the
  Sánchez paper). There is no "everyone can edit / everyone can fork" recipe commons
  that has succeeded at scale — which is interesting, because recipes are plausibly
  a better fit for the open metaphor than a grocery operation is. The failure or
  non-existence of a large open recipe commons is itself a finding.

- No large, successful open food *sourcing* platform keyed to consumer-facing
  transparency in the concept's sense (who grew what, how, at what cost). OFN and
  DFC (already covered in the grocery research) are the closest existing things, but
  they are supply-chain-data and platform-interoperability projects, and the grocery
  research already covers them.

- No large, successful open food *cooking* community that functions as a shared,
  evolving, participatory cooking practice in the open-source mode — i.e., not just
  recipe sharing but a community that collectively develops, adapts, and attributes
  cooking practice. The search surfaces communities (Reddit r/selfhosted
  open-source-cooking, the OEGlobal Convo) but they are small.

## 2. Open Food Facts — the highest-profile case, and what it teaches

Open Food Facts is the most successful application of the open-source modality to
food at scale, and it is worth understanding both what it accomplished and what it
is and is not.

What it is: a crowdsourced, open, multilingual database of food products. Anyone
can add or edit a product based on what is explicitly shown on the package; the
barcode (GTIN) is generally used as the identifier. The data is open data under
the Open Database License (ODbL) — attributions required, improvements shared in a
similar way — and the contributed artwork is CC BY-SA. Nutri-Score is used to
compute nutritional value. The project was launched by a single programmer during a
food-activism moment (Jamie Oliver's Food Revolution Day 2012) and grew through
volunteer contribution and a dedicated app (Android, iPhone, Windows Phone) for
scanning barcodes and uploading pictures of products and labels.

What it accomplished:

- Scale: ~3 million products from 150 countries, 20,000+ contributors. A real
  commons, not a toy.
- A usable public good: "Make better food choices — Knowledge is power. Food
  knowledge is power to eat better!" The database can be reused for education, new
  products and services, research, and more, for any purpose (commercial or non-
  commercial) provided attribution and share-alike. This is a genuine open food
  commons that functions as a consumer information resource.
- A commons that is reused: the ODbL terms mean the data can be built on, and the
  project lists reuse in both non-commercial and commercial projects as a feature.
- Recognition: Dataconnexions Award 2013, OKFN Award 2015 — i.e., it has been
  recognized by the open-data community as a legitimate instance of the open model
  applied to food.

What it is not, and the limitations:

- It is a *product-plus-label* database. The information Open Food Facts collects
  is what is on the package: ingredients, allergens, nutrition facts, brand, category,
  locations, retailers. It is a digitization and crowdsourcing of the existing food-
  label information environment. It is excellent at what it does, but it does not,
  by itself, contain sourcing information (who grew the ingredients, how, under what
  conditions) or cultural meaning or cooking practice. The sourcing-transparency
  question the concept raises is partly adjacent (ingredients and origin of
  processing are there) and partly absent (the farm-level story is not there).
- It is a Wikipedia-of-food in structure (crowdsourced, open, multilingual) but not
  in the "anyone can edit anything" sense — editing is bounded by what's on the
  package, which is a more constrained and more verifiable truth claim than an
  encyclopedia article's sourcing. That is a strength (less vulnerable to the kind
  of systematic-bias and reliability problems Wikipedia has) and a limit (the
  database is bounded by what manufacturers choose to put on packages, which is
  itself a regulated and commercially-shaped information environment).
- It is a commons that is vulnerable to the extraction problem. ODbL requires
  share-alike for improvements to the database, which is a partial commons-defense
  mechanism, but the concept should note that even a share-alike commons can be
  extracted and used by actors with more resources than the commons has — the same
  problem Wikipedia faces with AI.
- It is a single project, not an ecosystem. The concept wants an operation whose
  openness is constitutive of the operation, not a volunteer-run database attached
  to it.

**Finding for the concept.** Open Food Facts shows that open source applied to food
can work at real scale when the thing being opened is a well-bounded, verifiable,
crowdsourced data object — in this case, what's on the food label. It is the proof
that the open modality is not alien to food. It also shows the limits: the open
project is bounded by the existing information environment (the package), and it does
not reach the sourcing, provenance, culture, or cooking layers the concept wants. The
concept should learn from Open Food Facts that a crowdsourced, open, multilingual food
information commons is achievable and useful, and should learn that "open food data"
is not the same as "open food operation" or "open food culture."

## 3. Recipes as a knowledge commons — scattered, mostly small, one real academic
commons

The recipe space is where the open-source metaphor is most intuitively apt in food —
recipes are instructions, they evolve through adaptation, they benefit from
attribution and remix — and it is also where the search shows the least large-scale
success.

What exists:

- **Open recipes as a practice.** People share recipes under open licenses (Creative
  Commons, the "seasoned" open license the OEGlobal Convo mentions) and some projects
  encourage sharing the "source" of a recipe — ingredients, steps, techniques, and
  sometimes video/photos of the making. The Lifehacker open-source cookbook (online +
  PDF, submit and get recipes) is a small instance of this. The OEGlobal Convo is a
  small community conversation about treating recipes as open. These are real but
  small, and they do not amount to a large, working open recipe commons.
- **Community cookbooks.** The "Collaborative Recipe Books" idea (collect recipes
  from coworkers/friends/family into a PDF or hardcover) is a small, personal-scale
  version. It is closer to the potluck-and-recipe-card tradition than to an open
  commons, but it is a real existing practice of collaboratively assembling food
  knowledge.
- **The Living community cookbook** (Sánchez et al., 2024) is a research-grounded
  version: transdisciplinary collaboration to construct recipes with biocultural
  value, promoting dialogue about Indigenous preparations and exchanging knowledge
  about local foods adapted over time. This is the most substantive case in the
  search of an open/community approach to recipe-building that engages cultural and
  ecological knowledge, and it is research-sized, not a public platform.
- **The Recipes Project** is the most substantial food-knowledge commons in the
  search, and it is an academic blog, not a cooking platform. Its value for the
  concept is the framing: recipes as living records, as vessels of memory/identity/
  belonging, as continually negotiated through use/adaptation/exchange. This framing
  is a useful resource for the concept's culture layer and for thinking about food
  knowledge as a commons of meaning, not just of instructions.
- **Collecting Recipes** is a small not-for-profit platform for manuscript cookery
  books — an open approach to inherited, community-held food knowledge (family recipes,
  historical manuscripts). It is a real, specific, and valuable instance of opening a
  particular kind of food knowledge, and it is an argument that "open" can mean
  different things for different kinds of food knowledge (package data vs. manuscript
  recipes vs. community foodways).

What does not exist at scale:

- No large, successful "Wikipedia of recipes" — no crowdsourced, open, multilingual,
  evolving recipe commons that has succeeded at scale. Given that recipes are a
  plausible open-source object, this non-existence is a finding. Reasons may include:
  recipes are harder to verify than food-label data; recipe knowledge is often held
  in families and communities rather than on packages; the recipe space is commercially
  crowded (All Recipes, etc.) and the commercial sites have not opened up; recipe
  attribution and the "whose recipe is this" question is culturally and legally
  complicated; and recipe adaptation is a practice that is intimate and cultural in a
  way that a forking model does not capture.

**Finding for the concept.** The non-existence of a large open recipe commons at scale
is informative. It suggests that "open" applied to recipes runs into real cultural,
legal, and verification problems that the open-source-software metaphor does not
capture: whose recipe is this, who gets to fork it, what counts as a real adaptation
versus a copy, and what is the commons when the knowledge is held in families and
communities rather than in a package. The concept's culture layer and participation
layer should take these problems seriously: an open food operation that wants to
surface and invite participation in food knowledge (recipes, cooking practice, family
and community foodways) cannot assume the open-source-forking model transfers cleanly
to recipes. The concept should also note that the most substantive existing food-
knowledge commons in the search (the Recipes Project) is an academic conversation about
meaning, not a cooking platform — which is a reminder that food knowledge as a commons
is, in practice, more about meaning and memory than about forkable instructions.

## 4. Food ontologies and food data infrastructure — the interoperability layer that
exists

FoodOn and the broader food-data-infrastructure conversation are the closest existing
thing to the concept's structure/interoperability layer applied to food data, and they
are worth understanding as architectural references.

- **FoodOn** (Dooley et al., 2018) is a "harmonized food ontology to increase global
  food interoperability." It promotes a core food description vocabulary that research,
  consumer, and industrial applications can reuse. This is the kind of shared,
  machine-readable vocabulary the concept's structure layer needs if it wants different
  parts of the operation (and possibly different nodes in a federation) to speak about
  food in a shared way. FoodOn is not a consumer-facing information environment; it is
  an ontology — a vocabulary for describing food across applications. It is a real,
  citable, collaborative effort (477+ citations), and it is an argument that
  interoperability in food data is a real, solved-in-progress problem.
- **Food composition tables and databases** are the older institutional layer: data
  on the energy and nutrient composition of food items, sometimes with recipes. The
  2025 open-science-framework paper (de la Revilla et al.) proposes open tools to create
  them — i.e., the open-science movement is reaching food composition data. This is the
  public-health / research layer of open food data.
- **Open food data for public health** (the Medium piece): open food data underpins
  public health research by providing high-volume, granular, real-world nutrition
  information. This is the population-health rationale for open food data, which is
  adjacent to the concept's information layer but not the same — the concept's
  information layer is about the eater's environment and participation, not primarily
  about population-health research.

**Finding for the concept.** The food-data-infrastructure layer is real and
collaborative (FoodOn, food composition tables, Open Food Facts) and is a legitimate
architectural reference for the concept's structure/interoperability questions. The
concept should not invent a vocabulary from scratch; it should look at what FoodOn and
the food-data community have built. At the same time, the existing food ontology work
is oriented to research, industry, and consumer applications in the abstract, not to a
participatory eater information environment — so the concept would be extending, not
simply adopting, the existing work.

## 5. What people eat and how that's changing — the 2026 food-trends landscape

The food-trends material is the most voluminous part of the search, and it is
primarily about what people are eating, why, and under what pressures. It is useful
for the concept because a grocery operation has to meet eaters where they are — their
patterns, their pressures, their desires — and because the trends themselves reveal
something about the cultural and information environment the concept would enter.

The trends, in clusters:

- **Economic pressure is the dominant context.** IFT's Top 10 Food Trends (Sloan,
  Food Technology Magazine, 2026) opens with the macro picture: as of January, nearly
  two-thirds of consumers were still extremely (31%) or very (30%) concerned about high
  food prices at grocery stores (FMI data); U.S. food and beverage sales volume growth
  projected slightly negative to flat (-1% to 1%, Circana); real restaurant sales growth
  1.1% (Datassential); private-label dollar sales at an all-time high for the year ending
  Dec 28, 2025 (Private Label Manufacturers Association). "Periods of economic
  restriction and uncertainty have long reset consumer priorities, preferences, and
  practices... and 2026 will be no exception." Experimentation has moderated; sales of
  products with extreme and/or hot-and-spicy flavors have cooled; groundbreaking culinary
  trends are more likely to come from retailers than restaurants; cash-strapped Gen Zers
  can't be expected to be the magic bullet. Consumers want "culinary excitement, global
  intrigue, improved physical and mental health, restaurant-quality fare, convenience,
  and fun... with minimal risk and for a fair price."

- **Comfort, nostalgia, and the familiar under pressure.** IFT trend 1: next-gen comfort
  foods — one-quarter of consumers overall and 40% of Gen Z say they don't have the money
  to experiment; marketers favor the familiar and reimagine classic comfort foods; 55%
  of consumers cite comfort food as top in-home meal-prep priority (FMI); personal
  comfort food varies by demographic (sandwiches and stews for boomers, Mexican handhelds
  and Asian noodles for younger adults); about one-third of younger consumers are concerned
  about making mistakes in meal preparation (favoring simplicity and reasonably priced
  fresh prepared foods); nine of ten shoppers look for U.S. regional influences in prepared
  foods (FMI). Penn State Extension: nostalgia remains powerful in times of uncertainty
  — retro candies, s'mores-inspired "everything," fair-style foods, county-fair flavors;
  sourdough remains strong (Yelp 2026: rising searches for sourdough bread, cinnamon
  rolls, pizza, sourdough classes) — which creates educational opportunities (workshops,
  starter kits, recipe demonstrations) and a relationship-building surface for hobby
  bakers.

- **Snacks replacing meals and the texture/flavor mashup.** IFT trend 5: snacks as meals
  — 64% of consumers increasingly likely to replace traditional meals with snack items
  (72% millennials, 70% Gen Z, 64% Gen X, 51% boomers); snacks the fastest-growing
  restaurant daypart last year (NRA); emphasis on protein content (Chipotle's High Protein
  Cup 32g protein; Subway Protein Pockets $3.99; protein lattes; Cottage Cream as
  "European cousin of cottage cheese"; Beest Crunchy Jerky Trail Mix 660 calories/52g
  protein). Penn State Extension (Tastewise): 17% YoY growth in snacking occasions; some
  consumers "graze" throughout the day instead of three full meals; texture as important as
  flavor — sharp YoY increases in consumer interest for flaky (50%), crispy (49%), airy
  (43%), gooey (43%); Gen Z snacking peaks in the afternoon as a mental break (62% male,
  80% female) — "permissible indulgence." Flavor: "swicy" (sweet+spicy) branching into a
  family of mashups; consumers "look for more products that feature complex heat (smoky,
  fermented, aromatic); sour and bitter flavor profiles as the new 'flavor thrill'" — Gen
  Z pivotal given they are America's most ethnically diverse generation.

- **Global flavors, especially Asian, plus regional Indian joining the wave.** IFT trend
  4: Chinese, Japanese, Korean cuisines continue to dominate U.S. Asian food trends; Thai,
  Filipino, Vietnamese fastest-growing on U.S. restaurant menus (Datassential); Asian
  offerings now on one-third of fast-food menus; Southern U.S. markets embracing Asian fare
  rapidly; ingredients moving mainstream (Thai basil, gochujang, yuzu, black garlic, miso,
  peanut and Korean BBQ sauces, Japanese curry, fish sauce); regional Asian (Szechuan,
  Northern Thai), Korean fusion, premium dumplings, sashimi as pockets of growth; more
  fermented ingredients (kimchi, miso, tempeh), plant-forward Asian proteins, gluten-free
  Asian products, seasonal Asian offerings; Korean BBQ and hot-pot interactive cooking
  concepts getting more attention; more than seven out of ten shoppers look for fresh
  prepared Mexican foods at retail; half seek Japanese or Mediterranean; more than four in
  ten look for Caribbean, Thai, Cuban, Korean, or sushi. Penn State Extension: regional
  Indian cuisines joining the wave (Kerala-inspired; vegetable-friendly and plant-based
  options; spices similar to Mexican and some Middle Eastern; Indian-Mexican mashups, "the
  continuation of cross-culture synergies in 2026 is best when blending two prominent food
  cultures within a popular consumer format"; "weird is winning" on social media, especially
  among younger, adventurous eaters).

- **Health, protein, fiber, and the "clean" turn, under price pressure.** IFT trend 8:
  prescription nutrition — 46% of consumers making food/beverage choices for specific
  medical purposes (up 10 points over a few years, HealthFocus); SPINS flags six potential
  breakout nutraceutical ingredients for 2026 (saffron — mood, cognitive health, menopause;
  acetyl L-carnitine — energy, weight management; NMN — healthy aging, cellular health,
  cognitive health; colostrum — gut health, immune health; shilajit — cognitive health,
  energy, muscle recovery; sea moss — nutrient density, gut health, weight management);
  on the whole-food side, pumpkin, kale, sweet potatoes expected to be most sought after;
  continued momentum for mood-and-mind ingredients (ashwagandha, magnesium, GABA,
  theanine; magnesium L-threonate, citicoline, L-theanine, lion's mane for cognition). Penn
  State Extension: high-profile nutrition/health drivers intersect — GLP-1 weight-loss
  medications, updated dietary recommendations, evolving alcohol guidance (2025 U.S.
  Surgeon General advisory on alcohol-cancer link), growing reliance on health and ingredient-
  scanning apps; GLP-1 changing purchasing patterns (2025 study: within six months of
  starting, households cut grocery spending by avg 5.3%, 8% in higher-income households,
  less on savory snacks, fast food, coffee shops, more on yogurt, fresh fruit, nutrition
  bars, meat snacks; one-third discontinued the drugs and purchases returned to previous
  levels with slightly less-healthy patterns — segment will remain fluid); industry
  responding with "GLP-1-friendly" positioning (smaller portions, higher protein, satiety
  and blood-sugar support labeling); new dietary recommendations emphasize protein at every
  meal, raise suggested intake from ~0.8g/kg to 1.2–1.6g, endorse full-fat dairy, advise
  avoiding ultra-processed foods (some dietitians concerned this could push saturated fat
  above the traditional 10% of calories limit); consumers' definitions of "healthy" evolving
  (IFIC: "minimal or no processing" rose from 20% to 28%, "limited or no artificial
  ingredients or preservatives" from 18% to 25%, "good source of protein" from 30% to 38%,
  "good source of fiber" from 24% to 28% between 2022 and 2025); 70% of consumers in 2025
  trying to consume more protein, 64% more fiber (up from 62% and 56% in 2021); only ~5%
  of Americans meet recommended daily fiber intake; "Fibermaxxing" social-media-amplified
  (12% recognized the term, 21% among Gen Z, 52% interested after seeing definition);
  clean-label concerns (shorter ingredient lists, recognizable components, plant-forward
  proteins — beans, mushrooms, walnuts, tempeh).

- **Whole Foods Market's Top 8 for 2026** (Trends Council): (1) Tallow Takeover — beef
  tallow making a comeback as nourishing and nostalgic fat, ancestral ingredients, oil
  alternatives, "nose to tail" use of the animal; (3) Year of the Female Farmer — multigenerational
  farms dwindling, fewer young people choosing farming, celebrating women in agriculture
  (brands providing premium wages, funding community improvement, scholarships, internships,
  land and training for women tree-crop farmers); (5) Freezer Fine Dining — wave of new
  frozen meals, appetizers, sides; high-quality ingredients with globally inspired flavors
  and time-saving hacks; frozen arancini, pupusas, chef-inspired favorites (Flour + Water
  Cacio e Pepe Pizza, Force of Nature Grass Fed Ancestral Blend Meatballs, Laoban Crab
  Rangoon, Masienda Beef Birria Quesadillas, MiLà Caramelized Scallion Oil Noodles, Mimi
  Cheng's Dumplings, Saiga Foods Pho, Whole Foods Creamy Harissa & Cheese Phyllo Bites);
  (6) Very Vinegar — sipping tonics, crushed fruit–infused varieties, raw unfiltered "living"
  versions; vinegar's modern renaissance; premium small-batch options; vinegar infiltrating
  the creamy condiment space; (7) Sweet, But Make It Mindful — subtle sweeteners (real cane
  sugar, whole fruit, honey, maple); jam/chocolate/gummy brands leaning on real fruit; TikTok
  knockoff candy bars with peanut butter and dates; (8) Instant Reimagined — "instant" once
  associated with microwaves and convenience, now innovative better-for-you instant options
  (premium pour-over lattes, meals-in-a-cup, "just add water" getting the glow-up; bone broth
  bases, chili crisps, adaptogenic add-ins; single-serve premium pour-over lattes, trendy
  meals-in-a-cup, shelf-stable meal solutions).

- **Michelin Guide Inspectors' 7 Big Food Trends of 2026** — a different vantage point
  (restaurant/dining, not retail): (1) Char, Smoke and Flame Is The New Normal — chefs
  cooking over embers, wood, hot stones, binchotan; live-fire grilling reaching refined
  contemporary level (Knystaforsen in Sweden, Anchoíta and Don Julio in Buenos Aires,
  grilled prawns brushed with fermented soy in China); (2) Traditional Cuisines Put Down
  Contemporary Roots — chefs revisiting familiar dishes, keeping identity intact but with
  lighter plates and clearer flavors; "wild mountain ingredients" (porcini, matsutake,
  termite mushrooms) in Yunnan/Guizhou/Sichuan-influenced dishes; new wave of contemporary
  Asian fusion reinterpreting traditional dishes to express cultural identity or tell stories
  (CieL in Ho Chi Minh City, Akar in Kuala Lumpur, Sense in Hangzhou, Co- in Chengdu);
  (5) A Nod to Popular French Dishes — straightforward French bistro cooking (blanquette,
  oeufs mayonnaise, île flottante) appearing close to tradition; increasing number of
  Michelin-starred French chefs running a second, more accessible table; trend visible in
  Hong Kong and Kuala Lumpur (Bidou revisiting great Gallic dishes); (7) Where Momentum Is
  Moving — familiar destinations (France, Japan) still there, but attention shifting to
  future food hubs (Bangkok drawing chefs who want to settle and build something lasting;
  China — new openings alongside growing investment; Japan remains a magnet for technique).

- **Gen Z and younger millennials specifically** (Opeepl Youth Pulse Wave 5): real food,
  budget eating — as a distinct generational trend cluster.

- **Behavioral and cultural shifts beneath the product trends.** Penn State Extension:
  mental-health-focused eating gaining traction (behavioral health sources promoting specific
  vegetables like leafy greens to "elevate mood," whole grains to "sharpen focus and
  concentration"; content opportunities — "mood-boosting" bundles); sustainability remains a
  broad but important value (NRA: sourcing local ingredients and using eco-friendly packaging
  to reduce waste needs to be communicated clearly rather than presented as a vague claim);
  mindful eating / conscious eating as a practice linked to mindfulness and intuitive eating
  (being fully present, thinking about where food comes from, appreciating smell/texture/
  flavors/presentation, eating modest portions, chewing thoroughly, recognizing eating for
  reasons other than hunger); a move from "Girl Dinner" (quick, indulgent) toward a more
  minimalist way of consuming.

**Finding for the concept.** The 2026 food-trends landscape is dominated by economic
pressure, the health/protein/fiber/clean turn, the snacks-as-meals and texture-mashup
regime, the global-flavors wave (Asian + regional Indian joining), nostalgia and comfort
under pressure, and a set of behavioral shifts (mindful eating, mental-health-focused
eating, the "mood-boosting" surface). Several of these are directly relevant to the concept:

- The economic pressure and the private-label-at-all-time-high picture is the structural
  environment a community-benefiting grocery operation enters — and it is the same
  viability environment the co-op-sector research flagged (price sensitivity, the
  community-co-op-vs-people's-co-op choice, the "invisible discount" of values-aligned
  shopping). The concept's economics layer should take the 2026 macro picture seriously.

- The health/protein/fiber/clean turn and the GLP-1 shift are the current drivers of
  what people pay attention to in food — which is the information environment the concept's
  information layer would enter. An open grocery operation's information environment would
  be competing for attention with nutrition scanning apps, GLP-1-friendly positioning, and
  the fibermaxxing discourse. The concept should understand that "transparent sourcing"
  is arriving into a food-information landscape that is already crowded with health,
  nutrition, and wellness frames — some of which (the scanning-app economy, the prescription-
  nutrition turn) may be in tension with a community-governed, whole-food, place-based
  information environment.

- The global-flavors wave and the "weird is winning" social-media dynamic are the cultural
  appetite the concept's culture layer would meet. The concept's culture layer wants to
  surface cultural meaning in food — Indigenous foodways, diaspora traditions, regional food
  cultures — and the 2026 trends show that a broad public is already experimenting with
  global and regional cuisines, often through the social-media discovery funnel. The concept
  has a possible opening here (an operation that surfaces the sourcing, story, and cultural
  context of global and regional foods rather than just stocking them), but it also has a
  risk: the trend environment is thin on cultural depth (it is about ingredients and flavors
  more than about the foodways and communities behind them), and the concept should not
  mistake trend participation for cultural depth.

- The "Year of the Female Farmer" and the "nose to tail" / tallow / ancestral-ingredients
  threads are examples of the cultural-and-sourcing story traveling into retail trend
  language — which is exactly the kind of thing the concept's sourcing-and-culture layers
  want to do structurally rather than as a trend. The concept should note where trend
  language already carries a sourcing-and-culture story, and where it does not.

- The sourdough and "baking from scratch" and "eating the seasons" threads, and the
  "educational opportunities" framing (workshops, starter kits, recipe demonstrations) are
  examples of participatory food practice that an operation could host — closer to the
  concept's participation layer than to a product trend.

- The Michelin "char, smoke, and flame" and "traditional cuisines put down contemporary
  roots" and "wild mountain ingredients" threads are a fine-dining vantage on the same
  cultural-and-source story the concept wants to carry at grocery scale — a reminder that
  the sourcing/culture story is traveling through multiple levels of the food system, and
  that the concept could meet it at the grocery level.

## 6. Food as cultural identity — foodways, the meaning the concept's culture layer is
after

The food-as-cultural-identity material is the most directly relevant to the concept's
culture/meaning layer — and it overlaps with the Indigenous food sovereignty material
already in `meaning-and-culture.md`. The scan here is not a repeat of that; it is the
broader, non-Indigenous-specific foodways conversation, which is useful because the concept's
culture layer wants a broader grounding than the Indigenous-food-sovereignty frame alone.

What the search surfaces:

- **Foodways as the unit.** The anthropology-of-food and foodways literature treats food
  as a whole: "A culture's foodways encompass all of the social, economic, ritual, and
  other cultural practices surrounding the acquisition, preparation, sharing, and eating"
  of food. This is the right-sized unit for the concept's culture layer: not a product, not
  a recipe, but a practice and a meaning system — acquisition, preparation, sharing, eating.

- **Food as identity and belonging, and the "Americanization" struggle.** The PMC paper on
  cultural food security and second-generation U.S. minority college students frames foodways
  as "performative pedagogies of remembering" (Herakova and Cooks 2017): preparing, sharing,
  and consuming cultural foods are physical and symbolic acts that bind with cultural
  identity; foodways act as cultural transmission and expression; there is a reciprocal
  relationship between identity and foodways; cultural food preparation is deeply rooted in
  cultural history and generationally passed down; sharing cultural foods makes identity
  stronger; foodways prevent identity loss and connect people back to their culture; the
  "Americanization" struggle is real. A concrete quote captures the intimacy: "And that's how
  I learned about how food is significant in the Chinese culture. I help her a lot in the
  kitchen, and that's how my mom and I talk to each other. And she would teach me about her
  childhood too. Like, 'oh, this is what we ate as kids.'" This is the kind of meaning the
  concept's culture layer wants to make legible and participatory in a grocery operation — and
  it is the kind of meaning that is held in kitchens and families, not on packages.

- **Food as social bond and ritual.** The Insight Vacations piece frames food as social:
  "humans use food as a tool to bond, socialize and connect"; communal meals around the hearth;
  celebrations (Thanksgiving, Christmas, birthdays); Oxford study — communal eating increases
  social bonding and feelings of wellbeing; a third of weekday evening meals eaten in isolation,
  average adult eats 10 of 21 meals alone every week — i.e., a loss of the social dimension
  that is itself a cultural finding. Food as ritual: religions' most important ceremonies and
  practices center around indulgence or abnegation of certain foods. This is an argument that
  a grocery operation is not only a retail environment but a site where the social and ritual
  dimensions of food could be hosted or eroded — and that the erosion (more meals alone, more
  on-the-go) is a cultural trend the operation could respond to.

- **Food as a lens on culture and history, and the limits of "eating someone else's food."**
  The UBC Arts piece (Norenzayan, Shirley Ting, Amy Hanser, Kelly McCormick) is the richest
  single source. Norenzayan: eating and drinking are a medium through which we gather,
  socialize, create bonds; we celebrate, commemorate, tend to one another, enact rituals
  through food; Beirut culinary tradition; a child's worldwide culinary journey (sushi,
  samosas, tamales, tabbouleh) as a way of learning cultural traditions and identities; an
  Italian child can name twenty-two pasta types versus a Canadian child three to four — food
  vocabulary as a window into values and priorities; Indigenous culinary ways on Musqueam
  lands. Shirley Ting: food as first point of contact for experiencing other food cultures;
  communities are not monoliths; "my grandma's Egg Foo Young looks and tastes completely
  different to what you might find in a restaurant or in somebody else's home" — she learned
  it by picking up different cooking styles as she traveled from Jiangxi, Macau, and Hong Kong;
  "There are a lot of stories embedded in the food that we eat." Amy Hanser: two ways to think
  about food and culture — culture as a bounded entity (national identities, governments
  protecting domestic food industries to preserve a sense of distinct national culture) vs.
  culture as a component of social life (food rules — what is "good"/"healthy," who has
  cultural knowledge about food and the power to define what is worthy of respect and what is
  disparaged, food culture profoundly gendered — women dominate home food prep, men dominate
  commercial food prep, women more restrictive in what they eat). Kelly McCormick: specific
  dishes as reflections of changing interactions across cultures rather than unchanging
  "tradition" (ramen — ingredients took centuries to reach Japan through Buddhism, trade,
  colonialism, imperialism; wheat-based noodles innovated in Japan into udon, soba, somen,
  ramen; white rice given as military provision reinforcing centrality to Japanese food culture
  when many rural communities relied on millet, barley, sweet potatoes); konbu as kelp staple
  for Japanese soup bases with a hidden history.

- **The "eating someone else's food is superficial" caution.** Hanser: "eating 'someone else's'
  food is a relatively superficial way to engage in cultural exchange, and it can result in
  complicated situations in which cultural outsiders seek out the most 'authentic' and 'exotic'
  food experiences for their own entertainment... we should probably be modest about how
  meaningful a medium food is for cultural understanding and social exchange." This is a direct
  caution for the concept's culture layer: an operation that surfaces cultural meaning in food
  should not assume that stocking diverse foods or even surfacing stories is itself cultural
  exchange or cultural depth; it should be modest about what a grocery operation can do, and
  it should avoid the "authentic/exotic for our entertainment" frame.

- **Food as intangible cultural heritage, and the food-bank turn toward cultural foods.** The
  SLO Food Bank piece frames food as intangible cultural heritage (Arabic coffee as a symbol of
  generosity in Saudi Arabia, Oman, Qatar, UAE); traditional food and local cuisine (Italy —
  family, community, tradition; Japan — simplicity, elegance, attention to detail, aesthetics,
  respect for nature and tradition; national dishes); food as a bridge between cultures (US
  melting pot — pizza, tacos, sushi; Cajun and Creole); dining etiquette and sharing meals as
  social glue; cultural foods promoting good nutrition and health (traditional foods often made
  with fresh, locally sourced ingredients and traditional cooking methods); and — importantly —
  a food-bank turn toward sourcing culturally specific foods from different global cuisines:
  "This shift is not just about hunger alleviation; it's about providing food that nourishes the
  body and the soul, acknowledging and respecting the cultural diversity of our communities...
  The accessibility of culturally specific foods plays a key role in the preservation of heritage
  and the expression of identity. Food is often deeply intertwined with traditions, customs, and
  memories... Food access is not just a matter of nutrition and physical health, but also a vital
  component of cultural continuity, community belonging, and personal identity." This is the most
  concrete existing example in the search of an institution explicitly arguing that food access
  must include cultural foods as a matter of cultural continuity and belonging — which is the
  concept's culture layer in an institutional sentence.

- **Colonialism and the erasure of food history.** The Insight Vacations piece: "European
  colonizers often imposed their cuisine and methods on the colonized, erasing their cultural
  history." This is the dark side of the food-as-cultural-identity story, and it is the same
  dynamic the Indigenous food sovereignty material names (colonization profoundly disrupted
  Indigenous food systems; increased dependence on grocery stores; ultra-processed foods;
  community stores selling only processed foods). The concept's culture layer should hold both
  the food-as-heritage story and the food-as-erasure story; the "not culturally appropriate to
  sell" point from the Indigenous food sovereignty research is the sharpest version of the
  erasure problem.

**Finding for the concept.** The food-as-cultural-identity / foodways material gives the
concept's culture layer its strongest grounding outside the Indigenous-food-sovereignty frame.
The core insights: foodways are the right unit (acquisition, preparation, sharing, eating — the
whole practice, not a product or a recipe); food is identity, belonging, and memory, held in
kitchens and families (the Chinese-food-with-mom quote is the paradigm case); food is social and
ritual, and the trend toward more meals alone is a cultural loss a grocery operation could
respond to; food vocabulary and food rules are windows into values and power (who can define
what is "good" or "healthy," who does the home cooking vs. the commercial cooking, who is
restrictive in what they eat); specific dishes are records of changing interactions across
cultures and of colonial erasure, not of unchanging "tradition"; and the "eating someone else's
food is superficial" caution is a real limit the concept should name. The food-bank turn toward
culturally specific foods is the most concrete existing example of an institution arguing that
food access must include cultural foods for cultural continuity and belonging — which is the
concept's culture layer in an institutional sentence, and which is a direct argument that a
grocery operation's category and sourcing decisions are cultural decisions.

The concept should also note the overlap with the Indigenous food sovereignty material: the
"food is sacred / not culturally appropriate to sell" point and the colonial-erasure point are
the sharpest versions of the food-as-erasure problem, and they are the reason the concept's
culture layer cannot be a shallow "stock diverse foods" move. The concept's culture layer must
be able to hold the difference between "this is a cultural food that a community eats" and "this
is a sacred food that should not be commodified," and must be able to name when an operation is
participating in erasure versus stewardship.

## 7. Findings for the concept — the through-lines

### 7a. Open source applied to food is real, but concentrated in data, not in operation or
culture.

The largest, most successful open food project (Open Food Facts) is a crowdsourced,
open, multilingual database of what's on food labels. The most substantial food-knowledge
commons (the Recipes Project) is an academic conversation about meaning, not a cooking
platform. The food-data-infrastructure layer (FoodOn, food composition tables, open food data
for public health) is real, collaborative, and a legitimate architectural reference, but it is
oriented to research, industry, and consumer applications, not to a participatory eater
environment. Open recipes and community cookbooks exist but are small and scattered, and there
is no large, successful "Wikipedia of recipes." In short: food has been opened at the data
level more than at the sourcing, operation, participation, or culture level. The concept's
multi-layered "open" maps onto a landscape that is dense in one layer and thin in most of the
others. The concept should not assume that "open food" already exists in anything like the
form the concept wants; the conformity to the grocery research's overall finding (the concept's
five layers are not jointly realized in existing practice) holds here.

### 7b. The open-source metaphor fits recipes better than a grocery operation does, and the
non-existence of a large open recipe commons is a finding.

Recipes are instructions that evolve through adaptation, that benefit from attribution and
remix — a better fit for the open-source metaphor than a grocery operation. That the large,
successful open recipe commons does not exist is therefore informative, not just a gap. The
likely reasons — recipe knowledge is held in families and communities, not on packages;
recipes are harder to verify than label data; the "whose recipe is this" question is culturally
and legally complicated; recipe adaptation is intimate and cultural in a way the forking model
does not capture; the commercial recipe space is crowded and closed — are all reasons the concept
should take seriously as it thinks about its own information/participation/culture layers. The
concept should not assume that opening food knowledge means "anyone can fork any recipe"; it
should design for the actual cultural shape of food knowledge.

### 7c. The concept's sourcing-and-culture layers would enter a crowded and contested
food-information landscape.

The 2026 food-trends landscape shows a food-information environment already crowded with
health, nutrition, wellness, scanning-app, GLP-1-friendly, and social-media-discovery frames.
"Transparent sourcing" is arriving into this landscape, not into a blank slate. The concept
should understand this as a competitive-attention problem and a framing problem: an open
grocery operation's information environment would have to be legible and compelling alongside
nutrition apps, wellness discourse, and trend language. The concept should also note that
several of the trend threads already carry a sourcing-and-culture story in the limit (ancestral
ingredients, nose-to-tail, female farmers, wild mountain ingredients, char/smoke/flame, regional
cuisines) — which is the kind of thing the concept wants to do structurally, and which is also
the kind of thing that currently travels as trend language rather than as a structural
information environment.

### 7d. The culture layer's grounding is real but comes with cautions the concept must name.

The foodways and food-as-identity material gives the concept a real, substantial grounding for
its culture layer: foodways as the unit, food as identity/belonging/memory held in kitchens and
families, food as social and ritual, food vocabulary and food rules as windows into values and
power, specific dishes as records of cross-cultural interaction and colonial erasure, the "eating
someone else's food is superficial" caution, and the food-bank turn toward culturally specific
foods as an institutional argument for cultural continuity and belonging in food access. The
cautions: cultural depth is not the same as stocking diverse foods or even surfacing stories;
the "authentic/exotic for our entertainment" frame is a real risk; the sacred/not-for-sale point
from Indigenous food sovereignty is the sharpest version of the erasure problem; and the trend
environment is thin on cultural depth (ingredients and flavors more than foodways and
communities). The concept's culture layer must be able to hold the difference between heritage
and erasure, and between a cultural food a community eats and a sacred food that should not be
commodified.

### 7e. The food-as-social-bond and meals-alone findings are a participation-and-culture
opportunity and a cultural-loss signal.

The social dimension of food is real (communal eating increases social bonding and wellbeing;
food as the backdrop for relationships and ritual), and the trend toward more meals alone (a
third of weekday evening meals eaten in isolation; average adult eats 10 of 21 meals alone per
week) is a cultural loss signal. This is a direct argument that a grocery operation is not only
a retail environment but a site where the social and ritual dimensions of food could be hosted —
and where the erosion could be responded to. The sourdough/baking-from-scratch/eating-the-
seasons/educational-opportunities threads are examples of participatory food practice an
operation could host, closer to the concept's participation layer than to a product trend.

### 7f. The economic context is the same viability environment the concept already flagged.

The 2026 macro picture (nearly two-thirds of consumers concerned about high food prices; volume
growth slightly negative to flat; private label at an all-time high; experimentation moderated)
is the same viability environment the co-op-sector research flagged (price sensitivity, the
community-coop-vs-people's-coop choice, the "invisible discount" of values-aligned shopping,
the UCLA Anderson competition model). The concept's economics layer should take the 2026 macro
picture as the current structural environment, not as a separate or softer version of the
viability question.

## 8. What this scan does not yet cover

- The actual user base and reuse ecosystem of Open Food Facts: who contributes, who uses the
  data, what the data enables in practice, and whether the share-alike commons-defense actually
  holds against extraction. The search surfaces the project's self-description and some awards
  but not a systematic user/reuse picture.
- Whether any large, successful open recipe or cooking commons exists that the search missed
  (the search did not find one, but a deeper look at recipe platforms — Wikipedia's recipe
  coverage, the archive.org recipe collections, large community recipe sites that may have
  opened up — is warranted).
- The food-data interoperability space specifically for consumer-facing sourcing information
  (the concept's sourcing layer): OFN and DFC are covered in the grocery research, but the
  question of whether there is an open food data layer that carries farm-level sourcing and
  provenance to the eater at scale is not yet answered.
- The cultural meaning of specific foods and foodways in the Canada-centred context (the
  concept's corpus is Canada-centred, and the foodways material here is largely US/UK/international;
  a Canada-specific foodways pass would ground the culture layer in the corpus's home
  jurisdiction).
- The failure cases: where open food data or open recipe projects actually failed, folded, or
  were absorbed into conventional models. The scan surfaces critiques and tensions more than
  clean failure case studies.
- The relation between open food data and the protection of traditional/Indigenous food
  knowledge (the CARE/FAIR tension in a food-specific form): the Indigenous food sovereignty
  material already in the grocery research makes this question urgent, and this scan does not
  yet develop the food-specific version.

## What this is for

This scan is a surface pass across the food-specific side of open source and the food-trends
and foodways landscape the concept would enter. It is meant to give the concept a map of where
open source has gone in food, what it has done and not done, what the eaters it would meet are
actually doing and wanting, and what cautions the culture and participation layers should carry.
It is not a synthesis; it is a map. The map suggests a second pass that would dig into: Open Food
Facts' user base and reuse ecosystem; the open-recipe/recipe-platform landscape (whether a large
commons exists that was missed); the consumer-facing sourcing-information question at the
farm-provenance level; Canada-specific foodways; and the failure cases. It also suggests that
the concept's next design work on the culture and participation layers should be informed
directly by the foodways material and the meals-alone finding, not by the open-source-software
metaphor alone.
