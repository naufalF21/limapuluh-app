'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Result() {
	const [draw, setDraw] = useState(false);
	const searchParams = useSearchParams();

	useEffect(() => {
		if (searchParams.get('data') === 'Draw') {
			setDraw(true);
		}
	}, []);

	const isDraw = () => {
		return <Link href={'/start'}>Score Draw, Silahkan Mulai lagi</Link>;
	};

	const notDraw = () => {
		return (
			<div>
				<h1>Kamu cocok di pekerjaan {searchParams.get('data')}</h1>
				<Link href={'/'}>Kembali Ke Halaman Utama</Link>
			</div>
		);
	};

	return draw ? isDraw() : notDraw();
}
