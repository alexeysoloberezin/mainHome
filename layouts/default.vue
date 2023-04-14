<template>
  <v-app>
    <div class="bg">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <ContactModal
      :max-width="800"
    />

    <!--    <vertical-nav-menu v-if="!pageRegister" :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>-->

    <v-app-bar
      app
      flat
      absolute
      v-if="!pageRegister"
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <div class="logo"><img style="width: 150px;height: auto;object-fit: contain" src="icons8-oracle-logo-150.png"
                                 alt=""></div>

          <nav class="nav">
            <ul>
              <li>
                <router-link to="">About us</router-link>
              </li>
              <li>
                <router-link to="/houses">
                  Houses</router-link>
              </li>
              <li>
                <a href="#" @click.prevent="$store.commit('SHOW_CONTACT_MODAL')">Contacts</a>
              </li>
            </ul>
          </nav>
          <v-spacer></v-spacer>

          <ul>
            <li v-for="locale in $i18n.locales" :key="locale.code">
              <button @click="$i18n.setLocale(locale.code);$moment.locale(locale.code)">
                {{ locale.name }}
              </button>
            </li>
          </ul>
          <!-- Right Content -->
          <!--          <theme-switcher></theme-switcher>-->
          <v-btn
            icon
            small
            class="ms-3"
          >
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <Nuxt/>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2021 <a
            href="https://themeselection.com"
            class="text-decoration-none"
            target="_blank"
          >ThemeSelection</a></span>
          <span class="d-sm-inline d-none">
            <a
              href="https://themeselection.com/products/category/download-free-admin-templates/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Freebies</a>
            <a
              href="https://themeselection.com/blog/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Blog</a>
            <a
              href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
            >MIT Licence</a>
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import {ref} from '@vue/composition-api'
import {mdiMagnify, mdiBellOutline, mdiGithub} from '@mdi/js'
import AppBarUserMenu from '@/components/AppBarUserMenu.vue'
import ContactModal from "~/components/contacts/Contacts"

export default {
  name: 'DefaultPage',

  components: {
    ContactModal,
    AppBarUserMenu,
  },

  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
  computed: {
    pageRegister() {
      return this.$route.name === 'register'
    },
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  grid-gap: 35px;

  a {
    font-size: 16px;
    color: #565656;
    font-weight: 500;
  }
}

.logo {
  margin-top: 10px;
  margin-right: 30px;
  height: 50px;
  overflow: hidden;
  display: flex;

  img {
    object-fit: cover !important;
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
