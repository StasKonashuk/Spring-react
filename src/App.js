import './App.css'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

function App({ state }) {
  return (
    <div className="App">
      <Header navItems={state.navItems} />
      <Content
        projects={state.projects}
        atticProjects={state.atticProjects}
        projectsFooterItems={state.projectsFooterItems}
      />
      <Footer footerLinks={state.footerLinks} />
    </div>
  )
}

export default App
