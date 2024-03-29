import React from 'react';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';

const ChooseGroup = props => (
    <Panel id={props.id} theme={props.state.theme}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <Group>
            <List>
                {Array.apply(0, Array(5)).map(function (x, i) {
                    return <Cell
                        onClick={() => {
                            props.actions.setGroup({group: (i + 1)});
                        }}
                        asideContent={props.state.group === props.state.group + (i + 1) ?
                            <Icon24Done fill="var(--accent)"/> : null}
                    >{props.state.group + (i + 1)}</Cell>;
                })}
            </List>
        </Group>
    </Panel>
);

export default ChooseGroup;
