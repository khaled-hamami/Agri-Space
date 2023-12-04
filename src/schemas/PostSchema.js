import * as yup from "yup"

export const postSchema = yup.object({
  title: yup
    .string("invalid title")
    .required("title is required")
    .max(20, "maximum of 20  reached ")
    .matches(/^[a-zA-Z0-9.@ éèà]+$/, "invalid title"),
  description: yup
    .string("invalid description")
    .required("description is required")
    .max(150, "maximum of 150 reached ")
    .matches(/^[a-zA-Z0-9!#+*-_ éèà]+$/, "invalid description"),
  price: yup
    .number("price must be a number")
    .max(9999999999, "maximum value of 10 reached")
    .required("price is required")
    .positive("price must be positive"),
  phone: yup
    .number("must be a number")
    .test(
      "len",
      "Phone number must be exactly 8 digits",
      (val) => val && val.toString().length === 8
    )
    .required("phone number is required")
    .positive("phone number must be positive"),
  categorie: yup
    .string("invalid categorie")
    .required("categorie is required")
    .max(30, "maximum of 30 reached")
    .matches(/^[a-zA-Z0-9!#+*-_ éèà]+$/, "invalid categorie"),
})
