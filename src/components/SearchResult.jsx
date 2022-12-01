import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";

const SearchResult = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    useEffect(() => {
        fetchSearchResults();
    }, [query]);

    const fetchSearchResults = () => {
        setLoading(true);
        const payload = { q: query, start: 0, searchType: "image" };
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setResult(res);
            setLoading(false);
        });
    };

    return <div>SearchResult</div>;
};

export default SearchResult;
