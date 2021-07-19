import React, { Component }from 'react';

interface CountProps {
	text: string,
	handle_function: () => void
};

const CountButton = (props: CountProps) => {
	const {text, handle_function} = props;
	return (
		<button onClick={handle_function}>
          {text}
        </button>
	);
}

export default CountButton;