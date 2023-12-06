import { Box, Container, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { data } from "./MyPlant"
// const demo = {
//   title: "Apple : Cedar rust",
//   desc: "Cedar apple rust (Gymnosporangium juniperi-virginianae) is a fungal disease that requires juniper plants to complete its complicated two year life-cycle. Spores overwinter as a reddish-brown gall on young twigs of various juniper species. In early spring, during wet weather, these galls swell and bright orange masses of spores are blown by the wind where they infect susceptible apple and crab-apple trees. The spores that develop on these trees will only infect junipers the following year. From year to year, the disease must pass from junipers to apples to junipers again; it cannot spread between apple trees.",
//   prevent:
//     "Choose resistant cultivars when available.\nRake up and dispose of fallen leaves and other debris from under trees.\nRemove galls from infected junipers. In some cases, juniper plants should be removed entirely.\nApply preventative, disease-fighting fungicides labeled for use on apples weekly, starting with bud break, to protect trees from spores being released by the juniper host. This occurs only once per year, so additional applications after this springtime spread are not necessary.\nOn juniper, rust can be controlled by spraying plants with a copper solution (0.5 to 2.0 oz/ gallon of water) at least four times between late August and late October.\nSafely treat most fungal and bacterial diseases with SERENADE Garden. This broad spectrum bio-fungicide uses a patented strain of Bacillus subtilis that is registered for organic use. Best of all, SERENADE is completely non-toxic to honey bees and beneficial insects.",
//   image_url: "https://www.planetnatural.com/wp-content/uploads/2012/12/apple-rust.jpg",
//   pred: 2,
//   sname: "Katyayani All in 1 Organic Fungicide",
//   simage:
//     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2JQ-fAdtrzzmkSespqEpKwop3BnWntsLioVSgjy79mpxQVPSqoD4v9yfL0mtiFJvFnPqeE7EcefadhdEpc9uUTCZbROwOPsklL_XDMSLTpxOGvIcBMMFiBQ&usqp=CAE",
//   buy_link:
//     "https://agribegri.com/products/buy-organic-fungicide-all-in-1-online--organic-fungicide-.php",
//   uimage: "C:\\Users\\seifd\\Desktop\\AI plantes\\my\\myproject\\media\\Apple_ceder_apple_rust.JPG",
// }

export default function AiResult() {
  const [Aidata, setAiData] = useAtom(data)
  setAiData(Aidata)
  const description = Aidata?.desc || ""
  const title =
    Aidata?.title || "Error!....Invalid Image,  Please make sure you upload a leaf image"
  const prevent = Aidata?.prevent || ""
  const simage = Aidata?.simage || ""
  const uimage = Aidata?.uimage || ""

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
        px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
      }}
    >
      <Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem", lg: "2rem", xl: "2.5rem" },
            }}
          >
            {title}
          </Typography>
          <br />
          <br />
          <br />
          <br />
        </Container>
        <fieldset
          style={{ padding: "30px", borderColor: "#0AB68B", margin: "15px", borderRadius: "15px" }}
        >
          <legend>
            <Typography sx={{ fontSize: "1.2rem", color: "contrast.reverse" }}>
              Description{" "}
            </Typography>
          </legend>
          <Typography sx={{ color: "contrast.reverse" }}>{description}</Typography>
        </fieldset>
        <fieldset
          style={{ padding: "30px", borderColor: "#0AB68B", margin: "15px", borderRadius: "15px" }}
        >
          <legend>
            <Typography sx={{ fontSize: "1.2rem", color: "contrast.reverse" }}>
              What is the solution
            </Typography>
          </legend>
          <Typography sx={{ color: "contrast.reverse" }}>{prevent}</Typography>
        </fieldset>
        <fieldset
          style={{ padding: "30px", borderColor: "#0AB68B", margin: "15px", borderRadius: "15px" }}
        >
          <legend>
            <Typography sx={{ fontSize: "1.2rem", color: "contrast.reverse" }}>
              How to Prevent
            </Typography>
          </legend>
          <Typography sx={{ color: "contrast.reverse" }}>{prevent}</Typography>
        </fieldset>
        <Box sx={{ width: "100%", display: "flex" }}>
          <fieldset
            style={{
              padding: "30px",
              borderColor: "#0AB68B",
              margin: "15px",
              borderRadius: "15px",
              display: "flex",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <legend>
              <Typography sx={{ fontSize: "1.2rem", color: "contrast.reverse" }}>
                Solution
              </Typography>
            </legend>
            <img src={simage} style={{ width: "50%" }} />
          </fieldset>
          <fieldset
            style={{
              padding: "30px",
              borderColor: "#0AB68B",
              margin: "15px",
              borderRadius: "15px",
              display: "flex",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <legend>
              <Typography sx={{ fontSize: "1.2rem", color: "contrast.reverse" }}>Plante</Typography>
            </legend>
            <img src={uimage} style={{ width: "50%" }} />
          </fieldset>
        </Box>
        {/* {(document.getElementById("imageDisplay").src = image)} */}
        {console.log(document.getElementById("imageDisplay"))}
      </Box>
    </Box>
  )
}
