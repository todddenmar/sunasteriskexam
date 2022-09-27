import React, { useState } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import { ArrowUturnLeftIcon, BeakerIcon } from "@heroicons/react/24/solid";
import IconButton from "../../components/IconButton";
import { useRouter } from "next/router";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import PrimaryButton from "../../components/PrimaryButton";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewArticle } from "../../redux/slices/currentArticlesSlice";
import ArticleCard from "../../components/ArticleCard";
import Footer from "../../components/Footer";

function CreateArticlePage() {
  const pageTitle = "Create Article Page";
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onPostArticle = () => {
    if (title === "") {
      return;
    }
    if (content === "") {
      return;
    }
    const newData = {
      id: uuidv4(),
      title: title.trim(),
      content: content.trim(),
    };
    dispatch(addNewArticle(newData));
    setTitle("");
    setContent("");
  };
  const currentArticles = useSelector((state) => state.currentArticles.value);
  return (
    <div>
      <Header title={pageTitle} />
      <body className="bg-gray-900 ">
        <Container>
          <div className="flex items-center gap-5">
            <IconButton
              Icon={<ArrowUturnLeftIcon className="h-5 w-5" />}
              onClick={() => router.push("/")}
            />
            <SectionTitle text={pageTitle} />
          </div>
          <div className="mt-5">
            <InputGroup
              label={"Title"}
              placeholder={"Add Title Here"}
              value={title}
              onChange={(val) => setTitle(val)}
            />
            <TextAreaGroup
              label={"Content"}
              placeholder="Your content here."
              value={content}
              onChange={(val) => setContent(val)}
            />
            <div className="flex justify-end">
              <PrimaryButton text={"Post"} onClick={onPostArticle} />
            </div>
          </div>
          <div className="mt-5">
            {currentArticles.length < 1 ? (
              <div className="p-5">
                <p className="mx-auto text-center">No Articles Found</p>
              </div>
            ) : (
              <ul className="grid gap-5">
                {currentArticles?.map((article) => (
                  <li key={article.id}>
                    <ArticleCard article={article} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
        <Footer />
      </body>
    </div>
  );
}

export default CreateArticlePage;
