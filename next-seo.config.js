const description =
  "Espresso yourself with cool coffee T-shirts";
const title = "Coffeetravelr";
const url = "https://coffeetravelr.com";

const seo = {
  title,
  titleTemplate: "%s | Life is to short for bad coffee",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@coffeetravelr",
    site: "@coffeetravelr",
  },
};

export { seo as defaultSeo, url as defaultUrl };
