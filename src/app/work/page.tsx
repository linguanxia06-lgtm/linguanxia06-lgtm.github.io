import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">
        Works
      </h1>
      <ProjectGrid showAll={true} />
    </div>
  );
}
