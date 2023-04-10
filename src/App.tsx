import React, { useState } from "react";
import ProjectList from "./ProjectList";
import { Project } from "./types";

function App() {
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState<Project | undefined>(
        undefined
    );

    return (
        <div className="relative overflow-x-hidden overflow-y-hidden px-64 flex space-x-4 items-center justify-center w-screen h-screen max-w-screen max-h-screen">
            {/*{showAddPopup && <AddProjectPopup />}*/}
            {/*{showUpdatePopup && (*/}
            {/*    <UpdateProjectPopup project={showUpdatePopup} />*/}
            {/*)}*/}
            <ProjectList
                showAddProjectPopup={setShowAddPopup}
                showUpdateProjectPopup={setShowUpdatePopup}
            />
        </div>
    );
}

export default App;
