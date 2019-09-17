import React from 'react';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';

const ChooseGroup = props => (
    <Panel id={props.id} theme={props.state.theme}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <Group>
            <List>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '1'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '1' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    1
                </Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '2'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '2' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    2
                </Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '3'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '3' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    3
                </Cell>
            </List>
        </Group>
    </Panel>
);

export default ChooseGroup;
