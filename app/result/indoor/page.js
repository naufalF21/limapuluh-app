import Image from 'next/image';
import indoorIllustration from '@/public/indoor-illustration.svg';
import Link from 'next/link';

export default function Indoor() {
	return (
		<div className="flex flex-col items-center pb-16 md:pb-0">
			<Image src={indoorIllustration} alt="Outdoorillustration" priority={true} />
			<h1 className="mt-8 text-2xl font-bold">
				Selamat! Anda cocok untuk pekerjaan di dalam ruangan.
			</h1>
			<p className="text-center mt-5">
				Selamat! Anda cocok untuk pekerjaan indoor. Semoga Anda menemukan kesenangan dan
				kepuasan dalam menjalani karir yang berfokus di dalam ruangan. Dengan kemampuan dan
				preferensi Anda, Anda akan memiliki peluang untuk mengembangkan diri, berkolaborasi
				dengan orang lain, dan meraih kesuksesan di lingkungan kerja di dalam ruangan.
				Teruslah bersemangat dan nikmati perjalanan karir Anda yang menarik di dalam
				ruangan!
			</p>
			<Link
				href={'/'}
				className="w-full mt-8 py-3 px-12 inline-flex justify-center items-center gap-2 rounded-xl border border-transparent font-semibold bg-[#46458C] text-white hover:bg-[#46458C] focus:outline-none focus:ring-2 focus:ring-[#46458C] focus:ring-offset-2 transition-all text-base"
			>
				Tes Lagi
			</Link>
		</div>
	);
}
