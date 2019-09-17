import React from 'react';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ChooseGroup from './panels/ChooseGroup';
import Timetable from "./panels/Timetable";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'home',
            group: '',
            theme: 'light',
        }
    }

    componentDidMount() {
        /*connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({fetchedUser: e.detail.data});
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});*/
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date(),
        })
    }

    actions = {
        go: (panel) => {
            this.setState({activePanel: panel});
        },

        updateState: (state) => {
            this.setState(state);
        }
    };


    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Home id="home" state={this.state} actions={this.actions}/>
                <ChooseGroup id="ChooseGroup" state={this.state} actions={this.actions}/>
                <Timetable id="Timetable" state={this.state} actions={this.actions}/>
            </View>
        );
    }
}

export default App;
