import { useState } from "react";

export const useCounter = (initialValue = 100) => {
    const [count, serCount] = useState(initialValue)

    function inc() {
        serCount(count + 1)
    }

    function dec() {
        serCount(count - 1)
    }

    return [count, inc, dec]
}