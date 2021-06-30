<template>
  <v-row align="center" justify="center">
    <v-card class="rounded-xl" dark color="rgba(0,0,0,0.8)" elevation="15" min-width="350">
      <h1 class="text-center text-body-1 my-4 ">Вход в систему</h1>
      <v-divider></v-divider>
      <v-container>
        <v-form @submit.prevent="onSubmit" ref="form">
          <v-text-field
            class="text-subtitle-1 font-weight-light"
            label="Email"
            placeholder="Email"
            outlined
            clearable
            prepend-inner-icon="mdi-at"
            :error-messages="getError($v.email)"
            v-model="email"
            @blur="$v.email.$touch()"
            type="email"
          ></v-text-field>
          <v-text-field
            class="text-subtitle-1 font-weight-light"
            label="Password"
            placeholder="Password"
            outlined
            clearable
            prepend-inner-icon="mdi-lock-outline "
            type="password"
            :error-messages="getError($v.password)"
            v-model="password"
            @blur="$v.password.$touch()"
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              outlined
              color="light-green accent-3"
              class="font-weight-light"
              :disabled="$v.$invalid"
              :loading="loading"
              ><v-icon class="mx-1">mdi-login</v-icon>Логин</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  data() {
    return {
      email: "alko-account@info.com",
      password: "123456789",
      loading: false,
    };
  },

  methods: {
    getError(validations) {
      const errors = [];
      if (!validations.$dirty) return errors;
      if (!validations.required) {
        errors.push("Заполние поле");
        return errors;
      } else if (!validations.email && validations.hasOwnProperty("email")) {
        errors.push("Введите Email");
        return errors;
      }
      return errors;
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$router.push('/')
      }
    },
  },
};
</script>
