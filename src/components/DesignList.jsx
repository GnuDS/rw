import React, { useEffect } from "react";

const DataDesign = ({ data, onRemove, onToggle }) => {
    useEffect(() => {
        return () => {
        };
    }, [data]);

    return (
        <div>
            <b style={{
            cursor: 'pointer',
            color: data.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(data.id)}>{data.nm}</b> <span>{data.site}</span><button onClick={() => onRemove(data.id)}>삭제</button>
        </div>
    );
}

const DataDesignList = ({ data, onRemove, onToggle }) => {
    return (
        <div>
            {data.length > 0 && data.map(d => (
                <DataDesign data={d} key={d.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default React.memo(DataDesignList);