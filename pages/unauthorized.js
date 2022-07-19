import { homedir } from "os";
import navStyles from "../styles/Navigation.module.css";

export default function Unauthorized({type}) {

  if (!type) {type = "signIn";}

  const handleOpenSignIn = () => {
    const element = document.getElementById("loginScreen");
    const background = document.getElementById("modalBackground");
    background.style.display = "block";
    setTimeout(() => {background.style.opacity = "1"}, 20);
    setTimeout(() => {element.classList.add(navStyles.showLoginDrawerContainer)},20);
  }

  return (
    <div className="row" style={{padding: "15%"}}>
      <div className="col-lg-10 col-offset-1">
        <p>Sorry! This spot is for members only...</p>
        {type === "signIn" && (<p><a style={{cursor: "pointer"}} onClick={handleOpenSignIn} >I am a member!</a></p>)}
        {type !== "signIn" && (<p><a style={{cursor: "pointer"}} onClick={homedir} >Return to main page</a></p>)}
        
      </div>
    </div>
  )
}