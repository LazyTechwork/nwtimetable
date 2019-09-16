import React from 'react';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';
import {AppConsumer} from "../App";

const ClassChooser = ({id}) => (
    <AppConsumer>
        {(context, actions) => {
            return (<Panel id={id} theme={"white"}>
                <PanelHeader>NeoWave Timetable</PanelHeader>
                <PanelHeader>
                    Выбор страны
                </PanelHeader>
                <Group>
                    <List>
                        <Cell
                            onClick={() => actions.updateState({class: 'Россия', activePanel: 'home'})}
                            asideContent={context.class === 'Россия' ? <Icon24Done fill="var(--accent)"/> : null}
                        >
                            Россия
                        </Cell>
                        <Cell
                            onClick={() => actions.updateState({class: 'Италия', activePanel: 'home'})}
                            asideContent={context.class === 'Италия' ? <Icon24Done fill="var(--accent)"/> : null}
                        >
                            Италия
                        </Cell>
                        <Cell
                            onClick={() => actions.updateState({class: 'Англия', activePanel: 'home'})}
                            asideContent={context.class === 'Англия' ? <Icon24Done fill="var(--accent)"/> : null}
                        >
                            Англия
                        </Cell>
                    </List>
                </Group>
            </Panel>);
        }}
    </AppConsumer>
);

export default ClassChooser;
