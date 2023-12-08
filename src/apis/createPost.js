function dataURLtoFile(dataURL, filename) {
  // Convert base64 to a Blob
  const byteString = atob(dataURL.split(",")[1])
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  // Create a Blob from the ArrayBuffer
  const blob = new Blob([ab], { type: "image/jpeg" })

  // Create a File from the Blob
  return new File([blob], filename, { type: "image/jpeg" })
}
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
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    let formData = new FormData()
    formData.append("user_id", sessionStorage.getItem("userId")) //! to change to session storage !!!
    formData.append("title", title)
    formData.append("description", description)
    formData.append("phone", phone)
    formData.append("category", categorie)
    formData.append("price", price)

    for (let i = 0; i < images.length; i++) {
      const imageDataURL = images[i] // Replace with your actual data URL
      const filename = `image_${i + 1}.jpeg`
      const imageFile = dataURLtoFile(imageDataURL, filename)
      formData.append("images", imageFile)
    }
    const response = await fetch(`${VITE_BACKEND_URL}/posts/addPost`, {
      method: "POST",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: formData,
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 201) setPayload(data.message)
    setTimeout(() => {
      location.replace("/userPosts")
    }, 500)
    setError(false)
  } catch (err) {
    setError(true)
    setPayload(err.message == "Failed to fetch" ? "Error, please try again later" : err.message)
  } finally {
    setFetching(false)
  }
}
