import React from 'react';
import connect from '@vkontakte/vk-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ClassChooser from './panels/ClassChooser';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'home',
            clazz: ''
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
    }

    go = (panel) => {
        this.setState({activePanel: panel});
    };

    changeClass = (clazz) => {
        this.setState({clazz: clazz, activePanel: 'home'});
    };

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Home id="home" go={this.go} clazz={this.state.clazz} state={this.state}/>
                <ClassChooser id="classchooser" clazz={this.state.clazz} changeClass={this.changeClass}/>
            </View>
        );
    }
}

export default App;
