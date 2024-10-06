const hasRight = false

// Protect pages that has this middleware on it
export default defineNuxtRouteMiddleware((to) => {
  if (hasRight) return navigateTo(`/?continue=${to.fullPath}`)
})