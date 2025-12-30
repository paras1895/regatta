import Section from "./Section";

const SPONSORS = [
  { logo: "/sponsors/img1.jpg"},
  { logo: "/sponsors/img2.jpg"},
  { logo: "/sponsors/img3.jpg"},
  { logo: "/sponsors/img3.jpg"},
  { logo: "/sponsors/img4.jpg"},
  { logo: "/sponsors/img5.jpg"},
  { logo: "/sponsors/img6.jpg"},
  { logo: "/sponsors/img7.jpg"},
  { logo: "/sponsors/img8.jpg"},
  { logo: "/sponsors/img9.jpg"},
  { logo: "/sponsors/img10.jpg"},
  { logo: "/sponsors/img11.jpg"},
  { logo: "/sponsors/img12.jpg"},
  { logo: "/sponsors/img13.jpg"},
  { logo: "/sponsors/img14.jpg"},
  { logo: "/sponsors/img15.jpg"},
  { logo: "/sponsors/img16.jpg"},
  { logo: "/sponsors/img17.jpg"},
];

const Sponsors: React.FC = () => (
  <Section id="sponsors" className="pt-10 rounded-lg">
    <h3 className="font-heading text-3xl mb-6">Our Partners in Motion</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
      {SPONSORS.map((s, i) => (
        <div
          key={i}
          className="flex items-center justify-center p-4 bg-white rounded shadow-sm"
        >
          <img src={s.logo} className="max-h-12 object-contain" />
        </div>
      ))}
    </div>
  </Section>
);

export default Sponsors;