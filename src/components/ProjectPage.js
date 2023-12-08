import { PageTitle } from "./PageTitle";
import { ProjectCard } from "./ProjectCard";
import { Search } from "./Search";
import { data } from "./mockData";

export const ProjectPage = () => {
  return (
    <>
      <PageTitle title={"Projects"} />
      <Search />
      <div class="container">
        {data?.map((item) => {
          return (
            <div class="box">
              <ProjectCard info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
