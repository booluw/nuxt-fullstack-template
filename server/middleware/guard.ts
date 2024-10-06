export default defineEventHandler(async (event) => {
  const token = event.req.headers.authorization?.split(' ')[1] // Authorization token

  if (event.req.url?.startsWith('/api/protected')) {
    if (token === '') {
      // User is not logged in
      throw HttpErrors.UNAUTHORIZED({ message: 'User is not logged in' })
    }

    // Do somtheing with token here
  }
})