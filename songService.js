const listSong = async () => {
    const kv = await Deno.openKv()
    const songData = kv.list({ prefix: ["song"] })
    const song = []
    for await (let entry of songData){
        if(entry != null && entry.value != null){
            song.push(entry.value)
        }
    }
    return song
}

const addSong = async (songData) => {
    const kv = await Deno.openKv()
    await kv.set(["song", songData.name ], songData)
}

export { listSong, addSong }

