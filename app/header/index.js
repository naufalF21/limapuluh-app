import Image from 'next/image';
import logoImage from '@/public/logo-app.svg';

export default function Header() {
	return (
		<div className="flex mt-2 -ml-5 justify-center md:justify-start md:mt-5">
			<Image src={logoImage} alt="Logo App" className="w-[250px]" priority={true} />
		</div>
	);
}
