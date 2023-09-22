import UserDetails from "../pages/UserDetails.jsx";
import EducationDetails from "../pages/EducationDetails.jsx";
import HealthDetails from "../pages/HealthDetails.jsx";

export const getRegistrationFlow = () => {
    return {
        registrationPages: [
            {
                Index: 1,
                Component: UserDetails,
            },
            {
                Index: 2,
                Component: EducationDetails,
            },
            {
                Index: 3,
                Component: HealthDetails,
            }
        ]
    }
}