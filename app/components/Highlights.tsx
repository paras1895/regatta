import Section from "./Section";

const Highlights: React.FC = () => (
  <Section id="highlights">
    <h3 className="font-heading text-3xl mb-6">Highlights & Aftermovie</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-black/5 rounded-lg aspect-video overflow-hidden">
        <img
          src="/images/highlight-poster.jpg"
          alt="aftermovie"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded p-4 shadow-sm">
          <h4 className="font-medium">This Year's Highlight</h4>
          <p className="text-sm text-gray-600">
            A quick look into 97th edition of regatta.
          </p>
        </div>
        {/* <div className="bg-white rounded p-4 shadow-sm flex">
          <div>
            <h4 className="font-medium">Past Editions Gallery</h4>
            <p className="text-sm text-gray-600">
              Browse photos and results from previous years.
            </p>
          </div>
          <div>
            <button>click</button>
          </div>
        </div> */}
      </div>
    </div>
  </Section>
);

export default Highlights;