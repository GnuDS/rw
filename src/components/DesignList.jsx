
const DataDesign = ({ data }) => {
    return (
        <div>
            <b>{data.nm}</b> <span>{data.site}</span>
        </div>
    );
}

const DataDesignList = ({data}) => {
    return (
        <div>
            {data.length > 0 && data.map(d => (
                <DataDesign data={d} key={d.id} />
            ))}
        </div>
    );
}

export { DataDesignList };