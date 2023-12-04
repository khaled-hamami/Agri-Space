export const createPosts = async (
  token,
  title,
  description,
  price,
  phone,
  categorie,
  images,
  setFetching,
  setPayload,
  setError
) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_CREATE_POSTS = import.meta.env.VITE_CREATE_POSTS
    const response = await fetch(VITE_CREATE_POSTS, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        token: token,
        title: title,
        description: description,
        price: price,
        phone: phone,
        categorie: categorie,
        images: images,
        user_id: sessionStorage.getItem("userId"),
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
