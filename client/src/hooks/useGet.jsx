import { useEffect, useState } from "react";
import Axios from 'axios';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        Axios.get(url,{signal: abortCont.signal}).then((response) => {
            if (!response.statusText == "ok") {
                throw Error('Could not get the data fot that resource');
            }
            setData(response.data);
            setIsPending(false)
        }).catch((err) => {
            if (err.name === 'CanceledError') {
                console.log(err.message+"get")
            } else {
                setError(err.message);
                setIsPending(false)
            }
            
        });

        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useGet;