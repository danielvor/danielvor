import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
            <div className="justify-center w-full text-center lg:p-10 max-auto">
                <div className="justify-center w-full mx-auto">
                    <section className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-42 sm:leading-loose text-lg font-normal tracking-tighter">
                        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
                        <p className="text-lg">
                            Hi, I&apos;m Duno, a passionate developer with experience in web development and design. I love creating
                            beautiful and functional web applications.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;