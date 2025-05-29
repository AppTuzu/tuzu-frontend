const NotFound = () => {
  return (
		<div className="pt-32 min-h-[calc(100vh-488px)] md:min-h-[calc(100vh-261px)] flex items-center justify-center bg-themeBlack">
			<div className="text-center">
				<h1 className="text-5xl font-bold mb-4 text-white">404</h1>
				<p className="text-2xl text-gray-600 mb-4">Oops! Page not found</p>
				<a href="/" className="text-blue-500 hover:text-blue-700 underline">
					Return to Home
				</a>
			</div>
		</div>
	);
}
export default NotFound