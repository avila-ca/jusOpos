import { homeStyle } from "./styleComponents/homeStyle"

export const Home = () => {

   
    return(
        <>
          <h1>JustiOpos</h1>
          <h2>Tu entrenador para tus oposiciones</h2>
          <div style={homeStyle}>
          <a href="/login">To SignIn</a>
          
          </div >
          <div style={homeStyle}>
          <a href="/register">To SignUp</a>
          </div>
        </>
    )
}