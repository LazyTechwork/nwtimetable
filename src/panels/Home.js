import React from 'react';
import {FormLayout, Panel, PanelHeader, SelectMimicry} from '@vkontakte/vkui';
import logo_full from '../img/nwtt_full.svg';
import '../main.css';
import {AppConsumer} from "../App";

const Home = (id,go,clazz,state) => (
    <Panel id={id} theme={"white"}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <img src={logo_full} alt="Logo" className="logo"/>

        <FormLayout>
            <SelectMimicry
                top="Выберите свой класс"
                placeholder="Не выбран"
                onclick={()=>go('changeclass')}
            >{clazz}</SelectMimicry>
        </FormLayout>
    </Panel>
);

export default Home;
