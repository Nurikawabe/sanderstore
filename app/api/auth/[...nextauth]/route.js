import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: "257999819795-ra0qnrtoppnf7i1b1st2ts1m6dmpjcjk.apps.googleusercontent.com",
          clientSecret: "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"
        })
      ]
})

export { handler as GET, handler as POST }
