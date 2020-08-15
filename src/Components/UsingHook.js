import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { dice } from "../dice";

const Component = styled.div`
    background-color: bisque;
    padding: 5px;
`;

export default function UsingHook() {
    const { t } = useTranslation();
    const number = dice();

    return (
        <Component>
            <h3>[UsingHook] {t("headline")}</h3>
            <p>{t("paragraph")}</p>
            <p>{t("random", { number })}</p>
        </Component>
    );
}
