<template>
  <div class="player">
    <video src="#" class="player__video" poster="img/player-poster.jpg"></video>
    <PlayerControls />
  </div>
</template>

<script>
import PlayerControls from '../../components/PlayerControls/PlayerControls.vue'

export default {
  components: { PlayerControls },
}
</script>

<style lang="scss" scoped></style>
