import React from "react"
import getPlaylists from "../api/getPlaylists"
import { Button, CircularProgress } from "@mui/material"
import getToken from "../api/getToken"
import { useQuery } from "@tanstack/react-query"
import SpotifyPlaylists from "./SpotifyPlaylists"
import { atom } from "jotai"

const SpotifySection = ({ code }) => {
	const selectedRowsAtom = atom([])

	const tokenQuery = useQuery({
		queryKey: ["token", code],
		queryFn: async () => await getToken(code),
		enabled: Boolean(code),
	})

	const playlistQuery = useQuery({
		queryKey: ["playlists", tokenQuery?.data?.accessToken],
		queryFn: async () => await getPlaylists(tokenQuery.data.accessToken),
		enabled: Boolean(tokenQuery.isSuccess), //alternative to !!tokenQuery.isSuccess
	})

	return (
		<div>
			{tokenQuery?.isLoading ? (
				<CircularProgress />
			) : (
				playlistQuery.data && (
					<SpotifyPlaylists
						playlists={playlistQuery.data}
						loading={playlistQuery.isLoading}
						selectedRowsAtom={selectedRowsAtom}
					/>
				)
			)}
		</div>
	)
}

export default SpotifySection
