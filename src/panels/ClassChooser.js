import React from 'react';
import PropTypes from 'prop-types';
import {Cell, Group, List, Panel, PanelHeader} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import '../main.css';

const ClassChooser = ({id, go}) => (
    <Panel id={id} theme={"white"}>
        <PanelHeader>NeoWave Timetable</PanelHeader>
        <PanelHeader>
            Выбор страны
        </PanelHeader>
        <Group>
            <List>
                <Cell
                    onClick={() => this.setState({class: 'Россия', activeView: 'home'})}
                    asideContent={this.state.class === 'Россия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Россия
                </Cell>
                <Cell
                    onClick={() => this.setState({class: 'Италия', activeView: 'home'})}
                    asideContent={this.state.class === 'Италия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Италия
                </Cell>
                <Cell
                    onClick={() => this.setState({class: 'Англия', activeView: 'home'})}
                    asideContent={this.state.class === 'Англия' ? <Icon24Done fill="var(--accent)"/> : null}
                >
                    Англия
                </Cell>
            </List>
        </Group>
    </Panel>
);

export default ClassChooser;
