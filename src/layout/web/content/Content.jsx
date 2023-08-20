import { Design } from "../view/Design";
import { Publisher } from "../view/Publisher";
import { Front } from "../view/Front";
import { Dev } from "../view/Dev";
import { Database } from "../view/Database";
import { Mobile } from "../view/Mobile";
import { DevOpt } from "../view/DevOpt";
import { Server } from "../view/Server";
import { Tool } from "../view/Tool";

const viewMap = {
    'Design': Design,
    'Publisher': Publisher,
    'Front': Front,
    'Dev': Dev,
    'Database': Database,
    'Mobile': Mobile,
    'DevOpt': DevOpt,
    'Server': Server,
    'Tool': Tool
}

const Content = ({ selectMenu }) => {
    const ContentToRender = selectMenu ? viewMap[selectMenu] : () => { return <div><h2>Content</h2></div> };
    return (
        <>
            <ContentToRender/>
        </>
    );
};

export { Content };