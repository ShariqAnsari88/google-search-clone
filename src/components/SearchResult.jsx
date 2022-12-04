import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "./Pagination";

const SearchResult = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const { query, startIndex } = useParams();
    console.log(useParams());

    useEffect(() => {
        fetchSearchResults();
    }, [query, startIndex]);

    const fetchSearchResults = () => {
        setLoading(true);
        // const payload = { q: query, start: 0, searchType: "image" };
        const payload = { q: query, start: startIndex };
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setResult(res);
            setLoading(false);
        });
    };

    if (!result) return;
    const { items, queries, searchInformation } = result;

    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                <div className="flex text-sm text-[#70757a] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
                {items.map((item, index) => (
                    <SearchedItemTemplate key={index} data={item} />
                ))}
                <Pagination
                    queries={queries}
                    // fetchSearchResults={fetchSearchResults}
                />
            </main>
            <Footer />
        </div>
    );
};

export default SearchResult;
