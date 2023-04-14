<template>
 <div>
   <div v-if="isAdmin">
     <DashIndex />
   </div>
 </div>
</template>

<script>
import DashIndex from "~/components/dashboard/DashIndex"
import {isAdmin} from "~/helper/checkRole"

export default {
  components: {DashIndex},
  computed: {
    isAdmin() {
      return isAdmin(this.$store.state.user.email)
    }
  }
}
</script>
