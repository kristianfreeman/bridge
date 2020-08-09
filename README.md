# 🌉 Bridge

## Simple notice pages for your project, built with [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/)

![Demo](https://i.imgur.com/o4mlrkk.png)

Bridge sits in front of your website to render simple single-page notices to your users about the status of your site.

Note from [the author](https://twitter.com/signalnerve): I'd like to add more page types, like "Under Construction", "Coming Soon", etc. Currently, the only supported project type is "sunset", for projects that are shutting down. PRs are welcome!

## Installation

First, generate a new project using [Wrangler](https://github.com/cloudflare/wrangler):

```sh
wrangler generate mysite-bridge https://github.com/signalnerve/bridge
cd mysite-bridge
```

> If you haven't installed Wrangler, check out the [Quick Start guide](https://workers.cloudflare.com/docs/quickstart/cli-setup/) on the Workers docs!

## Configuration

To configure your page, check out the `config` section of `index.js`:

```js
const config = {
  // The name of your project
  name: "My Project",
  // An optional subtitle to explain more
  subtitle: "",
  // A URL to a blog post or tweet to learn more
  link: ""
  // The type of page to render: currently, the only supported one (and the default) is "sunset"
  type: "sunset"
};
```

If you need to test your site before deploying, use `wrangler preview`!

## Deployment

When you're ready to publish your site, fill out your account details in `wrangler.toml`:

```
# The name of your project, which will be displayed in the Workers UI
name = "frontendjobs-bridge"

# The project type - don't change this unless you know what you're doing!
type = "webpack"

# The route(s) you want to serve your script on. Generally, you would want to configure
# this as `https://www.mysite.com/*` or something similar.
route = "https://www.frontendjobs.tech/*"

# Your Cloudflare Account ID (see "API Keys" section of the README)
account_id = "$myAccountId"

# Your Cloudflare Zone ID (see "API Keys" section of the README)
zone_id = "$myZoneId"
```

## API Keys

To deploy your site, you need to find your Cloudflare API Keys. Check out the Workers docs section ["Finding Your Cloudflare API Keys"](https://workers.cloudflare.com/docs/quickstart/api-keys/) to learn more!

## Credits

Illustrations are provided by [DrawKit](https://www.drawkit.io/) under an MIT License. They're wonderful, make sure to go check the site out!
