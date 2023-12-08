export const contact = async (name, email, subject, message, setFetching, setError, setSuccess) => {
  const formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("subject", subject)
  formData.append("message", message)

  const formSpreeApiKey = import.meta.env.VITE_FORMSPREE_KEY

  setFetching(true) // *Set the fetching state to true to disable the submit button

  try {
    const response = await fetch(formSpreeApiKey, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).catch(() => {
      throw new Error("unable to connect with the server")
    })

    if (!response.ok) {
      throw new Error(
        `Sorry, we couldn't process your request. The server returned an error with a (${response.status}) code.  Please try again later.`
      )
    }

    setSuccess(
      "Thank you! Your request was submitted successfully. We will try to respond as soon as possible."
    )
  } catch (err) {
    setError(err.message)
  } finally {
    setFetching(false)
  }
}
