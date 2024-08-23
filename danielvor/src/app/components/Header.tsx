import React from 'react';

interface Profile {
  avatar_url: string;
}

const Header: React.FC<{ profile: Profile | null }> = ({ profile }) => {
  return (
    <section >
      <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">

            <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
              <img
                className='w-32 h-32 rounded-full border border-[#E8E3F4]'
                src={profile?.avatar_url}
              />
            </div>


            <p className="mt-4 sm:px-32 text-[#10172A] sm:text-xl text-sm font-semibold tracking-tighter">
              by @DanielVOR
            </p>

            <p className="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
              Student of <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#15078dcc]">BackEnd</span> Developement.
            </p>

            <p className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-42  sm:leading-loose text-lg font-normal tracking-tighter">
              I'm a <span className="font-semibold">fullstack developer</span>, 9 - 9 <span className="font-semibold">remote</span> worker, community builder, and a <span className="font-semibold">solo</span> traveller. I love to build <span className="font-semibold">apps</span> that solve real life problems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Header;
