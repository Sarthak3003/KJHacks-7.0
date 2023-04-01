import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import Navbar from '../Components/Navbar'
import Loans from './Loans'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
padding-top: 50px;
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  padding-left: 50px;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `

const Right = styled.div`
  flex: 3;
  position: relative;
  margin-right: -400px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 70%;
  }
`

const Img = styled.img`
  width: 600px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  return (
    <>
      {/* <Section> */}
      <Navbar />
      <Container>
        <Left>
          <Title>
            <Typography variant="h2" color="initial">
              <b>
                The modern <span style={{ color: '#E24748' }}>finance</span>{' '}
                platform.
              </b>
            </Typography>
          </Title>
          <Typography
            variant="h5"
            color="initial"
            sx={{ paddingTop: -6, color: '#5d657b' }}
          >
            All your finance modules at one place.
          </Typography>
          {/* <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button> */}
          <Link to="/loans" style={{ textDecoration: 'none' }}>
            <Button
              variant="text"
              color="primary"
              sx={{
                backgroundColor: '#E24748',
                marginTop: '30px',
                color: 'white',
                ':hover': {
                  bgcolor: '#2F3A56',
                  transition: '0.7s',
                  // color: 'black',
                },
                padding: '15px',
              }}
            >
              Browse{' '}
              <span>
                {' '}
                <b>→</b>{' '}
              </span>
            </Button>
          </Link>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#D8E8EB"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="https://res.cloudinary.com/dtgkbztkz/image/upload/v1680374720/kisspng-portable-network-graphics-clip-art-image-computer-gold-rupee-coin-png-rupee-coin-png-image-free-down-5c68696af228e2.8804069615503466029919_1_ge2ux2.png" />
        </Right>
      </Container>
      {/* // </Section> */}
    </>
  )
}

export default Hero

// import React from 'react'


// const Landing = () => {
//   <>
//   <Left>
//           <Title>Think. Make. Solve.</Title>
//           <WhatWeDo>
//             <Line src="./img/line.png" />
//             <Subtitle>What we Do</Subtitle>
//           </WhatWeDo>
//           <Desc>
//             we enjoy creating delightful, human-centered digital experiences.
//           </Desc>
//           <Button>Learn More</Button>
//         </Left>
//         <Right>
//           <Canvas>
//             <Suspense fallback={null}>
//               <OrbitControls enableZoom={false} />
//               <ambientLight intensity={1} />
//               <directionalLight position={[3, 2, 1]} />
//               <Sphere args={[1, 100, 200]} scale={2.4}>
//                 <MeshDistortMaterial
//                   color="#BBA56E"
//                   attach="material"
//                   distort={0.5}
//                   speed={2}
//                 />
//               </Sphere>
//             </Suspense>
//           </Canvas>
//           <Img src="./img/Rupee-Coin-PNG-Clipart.jpg" />
//         </Right>
//         </>
//   const [checked, setChecked] = React.useState(true)

//   return (
//     <>
//       <Navbar />

//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//         <div>
          // <Typography variant="h2" color="initial" sx={{ paddingTop: '150px' }}>
          //   <b>The modern <span style={{ color: '#E24748' }}>finance</span>{' '}
          //   platform.</b>
          // </Typography>
//           {/* <Typography variant="h2" color="initial">
//             All your business in one app.
//           </Typography> */}
//         </div>
//       </Slide>
//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//         <div>
//           <Typography
//             variant="h5"
//             color="initial"
//             sx={{ paddingTop: 3, color: '#5d657b' }}
//           >
//             All your finance modules at one place.
//           </Typography>
//           {/* <Typography variant="h6" color="initial" sx={{ color: '#5d657b' }}>
//             Manage money quickly, easily and efficiently.
//           </Typography> */}
//         </div>
//       </Slide>

//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        // <Link to="/loans" style={{textDecoration: 'none'}}>
        // <Button
        //   variant="text"
        //   color="primary"
        //   sx={{
        //     backgroundColor: '#E24748',
        //     marginTop: '30px',
        //     color: 'white',
        //     ':hover': {
        //       bgcolor: '#2F3A56',
        //       transition: '0.7s',
        //       // color: 'black',
        //     },
        //     padding: '15px',
        //   }}
        // >
        //   Browse{' '}
        //   <span>
        //     {' '}
        //     <b>→</b>{' '}
        //   </span>
        // </Button>
        // </Link>
//       </Slide>

//       {/* <Loans /> */}
//     </>
//   )
// }

// export default Landing
