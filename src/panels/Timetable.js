import React from 'react';
import {Group, Panel, PanelHeader, List, Cell, InfoRow} from '@vkontakte/vkui';
import '../main.css';
import TimeFormat from 'date-format';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const Home = props => (
    <Panel id={props.id} theme={props.state.theme}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <p className="time">{TimeFormat.asString('hh:mm:ss', props.state.time)}</p>
        <p className="date text-muted">{TimeFormat.asString('dd.MM.yyyy')}</p>

        <Group>
            <List>
                <Cell>
                    <InfoRow title="Текущий урок">
                        Физика (08:15 &ndash; 09:00)
                    </InfoRow>
                </Cell>
                <Cell>
                    <InfoRow title="Следующий урок">
                        Математика (08:15 &ndash; 09:00)
                    </InfoRow>
                </Cell>
            </List>
        </Group>

        <Div style={{display: 'flex'}}>
            <Button size="l" stretched style={{ marginRight: 8 }}>Расписание уроков</Button>
            <Button size="l" stretched level="secondary">Расписание звонков</Button>
        </Div>
    </Panel>
);

export default Home;
