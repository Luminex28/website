const navigation = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function Nav({
  scrolled,
  active,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  active: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Swetank Pandey home">
        <span>SP</span><i>SWETANK</i>
      </a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-links">
        Menu
      </button>
      <div id="nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navigation.map((item) => (
          <a
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
