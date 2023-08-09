import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactSection from "./components/ContactSection/ContactSection";

function App() {
	return (
		<>
			<NavBar />
			<HomeSection />
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
