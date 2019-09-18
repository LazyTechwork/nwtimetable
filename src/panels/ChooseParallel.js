import React from 'react';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';

const ChooseGroup = props => (
    <Panel id={props.id} theme={props.state.theme}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <Group title="Выберите параллель">
            <List>
                {Array.apply(0, Array(6)).map(function (x, i) {
                    return <Cell
                        onClick={() => {
                            props.actions.setParallel({group: (i+6) + '-'});
                        }}
                        asideContent={props.state.group === (i+6) + '-' ?
                            <Icon24Done fill="var(--accent)"/> : null}
                    >{(i+6)}</Cell>;
                })}
            </List>
        </Group>
    </Panel>
);

export default ChooseGroup;
