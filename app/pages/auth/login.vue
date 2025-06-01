<script setup lang="ts">
import * as z from "zod";

const supabase = useSupabaseClient();

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
];

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof schema>;

const signInWithOtp = async (payload: FormSubmitEvent<Schema>) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: payload.data.email,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/callback",
    },
  });
  if (error) console.log(error);
};
</script>

<template>
  <UPage>
    <div class="flex flex-col items-center justify-center gap-4 p-4">
      <UPageCard class="w-full max-w-md">
        <UAuthForm
          :schema="schema"
          title="Login"
          description="Enter your credentials to access your account."
          icon="i-lucide-user"
          :fields="fields"
          @submit="signInWithOtp"
        />
      </UPageCard>
    </div>
  </UPage>
</template>
