import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '6300af3bc6mshab5b7801a1dbd0cp1309b7jsna533ff1bd3a5'
        }
    });

    return data;
}