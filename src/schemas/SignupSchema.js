import * as yup from "yup"

export const signupSchema = yup.object({
  firstName: yup
    .string("Le prénom  ne doit contenir que des caractères")
    .required("Le prénom est requis")
    .min(2, "2  caractères au minimum ")
    .max(20, "20 caractères au maximum "),
  lastName: yup
    .string("Le nom ne doit contenir que des caractères")
    .required("Le nom est requis")
    .min(2, "2  caractères au minimum ")
    .max(20, "20 caractères au maximum "),
  delegation: yup.string("La delegation ne peut être composé que de caractères").required(),
  email: yup
    .string("L'adresse e-mail  ne doit contenir que des caractères")
    .required("L'adresse e-mail est requise")
    .min(3, "3 caractères au minimum ")
    .max(30, "30 caractères au maximum ")
    .matches(
      /^[a-zA-Z0-9.@ éèà]+$/,
      "L'email ne doit contenir que des lettres, des chiffres, des points, et un arobase"
    )
    .email("Adresse e-mail invalide"),
  password: yup
    .string("le mot de passe ne doit contenir que des caractères")
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(30, "Le mot de passe doit contenir au max 30 caractères")
    .matches(
      /^[a-zA-Z0-9!#+*-_ éèà]+$/,
      "Le mot de passe ne doit contenir que des lettres, des chiffres, !, #, +, *, et -"
    ),
})
