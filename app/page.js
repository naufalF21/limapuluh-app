import Image from 'next/image';
import homeIllustration from '@/public/home-illustration.svg';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="pb-16">
			<div className="flex items-center w-full justify-center">
				<Image
					src={homeIllustration}
					alt="Home Illustration"
					className="w-[400px] md:-mt-16"
					priority={true}
				/>
			</div>
			<div className="flex flex-col mt-5 w-full md:justify-start md:items-start md:w-[75%]">
				<h1 className="font-bold text-3xl">
					LimaPuluhGame: Tes Preferensi Lingkungan Kerja
				</h1>
				<p className="mt-1">
					Era digital melahirkan banyak jenis pekerjaan baru dengan prospek karir yang
					menjanjikan. Sebelum terlambat, yuk cari tahu karir digital yang cocok untukmu!
				</p>
				<Link
					href={'/start'}
					className="my-6 py-3 px-12 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#46458C] text-white hover:bg-[#46458C] focus:outline-none focus:ring-2 focus:ring-[#46458C] focus:ring-offset-2 transition-all text-sm"
				>
					Mulai
				</Link>
				<div className="text-sm">
					<p>Baca panduan pengisiannya, yuk!</p>
					<ul className="list-decimal ml-5">
						<li>
							Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai
							kepribadianmu.
						</li>
						<li>Santai aja, tes ini gak diberi waktu, kok.</li>
						<li>Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.</li>
						<li>
							Jika kamu keluar di tengah tes, maka seluruh proses tes dan jawaban akan
							hilang.
						</li>
						<li>
							Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan dengan
							lengkap.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
