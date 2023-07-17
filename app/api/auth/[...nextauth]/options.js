import {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
    providers: [
        GithubProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),

        CredentialsProvider({
            name:"Credentials",
            credentials : {
                username : {
                    label : "Username : ",
                    type : "text",
                    placeholder : "Username"
                },
                password : {
                    label : "Password : ",
                    type : "password",
                    placeholder : "Password"
                },
                async authorize(credentials){
                    const res = await fetch("/your/endpoint", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                      })
                      const user = await res.json()

                      if (res.ok && user) {
                        return user
                      }
                      // Return null if user data could not be retrieved
                      return null
                }
            }
        })
    ]
}