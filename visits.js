const getVisits = async () => {
    const kv = await Deno.openKv()
    const visits = await kv.get(["visits"])
    return visits.value ?? 0
};

const increaseVisits = async () => {
    let count = await getVisits()
    count++
    await setVisits(count)
}

const setVisits = async (count) => {
    const kv = await Deno.openKv()
    await kv.set(["visits"], count)
};

export { getVisits, increaseVisits };