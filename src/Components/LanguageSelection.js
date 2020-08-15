import React from 'react'
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Div = styled.div`
    background-color: skyblue;
    padding: 5px;
`;

export default function LanguageSelection() {
    const { t, i18n } = useTranslation();

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <Div>
            <div>
                <button type="button" onClick={() => handleClick("en")}>English</button>
                <button type="button" onClick={() => handleClick("de")}>Deutsch</button>
            </div>
            <div>{t("current_language", { lang: i18n.language })}</div>
        </Div>
    )
}
