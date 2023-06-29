export default function ProgressBar({ progress }) {
	return (
		<div className="flex w-full h-10 bg-gray-200 rounded-full overflow-hidden">
			<div
				className={`
					flex flex-col justify-center items-center overflow-hidden text-base text-center ${
						progress === '0%' ? 'bg-[#E5E7EB] text-black' : 'bg-[#46458C] text-white'
					}`}
				role="progressbar"
				style={progress === '0%' ? { width: '100%' } : { width: progress }}
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				{progress}
			</div>
		</div>
	);
}
