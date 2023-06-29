import Link from 'next/link';

export default function Draw() {
	return (
		<div>
			<h1>Hasil Draw</h1>
			<Link
				href={'/'}
				className="w-full mt-10 py-3 px-12 inline-flex justify-center items-center gap-2 rounded-xl border border-transparent font-semibold bg-[#46458C] text-white hover:bg-[#46458C] focus:outline-none focus:ring-2 focus:ring-[#46458C] focus:ring-offset-2 transition-all text-xl"
			>
				Mulai Lagi
			</Link>
		</div>
	);
}
