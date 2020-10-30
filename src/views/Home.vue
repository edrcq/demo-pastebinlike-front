<template>
  <div class="home">
    <h1>Bienvenue sur PastebinLike</h1>
    <div class="row">
      <div class="col-12 col-md-8">
        <create-paste />
      </div>
      <div class="col-12 col-md-4">
        <latest-pastes />
      </div>
    </div>
  </div>
</template>

<script>
import LatestPastes from '@/components/LatestPastes'
import CreatePaste from '@/components/CreatePaste'

export default {
  name: 'Home',
  components: {
    LatestPastes,
    CreatePaste,
  }
}
</script>
