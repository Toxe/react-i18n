import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { dice } from "../dice";

const Component = styled.div`
    background-color: lavender;
    padding: 5px;
`;

export default function UsingTrans() {
    useTranslation();
    const number = dice();

    return (
        <Component>
            <h3>[UsingTrans] <Trans>headline</Trans></h3>
            <p><Trans>paragraph</Trans></p>
            <p><Trans i18nKey="random">{{ number }}</Trans></p>
        </Component>
    );
}
