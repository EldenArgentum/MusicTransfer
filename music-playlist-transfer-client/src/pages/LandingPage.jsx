import { useAtom, atom } from "jotai"
import SpotifyAuth from "../components/SpotifyAuth"
import SpotifySection from "../components/SpotifySection"

const LandingPage = () => {
	// const spotifyCodeAtom = atom()

	// const [spotifyCode, setSpotifyCode] = useAtom(spotifyCodeAtom)
	

	// if (sessionStorage.getItem("code") === null) {
		const code = new URLSearchParams(document.location.search).get("code")
		sessionStorage.setItem("code", code)
		// setSpotifyCode(code)
	// }
	

	return (
		<div
			// style={{
			// 	display: "flex",
			// 	flexDirection: "row",
			// 	alignItems: "center",
			// 	justifyContent: "center",
			// }}
		>
			{code ? <SpotifySection code={code} /> : <SpotifyAuth />}
		</div>
	)
}

export default LandingPage
