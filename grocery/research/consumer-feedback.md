# Consumer sentiment, comments, and feedback as product/producer data — first-pass scan

Date: 2026-08-26
Purpose: A first-pass sweep across how consumer sentiment, social-media comments, and
similar feedback exist today in the food space, how that feedback could be attached to
traceability information and data about a product or producer, and what it could do for
an open source grocery operation — and what it would risk and complicate. This is a
surface scan, not a verification pass. Claims are flagged for follow-up, not settled.

This file is part of the grocery concept research tree (see `research-mapping.md`). It
extends the traceability pass: the concept wants to "tap into traceability programs where
available to have links to where the food comes from." Consumer sentiment and comments are
the participatory-and-information layer that could sit alongside that origin data — the "what
do people say, feel, and know about this" alongside the "where did this come from." The scan
is interested in both: what already exists, and what attaching that feedback to food data
would mean.

## How this scan was done

Five parallel web searches: (1) consumer reviews of food products and producers (farmers,
farms); (2) the intersection of food traceability and consumer-facing comments/engagement
(QR codes, story, consumer trust); (3) food commentary on social media and the culture of
food review (FoodTok, influencers, the review-as-practice question); (4) the failures,
problems, and limits of consumer reviews (fake reviews, bias, incentives, performative);
(5) community and direct-to-consumer review mechanisms (local food systems, CSA, farmers'
markets, farm-direct platforms). A core set of outcome-bearing sources was then read in
depth: the PMC critical review of consumer trust in food and the food system (which
explicitly discusses online reviews as a way consumers access product quality and safety
information, and how reviews are trusted differentially); the FTC Final Rule banning fake
reviews and testimonials (the regulatory/integrity side); the SAGE marketing review of fake
reviews (the conceptual landscape of review fraud); the Frontiers social-proof paper on
organic food (reviews/ratings as a nudge); and the GlobalData/QR-code-forge-link piece on
QR codes as the link between consumer demand and product transparency. The result is a shape
document: what exists by layer, how feedback already attaches (or does not) to food data, the
integrity problems, the design possibilities and cautions for the concept, and the questions
the scan raises for a second pass.

## 1. What "consumer sentiment and feedback" means in the food space — the layers

Consumer sentiment and feedback about food shows up in at least four overlapping layers, and
they are worth separating because they behave differently and attach differently to product/
producer data:

- **Structured product reviews and ratings** — star ratings, written reviews, purchase-verified
  or not, on retailer sites, on third-party review platforms, on the producer's own site, or
  on community/direct-to-consumer platforms. This is the "review" layer in the classic sense:
  a rating plus a comment, attached to a product or a producer, often with some signal of
  purchase or experience.

- **Social-media commentary** — comments, likes, shares, short videos, anecdotes, comparisons,
  and informal review on platforms like TikTok, Instagram, YouTube, Reddit, Facebook. This is
  the "social commentary" layer: not structured as a review, not necessarily attached to a
  specific product page, but shaping perception of foods, producers, recipes, and brands. The
  FoodTok / food-influencer layer is the most visible current instance.

- **Community and community-of-practice feedback** — word-of-mouth and community-specific
  commentary: farmers' market regulars, CSA members, co-op shoppers, community cookery-book
  contributors, local-food marketplace testimonials, neighborhood food groups. This is the
  "community" layer: feedback that exists inside a community around specific foods, farms, and
  producers, often offline or semi-offline.

- **Trust signals and credibility cues** — the broader set of signals consumers use to judge
  food: producer reputation, trust in farmers (consistently the most trusted part of the food
  chain in multiple national surveys), certification marks, origin labels, and the social-proof
  cues that accompany products online (ratings, reviews, likes, comments, "people also bought").

For the concept, the relevant question is not whether consumer feedback exists (it does, in all
four layers), but how it is attached (or not) to data about a specific product or producer, what
integrity that attachment has, and what an open grocery operation could do with it — or should
avoid doing with it.

## 2. How consumer feedback already attaches to food data — the existing attachment points

### Product reviews and ratings — the dominant attachment model today

The dominant way consumer feedback is attached to food data today is the product review: a star
rating and a written comment attached to a product on a retailer's site, a marketplace, or a
review platform. The research base is large and consistent: more than 90% of consumers read
reviews before making a purchase, and over 50% are willing to pay more for products from brands
with positive reviews (SAGE marketing review of fake reviews, citing GlobeNewswire 2022). Reviews
function as social proof and shape perceptions of brand and product.

