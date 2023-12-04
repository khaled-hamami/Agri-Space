export const getUserPosts = async (categorie, setFetching, setPayload, setError) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_GET_USER_POSTS = import.meta.env.VITE_GET_USER_POSTS
    const response = await fetch(VITE_GET_USER_POSTS, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        categorie: categorie,
        userId: sessionStorage.getItem("userId"),
      }),
    })

    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) setPayload(data.message)
  } catch (err) {
    console.log(categorie)
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
