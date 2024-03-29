import React, { useState, useEffect } from 'react';
import { scrollWith } from './control/scroll';
import { mostUsedLanguage } from './http/github';
import {
	Chart,
	List,
	Footer,
	Project,
} from './widgets';
import { useTranslation } from 'react-i18next';
import { selectNavi } from './widgets/NavigationBlock';

function ReposScreen() {
	const { t, i18n } = useTranslation();
	let [lists, setLists] = useState(false);
	useEffect(() => {
		selectNavi('project');
		async function fetchGithubData() {
			const res = await mostUsedLanguage();
			setLists(res);
		}
		fetchGithubData();
		const external_links = document.querySelectorAll('a[href^=http]');
		for (const link of external_links) {
			link.setAttribute('target', '_blank');
		}
		window.scrollTo(0, 0);
	}, [])
	scrollWith([]);
	return (
		<div>
			<div className="repo-container">
				{ lists && <Chart data={lists} />}
				{ lists && <List data={lists} />}
				<div className="cell_container">
					<Project name="remisiki-home" description={t("proj0")} href="https://github.com/remisiki/remisiki-home" thumb="" lang="JavaScript" />
					<Project name="kettyan-bot" description={t("proj1")} href="https://remisiki.github.io/kettyan-bot/" thumb="ket" lang="Python" />
					<Project name="k-gatya" description={t("proj4")} href="https://remisiki.github.io/k-gatya/" thumb="keg" lang="JavaScript" />
					<Project name="remiqq" description={t("proj5")} href="https://github.com/remisiki/remiqq" thumb="electron" lang="JavaScript" />
					<Project name="lan-share" description={t("proj6")} href="https://github.com/remisiki/lan-share" thumb="play" lang="Scala" />
					<Project name="umjicanvas" description={t("proj2")} href="https://github.com/remisiki/umjicanvas" thumb="umjicanvas" lang="Java" />
					<Project name="GMM-Demux" description={t("proj3")} href="https://gmm-demux.readthedocs.io/en/latest/" thumb="tsne" lang="Python" />
					<Project name="ECE4700J" description={t("proj7")} href="https://github.com/remisiki/ECE4700J" thumb="gpu" lang="SystemVerilog" />
					<Project name="VE475" description={t("proj8")} href="https://github.com/remisiki/VE475" thumb="abe" lang="C" />
					<Project name="ECE4880J" description={t("proj9")} href="https://github.com/remisiki/ECE4880J" thumb="graph" lang="Python" />
					<Project name="ECE4710J" description={t("proj10")} href="https://github.com/remisiki/ECE4710J" thumb="svm" lang="Python" />
					<Project name="VE370" description={t("proj11")} href="https://github.com/remisiki/VE370" thumb="cpu" lang="Verilog" />
					<Project name="ここまでだ。。。" description="もっとがんばります！" href="" thumb="" lang="C++" />
				</div>
				<div className="gap"></div>
			</div>
			<Footer />
		</div>
	);
}

export default ReposScreen;