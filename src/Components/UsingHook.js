import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Component = styled.div`
    background-color: bisque;
    padding: 5px;
`;

export default function UsingHook() {
    const { t } = useTranslation();

    return (
        <Component>
            <h3>{t("headline")}</h3>
            <p>{t("paragraph")}</p>
        </Component>
    );
}
