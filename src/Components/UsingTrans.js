import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { dice } from "../dice";
import MailCounter from "./MailCounter";

const Component = styled.div`
    background-color: lavender;
    padding: 5px;
`;

export default function UsingTrans() {
    useTranslation();
    const number = dice();
    const [mails, setMails] = useState(2);

    return (
        <Component>
            <h3>[UsingTrans] <Trans>headline</Trans></h3>
            <div><Trans>paragraph</Trans></div>
            <div><Trans i18nKey="random">{{ number }}</Trans></div>
            <div><Trans i18nKey="random" values={{ number }} /></div>
            <div><Trans i18nKey="you_got_mail" count={mails}>{{ mails }}</Trans> <MailCounter counter={mails} setCounter={setMails} /></div>
        </Component>
    );
}
