function toggleTheme(theme) {
	if (theme === 'dark') {
		document.body.classList.add('dark-content');
	}
	else if (theme === 'light') {
		document.body.classList.remove('dark-content');
	}
}

export function getTheme() {
	return translateTheme(getThemeMode());
}

export function getThemeMode() {
	const mode = localStorage.getItem('theme');
	return (mode ?? "2");
}

function translateTheme(mode) {
	if (mode === "2") {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		else {
			return 'light';
		}
	}
	else if (mode === "1") {
		return 'dark';
	}
	else if (mode === "0") {
		return 'light';
	}
	return null;
}

export function checkThemeMode() {
	const theme = getTheme();
	toggleTheme(theme);
}

export function setThemeMode(mode) {
	localStorage.setItem('theme', mode);
	toggleTheme(translateTheme(mode));
}