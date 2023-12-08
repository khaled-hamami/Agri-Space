export const getUserPosts = async (setFetching, setError, Error) => {
  setFetching(true)
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const response = await fetch(`${VITE_BACKEND_URL}/posts/getUserPosts`, {
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      return data
    }
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
