import "../styles/footer.css"
import { IconButton } from "@mui/material"
import { Facebook, Instagram, Twitter } from "@mui/icons-material"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="/market">Market</a>
                </li>
                <li>
                  <a href="/myplant">My plant</a>
                </li>
                <li>
                  <a href="/weather">Weather</a>
                </li>
                <li>
                  <a href="login">Login</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Settings</h4>
              <ul>
                <li>
                  <a href="/settings">General</a>
                </li>
                <li>
                  <a href="userPosts">My Posts</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>products</h4>
              <ul>
                <li>
                  <a href="/market">Shop products</a>
                </li>
                <li>
                  <a href="/userPosts">view my listenings</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <IconButton>
                    <Facebook />
                  </IconButton>
                </a>
                <a href="#">
                  <IconButton>
                    <Instagram />
                  </IconButton>
                </a>
                <a href="#">
                  <IconButton>
                    <Twitter />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
