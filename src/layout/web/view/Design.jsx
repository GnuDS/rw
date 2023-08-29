import { useRef, useMemo, useCallback, useReducer } from "react";
import DataDesignList from "../../../components/DesignList";
import DesignWrite from "../../../components/DesignWrite";
import { DesignData } from "../../../reducers/DesignData";
import useInputs from "../../../hooks/useInputs";

const initialState = {
    designData: DesignData
};

const countActiveData = (data) => {
    return data.filter(d => d.active).length;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_DESIGN':
            return {
                designData: state.designData.concat(action.data)
            };
        case 'TOGGLE_DATA':
            return {
                designData: state.designData.map(d =>
                    d.id === action.id ? { ...d, active: !d.active } : d
                )
            };
        case 'REMOVE_DATA':
            return {
                designData: state.designData.filter(d => d.id !== action.id)
            };
        default:
            return state;
    }
}

const Design = () => {

    const [ { nm, site }, onChange, reset ] = useInputs({
        nm: '',
        site: ''
    });

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const nextId = useRef(3);
    const { designData } = state;

    const onWrite = useCallback(() => {
        dispatch({
            type: 'CREATE_DESIGN',
            data: {
                id: nextId.current,
                nm,
                site
            }
        });
        reset();
        nextId.current += 1;
    }, [nm, site, reset]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_DATA',
            id
        });
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_DATA',
            id
        });
    }, []);

    const onReset = useCallback(() => {
        reset();
    }, [reset]);

    const count = useMemo(() => countActiveData(designData), [designData]);

    return (
        <div>
            <h2>Design</h2>
            <br></br>
            <DesignWrite nm={nm} site={site} onChange={onChange} onWrite={onWrite} onReset={onReset} />
            <div>활성 디자인 수 : {count} </div>
            <DataDesignList data={designData} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );

};

export { Design };