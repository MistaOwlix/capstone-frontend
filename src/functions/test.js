export const getTest = async () => {
    try{
        const res = await fetch("https://aepcapstonebackend-7fcb68af4557.herokuapp.com", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return await res.json();
    } catch (err) {}
};