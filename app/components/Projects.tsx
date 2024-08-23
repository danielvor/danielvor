import React from 'react';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const Projects: React.FC<{ repos: Repo[] }> = ({ repos }) => {
    return (
        <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
            <div className="justify-center w-full text-center lg:p-10 max-auto">
        <div className="justify-center w-full mx-auto">
        <section className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-42  sm:leading-loose text-lg font-normal tracking-tighter">
            <h2 className="text-3xl font-semibold mb-20">Projects</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id} className="text-2xl font-semibold mb-2">
                        <h3>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        </h3>
                        <p className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-42  sm:leading-loose text-lg font-normal tracking-tighter">{repo.description}</p>
                    </li>
                ))}
            </ul>
        </section>
        </div>
        </div>
        </div>
    );
};

export default Projects;
