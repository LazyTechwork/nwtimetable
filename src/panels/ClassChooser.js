import React from 'react';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';
import {AppConsumer} from "../App";

const ClassChooser = (id, clazz, changeClass) => (<Panel id={id} theme={"white"}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <PanelHeader>
            Выбор страны
        </PanelHeader>
        <Group>
            <List>
                <Cell
                    onClick={() => changeClass('10-1')}
                    asideContent={clazz === 'Россия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Россия
                </Cell>
                <Cell
                    onClick={() => changeClass('10-1')}
                    asideContent={clazz === 'Италия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Италия
                </Cell>
                <Cell
                    onClick={() => changeClass('10-1')}
                    asideContent={clazz === 'Англия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Англия
                </Cell>
            </List>
        </Group>
    </Panel>
);

export default ClassChooser;
