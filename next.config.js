const nextTranslate = require("next-translate");

const config = {
  images: {
    domains: ["media.graphcms.com", "via.placeholder.com"],
  },
  env: {
    NEXT_PUBLIC_SITE_TITLE: "Paloma Zamorano",
  },
  // i18n: {
  //   locales: ["en", "de"],
  //   defaultLocale: "en",
  // },
  reactStrictMode: true,
};

module.exports =  nextTranslate(config)