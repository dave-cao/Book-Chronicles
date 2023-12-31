

const Auth = (supabase) => {
  return {

    // signs up user, does not sign in user
    async signupUser(email, password, name) {
      const { data, error } = await supabase.auth.signUp({ email: email, password: password, options: { data: { name: name } } })
      return [data, error]
    },

    // signs in user
    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      return [data, error]
    },

    // get current session, if user is not logged in, this will be null
    async getSession() {
      const { data, error } = await supabase.auth.getSession()
      return data
    },

    async logout() {
      const { error } = await supabase.auth.signOut()
    },

    // gets the auth events that occur (not sure if we even need this)
    eventListener() {
      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
      })
    },

    // changes the email of the current user
    async changeEmail(newEmail) {
      const { data, error } = await supabase.auth.updateUser({ email: newEmail })
      return [data, error]
    },

    // change the display name of the current user
    async changeName(name) {
      const { data, error } = await supabase.auth.updateUser({ data: { name: name } })
      return [data, error]
    },

    async usernameTaken(username) {
      const { data, error } = await supabase.from("users").select().eq("name", username)
      return !(data.length === 0)
    },

    async changePassword(password) {
      const { data, error } = await supabase.auth.updateUser({ password: password })
      return [data, error]
    },

  }
}

export default Auth;
