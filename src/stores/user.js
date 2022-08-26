import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (user) {
        this.user = user;
        console.log(this.user);
      }
      if (error) throw error;
    },
    async signInGoogle() {
      const { user, error } = await supabase.auth.signIn({
        provider: "google",
      });
    },
    async signIn(email, password) {
      console.log(email, password);
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      console.log(error);

      if (user) {
        this.user = user;
        console.log(this.user);
      }
      if (error) throw error;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
