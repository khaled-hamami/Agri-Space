export const contact = async (name, email, subject, message, setFetching, setError, setSuccess) => {
  const formData = new FormData()

  formData.append("name", name)
  formData.append("email", email)
  formData.append("subject", subject)
  formData.append("message", message)

  const formSpreeApiKey = import.meta.env.VITE_FORMSPREE_KEY

  // Set the fetching state to true to disable the submit button
  setFetching(true)

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

    const result = await response.json()
    setSuccess(
      "Thank you! Your request was submitted successfully. We will try to respond as soon as possible."
    )
  } catch (err) {
    // Handle and display the error
    setError(err.message)
  } finally {
    // Ensure that setFetching is set to false regardless of success or failure
    setFetching(false)
  }
}
