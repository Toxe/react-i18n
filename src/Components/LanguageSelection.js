import React from 'react'
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";

const Div = styled.div`
    background-color: skyblue;
    padding: 5px;
`;

export default function LanguageSelection() {
    const { i18n } = useTranslation();

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <Div>
            <div>
                <button type="button" onClick={() => handleClick("en")}>English</button>
                <button type="button" onClick={() => handleClick("de")}>Deutsch</button>
            </div>
            <div><Trans i18nKey="current_language" values={{ lang: i18n.language }} components={{ strong: <strong /> }} /></div>
        </Div>
    )
}
