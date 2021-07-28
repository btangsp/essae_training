import React, { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { Audio } from '../components'
import { AudioRadioButtonGroup } from '../components'
import { Shuffle } from '../components'
import { updateChoice } from '../components'

import '../css/user-studies.css'

function clickHandler(index, setIndex, UpdateAudio, setRefEnded, setFirstEnded, setSecondEnded) {
	setIndex(index + 1);
	if (index > 0) {
		UpdateAudio();
		updateChoice(-1);
		setRefEnded(false);
		setFirstEnded(false);
		setSecondEnded(false);
	}
}

function Instruction_Page(audioRef_1, index, setIndex, UpdateAudio) {
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown>
					{`# **Congratulations!**
					\nYou have passed the qualifications for our study\u2014making you 
					eligible for additional compensation should you finish the audio evaluation.
					\n### **Instructions**
					\nIn this experiment, you will do a series of two-way 
					comparisons. In each comparison, you will first be presented a reference recording. 
					You will then be presented two time-stretched versions of the reference that either 
					increase or decrease its duration/speed. After listening to all three recordings, 
					you will be asked to choose the higher-quality (more natural, fewer audio artifacts) 
					time-stretched audio.
					\n**NOTE:** The time-stretched recordings will not have the 
					same duration as the original audio.
					\nOn the next page, you will receive an example task.
					`}
				</ReactMarkdown>
			</div>
			<div className='section col-2 align-right'>
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, UpdateAudio)}>Next</a>
			</div>
		</div>
	);
}

function Task_Page_Conditional(taskInstruction, files, choice, setChoice, audioRef, refEnded, audioEnded, setAudioEnded) {
	return (
		<div className="section col-all">
			{taskInstruction}
			<AudioRadioButtonGroup name={'test-abx'} 
				files={files} 
				choice={choice}
				setChoice={setChoice}
				audioRefs={audioRef}
				refEnded={refEnded}
				audioEnded={audioEnded}
				setAudioEnded={setAudioEnded}
				/>
		</div>
	);
}


function Task_Page(audioRef_1, audioRef_2, audioRef_3, index, setIndex, choice, setChoice, UpdateAudio, refEnded, setRefEnded, firstEnded, setFirstEnded, secondEnded, setSecondEnded) {	

	let refInstruction = (
		// <br></br>
		<ReactMarkdown>{`**Sample Question**`}</ReactMarkdown>
	);

	if (!refEnded) {
		refInstruction = (
			<ReactMarkdown>{`Please listen to the following reference audio in its entirety.`}</ReactMarkdown>
		);
	}

	const refSection = (
		<div className='section col-all'>
			{refInstruction}
			<Audio name={'test-abx'} 
				file={'2sets/test2/original/p232_001_mic2.wav'} 
				audioRef={audioRef_1} 
				setAudioEnded={setRefEnded}
				/>
		</div>
	);

	let taskInstruction = null;
	let task_pt1 = null;
	const files = ['2sets/test2/phase_vocoder_model/p232_001_mic2_0.5_noisy.wav','2sets/test2/wsola_model/p232_001_mic2_0.5_enhanced.wav'];

	if (secondEnded) {
		taskInstruction = (
			<ReactMarkdown>{`Please select the higher-quality time-stretched audio, which is the option on the bottom.`}</ReactMarkdown>
		);
		task_pt1 = Task_Page_Conditional(taskInstruction, files, choice, setChoice, 
			[audioRef_2, audioRef_3], refEnded, secondEnded, setSecondEnded);
	}
	else if (firstEnded) {
		taskInstruction = (
			<ReactMarkdown>{`Please listen to the example of a **well** time-stretched audio in its entirety.`}</ReactMarkdown>
		);
		task_pt1 = Task_Page_Conditional(taskInstruction, files, choice, setChoice, 
			[audioRef_2, audioRef_3], refEnded, secondEnded, setSecondEnded);
	}
	else if (refEnded) {
		taskInstruction = (
			<ReactMarkdown>{`Please listen to the example of a **poorly** time-stretched audio in its entirety.`}</ReactMarkdown>
		);
		task_pt1 = Task_Page_Conditional(taskInstruction, [files[0]], choice, setChoice, 
			[audioRef_2], refEnded, firstEnded, setFirstEnded);
	}

	let next_button = null;
	if (choice !== -1) {
		next_button = (
			<div className='section col-2 align-right'>
				<a href="https://btangsp.github.io/essae_rating/" className="button">Next</a>
			</div>
		);
	}

	return (
		<div className="container grid">
			{refSection}
			{task_pt1}
			{next_button}
		</div>
	);
}

function PostTest_Page(index, setIndex, textInput, setTextInput) {
	return (
		<div className="container grid">
			<ReactMarkdown>{`#### **Post-Evaluation Survey**\nPlease describe any issues 
				in your listening environment that might have impeded your ability to clearly 
				hear details in the audio. \n\n**NOTE:** Your answer will not affect your 
				compensation.`}</ReactMarkdown>
			<textarea rows="4" onChange={e => setTextInput(e.target.value)} placeholder="My neighbor started moving their lawn."></textarea>
			<div className='section col-2 align-right'>
				<a href="#" className="button" onClick={() => checkTextInput(index, setIndex, textInput)}>Submit</a>
			</div>
		</div>
	);
}

function Cond_stimuli(index, setIndex, audioRef_1, audioRef_2, audioRef_3, UpdateAudio) {
	const [choice, setChoice] = useState(-1);
	const [textInput, setTextInput] = useState('');
	const [refEnded, setRefEnded] = useState(false);
	const [firstEnded, setFirstEnded] = useState(false);
	const [secondEnded, setSecondEnded] = useState(false);

	// Instruction Page
	if (index === 0) {
		return Instruction_Page(audioRef_1, index, setIndex, UpdateAudio);
	} 
	// Example Page
	else if (index === 1) {
		return Task_Page(audioRef_1, audioRef_2, audioRef_3, index, setIndex, 
			choice, setChoice, UpdateAudio, refEnded, setRefEnded, 
			firstEnded, setFirstEnded, secondEnded, setSecondEnded);
	}
	else {
		return (
			<div className="container">
				<ReactMarkdown>{`#### Thank you for your participation.`}</ReactMarkdown>
			</div>
		);
	}
}

export default function ABX() {	

	const [index, setIndex] = useState(0);

	const audioRef_1 = useRef();
	const audioRef_2 = useRef();
	const audioRef_3 = useRef();

	const UpdateAudio = (source) => {
	    if(audioRef_1.current) {
	        audioRef_1.current.pause();
	        audioRef_1.current.load();
	    } 
	    if (audioRef_2.current) {
	    	audioRef_2.current.pause();
	    	audioRef_2.current.load();
	    } 
	    if (audioRef_3.current) {
	    	audioRef_3.current.pause();
	    	audioRef_3.current.load();
	    }
	}

	return (
		<div>
			{Cond_stimuli(index, setIndex, audioRef_1, audioRef_2, audioRef_3, UpdateAudio)}
		</div>
	);
}