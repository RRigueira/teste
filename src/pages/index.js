import * as React from "react"
import { motion } from "framer-motion"
import ProgressiveImage from "react-progressive-image"
import { Link } from "gatsby"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
const imageDetails = {
  width: "524px",
  height: "650px",
}

const Home = ({ image }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: "524px",
                height: "650px",
              }}
            >
              <div className="frame">
                <Link to={`/model`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}
                  >
                    {src => (
                      <motion.img
                        src={src}
                        alt="Yasmeen Tariq"
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Yasmeen Tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Home
