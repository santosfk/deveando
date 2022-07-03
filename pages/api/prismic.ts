import * as Prismic from "@prismicio/client";

const repoName = "deveando";

export const client = Prismic.createClient(`${repoName}`, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_TOKEN,
});
