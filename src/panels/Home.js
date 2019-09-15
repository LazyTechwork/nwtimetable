import React from 'react';
import PropTypes from 'prop-types';
import { Panel, FormLayout, SelectMimicry, PanelHeader } from '@vkontakte/vkui';
import logo_full from '../img/nwtt_full.svg';
import '../main.css';

const Home = ({ id, go, state }) => (
	<Panel id={id} theme={"white"}>
		<PanelHeader>NeoWave Timetable</PanelHeader>
		<img src={logo_full} alt="Logo" className="logo"/>

		<FormLayout>
			<SelectMimicry
				top="Выберите свой класс"
				placeholder="Не выбран"
				onClick={() => go()}
				data-to={"classchooser"}
			>{state.class}</SelectMimicry>
		</FormLayout>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
