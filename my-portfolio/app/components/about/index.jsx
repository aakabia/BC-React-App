import React from "react";
import ItemLayout from "./ItemLayout";




const AboutDetails = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Above is how we section a grid format container */}
        {/* below use col-span-[value] and row-span-[value] to divide your grid into parts  */}
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className=" text-white text-xl md:text-2xl text-left w-full capitalize ">
            Galactic Briefing
          </h2>
          <p className="font-light text-white text-xs sm:text-sm md:text-base">
            As a space traveler navigating the vast galaxy of technology, my
            journey has been nothing short of exhilarating. I launched from the
            training grounds of Vanderbilt University, where a rigorous coding
            boot camp equipped me with the tools to traverse both the front-end
            and back-end dimensions. Armed with JavaScript and Python as my
            universal translators, I’ve charted a course through the dynamic
            worlds of web development, Data Analytics and machine learning.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base"> years of experience </sub>
            {/* sub element is subscript text that appears slightly below the baseline of the surrounding text. */}
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full xs:col-span-8 sm:col-span-7 md:col-span-4  !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aakabia&hide_progress=false&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=" Aziz most used languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* github stats api for this image src */}

        <ItemLayout className={" col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=aakabia&show_icons=true&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt=" Aziz git hub stats"
            loading="lazy"
          />
        </ItemLayout>
        {/* github stats api for this image src */}

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=git,github,css,html,js,nodejs,nextjs,jquery,aws,python,mongodb,docker,postgres,react,regex,threejs,vite,webpack,vscode,vue,ts,tailwind,svg,sklearn,pycharm,npm,jest,java,ai,graphql,gitlab,angular,express,firebase,babel,linux"
            alt="list of dev icons "
            loading="lazy"
          />
        </ItemLayout>

        {/* skill icons api for this image src */}

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://nirzak-streak-stats.vercel.app?user=aakabia&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt=" Aziz GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        {/* github streak stats */}

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=aakabia&repo=Scraper&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt=" Aziz git hub stats"
            loading="lazy"
          />
        </ItemLayout>

        {/*one git hub repo, look up Github extra pins in github stats api repo. */}
      </div>
    </section>
  );
};

export default AboutDetails;
