export const createPost = async (
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
    if (!sessionStorage.getItem("isLoggedIn")) throw new Error("unauthorized")
    // if (!sessionStorage.getItem("userId")) throw new Error("unauthorized")
  const VITE_CREATE_POSTS = import.meta.env.VITE_CREATE_POSTS
    const response = await fetch(VITE_CREATE_POSTS, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        phone: phone,
        categorie: categorie,
        images: images,
        user_id: sessionStorage.getItem("userId"),
      }),
    })
    
    console.log(title)
    console.log(description)
    console.log(price)
    console.log(phone)
    console.log(categorie)
    console.log(images)
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
  if (response.status === 401 || response.status === 400) throw new Error(data.message)
  if (response.status === 200) setPayload(data.message)
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
