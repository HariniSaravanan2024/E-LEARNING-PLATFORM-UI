import { useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const courses = [
  { id: 1, title: "React for Beginners", progress: 40, video: "https://www.youtube.com/embed/dGcsHMXbSOA" },
  { id: 2, title: "Advanced JavaScript", progress: 70, video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
  { id: 3, title: "Python Data Science", progress: 20, video: "https://www.youtube.com/embed/rfscVS0vtbw" },
];

function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <Progress value={course.progress} className="my-2" />
      <iframe className="w-full h-64 md:h-96" src={course.video} title={course.title} allowFullScreen></iframe>
    </div>
  );
}

export default CourseDetail;