For food specifically, the critical review of consumer trust in food (PMC) makes the point
explicitly: "Online reviews also enable consumers to indirectly access product quality and safety
information through the lived experiences of other consumers." And there is a trust-ordering worth
noting: "positive or factual reviews, and reviews appearing on social networks, are often perceived
as more trustworthy than negative or emotional reviews, and reviews appearing on retailer sites."
This is a useful caution: the perception of trustworthiness is not uniform; it depends on the tone
and the venue, and the venue matters (social-network review feels more trustworthy than retailer-
site review, which is a structural feature of how consumers read sources). Farmers and producers,
meanwhile, are consistently among the most trusted actors in the food chain (PMC, citing Australian
national survey data: "Farmers are the most trusted part of the Australian food chain").

### QR codes as the link between consumer demand and product transparency — and the content
behind the link is the variable

There is a real current convergence: QR codes on packaging are increasingly preferred by consumers
for product information (GlobalData, via Quality Assurance Magazine), and QR codes are the most
practical vector today for attaching information — and potentially feedback — to a specific product
in the moment of choice. The QR-code-forge-link framing is the link the concept is already thinking
about from the traceability pass: the QR code is the surface technology; what is behind it is the
design question. Today, the content behind the QR code is mostly marketing/story/origin information
(the traceability pass covered this), and consumer feedback is generally not yet a first-class
resident behind the QR code — except in the sense that a brand's social-media presence and reviews
are reachable from a QR-code landing page.

### Community-level feedback — the attachment that is real but semi-offline

The direct-to-consumer and community food layers have real but uneven review/feedback practices:

