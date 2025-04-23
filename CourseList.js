import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const courses = [
  { id: 1, title: "React for Beginners", progress: 40 },
  { id: 2, title: "Advanced JavaScript", progress: 70 },
  { id: 3, title: "Python Data Science", progress: 20 },
];

function CourseList() {
  return (
    <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div key={course.id} className="p-4 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <Progress value={course.progress} className="my-2" />
          <Link to={`/course/${course.id}`}>
            <Button>View Course</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
