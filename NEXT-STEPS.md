# Next steps to activate monetization

The site is live but earns nothing until the Amazon Associates account exists.
This is the ~15-minute human part (requires sign-in, tax form, bank details).

## 1. Amazon Associates signup

1. Go to https://affiliate-program.amazon.com and sign in with your Amazon account.
2. Website list: enter `https://s-laszlos-afk.github.io/smallspacefit/`
3. Profile: store ID suggestion `smallspacefit` (Amazon appends `-20`),
   topic: fitness equipment, monetization: product comparison content.
4. Complete the tax interview (W-9 for US residents) and payment details.
   This can also be done later, but payouts only flow once it's complete.
5. Note the tracking ID Amazon assigns (e.g. `smallspacefit-20`).

## 2. Activate the tag on the site

Edit `assets/site.js`, first line:

```js
var AFFILIATE_TAG = "smallspacefit-20"; // <- your actual tracking ID
```

Commit and push. Every Amazon link on the site then carries the tag.

## 3. The 180-day clock

Amazon reviews the application only after **3 qualifying sales within 180 days**
of signup. Don't sign up and let the site idle — sign up when traffic work starts.

## 4. Traffic (in rough order of value)

- Google Search Console: verify the site, submit `sitemap.xml`.
- Bing Webmaster Tools: same, 2 minutes, often indexes faster.
- Pinterest: comparison-pin per guide (evergreen traffic for fitness content).
- Reddit: genuinely helpful answers in small-space/apartment-living threads
  (no link dumping — it gets removed and shadowbans the domain).
- Publish 1–2 new guides per month; January fitness wave is the window.
