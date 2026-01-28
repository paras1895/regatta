"use client";

import React from "react";

interface SubGroup {
  title: string;
  logos: { logo: string }[];
}

interface SponsorGroup {
  title?: string;
  logos?: { logo: string }[];
  type?: "dual";
  groups?: SubGroup[];
}

const SPONSOR_GROUPS: SponsorGroup[] = [
  {
    title: "Title Sponsor",
    logos: [{ logo: "/sponsors/img1.jpg" }],
  },
  {
    title: "Chief Sponsor",
    logos: [{ logo: "/sponsors/img2.jpg" }],
  },
  {
    type: "dual",
    groups: [
      {
        title: "Foundation Partner",
        logos: [{ logo: "/sponsors/img3.jpg" }],
      },
      {
        title: "Banking Partner",
        logos: [{ logo: "/sponsors/img4.jpg" }],
      },
    ],
  },
  {
    type: "dual",
    groups: [
      {
        title: "Stability Partner",
        logos: [{ logo: "/sponsors/img5.jpg" }],
      },
      {
        title: "Gifting Partner",
        logos: [{ logo: "/sponsors/img6.jpg" }],
      },
    ],
  },
  {
    type: "dual",
    groups: [
      {
        title: "Development Partner",
        logos: [{ logo: "/sponsors/img7.jpg" }],
      },
      {
        title: "Power Partner",
        logos: [{ logo: "/sponsors/img8.jpg" }],
      },
    ],
  },
  {
    type: "dual",
    groups: [
      {
        title: "Strategic Partner",
        logos: [{ logo: "/sponsors/img9.jpg" }],
      },
      {
        title: "Digital Excellence Partner",
        logos: [{ logo: "/sponsors/img10.jpg" }],
      },
    ],
  },
  {
    type: "dual",
    groups: [
      {
        title: "Education Partner",
        logos: [{ logo: "/sponsors/img11.jpg" }],
      },
      {
        title: "Geo Excellence Partner",
        logos: [{ logo: "/sponsors/img12.jpg" }],
      },
    ],
  },
  {
    title: "Snacks Sponsor",
    logos: [{ logo: "/sponsors/img13.jpg" }],
  },
  {
    title: "Media Partners",
    logos: [
      { logo: "/sponsors/img14.jpg" },
      { logo: "/sponsors/img15.jpg" },
      { logo: "/sponsors/img16.jpg" },
      { logo: "/sponsors/img17.jpg" },
      { logo: "/sponsors/img18.jpg" },
      { logo: "/sponsors/img19.jpg" },
      { logo: "/sponsors/img20.jpg" },
      { logo: "/sponsors/img21.jpg" },
      { logo: "/sponsors/img22.jpg" },
      { logo: "/sponsors/img23.jpg" },
      { logo: "/sponsors/img24.jpg" },
    ],
  },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 font-['Public_Sans'] bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">
            Collaborators & Support
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-none">
            97th Regatta Sponsors
          </h2>
          <div className="w-32 h-[2px] bg-stone-800 mx-auto"></div>
        </header>

        <div className="space-y-24">
          {SPONSOR_GROUPS.map((group, index) => {
            if (group.type === "dual" && group.groups) {
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                  {group.groups.map((subGroup, subIndex) => (
                    <div key={subIndex} className="flex flex-col items-center">
                      <div className="flex items-center gap-6 mb-10 w-full">
                        <div className="h-[1px] flex-grow bg-stone-600"></div>
                        <h3 className="text-[15px] font-bold uppercase tracking-[0.3em] text-stone-500 whitespace-nowrap">
                          {subGroup.title}
                        </h3>
                        <div className="h-[1px] flex-grow bg-stone-600"></div>
                      </div>

                      <div className="flex justify-center gap-10">
                        {subGroup.logos.map((sponsor, sIndex) => (
                          <div
                            key={sIndex}
                            className="w-40 h-24 p-4 flex items-center justify-center bg-white border border-stone-200 shadow-sm hover:shadow-md transition"
                          >
                            <img
                              src={sponsor.logo}
                              alt={`${subGroup.title} Logo`}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            return (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-6 mb-10 w-full max-w-4xl">
                  <div className="h-[1px] flex-grow bg-stone-600"></div>
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.3em] text-stone-500 whitespace-nowrap">
                    {group.title}
                  </h3>
                  <div className="h-[1px] flex-grow bg-stone-600"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {group.logos?.map((sponsor, sIndex) => (
                    <div
                      key={sIndex}
                      className="w-32 h-20 md:w-40 md:h-24 p-4 flex items-center justify-center bg-white border border-stone-200 shadow-sm hover:shadow-md transition"
                    >
                      <img
                        src={sponsor.logo}
                        alt="Sponsor Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
