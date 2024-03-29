import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import {
	TwitterTimeLine,
	SideBar,
	Footer
} from './widgets';
import { getTheme } from './control/dark';
import { selectNavi } from './widgets/NavigationBlock';

function ToDoList({status}) {
	let list = [];
	const { t, i18n } = useTranslation();
	for (let i = 0; i < status.length; i ++) {
		list.push(
			<li key={`todo${i}`}>
				<div className={`status ${status[i]}`}>{t(status[i])}</div>
				{t(`todo${i}`)}
			</li>
		);
	}
	return (
		<>
			{list}
		</>
	);
}

function HomeScreen() {
	const avatar = require("../assets/avatar.jpg");
	const sections = ["Welcome", "Accounts", "ToDo-List"];
	const todo_status = ["progress", "pend", "complete", "complete", "pend", "pend", "pend", "complete", "complete", "stop", "complete", "complete", "pend", "pend", "stop", "stop", "complete", "progress"];
	const { t, i18n } = useTranslation();
	useEffect(() => {
		selectNavi('home');
		const external_links = document.querySelectorAll('a[href^=http]');
		for (const link of external_links) {
			link.setAttribute('target', '_blank');
		}
	}, []);
	return (
		<div>
			<TwitterTimeLine name="remisiki" theme={getTheme} />

			<div id="content" className="wrapper doc">
				<article id={sections[0]} className="float">
					<img src={avatar} alt="Furan" id="avatar" />
					<h1>{t("hms0t")}</h1>
					<p>{t("hms0p0p0")}<a href="https://ja.reactjs.org/">React.js</a>{t("hms0p0p1")}</p>
					<p>{t("hms0p1")}</p>
					<p>{t("hms0p3p0")}<a href="https://www.pixiv.net/artworks/28137362">{t("hms0p3p1")}</a>{t("hms0p3p2")}</p>
				</article>
				<article id={sections[1]} className="float">
					<h1>{t("hms1t")}</h1>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-twitter" />
						&ensp;{t("hms1p0")}&ensp;
						<a href="https://twitter.com/remisiki">@remisiki</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-github" />
						&ensp;{t("hms1p1")}&ensp;
						<a href="https://github.com/remisiki">Remisiki</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-telegram" />
						&ensp;{t("hms1p2")}&ensp;
						<a href="https://t.me/remisiki">@remisiki</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-twitter" />
						&ensp;{t("hms1p3")}&ensp;
						<a href="https://twitter.com/remisiki_stg">@remisiki_stg</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-discord" />
						&ensp;{t("hms1p4")}&ensp;
						<a href="https://discordapp.com/users/422313209937002507">むけい#6131</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-steam" />
						&ensp;{t("hms1p5")}&ensp;
						<a href="https://steamcommunity.com/profiles/76561198843774402">むけい</a>
					</p>
					<p>
						<FontAwesomeIcon icon="fa-brands fa-youtube" />
						&ensp;{t("hms1p6")}&ensp;
						<a href="https://www.youtube.com/channel/UC4mJDWoAdQBa-FUx_FXoiQw">れみしき</a>
					</p>
					<p>
						<FontAwesomeIcon icon={faEnvelope} />
						&ensp;{t("hms1p7")}&ensp;
						<a href="mailto:yangyiwen.sigo@hotmail.com">Hotmail</a>
					</p>
					<p>{t("hms1p8p0")}<span className="yellow-marker-thin">{t("hms1p8p1")}</span>{t("hms1p8p2")}</p>
				</article>
				<article id={sections[2]} className="float">
					<h1>
						{t("todo")}
					</h1>
					<p>
						{t("todot")}
					</p>
					<ul>
						<ToDoList status={todo_status} />
					</ul>
				</article>
				<SideBar sections={sections} path="home" />
				<div className="gap"></div>
				
			</div>
			<Footer />

		</div>
	);
}

export default HomeScreen;
