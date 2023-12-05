import { Box } from "@mui/material"
import { useAtom } from "jotai"
import { data } from "./MyPlant"
const demo = {
  title: "tomato : a tomato",
  desc: "lorem ipsum dolor sit amet lorem ezklhfezkf kjzehfze lfhEZKRLJFG ZLJRGBNerklj gbnkejLR HFNKLErzjhf gkljer gneNGJ.ERNG KErn gkjerbngkj eRBGNLEKgjlke GJ LREJF LR FLZJFJZRO¨GHZifjz lghogùzgoe",
  prevent:
    "test calleed way to hiu yu i jhy redv hgta rejfjh ekjrfh ekjghekrhg erg erohg ergh ERG reh herlg her gheRGER E GERGKEGH ",
  image_url: "http://a radndom image url",
  pred: 9,
  sname: "test sname  ufkhe fkh no  data  found",
  simage: "https://a random similar image preview",
  uimage: "http://a random u???? image preview",
}
export default function AiResult() {
  const [Aidata, setAiData] = useAtom(data)
  console.log(Aidata)
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
        px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
      }}
    ></Box>
  )
}
