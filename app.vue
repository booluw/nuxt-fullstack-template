<script setup lang="ts">
import { HttpErrors } from './server/utils/errors';

</script>

<template>
  <div>
    {{ HttpErrors.METHOD_NOT_ALLOWED({ message: 'Not allowed here' }) }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
