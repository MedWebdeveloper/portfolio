# JCIS Portfolio Edition

JCIS is an interactive campaign-intelligence dashboard that turns fragmented Shopify and advertising data into explainable decisions.

## Live demo

https://jcis-portfolio-edition.mythicmink38.chatgpt.site

## The problem

E-commerce operators often see different purchase totals in Shopify and their advertising platform. This makes it difficult to evaluate creative performance, acquisition costs, and whether a product should be scaled, optimized, or stopped.

## What I designed and implemented

- Executive campaign overview with spend, purchases, CTR, CPA, and confidence signals
- Campaign comparison with state-driven filters
- Shopify/ad-platform discrepancy analysis
- Creative-learning library for hooks and formats
- Explainable decision center with evidence and a 14-day action plan
- Responsive navigation and layouts for desktop and mobile
- Accessible semantics, status feedback, and keyboard-friendly controls

## React implementation

- React with TypeScript and Vite
- Typed campaign data and view models
- Reusable UI components
- State-driven navigation, filters, date ranges, modal, and toast feedback
- Responsive CSS design system
- Production build validated with TypeScript

## Portfolio evidence

The public demonstration uses anonymized sample data inspired by a real e-commerce learning context. Commercial outcomes are not attributed solely to the interface. The next validation phase will test five e-commerce operators and measure task success, time to identify the weakest campaign, interpretation errors, and decision confidence.

## Run locally

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run typecheck
npm run build
```

## Author

Médard Kiteretse — UI/UX Designer and Front-End Developer  
Portfolio: https://medardkiteretse.com
