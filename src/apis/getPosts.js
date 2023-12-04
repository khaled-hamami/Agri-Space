export const getPosts = async (categorie, setFetching, setPayload, setError) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_GET_POSTS = import.meta.env.VITE_GET_POSTS
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        "content-type": "application/json",
      },
      method: "GET", //! to change to post later
      // body: JSON.stringify({ //! to uncomment later
      //   categorie,
      // }),
    })

    if (!response.ok) throw new Error("Error. Please try again later")
    let data = await response.json() //! to change to const insead of let
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      data = data.filter((post) => post.categorie === categorie) //! to delete after the tests
      setPayload(data)
    }
  } catch (err) {
    console.log(categorie)
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
