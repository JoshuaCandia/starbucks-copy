import GetStarted from '../components/GetStarted'
import MainContent from '../components/MainContent'
import NavSticky from '../components/NavSticky'
import NavbarMain from '../components/Navbar'
function Awards() {
  return (
    <>
      <header>
        <NavbarMain />
        <NavSticky />
      </header>
      <main>
        <MainContent />
        <GetStarted />
      </main>
    </>
  )
}

export default Awards
