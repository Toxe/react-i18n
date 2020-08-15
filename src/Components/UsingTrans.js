import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";

const Component = styled.div`
    background-color: lavender;
    padding: 5px;
`;

export default function UsingTrans() {
    const { t } = useTranslation();

    return (
        <Component>
            <h3><Trans>headline</Trans></h3>
            <p><Trans>paragraph</Trans></p>
            <p><Trans t={t}>paragraph2</Trans></p>
        </Component>
    );
}
