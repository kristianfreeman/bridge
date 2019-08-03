const illustration = require("./illustration");

const css = `
.illustration {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-5px);
	}
	100% {
		transform: translatey(0px);
	}
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

html { 
  font-family: 'Roboto', sans-serif; 
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
}
`;

const tailwindCss =
  '<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">';

const fontsCss = `<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">`;

const template = (request, config) => {
  const url = new URL(request.url);
  return `
<!doctype html>
<html lang="en" class="antialiased">
  <head>
    ${fontsCss}
    ${tailwindCss}
    <style>${css}</style>
    <title>${config.name || url.hostname} is shutting down</title>
  </head>
  <body>
    <div class="max-w-md mx-auto" >
      <h1 class="py-8 text-2xl text-center">${`<span class="font-bold">${config.name ||
        url.hostname}</span> is shutting down`}</h1>
      ${config.subtitle ? `<p class="pb-8">${config.subtitle}</p>` : ""}
      <div class="illustration w-100">${illustration}</div>
      ${
        config.link
          ? `<p class="py-8 text-center"><a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="${config.link}">Learn more</a></p>`
          : ""
      }</p>
    </div>
  </body>
</html>
`;
};

module.exports = template;
