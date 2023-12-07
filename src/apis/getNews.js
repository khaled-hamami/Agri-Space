export const getNews = async (location, setFetching, setPayload, setError, setMessage) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_GET_NEWS = import.meta.env.VITE_GET_NEWS
    const url = `${VITE_GET_NEWS}/${location}`
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      setPayload(data)
      setError(false)
    }
    console.log(data)
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
