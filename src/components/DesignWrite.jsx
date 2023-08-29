import React from "react";

const DesignWrite = ({ nm, site, onChange, onWrite, onReset }) => {
    return (
        <div>
            <input name="nm" placeholder="사이트명" onChange={onChange} value={nm} />
            <input name="site" placeholder="사이트 주소" onChange={onChange} value={site} />
            <button onClick={onWrite}>등록</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}

export default React.memo(DesignWrite);