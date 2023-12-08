import { useNavigate } from "react-router"

export const reviewMyPlant = async (image, setFetching, setError, setPayload) => {
  try {
    setFetching(true)
    const formData = new FormData()
    formData.append("image", image)
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const response = await fetch(`${VITE_BACKEND_URL}/submit`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      const responseData = await response.json()
      const { title, desc, prevent, simage, uimage } = responseData
      const result = { title: title, desc: desc, prevent: prevent, simage: simage, uimage: uimage }
      return result
    }
  } catch (err) {
    setError(true)
    setPayload("Error.... please make sure you uploaded a leaf image")
  } finally {
    setFetching(false)
  }
}
