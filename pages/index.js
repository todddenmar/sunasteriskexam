import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const title = "Sun* Coding exam";
  const router = useRouter();
  const onCreateNewArticle = () => {
    router.push("/create-article");
  };
  const currentArticles = useSelector((state) => state.currentArticles.value);
  return (
    <div>
      <Header title={"CRUD EXAM"} />
      <div>
        <Container>
          <div className="h-[100vh] flex flex-col flex-1 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <SectionTitle text={title} />
              <div>
                <PrimaryButton
                  text={"Create New Article"}
                  onClick={onCreateNewArticle}
                />
              </div>
            </div>
            {currentArticles.length < 1 ? (
              <div className="p-5">
                <p className="mx-auto text-center">No Articles Found</p>
              </div>
            ) : (
              <ul className="grid gap-5 py-5">
                {currentArticles?.map((article) => (
                  <li key={article.id}>
                    <ArticleCard article={article} readOnly />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
