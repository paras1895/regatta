const Footer: React.FC = () => (
  <footer className="bg-[#081129] text-gray-200 py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <div className="font-heading text-xl">COEP Regatta</div>
        <p className="text-sm text-gray-400 mt-2">98th Edition • 2025</p>
      </div>

      <div>
        <div className="font-medium">Quick Links</div>
        <ul className="mt-3 space-y-2 text-sm text-gray-400">
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </div>

      <div>
        <div className="font-medium">Contact</div>
        <div className="text-sm text-gray-400 mt-2">
          COEP Boat Club <br /> College Of Engireering Pune, <br />{" "}
          Shivajinagar, Pune, Maharashtra 411005 <br />{" "}
          Email: <a href="mailto:boatclub@coeptech.ac.in" className="text-yellow-400">
            boatclub@coeptech.ac.in
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;