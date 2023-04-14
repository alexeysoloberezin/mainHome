<template>
  <v-dialog v-model="showContactModal" :persistent="persistent" :max-width="maxWidth">
    <div class="white-bg pa-5" style="background: #fff">
      <h5 class="pb-4">Our Contacts</h5>
      <div class="d-flex flex-wrap" style="grid-gap: 10px">
        <div class="blockTab cursor-pointer">
          <div>
            <TelegramIcon/>
          </div>
          <div>
            <div class="blockTab-title">Telegram</div>
          </div>
        </div>
        <div class="blockTab cursor-pointer">
          <div>
            <WpIcon/>
          </div>
          <div>
            <div class="blockTab-title">WhatsApp</div>
          </div>
        </div>
        <div class="blockTab cursor-pointer">
          <div style="margin-top: -2px">
            <InstagramIcon />
          </div>
          <div>
            <div class="blockTab-title">Instagram</div>
          </div>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$store.commit('HIDE_CONTACT_MODAL')">Close</v-btn>
      </v-card-actions>
    </div>
  </v-dialog>
</template>

<script>
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"
import InstagramIcon from "~/components/icon/Instagram"

export default {
  name: 'ContactModal',
  components: {InstagramIcon, WpIcon, TelegramIcon},
  props: {
    title: {
      type: String,
    },
    persistent: {
      type: Boolean,
    },
    maxWidth: {
      type: [String, Number],
      default: 500,
    },
    value: {
      type: Boolean,
    },
  },
  computed: {
    showContactModal: {
      get() {
        return this.$store.state.showContactModal
      },
      set(value) {
        this.$store.commit('HIDE_CONTACT_MODAL', value)
      }
    }
  },
}
</script>
