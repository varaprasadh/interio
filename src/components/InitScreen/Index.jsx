import React, { useState } from "react";
import "./index.css";
import { Select } from "antd";
import countries from "./countries.json";
import languagesInfo from "./languages.json";
import { useNavigate } from "react-router-dom";


export default function Index() {
    const navigate = useNavigate();

    const [country, setCountry] = useState("US");
    const [language, setLanguage] = useState("EN");
    const [languages, setLanguages] = useState([]);

    const countryOptions = countries.map(country => ({
        value: country.label,
        label: country.label.split(".")[1]
    }));

    const onCountryChange = (country) => {
        const selectedCountry = countries.find(c => c.label === country);
        const langs = selectedCountry.languages.map(l => ({
            value: l.code,
            label: languagesInfo[l.code]
        }));
        if (langs.length>0) {
            setLanguage(langs[0].code)
        }

        console.log({
            country,
            selectedCountry,
            langs
        });
        setCountry(country);
        setLanguages(langs);
    }

    const onLanguageChange = lang => {
        setLanguage(lang);
    }

    const onStart = () => {
        navigate("/visualizer");
    }
    return (
        <div className="init-screen-wrapper">
            <div className="init-screen-background-wrapper">
                <div className="init-bg-img">
                    <img src="https://res.cloudinary.com/dfb9o4nze/image/upload/v1699966718/renders/kitchen_modern_1/bhins0csf70erl3ahuxh.png" alt="background cover" />
                </div>
                <div className="bg-overlay"></div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-top">
                        <div className="left-section">
                            <div className="logo-section">
                                <div className="logo">
                                    AG Stones
                                </div>
                                <div className="logo-sub">
                                    Online visualizer
                                </div>
                                <span></span>
                            </div>
                        </div>
                        <div className="init-details right-section">
                            <div className="country">
                                <div className="label">Country</div>
                                <Select
                                    defaultValue="US"
                                    style={{ width: '100%' }}
                                    onChange={onCountryChange}
                                    options={countryOptions}
                                />
                            </div>
                            <div className="language">
                                <div className="label">Language</div>
                                <Select
                                    defaultValue={language}
                                    style={{ width: '100%' }}
                                    onChange={onLanguageChange}
                                    options={languages}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="action-button">
                            <div className="btn" onClick={onStart}>
                                START
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}