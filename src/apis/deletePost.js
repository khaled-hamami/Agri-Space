export const deletePost = async (postId, setFetching, setError, setMessage, setOpen) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const url = `${VITE_BACKEND_URL}/posts/delete/${postId}`
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      setError(false)
      setMessage(data.message)
      location.reload()
    }
  } catch (err) {
    setError(true)
    setOpen(true)
    setMessage(err.message)
  } finally {
    setFetching(false)
  }
}
