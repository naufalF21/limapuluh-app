export default function BtnAnswer({ name, onClick, disabled }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className={`w-full py-3 px-4 inline-flex justify-center text-black items-center gap-2 rounded-md border border-transparent font-semibold hover:text-white hover:bg-[#46458C] focus:outline-none focus:ring-2 focus:ring-[#46458C] focus:ring-offset-2 transition-all text-lg drop-shadow-md bg-[#D9D9D9] ${
				disabled ? 'cursor-not-allowed' : 'pointer'
			}`}
			disabled={disabled}
		>
			{name}
		</button>
	);
}
