import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src='/images/login-logo.svg' alt='' />
        </a>
        <div>
          <Join>Join</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professionnal community</h1>
          <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

const Container = styled.div`
padding: 0px;
`
const Nav = styled.nav`
padding: 12px 0 16px;
max-width: 1128px;
margin: auto;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
color: #0a66c2;

& > a{
  width: 135px;
  height: 34px;
  
  @media (max-width: 768px){
    padding: 0 5px;
  }
}
`

const Join = styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,.6);
margin-right: 12px;
cursor:pointer;
border-radius: 5px;

&:hover{
  background-color: rgba(0,0,0,.08);
  color: rgba(0,0,0,.9);
  text-decoration: none;
}
`
const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align:center;
cursor:pointer;
background-color: rgba(0,0,0,0);

&:hover{
  background-color: rgba(112,181,249,0.15);
  text-decoration: none;
}
`

const Section = styled.section`
display:flex;
align-content: start;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
flex-wrap: wrap;
position: relative;
width: 100%;
align-items: center;
margin: auto;
max-width: 1128px;

@media (max-width: 768px){
  margin: auto;
  min-height: 0px;
}
`
const Hero = styled.div`
width:100%;
h1{
  padding-bottom: 0;
  width: 55%;
  font-size: 56px;
  color: #2977c9;
  font-weight: 200;
  line-height: 70px;

  @media (max-width: 768px){
    text-align: center;
    font-size: 20px;
    line-height: 2;
    width: 100%;
  }
}

img {
  /* z-index: -1; */
  width: 700px;
  height: 670px;
  position: absolute;
  bottom: -2px;
  right: -150px;
  top: --150px;

  @media (max-width: 768px){
    min-width: 374px;
    height: 240px;
    position: initial;
    bottom: calc(-64px)
  }

  @media (max-width: 414px){
    width: 320px;
    margin-bottom: -5px;
  }
}
`

const Form = styled.div`
margin-top: 100px;
width: 488px;

@media (max-width: 768px){
  margin-top: 20px;
}
`

const Google = styled.button`

  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items :center ;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  box-shadow:  inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb( 0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0,0,0,.6);

  &:hover{
    background-color: rgba(207,207,207,0.25);
    color: rgba(0,0,0,.75) ;
  }
`
export default Login
