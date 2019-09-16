import React from 'react';
import {FormLayout, Panel, PanelHeader, SelectMimicry} from '@vkontakte/vkui';
import logo_full from '../img/nwtt_full.svg';
import '../main.css';
import {AppConsumer} from "../App";

const Home = ({id}) => (
    <AppConsumer>
        {(state, actions) => (
            <Panel id={id} theme={"white"}>
                <PanelHeader>NeoWave Timetable</PanelHeader>
                <img src={logo_full} alt="Logo" className="logo"/>

                <FormLayout>
                    <SelectMimicry
                        top="Выберите свой класс"
                        placeholder="Не выбран"
                        onclick={actions.go('classchooser')}
                    >{state.class}</SelectMimicry>
                </FormLayout>
            </Panel>
        )}
    </AppConsumer>
);

export default Home;
