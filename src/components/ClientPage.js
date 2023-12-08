import { ClientCard } from "./ClientCard";
import { PageTitle } from "./PageTitle";
import { Search } from "./Search";
import { clientData } from "./mockData";

export const ClientPage = () => {
  return (
    <>
      <PageTitle title={"Clients"} />
      <Search />
      <div class="container">
        {clientData?.map((item) => {
          return (
            <div class="box">
              <ClientCard info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
