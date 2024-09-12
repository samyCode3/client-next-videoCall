import Header from "../components/Header"
import '../app/style/globals.css'
import Main from "../components/Main"
import Section from "../components/Section"

const HomePage = () => {
  return (
    <div className="home">
        <Header />
        <Main />
        <Section />
    </div>
  )
}
export default HomePage