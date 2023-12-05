export const reviewMyPlant = async (image, setFetching, setError, setPayload) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    console.log(image)
    const VITE_AI_URL = import.meta.env.VITE_AI_URL
    const response = await fetch(VITE_AI_URL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        image: image,
      }),
    })

    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) setPayload(data.message)
    const { title, desc, prevent, image_url, pred, sname, simage, buy_link, uimage } = data

    console.log(title)
    console.log(desc)
    console.log(prevent)
    console.log(image_url)
    console.log(pred)
    console.log(sname)
    console.log(simage)
    console.log(buy_link)
    console.log(uimage)

    setError(false)
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
