'use client';

import ProgressBar from '@/app/components/progressBar';
import Question from '@/app/components/question';
import BtnAnswer from '@/app/components/btnAnswer';
import { use, useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

async function getData() {
	const res = await fetch('http://localhost:3000/api/questions');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const data = getData();

export default function Start() {
	const router = useRouter();
	const { questions } = use(data);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [nextBtn, setNextBtn] = useState('Next');
	const [score, setScore] = useState(0);
	const [indoor, setIndoor] = useState(0);
	const [outdoor, setOutdoor] = useState(0);
	const [answer, setAnswer] = useState();
	const [progress, setProgress] = useState(0);

	const handleNextQuestion = () => {
		if (progress < 100) setProgress(progress + 10);

		if (questionIndex < questions.length - 1) {
			setQuestionIndex(questionIndex + 1);
		}
		if (questionIndex === questions.length - 1) {
			setNextBtn('Finish');
			console.log('pertanyaan habis');
		}

		// handle result
		if (nextBtn === 'Finish') {
			if (outdoor > indoor) {
				router.push('/result/outdoor');
			} else if (indoor > outdoor) {
				router.push('/result/indoor');
			} else if (indoor === outdoor) {
				router.push('/result/draw');
			}
		}

		// handle outdoor scores
		if (questions[questionIndex].isOutdoor && answer === 'Iya') {
			if (score < 100) {
				setOutdoor(outdoor + 10);
			}
		} else if (questions[questionIndex].isOutdoor && answer === 'Tidak') {
			if (score < 100) {
				setOutdoor(outdoor + 0);
				setIndoor(outdoor + 10);
			}
		}

		// handle indoor scores
		if (!questions[questionIndex].isOutdoor && answer === 'Iya') {
			if (score < 100) {
				setIndoor(indoor + 10);
			}
		} else if (!questions[questionIndex].isOutdoor && answer === 'Tidak') {
			if (score < 100) {
				setIndoor(indoor + 0);
				setOutdoor(outdoor + 10);
			}
		}
	};

	const handleAnswer = (e) => {
		setAnswer(e.target.innerHTML);
	};

	useEffect(() => {
		setScore(indoor + outdoor);
		console.log(questions[questionIndex].isOutdoor);
		console.log(answer);
		console.log('outdoor score: ' + outdoor);
		console.log('indoor score: ' + indoor);
		console.log('total score: ' + score);
	});

	return (
		<div className="mt-8 flex flex-col justify-center items-center">
			<ProgressBar progress={progress + '%'} />
			<Question name={questions[questionIndex].name} />
			<div className="flex flex-col mt-16 gap-8 w-full">
				<BtnAnswer
					onClick={(e) => handleAnswer(e)}
					name={'Iya'}
					disabled={nextBtn === 'Finish' ? true : false}
				/>
				<BtnAnswer
					onClick={(e) => handleAnswer(e)}
					name={'Tidak'}
					disabled={nextBtn === 'Finish' ? true : false}
				/>
			</div>
			<div className="flex justify-end w-full pb-16 md:pb-0">
				<button
					onClick={handleNextQuestion}
					type="button"
					className="w-full md:w-auto mt-20 py-3 px-12 inline-flex justify-center items-center gap-2 rounded-xl border border-transparent font-semibold bg-[#46458C] text-white hover:bg-[#46458C] focus:outline-none focus:ring-2 focus:ring-[#46458C] focus:ring-offset-2 transition-all text-xl"
				>
					{nextBtn}
				</button>
			</div>
		</div>
	);
}
