import * as yup from "yup"

export const signinSchema = yup.object({
  email: yup
    .string("L'email invalid")
    .required("L'adresse email est requise")
    .max(30, "maximum atteint")
    .email("Adresse e-mail invalide")
    .matches(/^[a-zA-Z0-9.@ éèà]+$/, "L'email est  invalid"),
  password: yup
    .string("Le mot de passe invalid")
    .required("Le mot de passe est requis")
    .max(30, "Le mot de passe doit contenir au max 30 caractères")
    .matches(/^[a-zA-Z0-9!#+*-_ éèà]+$/, "Le mot de passe est invalid"),
})
