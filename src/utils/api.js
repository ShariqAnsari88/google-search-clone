import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyCbcludrxXynEXFf-f3EwSqwsQ85oVnrhY",
    cx: "468cf60d563d34b30",
};

// cpd:
// key: 'AIzaSyDxp2L2-VG-2GiyFxAZzRuMx3tY4QhRSRo',
// cx: '01c4749516f764d9b'

// jsdev:
// key: "AIzaSyCbcludrxXynEXFf-f3EwSqwsQ85oVnrhY",
// cx: "468cf60d563d34b30",

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
