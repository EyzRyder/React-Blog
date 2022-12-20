import { useEffect, useState } from "react";
import Axios from 'axios';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        Axios.get(url).then((response) => {
            if (!response.statusText == "ok") {
                throw Error('Could not get the data fot that resource');
            }
            setData(response.data);
            setIsPending(false)
        }).catch((err) => {
            setError(err.message);
            setIsPending(false)

        });
    }, [url]);
    return { data, isPending, error }
}

export default useGet;