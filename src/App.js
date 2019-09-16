import React from 'react';
import connect from '@vkontakte/vk-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ClassChooser from './panels/ClassChooser';

const AppContext = React.createContext();
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'home',
            class: ''
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

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <AppProvider value={{
                    state: this.state, actions: {
                        updateState: (ns) => {
                            this.setState(ns);
                        },
                        go: (panel) => {
                            this.setState({activePanel: panel})
                        }
                    }
                }}>
                    <Home id="home"/>
                    <ClassChooser id="classchooser"/>
                </AppProvider>
            </View>
        );
    }
}

export default App;
