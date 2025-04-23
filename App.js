import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseList from "./CourseList";
import CourseDetail from "./CourseDetail";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/" className="text-xl font-bold">E-Learning Platform</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
