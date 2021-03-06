import React from "react"
import Helmet from "react-helmet"
import Header from "../header/header"
import Footer from "../footer"
import StyledBackgroundSection from "../background/background"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {  
  return(
    <>
    <Helmet>
      <meta content="width=device-width, initial-scale=1" name = "viewport" />
    </Helmet>
    <Header></Header>
    <StyledBackgroundSection>
      <main>
        {children}
      </main>
    </StyledBackgroundSection>
    <Footer></Footer>
    </>
  )
}

export default Layout