"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';
import './globals.css';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const App: React.FC = () => {
    const [profile, setProfile] = useState<{ avatar_url: string } | null>(null);
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/danielvor')
            .then(response => response.json())
            .then(data => setProfile(data));

        fetch('https://api.github.com/users/danielvor/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
            <Navbar />
            <Header profile={profile} />
            <AboutMe />
            <Projects repos={repos} />
            <Form />
            <Footer />
        </div>
    );
};

export default App;
