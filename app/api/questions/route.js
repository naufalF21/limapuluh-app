import { getQuestions } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
	try {
		const questions = getQuestions();
		return NextResponse.json({ message: 'OK', questions }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	}
};
