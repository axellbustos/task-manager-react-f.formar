import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgetPassword } from "./pages/ForgetPassword";
import { RecoverPassword } from "./pages/RecoverPassword";
import { ConfirmAccount } from "./pages/ConfirmAccount";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/authProvider";
import { ProjectsProvider } from "./context/ProjectsProvider";
import { ProtectedLayout } from "./layouts/PotectedLayout";
import { Projects } from "./pages/Projects";
import { ProjectAdd } from "./pages/ProjectAdd";
import { Project } from "./pages/Project";
import { ProjectEdit } from "./pages/ProjectEdit";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectsProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="resetPassword/:token" element={<RecoverPassword />}/>
              <Route path="confirm/:token" element={<ConfirmAccount />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
            <Route path="/projects" element={<ProtectedLayout />}>
              <Route index element={<Projects />} />
              <Route path="createProject" element={<ProjectAdd />} />
              <Route path="editProject/:id" element={<ProjectEdit />} />
              <Route path=":id" element={<Project />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
