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
                        props.actions.updateState({group: '10-1'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '10-1' ? <Icon24Done fill="var(--accent)"/> : null}
                >10-1</Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '10-2'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '10-2' ? <Icon24Done fill="var(--accent)"/> : null}
                >10-2</Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '10-3'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '10-3' ? <Icon24Done fill="var(--accent)"/> : null}
                >10-3</Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '10-4'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '10-4' ? <Icon24Done fill="var(--accent)"/> : null}
                >10-4</Cell>
                <Cell
                    onClick={() => {
                        props.actions.updateState({group: '10-5'});
                        props.actions.go('home')
                    }}
                    asideContent={props.state.group === '10-5' ? <Icon24Done fill="var(--accent)"/> : null}
                >10-5</Cell>
            </List>
        </Group>
    </Panel>
);

export default ChooseGroup;
