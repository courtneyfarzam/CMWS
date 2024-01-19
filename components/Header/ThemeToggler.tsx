import { useTheme } from 'next-themes';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
			<button
				aria-label='theme toggler'
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{/* FIND CUTE LIL SUN AND MOON ICONS  */}
				🔆
			</button>
		);
}

export default ThemeToggler;
