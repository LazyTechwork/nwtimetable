import React from 'react';
import {FormLayout, Panel, PanelHeader, SelectMimicry, Button, Div} from '@vkontakte/vkui';
import logo_full from '../img/nwtt_full.svg';
import '../main.css';

const Home = props => (
    <Panel id={props.id} theme={props.state.theme}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <img src={logo_full} alt="Logo" className="logo"/>
        <FormLayout>
            <SelectMimicry
                top="Выберите свой класс"
                placeholder="Не выбран"
                onClick={() => props.actions.go('ChooseGroup')}
            >{props.state.group}</SelectMimicry>

            <Div style={{display: 'flex'}}>
                <Button level={"primary"} size={"l"} stretched disabled={props.state.group === ''}
                        onClick={() => props.actions.go('Timetable')}>Продолжить</Button>
            </Div>
        </FormLayout>
    </Panel>
);

export default Home;
