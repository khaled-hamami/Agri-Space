export const deletePost = async (postId, setFetching, setError, setMessage, setOpen) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_DELETE_POST_URL = import.meta.env.VITE_DELETE_POST_URL
    const url = `${VITE_DELETE_POST_URL}/${postId}`
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      method: "DELETE",
    })
    console.log(response)
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      setError(false)
      setMessage(data.message)
      location.reload()
      console.log(data.message)
    }
  } catch (err) {
    setError(true)
    setOpen(true)
    setMessage(err.message)
  } finally {
    setFetching(false)
  }
}
