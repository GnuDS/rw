import { useState, useCallback } from 'react';

const useInputs = (initialForm) => {
    // 입력값
    const [ form, setForm ] = useState(initialForm);
    // 변경값
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value}));
    }, []);
    // 데이터 등록 후 초기화
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;