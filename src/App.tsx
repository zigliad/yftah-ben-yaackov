import YiftahBenYaackov from "./YiftahBenYaackov.jpg";
import YBYLogo from "./YBYLogo.jpg";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-6">
			<img
				className="inline object-cover w-36 h-36 rounded-full"
				src={YiftahBenYaackov}
				alt="Yftah Ben Yaackov"
			/>
			<p className="text-4xl">Yftah Ben Yaackov, Lawyer</p>
			<p className="text-xl text-gray-500">
				Real Estate | Corporate Law | Commercial Law | Notarized
				Certificates
			</p>
			<img
				className="inline object-cover h-16 rounded-xl"
				src={YBYLogo}
				alt="Yftah Ben Yaackov"
			/>
		</div>
	);
}

export default App;
