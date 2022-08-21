import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

let gitHubID = process.env.GITHUB_ID ?  process.env.GITHUB_ID : ''
let gitHubScret = process.env.GITHUB_SECRET? process.env.GITHUB_SECRET : ''

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: gitHubID,
      clientSecret:gitHubScret,
    }),

  ],
  secret:process.env.SECRET,
})