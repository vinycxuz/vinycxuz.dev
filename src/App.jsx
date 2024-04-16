import Languages from './components/languages'
import About from './components/about'
import Header from './components/header'
import Main from './components/main'
import Project from './components/project'
import TextArea from './components/textarea'
import FooterPage from './components/footer'

function App() {
  const languageData = [
    { title: "Responsividade.", content: "This site is a responsive site, which means it can be viewed on any device, whether it's a desktop, tablet, or mobile phone." },
    { title: "RESTful API", content: "This site uses API's to fetch data from the server and display it on the site." },
    // Add more objects as needed
  ];

  return (
    <>
      <Header />
      <Main />
      <Languages data={languageData}/>
      <About />
      <Project />
      <TextArea />
      <FooterPage />
    </>
  )
}

export default App
