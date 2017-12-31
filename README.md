# react-landing-components

`react-landing-components` is a collection of reactjs components to quickly build landing pages. I found that using hosted services like Launchrock doesn't give me enough flexibility, but frameworks like Bootstrap are too low-level and lead to lots of repetitive code. I wanted something in between these two extremees.


## Visit the Sample Page
## Available Components

Main components:

- [`App`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/app.jsx)
- [`Code`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/code.jsx)
- [`CustomerQuotes`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/customer-quotes.jsx)
- [`Countdown`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/countdown.jsx)
- [`Footer`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/footer.jsx)
- [`Figure`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/figure.jsx)
- [`Hero`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/hero.jsx)
- [`HorizontalSplit`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/horizontal-split.jsx)
- [`ImageList`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/image-list.jsx)
- [`Navbar`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/navbar.jsx)
- [`Page`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/page.jsx)
- [`PricingTable`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/pricing-table.jsx)
- [`Section`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/section.jsx)
- [`SignupInline`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/signup-inline.jsx)
- [`SignupModal`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/signup-modal.jsx)
- [`Team`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/team.jsx)

Third-Party integrations

- [`GoogleAnalytics`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/vendor/google-analytics.jsx)
- [`Segment`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/vendor/segment.jsx)
- [`Stripe`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/vendor/stripe.jsx)
- [`Typeform`](https://github.com/ilyaLibin/react-landing-components/blob/master/js/components/vendor/typeform.jsx)


## Documentation

The best way to learn about the components is to look at the [code for the sample page](https://github.com/ilyaLibin/neal-sample/blob/master/js/sample-page.jsx). But, basically:

```bash
npm install --save react-landing-components
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "react-landing-components";

ReactDOM.render((
  <App googleAnalyticsKey="UA-42490151-3">
    <Page>
      <Navbar brand="hello">{ /* Your nav */ }</Navbar>
      <Hero className="text-xs-center"> <h1>{ /* Content */ }</h1> </Hero>
      <Section heading="Hello!">
        <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
      </Section>
      { /* More ... */ }
    </Page>
  </App>
), document.getElementById("main"));

```

Other dependencies that should be included from a CDN:

- jQuery
- Bootstrap v4 Javascript (https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js)
- Font Awesome

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
```

## Custom Styling

Styling can be overwritten by setting the [appropriate SASS Variables](https://github.com/ilyaLibin/react-landing-components/blob/master/css/_variables.scss) in your code.
