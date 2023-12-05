export const reviewMyPlant = async (setFetching, setError, setPayload) => {
  let url = "http://192.168.252.224:8000/submit"
  let formData = new FormData()
  // Assuming <input type="file" id="image-upload">
  let inputElement = document.getElementById("uploaded-image")
  let file = inputElement.files[0]
  formData.append("image", file)

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error))
}
