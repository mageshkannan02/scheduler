import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes } from "@/routes";



function App() {
    return (
        <Router>
          
            <PublicRoutes />
        </Router>
    );
}

export default App;
