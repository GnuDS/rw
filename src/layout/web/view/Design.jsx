import { useState } from "react";
import { DataDesignList } from "../../../components/DesignList";
import { DesignWrite } from "../../../components/DesignWrite";
import { DesignData } from "../../../model/DesignData";

const Design = () => {

    const [ designData, setDesignData ] = useState(DesignData);
    const [ formData, setFormData ] = useState({
        'nm': '',
        'site': ''
    });

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onReset = () => {
        setFormData({'nm': '', 'site': ''});
    };

    const onWrite = () => {
        if(!formData.nm) {
            alert('사이트명을 입력해주세요.');
        } else if(!formData.site) {
            alert('사이트 주소를 입력해주세요.');
        }

        const addData = {
            ...formData,
            id: designData.length + 1
        };

        setDesignData([
            ...designData,
            addData
        ]);
    }

    return (
        <div>
            <h2>Design</h2>
            <br></br>
            <DesignWrite onChange={onChange} onWrite={onWrite} onReset={onReset} formData={formData} />
            <DataDesignList data={designData} />
        </div>
    );

};

export { Design };