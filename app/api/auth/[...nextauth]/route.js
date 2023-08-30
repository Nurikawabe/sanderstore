import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: NEXT_PUBLIC_NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          clientSecret: NEXT_PUBLIC_NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
      ],
      secret: process.env.SECRET
})

export { handler as GET, handler as POST }
