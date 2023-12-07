import { useNavigate } from "react-router"

export const reviewMyPlant = async (image, setFetching, setError, setPayload) => {
  try {
    setFetching(true)
    const formData = new FormData()
    formData.append("image", image)
    console.log(image)
    const VITE_AI_URL = import.meta.env.VITE_AI_URL
    const response = await fetch(VITE_AI_URL, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      console.log(response)
      const responseData = await response.json()
      const { title, desc, prevent, simage, uimage } = responseData
      console.log(responseData)
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
