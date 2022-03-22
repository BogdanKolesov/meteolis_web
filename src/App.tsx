import React from 'react';
import Button from './components/atoms/Button';
import { GlobalTheme } from './themes';

function App() {
	return (
		<>
			<GlobalTheme />
			<Button label='Привет!' />
		</>
	);
}

export default App;
