import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import AddActorPopup from "./popups/AddActorPopup";
import AddExigencePopup from "./popups/AddExigencePopup";
import AddFluxPopup from "./popups/AddFluxPopup";
import AddProjectPopup from "./popups/AddProjectPopup";
import AddReglePopup from "./popups/AddReglePopup";
import UpdateProjectPopup from "./popups/UpdateProjectPopup";
import ProjectList from "./ProjectList";
import SignUpScreen from "./SignUpScreen";
import { Project } from "./types";

function App() {
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState<Project | undefined>(undefined);
    const [showAddActorPopup, setShowAddActorPopup] = useState<boolean>(false);
    const [showAddFluxPopup, setShowAddFluxPopup] = useState<boolean>(false);
    const [showAddExigencePopup, setShowAddExigencePopup] = useState<boolean>(false);
    const [showAddReglePopup, setShowAddReglePopup] = useState<boolean>(false);
    const [userId, setUserId] = useState("");
    const [showLoginScreen, setShowLoginScreen] = useState(false);

    return (
        <div className="relative overflow-x-hidden px-64 flex space-x-4 items-center justify-center w-screen min-h-screen max-w-screen">
            {showAddPopup && <AddProjectPopup userId={userId} showAddPopup={setShowAddPopup} />}
            {showUpdatePopup && <UpdateProjectPopup project={showUpdatePopup} 
                showUpdatePopup={setShowUpdatePopup} 
                showAddActorPopup={setShowAddActorPopup}
                showAddFluxPopup={setShowAddFluxPopup}
                showAddReglePopup={setShowAddReglePopup}
                showAddExigencePopup={setShowAddExigencePopup}
                />}
            {showAddActorPopup && <AddActorPopup showAddPopup={setShowAddActorPopup}/>}
            {showAddFluxPopup && <AddFluxPopup showAddPopup={setShowAddFluxPopup}/>}
            {showAddExigencePopup && <AddExigencePopup showAddPopup={setShowAddExigencePopup}/>}
            {showAddReglePopup && <AddReglePopup showAddPopup={setShowAddReglePopup}/>}
            { userId !== "" ? <ProjectList
                showAddProjectPopup={setShowAddPopup}
                showUpdateProjectPopup={setShowUpdatePopup}
            /> : showLoginScreen ? <LoginScreen setUserId={setUserId} setShowLoginScreen={setShowLoginScreen}/> : <SignUpScreen setUserId={setUserId} setShowLoginScreen={setShowLoginScreen}/> }
        </div>
    );
}

export default App;
