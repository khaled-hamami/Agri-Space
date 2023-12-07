export const getUserPosts = async (setFetching, setError, Error) => {
  setFetching(true)
  try {
    const VITE_GET_USER_POSTS = import.meta.env.VITE_GET_USER_POSTS
    console.log(VITE_GET_USER_POSTS)
    const response = await fetch(VITE_GET_USER_POSTS, {
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
    console.log("response   :  " + response)
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json() //! to change to const insead of let
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      console.log(data)
      return data
    }

    console.log(data)
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
