import Image from 'next/image';
import outdoorIllustration from '@/public/outdoor-illustration.svg';
import Link from 'next/link';

export default function Outdoor() {
	return (
		<div className="flex flex-col items-center pb-16 md:pb-0">
			<Image src={outdoorIllustration} alt="Outdoorillustration" priority={true} />
			<h1 className="mt-8 text-2xl font-bold">
				Selamat! Anda cocok untuk pekerjaan di luar ruangan.
			</h1>
			<p className="text-center mt-5">
				Semoga Anda menemukan kepuasan dan kebahagiaan dalam menjalani karir yang melibatkan
				lingkungan luar ruangan. Semoga perjalanan Anda di dunia pekerjaan di luar ruangan
				penuh dengan kesuksesan dan pengalaman yang tak terlupakan. Tetap semangat dan
				nikmati petualangan Anda di alam terbuka!
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
