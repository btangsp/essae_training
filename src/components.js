import React, { useState, useRef } from 'react'

import './css/components.css'


/*******************************************************************************
Components
*******************************************************************************/

let updateChoice;

// export function Shuffle(arr) {
// 	var j, x, i;
//     for (i = arr.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//     }
//     return arr;
// }

export function Shuffle(arr, n) {
	if (n === undefined) {
		n = arr.length;
	}
	else if (n <= 0) {
		n = arr.length;
		console.warn('Requested samples is not greater than 0. Using full array.');
	}
	else if (n > arr.length) {
		n = arr.length;
		console.warn('Requested more samples than there are available. Using full array.');
	}
	var nInd = n;

	var currIndex = arr.length, tempValue, randIndex;
	// While there remain elements to shuffle...
	while (0 !== currIndex) {
		// Pick a remaining element...
		randIndex = Math.floor(Math.random() * currIndex);
		currIndex -= 1;

		// And swap it with the current element.
		tempValue = arr[currIndex];
		arr[currIndex] = arr[randIndex];
		arr[randIndex] = tempValue;
	}
	return arr.slice(0, nInd);
}

//add onEnded to audio element
export function Audio({ name, file, audioRef, setAudioEnded }) {
	return (
		<audio 
			className={`audio-single`} 
			controls ref={audioRef} 
			controlsList="nodownload" 
			onEnded={() => {if (typeof(setAudioEnded) !== "undefined") {setAudioEnded(true);}}}>
			<source src={`audio/${file}`} type='audio/wav'/>
		</audio>
	);
};

export function AudioRadioButton({ name, file, index, choice, setChoice, audioRef, audioEnded, setAudioEnded }) {
	let radioButton = <div className="col-1"></div>;
	if (audioEnded) {
		radioButton = (
				<div className={`check col-1 ${index === choice ? "selected" : ""}`} onClick={() => setChoice(index)}>
					<div className="inside"></div>
				</div>
			);
	}
	return (
		<li className="grid">
			<input type="radio" id={name} value="A" name={name}/>
			{radioButton}
			<label htmlFor={name} className="col-3"><Audio name={name} file={file} audioRef={audioRef} setAudioEnded={setAudioEnded}/></label>
		</li>
	);  
};

export function AudioRadioButtonGroup({ name, files, choice, setChoice, audioRefs, audioEnded, setAudioEnded }) {
	updateChoice = setChoice;
	const audioButton = files.map((item, key) => 
		<AudioRadioButton 
			name={name} 
			file={item} 
			key={key} 
			index={key} 
			choice={choice} 
			setChoice={setChoice}
			audioRef={audioRefs[key]}
			audioEnded={audioEnded}
			setAudioEnded={setAudioEnded}
		/>
	);
	return (
		<ul className="AudioRadioButtonGroup">
			{audioButton}
		</ul>
	);
};

export {updateChoice};