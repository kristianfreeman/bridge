const config = {
  // The name of your project
  name: "My Project",
  // An optional subtitle to explain more
  subtitle: "So long, and thanks for all the fish",
  // A URL to a blog post or tweet to learn more
  link: "https://ourincrediblejourney.tumblr.com"
  // The type of page to render: currently, the only supported one (and the default) is "sunset"
  // type: "sunset"
};

const sunset = require("./templates/sunset");
const htmlHeaders = { "Content-type": "text/html" };
const htmlResponse = body => new Response(body, { headers: htmlHeaders });

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return htmlResponse(sunset(request, config));
}