- Farmers' markets: a reviewed literature base exists on the contributions of farmers' markets to
  rural and urban communities, and the market-as-venue is a site where producer reputation and
  community feedback coalesce in person (a review of farmers' markets, ResearchGate).

- CSA (Community Supported Agriculture): the CSA model is framed as a way for people to be in
  control of their weekly food purchases while supporting the start-up costs of small farms — a
  community relationship that is partly a feedback relationship (members are directly tied to a
  specific farm or producer over a season).

- Farm-direct and local-food marketplace testimonials: exist (Local Food Marketplace testimonials,
  farm-direct.com Trustpilot reviews praising freshness and quality of local seasonal produce),
  but are thin and platform-specific rather than a general, portable, food-data-attached layer.

- A Reddit homestead thread describes a developer who "built this app that sorts by..." for buying
  direct-to-consumer from farms and ranches — a small, independent, tooling-level attempt at making
  the direct-to-consumer farm space more navigable, which is at least adjacent to a consumer-feedback-
  as-navigation layer.

The attachment pattern in the community layer is real but fragmented: feedback exists around specific
farms, markets, and producers, but it is mostly venue-bound (the market, the CSA, the platform) rather
than attached to a portable, product-linked data record.

### Social-media commentary — the layer that shapes perception most powerfully and attaches least
formally

The social-media commentary layer is the most influential current driver of food perception, and the
least formally attached to product/producer data. The food-social-media research stream analysis (PMC,
García-León et al. 2023) frames the growth of interest in food and online communication as fast among
marketing and business scholars, but notes the interest has been growing without a fully settled
conceptual apparatus — i.e., the phenomenon is large and important and not yet fully theorized.

The FoodTok / food-influencer layer is the most visible instance: short-form video, recipe recreations,
restaurant and product reviews in 30-second form, and a reviewer culture that has displaced (or
competed with) the older restaurant-critic model. The Slate piece on "The Unsavory Side of FoodTok"
(named "Keith Lee") is a useful marker — the 30-second influencer review has real reach and real
consequences, and it also has the familiar critique: influencer reviews, undisclosed sponsored posts,
and the general question of authenticity. The "Influencer Food Review Dilemma" framing (Instagram) —
culinary experts and food critics addressing undisclosed sponsored posts and fake restaurant reviews on
social media — is the same integrity concern showing up in the social-media layer.

The cultural practice of the food review is also under active renegotiation: a Reddit thread on "how to
write insightful food reviews" (in a food-focused forum) shows people actively debating what a food
review is for and what makes one valuable — i.e., the review as a social practice is contested, not
settled, even among people who care about food.

## 3. The social-proof and behavioral effects — what consumer feedback does

The behavioral literature is clear that consumer reviews and ratings function as social proof and
influence food choices, including healthier choices:

- The Frontiers paper on social proof regarding organic food (Hilverda 2018, PMC, 85+ citations):
  when explicit expressions of social proof such as comments are unavailable or contradictory,
  consumers might look at more subtle cues of social proof. Social proof in the form of reviews and
  ratings influenced participants' food choices — "suggesting that reviews and ratings) when making
  decisions on food." A high consumer rating on healthy foods as a nudging strategy has potential.

- The British Food Journal paper on social proof and herd behavior (Begho, pure.sruc): consumer
  comments, likes, and reviews as cues of online social proof influence food choice; positive reviews
  have a substantial beneficial impact on consumer patronage; consumer review and ratings had greater
  importance than expert reviews/ratings and observing others buying the food; 44% for review only,
  56% for ratings only, 49% for no review or rating chose the no-sugar yoghurt (in one experiment).
  Food influencer, feedback, review, ratings, food choice, feedback are the keywords. The practical
  implication: "businesses could emphasize a robust rating system by highlighting ratings separately to
  impact consumer decisions effectively. Further, food producers' customer testimonials and feedback,
  particularly from within consumers' social circles."

- The consumer-trust critical review (PMC) grounds this in the food system: online reviews let
  consumers indirectly access product quality and safety information through the lived experiences of
  other consumers; positive/factual reviews and social-network reviews are often perceived as more
  trustworthy than negative/emotional reviews and retailer-site reviews.

The behavioral takeaway for the concept: consumer feedback about food is not just commentary — it is
a real influence on what people choose and how they judge safety and quality. An open grocery operation
that surfaces consumer feedback alongside origin data is surfacing something that genuinely shapes
behavior, which is both an opportunity (real information that helps eaters) and a responsibility (the
integrity and the framing of that feedback matter, because it influences).

## 4. The integrity problems — fake reviews, bias, incentives, performative, and the limits of
the signal

The integrity problems in consumer feedback are serious and well-documented, and they are directly
relevant to an open grocery operation that might surface consumer feedback as part of its product/producer
data.

### Fake reviews are a large, documented, and regulated problem

The FTC Final Rule banning fake reviews and testimonials (August 2024) is the clearest regulatory
marker. It addresses: reviews and testimonials that misrepresent that they are by someone who does not
exist (AI-generated fake reviews) or who did not have actual experience with the business/product; that
misrepresent the experience of the person giving it; businesses creating or selling such reviews; buying
such reviews from company insiders; disseminating such testimonials when the business knew or should have
known they were fake or false. It also prohibits providing compensation or incentives conditioned on the
writing of consumer reviews expressing a particular sentiment, either positive or negative; and selling
or buying fake indicators of social-media influence (followers, views generated by a bot or hijacked
account), when the buyer knew or should have known they were fake and misrepresent the buyer's influence
for a commercial purpose.

The marketing review of fake reviews (SAGE) frames the landscape: although the majority of reviews are
genuine, there is a growing trend of review fraud and manipulation; fake reviews can be generated by
either consumers or firms; consumers are responsible for a substantial portion of fake reviews (motivated
by free/discounted products, a sense of power from manipulating reviews, monetary and charitable
incentives, behavioral tendencies and the third-person effect); firms create fake reviews to preserve or
enhance their image and improve product perception (positive review deception) or to undermine
competition (negative review fraud). More than 90% of consumers read reviews before a purchase, and over
50% are willing to pay more for products from brands with positive reviews — so fake reviews can distort
a system that a large majority of consumers rely on.

The FTC rule also covers company-side manipulation of reviews: an officer/manager cannot solicit consumer
reviews from immediate relatives, employees, or employees' relatives if the reviews do not disclose the
material relationship, and the officer/manager either encouraged non-disclosure or knew/should have known
the review appeared without disclosure and failed to take remedial steps. It prohibits businesses from
implying a review has to be positive (or negative) to get an incentive, even without saying so explicitly
("Tell us how much you loved your visit... and get a $5 coupon" implies the review has to be positive);
it prohibits buying 5-star reviews on third-party platforms even with disclosure; it covers review
suppression (with exceptions for reviews reasonably believed to be fake). Service Seeking (ACCC): a
platform that let businesses draft their own reviews, give themselves their own star rating, and
auto-published if the customer didn't respond within 3 days — $600,000 penalty for making false or
misleading representations by publishing these reviews. The ACCC guidance lists signs a review may be
fake: a spike in highly positive or negative reviews over a short period; many reviews from the same email
or IP; similar reviewer names; generic reviews without specific detail; reviews written in similar language
as other reviews for the same business/product.

### Bias and the limits of the signal

The worry is not only fabrication; it is also selection bias and the performative skew. Only some people
write reviews and some people read them — the population that reviews is not the population that buys, and
the population that writes is skewed toward extremes. Positive reviews can create a perception of reviews
as unbiased and authentic (the Frontiers social-proof paper notes this). Reviews appearing on social
networks are perceived as more trustworthy than retailer-site reviews — but social-network reviews are
also where influencer and sponsored content lives, which is a different kind of unreliability. The
consumer-trust review notes positive/factual reviews and social-network reviews are often perceived as
more trustworthy than negative/emotional reviews and retailer-site reviews — which is a trust Ordering
that could mislead if the social-network venue is itself where sponsored and fake content is most prevalent.

### The organic-food social-proof case is a useful specific

The Frontiers organic-food social-proof paper is a useful specific case because the concept is interested
in credence claims and their fragility (covered in the traceability pass). Social proof in the form of
reviews and ratings influenced food choices including healthier choices; when explicit social proof
(comments) is unavailable or contradictory, consumers look at more subtle cues. The implication: even a
credence-relevant attribute like "organic" is subject to social-proof dynamics, and the review layer can
amplify or contradict the certification layer in ways that are not themselves certified.

### The performer/influencer layer raises authenticity and disclosure questions

The influencer-food-review dilemma (undisclosed sponsored posts, fake restaurant reviews on social media,
the question of what makes a review authentic) is the social-media version of the fake-review problem, and
it is live in the food space. The Slate "Unsavory Side of FoodTok" piece and the "Influencer Food Review
Dilemma" Instagram post are both markers that the authenticity of food commentary on social media is an
open, contested, and partially regulatory question.

### The structural limits on using consumer feedback as a credibility signal

Several structural limits on using consumer feedback as a credibility signal for food:

- Purchase verification is uneven: some platforms verify purchase, which makes those reviews more reliable
  (ACCC); many do not. For food, purchase verification is especially hard because the relevant experience
  (did you actually eat this, and how) is harder to verify than "did you receive this package."

- The experience consumers review is often downstream of what the food data captures: a review of taste,
  freshness, or value is a real consumer signal, but it is not a verification of origin, farming practice,
  or safety — i.e., the review layer and the traceability layer answer different questions, and conflating
  them would be a mistake.

- "Reviews" of a producer/farm are a weaker and more ambiguous signal than reviews of a specific product:
  a farm review can reflect the farm's retail experience, its product quality, its relationship with the
  community, its values, or a combination — and the review reader may not know which.

- Community feedback (farmers' market, CSA, co-op) is real but venue-bound and not portable to a product
  data record in any standard way today.

- The performative and incentivized dynamics (free products for reviews, incentives for positive sentiment,
  the sense of power from manipulating reviews) mean the review layer is a contested signal, not a clean
  one.

## 5. Findings for the concept — what consumer sentiment and feedback could mean for an open
source grocery

### 5a. Consumer feedback is a real, influential, and structurally available layer — and it is
under-attached to food data today

Consumer feedback about food exists in all four layers (structured reviews/ratings, social-media
commentary, community feedback, trust signals/credibility cues), it influences behavior measurably
(reviews/ratings as social proof affect food choices including healthier ones; more than 90% of consumers
read reviews before buying; over 50% will pay more for positive reviews), and it is under-attached to
portable, product-linked food data today. The dominant attachment model is the product review on a retailer
or marketplace site; the QR-code surface is the most practical vector for attaching information to a
specific product in the moment of choice; and community feedback exists but is venue-bound. The gap — a
portable, product- and producer-attached layer of consumer feedback that travels with the food data — is
real and is something the concept could fill, or could choose not to fill depending on the risks.

### 5b. The concept should think of consumer feedback as a parallel layer to traceability, not a
substitute for it

The traceability layer answers "where did this come from, who handled it, what was verified." The consumer-
feedback layer answers "what do people say, feel, and know about this — taste, freshness, value, trust,
community impression." They are different questions and should be kept separate in the concept's design:
conflating consumer sentiment with origin verification would be a category error (a positive review does
not verify that the food came from the farm it says it came from, or that it was grown organically). The
concept's information layer can surface both, but it should be clear about which is which and about the
evidentiary weight of each.

### 5c. The integrity problems are serious enough that the concept should design for them explicitly,
not assume a clean signal

The integrity landscape — fake reviews (FTC Final Rule, ACCC Service Seeking, the SAGE marketing review),
selection and performative bias, incentives for positive sentiment, the influencer/sponsored-content
problem, the social-network-versus-retailer-site trust ordering that may mislead, the uneven purchase
verification — means that any consumer-feedback layer surfaced by the concept will be a contested signal,
not a clean one. The concept should design for this: be explicit about what feedback is attached, how it
was collected, whether purchase is verified, how incentive and sentiment are handled, how fake or
manipulated reviews are handled, and how the feedback is presented relative to the origin/verification
data. A consumer-feedback layer that is honest about its limits is more trustworthy than one that implies
a clean signal.

### 5d. The concept has a real opportunity to make consumer feedback a community-and-participation layer
rather than a platform-reputation layer

The existing feedback layers are mostly platform- or venue-bound (retailer site, marketplace, social
platform, farmers' market, CSA, co-op). An open source grocery operation has the opportunity to make
consumer feedback a community-and-participation layer that is attached to the food data it controls and
governed by the community it is part of — i.e., feedback as a participatory feature of the operation rather
than as a reputation mechanism owned by a platform. This is the participatory layer speaking to the
information layer. The design space includes: comments and reviews attached to products and producers in
the operation's own information environment; community curation of which feedback is surfaced; community
mechanisms for surfacing and contesting misinformation in feedback; and a relationship between the feedback
layer and the traceability layer (e.g., "this review is from someone who bought this lot," or "this
producer has both traceability data and a community feedback record").

### 5e. The concept should be careful about the review-as-reputation trap and about burdening small
producers

Consumer feedback can become a reputation mechanism that rewards performative marketing and punishes small
or less-digitally-literate producers — which is the same kind of burden/barrier dynamic the traceability
pass flagged for compliance. The concept should be wary of building a feedback layer that becomes a
reputation ladder on which small producers fall, or that incentivizes performative presentation over
substance. The concept should also be careful about the disincentive effects: if negative feedback is
openly surfaced and the producer is small, the feedback can be disproportionately damaging, and the
producer has fewer buffers than a large brand. The design should consider how to make feedback useful
without making it a weapon or a marketing arms race.

### 5f. The social-media commentary layer is too influential to ignore and too informal to rely on as
data — the concept should track it, not adopt it wholesale

Food commentary on social media (FoodTok, food influencers, 30-second reviews, recipe recreations, the
review-as-practice debate) is the most influential current driver of food perception and the least formally
attached to product/producer data. The concept should track this layer (it is where food culture is being
made and remade in real time) and could surface selected community commentary where appropriate, but should
not adopt social-media commentary wholesale as a data layer — it is too informal, too incentive-driven, and
too authenticity-contested for that. The concept's feedback layer should be more structured and more honest
about provenance than a social-media scrape.

### 5g. The QR-code surface is the natural place to attach feedback to the food in the moment of choice
— but the feedback behind the code is the design question

The QR code is the most practical consumer-facing surface for attaching information to a specific product
in the moment of choice (covered in the traceability pass), and it is also the natural place to attach
consumer feedback to that product — a comment thread, a rating, a community note, a producer response, a
record of what the community has said about this item or this producer. The design question is exactly the
same as for traceability: what is behind the code, how trustworthy it is, how it is governed, and how it is
presented relative to the origin data. The concept's traceability-and-information surface (the QR-code or
equivalent in-store surface) is the place where origin data and consumer feedback would meet the eater; the
concept should design that meeting deliberately rather than letting origin data and feedback blur together.

### 5h. Trust in farmers is a structural asset the concept can build on — and a caution

Farmers and producers are consistently among the most trusted actors in the food chain (the consumer-trust
review, citing Australian national survey data). That trust is a real asset for an operation that wants to
surface producer identity and origin. But it is also a caution: trust in the producer can be conflated with
trust in the claims about the producer's food, and a producer's reputation (real or perceived) can be used
to lend credibility to claims that are not themselves verified. The concept's feedback and credibility design
should keep producer trust and claim verification distinct — i.e., "these people are trusted" is not the same
as "this claim about their food is verified."

### 5i. The regulatory environment is moving on fake reviews — the concept should be aware of it and
design within it

The FTC Final Rule (and the ACCC guidance, and the broader regulatory movement on fake reviews and
incentivized testimonials) is a real part of the environment the concept would enter if it surfaces consumer
reviews and ratings. The concept should be aware of the rule's scope (fake/false reviews and testimonials;
buying or selling fake reviews; incentives conditioned on sentiment; misuse of fake social-media indicators;
review suppression in some cases) and design its feedback practices to be within the spirit and letter of it.
A feedback layer that is designed to be honest and non-manipulative is both more trustworthy and more
compliant-by-default.

## 6. What this scan does not yet cover

- A systematic map of the existing consumer-review platforms and mechanisms specifically for food, and what
  each attaches to (product vs. producer vs. recipe vs. brand) and how purchase is verified — the scan
  surfaces the layers and the behaviors but not a platform-by-platform inventory.
- The actual practice of producer-facing feedback collection (how farms and small food producers currently
  collect and use reviews and testimonials, and the burden and incentive structures around it) — relevant to
  the design question of whether and how the concept asks producers to engage with a feedback layer.
- The community-governance of consumer feedback: what a community-governed review/comment layer would look
  like in practice (moderation, surfacing, contesting misinformation, producer response, the relationship to
  the traceability/verification layer) — flagged as a design space the concept should think through, but not
  yet developed.
- The food-specific research on consumer willingness to engage with product-linked feedback (the discrete-
  choice work on QR-code traceability willingness-to-pay is in the traceability pass; an analogous willingness-
  to-engage-with-feedback question for food is not yet covered here).
- Non-Western and community-specific feedback traditions around food (the community layer is North-America-
  oriented in this scan; Canada-specific community food feedback traditions are not yet covered, which matters
  given the corpus).

## How this connects to the rest of the grocery research

- The traceability pass (where did the food come from; what exists, what is thin, what is contested) is the
  immediate antecedent: consumer feedback is the participatory-and-information layer that could sit alongside
  the origin data, and the QR-code surface is the place they meet.
- The open-in-food and open-in-culture passes (food has been opened at the data level more than at the
  operation, participation, and culture levels; the consumer-facing side is the thin part) are the broader
  frame: consumer feedback is another place where the consumer-facing, participatory layer is thin relative to
  the data layer.
- The Indigenous food sovereignty pass (the sacred/not-for-sale point; the colonial-erasure point) is directly
  relevant: consumer feedback about culturally held food knowledge raises the same category problem — some food
  knowledge is not for public commentary or commodified review, and a feedback layer that treats all food as
  reviewable is missing this.
- The concept's five levels are the design frame: consumer feedback sits at the intersection of the information
  layer (what the eater can see and do with information about a product/producer) and the participation layer
  (the community's voice as part of the operation), and also touches the culture layer (food commentary as
  cultural practice) and the sourcing layer (producer reputation as a credibility signal).

## What this is for

This scan is a surface pass across consumer sentiment, social-media comments, and similar feedback in the food
space — how it exists today, how it attaches (or does not) to product/producer data, what it does behaviorally,
what integrity problems it carries, and what an open source grocery operation could do with it or should avoid.
It is meant to give the concept a realistic map of the consumer-feedback layer as a possible participatory-and-
information feature alongside traceability, and the cautions that layer carries. It is not a synthesis and not a
design document; it is a map. The map suggests a second pass that would dig into: a platform-by-platform map of
consumer-review mechanisms for food; the actual producer-facing practice of collecting and using reviews and
testimonials (burden and incentives); the design of a community-governed feedback layer (moderation, surfacing,
contesting misinformation, producer response, relationship to the verification layer); the food-specific
willingness-to-engage-with-product-linked-feedback question; and Canada-specific and community-specific feedback
traditions around food.
