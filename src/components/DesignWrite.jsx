const DesignWrite = ({ onChange, onWrite, onReset, formData }) => {
    return (
        <div>
            <input name="nm" placeholder="사이트명" onChange={onChange} value={formData.nm} />
            <input name="site" placeholder="사이트 주소" onChange={onChange} value={formData.site} />
            <button onClick={onWrite}>등록</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}

export { DesignWrite }