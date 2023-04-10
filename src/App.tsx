import React, { useState } from "react";
import AddActorPopup from "./popups/AddActorPopup";
import AddProjectPopup from "./popups/AddProjectPopup";
import UpdateProjectPopup from "./popups/UpdateProjectPopup";
import ProjectList from "./ProjectList";
import { Project } from "./types";

function App() {
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState<Project | undefined>(undefined);
    const [showAddActorPopup, setShowAddActorPopup] = useState<boolean>(false);

    return (
        <div className="relative overflow-x-hidden px-64 flex space-x-4 items-center justify-center w-screen min-h-screen max-w-screen">
            {showAddPopup && <AddProjectPopup showAddPopup={setShowAddPopup} />}
            {showUpdatePopup && <UpdateProjectPopup project={showUpdatePopup} showAddPopup={setShowAddPopup} showAddActorPopup={setShowAddActorPopup}/>}
            {showAddActorPopup && <AddActorPopup showAddPopup={setShowAddActorPopup}/>}
            <ProjectList
                showAddProjectPopup={setShowAddPopup}
                showUpdateProjectPopup={setShowUpdatePopup}
            />
        </div>
    );
}

export default App;
