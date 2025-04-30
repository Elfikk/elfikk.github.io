import "./SiteNavbar.css"

function SiteNavbar() {
  return (
    <div className = "navbar">
        <a href = "#about">About</a>
        <a href = "#projects">Projects</a>
        <a href = "#shows">Shows</a>
        <a href = "/JCCV11-23.pdf">CV</a>
    </div>
  );
}

export default SiteNavbar;